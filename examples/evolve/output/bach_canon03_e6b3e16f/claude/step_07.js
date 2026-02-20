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

// Track 1 - upper voice, tightened shimmer, FM breathes more slowly
$: note("~!40 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!7 b5 ~!7 a5 ~!7 g5 ~!7 d6 ~!7 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!7 b5 ~!7 a5 ~!7 g5 ~!7 d6 ~!7 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!15")
  .slow(208/8/4)
  .apply(upperVoice)
  .pan(0.22)
  .detune(sine.range(-4, 4).slow(27))
  .fmi(sine.range(0.05, 0.65).slow(41))
  .fmh(3)
  .juxBy(0.25, x => x.late(0.25).gain(0.15).room(0.6).size(0.7))

// Track 2 - middle voice, vowel drift slowed, phaser deepened
$: note("~!8 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!15")
  .slow(208/8/4)
  .apply(lowerVoice)
  .pan(0.78)
  .vowel(sine.range(0, 1).slow(29))
  .phaser(0.18)
  .phaserdepth(0.6)
  .phasersweep(800)
  .phasercenter(900)

// Track 3 - inner voice, longer harmonic cycle, less echo to breathe more
$: note("<b3 c4 d4 b3 a3 g3 e3 fs3>")
  .slow(13)
  .apply(innerVoice)
  .pan(sine.range(0.28, 0.72).slow(31))
  .lpf(sine.range(480, 1400).slow(17))
  .echo(2, 0.5, 0.28)
  .gain(0.21)

// Track 4 - bass, walking counterpoint with richer resonance
$: note("<g2 g2 d3 a2 c3 d3 e2 b2>")
  .slow(9)
  .apply(bassVoice)
  .pan(0.5)
  .lpf(sine.range(280, 900).slow(23))
  .lpq(sine.range(1, 6).slow(37))
  .off(0.5, x => x.note("<d2 g2 a2 e2 c2 g2 b2 fs2>").gain(0.28).lpf(440).room(0.25).size(0.5))