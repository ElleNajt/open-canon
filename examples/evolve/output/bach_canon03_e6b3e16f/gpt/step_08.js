// BWV 1087 Canon 3

// Baroque style voices
let upperVoice = x => x
  .sound("triangle")
  .gain(0.39)
  .attack(0.025)
  .decay(0.12)
  .sustain(0.23)
  .lpf(1750)
  .room(0.28)

let lowerVoice = x => x
  .sound("square")
  .gain(0.38)
  .attack(0.035)
  .decay(0.19)
  .sustain(0.16)
  .lpf(950)
  .room(0.16)

setcps(116/60/4)

// Track 1
$: note("~!40 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!7 b5 ~!7 a5 ~!7 g5 ~!7 d6 ~!7 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!7 b5 ~!7 a5 ~!7 g5 ~!7 d6 ~!7 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!15")
  .slow(208/8/4)
  .apply(upperVoice)
  .pan(0.17)
  .room(0.31)
  .degradeBy(0.03)
  .every(16, x => x.lpf(1350).gain(0.33))
  .every(24, x => x.rev())
  .sometimes(x => x.hpf(900).gain(0.22))
  .every(12, x => x.vowel("e o"))
  .sometimes(x => x.attack(0.04).decay(0.18).room(0.44))

// Track 2
$: note("~!8 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!15")
  .slow(208/8/4)
  .apply(lowerVoice)
  .pan(0.81)
  .room(0.15)
  .degradeBy(0.03)
  .every(12, x => x.lpf(625).gain(0.3))
  .every(20, x => x.hpf(400))
  .sometimes(x => x.vowel("a u").gain(0.25))
  .every(24, x => x.rev())
  .every(16, x => x.decay(0.25).room(0.23))

// Track 3 — bass, more focus, evolving resonance, remove 'octave' rise for clarity, more decay evolution
$: n("[d2 ~ ~ a2] [d2 ~ fs2 ~] [g2 ~ b1 ~] [d2 ~ a1 ~] [fs2 g2] [b1 a1]")
  .sound("sine")
  .gain(0.19)
  .sustain(0.13)
  .attack(0.013)
  .release(0.19)
  .room(0.32)
  .pan(0.47)
  .lpf(sine.range(370, 880).slow(24))
  .lpq(tri.range(3, 11).slow(42))
  .every(16, x => x.lpf(950).room(0.36))
  .every(12, x => x.hpf(55))
  .sometimes(x => x.lpf(1100).room(0.16))
  .sometimes(x => x.attack(0.027).gain(0.21))
  .every(8, x => x.release(0.14).decay(0.11))