"""Convert blogpost.org from inline strudel.cc URLs to macro syntax.

Replaces lines like:
  *Run 1:* [[https://strudel.cc/#...][0]] | [[https://strudel.cc/#...][5]] | ...

With:
  *Run 1:* {{{strudel(experiment_dir,model_subdir,0,5,10,...)}}}
"""

import re
from pathlib import Path

BLOGPOST = Path(__file__).parent / "blogpost.org"

# Section heading patterns -> list of (experiment_dir, model_subdir) per run
SECTION_RUNS = {
    "Claude": [
        ("goldberg_imbue_fb0bde27", "claude"),
        ("goldberg_imbue_v2_ada2a552", "claude"),
        ("goldberg_imbue_v3_ada2a552", "claude"),
    ],
    "ChatGPT": [
        ("goldberg_imbue_fb0bde27", "gpt"),
        ("goldberg_imbue_v2_ada2a552", "gpt"),
        ("goldberg_imbue_v3_ada2a552", "gpt"),
    ],
    "Grok": [
        ("goldberg_imbue_fb0bde27", "grok"),
        ("goldberg_imbue_v2_ada2a552", "grok"),
        ("goldberg_imbue_v3_ada2a552", "grok"),
    ],
    "Gemini": [
        ("goldberg_imbue_fb0bde27", "gemini"),
        ("goldberg_imbue_v2_ada2a552", "gemini"),
        ("goldberg_imbue_v3_ada2a552", "gemini"),
    ],
    "Kimi": [
        ("personality_kimi_784683bf", "kimi"),
    ],
    "Qwen": [
        ("personality_qwen_784683bf", "qwen"),
    ],
    "Cross-model: GPT": [
        ("cross_gpt_gemini_784683bf", "gpt_gemini_alternate"),
    ],
    "Cross-model: Grok": [
        ("cross_grok_gemini_784683bf", "gemini_grok_alternate"),
    ],
}

# Regex to match section headings we care about
HEADING_RE = re.compile(
    r"^\*\* (Claude|ChatGPT|Grok|Gemini|Kimi|Qwen|Cross-model: GPT|Cross-model: Grok)\b"
)

# Regex to match Run lines with strudel URLs
RUN_RE = re.compile(r"^(\*Run \d+:\*) (.+)")

# Extract step numbers from link labels like ][30]]
STEP_RE = re.compile(r"\]\[(\d+)\]\]")


def convert():
    text = BLOGPOST.read_text()
    lines = text.split("\n")

    current_section = None
    run_counter = 0
    converted = 0
    output = []

    for line in lines:
        # Check for section heading
        heading_match = HEADING_RE.match(line)
        if heading_match:
            current_section = heading_match.group(1)
            run_counter = 0
            output.append(line)
            continue

        # Check for Run line with strudel URLs
        run_match = RUN_RE.match(line)
        if run_match and "[[https://strudel.cc/" in line and current_section:
            run_prefix = run_match.group(1)
            steps = STEP_RE.findall(line)

            runs = SECTION_RUNS[current_section]
            experiment_dir, model_subdir = runs[run_counter]
            run_counter += 1

            steps_str = ",".join(steps)
            macro = "{{{strudel(" + experiment_dir + "," + model_subdir + "," + steps_str + ")}}}"
            output.append(run_prefix + " " + macro)
            converted += 1
            continue

        output.append(line)

    BLOGPOST.write_text("\n".join(output))
    print(f"Converted {converted} run lines")


if __name__ == "__main__":
    convert()
