// Goldberg Variations - Evolved: Rhythmic Awakening
// Transformed the gentle baroque into something more urgent

setcps(84/60/4)

// Bass becomes a driving pulse with octave jumps
$: note("[g2 g3]*2 [fs2 fs3]*2 [e2 e3]*2 [d2 d3]*2")
  .slow(2)
  .sound("sawtooth")
  .lpf(1200)
  .lpq(2)
  .gain(0.45)
  .room(0.15)

// Melody transformed: syncopated, wider leaps, more insistent
$: note("~ d5 [a5 b5] ~ g5 [e5 fs5] ~ d5 [b4 cs5] d5")
  .slow(2)
  .sound("square")
  .lpf(2500)
  .attack(0.005)
  .decay(0.15)
  .sustain(0.2)
  .gain(0.3)
  .room(0.2)
  .delay(0.2)
  .delaytime(0.375)
  .delayfeedback(0.3)

// Dropped the gentle harmonics, added percussive harpsichord-like arpeggios
$: note("[d4 fs4 a4 d5]*2 [g3 b3 d4 g4]*2 [e3 g3 b3 e4]*2 [a3 cs4 e4 a4]*2")
  .slow(2)
  .sound("triangle")
  .attack(0.001)
  .decay(0.08)
  .sustain(0)
  .gain(0.28)
  .pan(sine.range(0.3, 0.7).slow(4))

// New: A ghostly high voice enters, unexpected
$: note("<g6 ~ fs6 ~ e6 ~ d6 ~>")
  .slow(4)
  .sound("sine")
  .gain(0.18)
  .room(0.5)
  .attack(0.3)
  .release(1.5)