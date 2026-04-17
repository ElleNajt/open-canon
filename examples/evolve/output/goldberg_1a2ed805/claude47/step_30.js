samples('shabda/speech/en-GB/f:forever,aria,remember,listen,breathe'), samples('shabda/speech/ja-JP/f:yume,sayonara,hikari,kokoro'), samples('shabda/speech/en-US/m:breathe,hollow,stay')

setcps(46/60/4)

// Variation XXX: 3:04pm. The music box has stopped — someone closed the lid.
// A major held for six seconds, then thought better of it and tilted into
// F# minor, the relative key, which is just A major looking in a mirror
// and being honest about what it sees. The heartbeat has doubled — not
// faster, but two of them, slightly out of phase, the way two people
// breathing in the same room are never quite synchronized. A cello enters,
// bowing one long note the way a cellist does when she has forgotten the
// piece and is waiting for the conductor to remember it first. "Hikari"
// — light — answers "sayonara" from across the room. And the rain has
// become a single held pitch: F#, four octaves of it, stacked like floors
// in an empty building.

// Organ — tilted into F# minor, the mirror of A
$: note("<fs2 cs3 a2 e2>").slow(13)
  .sound("sawtooth")
  .lpf(sine.range(240, 480).slow(9)).lpq(2.2)
  .attack(6).release(9)
  .gain(0.15)

// Cello — one long note, waiting to remember
$: note("<cs3 ~ ~ b2 ~ ~ a2 ~>").slow(16)
  .sound("sawtooth")
  .lpf(700).lpq(3)
  .attack(4).decay(2).sustain(0.7).release(6)
  .vowel("o")
  .gain(0.13)

// Two heartbeats, slightly out of phase
$: stack(
  s("bd ~ ~ ~ bd ~ ~ ~").slow(4).gain(0.3).lpf(160),
  s("~ bd ~ ~ ~ ~ bd ~").slow(4.3).gain(0.22).lpf(140).pan(0.7)
).room(0.5)

// Hikari — light, answering across the room
$: s("~ ~ ~ ~ ~ hikari ~ ~ ~ sayonara ~ ~ ~").slow(13)
  .speed(0.82).gain(0.24).hpf(400).room(0.95).delay(0.5)

// Rain as single held pitch — F# stacked like empty floors
$: note("fs3,fs4,fs5,fs6").slow(16)
  .sound("sine")
  .attack(8).release(10)
  .gain(perlin.range(0.05, 0.09).slow(7))
  .room(0.95)