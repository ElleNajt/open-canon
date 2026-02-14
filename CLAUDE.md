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

The user runs `./start` which:
1. Clones Strudel and applies patches for hot-reload
2. Starts a file server on port 3333
3. Starts Strudel on port 4321
4. Opens the browser

**The file to edit:** `live.js`

Changes sync bi-directionally:
- Edit in your editor → browser updates within 500ms
- Edit in browser → file updates on evaluate (Ctrl+Enter)

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

