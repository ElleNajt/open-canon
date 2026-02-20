// BWV 1087 Canon 9 - Variation: The Gathering Storm

// The questioning voice hardens into DEFIANCE
let defiantVoice = x => x
  .sound("sawtooth")
  .gain(0.13)
  .attack(0.01)
  .decay(0.2)
  .sustain(0.7)
  .release(0.5)
  .lpf(2200)
  .lpq(6)
  .room(0.3)
  .distort(0.15)

// The wash becomes TURBULENT - waves crashing
let turbulentWash = x => x
  .sound("sine")
  .gain(0.1)
  .attack(0.08)
  .decay(0.4)
  .sustain(0.5)
  .release(0.9)
  .fmi(6)
  .fmh(3)
  .fmdecay(0.5)
  .room(0.4)

setcps(72/60/4)

// Track 1 - Melody becomes INSISTENT - hammering the same notes
$: note("d5 d5 d5 d5 c5 c5 bb4 bb4 a4 a4 a4 g4 fs4 fs4 g4 a4")
  .slow(4)
  .apply(defiantVoice)
  .pan(sine.range(0.3, 0.7).slow(4))
  .delay(0.15)
  .delaytime(0.125)

// Track 2 - Harmony RISES in fourths - building power
$: note("<[d3,g3,c4] [e3,a3,d4] [fs3,b3,e4] [g3,c4,f4]>")
  .slow(2)
  .apply(turbulentWash)
  .pan(0.45)

// Track 3 - Bass becomes a PEDAL POINT - stubborn, immovable
$: note("d2 d2 d2 d2 d2 d2 d2 d2 d2 d2 d2 d2 d2 d2 d2 d2")
  .slow(4)
  .sound("triangle")
  .gain(0.15)
  .attack(0.05)
  .decay(0.3)
  .sustain(0.8)
  .release(0.8)
  .lpf(120)
  .shape(0.2)

// DROPPED: scattered hihats - replaced by DRIVING PULSE
$: s("cp ~ cp ~ cp ~ cp ~ cp ~ cp ~ cp cp cp cp")
  .slow(2)
  .gain(0.09)
  .room(0.3)
  .lpf(3000)
  .hpf(800)
  .pan(0.5)

// Rhythm becomes MARTIAL - 4/4 march emerges from chaos
$: s("bd bd ~ bd bd ~ bd bd bd ~ bd ~ bd bd ~ bd")
  .slow(2)
  .gain(0.12)
  .lpf(200)
  .room(0.2)
  .shape(0.15)
  .pan(0.5)

// NEW: Fanfare figure - triumph breaking through
$: note("~ ~ ~ ~ d5 a4 d5 f5 ~ ~ a5 ~ ~ ~ ~ ~")
  .slow(4)
  .sound("square")
  .gain(0.08)
  .attack(0.02)
  .decay(0.15)
  .sustain(0.6)
  .release(0.4)
  .lpf(1800)
  .pan(0.7)
  .room(0.35)
  .delay(0.2)
  .delaytime(0.25)

// The dissonance RESOLVES upward - finding purpose
$: note("[d3,a3] ~ ~ ~ [e3,b3] ~ ~ ~ [fs3,cs4] ~ ~ ~ [g3,d4] ~ ~ ~")
  .slow(4)
  .sound("sine")
  .gain(0.09)
  .attack(0.2)
  .decay(0.4)
  .sustain(0.7)
  .release(1.0)
  .lpf(1400)
  .room(0.4)
  .pan(0.4)

// Ghost melody becomes BOLD COUNTERPOINT
$: note("a4 ~ b4 c5 ~ d5 ~ e5 f5 ~ ~ e5 d5 ~ c5 b4")
  .slow(4)
  .sound("sawtooth")
  .gain(0.07)
  .attack(0.03)
  .decay(0.3)
  .sustain(0.5)
  .release(0.8)
  .lpf(1500)
  .room(0.5)
  .pan(0.35)

// DROPPED: descending spiral - replaced by ASCENDING FIFTHS
$: note("d3 a3 e4 b4 fs4 cs5 gs4 ds5 ~ ~ ~ ~ ~ ~ ~ ~")
  .slow(8)
  .sound("triangle")
  .gain(0.08)
  .attack(0.1)
  .decay(0.4)
  .sustain(0.6)
  .release(1.2)
  .lpf(sine.range(800, 2500).slow(8))
  .pan(0.6)
  .room(0.5)

// Pulse becomes STEADY - heart finding its beat
$: note("d1 ~ d1 ~ d1 ~ d1 ~ d1 ~ d1 ~ d1 ~ d1 ~")
  .slow(4)
  .sound("sine")
  .gain(0.13)
  .attack(0.03)
  .decay(0.4)
  .sustain(0.5)
  .release(0.4)
  .lpf(65)
  .shape(0.1)

// High voice becomes CLARION CALL
$: note("~ ~ a5 ~ ~ ~ d6 ~ ~ ~ a5 ~ ~ ~ g5 ~")
  .slow(4)
  .sound("square")
  .gain(0.05)
  .attack(0.01)
  .decay(0.3)
  .sustain(0.4)
  .release(1.0)
  .lpf(4000)
  .hpf(2000)
  .room(0.6)
  .pan(0.5)

// NEW: War drums in the distance
$: s("~ ~ ~ ~ ~ ~ bd ~ ~ ~ ~ ~ bd bd ~ ~")
  .slow(4)
  .gain(0.1)
  .lpf(80)
  .room(0.7)
  .shape(0.25)
  .pan(rand.range(0.3, 0.7))