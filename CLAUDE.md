# open-canon

Infinitely remixable classical music.

## What is this?

A collection of classical music transcribed to TidalCycles, ready for live coding and AI-assisted remixing. Fire up your AI coding assistant and start transforming Bach.

## Quick Start

1. Open any `.tidal` file
2. Ask your AI assistant to remix it: "make this funky", "add drums", "make it ambient", "speed it up and add delay"
3. Evaluate in TidalCycles and listen

## Structure

```
bach/
  bwv1087/           # 14 Canons on the Goldberg Ground
    canon9.tidal     # Original transcription
    canon9_funky.tidal  # Example remix
    canon3.tidal
tools/
  midi_to_tidalcycles/  # MIDI to TidalCycles converter (submodule)
```

## Adding New Pieces

1. Find MIDI on Mutopia Project (mutopiaproject.org) or similar
2. Convert with the included tool:
   ```bash
   python tools/midi_to_tidalcycles/src/midi_to_tidalcycles.py -l input.mid > output.tidal
   ```
3. Place in appropriate composer/work folder

## Remix Ideas

- Change synths: `# s "supersaw"`, `# s "superpiano"`, `# s "superhoover"`
- Add effects: `# delay 0.5 # delaytime 0.125`, `# room 0.5`, `# crush 4`
- Transform time: `fast 2`, `slow 2`, `rev`, `jux rev`
- Add drums: layer a `d4 $ s "bd cp"` pattern
- Filter sweeps: `# lpf (range 200 4000 $ slow 8 sine)`
- Probability: `sometimes (# crush 3)`, `sometimesBy 0.2 (fast 2)`

## Requirements

For TidalCycles playback:
- SuperCollider + SuperDirt
- GHC + TidalCycles
- Editor with tidal-mode (Emacs, VS Code, etc.)

Future: Strudel support for browser-based playback (no install needed)

## Sources

MIDI files sourced from the Mutopia Project (mutopiaproject.org) - free sheet music and MIDI for classical works in the public domain.
