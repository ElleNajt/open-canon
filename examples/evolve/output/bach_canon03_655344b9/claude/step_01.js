// BWV 1087 Canon 3 - Rhythmic Diminution Variation

// Staccato harpsichord-like voice
let upperVoice = x => x
  .sound("pulse")
  .gain(0.4)
  .attack(0.005)
  .decay(0.08)
  .sustain(0.05)
  .lpf(3500)
  .room(0.2)

// Warm pad sustained voice
let padVoice = x => x
  .sound("sawtooth")
  .gain(0.25)
  .attack(0.3)
  .decay(0.4)
  .sustain(0.6)
  .release(0.5)
  .lpf(1200)
  .room(0.4)

setcps(140/60/4)

// Track 1 - Original melody now in diminution (twice as fast, ornamented)
$: note("<[d5 e5] [e5 d5]> <[gb5 g5] [g5 gb5]> <[b5 a5] [a5 b5]> <[g5 d6] [d6 g5]>")
  .slow(4)
  .apply(upperVoice)
  .pan(0.25)

// Track 2 - Counter melody inverted and syncopated
$: note("g5 ~ gb5 ~ e5 ~ d5 ~ b4 ~ c5 ~ d5 ~ g4 ~")
  .slow(8)
  .late(0.125)
  .apply(upperVoice)
  .lpf(2000)
  .pan(0.75)

// Track 3 - New sustained drone/pedal tones
$: note("<g3 d3> <b3 a3>")
  .slow(8)
  .apply(padVoice)
  .pan(0.5)

// Track 4 - Pizzicato bass walking line
$: note("g2 d3 b2 c3 a2 d3 g2 e3")
  .slow(8)
  .sound("triangle")
  .gain(0.35)
  .attack(0.01)
  .decay(0.2)
  .sustain(0.1)
  .pan(0.5)