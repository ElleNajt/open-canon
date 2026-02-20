// BWV 1087 Canon 3 - Reimagined as twilight meditation

let etherealVoice = x => x
  .sound("sine")
  .gain(0.35)
  .attack(0.15)
  .decay(0.4)
  .sustain(0.6)
  .release(0.8)
  .lpf(sine.range(800, 2200).slow(16))
  .room(0.6)
  .delay(0.3)
  .delaytime(0.375)
  .delayfeedback(0.4)

let glassVoice = x => x
  .sound("triangle")
  .gain(0.25)
  .attack(0.08)
  .decay(0.3)
  .sustain(0.4)
  .release(0.6)
  .lpf(1800)
  .room(0.5)

let deepVoice = x => x
  .sound("sawtooth")
  .gain(0.2)
  .attack(0.1)
  .decay(0.5)
  .sustain(0.3)
  .lpf(600)
  .lpq(2)
  .room(0.4)

setcps(72/60/4)

// Fragmented upper melody - sparse and questioning
$: note("d5 ~ ~ ~ e5 ~ ~ ~ ~ gb5 ~ ~ g5 ~ ~ ~ ~ ~ b5 ~ a5 ~ ~ ~ g5 ~ ~ ~ ~ d6 ~ ~")
  .slow(8)
  .apply(etherealVoice)
  .pan(sine.range(0.2, 0.4).slow(12))
  .sometimes(x => x.add(12))

// Shimmering inversion - ghostly echoes
$: note("~ ~ g5 ~ ~ gb5 ~ ~ ~ e5 ~ ~ ~ d5 ~ ~ b4 ~ ~ ~ c5 ~ ~ d5 ~ ~ ~ g4 ~ ~ ~ ~")
  .slow(8)
  .apply(glassVoice)
  .pan(sine.range(0.6, 0.8).slow(10))
  .degradeBy(0.15)

// New bass pedal - grounding drone
$: note("g2 ~ ~ ~ ~ ~ ~ d3 ~ ~ ~ ~ ~ ~ ~ g2")
  .slow(8)
  .apply(deepVoice)
  .pan(0.5)

// Spectral harmonics - high glitter
$: note("d6 b5 g5 d5")
  .slow(16)
  .sound("sine")
  .gain(0.12)
  .attack(0.3)
  .release(1.2)
  .room(0.7)
  .pan(rand.range(0.3, 0.7))
  .every(3, x => x.add(7))

// Pulse - heartbeat underneath
$: note("g1")
  .slow(2)
  .sound("sine")
  .gain(sine.range(0.05, 0.15).slow(8))
  .lpf(200)
  .room(0.3)