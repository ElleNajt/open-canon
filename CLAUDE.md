# vibe-duet

Live music collaboration. Edit `live.js` and changes play instantly in the browser.

This file contains instructions for AI coding assistants.

## MIDI Sources

Bach BWV 1087 (14 Canons) MIDIs from [Mutopia Project](https://www.mutopiaproject.org/):
```
https://www.mutopiaproject.org/ftp/BachJS/BWV1087/bwv-1087-01/bwv-1087-01.mid
https://www.mutopiaproject.org/ftp/BachJS/BWV1087/bwv-1087-02/bwv-1087-02.mid
...through canon 14
```

To convert a MIDI to Strudel:
```bash
./convert-strudel path/to/file.mid output.strudel
```

The converter uses `note()` for pitches and outputs Strudel-compatible JavaScript.

## Setup

Prerequisites: `git`, `python3`, and `node`/`pnpm` (for first-time frontend build only).

```bash
# 1. Install pnpm if you don't have it (no npm required)
curl -fsSL https://get.pnpm.io/install.sh | sh -

# 2. Create a .env file with your Anthropic API key
echo "ANTHROPIC_API_KEY=your-key-here" > .env

# 3. Run
./start
```

The start script handles everything else (cloning Strudel, building the frontend, setting up a Python venv). Once `server/static/` is built, pnpm/node are no longer needed.

What `./start` does:
1. Builds Strudel frontend static files (first run only, requires pnpm)
2. Starts a FastAPI server (serves frontend + WebSocket + API + shabda TTS)
3. Opens the browser on localhost

## Deployment

Deploy to Google Cloud Run via `server/deploy.sh`. Reads config from `deployment_config.json` (gitignored):

```json
{
  "project": "your-gcp-project",
  "region": "us-central1",
  "service": "service-name",
  "image": "gcr.io/your-project/image-name",
  "site_url": "https://your-cloud-run-url/",
  "service_account": "runner@your-project.iam.gserviceaccount.com"
}
```

The script builds the Strudel frontend, packages static files + shabda, builds the container via Cloud Build, and deploys to Cloud Run.

### GCP APIs Required

- `run.googleapis.com` — Cloud Run
- `cloudbuild.googleapis.com` — Cloud Build (container builds)
- `firestore.googleapis.com` — Firestore (state persistence)
- `secretmanager.googleapis.com` — Secret Manager (API keys)
- `texttospeech.googleapis.com` — shabda TTS
- `speech.googleapis.com` — YouTube sample transcription
- `storage.googleapis.com` — GCS sample hosting
- `containerregistry.googleapis.com` — Container Registry

### Service Account Permissions

The Cloud Run service account needs:
- `roles/datastore.user` — read/write Firestore
- `roles/secretmanager.secretAccessor` on the `anthropic-api-key` secret
- Speech-to-Text and Text-to-Speech are auto-authorized for same-project service accounts

### Cloud Run Environment

- Secret: `ANTHROPIC_API_KEY` from Secret Manager (`anthropic-api-key:latest`)
- Env var: `USE_FIRESTORE=1`

**The file to edit:** `live.js`

Changes sync bi-directionally:
- Edit in your editor → server picks up changes within 500ms
- Edit via CollabPanel (AI chat) → file updates on disk

## Mini Notation

| Symbol | Purpose | Example |
|--------|---------|---------|
| `~` | Rest/silence | `s("bd ~ sn ~")` |
| `[ ]` | Group into subdivision | `s("[bd sd] hh")` |
| `*` | Repeat | `s("bd*2 sn")` |
| `/` | Slow down | `s("bd/2")` |
| `< >` | Alternate per cycle | `s("bd <sn hh cp>")` |
| `!` | Replicate | `s("bd!3 sn")` |
| `?` | 50% probability | `s("bd? sd")` |
| `:` | Sample number | `s("bd:3")` |
| `,` | Polyrhythm | `s("[bd, hh hh hh]")` |

## Tempo

```javascript
setcps(120/60/4)  // 120 BPM
setcps(90/60/4)   // 90 BPM
```

## Pattern Structure

```javascript
// Each $: is a separate track, all play together
$: note("c4 e4 g4").sound("sawtooth")
$: s("bd cp bd cp")

// stack() combines patterns
$: stack(
  s("bd ~ bd ~"),
  s("~ hh ~ hh")
)
```

## Synths

```javascript
.sound("sawtooth")   // Classic lead sound
.sound("square")     // Hollow, retro, chiptune
.sound("triangle")   // Soft, good for bass
.sound("sine")       // Pure tone
```

## Samples

### Drums
```javascript
s("bd")      // kick/bass drum
s("sn")      // snare
s("hh")      // closed hi-hat
s("oh")      // open hi-hat
s("cp")      // clap
s("cr")      // crash
s("rim")     // rimshot
s("mt")      // mid tom
s("ht")      // high tom
s("lt")      // low tom
```

### Other Sounds
```javascript
s("piano")       // piano
s("bass")        // bass guitar
s("pluck")       // plucked string
s("arpy")        // arpeggio synth
s("superpiano")  // synth piano
s("metal")       // metallic
s("jazz")        // jazz kit
```

Use `:n` for variations: `s("bd:0")`, `s("bd:1")`, `s("bd:2")`, etc.

### Custom Sample Library (GCS)

Custom samples are hosted on GCS. Load them with:

```javascript
$: samples('https://storage.googleapis.com/vibe-duet-samples/strudel.json')
  , s("claude_originals").chop(16)
```

To add samples: put audio files in `samples/<bank_name>/` and run `./sync-samples`.

### Slicing and Chopping Samples

```javascript
.chop(n)                // Chop into n equal pieces, play in order
.slice(n, pattern)      // Slice into n, play slices by index
.splice(n, pattern)     // Like slice but stretches to fit
.loopAt(n)              // Loop sample over n cycles
.begin(0.25)            // Start playback at 25%
.end(0.75)              // End playback at 75%
.speed(2)               // Playback speed (negative = reverse)
.unit("c")              // Treat speed as cycles (fit to cycle length)
```

### Speech (shabda TTS)

Generate spoken words as samples via Google TTS:

```javascript
$: samples('shabda/speech:hello?pitch=-2'), samples('shabda/speech:world?pitch=3')
  , s("<hello world>")
```

- Words become sample names: `s("hello")`, `s("world")`
- `pitch` shifts in semitones (-20 to +20)
- Default voice: en-GB female
- Other voices: `samples('shabda/speech/en-US/m:hello')` (US English, male)

### YouTube Samples

Import audio from YouTube via the ▶ button in the CollabPanel. Downloads the first 30s, splits into 3-second chunks stored in `mic_samples/<video_name>/`. Each chunk is analyzed for loudness, transcribed for speech content, and analyzed for musical key and dominant pitches (via librosa).

```javascript
$: samples('/mic-samples/strudel.json')
  , s("video_name:0")       // first 3s chunk
  , s("video_name:3")       // fourth chunk
  , s("video_name").chop(4) // chop a chunk further
```

The sample bank name is derived from the YouTube video title. Use `:N` to select chunks. Chunk metadata (loudness, key, pitches, words) is included in the model context automatically, formatted as `:0=medium Ab major [G♯2 C♯2 F♯2]`.

### Sample Management

List and delete sample banks on the server:

```
GET  /mic-samples-manage/ls       # list all sample banks
POST /mic-samples-manage/delete   # body: {"name": "bank_name"}
```

## Effects

```javascript
// Filters
.lpf(800)              // lowpass filter (Hz)
.hpf(200)              // highpass filter (Hz)
.lpf(sine.range(200, 4000).slow(8))  // filter sweep

// Dynamics
.gain(0.5)             // volume (0-1)
.velocity(0.8)         // note velocity

// Spatial
.pan(0.3)              // stereo position (0=left, 1=right)
.room(0.5)             // reverb amount
.size(0.8)             // reverb size

// Time
.delay(0.5)            // delay amount
.delaytime(0.25)       // delay time
.delayfeedback(0.5)    // delay feedback

// Distortion
.crush(4)              // bitcrush (lower = more crushed)
.distort(0.5)          // distortion
.shape(0.5)            // waveshaping

// Envelope
.attack(0.01)          // attack time
.decay(0.1)            // decay time
.sustain(0.5)          // sustain level
.release(0.5)          // release time
```

## Transformations

```javascript
// Speed
.slow(2)               // half speed
.fast(2)               // double speed

// Structure
.rev()                 // reverse pattern
.palindrome()          // forward then backward
.ply(2)                // repeat each event

// Conditional
.every(4, fast(2))                    // every 4th cycle
.every(3, rev)                        // reverse every 3rd
.sometimes(x => x.crush(4))           // 50% chance
.sometimesBy(0.3, x => x.fast(2))     // 30% chance
.rarely(x => x.rev())                 // 25% chance
.often(x => x.gain(0.5))              // 75% chance

// Layering
.jux(rev)              // left=original, right=reversed
.off(0.125, x => x.gain(0.5))  // offset copy

// Randomness
.degradeBy(0.3)        // randomly drop 30% of events
```

## Euclidean Rhythms

```javascript
s("bd").euclid(3, 8)      // 3 hits spread over 8 steps
s("cp").euclid(5, 8)      // 5 hits over 8 (cinquillo)
s("hh").euclid(7, 16)     // 7 over 16 (samba-like)
```

## Notes

```javascript
// Note names
note("c4 e4 g4 c5")           // C major arpeggio
note("a3 c4 e4")              // A minor
note("g2 ~ fs2 ~ e2 ~ d2 ~")  // bass line with rests

// Sharps/flats
note("db4 eb4 gb4")           // use 'b' for flat
note("cs4 ds4 gs4")           // use 's' for sharp

// Octaves: 2=low bass, 3=bass, 4=middle, 5=high, 6=very high
```

## Styles

Voice presets are in `styles/`. To use them, copy the voice definitions into your `live.js`:

```javascript
// From styles/baroque.js - staccato harpsichord-like voices
let upperVoice = x => x
  .sound("triangle")
  .gain(0.45)
  .attack(0.02)
  .decay(0.15)
  .sustain(0.2)
  .lpf(2500)
  .room(0.15)

let lowerVoice = x => x
  .sound("square")
  .gain(0.5)
  .decay(0.15)
  .sustain(0.2)
  .room(0.15)

// Then apply with:
$: note("...").apply(upperVoice).pan(0.3)
$: note("...").apply(lowerVoice).pan(0.7)
```

## Example Patterns

### Funky Beat
```javascript
setcps(110/60/4)

$: s("bd ~ ~ bd ~ ~ bd ~")
$: s("~ ~ hh ~ ~ hh ~ hh").gain(0.6)
$: s("~ ~ ~ ~ cp ~ ~ ~").room(0.2)
```

### Ambient Pad
```javascript
setcps(60/60/4)

$: note("c3 eb3 g3 bb3")
  .sound("sine")
  .slow(4)
  .room(0.8)
  .gain(0.4)
```

### Arp with Filter
```javascript
setcps(130/60/4)

$: note("c4 e4 g4 b4 g4 e4")
  .sound("sawtooth")
  .lpf(sine.range(300, 3000).slow(4))
  .gain(0.5)
```

