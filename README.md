# vibe-duet

A music game where you talk to AI and hear what happens.

**Samples:**
- [bach_canon_9.mp3](bach/claude_originals/bach_canon_9.mp3) - Canon 9 from Goldberg Variations
- [claudes_groove.mp3](bach/claude_originals/claudes_groove.mp3) - Built from scratch: "make a funky bass line"

**Examples:** See [bach/](bach/) for code you can copy into `live.js`.

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
./start
```

Click **Play** in the browser, then just talk to your AI.

## What You Need

- [Node.js](https://nodejs.org/) 18+
- An AI coding assistant ([Claude Code](https://claude.ai/code), [Cursor](https://cursor.sh), etc.)
- Optional: [Tailscale](https://tailscale.com/) - to play audio on your phone while editing on your computer

## How It Works

You and the AI take turns. You describe what you want, the AI edits `live.js`, and you hear it instantly. The music runs in [Strudel](https://strudel.cc), a live coding environment.

Bi-directional sync:
- AI edits the file → browser updates automatically
- You edit in the browser → file updates when you evaluate (Ctrl+Enter)

## Ideas to Try

- "make it sound like 80s synth"
- "add a four-on-the-floor beat" 
- "slow it way down and add reverb"
- "make the bass wobble"
- "what would this sound like as jungle?"
- "remove the drums"
- "make it creepy"

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

**Bach's 14 Canons (BWV 1087)** - in `bach/bwv1087/`, original transcriptions plus funky remixes

**Italian Concerto (BWV 971)** - in `bach/bwv971/`, all three movements

**Convert any MIDI** - using the included converter:
```bash
./convert-strudel my-song.mid output.strudel
```

Find free classical MIDI at [Mutopia Project](https://mutopiaproject.org).

## Multi-Device Setup (Optional)

If you have [Tailscale](https://tailscale.com/), you can play audio on your phone while editing on your computer. This can be fun if you want to take your music with you and control the files remotely (e.g. via Termux or SSH).

1. Install Tailscale on both devices
2. Copy `config/local.example.json` to `config/local.json` and add your tailnet hostname
3. Run `./start` - it binds to your tailnet IP
4. Open `http://your-machine.tail....ts.net:4321` on your phone
5. Click Play, then edit on your computer

Your tailnet is private, so this is safe to use on public wifi.

Without Tailscale, everything runs on localhost - still works fine, just single-device.

## Credits

Built on [Strudel](https://strudel.cc) by the [uzu collective](https://codeberg.org/uzu/strudel) - a browser-based live coding environment that ports TidalCycles to JavaScript.

MIDI converter based on [midi_to_tidalcycles](https://github.com/ivan-googleglass/midi_to_tidalcycles) by ivan-googleglass.

## License

AGPL v3 (same as Strudel). Bach is public domain.
