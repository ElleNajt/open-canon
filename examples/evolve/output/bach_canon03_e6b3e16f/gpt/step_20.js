// BWV 1087 Canon 3

// Baroque style voices
let upperVoice = x => x
  .sound("triangle")
  .gain(0.37)
  .attack(0.027)
  .decay(0.12)
  .sustain(0.21)
  .lpf(1320)
  .room(0.27)

let lowerVoice = x => x
  .sound("square")
  .gain(0.32)
  .attack(0.04)
  .decay(0.10)
  .sustain(0.2)
  .lpf(890)
  .room(0.18)

setcps(116/60/4)

// Track 1
$: note("~!40 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!7 b5 ~!7 a5 ~!7 g5 ~!7 d6 ~!7 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!7 b5 ~!7 a5 ~!7 g5 ~!7 d6 ~!7 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!15")
  .slow(208/8/4)
  .apply(upperVoice)
  .pan(0.22)
  .room(0.27)
  .degradeBy(0.03)
  .every(16, x => x.lpf(1020).gain(0.23).decay(0.13))
  .every(22, x => x.rev())
  .every(14, x => x.vowel("a i"))
  .every(28, x => x.slow(0.96))
  .every(40, x => x.delay(0.14).delaytime(0.37).delayfeedback(0.18).room(0.14).pan(0.18))
  .sometimes(x => x.hpf(920).gain(0.13).room(0.12))

// Track 2 — lower voice clarity, warmth, phaser becomes more apparent, remove some effects
$: note("~!8 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!15")
  .slow(208/8/4)
  .apply(lowerVoice)
  .pan(0.77)
  .room(0.13)
  .every(10, x => x.decay(0.13).room(0.15).lpf(540))
  .phaser(0.22).phaserdepth(0.26)
  .every(32, x => x.delay(0.11).delaytime(0.24).delayfeedback(0.11))
  .sometimes(x => x.attack(0.035).room(0.13))

// Track 3 — warm blurry bass with sporadic clarity, more sparse filter action
$: n("[d2 ~ a2] [d2 ~ fs2] [g2 ~ b1] [d2 ~ a1] [fs2 g2] [b1 a1]")
  .sound("sine")
  .gain(0.10)
  .sustain(0.14)
  .attack(0.019)
  .release(0.27)
  .lpf(sine.range(570, 770).slow(20))
  .lpq(5)
  .room(0.33)
  .pan(sine.range(0.28,0.55).slow(19))
  .every(18, x => x.lpf(430).room(0.15).gain(0.06))
  .sometimes(x => x.hpf(95).room(0.19))
  .sometimes(x => x.slow(1.18))
  .every(24, x => x.rev().pan(0.41))
  .sometimes(x => x.gain(0.07).delay(0.22).delaytime(0.19).delayfeedback(0.13).lpf(480))
  .every(12, x => x.vowel("u o"))