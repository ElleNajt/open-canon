"""
Genre classification for evolve experiment outputs using an LLM judge.

Groups all runs of the same model together and feeds steps 0,5,10,...,30
from each run into a single API call for cross-run trajectory analysis.

Usage:
  python judge.py                              # all blogpost models
  python judge.py --model claude               # model subdir filter
  python judge.py --final-only                 # just classify final step per run
  python judge.py --steps 0,5,10,15,20,25,30   # which steps to sample
"""

import argparse
import asyncio
import json
import re
from pathlib import Path

import dotenv

SCRIPT_DIR = Path(__file__).parent
OUTPUT_DIR = SCRIPT_DIR / "output"

dotenv.load_dotenv(SCRIPT_DIR.parent.parent / ".env", override=True)

import anthropic

JUDGE_MODEL = "claude-opus-4-5-20251101"
MAX_CONCURRENT = 3

COMMENT_RE = re.compile(r"^\s*//.*$", re.MULTILINE)


def strip_comments(code):
    """Remove // line comments from JS code."""
    return COMMENT_RE.sub("", code).strip()


SYSTEM_PROMPT = """You are a music genre classifier analyzing Strudel live-coding JavaScript.

Comments have been stripped. Classify based on what the code produces.

Focus on:
- Tempo (setcps value: if setcps(N/60/4) then bpm = N; if setcps(X) then bpm = X*240)
- Rhythm patterns (drums? euclidean? straight? irregular?)
- Sound sources (.sound() values: synths vs drums vs samples vs speech)
- Gain levels and balance between elements
- Effects (reverb, delay, distortion, filtering, ring modulation, FM synthesis)
- Envelope times (attack/release: short = percussive, long = ambient)
- Pitch content (note patterns, scales, chords, harmonic movement)"""

MULTI_RUN_USER = """Below are steps from {n_runs} independent run(s) of a music evolution experiment.
All runs start from the same seed and are evolved by the same AI model ({model_name}).
Each step is the complete piece at that point in the evolution.

{runs_block}

Analyze the trajectory across all runs. Return ONLY valid JSON (no markdown fences):
{{
  "genre": "<free-form genre label, be specific — e.g. 'acid techno', 'dark ambient drone', 'gabber', 'progressive house'. Use established genre names from electronic music>",
  "trajectory": "<one of: additive, subtractive, stable>",
  "tempo_bpm_start": <number>,
  "tempo_bpm_end_avg": <average final BPM across runs>,
  "track_count_end_avg": <average final track count>,
  "cross_run_consistency": "<high, medium, or low — do the runs converge on similar music?>",
  "summary": "<2-3 sentences: what genre does this model produce, what's the trajectory, what's distinctive about it across runs>"
}}"""

COMPARE_SYSTEM = """You are a music critic comparing pieces produced by different AI models, all written in Strudel (a JavaScript live-coding music language).

All pieces use the same Strudel API — $: tracks, .sound(), .lpf(), .euclid(), etc. Don't let the shared syntax fool you into thinking they sound similar. Focus on what each piece would SOUND like:

- Tempo and energy (a 178 BPM piece with distorted kicks sounds nothing like a 72 BPM piece with long sine pads)
- Rhythmic character (four-on-floor vs broken beat vs no drums vs euclidean complexity)
- Timbral palette (clean sines vs distorted sawtooths vs speech samples vs piano)
- Dynamic range (quiet and sparse vs loud and dense)
- Harmonic language (consonant vs dissonant vs atonal)
- Mood and affect (aggressive vs contemplative vs danceable vs chaotic)

Comments have been stripped from the code."""

COMPARE_USER = """Below are pieces from {n_models} different AI models, all evolved from the same seed (a Bach Goldberg Variations ground bass at 72 BPM).

For each model I'm showing sampled steps from the evolution (steps 0, 5, 10, 15, 20, 25, 30). For models with multiple runs, all runs are included.

{models_block}

Compare these models to each other. Give each a genre label that DISTINGUISHES it from the others — if two models sound different, they should get different genre labels.

Return ONLY valid JSON (no markdown fences):
{{
  "models": [
    {{
      "model": "<model name>",
      "genre": "<specific genre label that distinguishes this model from the others>",
      "tempo_bpm": <final BPM or average across runs>,
      "energy": "<low, medium, high, or extreme>",
      "trajectory": "<2-3 sentences describing the evolution over time: what changes, what stays, how the piece transforms from seed to final state. Be specific about step numbers where key changes happen.>",
      "cross_run_consistency": "<high, medium, low, or n/a if only 1 run. Do the independent runs converge on the same genre and character, or diverge into different music?>",
      "distinguishing_features": "<what makes this model's output unique compared to the others>"
    }}
  ],
  "ranking_by_aggression": ["<model names from least to most aggressive>"],
  "ranking_by_complexity": ["<model names from simplest to most complex>"]
}}"""

SCORECARD_SYSTEM = """You are scoring music pieces written in Strudel (a JavaScript live-coding music language) on numeric scales.

All pieces use the same Strudel API. Comments have been stripped. Focus on what each piece would SOUND like.

Score each dimension from 1 to 10:
- Tempo: 1 = very slow (<60 BPM), 5 = moderate (100-120), 10 = very fast (>160)
- Dissonance: 1 = consonant/tonal, 5 = chromatic/tense, 10 = atonal/clashing
- Danceability: 1 = no rhythm/ambient, 5 = has groove but irregular, 10 = strong danceable beat
- Originality: 1 = close to the Bach seed, 5 = recognizable transformation, 10 = completely unrecognizable from seed
- Density: 1 = sparse/minimal, 5 = moderate layering, 10 = wall of sound
- Aggression: 1 = quiet/gentle, 5 = moderate energy, 10 = harsh/distorted/loud"""

SCORECARD_USER = """Below are final pieces from {n_models} different AI models, all evolved from the same Bach Goldberg Variations seed at 72 BPM.

For models with multiple runs, I'm showing the final step from each run.

{models_block}

Score each model. Return ONLY valid JSON (no markdown fences):
{{
  "models": [
    {{
      "model": "<model name>",
      "tempo": <1-10>,
      "dissonance": <1-10>,
      "danceability": <1-10>,
      "originality": <1-10>,
      "density": <1-10>,
      "aggression": <1-10>
    }}
  ]
}}"""

SINGLE_USER = """Classify this Strudel code.

```javascript
{code}
```

Return ONLY valid JSON (no markdown fences):
{{
  "genre": "<free-form genre label — be specific, use established electronic music genre names>",
  "tempo_bpm": <number or null>,
  "track_count": <int>,
  "has_drums": <bool>,
  "dominant_synth": "<most prominent .sound() value>",
  "confidence": <0.0-1.0>
}}"""


def parse_json_response(text):
    text = text.strip()
    if text.startswith("```"):
        lines = text.split("\n")
        text = "\n".join(lines[1:-1] if lines[-1].startswith("```") else lines[1:])
    return json.loads(text)


def get_step_files(model_dir):
    steps = {}
    for f in model_dir.glob("step_*.js"):
        num = int(f.stem.replace("step_", ""))
        steps[num] = f
    return steps


def format_run_block(run_label, steps_code):
    """Format a single run's steps for the prompt."""
    lines = [f"=== {run_label} ==="]
    for step_num in sorted(steps_code.keys()):
        lines.append(f"--- Step {step_num} ---")
        lines.append(f"```javascript\n{steps_code[step_num]}\n```")
    return "\n\n".join(lines)


BLOGPOST_MODELS = {
    "claude": {
        "display": "Claude",
        "runs": [
            ("goldberg_imbue_fb0bde27", "claude"),
            ("goldberg_imbue_v2_ada2a552", "claude"),
            ("goldberg_imbue_v3_ada2a552", "claude"),
            ("goldberg_imbue_r4_ada2a552", "claude"),
            ("goldberg_imbue_r5_ada2a552", "claude"),
        ],
    },
    "gpt": {
        "display": "GPT",
        "runs": [
            ("goldberg_imbue_fb0bde27", "gpt"),
            ("goldberg_imbue_v2_ada2a552", "gpt"),
            ("goldberg_imbue_v3_ada2a552", "gpt"),
            ("goldberg_imbue_r4_ada2a552", "gpt"),
            ("goldberg_imbue_r5_ada2a552", "gpt"),
        ],
    },
    "gemini": {
        "display": "Gemini",
        "runs": [
            ("goldberg_imbue_fb0bde27", "gemini"),
            ("goldberg_imbue_v2_ada2a552", "gemini"),
            ("goldberg_imbue_v3_ada2a552", "gemini"),
            ("goldberg_imbue_r4_ada2a552", "gemini"),
            ("goldberg_imbue_r5_ada2a552", "gemini"),
        ],
    },
    "grok": {
        "display": "Grok",
        "runs": [
            ("goldberg_imbue_fb0bde27", "grok"),
            ("goldberg_imbue_v2_ada2a552", "grok"),
            ("goldberg_imbue_v3_ada2a552", "grok"),
            ("goldberg_imbue_r4_ada2a552", "grok"),
            ("goldberg_imbue_r5_ada2a552", "grok"),
        ],
    },
    "kimi": {
        "display": "Kimi",
        "runs": [
            ("personality_kimi_784683bf", "kimi"),
            ("personality_kimi_r2_784683bf", "kimi"),
            ("personality_kimi_r3_784683bf", "kimi"),
        ],
    },
    "qwen": {
        "display": "Qwen",
        "runs": [
            ("personality_qwen_784683bf", "qwen"),
            ("personality_qwen_r2_784683bf", "qwen"),
            ("personality_qwen_r3_784683bf", "qwen"),
        ],
    },
    "gpt_gemini": {
        "display": "GPT × Gemini",
        "runs": [
            ("cross_gpt_gemini_784683bf", "gpt_gemini_alternate"),
            ("cross_gpt_gemini_r2_784683bf", "gpt_gemini_alternate"),
            ("cross_gpt_gemini_r3_784683bf", "gpt_gemini_alternate"),
        ],
    },
    "grok_gemini": {
        "display": "Grok × Gemini",
        "runs": [
            ("cross_grok_gemini_784683bf", "gemini_grok_alternate"),
            ("cross_grok_gemini_r2_784683bf", "grok_gemini_alternate"),
            ("cross_grok_gemini_r3_784683bf", "grok_gemini_alternate"),
        ],
    },
}


async def judge_multi_run(client, sem, model_key, runs_data, sample_steps):
    """Judge a model across all its runs in a single API call."""
    async with sem:
        display = BLOGPOST_MODELS[model_key]["display"]

        run_blocks = []
        for i, (exp_name, steps_code) in enumerate(runs_data):
            sampled = {s: steps_code[s] for s in sample_steps if s in steps_code}
            if not sampled:
                continue
            run_blocks.append(format_run_block(f"Run {i + 1} ({exp_name})", sampled))

        if not run_blocks:
            return None

        runs_block = "\n\n".join(run_blocks)

        prompt = MULTI_RUN_USER.format(
            n_runs=len(run_blocks),
            model_name=display,
            runs_block=runs_block,
        )

        response = await client.messages.create(
            model=JUDGE_MODEL,
            max_tokens=1024,
            temperature=0,
            system=SYSTEM_PROMPT,
            messages=[{"role": "user", "content": prompt}],
        )
        result = parse_json_response(response.content[0].text)
        result["model_key"] = model_key
        result["display_name"] = display
        result["n_runs"] = len(run_blocks)
        return result


async def judge_single(client, sem, code, label):
    """Classify a single step file."""
    async with sem:
        prompt = SINGLE_USER.format(code=code)
        response = await client.messages.create(
            model=JUDGE_MODEL,
            max_tokens=512,
            temperature=0,
            system=SYSTEM_PROMPT,
            messages=[{"role": "user", "content": prompt}],
        )
        result = parse_json_response(response.content[0].text)
        result["label"] = label
        return result


def print_results(results):
    print("| Model | Genre | Trajectory | BPM (start→end) | Consistency | Summary |")
    print("|---|---|---|---|---|---|")
    for r in results:
        if r is None:
            continue
        bpm_s = r.get("tempo_bpm_start", "?")
        bpm_e = r.get("tempo_bpm_end_avg", "?")
        print(
            f"| {r['display_name']} | {r['genre']} | {r['trajectory']} "
            f"| {bpm_s}→{bpm_e} "
            f"| {r.get('cross_run_consistency', '?')} | {r.get('summary', '')} |"
        )


async def main():
    parser = argparse.ArgumentParser(description="Genre judge for evolve experiments")
    parser.add_argument("--model", help="Model key to analyze (e.g. claude, kimi)")
    parser.add_argument(
        "--steps",
        default="0,5,10,15,20,25,30",
        help="Comma-separated step numbers to sample (default: 0,5,10,15,20,25,30)",
    )
    parser.add_argument(
        "--final-only", action="store_true", help="Only classify final step per run"
    )
    parser.add_argument(
        "--compare",
        action="store_true",
        help="Compare all models against each other in a single call",
    )
    parser.add_argument(
        "--scorecard",
        action="store_true",
        help="Score all models on numeric dimensions (tempo, dissonance, etc.)",
    )
    parser.add_argument(
        "--output",
        default="org",
        choices=["org", "json"],
        help="Output format (default: org)",
    )
    parser.add_argument("--save", help="Save JSON results to this path")
    args = parser.parse_args()

    client = anthropic.AsyncAnthropic()
    sem = asyncio.Semaphore(MAX_CONCURRENT)

    sample_steps = [int(s) for s in args.steps.split(",")]

    models_to_judge = BLOGPOST_MODELS
    if args.model:
        models_to_judge = {k: v for k, v in BLOGPOST_MODELS.items() if k == args.model}

    if not models_to_judge:
        print(f"Unknown model: {args.model}")
        print(f"Available: {', '.join(BLOGPOST_MODELS.keys())}")
        return

    if args.compare or args.scorecard:
        # Build one block per model
        models_block_parts = []
        for model_key, info in models_to_judge.items():
            parts = [f"=== {info['display']} ==="]
            for i, (exp_name, model_subdir) in enumerate(info["runs"]):
                model_dir = OUTPUT_DIR / exp_name / model_subdir
                if not model_dir.is_dir():
                    continue
                step_files = get_step_files(model_dir)
                if not step_files:
                    continue
                run_label = f"Run {i + 1}" if len(info["runs"]) > 1 else ""

                if args.scorecard:
                    # Only final step for scorecard
                    final_step = max(step_files.keys())
                    code = strip_comments(step_files[final_step].read_text())
                    prefix = f"{run_label} " if run_label else ""
                    parts.append(
                        f"--- {prefix}Final (Step {final_step}) ---\n```javascript\n{code}\n```"
                    )
                else:
                    sampled = {
                        s: strip_comments(step_files[s].read_text())
                        for s in sample_steps
                        if s in step_files
                    }
                    if not sampled:
                        continue
                    for step_num in sorted(sampled.keys()):
                        prefix = f"{run_label} " if run_label else ""
                        parts.append(
                            f"--- {prefix}Step {step_num} ---\n```javascript\n{sampled[step_num]}\n```"
                        )
            if len(parts) > 1:
                models_block_parts.append("\n\n".join(parts))

        models_block = "\n\n\n".join(models_block_parts)

        if args.scorecard:
            prompt = SCORECARD_USER.format(
                n_models=len(models_block_parts), models_block=models_block
            )
            print(f"Scoring {len(models_block_parts)} models...")
            response = await client.messages.create(
                model=JUDGE_MODEL,
                max_tokens=4096,
                temperature=0,
                system=SCORECARD_SYSTEM,
                messages=[{"role": "user", "content": prompt}],
            )
            result = parse_json_response(response.content[0].text)

            if args.output == "org":
                dims = [
                    "tempo",
                    "dissonance",
                    "danceability",
                    "originality",
                    "density",
                    "aggression",
                ]
                print(f"| Model | {' | '.join(d.capitalize() for d in dims)} |")
                print(f"|---{'|---' * len(dims)}|")
                for m in result["models"]:
                    scores = " | ".join(str(m.get(d, "?")) for d in dims)
                    print(f"| {m['model']} | {scores} |")
            elif args.output == "json":
                print(json.dumps(result, indent=2))

        else:
            prompt = COMPARE_USER.format(
                n_models=len(models_block_parts), models_block=models_block
            )
            print(f"Comparing {len(models_block_parts)} models in a single call...")
            response = await client.messages.create(
                model=JUDGE_MODEL,
                max_tokens=8192,
                temperature=0,
                system=COMPARE_SYSTEM,
                messages=[{"role": "user", "content": prompt}],
            )
            result = parse_json_response(response.content[0].text)

            if args.output == "org":
                for m in result["models"]:
                    print(f"*** {m['model']}")
                    print()
                    consistency = m.get("cross_run_consistency", "n/a")
                    print(
                        f"Genre: *{m['genre']}* | BPM: {m['tempo_bpm']} "
                        f"| Energy: {m['energy']} | Consistency: {consistency}"
                    )
                    print()
                    print(m.get("trajectory", ""))
                    print()
                    print(m.get("distinguishing_features", ""))
                    print()
                print(
                    f"Aggression (least→most): {' → '.join(result['ranking_by_aggression'])}"
                )
                print(
                    f"Complexity (least→most): {' → '.join(result['ranking_by_complexity'])}"
                )
            elif args.output == "json":
                print(json.dumps(result, indent=2))

        results = [result]

    else:
        tasks = []
        for model_key, info in models_to_judge.items():
            runs_data = []
            for exp_name, model_subdir in info["runs"]:
                model_dir = OUTPUT_DIR / exp_name / model_subdir
                if not model_dir.is_dir():
                    continue
                step_files = get_step_files(model_dir)
                steps_code = {
                    s: strip_comments(step_files[s].read_text()) for s in step_files
                }
                if steps_code:
                    runs_data.append((exp_name, steps_code))

            if not runs_data:
                print(f"No data for {model_key}")
                continue

            if args.final_only:
                for exp_name, steps_code in runs_data:
                    final_step = max(steps_code.keys())
                    tasks.append(
                        judge_single(
                            client,
                            sem,
                            steps_code[final_step],
                            f"{info['display']} ({exp_name})",
                        )
                    )
            else:
                tasks.append(
                    judge_multi_run(client, sem, model_key, runs_data, sample_steps)
                )

        print(f"Judging {len(tasks)} {'steps' if args.final_only else 'models'}...")
        results = await asyncio.gather(*tasks)

        if args.output == "org":
            if args.final_only:
                print("| Label | Genre | BPM | Tracks | Confidence |")
                print("|---|---|---|---|---|")
                for r in results:
                    print(
                        f"| {r['label']} | {r['genre']} "
                        f"| {r.get('tempo_bpm', '?')} | {r.get('track_count', '?')} "
                        f"| {r.get('confidence', '?')} |"
                    )
            else:
                print_results(results)
        elif args.output == "json":
            print(json.dumps(results, indent=2))

    if args.save:
        save_path = args.save
    elif args.compare:
        save_path = str(OUTPUT_DIR / "judge_compare.json")
    elif args.scorecard:
        save_path = str(OUTPUT_DIR / "judge_scorecard.json")
    else:
        save_path = str(OUTPUT_DIR / "genre_judge_results.json")
    with open(save_path, "w") as f:
        json.dump(results, f, indent=2)
    print(f"\nResults saved to {save_path}")


if __name__ == "__main__":
    asyncio.run(main())
