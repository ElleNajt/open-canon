setcps(120/60/4)

// Baroque style voices
let upperVoice = x => x
  .sound("triangle")
  .gain(0.45)
  .attack(0.02)
  .decay(0.15)
  .sustain(0.2)
  .lpf(sine.range(1200, 2600).slow(32))
  .room(0.4)
  .size(0.7)

let midVoice = x => x
  .sound("sine")
  .gain(0.36)
  .attack(0.04)
  .decay(0.2)
  .sustain(0.25)
  .lpf(1600)
  .room(0.28)
  .size(0.55)

let lowerVoice = x => x
  .sound("square")
  .gain(0.38)
  .decay(0.2)
  .sustain(0.18)
  .lpf(800)
  .lpq(4)
  .room(0.22)
  .size(0.6)

let innerVoice = x => x
  .sound("sine")
  .gain(0.28)
  .attack(0.06)
  .decay(0.3)
  .sustain(0.28)
  .release(0.25)
  .lpf(1200)
  .room(0.32)
  .size(0.65)

// Track 1 - upper voice, ornamental line with slow trem shimmer
$: note("g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 ~!3 d6 ~ a5 ~ gb5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ gb5 ~ a5 ~ d6 c6 b5 a5 g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 ~!3 d6 ~ a5 ~ gb5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ gb5 ~ a5 ~ d6 c6 b5 a5 g5 ~!7")
  .slow(132/8/4)
  .apply(upperVoice)
  .pan(0.28)
  .delay(0.14)
  .delaytime(0.375)
  .delayfeedback(0.18)
  .tremolo(0.18)
  .tremolosync(6)
  .tremoloshape("sine")

// Track 2 - canonic entry, mid voice a fifth lower, offset
$: note("~!2 g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 ~!3 d6 ~ a5 ~ gb5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ gb5 ~ a5 ~ d6 c6 b5 a5 g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 ~!3 d6 ~ a5 ~ gb5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ gb5 ~ a5 ~ d6 c6 b5 a5 g5 ~!5")
  .slow(132/8/4)
  .apply(midVoice)
  .pan(0.62)
  .transpose(-7)
  .lpf(sine.range(900, 2000).slow(40))
  .every(5, x => x.vowel("e i o"))

// Track 3 - inner voice with FM shimmer and slow phaser
$: note("<d4 c4 b3 a3> ~ <b4 a4 g4 gb4> ~ <g4 gb4 e4 d4> ~ <e4 d4 c4 b3>")
  .slow(10)
  .apply(innerVoice)
  .pan(0.45)
  .fmi(sine.range(0.3, 2.2).slow(20))
  .fmh(3)
  .fmdecay(0.4)
  .phaser(0.4)
  .phaserdepth(0.45)
  .phasercenter(700)

// Track 4 - bass, with fifth doubling and walking pulse variation
$: note("g2 ~!7 gb2 ~!7 e2 ~!7 d2 ~!7 b1 ~!7 c2 ~!7 d2 ~!7 g2 ~!7 g2 ~!7 gb2 ~!7 e2 ~!7 d2 ~!7 b1 ~!7 c2 ~!7 d2 ~!7 g2 ~!7")
  .slow(132/8/4)
  .apply(lowerVoice)
  .pan(0.68)
  .off(0.5, x => x.transpose(7).gain(0.13).lpf(500).pan(0.5))
  .off(1, x => x.transpose(12).gain(0.08).lpf(400).pan(0.55).sound("sine"))
  .room(0.28)
  .size(0.65)