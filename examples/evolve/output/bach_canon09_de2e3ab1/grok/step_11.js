// BWV 1087 Canon 9

// Baroque style voices
let upperVoice1 = x => x
  .sound("supersaw")
  .gain(0.42)
  .attack(0.02)
  .lpf(sine.range(900,2900).slow(8))
  .lpq(2)
  .room(0.3)

let upperVoice2 = x => x
  .sound("triangle")
  .gain(0.38)
  .attack(0.025)
  .lpf(1400)
  .lpq(2)
  .room(0.25)

let lowerVoice = x => x
  .sound("sawtooth")
  .gain(0.48)
  .hpf(sine.range(80,160).slow(12))
  .lpf(850)
  .lpq(3)
  .room(0.08)

setcps(120/60/4)

// Track 1
$: note("g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 ~!3 d6 ~ a5 ~ gb5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ gb5 ~ a5 ~ d6 c6 b5 a5 g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 ~!3 d6 ~ a5 ~ gb5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ gb5 ~ a5 ~ d6 c6 b5 a5 g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 ~!3 d6 ~ a5 ~ gb5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ gb5 ~ a5 ~ d6 c6 b5 a5 g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 ~!3 d6 ~ a5 ~ gb5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ gb5 ~ a5 ~ d6 c6 b5 a5 g5 ~!7")
  .slow(8)
  .apply(upperVoice1)
  .pan(0.25)

// Track 2
$: note("~!2 g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 ~!3 d6 ~ a5 ~ gb5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ gb5 ~ a5 ~ d6 c6 b5 a5 g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 ~!3 d6 ~ a5 ~ gb5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ gb5 ~ a5 ~ d6 c6 b5 a5 g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 ~!3 d6 ~ a5 ~ gb5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ gb5 ~ a5 ~ d6 c6 b5 a5 g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 ~!3 d6 ~ a5 ~ gb5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ gb5 ~ a5 ~ d6 c6 b5 a5 g5 ~!5")
  .slow(8)
  .apply(upperVoice2)
  .detune(10)
  .pan(0.45)

// Track 3
$: note("~!8 g4 ~!7 gb4 ~!7 e4 ~!7 d4 ~!7 b3 ~!7 c4 ~!7 d4 ~!7 g3 ~!7 g4 ~!7 gb4 ~!7 e4 ~!7 d4 ~!7 b3 ~!7 c4 ~!7 d4 ~!7 g3 ~!7 g4 ~!7 gb4 ~!7 e4 ~!7 d4 ~!7 b3 ~!7 c4 ~!7 d4 ~!7 g3 ~!7 g4 ~!7 gb4 ~!7 e4 ~!7 d4 ~!7 b3 ~!7 c4 ~!7 d4 ~!7 g3 ~!7")
  .slow(8)
  .apply(lowerVoice)
  .pan(0.75)