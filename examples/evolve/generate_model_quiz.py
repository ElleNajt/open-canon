"""Generate a multi-model blind test: guess which model made the music."""

import base64
import json
from pathlib import Path
from urllib.parse import quote

SCRIPT_DIR = Path(__file__).parent
OUTPUT_DIR = SCRIPT_DIR / "output"

MODELS = {
    "claude": "Claude Opus 4.5",
    "gemini": "Gemini 3.1 Pro",
    "gpt": "ChatGPT 5.2",
    "grok": "Grok 4.1",
}

# Experiments that have all 4 models with enough steps
EXPERIMENTS = [
    ("goldberg_imbue_v3_ada2a552", "Goldberg Variations"),
    ("goldberg_imbue_fb0bde27", "Goldberg Variations (alt)"),
    ("bach_canon03_e6b3e16f", "Bach Canon 3"),
    ("bach_canon09_e6b3e16f", "Bach Canon 9"),
    ("twinkle_e6b3e16f", "Twinkle Twinkle"),
]

TEST_STEP = 25


def js_to_embed_url(js_path):
    code = js_path.read_text()
    encoded = base64.b64encode(code.encode()).decode()
    return f"https://strudel.cc/embed#{quote(encoded, safe='')}"


def build_trials():
    trials = []
    for exp, seed_name in EXPERIMENTS:
        for model_key, model_name in MODELS.items():
            f = OUTPUT_DIR / exp / model_key / f"step_{TEST_STEP:02d}.js"
            if not f.exists():
                print(f"MISSING: {exp}/{model_key}/step_{TEST_STEP:02d}.js")
                continue
            trials.append(
                {
                    "seed": seed_name,
                    "model": model_name,
                    "url": js_to_embed_url(f),
                }
            )
    return trials


HTML_TEMPLATE = """\
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Model Quiz: Which AI made this music?</title>
<style>
* { box-sizing: border-box; margin: 0; padding: 0; }
body { background: #1a1a2e; color: #e0e0e0; font-family: -apple-system, sans-serif; }
.container { max-width: 700px; margin: 0 auto; padding: 20px; }
h1 { text-align: center; margin: 20px 0; font-size: 1.5em; }
h2 { margin: 16px 0 8px; font-size: 1.2em; }
p { margin: 8px 0; line-height: 1.5; color: #bbb; }
.phase { display: none; }
.phase.active { display: block; }
.seed-label { color: #7b9eee; font-size: 0.9em; margin-bottom: 8px; }
.trial-counter { color: #888; font-size: 0.9em; text-align: center; margin-bottom: 12px; }
.play-row { display: flex; gap: 8px; margin: 12px 0; flex-wrap: wrap; }
.play-btn { padding: 12px 20px; font-size: 1em; border: 2px solid #444; border-radius: 8px;
  background: #0d0d1a; color: #ccc; cursor: pointer; text-align: center; }
.play-btn:hover { border-color: #7b68ee; color: #fff; }
.play-btn.playing { border-color: #7b68ee; background: #2a2a4e; color: #fff; }
.vote-row { display: flex; gap: 10px; margin: 16px 0; flex-wrap: wrap; }
.vote-btn { flex: 1; min-width: 140px; padding: 14px 8px; font-size: 0.95em; border: 2px solid #444;
  border-radius: 8px; background: #0d0d1a; color: #ccc; cursor: pointer; text-align: center; }
.vote-btn:hover { border-color: #7b68ee; }
.vote-btn:disabled { opacity: 0.4; cursor: default; }
.iframe-area { margin: 12px 0; border-radius: 8px; overflow: hidden; background: #0d0d1a;
  border: 1px solid #333; }
.iframe-area iframe { width: 100%; height: 280px; border: none; }
.score { text-align: center; font-size: 1.5em; margin: 20px 0; }
.score .num { color: #7b68ee; font-weight: bold; }
.restart-btn { display: block; margin: 20px auto; padding: 12px 32px; font-size: 1em;
  border: 2px solid #7b68ee; border-radius: 8px; background: #7b68ee; color: #fff; cursor: pointer; }
.restart-btn:hover { background: #5a4abf; }
.reveal-item { margin: 8px 0; padding: 10px; border-radius: 6px; background: #0d0d1a; border: 1px solid #333; }
.reveal-item .label { color: #7b9eee; font-size: 0.85em; }
.next-btn { display: block; margin: 16px auto; padding: 10px 28px; font-size: 1em;
  border: 2px solid #7b68ee; border-radius: 8px; background: transparent; color: #7b68ee; cursor: pointer; }
.next-btn:hover { background: #7b68ee; color: #fff; }
</style>
</head>
<body>
<div class="container">
<h1>Which AI made this music?</h1>

<!-- INTRO PHASE -->
<div class="phase active" id="intro-phase">
<p>You'll hear pieces of music created by four different AI models, all starting from the same seed and iterating on it independently. Listen to each piece, then guess which model composed it.</p>
<p style="color:#7b9eee;">The models: Claude Opus 4.5, Gemini 3.1 Pro, ChatGPT 5.2, and Grok 4.1</p>
<button class="next-btn" onclick="startTest()">Start</button>
</div>

<!-- TEST PHASE -->
<div class="phase" id="test-phase">
<div class="trial-counter" id="trial-counter"></div>
<div class="seed-label" id="seed-label"></div>

<div class="play-row" style="justify-content: center;">
  <button class="play-btn" id="btn-play" onclick="playPiece()">Play</button>
</div>

<div class="iframe-area" id="test-iframe-area">
  <iframe src="about:blank" allow="autoplay"></iframe>
</div>

<p style="text-align:center; margin: 12px 0;">Which model made this?</p>
<div class="vote-row" id="vote-row"></div>
</div>

<!-- RESULTS PHASE -->
<div class="phase" id="results-phase">
<h2>Results</h2>
<div class="score" id="score"></div>
<div id="reveal"></div>
<button class="restart-btn" onclick="restart()">Play Again (new order)</button>
</div>

</div>

<script>
const MODEL_NAMES = __MODEL_NAMES_JSON__;
const RAW_TRIALS = __TRIALS_JSON__;

let trials, current, answers;

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function buildTrials() {
  trials = shuffle([...RAW_TRIALS]);
  current = 0;
  answers = [];
}

function showPhase(id) {
  document.querySelectorAll('.phase').forEach(p => p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function startTest() {
  buildTrials();
  showPhase('test-phase');
  showTrial();
}

function showTrial() {
  const t = trials[current];
  document.getElementById('trial-counter').textContent =
    `Piece ${current + 1} of ${trials.length}`;
  document.getElementById('seed-label').textContent = `Seed: ${t.seed}`;
  document.getElementById('btn-play').classList.remove('playing');

  // build vote buttons
  const row = document.getElementById('vote-row');
  row.innerHTML = '';
  const shuffled = shuffle([...MODEL_NAMES]);
  shuffled.forEach(name => {
    const btn = document.createElement('button');
    btn.className = 'vote-btn';
    btn.textContent = name;
    btn.onclick = () => vote(name);
    row.appendChild(btn);
  });

  // blank the iframe
  const area = document.getElementById('test-iframe-area');
  const old = area.querySelector('iframe');
  const nw = document.createElement('iframe');
  nw.setAttribute('allow', 'autoplay');
  nw.src = 'about:blank';
  old.replaceWith(nw);
}

function playPiece() {
  const t = trials[current];
  const area = document.getElementById('test-iframe-area');
  const old = area.querySelector('iframe');
  const nw = document.createElement('iframe');
  nw.setAttribute('allow', 'autoplay');
  nw.src = t.url;
  old.replaceWith(nw);
  document.getElementById('btn-play').classList.add('playing');
}

function vote(guess) {
  const t = trials[current];
  const correct = guess === t.model;
  answers.push({ seed: t.seed, model: t.model, guess, correct });

  // disable buttons
  document.querySelectorAll('#vote-row .vote-btn').forEach(b => { b.disabled = true; });

  // stop audio
  const area = document.getElementById('test-iframe-area');
  area.querySelector('iframe').src = 'about:blank';

  current++;
  if (current < trials.length) {
    setTimeout(showTrial, 300);
  } else {
    setTimeout(showResults, 300);
  }
}

function showResults() {
  showPhase('results-phase');
  const numCorrect = answers.filter(a => a.correct).length;
  document.getElementById('score').innerHTML =
    `You got <span class="num">${numCorrect}</span> out of <span class="num">${answers.length}</span> correct.` +
    `<br><span style="font-size:0.6em;color:#888">Chance = 1 in 4 (25%)</span>`;

  const reveal = document.getElementById('reveal');
  reveal.innerHTML = '';
  answers.forEach(a => {
    const div = document.createElement('div');
    div.className = 'reveal-item';
    div.innerHTML = `<div class="label">${a.seed}</div>` +
      `<div>${a.correct ? '&#10003;' : '&#10007;'} ` +
      `It was <b>${a.model}</b> &mdash; you guessed <b>${a.guess}</b></div>`;
    div.style.borderColor = a.correct ? '#4a8' : '#a44';
    reveal.appendChild(div);
  });
}

function restart() {
  showPhase('intro-phase');
}
</script>
</body>
</html>
"""


def main():
    trials = build_trials()
    model_names = list(MODELS.values())

    print(f"Built {len(trials)} trials across {len(EXPERIMENTS)} seeds")

    html = HTML_TEMPLATE
    html = html.replace("__MODEL_NAMES_JSON__", json.dumps(model_names))
    html = html.replace("__TRIALS_JSON__", json.dumps(trials, indent=2))

    out_path = SCRIPT_DIR / "model_quiz.html"
    out_path.write_text(html)
    print(f"Generated {out_path}")


if __name__ == "__main__":
    main()
