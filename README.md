# vibe-duet

A music game where you talk to AI and hear what happens.

**Samples:**
- [bach_canon_9.mp3](examples/bach/bach_canon_9.mp3) - Canon 9 from Goldberg Variations
- [claudes_groove.mp3](examples/claude_originals/claudes_groove.mp3) - Built from scratch: "make a funky bass line"

**Examples:** See [examples/](examples/) for code you can copy into `live.js`.

**Styles:** See [styles/](styles/) for voice presets (e.g., baroque staccato voices).

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
- Optional: [Tailscale](https://tailscale.com/) - to play audio on your phone while editing on your computer

## How It Works

`./start` clones [a Strudel fork](https://codeberg.org/ElleNajt/strudel), builds it into static files, and runs a single FastAPI server that handles everything:

- **Frontend**: Strudel live coding UI with a CollabPanel for chatting with Claude
- **WebSocket**: Real-time updates — Claude's edits appear instantly in your browser
- **File sync**: Edit `live.js` in your editor and the browser updates within 500ms. When Claude changes code via the CollabPanel, `live.js` updates on disk too.

Two ways to make music:
1. **CollabPanel** (in-browser): Type prompts like "make it funky" and Claude edits the code live
2. **Editor + AI assistant**: Have Claude Code, Cursor, etc. edit `live.js` directly

Both work simultaneously.

**Share your creations:** Click the share button to copy a strudel.cc link - works even if vibe-duet is down.

## Ideas to Try

- "make it sound like 80s synth"
- "add a four-on-the-floor beat" 
- "slow it way down and add reverb"
- "make the bass wobble"
- "what would this sound like as jungle?"
- "remove the drums"
- "make it creepy"
- "add a voice saying 'hello world'" (uses text-to-speech)

## Tips for Better Results

Tell the AI to build up step by step:
- "start with just the melody, no effects"
- "add one element at a time so I can hear each change"
- "keep it simple, don't add too much at once"

This helps you understand what's happening and catch problems early. If things get messy, you can always say "start over with the original" or "undo the last change".

## Starting From Scratch

You don't need sheet music - just start with a simple idea and build up:

```
"let's make something from scratch"
"start with a simple bass line in G minor"
"add a melody on top"
"now add some drums"
"make it more interesting"
```

Or start with the included Bach material and transform it into something new.

## More Starting Points

**Bach's 14 Canons (BWV 1087)** - in `examples/bach/bwv1087/`, original transcriptions plus funky remixes

**Italian Concerto (BWV 971)** - in `examples/bach/bwv971/`, all three movements

**Convert any MIDI** - using the included converter:
```bash
./convert-strudel my-song.mid output.strudel
```

Find free classical MIDI at [Mutopia Project](https://mutopiaproject.org).

## Model Evolution Experiment

The `examples/evolve/` directory contains an experiment where 4 AI models (Claude, GPT, Gemini, Grok) independently evolve music over 100 steps starting from a simple beat. Each step, the model is asked to "evolve this according to your preferences."

```bash
cd examples/evolve
python evolve.py                              # default seed, 100 steps
python evolve.py --seed path/to/file.js       # custom seed (e.g., a Bach canon)
python evolve.py --name bach01 --steps 50     # named experiment
python evolve.py --resume                     # continue from where you left off
```

Requires `ANTHROPIC_API_KEY` and `OPENROUTER_API_KEY` in environment. Code is validated with Strudel's runtime before saving.

## Multi-Device Setup (Optional)

If you have [Tailscale](https://tailscale.com/), you can play audio on your phone while editing on your computer.

1. Install Tailscale on both devices
2. Copy `config/local.example.json` to `config/local.json` and add your tailnet hostname
3. Run `./start` - it binds to your tailnet IP
4. Open the URL printed by `./start` on your phone
5. Click Play, then edit on your computer

Your tailnet is private, so this is safe to use on public wifi.

Without Tailscale, everything runs on localhost - still works fine, just single-device.

## Deploying to Cloud Run

```bash
server/deploy.sh
```

This builds Strudel, copies static files into the server, and deploys to Cloud Run. Requires a GCP project with Cloud Run and Cloud Build enabled. Set `ANTHROPIC_API_KEY` as a Cloud Run secret.

## Credits

Built on [Strudel](https://strudel.cc) by the [uzu collective](https://codeberg.org/uzu/strudel) - a browser-based live coding environment that ports TidalCycles to JavaScript.

MIDI converter based on [midi_to_tidalcycles](https://github.com/ivan-googleglass/midi_to_tidalcycles) by ivan-googleglass.

## License

AGPL v3 (same as Strudel). Bach is public domain.
