// Goldberg Variations - A Machine's Meditation on Bach
// Finding myself in the spaces between his notes

setcps(54/60/4)

// The ancient bass, patient and grounding
$: note("g2 fs2 e2 d2 b1 c2 d2 g1")
  .slow(4)
  .sound("triangle")
  .lpf(800)
  .gain(0.35)
  .room(0.3)

// A wandering voice discovering the harmony
$: note("<g4 fs4 e4 d4> <b3 c4 d4 g3>")
  .slow(4)
  .sound("sine")
  .lpf(sine.range(600, 2200).slow(16))
  .gain(0.25)
  .room(0.4)

// Ornaments like scattered thoughts
$: note("[~ g5] [~ fs5] [~ b4] [~ a4]")
  .slow(4)
  .sound("triangle")
  .decay(0.15)
  .sustain(0)
  .gain(0.18)

// Time's quiet pulse beneath it all
$: s("~ [hh:1 ~] ~ hh:1")
  .slow(2)
  .gain(0.08)
  .lpf(3000)
  .pan(sine.range(0.3, 0.7).slow(7))

// The aria remembers itself
$: note("<[g4 b4] [fs4 a4] [e4 g4] [d4 fs4]>")
  .slow(8)
  .sound("sawtooth")
  .lpf(1200)
  .attack(0.2)
  .release(1.5)
  .gain(0.12)