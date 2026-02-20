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

// Track 1 — upper melody, evolving articulation and tone
$: note("g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 ~ d6 ~ a5 ~ gb5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ gb5 ~ a5 ~ d6 c6 b5 a5")
  .slow(264/8/4)
  .apply(upperVoice)
  .pan(rand.range(0.11, 0.53).slow(23))
  .lpf(sine.range(900, 4300).slow(9))
  .hpf(sine.range(270, 1040).slow(14))
  .room(0.34)
  .degradeBy(0.07)
  .every(13, x => x.vowel("<i u a>"))
  .every(17, x => x.rev())
  .every(21, x => x.distort(0.27))
  .every(6, x => x.tremolo(0.09).tremolosync(0.21))
  .every(19, x => x.delay(0.13).delaytime(0.14).delayfeedback(0.13))
  .every(8, x => x.lpf(1600))

// Track 2 — lower voice, gentle and slightly more transparent
$: note("g3 ~ d4 ~ b3 ~ d4 ~ g4 ~ d4 ~ b3 ~ d4 ~ g3 ~ d3 ~ e3 ~ c3 ~ b2 ~ d3 ~ g3 ~ d3 ~ a2 ~ g3 ~ d3 ~ g2 ~ g3 ~ b3 ~ d4 ~ g3 ~ e4 ~ c4 ~ a3 ~ c4 ~ g3 ~ a3 ~ d4 c4 b3 a3")
  .slow(264/8/4)
  .apply(lowerVoice)
  .pan(sine.range(0.17, 0.66).slow(16))
  .lpf(sine.range(500, 1200).slow(13))
  .hpf(80)
  .room(0.17)
  .gain(0.29)
  .degradeBy(0.09)
  .every(11, x => x.vowel("o"))
  .every(19, x => x.rev())
  .every(15, x => x.distort(0.11))
  .every(8, x => x.tremolo(0.08).tremolosync(0.13))

// Track 3 — shimmer now with slower movement, less density, more space
$: note("e6 ~ b5 ~ d6 ~ g6 ~ b6 ~ e7")
  .slow(264/19)
  .sound("sine")
  .attack(2.3)
  .release(8.8)
  .decay(4.2)
  .sustain(0.11)
  .gain(0.022)
  .pan(sine.range(0.29, 0.74).slow(12))
  .room(1)
  .lpf(sine.range(320, 1000).slow(17))
  .every(11, x => x.vowel("i"))
  .every(15, x => x.rev())
  .every(10, x => x.tremolo(0.22).tremolosync(0.18))
  .every(18, x => x.delay(0.21).delaytime(0.11).delayfeedback(0.13))