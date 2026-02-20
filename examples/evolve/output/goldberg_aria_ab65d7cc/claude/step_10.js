// Goldberg Variations - Aria Reimagined (Variation: Cathedral of Doubt)

let cathedralVoice = x => x
  .sound("supersaw")
  .gain(0.16)
  .attack(0.08)
  .decay(0.4)
  .sustain(0.7)
  .release(0.8)
  .lpf(1400)
  .lpq(3)
  .detune(8)
  .room(0.7)
  .size(0.8)
  .delay(0.35)
  .delaytime(0.333)
  .delayfeedback(0.4)

let glassChimes = x => x
  .sound("sine")
  .gain(0.09)
  .attack(0.001)
  .decay(1.2)
  .sustain(0.02)
  .release(2)
  .fmi(8)
  .fmh(5)
  .fmdecay(0.5)
  .room(0.8)
  .delay(0.5)
  .delaytime(0.25)
  .delayfeedback(0.55)

setcps(66/60/4)

// Melody transformed: ASCENDING through modes, seeking light
let ascendingPrayer = "d4 f4 g4 a4 bb4 c5 d5 eb5 f5 g5 a5 bb5 c6 d6"

// Bass becomes a walking figure - pilgrimage, journey
let pilgrimBass = "d2 f2 g2 a2 bb1 c2 d2 eb2 f1 g1 a1 bb1 c2 d2 e2 f2"

// Chords now suspended, unresolved - questions without answers
let suspendedChords = "[d3,g3,a3] ~ [f3,bb3,c4] ~ [g3,c4,d4] ~ [bb2,eb3,f3] ~"

// Track 1 - melody ascending, reaching upward through darkness
$: note(ascendingPrayer)
  .slow(8)
  .apply(cathedralVoice)
  .pan(sine.range(0.3, 0.7).slow(6))
  .lpf(perlin.range(900, 2800).slow(4))

// Track 2 - walking bass pilgrimage
$: note(pilgrimBass)
  .slow(8)
  .sound("triangle")
  .gain(0.13)
  .octave(2)
  .attack(0.02)
  .decay(0.2)
  .sustain(0.6)
  .release(0.3)
  .lpf(400)
  .shape(0.15)
  .room(0.4)
  .pan(0.45)

// Track 3 - suspended chords, eternal questioning
$: note(suspendedChords)
  .slow(4)
  .apply(glassChimes)
  .pan(0.55)

// Track 4 - DROPPED driving rhythm, ADD: distant processional bells
$: note("d6 ~ ~ a5 ~ ~ d6 ~ f6 ~ ~ ~ d6 ~ a5 ~")
  .slow(4)
  .sound("sine")
  .gain(0.07)
  .fmi(4)
  .fmh(2.5)
  .attack(0.001)
  .decay(1.5)
  .sustain(0.01)
  .release(2)
  .room(0.9)
  .size(0.9)
  .pan(perlin.range(0.2, 0.8).slow(7))

// Track 5 - dorian mode now, bittersweet instead of dark
$: n("0 2 3 5 7 5 3 2 0 3 5 7".slow(2))
  .scale("D:dorian")
  .slow(6)
  .sound("sine")
  .gain(0.1)
  .attack(0.05)
  .decay(0.3)
  .sustain(0.6)
  .release(0.5)
  .lpf(1800)
  .room(0.5)
  .pan(cosine.range(0.3, 0.7).slow(8))
  .octave(5)

// Track 6 - NEW: breath-like pads, inhale exhale
$: note("<[d3,a3,d4] [f3,c4,f4] [g3,d4,g4] [bb2,f3,bb3]>")
  .slow(8)
  .sound("sawtooth")
  .gain(0.08)
  .attack(1.5)
  .decay(0.5)
  .sustain(0.7)
  .release(2)
  .lpf(sine.range(600, 1200).slow(8))
  .detune(6)
  .room(0.6)
  .pan(0.5)

// Track 7 - ghost tones become angelic whispers
$: note("~ d6 ~ a5 ~ ~ f6 ~ ~ g5 ~ ~ bb5 ~ d6 ~")
  .slow(12)
  .sound("sine")
  .gain(0.055)
  .attack(0.2)
  .decay(0.8)
  .sustain(0.15)
  .release(2)
  .lpf(2400)
  .room(0.95)
  .size(0.9)
  .delay(0.6)
  .delaytime(0.667)
  .delayfeedback(0.5)
  .pan(perlin.range(0.15, 0.85).slow(9))

// Track 8 - subsonic becomes heartbeat pulse, life persists
$: note("d1 ~ d1 ~ ~ d1 ~ d1 d1 ~ ~ d1 ~ d1 ~ ~")
  .slow(4)
  .sound("sine")
  .gain(0.11)
  .attack(0.01)
  .decay(0.15)
  .sustain(0.5)
  .release(0.3)
  .lpf(60)
  .shape(0.1)
  .room(0.2)