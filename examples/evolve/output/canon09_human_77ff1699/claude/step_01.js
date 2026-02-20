// BWV 1087 Canon 9 - Evolved

// Baroque style voices with more expression
let upperVoice = x => x
  .sound("triangle")
  .gain(0.4)
  .attack(0.02)
  .decay(0.2)
  .sustain(0.25)
  .release(0.3)
  .lpf(sine.range(1800, 3500).slow(16))
  .room(0.2)
  .delay(0.15)
  .delaytime(0.375)
  .delayfeedback(0.25)

let lowerVoice = x => x
  .sound("square")
  .gain(0.35)
  .decay(0.2)
  .sustain(0.3)
  .release(0.4)
  .lpf(1200)
  .room(0.2)

// Warm bass foundation
let bassVoice = x => x
  .sound("sawtooth")
  .gain(0.3)
  .attack(0.05)
  .decay(0.3)
  .sustain(0.4)
  .release(0.5)
  .lpf(400)
  .room(0.15)

setcps(108/60/4)

// Track 1 - Upper voice with subtle vibrato feel
$: note("g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ fs5 ~ a5 ~ cs5 ~ e5 ~ g5 ~ cs6 ~!3 d6 ~ a5 ~ fs5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ fs5 ~ a5 ~ d6 c6 b5 a5 g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ fs5 ~ a5 ~ cs5 ~ e5 ~ g5 ~ cs6 ~!3 d6 ~ a5 ~ fs5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ fs5 ~ a5 ~ d6 c6 b5 a5 g5 ~!7")
  .slow(8)
  .apply(upperVoice)
  .pan(sine.range(0.25, 0.4).slow(12))
  .detune(sine.range(-3, 3).slow(4))

// Track 2 - Offset canon voice
$: note("~!2 g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ fs5 ~ a5 ~ cs5 ~ e5 ~ g5 ~ cs6 ~!3 d6 ~ a5 ~ fs5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ fs5 ~ a5 ~ d6 c6 b5 a5 g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ fs5 ~ a5 ~ cs5 ~ e5 ~ g5 ~ cs6 ~!3 d6 ~ a5 ~ fs5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ fs5 ~ a5 ~ d6 c6 b5 a5 g5 ~!5")
  .slow(8)
  .apply(upperVoice)
  .pan(sine.range(0.5, 0.65).slow(10))
  .detune(sine.range(-2, 4).slow(5))

// Track 3 - Sustained bass notes
$: note("~!8 g3 ~!7 fs3 ~!7 e3 ~!7 d3 ~!7 b2 ~!7 c3 ~!7 d3 ~!7 g2 ~!7 g3 ~!7 fs3 ~!7 e3 ~!7 d3 ~!7 b2 ~!7 c3 ~!7 d3 ~!7 g2 ~!7")
  .slow(8)
  .apply(bassVoice)
  .pan(0.5)

// Track 4 - Subtle harmonic shimmer (octave up, very soft)
$: note("g6 ~ b6 ~ d7 ~ g7 ~ d7 ~ b6 ~ g6 ~ d7 ~ d6 ~ fs6 ~ a6 ~ cs6 ~ e6 ~ g6 ~ cs7 ~!3 d7 ~ a6 ~ fs6 ~ d6 ~ g6 ~ b6 ~ d7 ~ g6 ~!8")
  .slow(8)
  .sound("sine")
  .gain(0.12)
  .attack(0.1)
  .release(0.5)
  .lpf(2000)
  .room(0.35)
  .pan(0.5)
  .delay(0.3)
  .delaytime(0.5)
  .delayfeedback(0.4)

// Track 5 - Gentle pedal point pulse
$: note("g2 ~!3")
  .slow(2)
  .sound("triangle")
  .gain(sine.range(0.08, 0.18).slow(8))
  .attack(0.2)
  .decay(0.4)
  .sustain(0.3)
  .release(0.8)
  .lpf(300)
  .room(0.25)
  .pan(0.5)