setcps(120/60/4)

// Baroque style voices
let upperVoice = x => x
  .sound("triangle")
  .gain(0.45)
  .attack(0.02)
  .decay(0.15)
  .sustain(0.2)
  .lpf(2200)
  .room(0.25)
  .size(0.6)

let midVoice = x => x
  .sound("sine")
  .gain(0.38)
  .attack(0.04)
  .decay(0.2)
  .sustain(0.25)
  .lpf(1800)
  .room(0.2)
  .size(0.5)

let lowerVoice = x => x
  .sound("square")
  .gain(0.42)
  .decay(0.18)
  .sustain(0.2)
  .lpf(900)
  .lpq(3)
  .room(0.2)
  .size(0.55)

// Track 1 - upper voice, slight pan left
$: note("g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 ~!3 d6 ~ a5 ~ gb5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ gb5 ~ a5 ~ d6 c6 b5 a5 g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 ~!3 d6 ~ a5 ~ gb5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ gb5 ~ a5 ~ d6 c6 b5 a5 g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 ~!3 d6 ~ a5 ~ gb5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ gb5 ~ a5 ~ d6 c6 b5 a5 g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 ~!3 d6 ~ a5 ~ gb5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ gb5 ~ a5 ~ d6 c6 b5 a5 g5 ~!7")
  .slow(264/8/4)
  .apply(upperVoice)
  .pan(0.28)
  .delay(0.08)
  .delaytime(0.18)
  .delayfeedback(0.2)

// Track 2 - canonic entry offset, mid voice
$: note("~!2 g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 ~!3 d6 ~ a5 ~ gb5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ gb5 ~ a5 ~ d6 c6 b5 a5 g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 ~!3 d6 ~ a5 ~ gb5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ gb5 ~ a5 ~ d6 c6 b5 a5 g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 ~!3 d6 ~ a5 ~ gb5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ gb5 ~ a5 ~ d6 c6 b5 a5 g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 ~!3 d6 ~ a5 ~ gb5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ gb5 ~ a5 ~ d6 c6 b5 a5 g5 ~!5")
  .slow(264/8/4)
  .apply(midVoice)
  .pan(0.55)
  .transpose(-7)

// Track 3 - bass voice, slow harmonic rhythm
$: note("~!8 g3 ~!7 gb3 ~!7 e3 ~!7 d3 ~!7 b2 ~!7 c3 ~!7 d3 ~!7 g2 ~!7 g3 ~!7 gb3 ~!7 e3 ~!7 d3 ~!7 b2 ~!7 c3 ~!7 d3 ~!7 g2 ~!7 g3 ~!7 gb3 ~!7 e3 ~!7 d3 ~!7 b2 ~!7 c3 ~!7 d3 ~!7 g2 ~!7 g3 ~!7 gb3 ~!7 e3 ~!7 d3 ~!7 b2 ~!7 c3 ~!7 d3 ~!7 g2 ~!7")
  .slow(264/8/4)
  .apply(lowerVoice)
  .pan(0.72)
  .phaser(0.4)
  .phaserdepth(0.3)