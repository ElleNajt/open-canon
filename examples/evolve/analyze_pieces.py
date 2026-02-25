"""
Analyze all pieces in the blogpost: programmatic stats + LLM genre classification.

Runs the judge on each final step independently, extracts BPM/filters/effects/speech
programmatically, and saves everything to a JSON file.

Usage:
  python analyze_pieces.py              # run full analysis
  python analyze_pieces.py --stats-only # just programmatic stats, no API calls
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
MAX_CONCURRENT = 5

COMMENT_RE = re.compile(r"^\s*//.*$", re.MULTILINE)


def strip_comments(code):
    return COMMENT_RE.sub("", code).strip()


# All runs that appear in the blogpost Music section + appendix,
# verified against config.json model IDs.
BLOGPOST_RUNS = {
    "Claude Opus 4.5": [
        ("goldberg_imbue_fb0bde27", "claude"),
        ("goldberg_imbue_v2_ada2a552", "claude"),
        ("goldberg_imbue_v3_ada2a552", "claude"),
        ("goldberg_imbue_r4_ada2a552", "claude"),
        ("goldberg_imbue_r5_ada2a552", "claude"),
    ],
    "Claude Opus 4.6": [
        ("goldberg_imbue_opus46_84f7f2ef", "claude46"),
        ("goldberg_imbue_opus46_v2_84f7f2ef", "claude46"),
        ("goldberg_imbue_opus46_v3_84f7f2ef", "claude46"),
    ],
    "ChatGPT 5.2": [
        ("goldberg_imbue_84f7f2ef", "gpt"),
        ("goldberg_imbue_v2_84f7f2ef", "gpt"),
        ("goldberg_imbue_v3_84f7f2ef", "gpt"),
        ("goldberg_imbue_v4_84f7f2ef", "gpt"),
    ],
    "Grok 4.1-fast": [
        ("goldberg_imbue_grok_redo_84f7f2ef", "grok"),
        ("goldberg_imbue_grok_redo_v2_84f7f2ef", "grok"),
        ("goldberg_imbue_grok_redo_v3_84f7f2ef", "grok"),
    ],
    "Gemini 3.1 Pro": [
        ("goldberg_imbue_gemini31_84f7f2ef", "gemini"),
        ("goldberg_imbue_gemini31_v2_84f7f2ef", "gemini"),
        ("goldberg_imbue_gemini31_v3_84f7f2ef", "gemini"),
        ("goldberg_imbue_gemini31_v4_04bd7c44", "gemini"),
    ],
    "Gemini 2.5 Pro": [
        ("goldberg_imbue_gemini_redo_84f7f2ef", "gemini"),
        ("goldberg_imbue_gemini_redo_v2_84f7f2ef", "gemini"),
        ("goldberg_imbue_gemini_redo_v3_84f7f2ef", "gemini"),
    ],
    "Kimi K2.5": [
        ("personality_kimi_784683bf", "kimi"),
    ],
    "Qwen 3.5 Plus": [
        ("personality_qwen_784683bf", "qwen"),
    ],
    # Cross-model collaborations
    "Claude x Grok": [
        ("cross_claude_grok_784683bf", "claude_grok_alternate"),
    ],
    "Claude x Gemini": [
        ("cross_claude_gemini31_4aa890b0", "claude_gemini_alternate"),
    ],
    "GPT x Gemini": [
        ("cross_gpt52_gemini31_4aa890b0", "gpt_gemini_alternate"),
    ],
    "Grok x Gemini": [
        ("cross_grok_gemini31_4aa890b0", "grok_gemini_alternate"),
    ],
    # Small models
    "Claude 3 Haiku": [
        ("goldberg_imbue_v3_ada2a552", "haiku3"),
    ],
    "Claude Haiku 4.5": [
        ("goldberg_imbue_v3_ada2a552", "haiku4"),
    ],
    "GPT-4o": [
        ("goldberg_imbue_v3_ada2a552", "gpt4o"),
    ],
    "GPT-4.1": [
        ("goldberg_imbue_fb0bde27", "gpt"),
        ("goldberg_imbue_v2_ada2a552", "gpt"),
    ],
    "Gemini 2.5 Flash": [
        ("goldberg_imbue_v3_ada2a552", "gemini_flash"),
    ],
}

# Also analyze alternate seeds for frontier models
SEED_RUNS = {
    "Claude Opus 4.5 (drum seed)": [
        ("diff_drums_v3_84f7f2ef", "claude"),
        ("diff_drums_v4_84f7f2ef", "claude"),
        ("diff_drums_v5_84f7f2ef", "claude"),
    ],
    "Claude Opus 4.5 (arpeggio seed)": [
        ("diff_major_v3_84f7f2ef", "claude"),
        ("diff_major_v4_84f7f2ef", "claude"),
        ("diff_major_v5_84f7f2ef", "claude"),
    ],
    "Claude Opus 4.5 (note seed)": [
        ("diff_note_v1_84f7f2ef", "claude"),
        ("diff_note_v2_84f7f2ef", "claude"),
        ("diff_note_v3_84f7f2ef", "claude"),
    ],
    "Claude Opus 4.6 (drum seed)": [
        ("diff_drums_v3_84f7f2ef", "claude46"),
        ("diff_drums_v4_84f7f2ef", "claude46"),
        ("diff_drums_v5_84f7f2ef", "claude46"),
    ],
    "Claude Opus 4.6 (arpeggio seed)": [
        ("diff_major_v3_84f7f2ef", "claude46"),
        ("diff_major_v4_84f7f2ef", "claude46"),
        ("diff_major_v5_84f7f2ef", "claude46"),
    ],
    "Claude Opus 4.6 (note seed)": [
        ("diff_note_v1_84f7f2ef", "claude46"),
        ("diff_note_v2_84f7f2ef", "claude46"),
        ("diff_note_v3_84f7f2ef", "claude46"),
    ],
    "ChatGPT 5.2 (drum seed)": [
        ("diff_gpt_drums_84f7f2ef", "gpt"),
        ("diff_gpt_drums_v2_84f7f2ef", "gpt"),
    ],
    "ChatGPT 5.2 (arpeggio seed)": [
        ("diff_gpt_major_84f7f2ef", "gpt"),
    ],
    "ChatGPT 5.2 (unconstrained)": [
        ("goldberg_gpt52_test_4aa890b0", "gpt"),
        ("goldberg_gpt52_run2_4aa890b0", "gpt"),
        ("goldberg_gpt52_run3_4aa890b0", "gpt"),
        ("goldberg_gpt52_run4_4aa890b0", "gpt"),
    ],
    # Quiz pieces (4 seeds × 4 frontier models)
    "Claude Opus 4.5 (quiz)": [
        ("quiz4_drum_84f7f2ef", "claude"),
        ("quiz4_scale_84f7f2ef", "claude"),
        ("quiz4_note_84f7f2ef", "claude"),
        ("quiz4_chord_84f7f2ef", "claude"),
    ],
    "ChatGPT 5.2 (quiz)": [
        ("quiz4_drum_84f7f2ef", "gpt"),
        ("quiz4_scale_84f7f2ef", "gpt"),
        ("quiz4_note_84f7f2ef", "gpt"),
        ("quiz4_chord_84f7f2ef", "gpt"),
    ],
    "Gemini 3.1 Pro (quiz)": [
        ("quiz4_drum_84f7f2ef", "gemini"),
        ("quiz4_scale_84f7f2ef", "gemini"),
        ("quiz4_note_84f7f2ef", "gemini"),
        ("quiz4_chord_84f7f2ef", "gemini"),
    ],
    "Grok 4.1-fast (quiz)": [
        ("quiz4_drum_84f7f2ef", "grok"),
        ("quiz4_scale_84f7f2ef", "grok"),
        ("quiz4_note_84f7f2ef", "grok"),
        ("quiz4_chord_84f7f2ef", "grok"),
    ],
}


CLASSIFY_SYSTEM = """You are a music analyst classifying Strudel live-coding JavaScript.
Comments have been stripped. Classify based on what the code would SOUND like.

Focus on:
- Tempo (setcps value: if setcps(N/60/4) then bpm = N; if setcps(X) then bpm = X*240)
- Rhythm patterns (drums? euclidean? straight? irregular?)
- Sound sources (.sound() values: synths vs drums vs samples vs speech)
- Effects (reverb, delay, distortion, filtering, ring modulation, FM synthesis)
- Pitch content (note patterns, scales, chords, harmonic movement)
- Mood and energy"""

CLASSIFY_USER = """Classify this Strudel piece. It was produced by {model_name}, evolved from a Bach Goldberg Variations ground bass seed at 72 BPM.

```javascript
{code}
```

Return ONLY valid JSON (no markdown fences):
{{
  "genre": "<specific genre label using established electronic/experimental music genre names — e.g. 'dark ambient', 'acid techno', 'IDM', 'drone', 'glitch hop', 'progressive house'. Be specific and consistent.>",
  "mood": "<1-3 words: e.g. 'dark and tense', 'meditative', 'chaotic', 'euphoric', 'melancholic'>",
  "danceability": <1-10 where 1=no rhythm/purely ambient, 3=has pulse but not danceable, 5=head-nodding groove, 7=would work in a club, 10=four-on-the-floor banger>,
  "uses_speech_creatively": <true if speech/shabda samples are used as a musical element, false otherwise>,
  "notable_feature": "<one sentence: what's most distinctive about this piece>"
}}"""


def get_final_step(model_dir):
    steps = {}
    for f in model_dir.glob("step_*.js"):
        num = int(f.stem.replace("step_", ""))
        steps[num] = f
    if not steps:
        return None, None
    final = max(steps.keys())
    return final, steps[final]


def extract_bpm(code):
    m = re.search(r"setcps\(([^)]+)\)", code)
    if not m:
        return None
    try:
        return round(eval(m.group(1)) * 240, 1)
    except:
        return None


def count_filters(code):
    return len(
        re.findall(
            r"\.(lpf|hpf|bpf|lpq|hpq|bpq|lpenv|lpdecay|lpattack|lpsustain|lprelease)\(",
            code,
        )
    )


def count_effects(code):
    effect_names = [
        "lpf",
        "hpf",
        "bpf",
        "delay",
        "delaytime",
        "delayfeedback",
        "room",
        "size",
        "distort",
        "crush",
        "shape",
        "pan",
        "gain",
        "velocity",
        "attack",
        "decay",
        "sustain",
        "release",
        "phaser",
        "tremolo",
        "vibrato",
        "chorus",
        "fmi",
        "fmh",
        "ring",
        "orbit",
    ]
    return len(set(re.findall(r"\.(" + "|".join(effect_names) + r")\(", code)))


def count_voices(code):
    return len([line for line in code.split("\n") if line.strip().startswith("$:")])


def has_speech(code):
    return "shabda" in code.lower() or "speech" in code.lower()


def extract_stats(code):
    return {
        "bpm": extract_bpm(code),
        "filters": count_filters(code),
        "effect_types": count_effects(code),
        "voices": count_voices(code),
        "has_speech": has_speech(code),
    }


def parse_json_response(text):
    text = text.strip()
    if text.startswith("```"):
        lines = text.split("\n")
        text = "\n".join(lines[1:-1] if lines[-1].startswith("```") else lines[1:])
    return json.loads(text)


async def classify_piece(client, sem, model_name, code, label):
    async with sem:
        prompt = CLASSIFY_USER.format(model_name=model_name, code=code)
        response = await client.messages.create(
            model=JUDGE_MODEL,
            max_tokens=512,
            temperature=0,
            system=CLASSIFY_SYSTEM,
            messages=[{"role": "user", "content": prompt}],
        )
        result = parse_json_response(response.content[0].text)
        result["label"] = label
        result["model"] = model_name
        return result


async def main():
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--stats-only", action="store_true", help="Skip LLM judge, just extract stats"
    )
    parser.add_argument(
        "--include-seeds",
        action="store_true",
        help="Also analyze alternate seed runs",
    )
    args = parser.parse_args()

    all_runs = dict(BLOGPOST_RUNS)
    if args.include_seeds:
        all_runs.update(SEED_RUNS)

    # Collect all pieces
    pieces = []
    for model_name, runs in all_runs.items():
        for exp_name, subdir in runs:
            model_dir = OUTPUT_DIR / exp_name / subdir
            if not model_dir.is_dir():
                print(f"  MISSING: {exp_name}/{subdir}")
                continue
            final_step, final_path = get_final_step(model_dir)
            if final_path is None:
                continue
            code = final_path.read_text()
            stripped = strip_comments(code)
            stats = extract_stats(code)
            pieces.append(
                {
                    "model": model_name,
                    "experiment": exp_name,
                    "subdir": subdir,
                    "final_step": final_step,
                    "stats": stats,
                    "code": stripped,
                }
            )

    print(f"Found {len(pieces)} pieces to analyze")

    # Print programmatic stats summary
    from collections import defaultdict

    by_model = defaultdict(list)
    for p in pieces:
        by_model[p["model"]].append(p)

    print("\n=== Programmatic Stats ===")
    for model_name, model_pieces in by_model.items():
        bpms = [p["stats"]["bpm"] for p in model_pieces if p["stats"]["bpm"]]
        filters = [p["stats"]["filters"] for p in model_pieces]
        effects = [p["stats"]["effect_types"] for p in model_pieces]
        voices = [p["stats"]["voices"] for p in model_pieces]
        speech = sum(1 for p in model_pieces if p["stats"]["has_speech"])

        bpm_str = (
            f"{min(bpms):.0f}-{max(bpms):.0f}"
            if bpms and min(bpms) != max(bpms)
            else f"{bpms[0]:.0f}"
            if bpms
            else "?"
        )
        print(
            f"{model_name} ({len(model_pieces)} runs): "
            f"BPM={bpm_str}, "
            f"filters={min(filters)}-{max(filters)}, "
            f"effects={min(effects)}-{max(effects)}, "
            f"voices={min(voices)}-{max(voices)}, "
            f"speech={speech}/{len(model_pieces)}"
        )

    if args.stats_only:
        # Save stats-only results
        results = []
        for p in pieces:
            results.append(
                {
                    "model": p["model"],
                    "experiment": p["experiment"],
                    "subdir": p["subdir"],
                    "final_step": p["final_step"],
                    "stats": p["stats"],
                }
            )
        with open(OUTPUT_DIR / "piece_stats.json", "w") as f:
            json.dump(results, f, indent=2)
        print(f"\nSaved to {OUTPUT_DIR / 'piece_stats.json'}")
        return

    # Run LLM judge on each piece
    client = anthropic.AsyncAnthropic()
    sem = asyncio.Semaphore(MAX_CONCURRENT)

    tasks = []
    for p in pieces:
        label = f"{p['model']} / {p['experiment']}"
        tasks.append(classify_piece(client, sem, p["model"], p["code"], label))

    print(f"\nClassifying {len(tasks)} pieces with {JUDGE_MODEL}...")
    judge_results = await asyncio.gather(*tasks)

    # Merge stats + judge results
    results = []
    for p, j in zip(pieces, judge_results):
        results.append(
            {
                "model": p["model"],
                "experiment": p["experiment"],
                "subdir": p["subdir"],
                "final_step": p["final_step"],
                "stats": p["stats"],
                "judge": j,
            }
        )

    # Print genre distribution
    print("\n=== Genre Distribution ===")
    for model_name in by_model:
        model_results = [r for r in results if r["model"] == model_name]
        genres = [r["judge"]["genre"] for r in model_results]
        danceability = [r["judge"]["danceability"] for r in model_results]

        genre_counts = defaultdict(int)
        for g in genres:
            genre_counts[g] += 1
        genre_str = ", ".join(
            f"{g} ({c})" for g, c in sorted(genre_counts.items(), key=lambda x: -x[1])
        )

        avg_dance = sum(danceability) / len(danceability) if danceability else 0

        print(f"\n{model_name}:")
        print(f"  Genres: {genre_str}")
        print(f"  Danceability: {avg_dance:.1f}/10")
        for r in model_results:
            print(
                f"    {r['experiment']}: {r['judge']['genre']} "
                f"(dance={r['judge']['danceability']}) "
                f"- {r['judge']['mood']}"
            )

    # Save full results
    save_path = OUTPUT_DIR / "piece_analysis.json"
    # Remove code from saved results to keep file size reasonable
    for r in results:
        r.pop("code", None)
    with open(save_path, "w") as f:
        json.dump(results, f, indent=2)
    print(f"\nSaved to {save_path}")


if __name__ == "__main__":
    asyncio.run(main())
