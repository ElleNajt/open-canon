// BWV 1087 Canon 3

// Baroque style voices
let upperVoice = x => x
  .sound("triangle")
  .gain(0.37)
  .attack(0.027)
  .decay(0.1)
  .sustain(0.25)
  .lpf(1460)
  .room(0.34)

let lowerVoice = x => x
  .sound("square")
  .gain(0.35)
  .attack(0.03)
  .decay(0.17)
  .sustain(0.12)
  .lpf(780)
  .room(0.19)

setcps(116/60/4)

// Track 1
$: note("~!40 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!7 b5 ~!7 a5 ~!7 g5 ~!7 d6 ~!7 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!7 b5 ~!7 a5 ~!7 g5 ~!7 d6 ~!7 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!15")
  .slow(208/8/4)
  .apply(upperVoice)
  .pan(0.12)
  .room(0.33)
  .degradeBy(0.05)
  .every(16, x => x.lpf(1280).gain(0.28).decay(0.13))
  .every(24, x => x.rev())
  .sometimes(x => x.hpf(1100).gain(0.18).room(0.25))
  .every(12, x => x.vowel("e o"))
  .sometimes(x => x.attack(0.044).decay(0.13).room(0.36))

// Track 2
$: note("~!8 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!15")
  .slow(208/8/4)
  .apply(lowerVoice)
  .pan(0.88)
  .room(0.13)
  .degradeBy(0.04)
  .every(12, x => x.lpf(480).gain(0.19))
  .every(20, x => x.hpf(320))
  .sometimes(x => x.vowel("a u").gain(0.22))
  .every(24, x => x.rev())
  .every(16, x => x.decay(0.29).room(0.31).lpf(560))

// Track 3 — new evolving bass with subtle FM and filter shift
$: n("[d2 ~ a2] [d2 ~ fs2] [g2 ~ b1] [d2 ~ a1] [fs2 g2] [b1 a1]")
  .sound("sine")
  .gain(0.16)
  .sustain(0.09)
  .attack(0.015)
  .release(0.17)
  .lpf(sine.range(340, 720).slow(30))
  .lpq(saw.range(2.5, 8).slow(28))
  .room(0.27)
  .pan(0.51)
  .every(12, x => x.lpf(1100).room(0.11))
  .every(16, x => x.hpf(67).attack(0.022))
  .sometimes(x => x.lpf(900).room(0.2))
  .sometimes(x => x.gain(0.19).lpq(12))
  .every(8, x => x.release(0.12).decay(0.09))