samples('shabda/speech/en-GB/f:forever,aria,remember,listen'), samples('shabda/speech/ja-JP/f:yume,sayonara,hikari,kokoro'), samples('shabda/speech/en-US/m:breathe,hollow,stay')

setcps(44/60/4)

// Variation XX: 1:17pm. The walker has stopped. Stands at a window.
// The rain has thinned to mist, and something the mind forgot
// returns — a lullaby in 5/4, irregular as breath. E dorian bends
// toward E aeolian; the raised sixth falls. A bass clarinet voice
// (sine with slow vibrato) sings a line that could be Ravel
// writing for a child who is no longer a child. "Kokoro" —
// the heart, the center — murmured once, far away. The plucked
// water-figure is gone; the footstep is gone. What remains is
// a held breath, and one voice carrying the shape of a question.

// Lullaby in 5 — bass clarinet voice, the center of the piece
$: note("<e4 g4 a4 b4 g4 ~ fs4 e4 d4 ~ b3 d4 e4 g4 ~>").slow(9)
  .sound("sine")
  .vib(4).vibmod(0.3)
  .attack(0.6).release(3)
  .gain(0.26).room(0.9)

// Counter-voice — a sixth below, shadowing, sometimes absent
$: note("<g3 ~ ~ d4 ~ b3 ~ ~ a3 ~ g3 ~>").slow(11)
  .sound("triangle")
  .attack(1).release(2.5)
  .gain(0.13).lpf(1400)
  .room(0.95)

// Held breath — E minor, no ninth now, simpler, older
$: note("e2,b2,e3,g3").slow(14)
  .sound("sawtooth")
  .gain(0.08)
  .lpf(sine.range(240, 720).slow(11)).lpq(1.5)

// Kokoro — the heart, spoken once into the distance
$: s("~ ~ ~ ~ ~ ~ kokoro ~ ~ ~ ~ ~ ~ ~ ~ ~").slow(16)
  .speed(0.72)
  .gain(0.24)
  .hpf(320).room(0.96).delay(0.5)

// Mist — not rain anymore, sparser, dissolving
$: s("~ hh ~ ~ hh ~ ~").slow(5)
  .gain(perlin.range(0.06, 0.11).slow(3))
  .hpf(6000).pan(sine.range(0.3, 0.7).slow(7))
  .room(0.85)

// A bell — far church, once per long breath, the question
$: note("<b5 ~ ~ ~ e5 ~ ~ ~>").slow(13)
  .sound("sine")
  .fm(3).fmh(2.01)
  .attack(0.02).release(4)
  .gain(0.1).room(0.98)