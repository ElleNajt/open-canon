// BWV 1087 Canon 3 - Variation: Emergence from Darkness

// Glass-like crystalline voice
let glassVoice = x => x
  .sound("triangle")
  .gain(0.25)
  .attack(0.005)
  .decay(0.3)
  .sustain(0.1)
  .release(0.8)
  .room(0.5)

// Warm sustained voice
let warmVoice = x => x
  .sound("sine")
  .gain(0.2)
  .attack(0.15)
  .decay(0.4)
  .sustain(0.7)
  .release(1.2)
  .lpf(1200)
  .room(0.6)

setcps(96/60/4)

// Track 1 - Theme reborn: ascending major, hopeful answer to the questioning
$: note("[g4 a4 b4] [c5 d5 ~] [e5 d5 c5] [b4 ~ g4]")
  .slow(4)
  .apply(glassVoice)
  .pan(sine.range(0.35, 0.65).slow(5))

// Track 2 - Canon at the fifth, bright imitation
$: note("[d4 e4 fs4] [g4 a4 ~] [b4 a4 g4] [fs4 ~ d4]")
  .slow(4)
  .late(0.5)
  .apply(glassVoice)
  .octave(5)
  .pan(sine.range(0.65, 0.35).slow(5))

// Track 3 - Harmony shifts to major with gentle suspensions
$: note("<[g2,b2,d3] [c3,e3,g3]> <[d2,fs2,a2] [g2,b2,d3]>")
  .slow(8)
  .apply(warmVoice)
  .pan(0.5)

// Track 4 - Dancing pizzicato bass replacing the ghostly drone
$: note("g2 d3 b2 g2 a2 d3 fs2 g2")
  .slow(2)
  .sound("triangle")
  .gain(0.18)
  .attack(0.01)
  .decay(0.15)
  .sustain(0.05)
  .release(0.3)
  .lpf(800)
  .room(0.3)
  .pan(0.45)

// Track 5 - NEW: Bird-call ornaments, playful interruptions
$: note("~ ~ [b5 d6] ~ ~ [g5 a5 b5] ~ ~")
  .slow(4)
  .sound("sine")
  .gain(0.15)
  .attack(0.01)
  .decay(0.1)
  .sustain(0.05)
  .release(0.4)
  .fmi(2)
  .fmh(3)
  .fmdecay(0.1)
  .delay(0.3)
  .delaytime(0.33)
  .delayfeedback(0.4)
  .pan(rand.range(0.3, 0.7))

// Track 6 - NEW: Gentle pulse giving forward motion
$: note("[g3,d4] ~ [g3,b3] ~ [a3,e4] ~ [d3,a3] [d3,fs3]")
  .slow(4)
  .sound("sine")
  .gain(0.12)
  .attack(0.02)
  .decay(0.2)
  .sustain(0.3)
  .release(0.5)
  .room(0.4)
  .pan(0.55)