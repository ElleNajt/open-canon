# open-canon

Infinitely remixable classical music. Fire up your AI coding assistant and start transforming Bach.

```
"make this funky"
"add a breakbeat"  
"slow it down and make it ambient"
"what would this sound like as drum and bass"
```

## The Idea

Classical music transcribed to [TidalCycles](https://tidalcycles.org) - a live coding language for music. Each piece is a starting point. Remix it, transform it, make it yours.

Works great with AI coding assistants (Claude Code, Cursor, etc.) - just describe what you want and watch it happen.

## Quick Start

```bash
git clone --recursive https://github.com/ElleNajt/open-canon.git
cd open-canon
```

Open any `.tidal` file and start remixing.

## What's Here

**Bach BWV 1087** - 14 Canons on the Goldberg Ground
- `bach/bwv1087/original/` - Faithful transcriptions from MIDI
- `bach/bwv1087/remixes/` - Transformed versions

## Contributing

Add more pieces! Find MIDI on [Mutopia Project](https://mutopiaproject.org), convert with the included tool, remix, and PR.

## Rendering to MP3

```bash
./render bach/bwv1087/remixes/canon9_funky.tidal 8
```

Renders 8 cycles to `mp3/canon9_funky.mp3`. Fully automated - spawns SuperCollider, records, converts to MP3.

Requires: SuperCollider, GHCi with Tidal, ffmpeg

## Future: Browser Playback

[Strudel](https://strudel.cc) support planned - will enable instant playback in browser, no install needed.

## License

The music is public domain. Code is MIT.
