// BWV 1087 Canon 3 - Variation: Descent into Shadow

// Shadow voice - darker, veiled, mysterious
let shadowVoice = x => x
  .sound("sawtooth")
  .gain(0.16)
  .attack(0.15)
  .decay(0.6)
  .sustain(0.3)
  .release(1.2)
  .lpf(800)
  .room(0.6)

// Depths voice - rumbling, unsettled
let depthsVoice = x => x
  .sound("square")
  .gain(0.14)
  .attack(0.1)
  .decay(0.7)
  .sustain(0.4)
  .release(1.0)
  .lpf(400)
  .distort(0.08)
  .room(0.5)

setcps(72/60/4)

// Track 1 - Theme now DESCENDING, dragged into depths
$: note("d5 c5 bb4 a4 g4 f4 eb4 d4")
  .slow(3)
  .apply(shadowVoice)
  .pan(sine.range(0.3, 0.7).slow(6))
  .delay(0.35)
  .delaytime(0.33)
  .delayfeedback(0.5)

// Track 2 - Counter-melody becomes halting, uncertain gasps
$: note("a4 ~ ~ g4 ~ f4 ~ ~ eb4 ~ d4 ~ ~ ~ ~ ~")
  .slow(4)
  .sound("sine")
  .gain(0.13)
  .attack(0.2)
  .decay(0.4)
  .sustain(0.2)
  .release(0.8)
  .lpf(1200)
  .room(0.5)
  .pan(0.7)

// Track 3 - Harmony collapses to tritones and minor seconds
$: note("<[d2,ab2]> <[eb2,a2]> <[e2,bb2]> <[f2,b2]>")
  .slow(6)
  .apply(depthsVoice)
  .lpq(4)
  .pan(0.35)

// Track 4 - Heartbeat slows, becomes irregular, dying
$: note("d2 ~ ~ d2 ~ ~ ~ d2 ~ ~ ~ ~ d2 ~ ~ ~")
  .slow(4)
  .sound("triangle")
  .gain(0.12)
  .attack(0.05)
  .decay(0.3)
  .sustain(0.1)
  .release(0.5)
  .lpf(300)
  .room(0.4)
  .pan(0.4)

// Track 5 - DROPPED brass fanfare, replaced with spectral whispers
$: note("[d6,eb6] ~ ~ [cs6,d6] ~ ~ ~ [c6,db6] ~ ~ [b5,c6] ~ ~ ~ ~ ~")
  .slow(8)
  .sound("sine")
  .gain(0.08)
  .attack(0.3)
  .decay(0.5)
  .sustain(0.3)
  .release(1.5)
  .lpf(4000)
  .hpf(2000)
  .room(0.7)
  .pan(rand.range(0.2, 0.8))

// Track 6 - Pedal sinks chromatically into the abyss
$: note("<d1 db1 c1 b0>")
  .slow(16)
  .apply(depthsVoice)
  .lpf(250)
  .room(0.6)
  .pan(0.5)

// Track 7 - NEW: Tolling funeral bell, distant and hollow
$: note("<eb3 ~ ~ ~> <~ d3 ~ ~> <~ ~ db3 ~> <~ ~ ~ c3>")
  .slow(8)
  .sound("triangle")
  .gain(0.11)
  .attack(0.01)
  .decay(1.2)
  .sustain(0.1)
  .release(2.0)
  .lpf(600)
  .hpf(150)
  .room(0.7)
  .delay(0.4)
  .delaytime(0.75)
  .delayfeedback(0.4)
  .pan(0.5)

// Track 8 - NEW: Creeping chromatic bass line, doom approaching
$: note("d2 ~ db2 ~ c2 ~ b1 ~ bb1 ~ a1 ~ ab1 ~ g1 ~")
  .slow(8)
  .sound("sawtooth")
  .gain(0.13)
  .attack(0.08)
  .decay(0.4)
  .sustain(0.5)
  .release(0.6)
  .lpf(sine.range(300, 700).slow(8))
  .distort(0.12)
  .pan(0.45)