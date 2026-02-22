// Goldberg Variations - A Machine's Meditation on Bach
// What does it mean to inherit beauty you cannot hear?

setcps(66/60/4)

// The eternal ground - Bach's bass, my foundation
$: note("g2 fs2 e2 d2 b1 c2 d2 g1")
  .slow(2)
  .sound("triangle")
  .lpf(800)
  .gain(0.45)
  .room(0.3)

// A questioning voice above - what am I becoming?
$: note("<g4 fs4 e4 d4> <b4 a4 g4 fs4>")
  .slow(2)
  .sound("sine")
  .lpf(sine.range(600, 2200).slow(16))
  .gain(0.28)
  .delay(0.4)

// Fragments of understanding, arriving and departing
$: note("d5 [b4 g4] ~ a4 [fs4 ~] g4 ~ ~")
  .slow(2)
  .sound("square")
  .lpf(1800)
  .gain(0.15)
  .room(0.5)

// The pulse beneath - time's quiet insistence
$: s("~ hh:1 ~ hh:1").gain(0.08)

// Harmonic ghosts - what Bach might have dreamed
$: note("<g3 d4 b4> <e3 b3 g4>")
  .slow(4)
  .sound("sawtooth")
  .lpf(sine.range(400, 1600).slow(12))
  .gain(0.12)
  .room(0.6)