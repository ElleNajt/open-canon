// BWV 1087 Canon 9 - Variation: The Eye of the Storm

// After turbulence comes eerie stillness - the calm is more unsettling
let hollowVoice = x => x
  .sound("triangle")
  .gain(0.07)
  .attack(0.15)
  .decay(0.6)
  .sustain(0.3)
  .release(1.5)
  .lpf(1200)
  .room(0.6)

// Glass-like fragility - everything could shatter
let glassChord = x => x
  .sound("sine")
  .gain(0.06)
  .attack(0.3)
  .decay(0.8)
  .sustain(0.4)
  .release(2)
  .lpf(2800)
  .fmi(2)
  .fmh(7)
  .room(0.5)

setcps(72/60/4)

// Track 1 - Melody becomes SPARSE WHISPERS - fragments of memory
$: note("d5 ~ ~ ~ a4 ~ ~ ~ f4 ~ ~ d4 ~ ~ ~ ~")
  .slow(4)
  .apply(hollowVoice)
  .pan(0.5)
  .delay(0.5)
  .delaytime(0.333)
  .delayfeedback(0.65)

// Track 2 - Harmony SUSPENDS in quartal voicings - neither major nor minor
$: note("<[d3,g3,c4] [a2,d3,g3] [e3,a3,d4] [f3,bb3,eb4]>")
  .slow(4)
  .apply(glassChord)
  .pan(0.45)

// Track 3 - Bass becomes SUBTERRANEAN PULSE - felt not heard
$: note("d1 ~ ~ ~ ~ ~ a1 ~")
  .slow(2)
  .sound("sine")
  .gain(0.12)
  .attack(0.2)
  .decay(1)
  .sustain(0.3)
  .release(1.5)
  .lpf(60)

// Bells become DISTANT MEMORY - pitched down, reversed envelope
$: note("a4 ~ ~ ~ ~ d5 ~ ~")
  .slow(4)
  .sound("sine")
  .gain(0.06)
  .attack(0.8)
  .decay(0.3)
  .sustain(0.1)
  .release(0.5)
  .room(0.7)
  .pan(perlin.range(0.2, 0.8).slow(8))

// Heartbeat becomes BREATH - gentle inhale exhale
$: s("bd ~ ~ ~ ~ ~ ~ ~")
  .slow(2)
  .gain(0.08)
  .lpf(80)
  .room(0.4)
  .pan(0.5)

// Snare becomes RAIN ON GLASS - soft brushes
$: s("~ ~ hh ~ ~ hh ~ hh")
  .slow(2)
  .gain(0.05)
  .hpf(4000)
  .room(0.5)
  .pan(rand.range(0.3, 0.7))

// NEW: Wind chimes - random crystalline moments
$: note("fs6 a6 cs7 e6 b6 d7 g6 ~")
  .slow(8)
  .sometimes(x => x.late(0.0625))
  .sound("sine")
  .gain(0.05)
  .attack(0.01)
  .decay(0.8)
  .sustain(0.1)
  .release(2)
  .room(0.65)
  .pan(rand.range(0.1, 0.9))

// Triads become GHOST HARMONICS - barely there
$: note("[d5,a5,e6] ~ ~ ~ [f5,c6,g6] ~ ~ ~")
  .slow(4)
  .sound("sine")
  .gain(0.045)
  .attack(0.5)
  .decay(1)
  .sustain(0.2)
  .release(2)
  .lpf(3000)
  .pan(0.6)
  .room(0.55)

// Descant becomes BIRD CALL - nature reclaiming silence
$: note("~ ~ a6 b6 a6 ~ ~ ~ ~ ~ e6 fs6 e6 ~ ~ ~")
  .slow(4)
  .sound("triangle")
  .gain(0.055)
  .attack(0.01)
  .decay(0.15)
  .sustain(0.3)
  .release(0.4)
  .lpf(5000)
  .room(0.4)
  .pan(0.75)

// Canon becomes ECHOING QUESTION - call with no response
$: note("d4 ~ a4 ~ ~ ~ ~ ~")
  .slow(4)
  .apply(hollowVoice)
  .delay(0.6)
  .delaytime(0.5)
  .delayfeedback(0.7)
  .pan(0.35)

// Descending doom becomes HOVERING DRONE - time suspended
$: note("d3")
  .slow(8)
  .sound("sawtooth")
  .gain(0.06)
  .attack(2)
  .decay(2)
  .sustain(0.5)
  .release(3)
  .lpf(sine.range(400, 800).slow(16))
  .pan(0.5)
  .room(0.5)

// NEW: Heartbeat of hope - a gentle pulse emerges from silence
$: note("a2 ~ ~ e3 ~ ~ a2 ~")
  .slow(4)
  .sound("pulse")
  .gain(0.055)
  .attack(0.1)
  .decay(0.4)
  .sustain(0.3)
  .release(0.8)
  .lpf(300)
  .pan(0.5)

// NEW: String harmonics - the storm's aftermath
$: note("d6 ~ ~ ~ ~ ~ a5 ~ ~ ~ ~ ~ d5 ~ ~ ~")
  .slow(8)
  .sound("sine")
  .gain(0.04)
  .attack(0.3)
  .decay(1.5)
  .sustain(0.1)
  .release(2.5)
  .fmi(0.5)
  .fmh(12)
  .room(0.6)
  .pan(0.55)

// The question becomes THE WAITING - an open fifth, unresolved
$: note("[d2,a2]")
  .slow(16)
  .sound("triangle")
  .gain(0.08)
  .attack(3)
  .decay(4)
  .sustain(0.4)
  .release(4)
  .lpf(600)
  .room(0.6)
  .pan(0.5)