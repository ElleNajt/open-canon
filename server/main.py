"""
Collaborative vibe-duet server.

- Prompts processed immediately, rate limited to 60 per 15 minutes
- Claude edits the current code based on each prompt
- History of all versions for playback
"""

import asyncio
import base64
import hashlib
import json
import os
import subprocess
import tempfile
import time
from collections import deque

import anthropic
from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import Response
from google.cloud import firestore, texttospeech

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

client = anthropic.Anthropic()
db = firestore.Client()
tts_client = texttospeech.TextToSpeechClient()

# TTS sample storage (in-memory cache, keyed by hash of text+voice)
tts_samples: dict[str, bytes] = {}

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

# Rate limiting: 1000 requests per hour
RATE_LIMIT = 1000
RATE_WINDOW = 60 * 60  # seconds

# State
current_code = '$: s("bd cp bd cp")'
queue: list[dict] = []  # {name, prompt, timestamp}
history: list[dict] = []  # {name, prompt, code, timestamp}
connections: list[WebSocket] = []
request_times: deque = deque()  # timestamps of processed requests
processing = False
repeating_prompts: list[dict] = []  # {id, name, prompt, interval, next_run}


# Limit concurrent TTS API calls so they don't block the event loop
tts_semaphore = asyncio.Semaphore(10)
# Track in-flight TTS requests to deduplicate
tts_pending: dict[str, asyncio.Future] = {}


def _synthesize_tts(text, voice, speed):
    """Blocking Google TTS call -- run via asyncio.to_thread."""
    if "-" in voice:
        language_code = "-".join(voice.split("-")[:2])
        voice_name = voice
    else:
        language_code = "en-US"
        voice_name = f"en-US-{voice}"

    response = tts_client.synthesize_speech(
        input=texttospeech.SynthesisInput(text=text),
        voice=texttospeech.VoiceSelectionParams(
            language_code=language_code, name=voice_name
        ),
        audio_config=texttospeech.AudioConfig(
            audio_encoding=texttospeech.AudioEncoding.MP3, speaking_rate=speed
        ),
    )
    return response.audio_content


async def generate_tts(
    text: str, voice: str = "en-US-Studio-O", speed: float = 1.0
) -> tuple[str, bytes]:
    """Generate TTS audio and return (sample_id, audio_bytes)."""
    key = f"{text}:{voice}:{speed}"
    sample_id = "tts_" + hashlib.md5(key.encode()).hexdigest()[:12]

    # Check cache
    if sample_id in tts_samples:
        return sample_id, tts_samples[sample_id]

    # Deduplicate: if this exact request is already in-flight, wait for it
    if sample_id in tts_pending:
        await tts_pending[sample_id]
        return sample_id, tts_samples[sample_id]

    # Run the blocking API call in a thread, limited by semaphore
    loop = asyncio.get_event_loop()
    future = loop.create_future()
    tts_pending[sample_id] = future

    async with tts_semaphore:
        audio_content = await asyncio.to_thread(_synthesize_tts, text, voice, speed)

    tts_samples[sample_id] = audio_content
    future.set_result(True)
    del tts_pending[sample_id]
    return sample_id, audio_content


def load_state():
    """Load state from Firestore on startup."""
    global current_code, history
    try:
        doc = db.collection("state").document("current").get()
        if doc.exists:
            data = doc.to_dict()
            current_code = data.get("code", current_code)
            history = data.get("history", [])
            print(f"Loaded state: {len(history)} history entries")
        # Initialize git repo and commit current code
        init_code_repo()
        commit_code(current_code, "Initial state from Firestore")
    except Exception as e:
        print(f"Error loading state: {e}")


def save_state():
    """Save state to Firestore."""
    try:
        db.collection("state").document("current").set(
            {
                "code": current_code,
                "history": history[-100:],  # Keep last 100 entries
            }
        )
    except Exception as e:
        print(f"Error saving state: {e}")


SYSTEM_PROMPT = """You edit Strudel live music code. Given the current code and a user request, return ONLY the updated code - no explanation, no markdown fences.

Keep changes minimal and musical.

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

## Text-to-Speech
Use tts with template literals (backticks) to generate speech samples.
Each word becomes a separate TTS sample, so mini-notation works:
  $: tts`hello world` - two words in sequence
  $: tts`<hello world>` - alternates between hello and world each cycle
  $: tts`[hello world]` - both words subdivided into one step
  $: tts`hello ~ world` - hello, silence, world
  $: tts`hello*2 world` - hello twice, then world
  $: tts`hello world`.slow(2) - chain effects as usual
  
Available voices: en-US-Studio-O (default, warm female), en-US-Studio-Q (male), en-GB-Studio-B (British male)
The tts function returns a pattern you can chain with .slow(), .fast(), .room(), etc.
Note: First play may be silent while loading; it auto-replays once the sample is ready.

## Effects
Filters: .lpf(hz), .hpf(hz), .bpf(hz), .resonance(0-1)
Reverb: .room(0-1), .size(0-1), .roomlp(hz)
Delay: .delay(0-1), .delaytime(0-1), .delayfeedback(0-1)
Distortion: .distort(0-1), .crush(bits), .shape(0-1), .drive(0-1)
Dynamics: .gain(0-1), .velocity(0-1), .compressor("threshold:knee:ratio:attack:release")
Spatial: .pan(-1 to 1), .jux(fn) (left=original, right=fn applied)
Modulation: .vibrato(depth), .phaser(depth), .tremolo(depth), .chorus(depth), .leslie(speed)
Envelope: .attack(s), .decay(s), .sustain(0-1), .release(s)

## Transformations
Speed: .slow(n), .fast(n)
Structure: .rev() (reverse), .palindrome(), .ply(n) (repeat each)
Conditional: .every(n, fn), .sometimes(fn), .rarely(fn), .often(fn)
Layering: .jux(rev) (left=orig, right=reversed), .off(time, fn) (delayed copy)
Random: .degradeBy(0-1) (randomly drop events)
Euclidean: .euclid(hits, steps) - e.g., .euclid(3,8) for 3 hits spread over 8 steps

## Notes
note("c4 e4 g4") - note names with octave (2=low bass, 4=middle, 6=high)
Sharps: cs4, ds4, fs4, gs4, as4
Flats: db4, eb4, gb4, ab4, bb4

## Structure
$: starts each track (all play together)
stack(...) combines patterns
setcps(bpm/60/4) sets tempo

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


def get_rate_limit_info():
    """Return (requests_used, seconds_until_reset)."""
    now = time.time()
    # Remove old timestamps
    while request_times and request_times[0] < now - RATE_WINDOW:
        request_times.popleft()

    used = len(request_times)
    if request_times:
        oldest = request_times[0]
        reset_in = int((oldest + RATE_WINDOW) - now)
    else:
        reset_in = 0

    return used, max(0, reset_in)


def strip_markdown_fences(code: str) -> str:
    """Strip markdown fences if present."""
    if code.startswith("```"):
        lines = code.split("\n")
        return "\n".join(lines[1:-1] if lines[-1] == "```" else lines[1:])
    return code


async def call_claude(prompt: str, messages: list) -> str:
    """Call Claude and return the response."""
    response = client.messages.create(
        model="claude-opus-4-5-20251101",
        max_tokens=8192,
        system=prompt,
        messages=messages,
    )
    return strip_markdown_fences(response.content[0].text.strip())


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
    global current_code, processing, fix_history

    processing = True

    try:
        text = f"Current code:\n{current_code}\n\nRequest: {item['prompt']}"
        content = build_user_content(
            text,
            image_data=item.get("image"),
            image_type=item.get("imageType"),
        )

        new_code = await call_claude(
            SYSTEM_PROMPT,
            [{"role": "user", "content": content}],
        )

        current_code = new_code
        request_times.append(time.time())

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

        used, reset_in = get_rate_limit_info()
        await broadcast(
            {
                "type": "update",
                "entry": entry,
                "history": history,
                "rateLimit": {"used": used, "limit": RATE_LIMIT, "resetIn": reset_in},
            }
        )

    except Exception as e:
        print(f"Error processing prompt: {e}")
        await broadcast({"type": "error", "message": str(e)})

    finally:
        processing = False


error_lock = asyncio.Lock()
last_error_time = 0


def get_backoff_delay(attempt: int) -> float:
    """Exponential backoff: 5s, 10s, 20s, 40s, ..."""
    return min(5 * (2**attempt), 120)  # Cap at 2 minutes


async def fix_error(error: str, broken_code: str = None):
    """Ask Claude to fix an error in the current code."""
    global current_code, processing, fix_history, last_error_time

    code_to_fix = broken_code if broken_code else current_code

    async with error_lock:
        now = time.time()
        attempt = len(fix_history)

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

        new_code = await call_claude(
            SYSTEM_PROMPT,
            [{"role": "user", "content": "".join(context_parts)}],
        )
        print(f"Claude returned: {new_code[:100]}...")

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
        request_times.append(time.time())

        entry = {
            "name": "Claude",
            "prompt": f"Fix error (attempt {attempt + 1})",
            "error": error,  # Full error with stack trace
            "code": current_code,
            "timestamp": time.time(),
        }
        history.append(entry)
        save_state()

        used, reset_in = get_rate_limit_info()
        await broadcast(
            {
                "type": "update",
                "entry": entry,
                "history": history,
                "rateLimit": {"used": used, "limit": RATE_LIMIT, "resetIn": reset_in},
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

        used, reset_in = get_rate_limit_info()

        if used >= RATE_LIMIT:
            # Rate limited - wait and broadcast status
            await broadcast(
                {
                    "type": "rateLimited",
                    "resetIn": reset_in,
                    "queue": queue,
                }
            )
            await asyncio.sleep(1)
            continue

        item = queue.pop(0)
        await broadcast({"type": "queue", "queue": queue})
        await process_item(item)


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
    load_state()
    asyncio.create_task(process_queue())
    asyncio.create_task(process_repeating())


@app.websocket("/ws")
async def websocket_endpoint(ws: WebSocket):
    global current_code, history
    await ws.accept()
    connections.append(ws)

    used, reset_in = get_rate_limit_info()

    # Send current state
    await ws.send_text(
        json.dumps(
            {
                "type": "init",
                "code": current_code,
                "queue": queue,
                "history": history,
                "repeating": repeating_prompts,
                "rateLimit": {"used": used, "limit": RATE_LIMIT, "resetIn": reset_in},
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
                    "timestamp": time.time(),
                }
                # Include image if present
                if data.get("image"):
                    item["image"] = data["image"]
                    item["imageType"] = data.get("imageType", "image/png")
                queue.append(item)
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

            elif data["type"] == "tts":
                # Generate TTS sample
                text = data.get("text", "")
                voice = data.get("voice", "en-US-Studio-O")
                speed = data.get("speed", 1.0)
                if text:
                    sample_id, _ = await generate_tts(text, voice, speed)
                    await ws.send_text(
                        json.dumps(
                            {
                                "type": "tts",
                                "sample_id": sample_id,
                                "url": f"/tts/{sample_id}.mp3",
                                "text": text,
                            }
                        )
                    )

    except WebSocketDisconnect:
        if ws in connections:
            connections.remove(ws)


@app.get("/live.js")
async def get_live():
    """For Strudel to poll."""
    return current_code


@app.post("/clear-queue")
async def clear_queue_endpoint():
    """Clear the queue via HTTP."""
    queue.clear()
    await broadcast({"type": "queue", "queue": queue})
    return {"status": "ok", "queue_length": 0}


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


@app.post("/clear-all")
async def clear_all_endpoint():
    """Clear queue and repeating prompts."""
    global repeating_prompts
    queue.clear()
    repeating_prompts = []
    await broadcast({"type": "queue", "queue": queue})
    await broadcast({"type": "repeating", "repeating": repeating_prompts})
    return {"status": "ok", "queue_length": 0, "repeating_count": 0}


@app.get("/tts/{sample_id}.mp3")
async def get_tts_sample(sample_id: str):
    """Serve a TTS-generated sample."""
    if sample_id not in tts_samples:
        return Response(status_code=404, content="Sample not found")
    return Response(
        content=tts_samples[sample_id],
        media_type="audio/mpeg",
        headers={"Cache-Control": "public, max-age=31536000"},
    )


@app.post("/tts")
async def create_tts_sample(request: dict):
    """Generate a TTS sample and return its URL."""
    text = request.get("text", "")
    voice = request.get("voice", "en-US-Studio-O")
    speed = request.get("speed", 1.0)

    if not text:
        return {"error": "No text provided"}

    sample_id, _ = await generate_tts(text, voice, speed)
    return {"sample_id": sample_id, "url": f"/tts/{sample_id}.mp3"}


# Serve static files (Strudel frontend) - must be last
import os

from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles

static_dir = os.path.join(os.path.dirname(__file__), "static")
if os.path.exists(static_dir):
    # Use StaticFiles middleware which properly handles this
    from starlette.routing import Mount
    from starlette.staticfiles import StaticFiles as StarletteStatic

    # Mount static files at the end - FastAPI will try API routes first
    app.mount("/", StarletteStatic(directory=static_dir, html=True), name="static")
