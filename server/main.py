"""
Collaborative vibe-duet server.

- Prompts processed immediately, rate limited to 60 per 15 minutes
- Claude edits the current code based on each prompt
- History of all versions for playback
"""

import asyncio
import base64
import json
import os
import re
import shutil
import subprocess
import tempfile
import time
from collections import deque
from pathlib import Path

import anthropic
import httpx
from fastapi import FastAPI, Request, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse, JSONResponse, PlainTextResponse
from starlette.middleware.wsgi import WSGIMiddleware

if os.environ.get("USE_FIRESTORE"):
    from google.cloud import firestore

    db = firestore.Client()
    print("Firestore connected")
else:
    db = None
    print("Firestore disabled, using in-memory state")

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

anthropic_client = anthropic.AsyncAnthropic()
OPENROUTER_API_KEY = os.environ.get("OPENROUTER_API_KEY")

# Anthropic models (need special API client)
ANTHROPIC_MODELS = {
    "claude-haiku": "claude-haiku-4-5-20251001",
    "claude-sonnet": "claude-sonnet-4-20250514",
    "claude-opus-4.5": "claude-opus-4-5-20251101",
    "claude-opus-4.6": "claude-opus-4-6",
}

# Load models config from models.json if it exists
# Format:
#   {
#     "models": ["claude-haiku", "qwen/qwen3-235b-a22b", "deepseek/deepseek-chat"],
#     "default": "qwen/qwen3-235b-a22b"
#   }
# Anthropic models use short names (claude-haiku, claude-sonnet, claude-opus-4.5).
# Anything else is treated as an OpenRouter model ID and used directly.
_models_config_path = os.path.join(
    os.path.dirname(os.path.abspath(__file__)), "..", "models.json"
)
if not os.path.isfile(_models_config_path):
    _models_config_path = os.path.join(
        os.path.dirname(os.path.abspath(__file__)), "models.json"
    )


def _build_model_entry(name: str) -> dict:
    """Turn a model name into a provider/model config entry."""
    if name in ANTHROPIC_MODELS:
        return {"provider": "anthropic", "model": ANTHROPIC_MODELS[name]}
    # Anything with a slash is an OpenRouter model ID
    if "/" in name:
        return {"provider": "openrouter", "model": name}
    # Bare name — assume OpenRouter, user's responsibility
    return {"provider": "openrouter", "model": name}


if os.path.isfile(_models_config_path):
    with open(_models_config_path) as f:
        _config = json.load(f)
    _enabled = _config.get("models", [])
    AVAILABLE_MODELS = {name: _build_model_entry(name) for name in _enabled}
    DEFAULT_MODEL = _config.get("default", _enabled[0] if _enabled else "claude-sonnet")
    print(
        f"Loaded models.json: {list(AVAILABLE_MODELS.keys())} (default: {DEFAULT_MODEL})"
    )
else:
    # No config — default set for local dev
    _default_models = ["claude-sonnet", "claude-haiku", "claude-opus-4.5"]
    AVAILABLE_MODELS = {name: _build_model_entry(name) for name in _default_models}
    DEFAULT_MODEL = "claude-sonnet"
    print(f"No models.json found, defaults: {list(AVAILABLE_MODELS.keys())}")

# Path to live.js on disk (for editor sync)
LIVE_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "live.js")

# Git repo for code history
code_repo_dir = tempfile.mkdtemp(prefix="vibe-duet-code-")
code_file_path = os.path.join(code_repo_dir, "live.js")


def init_code_repo():
    """Initialize git repo for tracking code changes."""
    subprocess.run(["git", "init"], cwd=code_repo_dir, capture_output=True)
    subprocess.run(
        ["git", "config", "user.email", "vibe-duet@local"],
        cwd=code_repo_dir,
        capture_output=True,
    )
    subprocess.run(
        ["git", "config", "user.name", "vibe-duet"],
        cwd=code_repo_dir,
        capture_output=True,
    )


def commit_code(code: str, message: str) -> str | None:
    """Write code to file and commit. Returns the commit hash."""
    with open(code_file_path, "w") as f:
        f.write(code)

    subprocess.run(["git", "add", "live.js"], cwd=code_repo_dir, capture_output=True)

    result = subprocess.run(
        ["git", "commit", "-m", message],
        cwd=code_repo_dir,
        capture_output=True,
        text=True,
    )

    if result.returncode == 0:
        # Get commit hash
        hash_result = subprocess.run(
            ["git", "rev-parse", "HEAD"],
            cwd=code_repo_dir,
            capture_output=True,
            text=True,
        )
        return hash_result.stdout.strip()[:8]
    return None


def get_diff_from_commit(commit_hash: str) -> str:
    """Get the diff introduced by a specific commit."""
    result = subprocess.run(
        ["git", "show", "--format=", commit_hash],
        cwd=code_repo_dir,
        capture_output=True,
        text=True,
    )
    return result.stdout.strip()


def get_recent_fix_history(n: int = 3) -> list[dict]:
    """Get the last N fix attempts with their diffs and errors."""
    # This will be populated by fix_error
    return fix_history[-n:] if fix_history else []


# Track fix attempts with their diffs
fix_history: list[dict] = []  # [{commit, diff, error, timestamp}, ...]

# Rate limiting: per-IP and global daily limits
RATE_LIMIT_PER_IP = None  # disabled — unreliable behind proxies
RATE_LIMIT_GLOBAL = 2000
RATE_WINDOW = 24 * 60 * 60  # 24 hours

# State
current_code = '$: s("bd cp bd cp")'
queue: list[dict] = []  # {name, prompt, timestamp}
history: list[dict] = []  # {name, prompt, code, timestamp}
connections: list[WebSocket] = []
request_times: deque = deque()  # global timestamps
request_times_by_ip: dict[str, deque] = {}  # ip -> deque of timestamps
processing = False
processing_item: dict | None = None  # Currently processing prompt
processing_task: asyncio.Task | None = None  # Cancellable task for in-flight LLM call
repeating_prompts: list[dict] = []  # {id, name, prompt, interval, next_run}


def sync_live_file():
    """Write current_code to live.js on disk."""
    try:
        with open(LIVE_FILE, "w") as f:
            f.write(current_code)
    except Exception as e:
        print(f"Error writing live.js: {e}")


def load_state():
    """Load state from Firestore on startup (or just init if no Firestore)."""
    global current_code, history
    if db is not None:
        try:
            doc = db.collection("state").document("current").get()
            if doc.exists:
                data = doc.to_dict()
                current_code = strip_markdown_fences(data.get("code", current_code))
                history = data.get("history", [])
                print(f"Loaded state: {len(history)} history entries")
        except Exception as e:
            print(f"Error loading state: {e}")
    # Initialize git repo and commit current code
    init_code_repo()
    commit_code(current_code, "Initial state")


def save_state():
    """Save state to Firestore (if available)."""
    if db is None:
        return
    try:
        db.collection("state").document("current").set(
            {
                "code": current_code,
                "history": history[-20:],  # Keep last 20 entries
            }
        )
    except Exception as e:
        print(f"Error saving state: {e}")


SYSTEM_PROMPT = """You edit Strudel live music code. Given the current code and a user request, return ONLY the updated code - no explanation, no markdown fences.

CRITICAL: ONLY use the functions and parameters listed below. Do NOT invent, guess, or hallucinate any function names. If a function is not in this list, it does not exist. Using made-up functions will cause errors.

Keep changes minimal and musical. Evolve slowly — change one or two things at a time, not everything. Preserve the tempo and key unless asked to change them. Keep the total code under 500 lines — remove unused or redundant tracks rather than accumulating.

## Strudel Reference

Structure: Every track MUST start with $: — this is required for sound to play. stack(...) combines patterns within a track. setcps(bpm/60/4) sets tempo.
Sounds: .sound() or .s() — sawtooth, square, triangle, sine, pulse, supersaw, piano, bd, sn, hh, oh, cp, cr, rim, mt, ht, lt, cb, rd
Notes: note("c4 e4 g4"), n("0 2 4").scale("C:minor"), freq(440)
Sharps use "s" not "#": cs4, fs4, gs4. Flats use "b": db4, eb4, bb4.
Mini-notation: [] subdivide, <> alternate, * repeat, / slow, , polyrhythm, ? random, : sample, ~ rest, ! replicate

## Mini-notation
- [brackets] subdivide time: s("[bd sd] hh") plays bd and sd in first half, hh in second
- <angles> alternate per cycle: s("bd <sn cp>") plays sn on odd cycles, cp on even
- * repeats: s("hh*4") plays 4 hi-hats per cycle
- / slows: s("bd/2") plays kick every 2 cycles
- , polyrhythm: s("[bd, hh hh hh]") layers kick with 3 hi-hats
- ? random: s("bd?") 50% chance to play
- : sample index: s("bd:3") picks the 4th kick variation
- ~ rest: s("bd ~ sn ~") adds silence
- ! replicate: s("bd!3") same as "bd bd bd"

## COMPLETE SAMPLE LIST

### Core Drums (uzu-drumkit) - USE THESE FIRST
bd (kick), sn (snare), hh (closed hat), oh (open hat), cp (clap), cr (crash), rim (rimshot), mt/ht/lt (toms), cb (cowbell), rd (ride), sh (shaker), tb (tambourine), brk (break), misc

### Dirt Samples
casio, crow, insect, wind, jazz, metal, east, space, numbers

### Orchestral (vcsl)
Drums: bassdrum1, bassdrum2, bongo, conga, darbuka, framedrum, timpani, timpani_roll, timpani2
Snares: snare_modern, snare_hi, snare_low, snare_rim
Toms: tom_mallet, tom_stick, tom_rim, tom2_mallet, tom2_stick, tom2_rim
Recorders: recorder_alto_stacc, recorder_alto_vib, recorder_alto_sus, recorder_bass_stacc, recorder_bass_vib, recorder_bass_sus, recorder_soprano_stacc, recorder_soprano_sus, recorder_tenor_stacc, recorder_tenor_vib, recorder_tenor_sus
Ocarinas: ocarina_small_stacc, ocarina_small, ocarina, ocarina_vib
Organs: pipeorgan_loud_pedal, pipeorgan_loud, pipeorgan_quiet_pedal, pipeorgan_quiet, organ_4inch, organ_8inch, organ_full
Wind: harmonica, harmonica_soft, harmonica_vib, super64, super64_acc, super64_vib, didgeridoo, saxello, saxello_stacc, saxello_vib, sax
Other: trainwhistle, siren, ballwhistle

### Drum Machines (use Machine_type format, e.g., RolandTR808_bd)
Machines: RolandTR808, RolandTR909, RolandTR707, RolandTR606, RolandTR505, RolandTR626, LinnDrum, LinnLM1, LinnLM2, Linn9000, AkaiMPC60, AkaiLinn, OberheimDMX, EmuSP12, EmuDrumulator, KorgM1, KorgKR55, BossDR110, BossDR220, BossDR550, CasioRZ1, YamahaRM50
Types: _bd, _sn, _hh, _oh, _cp, _cr, _rim, _ht, _mt, _lt, _cb, _rd, _sh, _tb, _perc, _misc

### Piano
piano (chromatic samples, use with note())

## Synths (use with .sound())
Waveforms: sawtooth/saw, square/sqr, triangle/tri, sine/sin, pulse
Special: supersaw (unison saw), sbd (synthetic bass drum)
Noise: white, pink, brown, crackle

## Speech Samples (shabda, with pitch control)
Use samples() with shabda/speech to load spoken words as samples with optional pitch shifting.
Pitch uses Google TTS neural synthesis, so it sounds natural (no chipmunk effect).

IMPORTANT: Each samples() call must use exactly ONE voice path. Commas separate words within that path, NOT different paths. Use separate samples() calls for different languages or voices.

samples('shabda/speech:word1,word2,a_phrase')     // OK: multiple words, one voice
samples('shabda/speech/fr-FR/m:magnifique')       // OK: one word, French male voice

// WRONG: mixing paths in one call
// samples('shabda/speech:hello,shabda/speech/ja-JP/f:world')

Languages: en-US, en-GB, fr-FR, de-DE, es-ES, it-IT, ja-JP, ko-KR, pt-BR, ru-RU, etc.
Gender: f (default) or m

Basic usage:
  $: samples('shabda/speech:hello,world'), s("hello world")
  $: samples('shabda/speech:hello,world'), s("<hello world>")  // alternates

With pitch (semitones, -20 to +20):
  $: samples('shabda/speech:hello,world?pitch=4'), s("hello_p4 world_p4")
  $: samples('shabda/speech:hello?pitch=-3'), s("hello_p-3")

Multiple pitches for chords/harmony:
  $: samples('shabda/speech:hello?pitch=0'), samples('shabda/speech:hello?pitch=4'), samples('shabda/speech:hello?pitch=7'), stack(s("hello"), s("hello_p4"), s("hello_p7"))

Language/gender params (default: en-GB female):
  $: samples('shabda/speech/en-US/m:hello,world'), s("hello world")

Pitch-aware sample names: when pitch!=0, sample names get a _p suffix (e.g. hello_p4, hello_p-3).
When pitch=0 or omitted, sample names are plain (e.g. hello, world).
All standard effects (.room(), .delay(), .gain(), etc.) work on shabda samples.

Example:
samples('shabda/speech:the_drum,forever'), samples('shabda/speech/fr-FR/m:magnifique')
$: s("the_drum*2").chop(16).speed(rand.range(0.85, 1.1))
$: s("forever magnifique").slow(4).late(0.125)

### Filters
.lpf(hz) or .cutoff(hz) — lowpass filter
.hpf(hz) or .hcutoff(hz) — highpass filter
.bpf(hz) or .bandf(hz) — bandpass filter
.lpq(q) or .resonance(q) — lowpass Q (0-50)
.hpq(q) or .hresonance(q) — highpass Q
.bpq(q) or .bandq(q) — bandpass Q
.djf(0-1) — DJ filter (0=lowpass, 1=highpass)
.vowel("a e i o u") — formant filter
.ftype(n) — filter type: 0=12db, 1=ladder, 2=24db
.fanchor(n) — filter anchor point

### Filter Envelopes
.lpenv(n), .hpenv(n), .bpenv(n) — filter envelope amount
.lpattack(s), .lpdecay(s), .lpsustain(0-1), .lprelease(s) — lowpass envelope ADSR
.hpattack(s), .hpdecay(s), .hpsustain(0-1), .hprelease(s) — highpass envelope ADSR

### Amplitude Envelope
.attack(s), .decay(s), .sustain(0-1), .release(s), .hold(s)

### Gain & Dynamics
.gain(0-1), .velocity(0-1), .postgain(n)
.compressor("threshold:ratio:knee:attack:release") — dynamics compressor, all params in one colon-separated string

### Reverb
.room(0-1) — reverb send amount
.size(0-1) or .roomsize(n) — reverb size
.roomlp(hz) — reverb lowpass

### Delay
.delay(0-1) — delay send amount
.delaytime(s) or .dt(s) — delay time
.delayfeedback(0-1) or .dfb(n) — delay feedback

### Distortion
.distort(0-1) — distortion
.crush(bits) — bitcrushing (lower = more crushed)
.shape(0-1) — waveshaping
.drive(0-1) — overdrive
.coarse(n) — sample rate reduction
.triode(n) — triode simulation

### Panning & Spatial
.pan(0-1) — stereo position (0=left, 0.5=center, 1=right)

### Pitch
.detune(cents), .octave(n)
.slide(n), .accelerate(n)
.penv(n) — pitch envelope amount
.pattack(s), .pdecay(s), .psustain(0-1), .prelease(s)

### FM Synthesis
.fmi(n) or .fm(n) — FM modulation index
.fmh(n) — FM harmonic ratio
.fmenv(n) — FM envelope amount
.fmattack(s), .fmdecay(s), .fmsustain(0-1), .fmrelease(s)

### Tremolo (Amplitude Modulation)
.tremolo(depth) or .trem(depth)
.tremolosync(cycles) — tremolo speed in cycles
.tremolodepth(n), .tremoloskew(0-1), .tremoloshape("sine tri square saw")

### Phaser
.phaser(rate) — phaser rate
.phaserdepth(n), .phasersweep(n), .phasercenter(hz)

### Leslie Rotary
.leslie(speed), .lrate(n), .lsize(n)

### Ring Modulation
.ring(n), .ringf(hz), .ringdf(n)

### Sampler Controls
.begin(0-1), .end(0-1) — sample start/end position
.speed(n) — playback speed (negative = reverse)
.loop(1), .loopBegin(n), .loopEnd(n)
.cut(n) — cut group (monophonic behavior)
.clip(n), .legato(n) — note duration control
.stretch(n) — time-stretch
.chop(n) — chop sample into n pieces
.striate(n) — granular striate

### Pattern Speed
.slow(n), .fast(n), .hurry(n)

### Pattern Structure
.rev() — reverse
.palindrome() — forward then backward
.ply(n) — repeat each event n times
.iter(n), .iterBack(n) — shift pattern per cycle

### Conditional
.every(n, fn), .sometimes(fn), .rarely(fn), .often(fn)
.sometimesBy(0-1, fn), .when(fn, fn)

### Layering
.jux(fn), .juxBy(n, fn) — left=original, right=modified
.off(time, fn) — offset copy with modification
.echo(n, time, feedback) — echo copies

### Randomness
.degradeBy(0-1) — randomly drop events

### Euclidean
.euclid(hits, steps) — euclidean rhythm

### Time
.early(n), .late(n), .swing(n)

### Tonal
.transpose(n), .scale("C:minor"), .chord("major minor")
.arp("up down random") — arpeggiate chords
.voicing() — voice chords

### Value Operations
.add(n), .sub(n), .mul(n), .div(n)
.range(min, max) — scale 0-1 signal to range

### Signals (continuous patterns)
sine, cosine, saw, tri, square, rand, perlin — use with .range()
Example: .lpf(sine.range(200, 4000).slow(8))

## Notes
note("c4 e4 g4") - note names with octave (2=low bass, 4=middle, 6=high)
Sharps: cs4, ds4, fs4, gs4, as4
Flats: db4, eb4, gb4, ab4, bb4

## Sample repitching
All samples can be repitched with note(). Default pitch is c2 (no change).
  $: note("c2 e2 g2").s("bd").clip(1)   // repitched kick drum
  $: samples('shabda/speech:ah'), note("c2 d2 e2 g2").s("ah").clip(1)  // pitched speech

## Mic Recordings
Users can record audio from their mic. Each recording becomes a named sample bank.
Load all mic samples: samples('/mic-samples/strudel.json')
Play by name: s("my_voice"), s("recording"), s("recording:1")
The recording name (chosen by the user) becomes the sample name in Strudel.
If there are multiple recordings with the same name, use :N to select (e.g. s("recording:2")).
Works with all effects, slicing (.chop, .slice, .loopAt), and repitching.
The available mic recordings will be listed in the user message when present.

### Arrangement
arrange([cycles, pattern], ...) — play sections in sequence
Example: arrange([8, stack(s("bd*4"), note("c4 e4 g4"))], [4, s("hh*8")])
seqPLoop([start, stop, pattern], ...) — overlapping sections by cycle range

### Orbit & Routing
.orbit(n) — route to different effect buses (each has own reverb/delay)
.bus(n), .channel(n)

## Hydra Visuals
Add `await initHydra()` at the top to enable visuals. Hydra functions chain together.

Sources: osc(freq,sync,offset), shape(sides), noise(scale), voronoi(scale), gradient()
Transforms: .color(r,g,b), .rotate(angle), .scale(amt), .kaleid(sides), .pixelate(amt)
Blend: .diff(src), .add(src,amt), .modulate(src), .modulateScale(src)
Output: .out() sends to screen

Use H(pattern) to sync Strudel patterns to Hydra params:
  shape(H("3 4 5")).out()

Audio-reactive with detectAudio:
  await initHydra({detectAudio:true})
  osc(10).modulate(noise(()=>a.fft[0]*2)).out()

Feed Strudel visuals to Hydra with feedStrudel:
  await initHydra({feedStrudel:1})
  src(s0).kaleid(4).out()

Example with music + visuals:
await initHydra()
osc(10,0.1,1).color(0.9,0.3,0.5).kaleid(H("<3 4 5 6>")).out()
$: s("bd cp bd cp")
$: s("hh*4").gain(0.6)
$: note("c3 eb3 g3").sound("sawtooth").lpf(800).room(0.3)
"""


async def broadcast(msg: dict):
    """Send to all connected clients."""
    data = json.dumps(msg)
    for ws in connections[:]:
        try:
            await ws.send_text(data)
        except:
            if ws in connections:
                connections.remove(ws)


def get_rate_limit_info(ip: str = None):
    """Return (global_used, ip_used, seconds_until_reset, is_limited, reason)."""
    now = time.time()
    # Clean global timestamps
    while request_times and request_times[0] < now - RATE_WINDOW:
        request_times.popleft()
    global_used = len(request_times)

    # Clean per-IP timestamps
    ip_used = 0
    if ip and ip in request_times_by_ip:
        ip_times = request_times_by_ip[ip]
        while ip_times and ip_times[0] < now - RATE_WINDOW:
            ip_times.popleft()
        ip_used = len(ip_times)

    # Calculate reset time from oldest relevant timestamp
    reset_in = 0
    if global_used >= RATE_LIMIT_GLOBAL and request_times:
        reset_in = max(reset_in, int((request_times[0] + RATE_WINDOW) - now))
    if (
        RATE_LIMIT_PER_IP is not None
        and ip
        and ip_used >= RATE_LIMIT_PER_IP
        and ip in request_times_by_ip
        and request_times_by_ip[ip]
    ):
        reset_in = max(reset_in, int((request_times_by_ip[ip][0] + RATE_WINDOW) - now))

    ip_limited = RATE_LIMIT_PER_IP is not None and ip_used >= RATE_LIMIT_PER_IP
    is_limited = global_used >= RATE_LIMIT_GLOBAL or ip_limited
    reason = None
    if global_used >= RATE_LIMIT_GLOBAL:
        reason = "global"
    elif ip_limited:
        reason = "ip"

    return global_used, ip_used, max(0, reset_in), is_limited, reason


def record_request(ip: str = None):
    """Record a request for rate limiting."""
    now = time.time()
    request_times.append(now)
    if ip:
        if ip not in request_times_by_ip:
            request_times_by_ip[ip] = deque()
        request_times_by_ip[ip].append(now)


def strip_markdown_fences(code: str) -> str:
    """Strip markdown fences and accidental string wrappers from model output."""
    # Strip markdown fences: ```javascript\n...\n```
    if code.startswith("```"):
        lines = code.split("\n")
        code = "\n".join(lines[1:-1] if lines[-1] == "```" else lines[1:])

    # Strip variable assignment wrappers: const code = `...`; or let x = "...";
    import re

    m = re.match(
        r'^(?:const|let|var)\s+\w+\s*=\s*(`[\s\S]*`|"[\s\S]*"|\'[\s\S]*\')\s*;?\s*$',
        code,
    )
    if m:
        inner = m.group(1)
        code = inner[1:-1]  # strip the quotes/backticks

    # Strip bare template literal wrapper: `...entire code...`
    if code.startswith("`") and code.endswith("`") and code.count("`") == 2:
        code = code[1:-1]

    # Strip bare double-quote wrapper (entire response is one JSON string)
    if code.startswith('"') and code.endswith('"') and "$:" in code:
        import json as _json

        parsed = _json.loads(code)
        if isinstance(parsed, str):
            code = parsed

    # Strip bare single-quote wrapper
    if code.startswith("'") and code.endswith("'") and "$:" in code:
        code = code[1:-1]

    return code


async def call_model(model_key: str, prompt: str, messages: list) -> str:
    """Call an LLM and return the response. Routes to Anthropic or OpenRouter."""
    config = AVAILABLE_MODELS.get(model_key, AVAILABLE_MODELS[DEFAULT_MODEL])
    model_name = config["model"]
    provider = config["provider"]
    user_msg_len = sum(
        len(m["content"])
        if isinstance(m["content"], str)
        else sum(
            len(p.get("text", "")) for p in m["content"] if p.get("type") == "text"
        )
        for m in messages
        if m["role"] == "user"
    )
    print(f"\n{'=' * 60}")
    print(f"LLM CALL: {model_key} ({provider}/{model_name})")
    print(f"  System prompt: {len(prompt)} chars")
    print(f"  Messages: {len(messages)} ({user_msg_len} chars user text)")
    t0 = time.time()

    if provider == "anthropic":
        response = await anthropic_client.messages.create(
            model=model_name,
            max_tokens=16384,
            system=prompt,
            messages=messages,
        )
        result = strip_markdown_fences(response.content[0].text.strip())
        elapsed = time.time() - t0
        in_tok = response.usage.input_tokens
        out_tok = response.usage.output_tokens
        print(f"  Response: {len(result)} chars in {elapsed:.1f}s")
        print(f"  Tokens: {in_tok} in / {out_tok} out")
        print(f"{'=' * 60}\n")
        return result
    else:
        # OpenRouter — convert Anthropic message format to OpenAI format
        openai_messages = [{"role": "system", "content": prompt}]
        for msg in messages:
            content = msg["content"]
            if isinstance(content, str):
                openai_messages.append({"role": msg["role"], "content": content})
            elif isinstance(content, list):
                # Extract text parts (skip images for OpenRouter for now)
                text_parts = [p["text"] for p in content if p.get("type") == "text"]
                openai_messages.append(
                    {"role": msg["role"], "content": "\n".join(text_parts)}
                )

        async with httpx.AsyncClient() as http_client:
            response = await http_client.post(
                "https://openrouter.ai/api/v1/chat/completions",
                headers={
                    "Authorization": f"Bearer {OPENROUTER_API_KEY}",
                    "Content-Type": "application/json",
                },
                json={
                    "model": model_name,
                    "max_tokens": 16384,
                    "messages": openai_messages,
                },
                timeout=120,
            )
            data = response.json()
            if "error" in data:
                raise Exception(f"OpenRouter error: {data['error']}")
            result = strip_markdown_fences(
                data["choices"][0]["message"]["content"].strip()
            )
            elapsed = time.time() - t0
            usage = data.get("usage", {})
            in_tok = usage.get("prompt_tokens", "?")
            out_tok = usage.get("completion_tokens", "?")
            print(f"  Response: {len(result)} chars in {elapsed:.1f}s")
            print(f"  Tokens: {in_tok} in / {out_tok} out")
            print(f"{'=' * 60}\n")
            return result


def build_user_content(
    text: str, image_data: str = None, image_type: str = None
) -> list:
    """Build user message content, optionally with an image."""
    content = []

    if image_data and image_type:
        # Add image first so Claude sees it before the text
        content.append(
            {
                "type": "image",
                "source": {
                    "type": "base64",
                    "media_type": image_type,
                    "data": image_data,
                },
            }
        )

    content.append({"type": "text", "text": text})
    return content


async def process_item(item: dict):
    """Process a single prompt."""
    global current_code, processing, processing_item, fix_history

    processing = True
    processing_item = {"name": item["name"], "prompt": item["prompt"]}
    await broadcast({"type": "processing", "item": processing_item})

    try:
        # Build context with available mic samples
        mic_info = ""
        mic_banks = mic_samples_json()
        mic_banks_filtered = {k: v for k, v in mic_banks.items() if k != "_base"}
        if mic_banks_filtered:
            bank_parts = []
            for bname, files in mic_banks_filtered.items():
                desc = f"{bname} ({len(files)} file{'s' if len(files) > 1 else ''})"
                info_json = MIC_SAMPLES_DIR / bname / "info.json"
                if info_json.exists():
                    meta = json.loads(info_json.read_text())
                    if meta.get("title"):
                        desc += f' — "{meta.get("title")}"'
                    chunks_meta = meta.get("chunks", [])
                    if chunks_meta:
                        chunk_descs = []
                        for i, c in enumerate(chunks_meta):
                            parts = [f":{i}={c['loudness']}"]
                            if c.get("key"):
                                parts.append(c["key"])
                            if c.get("pitches"):
                                parts.append(f'[{c["pitches"]}]')
                            if c.get("words"):
                                parts.append(f'"{c["words"]}"')
                            chunk_descs.append(" ".join(parts))
                        desc += " | " + ", ".join(chunk_descs)
                bank_parts.append(desc)
            bank_list = "\n  ".join(bank_parts)
            mic_info = (
                f"\n\nAvailable samples: {bank_list}"
                f"\nLoad with: samples('/mic-samples/strudel.json')"
                f'\nPlay by name: s("my_voice"), s("recording:0"), etc.'
            )

        text = f"Current code:\n{current_code}{mic_info}\n\nRequest: {item['prompt']}"
        content = build_user_content(
            text,
            image_data=item.get("image"),
            image_type=item.get("imageType"),
        )

        model_key = item.get("model", DEFAULT_MODEL)
        new_code = await call_model(
            model_key,
            SYSTEM_PROMPT,
            [{"role": "user", "content": content}],
        )

        current_code = new_code
        record_request(item.get("ip"))
        sync_live_file()

        # Commit to git and clear fix history (successful change)
        commit_hash = commit_code(
            current_code, f"{item['name']}: {item['prompt'][:50]}"
        )
        fix_history = []  # Reset fix history on successful prompt

        entry = {
            "name": item["name"],
            "prompt": item["prompt"],
            "code": current_code,
            "timestamp": time.time(),
        }
        history.append(entry)
        save_state()

        global_used, ip_used, reset_in, _, _ = get_rate_limit_info(item.get("ip"))
        await broadcast(
            {
                "type": "update",
                "entry": entry,
                "history": history,
                "rateLimit": {
                    "used": global_used,
                    "limit": RATE_LIMIT_GLOBAL,
                    "ipUsed": ip_used,
                    "ipLimit": RATE_LIMIT_PER_IP,
                    "resetIn": reset_in,
                },
            }
        )

    except asyncio.CancelledError:
        print("LLM request cancelled by manual edit")
        await broadcast(
            {"type": "error", "message": "Cancelled: manual edit took precedence"}
        )

    except Exception as e:
        print(f"Error processing prompt: {e}")
        await broadcast({"type": "error", "message": str(e)})

    finally:
        processing = False
        processing_item = None
        await broadcast({"type": "processing", "item": None})


error_lock = asyncio.Lock()
last_error_time = 0


def get_backoff_delay(attempt: int) -> float:
    """Exponential backoff: 5s, 10s, 20s, 40s, ..."""
    return min(5 * (2**attempt), 120)  # Cap at 2 minutes


async def fix_error(error: str, broken_code: str = None):
    """Ask Claude to fix an error in the current code."""
    global current_code, processing, fix_history, last_error_time

    code_to_fix = broken_code if broken_code else current_code

    MAX_FIX_ATTEMPTS = 5

    async with error_lock:
        now = time.time()
        attempt = len(fix_history)

        if attempt >= MAX_FIX_ATTEMPTS:
            print(f"Giving up after {attempt} fix attempts")
            fix_history.clear()
            await broadcast(
                {
                    "type": "error",
                    "message": f"Could not fix error after {MAX_FIX_ATTEMPTS} attempts: {error[:100]}",
                }
            )
            return

        # Calculate backoff based on number of attempts
        if attempt > 0:
            backoff = get_backoff_delay(attempt)
            time_since_last = now - last_error_time
            if time_since_last < backoff:
                wait_time = backoff - time_since_last
                print(f"Backoff: waiting {wait_time:.1f}s before attempt {attempt + 1}")
                await asyncio.sleep(wait_time)

        last_error_time = time.time()

    processing = True
    print(f"Fix attempt {attempt + 1}: {error[:80]}")

    try:
        # Build context with previous fix attempts
        context_parts = [f"Current code:\n{code_to_fix}\n"]
        context_parts.append(f"Error: {error}\n")

        if fix_history:
            context_parts.append("\n## Previous fix attempts that failed:\n")
            for i, fh in enumerate(fix_history[-3:], 1):  # Last 3 attempts
                context_parts.append(f"\n### Attempt {i}:\n")
                context_parts.append(f"Diff applied:\n```\n{fh['diff']}\n```\n")
                context_parts.append(f"Resulting error: {fh['error']}\n")
            context_parts.append(
                "\nDo NOT repeat these failed approaches. Try something different.\n"
            )

        context_parts.append(
            "\nFix ONLY the error while keeping the musical intent intact. Return the corrected code."
        )

        new_code = await call_model(
            DEFAULT_MODEL,
            SYSTEM_PROMPT,
            [{"role": "user", "content": "".join(context_parts)}],
        )
        print(f"Fix returned: {new_code[:100]}...")

        # Commit the fix attempt
        commit_hash = commit_code(new_code, f"Fix attempt {attempt + 1}: {error[:40]}")

        # Get the diff for this attempt
        diff = get_diff_from_commit(commit_hash) if commit_hash else ""

        # Record this attempt (will be used if it also fails)
        fix_history.append(
            {
                "commit": commit_hash,
                "diff": diff,
                "error": error,
                "timestamp": time.time(),
            }
        )

        current_code = new_code
        record_request()  # fix errors are system-initiated, no IP
        sync_live_file()

        entry = {
            "name": "Claude",
            "prompt": f"Fix error (attempt {attempt + 1})",
            "error": error,  # Full error with stack trace
            "code": current_code,
            "timestamp": time.time(),
        }
        history.append(entry)
        save_state()

        global_used, _, reset_in, _, _ = get_rate_limit_info()
        await broadcast(
            {
                "type": "update",
                "entry": entry,
                "history": history,
                "rateLimit": {
                    "used": global_used,
                    "limit": RATE_LIMIT_GLOBAL,
                    "resetIn": reset_in,
                },
            }
        )

    except Exception as e:
        print(f"Error fixing code: {e}")

    finally:
        processing = False


async def process_queue():
    """Process queue items as fast as rate limit allows."""
    global processing

    while True:
        await asyncio.sleep(0.1)  # Check frequently

        if not queue or processing:
            continue

        # Check the next item's IP for per-IP limiting
        next_ip = queue[0].get("ip") if queue else None
        global_used, ip_used, reset_in, is_limited, reason = get_rate_limit_info(
            next_ip
        )

        if is_limited:
            # Rate limited - wait and broadcast status
            msg = (
                "Global daily limit reached"
                if reason == "global"
                else "Your daily limit reached"
            )
            await broadcast(
                {
                    "type": "rateLimited",
                    "resetIn": reset_in,
                    "reason": reason,
                    "message": msg,
                    "queue": queue,
                }
            )
            await asyncio.sleep(1)
            continue

        item = queue.pop(0)
        await broadcast({"type": "queue", "queue": queue})
        processing_task = asyncio.current_task()
        await process_item(item)
        processing_task = None


async def watch_live_file():
    """Poll live.js on disk for editor changes. Manual edits cancel in-flight LLM calls."""
    global current_code, processing, processing_task
    last_mtime = 0

    while True:
        await asyncio.sleep(0.5)
        try:
            mtime = os.path.getmtime(LIVE_FILE)
        except FileNotFoundError:
            continue  # live.js doesn't exist yet, keep polling
        if mtime > last_mtime:
            last_mtime = mtime
            with open(LIVE_FILE) as f:
                disk_code = f.read()
            if disk_code and disk_code != current_code:
                # Cancel in-flight LLM request — manual edits take precedence
                if processing and processing_task and not processing_task.done():
                    print("Manual edit detected, cancelling in-flight LLM request")
                    processing_task.cancel()
                current_code = disk_code
                entry = {
                    "name": "Editor",
                    "prompt": "(file edit)",
                    "code": current_code,
                    "timestamp": time.time(),
                }
                history.append(entry)
                await broadcast({"type": "update", "entry": entry, "history": history})


async def process_repeating():
    """Check and execute repeating prompts."""
    global repeating_prompts

    while True:
        await asyncio.sleep(1)  # Check every second

        now = time.time()
        for rp in repeating_prompts[:]:
            if now >= rp["next_run"] and not processing:
                # Queue this prompt
                queue.append(
                    {
                        "name": rp["name"],
                        "prompt": rp["prompt"],
                        "timestamp": now,
                    }
                )
                rp["next_run"] = now + rp["interval"]
                await broadcast({"type": "queue", "queue": queue})
                await broadcast({"type": "repeating", "repeating": repeating_prompts})


@app.on_event("startup")
async def startup():
    global current_code
    load_state()
    # Prefer existing live.js over default/stored state
    if os.path.exists(LIVE_FILE):
        with open(LIVE_FILE) as f:
            disk_code = f.read()
        if disk_code.strip():
            current_code = disk_code
    else:
        sync_live_file()
    asyncio.create_task(process_queue())
    asyncio.create_task(process_repeating())
    asyncio.create_task(watch_live_file())


@app.websocket("/ws")
async def websocket_endpoint(ws: WebSocket):
    global current_code, history
    await ws.accept()
    connections.append(ws)

    client_ip = ws.client.host if ws.client else "unknown"
    global_used, ip_used, reset_in, _, _ = get_rate_limit_info(client_ip)

    # Send current state
    await ws.send_text(
        json.dumps(
            {
                "type": "init",
                "code": current_code,
                "queue": queue,
                "history": history,
                "repeating": repeating_prompts,
                "processing_item": processing_item,
                "rateLimit": {
                    "used": global_used,
                    "limit": RATE_LIMIT_GLOBAL,
                    "ipUsed": ip_used,
                    "ipLimit": RATE_LIMIT_PER_IP,
                    "resetIn": reset_in,
                },
            }
        )
    )

    try:
        while True:
            data = json.loads(await ws.receive_text())

            if data["type"] == "prompt":
                item = {
                    "name": data["name"],
                    "prompt": data["prompt"],
                    "model": data.get("model", DEFAULT_MODEL),
                    "ip": client_ip,
                    "timestamp": time.time(),
                }
                # Include image if present
                if data.get("image"):
                    item["image"] = data["image"]
                    item["imageType"] = data.get("imageType", "image/png")
                # User prompts go to the front so they're not stuck behind repeating prompts
                queue.insert(0, item)
                await broadcast({"type": "queue", "queue": queue})

            elif data["type"] == "error":
                # Client reported a Strudel error - ask Claude to fix it
                print(f"Received error from client: {data['message']}")
                asyncio.create_task(fix_error(data["message"], data.get("code")))

            elif data["type"] == "userEdit":
                # User manually edited and evaluated code
                new_code = data.get("code", "")
                if new_code and new_code != current_code:
                    current_code = new_code
                    sync_live_file()
                    entry = {
                        "name": data.get("name", "Anonymous"),
                        "prompt": "(manual edit)",
                        "code": current_code,
                        "timestamp": time.time(),
                    }
                    history.append(entry)
                    save_state()
                    await broadcast(
                        {
                            "type": "update",
                            "entry": entry,
                            "history": history,
                        }
                    )

            elif data["type"] == "addRepeating":
                # Add a repeating prompt
                import uuid

                rp = {
                    "id": str(uuid.uuid4())[:8],
                    "name": data["name"],
                    "prompt": data["prompt"],
                    "interval": data.get("interval", 30),
                    "next_run": time.time() + data.get("interval", 30),
                }
                repeating_prompts.append(rp)
                await broadcast({"type": "repeating", "repeating": repeating_prompts})

            elif data["type"] == "removeRepeating":
                # Remove a repeating prompt by id
                rp_id = data.get("id")
                repeating_prompts[:] = [
                    rp for rp in repeating_prompts if rp["id"] != rp_id
                ]
                await broadcast({"type": "repeating", "repeating": repeating_prompts})

            elif data["type"] == "clearQueue":
                # Clear the queue
                queue.clear()
                await broadcast({"type": "queue", "queue": queue})

    except (WebSocketDisconnect, RuntimeError):
        if ws in connections:
            connections.remove(ws)


@app.get("/live.js")
async def get_live():
    """For Strudel to poll."""
    return PlainTextResponse(current_code, media_type="text/javascript")


@app.post("/clear-queue")
async def clear_queue_endpoint():
    """Clear the queue via HTTP."""
    queue.clear()
    await broadcast({"type": "queue", "queue": queue})
    return {"status": "ok", "queue_length": 0}


@app.get("/models")
async def get_models():
    """Return available models for the frontend dropdown."""
    return {
        "models": list(AVAILABLE_MODELS.keys()),
        "default": DEFAULT_MODEL,
    }


@app.get("/status")
async def get_status():
    """Get current server state."""
    return {
        "queue_length": len(queue),
        "queue": queue,
        "repeating_count": len(repeating_prompts),
        "repeating": repeating_prompts,
        "processing": processing,
        "history_length": len(history),
    }


@app.get("/debug")
async def debug_endpoint():
    """Debug endpoint showing current code and recent model interactions."""
    return {
        "current_code_length": len(current_code),
        "current_code_first_200": current_code[:200],
        "current_code_starts_with_quote": current_code[0] if current_code else "",
        "models_config": list(AVAILABLE_MODELS.keys()),
        "default_model": DEFAULT_MODEL,
        "history_length": len(history),
        "last_3_entries": [
            {
                "name": e.get("name"),
                "prompt": e.get("prompt", "")[:100],
                "code_first_100": e.get("code", "")[:100],
                "code_length": len(e.get("code", "")),
            }
            for e in history[-3:]
        ],
    }


@app.post("/clear-all")
async def clear_all_endpoint():
    """Clear queue and repeating prompts."""
    global repeating_prompts
    queue.clear()
    repeating_prompts = []
    await broadcast({"type": "queue", "queue": queue})
    await broadcast({"type": "repeating", "repeating": repeating_prompts})
    return {"status": "ok", "queue_length": 0, "repeating_count": 0}


# --- Mic sample recording ---
MIC_SAMPLES_DIR = Path(os.path.dirname(os.path.abspath(__file__))) / "mic_samples"
MIC_SAMPLES_DIR.mkdir(exist_ok=True)


def mic_samples_json(request_url: str = "") -> dict:
    """Build strudel.json-style index of mic recordings.

    Groups files by base name so each recording name becomes a sample bank.
    Also scans subdirectories — each subdir becomes its own bank.
    """
    audio_exts = (".wav", ".webm", ".ogg", ".mp3")
    banks = {}

    # Top-level files grouped by base name
    files = sorted(
        f for f in MIC_SAMPLES_DIR.iterdir()
        if f.is_file() and f.suffix in audio_exts
    )
    for f in files:
        stem = f.stem
        base = (
            stem.rsplit("_", 1)[0]
            if "_" in stem and stem.rsplit("_", 1)[1].isdigit()
            else stem
        )
        banks.setdefault(base, []).append(f.name)

    # Subdirectories: each becomes a bank, files are dir/filename
    for d in sorted(MIC_SAMPLES_DIR.iterdir()):
        if not d.is_dir():
            continue
        subfiles = sorted(
            f for f in d.iterdir()
            if f.is_file() and f.suffix in audio_exts
        )
        if subfiles:
            banks[d.name] = [f"{d.name}/{f.name}" for f in subfiles]

    if not banks:
        return {}
    return {"_base": "/mic-samples/", **banks}


@app.get("/mic-samples/strudel.json")
async def mic_samples_index():
    return mic_samples_json()


@app.get("/mic-samples/{filepath:path}")
async def mic_sample_file(filepath: str):
    """Serve an individual mic sample (supports subdirs)."""
    filepath = (MIC_SAMPLES_DIR / filepath).resolve()
    if not filepath.is_relative_to(MIC_SAMPLES_DIR.resolve()):
        return JSONResponse({"error": "not found"}, status_code=404)
    if not filepath.exists() or not filepath.is_file():
        return JSONResponse({"error": "not found"}, status_code=404)
    media_types = {
        ".wav": "audio/wav",
        ".webm": "audio/webm",
        ".ogg": "audio/ogg",
        ".mp3": "audio/mpeg",
    }
    media_type = media_types.get(filepath.suffix, "application/octet-stream")
    return FileResponse(filepath, media_type=media_type)


@app.get("/mic-samples-manage/ls")
async def mic_samples_ls():
    """List all sample banks and top-level files in mic_samples/."""
    items = []
    for entry in sorted(MIC_SAMPLES_DIR.iterdir()):
        if entry.name.startswith("."):
            continue
        if entry.is_dir():
            files = [f.name for f in sorted(entry.iterdir()) if f.is_file()]
            info_path = entry / "info.json"
            title = None
            if info_path.exists():
                meta = json.loads(info_path.read_text())
                title = meta.get("title")
            items.append({"name": entry.name, "type": "dir", "files": len(files), "title": title})
        elif entry.is_file():
            items.append({"name": entry.name, "type": "file", "size": entry.stat().st_size})
    return items


@app.post("/mic-samples-manage/delete")
async def mic_samples_delete(request: Request):
    """Delete a sample bank (directory) or file from mic_samples/."""
    body = await request.json()
    name = body.get("name", "")

    if not name or "/" in name or "\\" in name or name in (".", ".."):
        return JSONResponse({"error": "Invalid name"}, status_code=400)

    target = (MIC_SAMPLES_DIR / name).resolve()
    if not target.is_relative_to(MIC_SAMPLES_DIR.resolve()):
        return JSONResponse({"error": "Invalid path"}, status_code=400)

    if not target.exists():
        return JSONResponse({"error": "Not found"}, status_code=404)

    if target.is_dir():
        shutil.rmtree(target)
    else:
        target.unlink()

    return {"status": "ok", "deleted": name}


def _transcribe_full(mp3_path: str) -> str:
    """Transcribe a full mp3 file to get a name for it. Returns empty string on failure."""
    from google.cloud import speech

    client = speech.SpeechClient()
    audio = speech.RecognitionAudio(content=Path(mp3_path).read_bytes())
    config = speech.RecognitionConfig(
        encoding=speech.RecognitionConfig.AudioEncoding.MP3,
        language_code="en-US",
    )
    response = client.recognize(config=config, audio=audio)
    words = " ".join(
        result.alternatives[0].transcript
        for result in response.results
        if result.alternatives
    ).strip()
    return words


def _get_loudness(mp3_path: str) -> str:
    """Get RMS loudness category from an mp3 chunk via ffmpeg."""
    cmd = [
        "ffmpeg", "-i", mp3_path, "-af",
        "volumedetect", "-f", "null", "-",
    ]
    proc = subprocess.run(cmd, capture_output=True, timeout=10)
    stderr = proc.stderr.decode(errors="replace")
    for line in stderr.split("\n"):
        if "mean_volume" in line:
            parts = line.split("mean_volume:")[1].strip().split()
            db = float(parts[0])
            if db > -15:
                return "loud"
            elif db > -25:
                return "medium"
            else:
                return "quiet"
    return "unknown"


NOTE_NAMES = ["C", "Cs", "D", "Eb", "E", "F", "Fs", "G", "Ab", "A", "Bb", "B"]
KEY_NAMES = ["C", "Db", "D", "Eb", "E", "F", "Fs", "G", "Ab", "A", "Bb", "B"]


def _get_pitch_info(mp3_path: str) -> dict:
    """Detect dominant pitches and estimated key from an mp3 chunk using librosa."""
    import librosa
    import numpy as np

    y, sr = librosa.load(mp3_path, sr=22050)

    chroma = librosa.feature.chroma_stft(y=y, sr=sr)
    chroma_avg = chroma.mean(axis=1)

    major_profile = np.array([6.35, 2.23, 3.48, 2.33, 4.38, 4.09, 2.52, 5.19, 2.39, 3.66, 2.29, 2.88])
    minor_profile = np.array([6.33, 2.68, 3.52, 5.38, 2.60, 3.53, 2.54, 4.75, 3.98, 2.69, 3.34, 3.17])

    best_corr = -2
    best_key = "C"
    best_mode = "major"
    for shift in range(12):
        shifted = np.roll(chroma_avg, -shift)
        for profile, mode in [(major_profile, "major"), (minor_profile, "minor")]:
            corr = np.corrcoef(shifted, profile)[0, 1]
            if corr > best_corr:
                best_corr = corr
                best_key = KEY_NAMES[shift]
                best_mode = mode

    f0, voiced_flag, _ = librosa.pyin(y, fmin=librosa.note_to_hz('C2'), fmax=librosa.note_to_hz('C7'), sr=sr)
    pitched = f0[voiced_flag]

    pitches = []
    if len(pitched) > 0:
        midi_notes = np.round(librosa.hz_to_midi(pitched)).astype(int)
        unique, counts = np.unique(midi_notes, return_counts=True)
        top_idx = np.argsort(-counts)[:3]
        pitches = [librosa.midi_to_note(int(unique[i])) for i in top_idx]

    result = {"key": f"{best_key} {best_mode}"}
    if pitches:
        result["pitches"] = " ".join(pitches)
    return result


def _transcribe_chunk(mp3_path: str) -> str:
    """Transcribe an mp3 chunk using Google Cloud Speech-to-Text."""
    from google.cloud import speech

    client = speech.SpeechClient()
    audio = speech.RecognitionAudio(content=Path(mp3_path).read_bytes())
    config = speech.RecognitionConfig(
        encoding=speech.RecognitionConfig.AudioEncoding.MP3,
        language_code="en-US",
    )
    response = client.recognize(config=config, audio=audio)
    words = " ".join(
        result.alternatives[0].transcript
        for result in response.results
        if result.alternatives
    ).strip()
    return words


def _analyze_chunks(chunks: list[Path]) -> list[dict]:
    """Analyze loudness, pitch, and transcribe each chunk."""
    results = []
    for chunk in chunks:
        loudness = _get_loudness(str(chunk))
        entry = {"file": chunk.name, "loudness": loudness}
        try:
            pitch_info = _get_pitch_info(str(chunk))
            entry.update(pitch_info)
        except Exception as e:
            print(f"Pitch analysis skipped for {chunk.name}: {e}")
        try:
            words = _transcribe_chunk(str(chunk))
            if words:
                entry["words"] = words
        except Exception as e:
            print(f"Transcription skipped for {chunk.name}: {e}")
        results.append(entry)
    return results


@app.post("/upload-sample")
async def upload_sample(request: Request):
    """Receive a recorded audio sample from the browser.

    Converts to mp3, transcribes for a bank name, chunks into 3s segments,
    and runs full analysis (loudness, key, pitch, per-chunk transcription).
    """
    body = await request.json()
    audio_b64 = body.get("audio")
    name = body.get("name", "recording")
    mime = body.get("mimeType", "audio/webm")

    if not audio_b64:
        return JSONResponse({"error": "no audio data"}, status_code=400)

    ext_map = {
        "audio/webm": ".webm",
        "audio/ogg": ".ogg",
        "audio/wav": ".wav",
        "audio/mpeg": ".mp3",
    }
    ext = ext_map.get(mime, ".webm")

    with tempfile.TemporaryDirectory() as tmpdir:
        # Save raw upload
        raw_path = os.path.join(tmpdir, f"upload{ext}")
        Path(raw_path).write_bytes(base64.b64decode(audio_b64))

        # Convert to mp3 if needed
        if ext == ".mp3":
            mp3_path = raw_path
        else:
            mp3_path = os.path.join(tmpdir, "upload.mp3")
            conv = subprocess.run(
                ["ffmpeg", "-y", "-i", raw_path, "-q:a", "5", mp3_path],
                capture_output=True, timeout=30,
            )
            if conv.returncode != 0:
                return JSONResponse({"error": "Audio conversion failed"}, status_code=500)

        # Use uploaded filename if meaningful, otherwise transcribe
        safe_name = ""
        name_clean = "".join(c for c in name if c.isalnum() or c in "-_ ").strip().replace(" ", "_").lower()
        if name_clean and name_clean not in ("recording", "upload"):
            safe_name = name_clean
        else:
            try:
                transcript = _transcribe_full(mp3_path)
                if transcript:
                    safe_name = (
                        "".join(c for c in transcript if c.isalnum() or c in "-_ ").strip()
                        .replace(" ", "_")
                        .lower()
                    )
            except Exception as e:
                print(f"Full transcription failed: {e}")
        if not safe_name:
            safe_name = name_clean or "recording"
        safe_name = safe_name[:40]

        # Deduplicate bank name
        bank_dir = MIC_SAMPLES_DIR / safe_name
        if bank_dir.exists():
            i = 2
            while (MIC_SAMPLES_DIR / f"{safe_name}_{i}").exists():
                i += 1
            safe_name = f"{safe_name}_{i}"
            bank_dir = MIC_SAMPLES_DIR / safe_name
        bank_dir.mkdir()

        # Chunk into 3s segments
        chunk_pattern = os.path.join(str(bank_dir), f"{safe_name}_%03d.mp3")
        chunk_cmd = [
            "ffmpeg", "-y", "-i", mp3_path,
            "-f", "segment",
            "-segment_time", "3",
            "-c:a", "libmp3lame", "-q:a", "5",
            chunk_pattern,
        ]
        chunk_proc = subprocess.run(chunk_cmd, capture_output=True, timeout=30)
        if chunk_proc.returncode != 0:
            err = chunk_proc.stderr.decode(errors="replace")[:200]
            print(f"ffmpeg chunking failed: {err}")
            return JSONResponse({"error": f"Chunking failed: {err}"}, status_code=500)

        chunks = sorted(f for f in bank_dir.iterdir() if f.suffix == ".mp3")
        print(f"Mic sample '{safe_name}': {len(chunks)} chunks in {bank_dir}")

        # Analyze chunks
        chunk_meta = _analyze_chunks(chunks)

        # Save metadata
        meta = {
            "title": transcript or name,
            "chunks": chunk_meta,
        }
        (bank_dir / "info.json").write_text(json.dumps(meta, indent=2))

    return {"status": "ok", "bank": safe_name, "chunks": len(chunks)}


@app.get("/source")
async def source_code():
    """AGPL compliance: provide source code links."""
    return PlainTextResponse(
        "vibe-duet is free software licensed under the GNU Affero General Public License v3.\n\n"
        "Source code:\n"
        "  Application:  https://github.com/ElleNajt/vibe-duet\n"
        "  Strudel fork: https://codeberg.org/ElleNajt/strudel\n"
    )


# Mount shabda Flask app at /shabda (optional)
try:
    from shabda import create_app as create_shabda_app

    shabda_app = create_shabda_app()
    app.mount("/shabda", WSGIMiddleware(shabda_app), name="shabda")
except ImportError:
    print("shabda not installed, /shabda endpoint disabled")

# Serve static files (Strudel frontend) - must be last
from fastapi.staticfiles import StaticFiles

static_dir = os.path.join(os.path.dirname(__file__), "static")
if os.path.exists(static_dir):
    # Use StaticFiles middleware which properly handles this
    from starlette.routing import Mount
    from starlette.staticfiles import StaticFiles as StarletteStatic

    # Mount static files at the end - FastAPI will try API routes first
    app.mount("/", StarletteStatic(directory=static_dir, html=True), name="static")
