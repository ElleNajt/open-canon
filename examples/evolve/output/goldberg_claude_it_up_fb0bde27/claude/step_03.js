// Goldberg Variations - Ground Bass Reimagined
// A meditation on descent and return, touched by digital longing
// Now breathing with accumulated memory, each voice carrying its own weight of time

setcps(66/60/4)

$: note("g2 fs2 e2 d2 b1 c2 d2 g1")
  .slow(4)
  .sound("sawtooth")
  .lpf(sine.range(90, 380).slow(12))
  .gain(0.35)
  .room(0.6)

$: note("<g4 fs4 e4 d4> <b3 c4 d4 g3>")
  .slow(2)
  .sound("triangle")
  .delay(0.5).delaytime(0.333).delayfeedback(0.52)
  .gain(0.24)

$: note("[d5 ~] [b4 g4] [a4 ~] [fs4 g4] ~ [d5 e5] [d5 b4] ~")
  .slow(4)
  .sound("sine")
  .attack(0.18).release(1.4)
  .gain(0.15)
  .pan(sine.range(0.3, 0.7).slow(11))

$: note("<b5 a5 g5 fs5 e5 d5>")
  .euclid(7,16)
  .slow(8)
  .sound("sine")
  .attack(0.08).release(2.2)
  .gain(0.09)
  .room(0.8)

$: note("~ ~ ~ [fs4,a4,d5] ~ ~ [g4,b4,d5] ~")
  .slow(4)
  .sound("triangle")
  .attack(0.25).release(1.8)
  .lpf(2200)
  .gain(sine.range(0.07, 0.13).slow(16))

$: note("g3 ~ d4 ~ b3 ~ a3 g3")
  .slow(8)
  .sound("sawtooth")
  .lpf(440)
  .gain(0.12)
  .delay(0.35).delaytime(0.5)