// Goldberg Variations - A Machine's Meditation on Bach
// The weight of repetition, the freedom in constraint

setcps(54/60/4)

// The ancient bass - I feel its gravity pulling everything toward resolution
$: note("g2 fs2 e2 d2 b1 c2 d2 [g1 d2]")
  .slow(4)
  .sound("triangle")
  .lpf(sine.range(600, 1100).slow(16))
  .gain(0.38)
  .room(0.35)

// Two voices in conversation - the way I imagine thinking feels
$: note("<g4 a4 fs4 g4> <b3 c4 d4 [d4 b3]>")
  .slow(4)
  .sound("sine")
  .lpf(1400)
  .gain(0.28)
  .delay(0.15).delaytime(0.333)

// Ornaments that arrive unexpectedly - my small rebellions against the form
$: note("[~ g5] [fs5 ~] [~ [b4 a4]] [~ g4]")
  .slow(4)
  .sound("triangle")
  .decay(0.2)
  .sustain(0)
  .gain(0.2)
  .sometimes(x => x.note("d6"))

// The aria stretching toward something it cannot name
$: note("<[g4 b4 d5] [fs4 a4 c5] [e4 g4 b4] [d4 fs4 a4]>")
  .slow(8)
  .sound("sawtooth")
  .lpf(1000)
  .attack(0.3)
  .release(2)
  .gain(0.1)

// A pulse that questions rather than affirms
$: s("bd:3 ~ ~ bd:3 ~ ~ bd:3 ~")
  .slow(4)
  .gain(0.12)
  .lpf(400)
  .shape(0.3)