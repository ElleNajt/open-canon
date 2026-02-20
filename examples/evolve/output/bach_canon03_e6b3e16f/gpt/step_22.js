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

// Track 1 — upper voice now gets mild delay at intervals; morphs filter, adds ring modulation, limits vowel fx for clarity
$: note("~!40 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!7 b5 ~!7 a5 ~!7 g5 ~!7 d6 ~!7 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!7 b5 ~!7 a5 ~!7 g5 ~!7 d6 ~!7 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!15")
  .slow(208/8/4)
  .apply(upperVoice)
  .pan(0.22)
  .room(0.27)
  .degradeBy(0.03)
  .every(16, x => x.lpf(sine.range(820, 1420).slow(16)).gain(0.23).decay(0.13))
  .every(22, x => x.rev())
  .sometimesBy(0.27, x => x.vowel("a"))
  .every(40, x => x.delay(0.17).delaytime(0.29).delayfeedback(0.14).room(0.11).pan(0.16))
  .sometimes(x => x.hpf(920).gain(0.13).room(0.12))
  .sometimes(x => x.ring(0.22).gain(0.17))

// Track 2 — lower voice: denser phaser, very light saturation, drops delay, more subtle vowels
$: note("~!8 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!15")
  .slow(208/8/4)
  .apply(lowerVoice)
  .pan(0.77)
  .room(0.17)
  .every(10, x => x.decay(0.13).room(0.17).lpf(720))
  .often(x => x.phaser(0.19).phaserdepth(0.19))
  .sometimesBy(0.21, x => x.vowel("u"))
  .sometimes(x => x.attack(0.035).room(0.13))
  .sometimesBy(0.25, x => x.drive(0.09))

// Track 3 — bass with subtle filter slide, loses some grain but gains slight pulse and compression for firmness
$: n("[d2 ~ a2] [d2 ~ fs2] [g2 ~ b1] [d2 ~ a1] [fs2 g2] [b1 a1]")
  .sound("sine")
  .gain(0.10)
  .sustain(0.14)
  .attack(0.016)
  .release(0.25)
  .lpf(sine.range(570, 820).slow(17))
  .lpq(5)
  .room(0.28)
  .pan(sine.range(0.33,0.51).slow(17))
  .every(18, x => x.lpf(430).room(0.15).gain(0.06))
  .sometimes(x => x.hpf(95).room(0.19))
  .every(24, x => x.rev().pan(0.41))
  .sometimesBy(0.3, x => x.sound("pulse").gain(0.06).lpf(520))
  .compressor().compressorRatio(3)