setcps(120/60/4)

// Baroque style voices
let upperVoice = x => x
  .sound("triangle")
  .gain(0.45)
  .attack(0.02)
  .decay(0.15)
  .sustain(0.2)
  .lpf(2200)
  .room(0.3)
  .size(0.65)

let midVoice = x => x
  .sound("sine")
  .gain(0.38)
  .attack(0.04)
  .decay(0.2)
  .sustain(0.25)
  .lpf(1800)
  .room(0.22)
  .size(0.5)

let lowerVoice = x => x
  .sound("square")
  .gain(0.4)
  .decay(0.18)
  .sustain(0.2)
  .lpf(900)
  .lpq(3)
  .room(0.2)
  .size(0.55)

let innerVoice = x => x
  .sound("sine")
  .gain(0.3)
  .attack(0.05)
  .decay(0.25)
  .sustain(0.3)
  .release(0.2)
  .lpf(1400)
  .room(0.28)
  .size(0.6)

// Track 1 - upper voice, slight pan left
$: note("g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 ~!3 d6 ~ a5 ~ gb5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ gb5 ~ a5 ~ d6 c6 b5 a5 g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 ~!3 d6 ~ a5 ~ gb5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ gb5 ~ a5 ~ d6 c6 b5 a5 g5 ~!7")
  .slow(132/8/4)
  .apply(upperVoice)
  .pan(0.28)
  .delay(0.1)
  .delaytime(0.22)
  .delayfeedback(0.18)
  .juxBy(0.3, x => x.transpose(7).gain(0.18))

// Track 2 - canonic entry, mid voice a fifth lower, offset
$: note("~!2 g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 ~!3 d6 ~ a5 ~ gb5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ gb5 ~ a5 ~ d6 c6 b5 a5 g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 ~!3 d6 ~ a5 ~ gb5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ gb5 ~ a5 ~ d6 c6 b5 a5 g5 ~!5")
  .slow(132/8/4)
  .apply(midVoice)
  .pan(0.55)
  .transpose(-7)
  .every(3, x => x.vowel("e i"))

// Track 3 - inner voice, gentle harmonic color
$: note("<d4 c4 b3 a3> ~ <b4 a4 g4 gb4> ~ <g4 gb4 e4 d4> ~ <e4 d4 c4 b3>")
  .slow(8)
  .apply(innerVoice)
  .pan(0.45)
  .phaser(0.6)
  .phaserdepth(0.4)
  .phasercenter(900)

// Track 4 - bass voice, grounded harmonic rhythm
$: note("g2 ~!7 gb2 ~!7 e2 ~!7 d2 ~!7 b1 ~!7 c2 ~!7 d2 ~!7 g2 ~!7 g2 ~!7 gb2 ~!7 e2 ~!7 d2 ~!7 b1 ~!7 c2 ~!7 d2 ~!7 g2 ~!7")
  .slow(132/8/4)
  .apply(lowerVoice)
  .pan(0.72)
  .sometimes(x => x.shape(0.12))
  .room(0.25)
  .size(0.6)