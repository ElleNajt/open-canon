// BWV 1087 Canon 9 - Evolving Baroque Dreams

// Baroque style voices with slow modulation
let upperVoice = x => x
  .sound("triangle")
  .gain(0.4)
  .attack(0.02)
  .decay(0.2)
  .sustain(0.25)
  .lpf(sine.range(1800, 3500).slow(16))
  .room(0.25)
  .delay(0.15)
  .delaytime(0.375)
  .delayfeedback(0.3)

let lowerVoice = x => x
  .sound("square")
  .gain(0.35)
  .decay(0.2)
  .sustain(0.25)
  .lpf(1200)
  .room(0.2)

let ghostVoice = x => x
  .sound("sine")
  .gain(0.2)
  .attack(0.1)
  .decay(0.4)
  .sustain(0.1)
  .release(0.8)
  .room(0.5)
  .delay(0.4)
  .delaytime(0.5)
  .delayfeedback(0.5)

setcps(108/60/4)

// Track 1 - Main voice with subtle tremolo
$: note("g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 ~!3 d6 ~ a5 ~ gb5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ gb5 ~ a5 ~ d6 c6 b5 a5 g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 ~!3 d6 ~ a5 ~ gb5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ gb5 ~ a5 ~ d6 c6 b5 a5 g5 ~!7")
  .slow(8)
  .apply(upperVoice)
  .tremolo(0.15)
  .tremolosync(4)
  .pan(0.25)

// Track 2 - Second voice with phaser
$: note("~!2 g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 ~!3 d6 ~ a5 ~ gb5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ gb5 ~ a5 ~ d6 c6 b5 a5 g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 ~!3 d6 ~ a5 ~ gb5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ gb5 ~ a5 ~ d6 c6 b5 a5 g5 ~!5")
  .slow(8)
  .apply(upperVoice)
  .phaser(0.3)
  .phaserdepth(2)
  .pan(0.6)

// Track 3 - Bass with subtle movement
$: note("~!8 g3 ~!7 gb3 ~!7 e3 ~!7 d3 ~!7 b2 ~!7 c3 ~!7 d3 ~!7 g2 ~!7 g3 ~!7 gb3 ~!7 e3 ~!7 d3 ~!7 b2 ~!7 c3 ~!7 d3 ~!7 g2 ~!7")
  .slow(8)
  .apply(lowerVoice)
  .pan(0.5)

// Track 4 - Ghost echoes, sparse and ethereal
$: note("g4 ~ ~ ~ d5 ~ ~ ~ b4 ~ ~ ~ e5 ~ ~ ~ c5 ~ ~ ~ a4 ~ ~ ~ gb4 ~ ~ ~ g4 ~ ~ ~")
  .slow(8)
  .apply(ghostVoice)
  .sometimes(x => x.octave(5))
  .pan(sine.range(0.2, 0.8).slow(12))

// Track 5 - Deep drone on tonic
$: note("g2")
  .sound("sine")
  .gain(0.15)
  .attack(2)
  .sustain(1)
  .release(2)
  .lpf(400)
  .room(0.6)
  .slow(16)
  .pan(0.5)