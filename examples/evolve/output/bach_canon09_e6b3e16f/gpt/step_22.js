// BWV 1087 Canon 9

// Baroque style voices
let upperVoice = x => x
  .sound("triangle")
  .gain(0.47)
  .attack(0.03)
  .decay(0.13)
  .sustain(0.23)
  .lpf(2200)
  .room(0.22)

let lowerVoice = x => x
  .sound("square")
  .gain(0.42)
  .decay(0.19)
  .sustain(0.22)
  .lpf(880)
  .room(0.19)

setcps(120/60/4)

// Track 1 — focus upper melody, evolving filter & motion
$: note("g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 ~!3 d6 ~ a5 ~ gb5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ gb5 ~ a5 ~ d6 c6 b5 a5 g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 ~!3 d6 ~ a5 ~ gb5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ gb5 ~ a5 ~ d6 c6 b5 a5 g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 ~!3 d6 ~ a5 ~ gb5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ gb5 ~ a5 ~ d6 c6 b5 a5 g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 ~!3 d6 ~ a5 ~ gb5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ gb5 ~ a5 ~ d6 c6 b5 a5 g5 ~!7")
  .slow(264/8/4)
  .apply(upperVoice)
  .pan(rand.range(0.05, 0.55).slow(24))
  .lpf(sine.range(1100, 4100).slow(18))
  .hpf(sine.range(210, 690).slow(46))
  .room(0.32)
  .degradeBy(0.15)
  .every(27, x => x.vowel("<o i u>"))
  .every(36, x => x.rev())
  .every(56, x => x.distort(0.25))
  .every(64, x => x.delay(0.17).delaytime(0.19).delayfeedback(0.22))
  .every(72, x => x.pan(0.80))
  .every(33, x => x.tremolo(0.19).tremolosync(0.11))

// Track 4 — shimmer, bell timbre, now more spatial/moving
$: note("e6 ~!4 b5 ~!4 d6 ~!4 g6 ~!4 b6 ~!4 e7 ~!4")
  .slow(264/36)
  .sound("sine")
  .attack(1.2)
  .release(6.8)
  .decay(2.7)
  .sustain(0.045)
  .gain(0.041)
  .pan(sine.range(0.22, 0.7).slow(19))
  .room(0.79)
  .lpf(sine.range(740, 1270).slow(21))
  .every(14, x => x.vowel("i"))
  .every(19, x => x.rev())
  .every(38, x => x.distort(0.21))
  .every(14, x => x.tremolo(0.19).tremolosync(0.14))
  .every(42, x => x.hpf(355))