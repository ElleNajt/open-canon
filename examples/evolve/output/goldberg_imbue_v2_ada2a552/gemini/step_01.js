// Goldberg Variations - Ambient Rework
// The 8-note ground bass, re-contextualized

setcps(72/60/4)

$: note("g3 gb3 e3 d3 b2 c3 d3 g2")
  .slow(2)
  .sound("sawtooth")
  .gain(0.4)
  .cutoff(400)

$: note("d5 b4 g4 e4 d4 e4 fs4 g4")
  .slow(2)
  .sound("sine")
  .gain(0.3)
  .delay(0.25)
  .pan(0.7)

$: s("hh")
  .euclid(5, 8)
  .slow(2)
  .gain(0.25)
  .pan(sine.range(0.1, 0.9).slow(16))

$: note("g5")
  .sound("supersaw")
  .gain(0.15)
  .lpf(sine.range(600, 2500).slow(8))
  .lpq(4)