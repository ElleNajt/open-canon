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
import hashlib
import json
import os
import subprocess
import time

import dotenv

dotenv.load_dotenv(
    os.path.join(os.path.dirname(__file__), "..", "..", ".env"), override=True
)

import anthropic
import httpx

DEFAULT_SEED = '$: s("bd sn bd sn")'
DEFAULT_ITERATION_PROMPT = """Evolve this piece. Imbue it with your personality. Make a musical choice: rewrite a melody, change the harmony, swap a rhythm, drop a track and add something unexpected, shift the mood. Be bold — a listener should hear something new each step, not just a knob tweak. Think like a composer writing variations, not an engineer adjusting a mix.

Technical limits: .slow()/.fast() 1-16, .gain() above 0.05, filter Q (.lpq etc) below 10."""
MAX_FIX_ATTEMPTS = 5

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
STRUDEL_DIR = os.path.join(SCRIPT_DIR, "..", "..", "strudel")

SYSTEM_PROMPT = open(os.path.join(SCRIPT_DIR, "system_prompt.txt")).read()


def prompt_hash(prompt: str, system_prompt: str) -> str:
    combined = prompt + "\n---\n" + system_prompt
    return hashlib.sha256(combined.encode()).hexdigest()[:8]


ANTHROPIC_API_KEY = os.environ.get("ANTHROPIC_API_KEY") or None
OPENROUTER_API_KEY = os.environ.get("OPENROUTER_API_KEY") or None

MODELS = {
    "claude": {
        "provider": "anthropic",
        "model": "claude-opus-4-5-20251101",
    },
    "gpt": {
        "provider": "openrouter",
        "model": "openai/gpt-5.2",
    },
    "gemini": {
        "provider": "openrouter",
        "model": "google/gemini-2.5-pro",
    },
    "grok": {
        "provider": "openrouter",
        "model": "x-ai/grok-4.1-fast",
    },
    "gpt4o": {
        "provider": "openrouter",
        "model": "openai/gpt-4o",
    },
    "haiku3": {
        "provider": "openrouter",
        "model": "anthropic/claude-3-haiku",
    },
    "haiku4": {
        "provider": "openrouter",
        "model": "anthropic/claude-haiku-4.5",
    },
    "gemini_flash": {
        "provider": "openrouter",
        "model": "google/gemini-2.5-flash",
    },
    "kimi": {
        "provider": "openrouter",
        "model": "moonshotai/kimi-k2.5-0127",
    },
    "qwen": {
        "provider": "openrouter",
        "model": "qwen/qwen3.5-plus-02-15",
    },
}


def strip_markdown_fences(code: str) -> str:
    if code.startswith("```"):
        lines = code.split("\n")
        return "\n".join(lines[1:-1] if lines[-1] == "```" else lines[1:])
    return code


VALIDATE_JS = open(os.path.join(os.path.dirname(__file__), "validate.js")).read()


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
    name: str,
    config: dict,
    output_dir: str,
    seed: str,
    steps: int,
    resume: bool,
    iteration_prompt: str = DEFAULT_ITERATION_PROMPT,
    pin_original: bool = False,
    milestone_interval: int = 0,
    recent_count: int = 0,
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

    # Load history if resuming
    milestones = {}
    recent = []  # list of (step_num, code) tuples
    if start_step > 0:
        for f in sorted(os.listdir(model_dir)):
            if f.startswith("step_") and f.endswith(".js"):
                n = int(f.replace("step_", "").replace(".js", ""))
                if n > 0 and n <= start_step:
                    with open(os.path.join(model_dir, f)) as fh:
                        step_code = fh.read()
                    if milestone_interval > 0 and n % milestone_interval == 0:
                        milestones[n] = step_code
                    if recent_count > 0:
                        recent.append((n, step_code))
                        recent = recent[-recent_count:]

    for step in range(start_step + 1, steps + 1):
        parts = []
        if pin_original:
            parts.append(f"Original theme:\n{seed}")
        if milestones:
            parts.append("Previous variations:")
            for ms_step in sorted(milestones):
                parts.append(f"--- Step {ms_step} ---\n{milestones[ms_step]}")
        if recent:
            parts.append("Recent steps:")
            for rs_step, rs_code in recent:
                parts.append(f"--- Step {rs_step} ---\n{rs_code}")
        parts.append(f"Current code:\n{code}")
        parts.append(f"Request: {iteration_prompt}")
        user_msg = "\n\n".join(parts)

        print(f"[{name}] Step {step}/{steps}...", flush=True)
        t0 = time.time()

        new_code = await call_model(config, SYSTEM_PROMPT, user_msg)

        # Reject if output collapsed (less than 20% of previous code)
        if len(new_code) < len(code) * 0.2:
            print(
                f"[{name}] Step {step} collapsed ({len(new_code)} chars vs {len(code)}), keeping previous code",
                flush=True,
            )
            with open(os.path.join(model_dir, f"step_{step:02d}.js"), "w") as f:
                f.write(code)
            continue

        # Validate syntax and retry from scratch if needed
        error = validate_syntax(new_code)
        if error:
            for attempt in range(MAX_FIX_ATTEMPTS):
                print(
                    f"[{name}] Step {step} syntax error: {error} (retry {attempt + 1}/{MAX_FIX_ATTEMPTS})",
                    flush=True,
                )
                new_code = await call_model(config, SYSTEM_PROMPT, user_msg)
                if len(new_code) < len(code) * 0.2:
                    continue
                error = validate_syntax(new_code)
                if not error:
                    break

        if error:
            print(
                f"[{name}] Step {step} STILL failing after {MAX_FIX_ATTEMPTS} retries, keeping previous code",
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

        if milestone_interval > 0 and step % milestone_interval == 0:
            milestones[step] = code
        if recent_count > 0:
            recent.append((step, code))
            recent = recent[-recent_count:]

    print(f"[{name}] Complete! Steps saved to {model_dir}/")


async def evolve_alternating(
    models: dict,
    output_dir: str,
    seed: str,
    steps: int,
    resume: bool,
    iteration_prompt: str = DEFAULT_ITERATION_PROMPT,
    pin_original: bool = False,
    milestone_interval: int = 0,
    recent_count: int = 0,
):
    """Evolve by alternating between models each step."""
    model_names = list(models.keys())
    dir_name = "_".join(model_names) + "_alternate"
    model_dir = os.path.join(output_dir, dir_name)
    os.makedirs(model_dir, exist_ok=True)

    if resume:
        start_step, code = find_latest_step(model_dir, seed)
    else:
        start_step, code = 0, seed

    if start_step == 0:
        with open(os.path.join(model_dir, "step_00.js"), "w") as f:
            f.write(code)

    if start_step >= steps:
        print(f"[alternate] Already at step {start_step}, nothing to do")
        return

    if start_step > 0:
        print(f"[alternate] Resuming from step {start_step}")

    # Load history if resuming
    milestones = {}
    recent = []
    if start_step > 0:
        for f in sorted(os.listdir(model_dir)):
            if f.startswith("step_") and f.endswith(".js"):
                n = int(f.replace("step_", "").replace(".js", ""))
                if n > 0 and n <= start_step:
                    with open(os.path.join(model_dir, f)) as fh:
                        step_code = fh.read()
                    if milestone_interval > 0 and n % milestone_interval == 0:
                        milestones[n] = step_code
                    if recent_count > 0:
                        recent.append((n, step_code))
                        recent = recent[-recent_count:]

    for step in range(start_step + 1, steps + 1):
        # Cycle through models
        model_name = model_names[(step - 1) % len(model_names)]
        config = models[model_name]

        parts = []
        if pin_original:
            parts.append(f"Original theme:\n{seed}")
        if milestones:
            parts.append("Previous variations:")
            for ms_step in sorted(milestones):
                parts.append(f"--- Step {ms_step} ---\n{milestones[ms_step]}")
        if recent:
            parts.append("Recent steps:")
            for rs_step, rs_code in recent:
                parts.append(f"--- Step {rs_step} ---\n{rs_code}")
        parts.append(f"Current code:\n{code}")
        parts.append(f"Request: {iteration_prompt}")
        user_msg = "\n\n".join(parts)

        print(f"[alternate/{model_name}] Step {step}/{steps}...", flush=True)
        t0 = time.time()

        new_code = await call_model(config, SYSTEM_PROMPT, user_msg)

        # Reject if output collapsed
        if len(new_code) < len(code) * 0.2:
            print(
                f"[alternate/{model_name}] Step {step} collapsed ({len(new_code)} chars vs {len(code)}), keeping previous code",
                flush=True,
            )
            with open(os.path.join(model_dir, f"step_{step:02d}.js"), "w") as f:
                f.write(code)
            with open(os.path.join(model_dir, f"step_{step:02d}.model"), "w") as f:
                f.write(model_name)
            continue

        # Validate syntax and retry
        error = validate_syntax(new_code)
        if error:
            for attempt in range(MAX_FIX_ATTEMPTS):
                print(
                    f"[alternate/{model_name}] Step {step} syntax error: {error} (retry {attempt + 1}/{MAX_FIX_ATTEMPTS})",
                    flush=True,
                )
                new_code = await call_model(config, SYSTEM_PROMPT, user_msg)
                if len(new_code) < len(code) * 0.2:
                    continue
                error = validate_syntax(new_code)
                if not error:
                    break

        if error:
            print(
                f"[alternate/{model_name}] Step {step} STILL failing after {MAX_FIX_ATTEMPTS} retries, keeping previous code",
                flush=True,
            )
            with open(os.path.join(model_dir, f"step_{step:02d}.js"), "w") as f:
                f.write(code)
            with open(os.path.join(model_dir, f"step_{step:02d}.model"), "w") as f:
                f.write(model_name)
            continue

        code = new_code
        elapsed = time.time() - t0
        print(
            f"[alternate/{model_name}] Step {step} done ({elapsed:.1f}s, {len(code)} chars)",
            flush=True,
        )

        with open(os.path.join(model_dir, f"step_{step:02d}.js"), "w") as f:
            f.write(code)
        with open(os.path.join(model_dir, f"step_{step:02d}.model"), "w") as f:
            f.write(model_name)

        if milestone_interval > 0 and step % milestone_interval == 0:
            milestones[step] = code
        if recent_count > 0:
            recent.append((step, code))
            recent = recent[-recent_count:]

    print(f"[alternate] Complete! Steps saved to {model_dir}/")


def load_seed(seed_arg: str | None) -> str:
    if seed_arg is None:
        return DEFAULT_SEED
    # Try as-is, then relative to script dir
    for path in [seed_arg, os.path.join(SCRIPT_DIR, seed_arg)]:
        if os.path.isfile(path):
            with open(path) as f:
                return f.read()
    return seed_arg


async def main():
    parser = argparse.ArgumentParser(description="Evolve music through AI models")
    parser.add_argument("--seed", help="Seed code or path to seed file")
    parser.add_argument(
        "--name", default="default", help="Experiment name (output subdirectory)"
    )
    parser.add_argument(
        "--dir",
        help="Resume from an existing experiment directory (reads config.json from it)",
    )
    parser.add_argument(
        "--prompt",
        default=DEFAULT_ITERATION_PROMPT,
        help="Iteration prompt sent each step (default: 'Evolve this according to your preferences')",
    )
    parser.add_argument(
        "--steps", type=int, default=100, help="Number of evolution steps"
    )
    parser.add_argument("--resume", action="store_true", help="Resume from latest step")
    parser.add_argument(
        "--models",
        help="Comma-separated list of models to run (default: all)",
    )
    parser.add_argument(
        "--pin-original",
        action="store_true",
        help="Include the original seed in every prompt so the model remembers the theme",
    )
    parser.add_argument(
        "--milestones",
        type=int,
        default=0,
        metavar="N",
        help="Include every Nth step in the prompt as variation history (e.g. --milestones 5)",
    )
    parser.add_argument(
        "--recent",
        type=int,
        default=0,
        metavar="M",
        help="Include the last M steps in the prompt as recent history (e.g. --recent 3)",
    )
    parser.add_argument(
        "--alternate",
        action="store_true",
        help="Alternate between models each step instead of evolving independently",
    )
    args = parser.parse_args()

    if args.dir:
        # Resume from existing experiment directory
        output_dir = args.dir
        if not os.path.isabs(output_dir):
            output_dir = os.path.join(SCRIPT_DIR, output_dir)
        config_path = os.path.join(output_dir, "config.json")
        with open(config_path) as f:
            saved = json.load(f)
        seed = load_seed(saved.get("seed")) or DEFAULT_SEED
        iteration_prompt = (
            args.prompt if args.prompt != DEFAULT_ITERATION_PROMPT else saved["prompt"]
        )
        steps = args.steps if args.steps != 100 else saved.get("steps", 100)
        experiment_name = os.path.basename(output_dir)
        args.resume = True
        if not args.alternate:
            args.alternate = saved.get("alternate", False)
        if args.models:
            selected = [m.strip() for m in args.models.split(",")]
            models = {k: MODELS[k] for k in selected if k in MODELS}
        else:
            models = {k: MODELS[k] for k in saved.get("models", {}) if k in MODELS}
    else:
        seed = load_seed(args.seed)
        iteration_prompt = args.prompt
        steps = args.steps
        phash = prompt_hash(args.prompt, SYSTEM_PROMPT)
        experiment_name = f"{args.name}_{phash}"
        output_dir = os.path.join(SCRIPT_DIR, "output", experiment_name)
        os.makedirs(output_dir, exist_ok=True)

        if args.models:
            selected = [m.strip() for m in args.models.split(",")]
            models = {k: MODELS[k] for k in selected if k in MODELS}
        else:
            models = MODELS

        # Save experiment config
        config_path = os.path.join(output_dir, "config.json")
        config = {
            "name": args.name,
            "prompt": iteration_prompt,
            "prompt_hash": phash,
            "seed": args.seed,
            "steps": steps,
            "models": {k: v["model"] for k, v in models.items()},
            "system_prompt": SYSTEM_PROMPT,
            "alternate": args.alternate,
        }
        if not os.path.exists(config_path):
            with open(config_path, "w") as f:
                json.dump(config, f, indent=2)
                f.write("\n")

    print(f"Experiment: {experiment_name}")
    print(f"Prompt: {iteration_prompt}")
    print(f"Steps: {steps}")
    print(f"Mode: {'alternate' if args.alternate else 'independent'}")
    print(f"Models: {', '.join(models.keys())}")
    print(f"Seed: {seed[:80]}{'...' if len(seed) > 80 else ''}")
    print(f"Output: {output_dir}")
    print()

    if args.alternate:
        await evolve_alternating(
            models,
            output_dir,
            seed,
            steps,
            args.resume,
            iteration_prompt=iteration_prompt,
            pin_original=args.pin_original,
            milestone_interval=args.milestones,
            recent_count=args.recent,
        )
    else:
        tasks = [
            evolve_model(
                name,
                cfg,
                output_dir,
                seed,
                steps,
                args.resume,
                iteration_prompt=iteration_prompt,
                pin_original=args.pin_original,
                milestone_interval=args.milestones,
                recent_count=args.recent,
            )
            for name, cfg in models.items()
        ]
        results = await asyncio.gather(*tasks, return_exceptions=True)

        for (name, _), result in zip(models.items(), results):
            if isinstance(result, Exception):
                print(f"[{name}] FAILED: {result}")

    print(f"\nDone! Results in {output_dir}")


if __name__ == "__main__":
    asyncio.run(main())
