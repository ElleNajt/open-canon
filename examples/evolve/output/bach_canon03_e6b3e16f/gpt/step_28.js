// BWV 1087 Canon 3

// Baroque style voices
let upperVoice = x => x
  .sound("triangle")
  .gain(0.3)
  .attack(0.04)
  .decay(0.1)
  .sustain(0.13)
  .lpf(960)
  .room(0.21)

let lowerVoice = x => x
  .sound("square")
  .gain(0.22)
  .attack(0.047)
  .decay(0.09)
  .sustain(0.12)
  .lpf(560)
  .room(0.19)

setcps(116/60/4)

// Track 1 — upper voice: bring more contrast, add phaser motion and polyrhythm
$: note("~!40 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!7 b5 ~!7 a5 ~!7 g5 ~!7 d6 ~!7 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!7 b5 ~!7 a5 ~!7 g5 ~!7 d6 ~!7 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!15")
  .slow(208/8/4)
  .apply(upperVoice)
  .pan(0.2)
  .room(0.17)
  .degradeBy(0.017)
  .every(12, x => x.phaser(sine.range(0.08,0.16).slow(24)))
  .sometimesBy(0.16, x => x.hpf(1200).vowel("e i"))
  .every(24, x => x.rev())
  .every(16, x => x.gain(0.21).lpf(sine.range(850, 1420).slow(14)))
  .sometimes(x => x.lpf(1180).room(0.23))
  .every(28, x => x.attack(0.028).decay(0.13).sustain(0.1))

// Track 2 — lower voice: add formant variation, phasing out old vowel swells for clean phrasing
$: note("~!8 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!15")
  .slow(208/8/4)
  .apply(lowerVoice)
  .pan(0.8)
  .room(0.18)
  .every(10, x => x.decay(0.13).room(0.15).lpf(510))
  .sometimesBy(0.19, x => x.vowel("o a").gain(0.19))
  .every(14, x => x.lpf(650).decay(0.10))
  .every(20, x => x.sustain(0.07).lpf(680))
  .sometimes(x => x.room(0.13).hpf(303))

// Track 3 — bass: open up space, more room and evolving dynamics
$: n("[d2 ~ a2] [d2 ~ fs2] [g2 ~ b1] [d2 ~ a1] [fs2 g2] [b1 a1]")
  .sound("piano")
  .gain(0.1)
  .sustain(sine.range(0.14, 0.21).slow(12))
  .attack(0.013)
  .release(0.18)
  .lpf(sine.range(390, 800).slow(7))
  .lpq(11)
  .room(0.17)
  .pan(sine.range(0.41,0.51).slow(11))
  .every(18, x => x.lpf(320).release(0.14).gain(0.07))
  .sometimesBy(0.08, x => x.octave(1).gain(0.13))
  .every(16, x => x.gain(0.08).room(0.14))

// Track 4 — upper harmonic “halo”: sparser, floating effect, shifting pan
$: n("~!24 g5 ~!12 d6 ~!7 a5 ~!5 b5 ~!6 e6 ~!10 d6")
  .sound("supersaw")
  .gain(0.035)
  .attack(0.008)
  .decay(0.21)
  .sustain(0.05)
  .release(0.10)
  .lpf(2000)
  .room(0.43)
  .pan(sine.range(0.13, 0.27).slow(9))
  .every(15, x => x.hpf(1190))
  .every(8, x => x.rev())
  .degradeBy(0.23)