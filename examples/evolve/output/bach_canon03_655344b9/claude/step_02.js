// BWV 1087 Canon 3 - Retrograde Mirror Canon

// Glassy bell-like voice
let bellVoice = x => x
  .sound("sine")
  .gain(0.35)
  .attack(0.002)
  .decay(0.4)
  .sustain(0.1)
  .release(0.6)
  .fmi(2)
  .fmh(3)
  .room(0.5)

// Dark organ voice
let organVoice = x => x
  .sound("sawtooth")
  .gain(0.2)
  .attack(0.1)
  .decay(0.3)
  .sustain(0.7)
  .release(0.8)
  .lpf(800)
  .room(0.6)

setcps(100/60/4)

// Track 1 - Original theme fragmented into bell tones
$: note("[g5 ~ b5] [d6 ~ g5] [a5 ~ gb5] [e5 ~ d5]")
  .slow(4)
  .apply(bellVoice)
  .pan(sine.range(0.2, 0.8).slow(8))

// Track 2 - Retrograde of theme in lower register
$: note("[d4 e4 gb4] [g4 a4 b4] [g4 d5 b4] [a4 gb4 e4]")
  .slow(4)
  .rev()
  .apply(bellVoice)
  .fmi(4)
  .pan(sine.range(0.8, 0.2).slow(8))

// Track 3 - Chorale-style sustained harmonies (new progression)
$: note("<[g3,b3,d4] [e3,g3,b3]> <[c3,e3,a3] [d3,gb3,a3]>")
  .slow(8)
  .apply(organVoice)
  .pan(0.5)

// Track 4 - Unexpected: pitched percussion ostinato
$: note("g2 ~ g3 g2 d3 ~ g2 a2")
  .slow(2)
  .sound("triangle")
  .gain(0.3)
  .attack(0.001)
  .decay(0.15)
  .sustain(0.05)
  .crush(8)
  .delay(0.3)
  .delaytime(0.375)
  .delayfeedback(0.4)
  .pan(0.5)

// Track 5 - New: spectral shimmer layer
$: note("<g6 d6 b5 a5>")
  .slow(16)
  .sound("sine")
  .gain(0.15)
  .attack(0.5)
  .decay(1)
  .sustain(0.3)
  .tremolo(0.6)
  .tremolosync(3)
  .room(0.7)
  .pan(0.5)