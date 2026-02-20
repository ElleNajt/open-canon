// BWV 1087 Canon 9

// Baroque style voices
let upperVoice = x => x
  .sound("triangle")
  .gain(0.44)
  .attack(0.021)
  .decay(0.13)
  .sustain(0.21)
  .lpf(2350)
  .room(0.25)

let lowerVoice = x => x
  .sound("square")
  .gain(0.34)
  .decay(0.17)
  .sustain(0.19)
  .lpf(625)
  .room(0.17)

setcps(120/60/4)

// Track 1 — upper melody, now with evolving filter and more varying motion
$: note("g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 ~ d6 ~ a5 ~ gb5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ gb5 ~ a5 ~ d6 c6 b5 a5")
  .slow(264/8/4)
  .apply(upperVoice)
  .pan(rand.range(0.11, 0.53).slow(23))
  .lpf(sine.range(1350, 4100).slow(10))
  .hpf(sine.range(170, 1240).slow(12))
  .room(0.32)
  .degradeBy(0.1)
  .every(13, x => x.vowel("<i u a>"))
  .every(19, x => x.rev())
  .every(25, x => x.distort(0.22))
  .every(8, x => x.tremolo(0.11).tremolosync(0.16))
  .every(29, x => x.delay(0.18).delaytime(0.15).delayfeedback(0.17))

// Track 2 — lower voice, simplified harmonic range and more subtle, with slightly warmer filter
$: note("g3 ~ d4 ~ b3 ~ d4 ~ g4 ~ d4 ~ b3 ~ d4 ~ g3 ~ d3 ~ e3 ~ c3 ~ b2 ~ d3 ~ g3 ~ d3 ~ a2 ~ g3 ~ d3 ~ g2 ~ g3 ~ b3 ~ d4 ~ g3 ~ e4 ~ c4 ~ a3 ~ c4 ~ g3 ~ a3 ~ d4 c4 b3 a3")
  .slow(264/8/4)
  .apply(lowerVoice)
  .pan(sine.range(0.17, 0.66).slow(16))
  .lpf(sine.range(370, 1080).slow(15))
  .hpf(70)
  .room(0.14)
  .degradeBy(0.17)
  .every(11, x => x.vowel("o"))
  .every(17, x => x.rev())
  .every(21, x => x.distort(0.17))
  .every(7, x => x.tremolo(0.09).tremolosync(0.11))

// Track 3 — shimmer, now with subtle grain for extra warmth
$: note("e6 ~!4 b5 ~!7 d6 ~!6 g6 ~!8 b6 ~!6 e7 ~!9")
  .slow(264/24)
  .sound("sine")
  .attack(1.53)
  .release(7.5)
  .decay(3.4)
  .sustain(0.07)
  .gain(0.026)
  .pan(sine.range(0.29, 0.74).slow(10))
  .room(1)
  .lpf(sine.range(270, 900).slow(13))
  .every(9, x => x.vowel("i"))
  .every(21, x => x.rev())
  .every(14, x => x.distort(0.13))
  .every(11, x => x.tremolo(0.21).tremolosync(0.21))
  .every(17, x => x.delay(0.22).delaytime(0.14).delayfeedback(0.16))
  .every(13, x => x.chop(2))