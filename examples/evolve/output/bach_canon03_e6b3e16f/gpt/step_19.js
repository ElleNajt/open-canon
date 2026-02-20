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
  .decay(0.12)
  .sustain(0.18)
  .lpf(950)
  .room(0.22)

setcps(116/60/4)

// Track 1
$: note("~!40 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!7 b5 ~!7 a5 ~!7 g5 ~!7 d6 ~!7 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!7 b5 ~!7 a5 ~!7 g5 ~!7 d6 ~!7 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!15")
  .slow(208/8/4)
  .apply(upperVoice)
  .pan(0.12)
  .room(0.34)
  .degradeBy(0.02)
  .every(16, x => x.lpf(1240).gain(0.25).decay(0.17))
  .every(22, x => x.rev())
  .every(10, x => x.vowel("e o"))
  .every(28, x => x.slow(0.92))
  .every(32, x => x.delay(0.18).delaytime(0.41).delayfeedback(0.21).room(0.21).pan(0.14))
  .every(48, x => x.lpf(700).pan(0.28))
  .sometimes(x => x.hpf(1040).gain(0.18).room(0.15))

// Track 2 — lower voice clarity, warmth, phaser becomes more apparent, remove some effects
$: note("~!8 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!15")
  .slow(208/8/4)
  .apply(lowerVoice)
  .pan(0.86)
  .room(0.16)
  .every(14, x => x.decay(0.15).room(0.19).lpf(600))
  .every(20, x => x.hpf(200))
  .phaser(0.22).phaserdepth(0.22)
  .every(36, x => x.delay(0.08).delaytime(0.18).delayfeedback(0.08))
  .sometimes(x => x.attack(0.03).room(0.17))

// Track 3 — evolving warmth and depth, emphasize vowel, simplify filter sweep
$: n("[d2 ~ a2] [d2 ~ fs2] [g2 ~ b1] [d2 ~ a1] [fs2 g2] [b1 a1]")
  .sound("sine")
  .gain(0.13)
  .sustain(0.17)
  .attack(0.022)
  .release(0.31)
  .lpf(sine.range(580, 880).slow(16))
  .lpq(7)
  .room(0.39)
  .pan(sine.range(0.34,0.63).slow(14))
  .every(16, x => x.lpf(600).room(0.19).gain(0.10))
  .every(18, x => x.hpf(160).room(0.29))
  .sometimes(x => x.slow(1.1))
  .every(24, x => x.rev().pan(0.41))
  .every(32, x => x.gain(0.07).delay(0.19).delaytime(0.27).delayfeedback(0.19).lpf(590))
  .every(8, x => x.vowel("a o"))
  .sometimes(x => x.vowel("u"))