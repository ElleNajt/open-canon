// BWV 1087 Canon 3

// Baroque style voices
let upperVoice = x => x
  .sound("triangle")
  .gain(0.31)
  .attack(0.032)
  .decay(0.12)
  .sustain(0.16)
  .lpf(1180)
  .room(0.23)

let lowerVoice = x => x
  .sound("square")
  .gain(0.22)
  .attack(0.047)
  .decay(0.09)
  .sustain(0.12)
  .lpf(560)
  .room(0.19)

setcps(116/60/4)

// Track 1 — upper voice: more contrast, clearer phrasing, deepen phaser
$: note("~!40 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!7 b5 ~!7 a5 ~!7 g5 ~!7 d6 ~!7 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!7 b5 ~!7 a5 ~!7 g5 ~!7 d6 ~!7 d5 ~!7 e5 ~!7 gb5 ~!15")
  .slow(208/8/4)
  .apply(upperVoice)
  .pan(0.18)
  .room(0.19)
  .degradeBy(0.013)
  .every(12, x => x.phaser(sine.range(0.16,0.3).slow(18)))
  .sometimesBy(0.17, x => x.hpf(1360).vowel("i o"))
  .every(24, x => x.rev())
  .every(16, x => x.gain(0.25).lpf(sine.range(900, 1520).slow(12)))
  .sometimes(x => x.lpf(1260).room(0.27))
  .every(28, x => x.attack(0.023).decay(0.15).sustain(0.13))

// Track 2 — lower voice: highlight phrasing, slightly bolder attack, lessen effects
$: note("~!8 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!15")
  .slow(208/8/4)
  .apply(lowerVoice)
  .pan(0.69)
  .room(0.18)
  .attack(0.035)
  .every(10, x => x.decay(0.15).room(0.13).lpf(530))
  .often(x => x.vowel("a u").gain(0.21))
  .every(14, x => x.lpf(660).decay(0.11))
  .every(20, x => x.sustain(0.09).lpf(680))
  .sometimes(x => x.room(0.15).hpf(403))

// Track 3 — bass: remove stretch, clarify envelope, keep more space
$: n("[d2 ~ a2] [d2 ~ fs2] [g2 ~ b1] [d2 ~ a1] [fs2 g2] [b1 a1]")
  .sound("piano")
  .gain(0.076)
  .sustain(0.16)
  .attack(0.011)
  .release(0.19)
  .lpf(sine.range(470, 900).slow(8))
  .lpq(14)
  .room(0.20)
  .pan(sine.range(0.45,0.53).slow(10))
  .every(16, x => x.lpf(340).release(0.12).gain(0.065))
  .sometimesBy(0.11, x => x.octave(1).gain(0.09))

// Track 4 — upper harmonic “halo”: sparser, more reverb, random panning
$: n("~!32 g5 ~!13 d6 ~!10 a5 ~!7 b5 ~!9 e6 ~!7 d6")
  .sound("supersaw")
  .gain(0.028)
  .attack(0.009)
  .decay(0.24)
  .sustain(0.03)
  .release(0.12)
  .lpf(2100)
  .room(0.61)
  .pan(rand.range(0.07, 0.37))
  .every(11, x => x.hpf(1380))
  .every(6, x => x.rev())
  .degradeBy(0.33)