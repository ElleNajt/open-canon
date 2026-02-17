"""
Evolve a simple beat 30 times through different AI models.
Each model starts from the same seed and evolves independently.
Saves each step as a .js file.
"""

import asyncio
import os
import time

import anthropic
import httpx

SEED = '$: s("bd sn bd sn")'
STEPS = 30
PROMPT = "Evolve this according to your preferences"

SYSTEM_PROMPT = open(
    os.path.join(os.path.dirname(__file__), "system_prompt.txt")
).read()

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

OUTPUT_DIR = os.path.join(os.path.dirname(__file__), "output")


def strip_markdown_fences(code: str) -> str:
    if code.startswith("```"):
        lines = code.split("\n")
        return "\n".join(lines[1:-1] if lines[-1] == "```" else lines[1:])
    return code


async def call_anthropic(model: str, system: str, user_msg: str) -> str:
    client = anthropic.AsyncAnthropic(api_key=ANTHROPIC_API_KEY)
    response = await client.messages.create(
        model=model,
        max_tokens=16384,
        system=system,
        messages=[{"role": "user", "content": user_msg}],
    )
    return strip_markdown_fences(response.content[0].text.strip())


async def call_openrouter(model: str, system: str, user_msg: str) -> str:
    async with httpx.AsyncClient() as client:
        response = await client.post(
            "https://openrouter.ai/api/v1/chat/completions",
            headers={
                "Authorization": f"Bearer {OPENROUTER_API_KEY}",
                "Content-Type": "application/json",
            },
            json={
                "model": model,
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
        return strip_markdown_fences(data["choices"][0]["message"]["content"].strip())


async def evolve_model(name: str, config: dict):
    model_dir = os.path.join(OUTPUT_DIR, name)
    os.makedirs(model_dir, exist_ok=True)

    code = SEED

    # Save seed
    with open(os.path.join(model_dir, "step_00.js"), "w") as f:
        f.write(code)

    for step in range(1, STEPS + 1):
        user_msg = f"Current code:\n{code}\n\nRequest: {PROMPT}"

        print(f"[{name}] Step {step}/{STEPS}...")
        t0 = time.time()

        if config["provider"] == "anthropic":
            code = await call_anthropic(config["model"], SYSTEM_PROMPT, user_msg)
        else:
            code = await call_openrouter(config["model"], SYSTEM_PROMPT, user_msg)

        elapsed = time.time() - t0
        print(f"[{name}] Step {step} done ({elapsed:.1f}s, {len(code)} chars)")

        with open(os.path.join(model_dir, f"step_{step:02d}.js"), "w") as f:
            f.write(code)

    print(f"[{name}] Complete! {STEPS} steps saved to {model_dir}/")


async def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    # Run all models in parallel
    tasks = [evolve_model(name, config) for name, config in MODELS.items()]
    results = await asyncio.gather(*tasks, return_exceptions=True)

    for (name, _), result in zip(MODELS.items(), results):
        if isinstance(result, Exception):
            print(f"[{name}] FAILED: {result}")

    print("\nDone! Results in", OUTPUT_DIR)


if __name__ == "__main__":
    asyncio.run(main())
