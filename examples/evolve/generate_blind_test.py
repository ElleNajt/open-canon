"""Generate blind test page with two games:
1. Model Quiz: guess which of 4 models made each piece
2. Opus A/B: distinguish Opus 4.5 from 4.6
"""

import base64
import json
from pathlib import Path
from urllib.parse import quote

SCRIPT_DIR = Path(__file__).parent
OUTPUT_DIR = SCRIPT_DIR / "output"

# --- Model Quiz config ---
QUIZ_MODELS = {
    "claude": "Claude Opus 4.5",
    "gemini": "Gemini 3.1 Pro",
    "gpt": "ChatGPT 5.2",
    "grok": "Grok 4.1",
}

QUIZ_EXPERIMENTS = [
    ("quiz4_drum_84f7f2ef", "drum loop"),
    ("quiz4_scale_84f7f2ef", "C major arpeggio"),
    ("quiz4_note_84f7f2ef", "single note"),
    ("quiz4_chord_84f7f2ef", "chord progression"),
]

QUIZ_STEP = 20

# --- Opus A/B config ---
AB_EXPERIMENTS = [
    ("diff_drums_v3_84f7f2ef", "drum loop"),
    ("diff_drums_v4_84f7f2ef", "drum loop"),
    ("diff_drums_v5_84f7f2ef", "drum loop"),
    ("diff_major_v3_84f7f2ef", "C major arpeggio"),
    ("diff_major_v4_84f7f2ef", "C major arpeggio"),
    ("diff_major_v5_84f7f2ef", "C major arpeggio"),
    ("diff_note_v1_84f7f2ef", "single note"),
    ("diff_note_v2_84f7f2ef", "single note"),
    ("diff_note_v3_84f7f2ef", "single note"),
    ("quiz_goldberg_84f7f2ef", "Goldberg"),
    ("quiz_goldberg_v2_84f7f2ef", "Goldberg"),
    ("quiz_canon03_84f7f2ef", "Bach Canon 3"),
    ("quiz_canon09_84f7f2ef", "Bach Canon 9"),
    ("quiz_twinkle_84f7f2ef", "Twinkle"),
]

AB_STEP = 25

TRAINING_STEPS = [5, 10, 15, 20, 25, 30]
TRAINING_RUNS = {
    "4.5": ("goldberg_imbue_fb0bde27", "claude"),
    "4.6": ("goldberg_imbue_opus46_84f7f2ef", "claude46"),
}

# Google Apps Script web app URL for logging results
LOG_URL = "https://script.google.com/macros/s/AKfycbwTtBoY4P8xhIyLr4KPfoDldUkauyJRkTXjDRqcrwpvODlG3OrSJg8fy_z1VFPA1YUJiA/exec"


def js_to_embed_url(js_path):
    code = js_path.read_text()
    encoded = base64.b64encode(code.encode()).decode()
    return f"https://strudel.cc/embed#{quote(encoded, safe='')}"


def build_quiz_trials():
    trials = []
    for exp, seed_name in QUIZ_EXPERIMENTS:
        for model_key, model_name in QUIZ_MODELS.items():
            f = OUTPUT_DIR / exp / model_key / f"step_{QUIZ_STEP:02d}.js"
            if not f.exists():
                print(f"MISSING quiz: {exp}/{model_key}")
                continue
            trials.append(
                {
                    "seed": seed_name,
                    "model": model_name,
                    "url": js_to_embed_url(f),
                }
            )
    return trials


def build_ab_trials():
    trials = []
    for exp, seed_name in AB_EXPERIMENTS:
        f45 = OUTPUT_DIR / exp / "claude" / f"step_{AB_STEP:02d}.js"
        f46 = OUTPUT_DIR / exp / "claude46" / f"step_{AB_STEP:02d}.js"
        if not f45.exists() or not f46.exists():
            print(f"MISSING ab: {exp}")
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
    for label, (exp, model) in TRAINING_RUNS.items():
        steps = []
        for step in TRAINING_STEPS:
            f = OUTPUT_DIR / exp / model / f"step_{step:02d}.js"
            if not f.exists():
                print(f"MISSING training: {f}")
                continue
            steps.append({"step": step, "url": js_to_embed_url(f)})
        result[label] = steps
    return result


HTML_TEMPLATE = """\
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Blind Tests: AI Music Edition</title>
<style>
* { box-sizing: border-box; margin: 0; padding: 0; }
body { background: #1a1a2e; color: #e0e0e0; font-family: -apple-system, sans-serif; }
.container { max-width: 700px; margin: 0 auto; padding: 20px; }
h1 { text-align: center; margin: 20px 0; font-size: 1.5em; }
h2 { margin: 16px 0 8px; font-size: 1.2em; }
p { margin: 8px 0; line-height: 1.5; color: #bbb; }

/* Tab navigation */
.tab-bar { display: flex; gap: 4px; margin: 16px 0; border-bottom: 2px solid #333; }
.tab { padding: 10px 20px; font-size: 1em; border: 2px solid #333; border-bottom: none;
  border-radius: 8px 8px 0 0; background: #0d0d1a; color: #888; cursor: pointer; }
.tab:hover { color: #ccc; }
.tab.active { background: #1a1a2e; color: #7b68ee; border-color: #7b68ee; border-bottom: 2px solid #1a1a2e;
  margin-bottom: -2px; }
.game { display: none; }
.game.active { display: block; }

.phase { display: none; }
.phase.active { display: block; }
.seed-label { color: #7b9eee; font-size: 0.9em; margin-bottom: 8px; }
.trial-counter { color: #888; font-size: 0.9em; text-align: center; margin-bottom: 12px; }
.play-row { display: flex; gap: 8px; margin: 12px 0; flex-wrap: wrap; }
.play-btn { padding: 10px 14px; font-size: 0.9em; border: 2px solid #444; border-radius: 8px;
  background: #0d0d1a; color: #ccc; cursor: pointer; text-align: center; }
.play-btn:hover { border-color: #7b68ee; color: #fff; }
.play-btn.playing { border-color: #7b68ee; background: #2a2a4e; color: #fff; }
.vote-row { display: flex; gap: 10px; margin: 16px 0; flex-wrap: wrap; }
.vote-btn { flex: 1; min-width: 120px; padding: 14px 8px; font-size: 0.95em; border: 2px solid #444;
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
.training-label { font-weight: bold; color: #7b68ee; margin-bottom: 4px; }

/* Radio groups */
.radio-group { margin: 16px 0; }
.radio-group .group-label { color: #7b9eee; font-size: 0.9em; margin-bottom: 8px; }
.radio-group label { display: block; padding: 8px 12px; margin: 4px 0; border-radius: 6px;
  cursor: pointer; color: #ccc; border: 1px solid transparent; }
.radio-group label:hover { border-color: #444; }
.radio-group input[type="radio"] { margin-right: 8px; accent-color: #7b68ee; }
.next-btn:disabled { opacity: 0.3; cursor: default; }
.next-btn:disabled:hover { background: transparent; color: #7b68ee; }

/* Confusion matrix */
.confusion-matrix { margin: 20px auto; border-collapse: collapse; font-size: 0.85em; }
.confusion-matrix th, .confusion-matrix td { padding: 6px 10px; text-align: center;
  border: 1px solid #333; }
.confusion-matrix th { color: #7b9eee; font-weight: normal; font-size: 0.85em; }
.confusion-matrix th.row-label { text-align: right; }
.confusion-matrix .diag { background: rgba(68, 170, 136, 0.25); }
.confusion-matrix .off-diag { background: rgba(170, 68, 68, 0.15); }
.confusion-matrix .zero { color: #555; }
.log-note { text-align: center; font-size: 0.75em; color: #555; margin-top: 16px; }
</style>
</head>
<body>
<div class="container">
<h1>Blind Tests: AI Music Edition</h1>
<p style="text-align:center; color:#888;">From <a href="https://ellenajt.github.io/blog/goldborg-variations.html" style="color:#7b9eee;">The Goldborg Variations</a></p>

<div class="tab-bar">
  <div class="tab active" onclick="switchGame('quiz')">Which Model?</div>
  <div class="tab" onclick="switchGame('ab')">Opus 4.5 vs 4.6</div>
</div>

<!-- ============== GAME 1: MODEL QUIZ ============== -->
<div class="game active" id="game-quiz">

<div class="phase active" id="quiz-intro">
<p>Listen to a piece of AI-generated music and guess which model composed it. All models start from the same seed and iterate independently.</p>
<p style="color:#7b9eee;">The models: Claude Opus 4.5, Gemini 3.1 Pro, ChatGPT 5.2, and Grok 4.1</p>
<div class="radio-group">
  <div class="group-label">Name (optional)</div>
  <input type="text" id="quiz-name" placeholder="Anonymous" style="background:#0d0d1a; border:1px solid #444; border-radius:6px; padding:8px 12px; color:#ccc; width:100%; max-width:300px; font-size:0.95em;">
</div>
<div class="radio-group">
  <div class="group-label">Have you taken this quiz before?</div>
  <label><input type="radio" name="quiz-retake" value="first" onchange="checkQuizReady()"> This is my first time taking this quiz</label>
  <label><input type="radio" name="quiz-retake" value="retake" onchange="checkQuizReady()"> I've taken this quiz before</label>
</div>
<div class="radio-group">
  <div class="group-label">Prior exposure to the samples?</div>
  <label><input type="radio" name="quiz-exposure" value="none" onchange="checkQuizReady()"> I haven't listened to any samples from the post</label>
  <label><input type="radio" name="quiz-exposure" value="some" onchange="checkQuizReady()"> I've listened to some samples from the post</label>
  <label><input type="radio" name="quiz-exposure" value="appendix" onchange="checkQuizReady()"> I've listened to the samples these quizzes are based on (appendix)</label>
</div>
<button class="next-btn" id="quiz-start-btn" disabled onclick="quizStart()">Start</button>
</div>

<div class="phase" id="quiz-test">
<div class="trial-counter" id="quiz-counter"></div>
<div class="seed-label" id="quiz-seed"></div>
<div class="iframe-area" id="quiz-iframe-area">
  <iframe src="about:blank" allow="autoplay"></iframe>
</div>
<p style="text-align:center; margin: 12px 0;">Which model made this?</p>
<div class="vote-row" id="quiz-votes"></div>
</div>

<div class="phase" id="quiz-results">
<h2>Results</h2>
<div class="score" id="quiz-score"></div>
<div id="quiz-confusion"></div>
<div id="quiz-reveal"></div>
<p class="log-note">Results are anonymously logged for research.</p>
<button class="restart-btn" onclick="quizRestart()">Play Again</button>
</div>

</div>

<!-- ============== GAME 2: OPUS A/B ============== -->
<div class="game" id="game-ab">

<div class="phase active" id="ab-training">
<p>First, listen to labeled examples from each model to calibrate your ear. These are from the Goldberg Variations seed &mdash; the same seed, evolved independently by each model.</p>
<div style="margin: 20px 0;">
  <div class="training-label">Opus 4.5 (Goldberg seed):</div>
  <div class="play-row" id="training-45-btns"></div>
</div>
<div style="margin: 20px 0;">
  <div class="training-label">Opus 4.6 (Goldberg seed):</div>
  <div class="play-row" id="training-46-btns"></div>
</div>
<div class="iframe-area" id="training-iframe-area" style="display:none;">
  <iframe src="about:blank" allow="autoplay"></iframe>
</div>
<div class="radio-group">
  <div class="group-label">Name (optional)</div>
  <input type="text" id="ab-name" placeholder="Anonymous" style="background:#0d0d1a; border:1px solid #444; border-radius:6px; padding:8px 12px; color:#ccc; width:100%; max-width:300px; font-size:0.95em;">
</div>
<div class="radio-group">
  <div class="group-label">Have you taken this test before?</div>
  <label><input type="radio" name="ab-retake" value="first" onchange="checkAbReady()"> This is my first time taking this test</label>
  <label><input type="radio" name="ab-retake" value="retake" onchange="checkAbReady()"> I've taken this test before</label>
</div>
<div class="radio-group">
  <div class="group-label">Prior exposure to the samples?</div>
  <label><input type="radio" name="ab-exposure" value="none" onchange="checkAbReady()"> I haven't listened to any samples from the post</label>
  <label><input type="radio" name="ab-exposure" value="some" onchange="checkAbReady()"> I've listened to some samples from the post</label>
  <label><input type="radio" name="ab-exposure" value="appendix" onchange="checkAbReady()"> I've listened to the samples these quizzes are based on (appendix)</label>
</div>
<button class="next-btn" id="ab-start-btn" disabled onclick="abStart()">I'm ready, start the test</button>
</div>

<div class="phase" id="ab-test">
<div class="trial-counter" id="ab-counter"></div>
<div class="seed-label" id="ab-seed"></div>
<p style="text-align:center; margin: 8px 0; color:#7b9eee;">A</p>
<div class="iframe-area" id="ab-iframe-a">
  <iframe src="about:blank" allow="autoplay"></iframe>
</div>
<p style="text-align:center; margin: 8px 0; color:#7b9eee;">B</p>
<div class="iframe-area" id="ab-iframe-b">
  <iframe src="about:blank" allow="autoplay"></iframe>
</div>
<p style="text-align:center; margin: 12px 0;">Which one is Opus 4.5?</p>
<div class="vote-row">
  <button class="vote-btn" id="ab-vote-a" onclick="abVote('a')">A is 4.5</button>
  <button class="vote-btn" id="ab-vote-b" onclick="abVote('b')">B is 4.5</button>
</div>
</div>

<div class="phase" id="ab-results">
<h2>Results</h2>
<div class="score" id="ab-score"></div>
<div id="ab-reveal"></div>
<p class="log-note">Results are anonymously logged for research.</p>
<button class="restart-btn" onclick="abRestart()">Play Again</button>
</div>

</div>

</div>

<script>
// --- Data ---
const QUIZ_MODEL_NAMES = __QUIZ_MODEL_NAMES__;
const QUIZ_RAW = __QUIZ_TRIALS__;
const AB_RAW = __AB_TRIALS__;
const TRAINING_45 = __TRAINING_45__;
const TRAINING_46 = __TRAINING_46__;
const LOG_URL = '__LOG_URL__';

// --- Shared ---
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function loadIframe(areaId, url) {
  const area = document.getElementById(areaId);
  const old = area.querySelector('iframe');
  const nw = document.createElement('iframe');
  nw.setAttribute('allow', 'autoplay');
  nw.src = url;
  old.replaceWith(nw);
}

function blankIframe(areaId) {
  const area = document.getElementById(areaId);
  area.querySelector('iframe').src = 'about:blank';
}

function getRadio(name) {
  const el = document.querySelector(`input[name="${name}"]:checked`);
  return el ? el.value : null;
}

function switchGame(which) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.game').forEach(g => g.classList.remove('active'));
  document.querySelector(`.tab[onclick="switchGame('${which}')"]`).classList.add('active');
  document.getElementById('game-' + which).classList.add('active');
  document.querySelectorAll('.iframe-area iframe').forEach(f => { f.src = 'about:blank'; });
}

function showPhase(gamePrefix, phaseId) {
  const game = document.getElementById('game-' + gamePrefix);
  game.querySelectorAll('.phase').forEach(p => p.classList.remove('active'));
  document.getElementById(phaseId).classList.add('active');
}

function logResults(payload) {
  if (!LOG_URL) return;
  fetch(LOG_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'text/plain' },
    body: JSON.stringify(payload),
  }).catch(() => {});
}

// --- Radio readiness checks ---
function checkQuizReady() {
  const ready = getRadio('quiz-retake') && getRadio('quiz-exposure');
  document.getElementById('quiz-start-btn').disabled = !ready;
}

function checkAbReady() {
  const ready = getRadio('ab-retake') && getRadio('ab-exposure');
  document.getElementById('ab-start-btn').disabled = !ready;
}

// --- Model Quiz ---
let quizTrials, quizCurrent, quizAnswers;

function quizStart() {
  quizTrials = shuffle([...QUIZ_RAW]);
  quizCurrent = 0;
  quizAnswers = [];
  showPhase('quiz', 'quiz-test');
  quizShowTrial();
}

function quizShowTrial() {
  const t = quizTrials[quizCurrent];
  document.getElementById('quiz-counter').textContent = `Piece ${quizCurrent + 1} of ${quizTrials.length}`;
  document.getElementById('quiz-seed').textContent = `Seed: ${t.seed}`;

  const row = document.getElementById('quiz-votes');
  row.innerHTML = '';
  shuffle([...QUIZ_MODEL_NAMES]).forEach(name => {
    const btn = document.createElement('button');
    btn.className = 'vote-btn';
    btn.textContent = name;
    btn.onclick = () => quizVote(name);
    row.appendChild(btn);
  });

  loadIframe('quiz-iframe-area', t.url);
}

function quizVote(guess) {
  const t = quizTrials[quizCurrent];
  quizAnswers.push({ seed: t.seed, model: t.model, guess, correct: guess === t.model });
  document.querySelectorAll('#quiz-votes .vote-btn').forEach(b => { b.disabled = true; });
  blankIframe('quiz-iframe-area');
  quizCurrent++;
  if (quizCurrent < quizTrials.length) setTimeout(quizShowTrial, 300);
  else setTimeout(quizShowResults, 300);
}

function buildConfusionMatrix(answers) {
  const models = [...QUIZ_MODEL_NAMES].sort();
  const matrix = {};
  models.forEach(m => { matrix[m] = {}; models.forEach(g => { matrix[m][g] = 0; }); });
  answers.forEach(a => { matrix[a.model][a.guess]++; });

  let html = '<table class="confusion-matrix"><tr><th></th>';
  models.forEach(g => { html += `<th>${g.split(' ')[0]}</th>`; });
  html += '<th>Recall</th></tr>';
  models.forEach(actual => {
    html += `<tr><th class="row-label">${actual.split(' ')[0]}</th>`;
    const rowTotal = models.reduce((s, g) => s + matrix[actual][g], 0);
    models.forEach(guessed => {
      const n = matrix[actual][guessed];
      const cls = actual === guessed ? 'diag' : (n > 0 ? 'off-diag' : '');
      const zero = n === 0 ? ' zero' : '';
      html += `<td class="${cls}${zero}">${n}</td>`;
    });
    const recall = rowTotal > 0 ? Math.round(matrix[actual][actual] / rowTotal * 100) : 0;
    html += `<td style="color:#888;font-size:0.85em">${recall}%</td>`;
    html += '</tr>';
  });
  html += '<tr><th class="row-label">Precision</th>';
  models.forEach(guessed => {
    const colTotal = models.reduce((s, a) => s + matrix[a][guessed], 0);
    const precision = colTotal > 0 ? Math.round(matrix[guessed][guessed] / colTotal * 100) : 0;
    html += `<td style="color:#888;font-size:0.85em">${precision}%</td>`;
  });
  html += '<td></td></tr>';
  html += '</table>';
  html += '<p style="text-align:center;font-size:0.75em;color:#666;">Rows = actual model, Columns = your guess</p>';
  return { html, matrix };
}

function quizShowResults() {
  showPhase('quiz', 'quiz-results');
  const n = quizAnswers.filter(a => a.correct).length;
  document.getElementById('quiz-score').innerHTML =
    `You got <span class="num">${n}</span> out of <span class="num">${quizAnswers.length}</span> correct.` +
    `<br><span style="font-size:0.6em;color:#888">Chance = 1 in 4 (25%)</span>`;

  const { html: cmHtml, matrix } = buildConfusionMatrix(quizAnswers);
  document.getElementById('quiz-confusion').innerHTML = cmHtml;

  const reveal = document.getElementById('quiz-reveal');
  reveal.innerHTML = '';
  quizAnswers.forEach(a => {
    const div = document.createElement('div');
    div.className = 'reveal-item';
    div.innerHTML = `<div class="label">${a.seed}</div>` +
      `<div>${a.correct ? '&#10003;' : '&#10007;'} It was <b>${a.model}</b> &mdash; you guessed <b>${a.guess}</b></div>`;
    div.style.borderColor = a.correct ? '#4a8' : '#a44';
    reveal.appendChild(div);
  });

  logResults({
    game: 'quiz',
    name: document.getElementById('quiz-name').value || 'Anonymous',
    first_time: getRadio('quiz-retake') === 'first',
    exposure: getRadio('quiz-exposure'),
    score: n,
    total: quizAnswers.length,
    answers: quizAnswers.map(a => ({ seed: a.seed, model: a.model, guess: a.guess, correct: a.correct })),
    confusion: matrix,
  });
}

function quizRestart() { showPhase('quiz', 'quiz-intro'); }

// --- Opus A/B ---
let abTrials, abCurrent, abAnswers;

function initTraining() {
  function makeButtons(steps, containerId) {
    const container = document.getElementById(containerId);
    steps.forEach(s => {
      const btn = document.createElement('button');
      btn.className = 'play-btn';
      btn.textContent = 'Step ' + s.step;
      btn.onclick = () => {
        document.querySelectorAll('#game-ab .play-btn').forEach(b => b.classList.remove('playing'));
        btn.classList.add('playing');
        document.getElementById('training-iframe-area').style.display = 'block';
        loadIframe('training-iframe-area', s.url);
      };
      container.appendChild(btn);
    });
  }
  makeButtons(TRAINING_45, 'training-45-btns');
  makeButtons(TRAINING_46, 'training-46-btns');
}

function abStart() {
  blankIframe('training-iframe-area');
  abTrials = shuffle(AB_RAW.map(t => {
    const flip = Math.random() < 0.5;
    return {
      seed: t.seed,
      a_url: flip ? t.url_45 : t.url_46,
      b_url: flip ? t.url_46 : t.url_45,
      a_is_45: flip,
    };
  }));
  abCurrent = 0;
  abAnswers = [];
  showPhase('ab', 'ab-test');
  abShowTrial();
}

function abShowTrial() {
  const t = abTrials[abCurrent];
  document.getElementById('ab-counter').textContent = `Trial ${abCurrent + 1} of ${abTrials.length}`;
  document.getElementById('ab-seed').textContent = `Seed: ${t.seed}`;
  document.getElementById('ab-vote-a').disabled = false;
  document.getElementById('ab-vote-b').disabled = false;
  loadIframe('ab-iframe-a', t.a_url);
  loadIframe('ab-iframe-b', t.b_url);
}

function abVote(which) {
  const t = abTrials[abCurrent];
  const correct = (which === 'a') === t.a_is_45;
  abAnswers.push({ seed: t.seed, guessed: which, correct, a_is_45: t.a_is_45 });
  document.getElementById('ab-vote-a').disabled = true;
  document.getElementById('ab-vote-b').disabled = true;
  blankIframe('ab-iframe-a');
  blankIframe('ab-iframe-b');
  abCurrent++;
  if (abCurrent < abTrials.length) setTimeout(abShowTrial, 300);
  else setTimeout(abShowResults, 300);
}

function abShowResults() {
  showPhase('ab', 'ab-results');
  const n = abAnswers.filter(a => a.correct).length;
  document.getElementById('ab-score').innerHTML =
    `You got <span class="num">${n}</span> out of <span class="num">${abAnswers.length}</span> correct.` +
    `<br><span style="font-size:0.6em;color:#888">Chance = 50%</span>`;
  const reveal = document.getElementById('ab-reveal');
  reveal.innerHTML = '';
  abAnswers.forEach(a => {
    const div = document.createElement('div');
    div.className = 'reveal-item';
    const answer45 = a.a_is_45 ? 'A' : 'B';
    div.innerHTML = `<div class="label">${a.seed}</div>` +
      `<div>${a.correct ? '&#10003;' : '&#10007;'} Opus 4.5 was <b>${answer45}</b> &mdash; you picked <b>${a.guessed.toUpperCase()}</b></div>`;
    div.style.borderColor = a.correct ? '#4a8' : '#a44';
    reveal.appendChild(div);
  });

  logResults({
    game: 'ab',
    name: document.getElementById('ab-name').value || 'Anonymous',
    first_time: getRadio('ab-retake') === 'first',
    exposure: getRadio('ab-exposure'),
    score: n,
    total: abAnswers.length,
    answers: abAnswers.map(a => ({ seed: a.seed, guessed: a.guessed, correct: a.correct, a_is_45: a.a_is_45 })),
  });
}

function abRestart() { showPhase('ab', 'ab-training'); }

// --- Init ---
initTraining();
</script>
</body>
</html>
"""


def main():
    quiz_trials = build_quiz_trials()
    ab_trials = build_ab_trials()
    training = build_training()

    print(f"Quiz: {len(quiz_trials)} trials, A/B: {len(ab_trials)} trials")

    if not training.get("4.5") or not training.get("4.6"):
        print("Missing training samples!")
        return

    html = HTML_TEMPLATE
    html = html.replace("__QUIZ_MODEL_NAMES__", json.dumps(list(QUIZ_MODELS.values())))
    html = html.replace("__QUIZ_TRIALS__", json.dumps(quiz_trials, indent=2))
    html = html.replace("__AB_TRIALS__", json.dumps(ab_trials, indent=2))
    html = html.replace("__TRAINING_45__", json.dumps(training["4.5"]))
    html = html.replace("__TRAINING_46__", json.dumps(training["4.6"]))
    html = html.replace("__LOG_URL__", LOG_URL)

    out_path = SCRIPT_DIR / "blind_test.html"
    out_path.write_text(html)
    print(f"Generated {out_path}")


if __name__ == "__main__":
    main()
