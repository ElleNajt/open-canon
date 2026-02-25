"""Generate a blind A/B test HTML page for Opus 4.5 vs 4.6."""

import base64
import json
import random
from pathlib import Path
from urllib.parse import quote

SCRIPT_DIR = Path(__file__).parent
OUTPUT_DIR = SCRIPT_DIR / "output"

# Test trials: 9 experiments, each with claude (4.5) and claude46 (4.6)
EXPERIMENTS = [
    ("diff_drums_v3_84f7f2ef", "drum loop"),
    ("diff_drums_v4_84f7f2ef", "drum loop"),
    ("diff_drums_v5_84f7f2ef", "drum loop"),
    ("diff_major_v3_84f7f2ef", "C major arpeggio"),
    ("diff_major_v4_84f7f2ef", "C major arpeggio"),
    ("diff_major_v5_84f7f2ef", "C major arpeggio"),
    ("diff_note_v1_84f7f2ef", "single note"),
    ("diff_note_v2_84f7f2ef", "single note"),
    ("diff_note_v3_84f7f2ef", "single note"),
]

TEST_STEP = 25

# Training examples: labeled samples from Goldberg runs (NOT in the test set)
TRAINING = {
    "4.5": ("goldberg_imbue_fb0bde27", "claude", 30),
    "4.6": ("goldberg_imbue_opus46_84f7f2ef", "claude46", 30),
}


def js_to_embed_url(js_path):
    code = js_path.read_text()
    encoded = base64.b64encode(code.encode()).decode()
    return f"https://strudel.cc/embed#{quote(encoded, safe='')}"


def build_trials():
    trials = []
    for exp, seed_name in EXPERIMENTS:
        f45 = OUTPUT_DIR / exp / "claude" / f"step_{TEST_STEP:02d}.js"
        f46 = OUTPUT_DIR / exp / "claude46" / f"step_{TEST_STEP:02d}.js"
        if not f45.exists() or not f46.exists():
            print(f"MISSING: {exp}")
            continue
        trials.append(
            {
                "seed": seed_name,
                "url_45": js_to_embed_url(f45),
                "url_46": js_to_embed_url(f46),
            }
        )
    return trials


def build_training():
    result = {}
    for label, (exp, model, step) in TRAINING.items():
        f = OUTPUT_DIR / exp / model / f"step_{step:02d}.js"
        if not f.exists():
            print(f"MISSING training: {f}")
            continue
        result[label] = js_to_embed_url(f)
    return result


HTML_TEMPLATE = """\
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Blind Test: Opus 4.5 vs 4.6</title>
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
.play-row { display: flex; gap: 12px; margin: 12px 0; }
.play-btn { flex: 1; padding: 12px; font-size: 1em; border: 2px solid #444; border-radius: 8px;
  background: #0d0d1a; color: #ccc; cursor: pointer; text-align: center; }
.play-btn:hover { border-color: #7b68ee; color: #fff; }
.play-btn.playing { border-color: #7b68ee; background: #2a2a4e; color: #fff; }
.vote-row { display: flex; gap: 12px; margin: 16px 0; }
.vote-btn { flex: 1; padding: 14px; font-size: 1em; border: 2px solid #444; border-radius: 8px;
  background: #0d0d1a; color: #ccc; cursor: pointer; }
.vote-btn:hover { border-color: #7b68ee; }
.vote-btn:disabled { opacity: 0.4; cursor: default; }
.iframe-area { margin: 12px 0; border-radius: 8px; overflow: hidden; background: #0d0d1a;
  border: 1px solid #333; }
.iframe-area iframe { width: 100%; height: 280px; border: none; }
.result { margin: 8px 0; padding: 12px; border-radius: 8px; }
.result.correct { background: #1a3a1a; border: 1px solid #4a8; }
.result.wrong { background: #3a1a1a; border: 1px solid #a44; }
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
.training-label { font-weight: bold; color: #7b68ee; margin-bottom: 4px; }
</style>
</head>
<body>
<div class="container">
<h1>Blind Test: Can you tell Opus 4.5 from 4.6?</h1>

<!-- TRAINING PHASE -->
<div class="phase active" id="training-phase">
<p>First, listen to a labeled example from each model to calibrate your ear.</p>

<div style="margin: 20px 0;">
  <div class="training-label">Opus 4.5 (Goldberg seed, step 30):</div>
  <div class="play-row">
    <button class="play-btn" onclick="playTraining(this, TRAINING_45)">Play Opus 4.5 Example</button>
  </div>
</div>

<div style="margin: 20px 0;">
  <div class="training-label">Opus 4.6 (Goldberg seed, step 30):</div>
  <div class="play-row">
    <button class="play-btn" onclick="playTraining(this, TRAINING_46)">Play Opus 4.6 Example</button>
  </div>
</div>

<div class="iframe-area" id="training-iframe-area" style="display:none;">
  <iframe src="about:blank" allow="autoplay"></iframe>
</div>

<button class="next-btn" onclick="startTest()">I'm ready, start the test</button>
</div>

<!-- TEST PHASE -->
<div class="phase" id="test-phase">
<div class="trial-counter" id="trial-counter"></div>
<div class="seed-label" id="seed-label"></div>

<div class="play-row">
  <button class="play-btn" id="btn-a" onclick="playChoice('a')">Play A</button>
  <button class="play-btn" id="btn-b" onclick="playChoice('b')">Play B</button>
</div>

<div class="iframe-area" id="test-iframe-area">
  <iframe src="about:blank" allow="autoplay"></iframe>
</div>

<p style="text-align:center; margin: 12px 0;">Which one is Opus 4.5?</p>
<div class="vote-row">
  <button class="vote-btn" id="vote-a" onclick="vote('a')">A is 4.5</button>
  <button class="vote-btn" id="vote-b" onclick="vote('b')">B is 4.5</button>
</div>
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
const TRAINING_45 = "__TRAINING_45__";
const TRAINING_46 = "__TRAINING_46__";

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
  trials = RAW_TRIALS.map(t => {
    const flip = Math.random() < 0.5;
    return {
      seed: t.seed,
      a_url: flip ? t.url_45 : t.url_46,
      b_url: flip ? t.url_46 : t.url_45,
      a_is_45: flip,
    };
  });
  shuffle(trials);
  current = 0;
  answers = [];
}

function showPhase(id) {
  document.querySelectorAll('.phase').forEach(p => p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function playTraining(btn, url) {
  const area = document.getElementById('training-iframe-area');
  area.style.display = 'block';
  const old = area.querySelector('iframe');
  const nw = document.createElement('iframe');
  nw.setAttribute('allow', 'autoplay');
  nw.src = url;
  old.replaceWith(nw);
  document.querySelectorAll('#training-phase .play-btn').forEach(b => b.classList.remove('playing'));
  btn.classList.add('playing');
}

function startTest() {
  // stop training audio
  const tArea = document.getElementById('training-iframe-area');
  tArea.querySelector('iframe').src = 'about:blank';
  buildTrials();
  showPhase('test-phase');
  showTrial();
}

function showTrial() {
  const t = trials[current];
  document.getElementById('trial-counter').textContent = `Trial ${current + 1} of ${trials.length}`;
  document.getElementById('seed-label').textContent = `Seed: ${t.seed}`;
  document.getElementById('btn-a').classList.remove('playing');
  document.getElementById('btn-b').classList.remove('playing');
  document.getElementById('vote-a').disabled = false;
  document.getElementById('vote-b').disabled = false;
  // blank the iframe
  const area = document.getElementById('test-iframe-area');
  area.querySelector('iframe').src = 'about:blank';
}

function playChoice(which) {
  const t = trials[current];
  const url = which === 'a' ? t.a_url : t.b_url;
  const area = document.getElementById('test-iframe-area');
  const old = area.querySelector('iframe');
  const nw = document.createElement('iframe');
  nw.setAttribute('allow', 'autoplay');
  nw.src = url;
  old.replaceWith(nw);
  document.getElementById('btn-a').classList.toggle('playing', which === 'a');
  document.getElementById('btn-b').classList.toggle('playing', which === 'b');
}

function vote(which) {
  const t = trials[current];
  const correct = (which === 'a') === t.a_is_45;
  answers.push({ seed: t.seed, guessed: which, correct, a_is_45: t.a_is_45 });

  document.getElementById('vote-a').disabled = true;
  document.getElementById('vote-b').disabled = true;

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
    `<br><span style="font-size:0.6em;color:#888">Chance = ${answers.length > 0 ? '50%' : 'N/A'}</span>`;

  const reveal = document.getElementById('reveal');
  reveal.innerHTML = '';
  answers.forEach((a, i) => {
    const div = document.createElement('div');
    div.className = `reveal-item`;
    const answer45 = a.a_is_45 ? 'A' : 'B';
    div.innerHTML = `<div class="label">${a.seed}</div>` +
      `<div>${a.correct ? '&#10003;' : '&#10007;'} Opus 4.5 was <b>${answer45}</b> &mdash; you picked <b>${a.guessed.toUpperCase()}</b></div>`;
    div.style.borderColor = a.correct ? '#4a8' : '#a44';
    reveal.appendChild(div);
  });
}

function restart() {
  showPhase('training-phase');
}
</script>
</body>
</html>
"""


def main():
    trials = build_trials()
    training = build_training()

    if not training.get("4.5") or not training.get("4.6"):
        print("Missing training samples!")
        return

    html = HTML_TEMPLATE
    html = html.replace("__TRAINING_45__", json.dumps(training["4.5"]))
    html = html.replace("__TRAINING_46__", json.dumps(training["4.6"]))
    html = html.replace("__TRIALS_JSON__", json.dumps(trials, indent=2))

    out_path = SCRIPT_DIR / "blind_test.html"
    out_path.write_text(html)
    print(f"Generated {out_path} with {len(trials)} trials")


if __name__ == "__main__":
    main()
