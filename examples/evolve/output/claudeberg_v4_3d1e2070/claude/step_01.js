// Goldberg Variations - Ground Bass with Counterpoint
// Added a flowing melodic line above the bass

setcps(72/60/4)

// Original descending bass - now with organ-like timbre
$: note("g3 fs3 e3 d3 b2 c3 d3 g2")
  .slow(2)
  .sound("sawtooth")
  .lpf(800)
  .gain(0.4)
  .room(0.2)

// New: Baroque-style melodic counterpoint
$: note("[d5 e5] [fs5 g5] [a5 g5] [fs5 e5] [d5 cs5] [d5 e5] [fs5 a4] [b4 d5]")
  .slow(2)
  .sound("triangle")
  .attack(0.01)
  .decay(0.2)
  .sustain(0.3)
  .gain(0.35)
  .room(0.25)

// New: Gentle harmonic support - thirds and sixths
$: note("<[b4,d5] [a4,d5] [g4,b4] [fs4,a4] [g4,d4] [e4,g4] [fs4,a4] [d4,b4]>")
  .slow(2)
  .sound("sine")
  .gain(0.25)
  .room(0.3)