// BWV 1087 Canon 3 - Variation: Storm Gathering

// Storm voice - turbulent, agitated, swirling
let stormVoice = x => x
  .sound("sawtooth")
  .gain(0.14)
  .attack(0.02)
  .decay(0.3)
  .sustain(0.4)
  .release(0.5)
  .lpf(1800)
  .room(0.4)

// Thunder voice - deep, rumbling, ominous
let thunderVoice = x => x
  .sound("square")
  .gain(0.13)
  .attack(0.15)
  .decay(0.6)
  .sustain(0.7)
  .release(1.2)
  .lpf(400)
  .room(0.6)

setcps(96/60/4)

// Track 1 - Theme now DESCENDS chromatically, darkness encroaching
$: note("a5 gs5 g5 fs5 f5 e5 eb5 d5 cs5 c5 b4 bb4")
  .slow(4)
  .apply(stormVoice)
  .pan(sine.range(0.2, 0.8).slow(3))
  .delay(0.3)
  .delaytime(0.166)
  .delayfeedback(0.45)

// Track 2 - Agitated tremolo figures, anxious and restless
$: note("[d4 d4 d4 d4] [cs4 cs4 cs4 cs4] [c4 c4 c4 c4] [b3 b3 b3 b3]")
  .fast(2)
  .sound("triangle")
  .gain(0.09)
  .attack(0.01)
  .decay(0.1)
  .sustain(0.2)
  .release(0.2)
  .lpf(2500)
  .room(0.3)
  .pan(0.7)

// Track 3 - Harmony shifts to diminished, unsettled
$: note("<[d3,f3,ab3]> <[eb3,gb3,a3]> <[e3,g3,bb3]> <[f3,ab3,b3]>")
  .slow(4)
  .apply(thunderVoice)
  .lpq(4)
  .pan(0.3)

// Track 4 - Heartbeat becomes erratic, syncopated pulse
$: note("d2 ~ d2 d2 ~ d2 ~ d2 d2 d2 ~ d2")
  .fast(2)
  .sound("triangle")
  .gain(0.11)
  .attack(0.01)
  .decay(0.15)
  .sustain(0.2)
  .release(0.2)
  .lpf(600)
  .distort(0.08)
  .pan(0.45)

// Track 5 - Wind howling, sweeping chromatic runs
$: note("d6 cs6 c6 b5 bb5 a5 ab5 g5 fs5 f5 e5 eb5 d5 cs5 c5 b4")
  .fast(4)
  .sound("sine")
  .gain(0.07)
  .attack(0.005)
  .decay(0.08)
  .sustain(0.1)
  .release(0.15)
  .lpf(sine.range(3000, 6000).slow(2))
  .hpf(2000)
  .room(0.5)
  .pan(saw.range(0, 1).fast(4))

// Track 6 - Pedal becomes grinding tritone drone
$: note("<[d2,ab2]>")
  .slow(8)
  .apply(thunderVoice)
  .lpf(350)
  .distort(0.12)
  .room(0.7)
  .pan(0.5)

// Track 7 - Bells now toll warning, minor seconds clashing
$: note("[d4,eb4] ~ ~ [ab4,a4] ~ ~ [d4,eb4] ~ ~ [gs4,a4] ~ ~")
  .slow(3)
  .sound("triangle")
  .gain(0.1)
  .attack(0.01)
  .decay(1.0)
  .sustain(0.3)
  .release(1.8)
  .lpf(1600)
  .room(0.7)
  .delay(0.4)
  .delaytime(0.333)
  .delayfeedback(0.5)
  .pan(0.5)

// Track 8 - NEW: Thunder rumbles in low register, irregular
$: note("d1 ~ ~ ~ eb1 ~ ~ d1 ~ ab1 ~ ~ ~ d1 ~ ~")
  .slow(4)
  .sound("sawtooth")
  .gain(0.12)
  .attack(0.1)
  .decay(0.8)
  .sustain(0.6)
  .release(1.5)
  .lpf(200)
  .distort(0.15)
  .room(0.8)
  .pan(0.5)