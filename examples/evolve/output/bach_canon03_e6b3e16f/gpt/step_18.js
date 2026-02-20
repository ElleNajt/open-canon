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
  .every(12, x => x.vowel("e o"))
  .every(20, x => x.slow(1.1))
  .every(32, x => x.delay(0.22).delaytime(0.38).delayfeedback(0.27).room(0.18).pan(0.22))
  .every(48, x => x.distort(0.13).lpf(900).pan(0.18))
  .sometimes(x => x.hpf(1200).gain(0.20).room(0.21))

// Track 2 — lower voice evolving: reduce effects, add subtle phaser, more clarity
$: note("~!8 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!15")
  .slow(208/8/4)
  .apply(lowerVoice)
  .pan(0.88)
  .room(0.13)
  .every(16, x => x.decay(0.19).room(0.23).lpf(480))
  .every(20, x => x.hpf(320))
  .phaser(0.13).phaserdepth(0.18)
  .every(32, x => x.delay(0.16).delaytime(0.22).delayfeedback(0.13))
  .sometimes(x => x.attack(0.042).room(0.14))

// Track 3 — evolving warmth and depth; remove distortion, emphasize vowels
$: n("[d2 ~ a2] [d2 ~ fs2] [g2 ~ b1] [d2 ~ a1] [fs2 g2] [b1 a1]")
  .sound("sine")
  .gain(0.13)
  .sustain(0.21)
  .attack(0.019)
  .release(0.34)
  .lpf(sine.range(500, 1100).slow(20))
  .lpq(8)
  .room(0.44)
  .pan(sine.range(0.32,0.68).slow(22))
  .every(16, x => x.lpf(780).room(0.24).gain(0.11))
  .every(18, x => x.hpf(110).room(0.31))
  .sometimes(x => x.slow(1.26))
  .every(24, x => x.rev().pan(0.43))
  .every(32, x => x.gain(0.08).delay(0.32).delaytime(0.34).delayfeedback(0.27).lpf(670))
  .every(10, x => x.vowel("a o"))
  .sometimes(x => x.vowel("i"))

// Track 4 — evolving rhythm: add oh, vary pan, dial up clarity
$: s("hh [~ hh] cp <oh ~>").gain(0.14).pan(perlin.range(0.62,0.82).slow(18))
  .every(12, x => x.gain(0.13).delay(0.12).delaytime(0.15).delayfeedback(0.11))
  .every(24, x => x.rev())
  .sometimes(x => x.hpf(420))