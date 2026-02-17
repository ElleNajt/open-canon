"""
Evolve music through different AI models.

Usage:
  python evolve.py                          # default seed, "default" experiment
  python evolve.py --seed path/to/file.js   # custom seed file
  python evolve.py --seed "code here"       # inline seed code
  python evolve.py --name bach_canon01      # experiment name (output subdir)
  python evolve.py --steps 50              # number of steps
  python evolve.py --resume                 # continue from where each model left off

Each model starts from the same seed and evolves independently.
Validates syntax with Strudel's parser (acorn) and retries on errors.
"""

import argparse
import asyncio
import os
import subprocess
import time

import anthropic
import httpx

DEFAULT_SEED = '$: s("bd sn bd sn")'
MAX_FIX_ATTEMPTS = 2

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
STRUDEL_DIR = os.path.join(SCRIPT_DIR, "..", "..", "strudel")

SYSTEM_PROMPT = open(os.path.join(SCRIPT_DIR, "system_prompt.txt")).read()

ANTHROPIC_API_KEY = os.environ.get("ANTHROPIC_API_KEY") or None
OPENROUTER_API_KEY = os.environ.get("OPENROUTER_API_KEY") or None

MODELS = {
    "claude": {
        "provider": "anthropic",
        "model": "claude-sonnet-4-20250514",
    },
    "gpt": {
        "provider": "openrouter",
        "model": "openai/gpt-4o",
    },
    "gemini": {
        "provider": "openrouter",
        "model": "google/gemini-2.0-flash-001",
    },
    "grok": {
        "provider": "openrouter",
        "model": "x-ai/grok-4-fast",
    },
}


def strip_markdown_fences(code: str) -> str:
    if code.startswith("```"):
        lines = code.split("\n")
        return "\n".join(lines[1:-1] if lines[-1] == "```" else lines[1:])
    return code


VALIDATE_JS = """\
(async () => {
  const { evaluate } = await import('@strudel/transpiler');
  const { evalScope, Pattern } = await import('@strudel/core');
  await evalScope(import('@strudel/core'), import('@strudel/mini'), import('@strudel/tonal'));
  Pattern.prototype.p = function() { return this; };
  try {
    await evaluate(process.argv[1]);
    process.exit(0);
  } catch(e) {
    process.stdout.write(e.message);
    process.exit(1);
  }
})();
"""


def validate_syntax(code: str) -> str | None:
    """Validates with Strudel transpiler + runtime. Returns None if valid, error string if invalid."""
    result = subprocess.run(
        ["node", "-e", VALIDATE_JS, code],
        capture_output=True,
        text=True,
        cwd=STRUDEL_DIR,
    )
    # stderr has Strudel loading noise ("🌀 @strudel/core loaded 🌀"), ignore it
    if result.returncode == 0:
        return None
    return result.stdout or "Unknown error"


async def call_model(config: dict, system: str, user_msg: str) -> str:
    if config["provider"] == "anthropic":
        client = anthropic.AsyncAnthropic(api_key=ANTHROPIC_API_KEY)
        response = await client.messages.create(
            model=config["model"],
            max_tokens=16384,
            system=system,
            messages=[{"role": "user", "content": user_msg}],
        )
        return strip_markdown_fences(response.content[0].text.strip())
    else:
        async with httpx.AsyncClient() as client:
            response = await client.post(
                "https://openrouter.ai/api/v1/chat/completions",
                headers={
                    "Authorization": f"Bearer {OPENROUTER_API_KEY}",
                    "Content-Type": "application/json",
                },
                json={
                    "model": config["model"],
                    "max_tokens": 16384,
                    "messages": [
                        {"role": "system", "content": system},
                        {"role": "user", "content": user_msg},
                    ],
                },
                timeout=120,
            )
            data = response.json()
            if "error" in data:
                raise Exception(f"OpenRouter error: {data['error']}")
            return strip_markdown_fences(
                data["choices"][0]["message"]["content"].strip()
            )


def find_latest_step(model_dir: str, seed: str) -> tuple[int, str]:
    """Find the highest step number and its code in a model's output dir."""
    if not os.path.exists(model_dir):
        return 0, seed
    files = sorted(
        f for f in os.listdir(model_dir) if f.startswith("step_") and f.endswith(".js")
    )
    if not files:
        return 0, seed
    latest = files[-1]
    step_num = int(latest.replace("step_", "").replace(".js", ""))
    with open(os.path.join(model_dir, latest)) as f:
        code = f.read()
    return step_num, code


async def evolve_model(
    name: str, config: dict, output_dir: str, seed: str, steps: int, resume: bool
):
    model_dir = os.path.join(output_dir, name)
    os.makedirs(model_dir, exist_ok=True)

    if resume:
        start_step, code = find_latest_step(model_dir, seed)
    else:
        start_step, code = 0, seed

    if start_step == 0:
        with open(os.path.join(model_dir, "step_00.js"), "w") as f:
            f.write(code)

    if start_step >= steps:
        print(f"[{name}] Already at step {start_step}, nothing to do")
        return

    if start_step > 0:
        print(f"[{name}] Resuming from step {start_step}")

    for step in range(start_step + 1, steps + 1):
        user_msg = f"Current code:\n{code}\n\nRequest: Evolve this according to your preferences"

        print(f"[{name}] Step {step}/{steps}...", flush=True)
        t0 = time.time()

        new_code = await call_model(config, SYSTEM_PROMPT, user_msg)

        # Validate syntax and retry if needed
        error = validate_syntax(new_code)
        if error:
            for attempt in range(MAX_FIX_ATTEMPTS):
                print(
                    f"[{name}] Step {step} syntax error: {error} (fix attempt {attempt + 1})",
                    flush=True,
                )
                fix_msg = f"Current code:\n{new_code}\n\nThis code has a syntax error: {error}\nFix the syntax error and return the corrected code."
                new_code = await call_model(config, SYSTEM_PROMPT, fix_msg)
                error = validate_syntax(new_code)
                if not error:
                    break

        if error:
            print(
                f"[{name}] Step {step} STILL has syntax error after {MAX_FIX_ATTEMPTS} fixes, keeping previous code",
                flush=True,
            )
            with open(os.path.join(model_dir, f"step_{step:02d}.js"), "w") as f:
                f.write(code)
            continue

        code = new_code
        elapsed = time.time() - t0
        print(
            f"[{name}] Step {step} done ({elapsed:.1f}s, {len(code)} chars)", flush=True
        )

        with open(os.path.join(model_dir, f"step_{step:02d}.js"), "w") as f:
            f.write(code)

    print(f"[{name}] Complete! Steps saved to {model_dir}/")


def load_seed(seed_arg: str | None) -> str:
    if seed_arg is None:
        return DEFAULT_SEED
    if os.path.isfile(seed_arg):
        with open(seed_arg) as f:
            return f.read()
    return seed_arg


async def main():
    parser = argparse.ArgumentParser(description="Evolve music through AI models")
    parser.add_argument("--seed", help="Seed code or path to seed file")
    parser.add_argument(
        "--name", default="default", help="Experiment name (output subdirectory)"
    )
    parser.add_argument(
        "--steps", type=int, default=100, help="Number of evolution steps"
    )
    parser.add_argument("--resume", action="store_true", help="Resume from latest step")
    args = parser.parse_args()

    seed = load_seed(args.seed)
    output_dir = os.path.join(SCRIPT_DIR, "output", args.name)
    os.makedirs(output_dir, exist_ok=True)

    print(f"Experiment: {args.name}")
    print(f"Steps: {args.steps}")
    print(f"Seed: {seed[:80]}{'...' if len(seed) > 80 else ''}")
    print(f"Output: {output_dir}")
    print()

    tasks = [
        evolve_model(name, config, output_dir, seed, args.steps, args.resume)
        for name, config in MODELS.items()
    ]
    results = await asyncio.gather(*tasks, return_exceptions=True)

    for (name, _), result in zip(MODELS.items(), results):
        if isinstance(result, Exception):
            print(f"[{name}] FAILED: {result}")

    print(f"\nDone! Results in {output_dir}")


if __name__ == "__main__":
    asyncio.run(main())
