# vibe-duet

A music game where you talk to AI and hear what happens.

[Listen to a sample: funky_canon.mp3](funky_canon.mp3) - Bach Canon 9, remixed by Claude Opus 4.5

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

## How It Works

You and the AI take turns. You describe what you want, the AI edits `live.strudel`, and you hear it instantly. The music runs in [Strudel](https://strudel.cc), a live coding environment.

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

## Starting Material

Includes Bach's 14 Canons on the Goldberg Ground (BWV 1087) in `bach/bwv1087/` - original transcriptions plus funky remixes by Claude Opus 4.5.

Replace `live.strudel` with any pattern from there, or write your own.

## Add More Music

Convert any MIDI file to Strudel with the included converter (based on [midi_to_tidalcycles](https://github.com/ivan-googleglass/midi_to_tidalcycles)):

```bash
./convert-strudel my-song.mid output.strudel
```

Find free classical MIDI at [Mutopia Project](https://mutopiaproject.org).

## Credits

Built on [Strudel](https://strudel.cc) by the [uzu collective](https://codeberg.org/uzu/strudel) - an incredible browser-based live coding environment that ports TidalCycles to JavaScript. Thank you for making music accessible.

MIDI converter based on [midi_to_tidalcycles](https://github.com/ivan-googleglass/midi_to_tidalcycles) by ivan-googleglass.

## License

MIT. The Bach is public domain.
