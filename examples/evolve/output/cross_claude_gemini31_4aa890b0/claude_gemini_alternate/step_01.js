// Goldberg Variations - Ground Bass Reimagined
// The original descending line, now fractured and haunted

setcps(72/60/4)

// Original bass line - now deep and subterranean
$: note("g2 fs2 e2 d2 b1 c2 d2 g1")
  .slow(4)
  .sound("sawtooth")
  .lpf(180)
  .gain(0.4)
  .room(0.3)

// Ghostly inversion rising above - the shadow responds
$: note("g5 a5 b5 c6 d6 c6 b5 d6")
  .slow(4)
  .sound("sine")
  .gain(0.15)
  .delay(0.4)
  .delaytime(0.375)
  .delayfeedback(0.5)
  .pan(sine.range(0.3, 0.7).slow(8))

// Fractured harpsichord arpeggios - baroque meets glitch
$: note("[g4 b4 d5] [fs4 a4 d5] [e4 g4 b4] [d4 fs4 a4] [b3 d4 g4] [c4 e4 g4] [d4 fs4 a4] [g3 b3 d4]")
  .slow(4)
  .sound("triangle")
  .euclidLegato(5, 8)
  .decay(0.1)
  .sustain(0)
  .gain(0.25)
  .sometimes(x => x.speed(2).pan(0.2))
  .room(0.2)

// Unexpected: a slow breath of dissonance
$: note("<[g3,a3,b3] [fs3,gs3,as3] [e3,f3,g3] [d3,eb3,f3]>")
  .slow(8)
  .sound("supersaw")
  .lpf(600)
  .attack(1)
  .decay(2)
  .sustain(0.3)
  .release(2)
  .gain(0.12)
  .room(0.4)
  .detune(8)