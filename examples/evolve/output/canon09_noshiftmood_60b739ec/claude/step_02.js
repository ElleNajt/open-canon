// BWV 1087 Canon 9 - Fragmented Memories

// Voices becoming ghostly, dissolving
let upperVoice = x => x
  .sound("sine")
  .gain(0.35)
  .attack(0.08)
  .decay(0.3)
  .sustain(0.1)
  .release(0.5)
  .lpf(1800)
  .room(0.4)
  .delay(0.3)
  .delaytime(0.375)
  .delayfeedback(0.4)

let glassVoice = x => x
  .sound("triangle")
  .gain(0.25)
  .attack(0.01)
  .decay(0.1)
  .sustain(0.05)
  .lpf(4000)
  .room(0.5)

let pulseVoice = x => x
  .sound("pulse")
  .gain(0.3)
  .attack(0.001)
  .decay(0.2)
  .sustain(0.3)
  .lpf(sine.range(600, 1400).slow(8))
  .room(0.2)

setcps(80/60/4)

// Track 1 - Original melody, but fragmented and questioning
$: note("g5 ~ ~ ~ d6 ~ ~ ~ d6 ~ ~ ~ g5 ~ ~ ~ d5 ~ ~ ~ a5 ~ ~ ~ e5 ~ ~ ~ db6 ~ ~ ~ d6 ~ ~ ~ d5 ~ ~ ~ d6 ~ ~ ~ e6 ~ ~ ~ c6 ~ ~ ~ d6 ~ ~ ~")
  .degradeBy(0.15)
  .slow(16)
  .apply(upperVoice)
  .pan(0.25)

// Track 2 - Inverted counterpoint, a mirror in a dark room
$: note("g4 ~ b4 ~ d5 ~ g4 ~ d5 ~ b4 ~ g4 ~ d5 ~ d4 ~ gb4 ~ a4 ~ db4 ~ e4 ~ g4 ~ db5 ~ d5 ~ a4 ~ gb4 ~ d4 ~ g4 ~ b4 ~ d5 ~ g4 ~ e5 ~ c5 ~ a4 ~ c5 ~ gb4 ~ a4 ~ d5 ~")
  .slow(16)
  .apply(glassVoice)
  .juxBy(0.5, x => x.transpose(12).gain(0.15))
  .pan(0.6)

// Track 3 - Bass transformed into a heartbeat
$: note("<g2 g2 ~ ~> <~ d2 ~ ~> <~ ~ e2 ~> <~ ~ ~ c2>")
  .slow(4)
  .apply(pulseVoice)
  .pan(0.5)

// Track 4 - New: spectral dust, the canon disintegrating
$: note("g6 b6 d7 g6 d7 b6 g6 d7 gb6 a6 e6 g6")
  .struct("t(5,16)")
  .fast(2)
  .degradeBy(0.6)
  .sound("sine")
  .gain(0.12)
  .attack(0.001)
  .decay(0.05)
  .sustain(0)
  .pan(rand)
  .room(0.6)
  .delay(0.5)
  .delaytime(0.25)
  .delayfeedback(0.5)