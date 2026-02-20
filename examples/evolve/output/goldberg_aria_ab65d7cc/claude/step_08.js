// Goldberg Variations - Aria Reimagined (Variation: The Awakening)

let etherealStrings = x => x
  .sound("sawtooth")
  .gain(0.2)
  .attack(0.15)
  .decay(0.4)
  .sustain(0.7)
  .release(0.8)
  .lpf(2200)
  .lpq(3)
  .room(0.6)
  .size(0.7)
  .delay(0.3)
  .delaytime(0.375)
  .delayfeedback(0.4)

let bellTones = x => x
  .sound("sine")
  .gain(0.13)
  .attack(0.001)
  .decay(1.2)
  .sustain(0.02)
  .release(2)
  .fmi(8)
  .fmh(7)
  .fmdecay(0.5)
  .room(0.7)
  .delay(0.5)
  .delaytime(0.5)
  .delayfeedback(0.5)

setcps(66/60/4)

// Melody now ASCENDS - dawn breaking, rising from sleep
let risingMelody = "d4 ~ e4 fs4 ~ a4 ~ b4 cs5 ~ d5 e5 ~ fs5 ~ g5"

// Bass becomes a walking figure - life returning, forward motion
let walkingBass = "g2 a2 b2 c3 d3 e3 fs3 g3 a3 b3 a3 g3 fs3 e3 d3 c3"

// Stacked fifths and major chords - certainty, clarity emerging
let openFifths = "[g2,d3,g3,d4] ~ [a2,e3,a3,e4] ~ [b2,fs3,b3,fs4] ~ [d3,a3,d4,a4] ~"

// Track 1 - melody ascending, reaching toward light
$: note(risingMelody)
  .slow(8)
  .apply(etherealStrings)
  .pan(sine.range(0.35, 0.65).slow(12))
  .lpf(perlin.range(1200, 3000).slow(6))

// Track 2 - walking bass, purposeful stride
$: note(walkingBass)
  .slow(8)
  .sound("triangle")
  .gain(0.16)
  .octave(2)
  .attack(0.08)
  .decay(0.3)
  .sustain(0.5)
  .release(0.4)
  .lpf(450)
  .room(0.4)
  .pan(0.48)

// Track 3 - open fifths like cathedral bells
$: note(openFifths)
  .slow(4)
  .apply(bellTones)
  .pan(0.5)

// Track 4 - DROPPED the dissolving hihats, ADD: rhythmic pulse, heartbeat quickening
$: s("bd ~ ~ bd ~ bd ~ ~ bd ~ bd ~ ~ bd bd ~")
  .slow(4)
  .gain(0.11)
  .lpf(200)
  .shape(0.3)
  .room(0.3)
  .pan(0.5)

// Track 5 - mixolydian brightness, confident not yearning
$: n("0 2 4 5 7 9 7 5".slow(2))
  .scale("D:mixolydian")
  .slow(4)
  .sound("pulse")
  .gain(0.1)
  .attack(0.02)
  .decay(0.2)
  .sustain(0.4)
  .release(0.5)
  .lpf(1600)
  .room(0.5)
  .pan(cosine.range(0.3, 0.7).slow(8))
  .octave(5)

// Track 6 - piano arpeggio rises instead of falls
$: note("d3 fs3 a3 d4 fs4 a4 d5 a4 fs4 d4 a3 fs3")
  .slow(4)
  .sound("piano")
  .gain(0.12)
  .release(1.2)
  .lpf(2400)
  .room(0.45)
  .pan(0.52)
  .velocity(sine.range(0.5, 0.9).slow(4))

// Track 7 - NEW: shimmering upper harmonics, birds at dawn
$: note("d6 a5 fs6 d6 b5 g6 e6 cs6 d6 ~ ~ ~")
  .slow(8)
  .sound("sine")
  .gain(0.07)
  .attack(0.01)
  .decay(0.4)
  .sustain(0.1)
  .release(1)
  .fmi(2)
  .fmh(5)
  .lpf(4000)
  .room(0.8)
  .delay(0.6)
  .delaytime(0.333)
  .delayfeedback(0.55)
  .pan(rand.range(0.2, 0.8))