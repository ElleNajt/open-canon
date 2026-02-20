// BWV 1087 Canon 9 - Twilight Cathedral

// Ethereal upper voice with breath-like swells
let upperVoice = x => x
  .sound("triangle")
  .gain(sine.range(0.25, 0.45).slow(8))
  .attack(0.08)
  .decay(0.3)
  .sustain(0.2)
  .release(0.6)
  .lpf(sine.range(1200, 4000).slow(12))
  .lpq(2)
  .room(0.35)
  .delay(0.2)
  .delaytime(0.333)
  .delayfeedback(0.35)

// Hollow, distant canon voice
let lowerVoice = x => x
  .sound("sine")
  .gain(0.3)
  .attack(0.1)
  .decay(0.25)
  .sustain(0.35)
  .release(0.5)
  .lpf(1800)
  .room(0.4)
  .delay(0.25)
  .delaytime(0.5)
  .delayfeedback(0.3)

// Deep resonant bass
let bassVoice = x => x
  .sound("sawtooth")
  .gain(0.25)
  .attack(0.1)
  .decay(0.4)
  .sustain(0.5)
  .release(0.8)
  .lpf(sine.range(250, 450).slow(16))
  .room(0.3)

setcps(92/60/4)

// Track 1 - Breathing upper melody
$: note("g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ fs5 ~ a5 ~ cs5 ~ e5 ~ g5 ~ cs6 ~!3 d6 ~ a5 ~ fs5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ fs5 ~ a5 ~ d6 c6 b5 a5 g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ fs5 ~ a5 ~ cs5 ~ e5 ~ g5 ~ cs6 ~!3 d6 ~ a5 ~ fs5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ fs5 ~ a5 ~ d6 c6 b5 a5 g5 ~!7")
  .slow(8)
  .apply(upperVoice)
  .pan(sine.range(0.2, 0.35).slow(10))
  .detune(sine.range(-5, 5).slow(6))

// Track 2 - Ghostly canon follower
$: note("~!2 g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ fs5 ~ a5 ~ cs5 ~ e5 ~ g5 ~ cs6 ~!3 d6 ~ a5 ~ fs5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ fs5 ~ a5 ~ d6 c6 b5 a5 g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ fs5 ~ a5 ~ cs5 ~ e5 ~ g5 ~ cs6 ~!3 d6 ~ a5 ~ fs5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ fs5 ~ a5 ~ d6 c6 b5 a5 g5 ~!5")
  .slow(8)
  .apply(lowerVoice)
  .pan(sine.range(0.6, 0.8).slow(14))
  .octave(4)

// Track 3 - Organ-like sustained bass
$: note("~!8 g3 ~!7 fs3 ~!7 e3 ~!7 d3 ~!7 b2 ~!7 c3 ~!7 d3 ~!7 g2 ~!7 g3 ~!7 fs3 ~!7 e3 ~!7 d3 ~!7 b2 ~!7 c3 ~!7 d3 ~!7 g2 ~!7")
  .slow(8)
  .apply(bassVoice)
  .pan(0.5)

// Track 4 - Bell-like overtones that emerge and fade
$: note("g6 ~ ~ ~ d7 ~ ~ ~ b6 ~ ~ ~ g7 ~ ~ ~")
  .slow(4)
  .sound("sine")
  .gain(perlin.range(0.06, 0.18).slow(8))
  .attack(0.15)
  .decay(0.8)
  .sustain(0.1)
  .release(1.2)
  .lpf(3500)
  .room(0.5)
  .pan(rand.range(0.3, 0.7))
  .delay(0.4)
  .delaytime(0.667)
  .delayfeedback(0.45)

// Track 5 - Deep drone with subtle pulsing
$: note("g2 d3")
  .slow(4)
  .sound("triangle")
  .gain(sine.range(0.1, 0.2).slow(12))
  .attack(0.3)
  .decay(0.5)
  .sustain(0.6)
  .release(1.2)
  .lpf(280)
  .room(0.4)
  .pan(0.5)

// Track 6 - Distant choral pad
$: note("<g4 b4 d5> <d4 fs4 a4> <e4 g4 b4> <d4 g4 b4>")
  .slow(8)
  .sound("sine")
  .gain(0.12)
  .attack(0.5)
  .decay(0.3)
  .sustain(0.7)
  .release(1.5)
  .lpf(1200)
  .room(0.5)
  .pan(sine.range(0.35, 0.65).slow(16))
  .delay(0.3)
  .delaytime(0.75)
  .delayfeedback(0.35)