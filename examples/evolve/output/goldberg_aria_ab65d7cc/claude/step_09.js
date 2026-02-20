// Goldberg Variations - Aria Reimagined (Variation: The Storm Within)

let stormStrings = x => x
  .sound("supersaw")
  .gain(0.18)
  .attack(0.02)
  .decay(0.2)
  .sustain(0.8)
  .release(0.5)
  .lpf(1800)
  .lpq(5)
  .detune(12)
  .room(0.5)
  .size(0.6)
  .delay(0.2)
  .delaytime(0.25)
  .delayfeedback(0.3)

let darkBells = x => x
  .sound("sine")
  .gain(0.11)
  .attack(0.001)
  .decay(0.8)
  .sustain(0.05)
  .release(1.5)
  .fmi(12)
  .fmh(3)
  .fmdecay(0.3)
  .room(0.6)
  .delay(0.4)
  .delaytime(0.375)
  .delayfeedback(0.45)

setcps(78/60/4)

// Melody now DESCENDS chromatically - doubt creeping in, the fall
let fallingMelody = "d5 cs5 c5 b4 bb4 a4 gs4 g4 fs4 f4 e4 eb4 d4 ~"

// Bass becomes obsessive pedal point - stuck, circling
let obsessiveBass = "d2 d2 d2 d2 a1 a1 d2 d2 d2 d2 d2 g1 d2 d2 d2 d2"

// Minor seconds and tritones - tension, uncertainty
let dissonantChords = "[d2,ab2,d3] ~ [d2,gs2,d3,a3] ~ [d2,a2,eb3] ~ [d2,ab2,d3,gs3] ~"

// Track 1 - melody descending chromatically, spiraling down
$: note(fallingMelody)
  .slow(6)
  .apply(stormStrings)
  .pan(sine.range(0.25, 0.75).slow(4))
  .lpf(perlin.range(800, 2400).slow(3))

// Track 2 - obsessive pedal bass, hypnotic repetition
$: note(obsessiveBass)
  .slow(8)
  .sound("sawtooth")
  .gain(0.14)
  .octave(2)
  .attack(0.01)
  .decay(0.15)
  .sustain(0.7)
  .release(0.2)
  .lpf(320)
  .shape(0.2)
  .room(0.3)
  .pan(0.5)

// Track 3 - dissonant bells, tolling warnings
$: note(dissonantChords)
  .slow(4)
  .apply(darkBells)
  .pan(0.5)

// Track 4 - urgent driving rhythm, heartbeat racing
$: s("bd bd ~ bd bd ~ bd bd bd ~ bd ~ bd bd bd ~")
  .slow(4)
  .gain(0.13)
  .lpf(180)
  .shape(0.4)
  .room(0.2)
  .pan(0.5)

// Track 5 - phrygian mode, spanish darkness
$: n("0 1 3 4 0 1 5 4 3 1 0 1".slow(2))
  .scale("D:phrygian")
  .slow(4)
  .sound("square")
  .gain(0.09)
  .attack(0.01)
  .decay(0.15)
  .sustain(0.5)
  .release(0.3)
  .lpf(1200)
  .lpq(6)
  .room(0.4)
  .pan(cosine.range(0.35, 0.65).slow(6))
  .octave(4)

// Track 6 - DROPPED piano, ADD: metallic gamelan-like pulses
$: note("d4 a4 d5 a4 d4 gs4 d5 gs4 d4 g4 d5 g4")
  .slow(3)
  .sound("triangle")
  .gain(0.1)
  .fmi(6)
  .fmh(11)
  .fmdecay(0.2)
  .attack(0.001)
  .decay(0.5)
  .sustain(0.05)
  .release(0.8)
  .lpf(3200)
  .room(0.5)
  .pan(rand.range(0.3, 0.7))

// Track 7 - ghost tones, whispered fragments
$: note("~ a5 ~ ~ gs5 ~ d5 ~ ~ eb5 ~ ~ a4 ~ ~ ~")
  .slow(8)
  .sound("sine")
  .gain(0.06)
  .attack(0.1)
  .decay(0.6)
  .sustain(0.2)
  .release(1.5)
  .lpf(2000)
  .room(0.9)
  .size(0.8)
  .delay(0.7)
  .delaytime(0.5)
  .delayfeedback(0.6)
  .pan(perlin.range(0.2, 0.8).slow(5))

// Track 8 - NEW: subsonic rumble, the ground shaking beneath
$: note("d1 ~ ~ d1 ~ d1 ~ ~ ~ d1 ~ ~ d1 d1 ~ ~")
  .slow(8)
  .sound("sine")
  .gain(0.12)
  .attack(0.05)
  .decay(0.3)
  .sustain(0.8)
  .release(0.5)
  .lpf(80)
  .shape(0.15)
  .room(0.3)