// BWV 1087 Canon 3 - Variation: Descent into Shadow

// Morphed bell voice - now with darker FM character
let bellVoice = x => x
  .sound("sine")
  .gain(0.3)
  .attack(0.01)
  .decay(0.6)
  .sustain(0.05)
  .release(1.2)
  .fmi(5)
  .fmh(1.5)
  .fmdecay(0.8)
  .room(0.6)

// Breathy pad voice replacing organ
let padVoice = x => x
  .sound("sawtooth")
  .gain(0.18)
  .attack(0.3)
  .decay(0.5)
  .sustain(0.6)
  .release(1.5)
  .lpf(600)
  .lpq(3)
  .room(0.7)

setcps(80/60/4)

// Track 1 - Theme transformed: descending minor, questioning
$: note("[g5 ~ eb5] [d5 ~ c5] [b4 ~ g4] [ab4 ~ g4]")
  .slow(4)
  .apply(bellVoice)
  .pan(sine.range(0.3, 0.7).slow(6))

// Track 2 - Retrograde now in minor mode, stretched
$: note("[g3 ab3 b3] [c4 d4 eb4] [g4 d4 b3] [c4 ab3 g3]")
  .slow(6)
  .apply(bellVoice)
  .fmi(3)
  .octave(4)
  .pan(sine.range(0.7, 0.3).slow(6))

// Track 3 - New harmony: minor with suspended tensions
$: note("<[g2,d3,bb3] [eb2,g3,c4]> <[ab2,c3,f3] [d2,g3,b3]>")
  .slow(8)
  .apply(padVoice)
  .pan(0.5)

// Track 4 - Sparse, ghostly pulse replacing percussion
$: note("g1 ~ ~ ~ d2 ~ ~ g1")
  .slow(4)
  .sound("sine")
  .gain(0.25)
  .attack(0.05)
  .decay(0.8)
  .sustain(0.1)
  .lpf(200)
  .room(0.8)
  .pan(0.5)

// Track 5 - NEW: weeping melody in high register
$: note("~ eb6 d6 ~ c6 ~ b5 ~")
  .slow(8)
  .sound("triangle")
  .gain(0.12)
  .attack(0.1)
  .decay(0.4)
  .sustain(0.2)
  .release(1.5)
  .vibmod(0.15)
  .room(0.6)
  .delay(0.4)
  .delaytime(0.5)
  .delayfeedback(0.5)
  .pan(0.6)

// Track 6 - NEW: low rumble texture
$: note("<g1 d1>")
  .slow(16)
  .sound("sawtooth")
  .gain(0.1)
  .attack(1)
  .decay(2)
  .sustain(0.4)
  .lpf(sine.range(80, 200).slow(16))
  .pan(0.5)