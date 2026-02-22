"""
Compile blogpost.org -> blogpost_compiled.org

Replaces strudel macros with base64-encoded strudel.cc links.

Macro syntax in blogpost.org:
  {{{strudel(experiment_dir,model_subdir,0,5,10,15,20,25,30)}}}

Becomes:
  [[https://strudel.cc/#BASE64][0]] | [[https://strudel.cc/#BASE64][5]] | ...

Usage:
  python compile_blogpost.py
"""

import base64
import re
import sys
from pathlib import Path
from urllib.parse import quote

SCRIPT_DIR = Path(__file__).parent
OUTPUT_DIR = SCRIPT_DIR / "output"
BLOGPOST = SCRIPT_DIR / "blogpost.org"
COMPILED = SCRIPT_DIR / "blogpost_compiled.org"

MACRO_RE = re.compile(r"\{\{\{strudel\(([^)]+)\)\}\}\}")


def js_to_strudel_url(js_code):
    encoded = base64.b64encode(js_code.encode()).decode()
    return f"https://strudel.cc/#{quote(encoded, safe='')}"


def expand_macro(match):
    parts = [p.strip() for p in match.group(1).split(",")]
    experiment = parts[0]
    model_subdir = parts[1]
    steps = [int(s) for s in parts[2:]]

    model_dir = OUTPUT_DIR / experiment / model_subdir
    if not model_dir.is_dir():
        return f"{{{{MISSING: {model_dir}}}}}"

    links = []
    for step in steps:
        step_file = model_dir / f"step_{step:02d}.js"
        if not step_file.exists():
            links.append(f"[MISSING step {step}]")
            continue
        url = js_to_strudel_url(step_file.read_text())
        links.append(f"[[{url}][{step}]]")

    return " | ".join(links)


def main():
    src = (
        BLOGPOST
        if BLOGPOST.exists()
        else Path(sys.argv[1])
        if len(sys.argv) > 1
        else BLOGPOST
    )
    text = src.read_text()

    compiled = MACRO_RE.sub(expand_macro, text)

    COMPILED.write_text(compiled)
    n_macros = len(MACRO_RE.findall(text))
    print(f"Compiled {n_macros} strudel macros -> {COMPILED}")


if __name__ == "__main__":
    main()
