"""
Collaborative vibe-duet server.

- Prompts processed immediately, rate limited to 60 per 15 minutes
- Claude edits the current code based on each prompt
- History of all versions for playback
"""

import asyncio
import json
import os
import time
from collections import deque

import anthropic
from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware
from google.cloud import firestore

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

client = anthropic.Anthropic()
db = firestore.Client()

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

## Samples (use with s())
Drums: bd (kick), sn (snare), hh (closed hat), oh (open hat), cp (clap), cr (crash), rim (rimshot), mt/ht/lt (toms)
Other: piano, bass, pluck, arpy, superpiano, metal, jazz, casio, crow, insect, wind, space, flbass, rhodes, kalimba
Use :n for variations: s("bd:0"), s("bd:1"), s("bd:2"), etc.

## Synths (use with .sound())
Waveforms: sawtooth/saw, square/sqr, triangle/tri, sine/sin, pulse
Special: supersaw (unison saw), sbd (synthetic bass drum)
Noise: white, pink, brown, crackle

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
        model="claude-sonnet-4-20250514",
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
    global current_code, processing

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


last_error_time = 0
last_fixed_code = ""  # Track code we already tried to fix
ERROR_DEBOUNCE = 5  # seconds
MAX_FIX_ATTEMPTS = 2  # Max fix attempts per code version
fix_attempts = 0
error_lock = asyncio.Lock()


async def fix_error(error: str, broken_code: str = None):
    """Ask Claude to fix an error in the current code."""
    global current_code, processing, last_error_time, last_fixed_code, fix_attempts

    code_to_check = broken_code or current_code

    async with error_lock:
        now = time.time()

        # If same code we already tried to fix, increment attempts
        if code_to_check == last_fixed_code:
            fix_attempts += 1
            if fix_attempts >= MAX_FIX_ATTEMPTS:
                print(
                    f"Max fix attempts reached for this code, giving up: {error[:50]}"
                )
                return
        else:
            # New code, reset attempts
            fix_attempts = 1
            last_fixed_code = code_to_check

        # Also debounce by time
        if now - last_error_time < ERROR_DEBOUNCE:
            print(f"Debouncing error (too soon): {error[:50]}")
            return
        last_error_time = now

    # Use the broken code if provided, otherwise fall back to current_code
    code_to_fix = broken_code if broken_code else current_code

    processing = True
    print(f"Fixing error: {error}")
    print(f"Code to fix: {code_to_fix[:100]}...")

    try:
        new_code = await call_claude(
            SYSTEM_PROMPT,
            [
                {
                    "role": "user",
                    "content": f"Current code:\n{code_to_fix}\n\nThis code produces an error when evaluated: {error}\n\nFix ONLY the error while keeping the musical intent intact. Return the corrected code.",
                }
            ],
        )
        print(f"Claude returned: {new_code[:100]}...")

        current_code = new_code
        request_times.append(time.time())

        entry = {
            "name": "Claude",
            "prompt": f"Fix error: {error[:50]}...",
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


@app.on_event("startup")
async def startup():
    load_state()
    asyncio.create_task(process_queue())


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

    except WebSocketDisconnect:
        connections.remove(ws)


@app.get("/live.js")
async def get_live():
    """For Strudel to poll."""
    return current_code


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
