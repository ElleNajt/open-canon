# Album Assembly from Evolution Runs

## Overview

You have a collection of AI-generated Strudel live-coding pieces from multiple evolution runs. Your job is to curate, arrange, and assemble them into a cohesive album with narrative arc.

## Step 1: Analyze Source Material

For each step file, identify:
- **Key center** (root note + mode from bass line and chord voicings)
- **Energy level** (1-5, based on density, tempo, effect stacking)
- **Timbral palette** (which synths, samples, effects dominate)
- **Vibe** (ambient, groovy, chaotic, meditative, etc.)

## Step 2: Select Tracks

Pick the most musically interesting pieces. Criteria:
- Interesting melodic/harmonic content (not just noise)
- Good use of effects and layering
- Variety — don't pick 5 tracks that sound the same
- Enough range to build an arc

## Step 3: Design the Arc

Arrange selected tracks into a narrative:

```
Opening (low energy, establishes theme)
  → Awakening (gentle expansion)
    → Building (energy increases, new elements)
      → Peak / Climax (maximum energy and complexity)
    → Descent (energy decreasing but still rich)
  → Reflection (calm, spacious)
Closing (return to simplicity)
```

## Step 4: Analyze Transitions

For every pair of adjacent tracks, check:
- **Key compatibility**: Same key > related keys (relative, subdominant, dominant) > distant keys > tritone (worst)
- **Energy continuity**: Gradual changes are better than abrupt jumps
- **Timbral continuity**: Shared synth types or effects smooth transitions

Rate each transition: SMOOTH / OKAY / ROUGH / JARRING

## Step 5: Fix Problem Transitions

Three tools, in order of preference:

### A. Reorder
Sometimes swapping two tracks fixes multiple transitions at once. Prioritize keeping the energy arc intact.

### B. Transpose
If a track is in the wrong key for its neighbors, transpose it. In Strudel:
- Add `.transpose(n)` to note patterns (n = semitones, positive = up, negative = down)
- Or rewrite the note names directly
- Transposing the bass line and chords together preserves the internal harmony

Example: Track in E minor between two C minor tracks → transpose down 4 semitones to C minor:
```javascript
// Before (E minor)
$: note("e2 [~ f2] <a1 d2> [e2 c2]")

// After (C minor) — every note shifted down 4 semitones
$: note("c2 [~ db2] <f1 bb1> [c2 ab1]")
```

Transposition guide (semitones between common keys):
- C→D: +2, C→Eb: +3, C→E: +4, C→F: +5, C→G: +7
- Minor third: ±3, Perfect fourth: ±5, Tritone: ±6

### C. Write Bridge Tracks

When two tracks are too different for transposition alone, write a short bridge (2-4 cycles) that:

1. **Starts with elements from the outgoing track** (key, rhythm, timbre)
2. **Gradually introduces elements from the incoming track** (new key center, new synths)
3. **Uses shared elements** as anchors (common notes between the two keys, similar effects)

Bridge template:
```javascript
setcps(80/60/4)  // match album BPM

// Outgoing key center, fading
$: note("[outgoing bass notes]")
  .sound("triangle")
  .lpf(sine.range(800, 200).slow(2))  // filter closing
  .gain(0.3)
  .room(0.7)

// Pivot chord (notes shared between both keys)
$: note("<[shared1,shared2,shared3] [incoming1,incoming2,incoming3]>")
  .slow(2)
  .sound("supersaw")
  .attack(1)
  .release(2)
  .lpf(1200)
  .gain(0.2)

// Incoming rhythm preview, quiet
$: s("[incoming drum pattern]")
  .gain(sine.range(0, 0.4).slow(2))  // fading in
  .lpf(sine.range(400, 4000).slow(2))
```

Key technique: **pivot notes**. Between any two keys, find notes that exist in both scales. Build the bridge around those shared tones.

Common pivot notes:
- Cm ↔ Em: G and C exist in both scales
- Cm ↔ Gm: Bb, D, Eb, G all shared (closely related)
- Em ↔ Gm: G, B/Bb pivot, D shared
- Any key ↔ tritone: no shared notes — use chromatic descent or a diminished chord as bridge

## Step 6: Set Track Lengths

Not every track needs the same length. Guidelines:
- **Opener/Closer**: Short (2-4 cycles). Don't overstay.
- **Building tracks**: Medium (8 cycles). Establish and move on.
- **Peak/climax**: Long (12-16 cycles). This is the moment — let it breathe.
- **Bridges**: Short (2-4 cycles). Transitions, not destinations.
- **Dense/complex tracks**: Longer (they reward repeated listening within one pass)
- **Simple tracks**: Shorter (they make their point quickly)

Warning: Very dense tracks (heavy effects, many voices) may take 3-5 minutes to render per cycle in OfflineAudioContext. 16 cycles of a complex piece can take 5+ minutes to render.

## Step 7: Render

Use `render_album.mjs` with:
- `--bpm 80` (or your chosen tempo) to normalize all tracks to the same beat grid
- `--cycle-map '{"00":4,"05":12,...}'` for per-track cycle counts
- `--crossfade 0` (crossfades break the beat grid)

Render in batches if timeout issues occur with dense tracks.
Concatenate with ffmpeg: `ffmpeg -f concat -safe 0 -i list.txt -c:a libmp3lame -b:a 320k album.mp3`

## Step 8: Listen and Iterate

After rendering, listen to the full album start to finish. Pay attention to:
- Do the bridges actually bridge? Or do they feel like separate tracks?
- Are any tracks too long or too short?
- Does the energy arc feel right?
- Any moments where the key change is still too harsh?

Adjust and re-render. The render pipeline is fast enough to iterate.
