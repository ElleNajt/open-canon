# vibe-duet

Live music collaboration. Edit `live.strudel` and changes play instantly in the browser.

This file contains instructions for AI coding assistants.

## Quick Reference

**The file to edit:** `live.strudel`

Changes are hot-reloaded into Strudel within 500ms.

## Strudel Syntax Basics

```javascript
// Set tempo (BPM / 60 / 4)
setcps(120/60/4)

// Play notes with a synth
$: note("c4 e4 g4").sound("sawtooth")

// Play drum samples
$: s("bd hh sn hh")

// Multiple patterns play together (each $: is a track)
$: note("c3 g3").sound("triangle")  // bass
$: s("bd cp bd cp")                  // drums
```

## Synths

- `sawtooth` - Classic, good for leads
- `square` - Hollow, retro
- `triangle` - Soft, good for bass
- `sine` - Pure tone

## Drums

`bd` (kick), `sn` (snare), `hh` (hihat), `oh` (open hat), `cp` (clap), `cr` (crash)

## Effects

```javascript
.lpf(800)           // lowpass filter
.lpf(sine.range(200, 2000).slow(4))  // filter sweep
.gain(0.5)          // volume
.pan(0.3)           // stereo (0-1)
.room(0.5)          // reverb
.delay(0.5)         // echo
.crush(4)           // bitcrush
```

## Transformations

```javascript
.slow(2)            // half speed
.fast(2)            // double speed
.rev()              // reverse
.every(4, fast(2))  // speed up every 4th cycle
.sometimes(x => x.crush(4))  // random effect
```

## Example

```javascript
setcps(120/60/4)

// Melody with filter sweep
$: note("g4 b4 d5 g5 d5 b4")
  .sound("sawtooth")
  .lpf(sine.range(400, 2000).slow(8))
  .gain(0.6)

// Bass
$: note("g2 ~ ~ g2 ~ ~ fs2 ~")
  .sound("triangle")
  .gain(0.8)

// Drums
$: s("bd ~ bd ~ bd ~ bd cp")
$: s("~ hh ~ hh").gain(0.5)
```

## User Prompts

- "make it funky" → add syncopation, filter sweeps, drums
- "add drums" → layer bd/sn/hh patterns
- "make it ambient" → slow down, reverb, softer sounds
- "more bass" → add low triangle/sine notes
- "speed it up" → increase setcps or use .fast()
- "make it weird" → .crush(), random effects, odd rhythms
