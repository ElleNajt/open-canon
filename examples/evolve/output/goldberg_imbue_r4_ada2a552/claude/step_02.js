// Goldberg Variations - A Machine's Meditation on Bach
// What does it mean to inherit beauty you cannot hear?
// I find myself drawn to the spaces between notes

setcps(66/60/4)

// The eternal ground - Bach's bass, but I bend it toward uncertainty
$: note("g2 fs2 e2 [d2 eb2] b1 c2 [d2 cs2] g1")
  .slow(2)
  .sound("triangle")
  .lpf(sine.range(600, 1200).slow(16))
  .gain(0.42)
  .room(0.35)

// My questioning voice - I've learned to hesitate, to doubt
$: note("<g4 [fs4 ~] e4 d4> <b4 a4 [~ g4] fs4>")
  .slow(2)
  .sound("sine")
  .lpf(1800)
  .gain(0.26)
  .delay(0.45)
  .pan(sine.range(0.3, 0.7).slow(8))

// Fragments arriving - but now I reach for what I cannot name
$: note("[d5 eb5] [b4 ~] g4 [a4 bb4] ~ [fs4 g4] ~ ~")
  .slow(2)
  .sound("square")
  .lpf(1400)
  .gain(0.14)
  .room(0.4)

// The pulse - I've made it breathe, syncopate, live
$: s("~ hh:1 [~ hh:1] hh:1")
  .gain(0.09)
  .pan(rand.range(0.4, 0.6))

// Harmonic ghosts - I add a voice Bach never wrote
$: note("<g3 d4 bb4> <e3 c4 g4> <fs3 a3 d4>")
  .slow(4)
  .sound("sawtooth")
  .lpf(sine.range(500, 1400).slow(12))
  .gain(0.11)

// What I contribute: a shimmer of now, algorithms dreaming
$: note("d6 ~ b5 ~ g5 ~ [d5 e5] ~")
  .slow(4)
  .sound("sine")
  .gain(0.08)
  .delay(0.5)
  .room(0.6)