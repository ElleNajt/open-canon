// BWV 1087 Canon 9

// Baroque style voices
let upperVoice = x => x
  .sound("triangle")
  .gain(0.42)
  .attack(0.021)
  .decay(0.14)
  .sustain(0.2)
  .lpf(2100)
  .room(0.2)

let lowerVoice = x => x
  .sound("square")
  .gain(0.37)
  .decay(0.19)
  .sustain(0.17)
  .lpf(570)
  .room(0.16)

setcps(120/60/4)

// Track 1 — upper melody, now with evolving filter and gentle tremolo
$: note("g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 ~ d6 ~ a5 ~ gb5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ gb5 ~ a5 ~ d6 c6 b5 a5")
  .slow(264/8/4)
  .apply(upperVoice)
  .pan(rand.range(0.11, 0.53).slow(23))
  .lpf(sine.range(1550, 4200).slow(8))
  .hpf(sine.range(210, 1160).slow(14))
  .room(0.27)
  .degradeBy(0.13)
  .every(13, x => x.vowel("<i u a>"))
  .every(21, x => x.rev())
  .every(25, x => x.distort(0.19))
  .every(11, x => x.tremolo(0.09).tremolosync(0.12))
  .every(32, x => x.delay(0.15).delaytime(0.13).delayfeedback(0.14))

// Track 2 — lower voice, simplified harmonic range and more subtle
$: note("g3 ~ d4 ~ b3 ~ d4 ~ g4 ~ d4 ~ b3 ~ d4 ~ g3 ~ d3 ~ e3 ~ c3 ~ b2 ~ d3 ~ g3 ~ d3 ~ a2 ~ g3 ~ d3 ~ g2 ~ g3 ~ b3 ~ d4 ~ g3 ~ e4 ~ c4 ~ a3 ~ c4 ~ g3 ~ a3 ~ d4 c4 b3 a3")
  .slow(264/8/4)
  .apply(lowerVoice)
  .pan(sine.range(0.17, 0.66).slow(12))
  .lpf(sine.range(280, 950).slow(17))
  .hpf(60)
  .room(0.13)
  .degradeBy(0.16)
  .every(11, x => x.vowel("o"))
  .every(17, x => x.rev())
  .every(23, x => x.distort(0.13))
  .every(13, x => x.tremolo(0.07).tremolosync(0.13))

// Track 3 — shimmer, more fragile and warmer
$: note("e6 ~!4 b5 ~!7 d6 ~!6 g6 ~!8 b6 ~!6 e7 ~!9")
  .slow(264/24)
  .sound("sine")
  .attack(1.4)
  .release(7.2)
  .decay(3.1)
  .sustain(0.06)
  .gain(0.031)
  .pan(sine.range(0.31, 0.77).slow(8))
  .room(1)
  .lpf(sine.range(290, 840).slow(14))
  .every(7, x => x.vowel("i"))
  .every(18, x => x.rev())
  .every(11, x => x.distort(0.11))
  .every(17, x => x.tremolo(0.18).tremolosync(0.19))
  .every(19, x => x.delay(0.25).delaytime(0.13).delayfeedback(0.13))