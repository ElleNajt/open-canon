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
  .degradeBy(0.03)
  .every(16, x => x.lpf(1280).gain(0.28).decay(0.13))
  .every(24, x => x.rev())
  .sometimes(x => x.hpf(1100).gain(0.18).room(0.25))
  .every(12, x => x.vowel("e o"))
  .sometimes(x => x.attack(0.052).decay(0.11).room(0.36))
  .every(32, x => x.delay(0.22).delaytime(0.38).delayfeedback(0.27).room(0.18).pan(0.22))

// Track 2
$: note("~!8 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!15")
  .slow(208/8/4)
  .apply(lowerVoice)
  .pan(0.88)
  .room(0.13)
  .degradeBy(0.03)
  .every(12, x => x.lpf(480).gain(0.19))
  .every(20, x => x.hpf(320))
  .sometimes(x => x.vowel("a u").gain(0.22))
  .every(24, x => x.rev())
  .every(16, x => x.decay(0.19).room(0.23).lpf(480))
  .sometimes(x => x.attack(0.06).room(0.17))
  .every(32, x => x.delay(0.16).delaytime(0.32).delayfeedback(0.2))

// Track 3 — refined movement and warmth
$: n("[d2 ~ a2] [d2 ~ fs2] [g2 ~ b1] [d2 ~ a1] [fs2 g2] [b1 a1]")
  .sound("sine")
  .gain(0.13)
  .sustain(0.17)
  .attack(0.024)
  .release(0.27)
  .lpf(sine.range(550, 1400).slow(18))
  .lpq(6)
  .room(0.38)
  .pan(sine.range(0.39,0.61).slow(13))
  .every(16, x => x.lpf(900).room(0.25).gain(0.12))
  .sometimes(x => x.slow(1.25))
  .every(24, x => x.rev().pan(0.5))
  .every(32, x => x.gain(0.09).delay(0.23).delaytime(0.3).delayfeedback(0.24).lpf(680))