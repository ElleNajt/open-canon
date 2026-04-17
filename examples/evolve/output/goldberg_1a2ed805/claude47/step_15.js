samples('shabda/speech/en-GB/f:forever,aria,remember'), samples('shabda/speech/ja-JP/f:yume,sayonara,hikari'), samples('shabda/speech/en-US/m:breathe,hollow,stay')

setcps(52/60/4)

// Variation XV: 12:07pm. Noon has passed. Something has shifted.
// The cello drone cracks open — we've modulated up to E Phrygian
// Dominant, that bright-dark mode with the major third and flat
// second, a shaft of sun through stained glass. The piano arpeggio
// has been replaced by a plucked pizzicato figure, staccato and
// curious, like raindrops on a windowpane deciding which way to fall.
// The merged voice now sings in fifths with itself via jux —
// stereo-split, one ear slightly ahead of the other, a canon at
// the distance of a breath. "Hikari" (light) replaces sayonara:
// the farewell has become a welcoming. And the heartbeat kick
// has grown a companion: a soft rim tap on the off-beats, the
// second hand of an old clock finally audible.

// Pizzicato raindrops — E Phrygian Dominant
$: note("<[e4 gs4 b4] [f4 a4 c5] [b3 d4 fs4] [a3 cs4 e4] [gs3 b3 e4]>*2")
  .slow(5)
  .sound("triangle")
  .gain(0.22)
  .attack(0.005).decay(0.18).sustain(0).release(0.3)
  .pan(rand.range(0.2, 0.8))

// The voice in canon with itself
$: note("<e4 f4 gs4 b4 a4 gs4 f4 e4 d4 e4>").slow(7)
  .sound("sawtooth")
  .gain(0.24)
  .lpf(sine.range(700, 2400).slow(9))
  .jux(rev)

// Stained glass drone — breathing wider
$: note("<e2 e2 c3 b2>").slow(11)
  .sound("square")
  .gain(0.18)
  .lpf(380)
  .tremolo(0.5)

// Hikari — light, welcoming
$: s("hikari aria").slow(12)
  .speed("<0.75 0.9 1.05>")
  .gain(0.22)
  .hpf(500)
  .room(0.9)
  .delay(0.3).dt(0.75)

// Heartbeat
$: s("bd ~ ~ ~").slow(2)
  .gain(0.32)
  .lpf(130)

// The clock's second hand
$: s("~ rim ~ rim").gain(0.14).hpf(2000).room(0.6)