# vibe-duet

A music game where you talk to AI and hear what happens.

**Samples:**
- [bach_canon_9.mp3](examples/bach/bach_canon_9.mp3) - Canon 9 from Goldberg Variations
- [claudes_groove.mp3](examples/claude_originals/claudes_groove.mp3) - Built from scratch: "make a funky bass line"

```
"make it funky"
"add a breakbeat"  
"slow it down"
"more bass"
"make it weird"
```

## Play

```bash
git clone https://github.com/ElleNajt/vibe-duet.git
cd vibe-duet
cp .env.example .env  # add your ANTHROPIC_API_KEY
./start
```

Click **Play** in the browser, then use the CollabPanel to chat with Claude, or have your AI edit `live.js` directly.

## What You Need

- [Node.js](https://nodejs.org/) 18+ and [pnpm](https://pnpm.io/)
- Python 3.12+
- An `ANTHROPIC_API_KEY` in `.env`
- **Chrome or Chromium-based browser** (Firefox has AudioWorklet issues that cause crashes)

## How It Works

`./start` clones a [Strudel fork](https://codeberg.org/ElleNajt/strudel), builds it into static files, and runs a single FastAPI server that handles everything: frontend, WebSocket, API, and file sync.

Two ways to make music:

1. **CollabPanel** (in-browser): Type prompts and Claude edits the code live
2. **Editor + AI assistant**: Have Claude Code, Cursor, etc. edit `live.js` directly

Both work simultaneously. Edits in your editor appear in the browser within 500ms. When Claude changes code via the CollabPanel, `live.js` updates on disk too.

## CollabPanel Features

The in-browser panel (right side) supports:

- **Text prompts**: Describe what you want and Claude edits the code
- **Image upload**: Attach an image for visual inspiration (Claude sees it)
- **Webcam**: Toggle live webcam feed — each prompt includes a frame so Claude can see you / your environment
- **Screen share**: Toggle screen capture — sends a screenshot with each prompt
- **YouTube import**: Import audio from YouTube — downloads, chunks, and analyzes for loudness, key, and pitches. Claude sees the metadata and can use it musically.
- **Audio upload**: Upload any audio file (mp3, wav, etc.) as a sample bank — same chunking and analysis as YouTube import.
- **Mic recording**: Record audio from your mic and save it as a sample. Use in code: `samples('/mic-samples/strudel.json'), s("mic:0")`
- **Repeating prompts**: Set a prompt to run every N seconds (5-300s), with or without webcam/screen. Useful for continuous evolution.
- **History**: Click any previous version to load it. Shows who made each change and what they asked for.
- **Error auto-fix**: If the code crashes, Claude automatically attempts to fix it (up to 5 tries with exponential backoff)
- **Queue**: Multiple prompts queue up. User prompts jump ahead of repeating ones.
- **Rate limiting**: 1000 requests/hour with status display

## File Sync

- Edit `live.js` in your editor, changes sync to browser in 500ms
- Claude edits via CollabPanel write back to `live.js` on disk
- Browser edits (Ctrl+Enter) also sync back to the file
- All changes tracked in an internal git repo with diffs

## Custom Samples

### GCS Sample Library

Host your own sample banks on Google Cloud Storage:

```javascript
$: samples('https://storage.googleapis.com/vibe-duet-samples/strudel.json')
  , s("claude_originals").chop(16)
```

To add samples: put audio files in `samples/<bank_name>/` and run `./sync-samples`.

### Mic Recordings

Record audio directly from the browser mic button. Recordings are saved as a `mic` sample bank:

```javascript
$: samples('/mic-samples/strudel.json')
  , s("mic:0").gain(0.5)
```

Multiple recordings are indexed as `mic:0`, `mic:1`, etc. Works with all effects, slicing, and repitching. Claude knows about available mic samples and can incorporate them when you ask.

## Speech Synthesis (shabda)

Generate spoken word samples with pitch control:

```javascript
$: samples('shabda/speech:hello,world'), s("hello world")
$: samples('shabda/speech:hello?pitch=4'), s("hello_p4")  // pitched up
```

Uses Google TTS neural synthesis — natural sounding even when pitch-shifted. Available on the deployed version; requires shabda installed locally.

## Starting Points

**From scratch** — just describe what you want:
```
"start with a simple bass line in G minor"
"add a melody on top"
"now add some drums"
```

**Bach compositions** — in `examples/bach/`:
- BWV 1087 (14 Canons) — originals + funky remixes
- BWV 971 (Italian Concerto) — all 3 movements
- BWV 1050 (Brandenburg Concerto No. 5)

**Style presets** — in `styles/` (e.g., baroque staccato voices)

**Convert any MIDI**:
```bash
./convert-strudel my-song.mid output.strudel
```
Find free classical MIDI at [Mutopia Project](https://mutopiaproject.org).

**Share your creations:** Click the share button to copy a strudel.cc link — works even if vibe-duet is down.

## Hydra Visuals

The Strudel REPL supports [Hydra](https://hydra.ojack.xyz/) for live visuals:

```javascript
await initHydra()
osc(10,0.1,1).color(0.9,0.3,0.5).kaleid(H("<3 4 5 6>")).out()
$: s("bd cp bd cp")
```

`H(pattern)` syncs Strudel patterns to Hydra params. Audio-reactive mode available with `detectAudio: true`.

## Model Evolution Experiment

`examples/evolve/` — 4 AI models (Claude, GPT-4o, Gemini 2.0 Flash, Grok-4) independently evolve music over 100 steps. Each step asks "evolve this according to your preferences." Code is validated with Strudel's runtime before saving.

```bash
cd examples/evolve
python evolve.py                              # default seed, 100 steps
python evolve.py --seed path/to/file.js       # custom seed (e.g., a Bach canon)
python evolve.py --name bach01 --steps 50     # named experiment
python evolve.py --resume                     # continue from where you left off
```

Requires `ANTHROPIC_API_KEY` and `OPENROUTER_API_KEY`.

## Deploying to Cloud Run

```bash
server/deploy.sh
```

Builds Strudel, copies static files into the server, and deploys to Cloud Run. Config lives in `deployment_config.json` (gitignored).

### GCP Setup

**APIs to enable:**
- Cloud Run, Cloud Build, Firestore, Secret Manager, Container Registry
- Cloud Text-to-Speech (for shabda TTS)
- Cloud Speech-to-Text (for YouTube sample transcription)

**Service account** (used by Cloud Run):
- `roles/datastore.user` — Firestore read/write
- `roles/secretmanager.secretAccessor` on the `anthropic-api-key` secret

**Cloud Run config:**
- Secret: `ANTHROPIC_API_KEY` from Secret Manager
- Env var: `USE_FIRESTORE=1`

When this lives on Cloud Run, you can share links with your friends and collaborate on music together in real time. :)

## Credits

Built on [Strudel](https://strudel.cc) by the [uzu collective](https://codeberg.org/uzu/strudel) — a browser-based live coding environment that ports TidalCycles to JavaScript.

MIDI converter based on [midi_to_tidalcycles](https://github.com/ivan-googleglass/midi_to_tidalcycles) by ivan-googleglass.

## License

AGPL v3 (same as Strudel). Bach is public domain.
