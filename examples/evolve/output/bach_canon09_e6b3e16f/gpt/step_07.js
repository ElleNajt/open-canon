// BWV 1087 Canon 9

// Baroque style voices
let upperVoice = x => x
  .sound("triangle")
  .gain(0.45)
  .attack(0.02)
  .decay(0.15)
  .sustain(0.2)
  .lpf(2100)
  .room(0.18)

let lowerVoice = x => x
  .sound("square")
  .gain(0.44)
  .decay(0.15)
  .sustain(0.19)
  .lpf(950)
  .room(0.18)

setcps(120/60/4)

// Track 1
$: note("g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 ~!3 d6 ~ a5 ~ gb5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ gb5 ~ a5 ~ d6 c6 b5 a5 g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 ~!3 d6 ~ a5 ~ gb5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ gb5 ~ a5 ~ d6 c6 b5 a5 g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 ~!3 d6 ~ a5 ~ gb5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ gb5 ~ a5 ~ d6 c6 b5 a5 g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 ~!3 d6 ~ a5 ~ gb5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ gb5 ~ a5 ~ d6 c6 b5 a5 g5 ~!7")
  .slow(264/8/4)
  .apply(upperVoice)
  .pan(0.18)
  .lpf(sine.range(1100, 2700).slow(12))
  .room(0.23)
  .every(16, x => x.hpf(360))
  .every(32, x => x.rev())
  .degradeBy(0.09)
  .every(48, x => x.distort(0.14))
  .every(64, x => x.delay(0.08).delaytime(0.10).delayfeedback(0.11))
  .every(24, x => x.vowel("e"))

// Track 2
$: note("~!2 g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 ~!3 d6 ~ a5 ~ gb5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ gb5 ~ a5 ~ d6 c6 b5 a5 g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 ~!3 d6 ~ a5 ~ gb5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ gb5 ~ a5 ~ d6 c6 b5 a5 g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 ~!3 d6 ~ a5 ~ gb5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ gb5 ~ a5 ~ d6 c6 b5 a5 g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 ~!3 d6 ~ a5 ~ gb5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ gb5 ~ a5 ~ d6 c6 b5 a5 g5 ~!5")
  .slow(264/8/4)
  .apply(upperVoice)
  .pan(0.7)
  .delay(0.15)
  .delaytime(0.24)
  .delayfeedback(0.17)
  .lpf(sine.range(800, 1600).slow(14))
  .every(24, x => x.rev())
  .every(16, x => x.distort(0.17))
  .degradeBy(0.07)
  .every(32, x => x.pan(0.3))
  .every(48, x => x.lpf(650))
  .every(20, x => x.vowel("a"))

// Track 3
$: note("g3 ~!7 g4 ~!7 gb4 ~!7 e4 ~!7 d4 ~!7 b3 ~!7 c4 ~!7 d4 ~!7 g3 ~!7 g4 ~!7 gb4 ~!7 e4 ~!7 d4 ~!7 b3 ~!7 c4 ~!7 d4 ~!7 g3 ~!7 g4 ~!7 gb4 ~!7 e4 ~!7 d4 ~!7 b3 ~!7 c4 ~!7 d4 ~!7 g3 ~!7 g4 ~!7 gb4 ~!7 e4 ~!7 d4 ~!7 b3 ~!7 c4 ~!7 d4 ~!7")
  .slow(264/8/4)
  .apply(
    x => x
      .sound("square")
      .gain(0.36)
      .attack(0.03)
      .decay(0.15)
      .sustain(0.16)
      .lpf(600)
      .room(0.19)
  )
  .pan(0.5)
  .room(0.22)
  .degradeBy(0.13)
  .every(16, x => x.rev())
  .lpf(sine.range(400, 700).slow(15))
  .every(20, x => x.vowel("i"))
  .every(40, x => x.distort(0.18))

// Track 4 — Remove, and replace Track 3 with a new lowerVoice canon style bass

$: note("g2 ~!7 g3 ~!7 gb3 ~!7 e3 ~!7 d3 ~!7 b2 ~!7 c3 ~!7 d3 ~!7 g2 ~!7 g3 ~!7 gb3 ~!7 e3 ~!7 d3 ~!7 b2 ~!7 c3 ~!7 d3 ~!7 g2 ~!7 g3 ~!7 gb3 ~!7 e3 ~!7 d3 ~!7 b2 ~!7 c3 ~!7 d3 ~!7 g2 ~!7 g3 ~!7 gb3 ~!7 e3 ~!7 d3 ~!7 b2 ~!7 c3 ~!7 d3 ~!7")
  .slow(264/8/4)
  .apply(lowerVoice)
  .pan(0.29)
  .room(0.23)
  .degradeBy(0.11)
  .every(28, x => x.distort(0.19))
  .every(36, x => x.rev())