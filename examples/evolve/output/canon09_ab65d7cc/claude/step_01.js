// BWV 1087 Canon 9 - Variation: Inverted Mirror with Haunted Bass

// Ethereal upper voices - more ghostly
let upperVoice = x => x
  .sound("sine")
  .gain(0.35)
  .attack(0.08)
  .decay(0.3)
  .sustain(0.4)
  .release(0.5)
  .lpf(1800)
  .room(0.4)
  .delay(0.2)
  .delaytime(0.375)
  .delayfeedback(0.3)

// Darker, pulsing bass
let darkBass = x => x
  .sound("sawtooth")
  .gain(0.4)
  .attack(0.01)
  .decay(0.4)
  .sustain(0.3)
  .lpf(sine.range(400, 1200).slow(8))
  .lpq(3)
  .room(0.2)

setcps(80/60/4)

// Track 1 - Original melody, now fragile and questioning
$: note("g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ fs5 ~ a5 ~ cs5 ~ e5 ~ g5 ~ cs6 ~!3 d6 ~ a5 ~ fs5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ fs5 ~ a5 ~ d6 c6 b5 a5 g5 ~!7")
  .slow(8)
  .apply(upperVoice)
  .pan(0.25)
  .sometimes(x => x.add(12))

// Track 2 - Inverted melody (mirror image)
$: note("g5 ~ d5 ~ b4 ~ g4 ~ b4 ~ d5 ~ g5 ~ b4 ~ b5 ~ fs5 ~ d5 ~ a5 ~ fs5 ~ d5 ~ a4 ~!3 b4 ~ d5 ~ fs5 ~ b5 ~ g5 ~ d5 ~ b4 ~ g5 ~ c5 ~ e5 ~ fs5 ~ e5 ~ a5 ~ fs5 ~ b4 c5 d5 e5 g5 ~!7")
  .slow(8)
  .late(0.5)
  .apply(upperVoice)
  .pan(0.75)
  .gain(0.3)

// Track 3 - Transformed bass: restless, syncopated
$: note("g2 ~ d3 g2 ~ b2 ~ d3 ~ fs2 ~ a2 fs2 ~ ~ e2 ~ g2 e2 ~ d2 ~ ~ b1 d2 ~ c2 ~ e2 c2 ~ d2 ~ fs2 ~ g2 ~!3")
  .slow(8)
  .apply(darkBass)
  .pan(0.5)
  .euclid(5, 8)

// NEW: Spectral bell layer - tolling the hours
$: note("<g6 d6 b5 g5>")
  .slow(4)
  .sound("triangle")
  .gain(0.2)
  .attack(0.001)
  .decay(1.2)
  .sustain(0)
  .lpf(3000)
  .room(0.6)
  .pan(rand)
  .delay(0.4)
  .delaytime(0.25)
  .delayfeedback(0.5)