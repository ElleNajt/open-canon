"""
Compile blogpost.org -> blogpost_compiled.org (and optionally _iframes.org)

Replaces strudel macros with base64-encoded strudel.cc links.

Macro syntax in blogpost.org:
  {{{strudel(experiment_dir,model_subdir,0,5,10,15,20,25,30)}}}

Default (links):
  [[https://strudel.cc/#BASE64][0]] | [[https://strudel.cc/#BASE64][5]] | ...

With --iframes:
  Also generates blogpost_compiled_iframes.org with inline iframe players.

Usage:
  python compile_blogpost.py              # links only
  python compile_blogpost.py --iframes    # links + iframes version
"""

import base64
import re
import subprocess
import sys
from pathlib import Path
from urllib.parse import quote

SCRIPT_DIR = Path(__file__).parent
OUTPUT_DIR = SCRIPT_DIR / "output"
BLOGPOST = SCRIPT_DIR / "blogpost.org"
COMPILED = SCRIPT_DIR / "blogpost_compiled.org"
COMPILED_IFRAMES = SCRIPT_DIR / "blogpost_compiled_iframes.org"

MACRO_RE = re.compile(r"\{\{\{strudel\(([^)]+)\)\}\}\}")
PICKS_RE = re.compile(r"\{\{\{strudel_picks\(([^)]+)\)\}\}\}")
GDOC_ONLY_RE = re.compile(r"\{\{\{gdoc_only\(([^)]+)\)\}\}\}")
WEBPAGE_ONLY_RE = re.compile(
    r"\{\{\{webpage_only_begin\}\}\}\n(.*?)\{\{\{webpage_only_end\}\}\}\n?",
    re.DOTALL,
)


def js_to_strudel_url(js_code):
    encoded = base64.b64encode(js_code.encode()).decode()
    return f"https://strudel.cc/#{quote(encoded, safe='')}"


def read_steps(experiment, model_subdir, steps):
    """Read step files and return list of (step_num, url) pairs."""
    model_dir = OUTPUT_DIR / experiment / model_subdir
    if not model_dir.is_dir():
        return None
    result = []
    for step in steps:
        step_file = model_dir / f"step_{step:02d}.js"
        if not step_file.exists():
            result.append((step, None))
        else:
            result.append((step, js_to_strudel_url(step_file.read_text())))
    return result


def expand_macro_links(match):
    parts = [p.strip() for p in match.group(1).split(",")]
    experiment, model_subdir = parts[0], parts[1]
    steps = [int(s) for s in parts[2:]]

    step_urls = read_steps(experiment, model_subdir, steps)
    if step_urls is None:
        return f"{{{{MISSING: {OUTPUT_DIR / experiment / model_subdir}}}}}"

    single = len(steps) == 1
    links = []
    for step, url in step_urls:
        if url is None:
            links.append(f"[MISSING step {step}]")
        else:
            label = "Play on strudel.cc" if single else str(step)
            links.append(f"[[{url}][{label}]]")
    return " | ".join(links)


def expand_macro_iframe(match):
    parts = [p.strip() for p in match.group(1).split(",")]
    experiment, model_subdir = parts[0], parts[1]
    steps = [int(s) for s in parts[2:]]

    step_urls = read_steps(experiment, model_subdir, steps)
    if step_urls is None:
        return f"{{{{MISSING: {OUTPUT_DIR / experiment / model_subdir}}}}}"

    valid = [(s, u) for s, u in step_urls if u is not None]
    if not valid:
        return "[NO VALID STEPS]"

    # Unique ID for this player
    player_id = f"{experiment}_{model_subdir}".replace("/", "_")

    # Build step buttons (no iframe — shared player loads on click)
    buttons = []
    for i, (step, url) in enumerate(valid):
        embed_url = url.replace("strudel.cc/#", "strudel.cc/embed#")
        buttons.append(
            f'<button class="step-btn" '
            f"onclick=\"loadStep(this, '{embed_url}')\">"
            f"Step {step}</button>"
        )

    return f"""#+begin_export html
<div class="run-player">
  <div class="run-controls">{" ".join(buttons)}</div>
</div>
#+end_export"""


def _resolve_pick(pick_str):
    """Parse 'run_id/model/step' or 'run_id/model/step label' and return (label, url) or None."""
    pick_str = pick_str.strip()
    # Support optional label after the path: "run_id/model/step My Label"
    # Split on whitespace after the path
    path_parts = pick_str.split("/")
    if len(path_parts) < 3:
        return None
    experiment = path_parts[0]
    model_subdir = path_parts[1]
    rest = path_parts[2]
    # rest might be "30" or "30 My Label"
    rest_parts = rest.split(None, 1)
    step = int(rest_parts[0])
    label = rest_parts[1] if len(rest_parts) > 1 else f"{experiment} step {step}"

    step_file = OUTPUT_DIR / experiment / model_subdir / f"step_{step:02d}.js"
    if not step_file.exists():
        return None
    url = js_to_strudel_url(step_file.read_text())
    return (label, url)


def expand_picks_links(match):
    picks = [p.strip() for p in match.group(1).split(",")]
    links = []
    for pick in picks:
        result = _resolve_pick(pick)
        if result is None:
            links.append(f"[MISSING: {pick}]")
        else:
            label, url = result
            links.append(f"[[{url}][{label}]]")
    return " | ".join(links)


def expand_picks_iframe(match):
    picks = [p.strip() for p in match.group(1).split(",")]
    valid = []
    for pick in picks:
        result = _resolve_pick(pick)
        if result:
            valid.append(result)

    if not valid:
        return "[NO VALID PICKS]"

    buttons = []
    for i, (label, url) in enumerate(valid):
        embed_url = url.replace("strudel.cc/#", "strudel.cc/embed#")
        buttons.append(
            f'<button class="step-btn" '
            f"onclick=\"loadStep(this, '{embed_url}')\">"
            f"{label}</button>"
        )

    return f"""#+begin_export html
<div class="run-player">
  <div class="run-controls">{" ".join(buttons)}</div>
</div>
#+end_export"""


IFRAME_PREAMBLE = r"""#+HTML_HEAD: <style>
#+HTML_HEAD: body { background: #1a1a2e; color: #e0e0e0; }
#+HTML_HEAD: #content { background: #1a1a2e; }
#+HTML_HEAD: a { color: #7b9eee; }
#+HTML_HEAD: .run-player { margin: 0.5rem 0 1.5rem; border: 1px solid #333; border-radius: 8px; overflow: hidden; background: #0d0d1a; }
#+HTML_HEAD: .run-controls { display: flex; gap: 4px; padding: 6px 8px; background: #1a1a2e; overflow-x: auto; white-space: nowrap; scrollbar-width: thin; scrollbar-color: #444 #1a1a2e; }
#+HTML_HEAD: .step-btn { background: transparent; border: 1px solid #444; color: #ccc; padding: 3px 10px; border-radius: 4px; cursor: pointer; font-size: 13px; flex-shrink: 0; }
#+HTML_HEAD: .step-btn:hover { background: #4a3f8a; border-color: #7b68ee; }
#+HTML_HEAD: .step-btn.active { background: #7b68ee; color: #fff; border-color: #7b68ee; }
#+HTML_HEAD: #shared-player { position: fixed; bottom: 0; left: 0; right: 0; z-index: 9999; background: #0d0d1a; border-top: 2px solid #7b68ee; display: none; }
#+HTML_HEAD: #shared-player .player-bar { display: flex; align-items: center; gap: 8px; padding: 6px 12px; background: #1a1a2e; }
#+HTML_HEAD: #shared-player .player-label { color: #ccc; font-size: 13px; flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
#+HTML_HEAD: #shared-player .stop-btn { background: #7b68ee; border: none; color: #fff; padding: 4px 14px; border-radius: 4px; cursor: pointer; font-size: 13px; }
#+HTML_HEAD: #shared-player .stop-btn:hover { background: #5a4abf; }
#+HTML_HEAD: #shared-player iframe { width: 100%; height: 300px; border: none; }
#+HTML_HEAD: </style>
#+HTML_HEAD: <script>
#+HTML_HEAD: var activeBtn = null;
#+HTML_HEAD: function loadStep(btn, url) {
#+HTML_HEAD:   var sp = document.getElementById('shared-player');
#+HTML_HEAD:   var old = sp.querySelector('iframe');
#+HTML_HEAD:   var nw = document.createElement('iframe');
#+HTML_HEAD:   nw.setAttribute('allow', 'autoplay');
#+HTML_HEAD:   nw.src = url;
#+HTML_HEAD:   old.replaceWith(nw);
#+HTML_HEAD:   var label = sp.querySelector('.player-label');
#+HTML_HEAD:   if (activeBtn) activeBtn.classList.remove('active');
#+HTML_HEAD:   btn.classList.add('active');
#+HTML_HEAD:   activeBtn = btn;
#+HTML_HEAD:   label.textContent = btn.textContent;
#+HTML_HEAD:   sp.style.display = 'block';
#+HTML_HEAD: }
#+HTML_HEAD: function stopPlayer() {
#+HTML_HEAD:   var sp = document.getElementById('shared-player');
#+HTML_HEAD:   sp.querySelector('iframe').src = 'about:blank';
#+HTML_HEAD:   sp.style.display = 'none';
#+HTML_HEAD:   if (activeBtn) { activeBtn.classList.remove('active'); activeBtn = null; }
#+HTML_HEAD: }
#+HTML_HEAD: </script>

"""

IFRAME_FOOTER = """
#+begin_export html
<div id="shared-player">
  <div class="player-bar">
    <span class="player-label"></span>
    <button class="stop-btn" onclick="stopPlayer()">Stop</button>
  </div>
  <iframe src="about:blank" allow="autoplay"></iframe>
</div>
#+end_export
"""


def main():
    iframes = "--iframes" in sys.argv

    text = BLOGPOST.read_text()
    n_macros = len(MACRO_RE.findall(text))
    n_picks = len(PICKS_RE.findall(text))

    # Always produce the links version
    compiled = MACRO_RE.sub(expand_macro_links, text)
    compiled = PICKS_RE.sub(expand_picks_links, compiled)
    compiled = GDOC_ONLY_RE.sub(r"\1", compiled)
    compiled = WEBPAGE_ONLY_RE.sub("", compiled)
    COMPILED.write_text(compiled)
    print(f"Compiled {n_macros} strudel macros + {n_picks} picks -> {COMPILED}")

    if iframes:
        # Insert preamble after header, then expand macros to iframes
        # Strip *Run N:* prefix since iframe replaces the whole line
        iframe_text = MACRO_RE.sub(expand_macro_iframe, text)
        iframe_text = PICKS_RE.sub(expand_picks_iframe, iframe_text)
        iframe_text = GDOC_ONLY_RE.sub("", iframe_text)
        iframe_text = WEBPAGE_ONLY_RE.sub(r"\1", iframe_text)

        # Put #+begin_export html on its own line when preceded by text
        iframe_text = re.sub(
            r"^(.+) (#\+begin_export html)",
            r"\1\n\2",
            iframe_text,
            flags=re.MULTILINE,
        )

        # Insert CSS/JS preamble after the last #+OPTIONS line
        insert_pos = 0
        for m in re.finditer(r"^#\+\w+:.*$", iframe_text, re.MULTILINE):
            insert_pos = m.end() + 1
        iframe_text = (
            iframe_text[:insert_pos] + IFRAME_PREAMBLE + iframe_text[insert_pos:]
        )

        iframe_text += IFRAME_FOOTER

        COMPILED_IFRAMES.write_text(iframe_text)
        print(
            f"Compiled {n_macros} strudel macros + {n_picks} picks (iframes) -> {COMPILED_IFRAMES}"
        )

    if "--html" in sys.argv:
        # Export iframes org to HTML via emacsclient (non-blocking, no babel eval)
        org_file = str(COMPILED_IFRAMES)
        elisp = f"""(let ((org-export-babel-evaluate nil))
  (with-current-buffer (find-file-noselect "{org_file}")
    (revert-buffer t t)
    (org-html-export-to-html)))"""
        proc = subprocess.Popen(
            ["emacsclient", "--eval", elisp],
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
        )
        print(
            f"HTML export started (pid {proc.pid}), will write to {COMPILED_IFRAMES.with_suffix('.html')}"
        )


if __name__ == "__main__":
    main()
