setcps(112/60/4)

// Baroque style voices
let upperVoice = x => x
  .sound("triangle")
  .gain(0.42)
  .attack(0.03)
  .decay(0.18)
  .sustain(0.15)
  .release(0.12)
  .lpf(2200)
  .room(0.3)
  .size(0.55)

let lowerVoice = x => x
  .sound("square")
  .gain(0.35)
  .attack(0.01)
  .decay(0.15)
  .sustain(0.18)
  .release(0.1)
  .lpf(1200)
  .room(0.22)
  .size(0.5)

let bassVoice = x => x
  .sound("sine")
  .gain(0.52)
  .attack(0.06)
  .decay(0.25)
  .sustain(0.35)
  .release(0.2)
  .lpf(700)
  .room(0.15)

let innerVoice = x => x
  .sound("sawtooth")
  .gain(0.22)
  .attack(0.08)
  .decay(0.3)
  .sustain(0.2)
  .release(0.18)
  .lpf(900)
  .lpq(4)
  .room(0.35)
  .size(0.6)

// Track 1 - upper voice, slow shimmer detune, now with subtle FM warmth
$: note("~!40 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!7 b5 ~!7 a5 ~!7 g5 ~!7 d6 ~!7 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!7 b5 ~!7 a5 ~!7 g5 ~!7 d6 ~!7 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!15")
  .slow(208/8/4)
  .apply(upperVoice)
  .pan(0.22)
  .detune(sine.range(-6, 6).slow(19))
  .fmi(sine.range(0.1, 0.9).slow(31))
  .fmh(2)
  .juxBy(0.3, x => x.late(0.125).gain(0.18).room(0.5))

// Track 2 - middle voice, panned right, vowel drift added
$: note("~!8 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!15")
  .slow(208/8/4)
  .apply(lowerVoice)
  .pan(0.78)
  .vowel(sine.range(0, 1).slow(17))
  .phaser(0.3)
  .phaserdepth(0.4)
  .phasersweep(600)

// Track 3 - inner voice, slower harmonic drift, echo shimmer
$: note("<b3 c4 d4 b3 a3 g3 e3 fs3>")
  .slow(11)
  .apply(innerVoice)
  .pan(sine.range(0.3, 0.7).slow(23))
  .lpf(sine.range(550, 1200).slow(13))
  .echo(2, 0.375, 0.35)
  .gain(0.19)

// Track 4 - bass, now with walking counterpoint shadow
$: note("<g2 g2 d3 a2 c3 d3 e2 b2>")
  .slow(9)
  .apply(bassVoice)
  .pan(0.5)
  .lpf(sine.range(300, 820).slow(21))
  .off(0.5, x => x.note("<d2 g2 a2 e2 c2 g2 b2 fs2>").gain(0.26).lpf(380).room(0.2))