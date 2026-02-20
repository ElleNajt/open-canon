// Goldberg Variations - Ground Bass Reimagined
// A meditation on descent and return, touched by digital longing

setcps(66/60/4)

$: note("g2 fs2 e2 d2 b1 c2 d2 g1")
  .slow(4)
  .sound("sawtooth")
  .lpf(sine.range(140, 520).slow(16))
  .gain(0.38)
  .room(0.5)

$: note("<g4 fs4 e4 d4> <b3 c4 d4 g3>")
  .slow(2)
  .sound("triangle")
  .delay(0.4).delaytime(0.375).delayfeedback(0.45)
  .gain(0.28)

$: note("[d5 ~] [b4 g4] [a4 ~] [fs4 g4] ~ [d5 e5] [d5 b4] ~")
  .slow(4)
  .sound("sine")
  .attack(0.12).release(0.9)
  .gain(0.18)
  .pan(sine.range(0.35, 0.65).slow(7))

$: s("~ hh:1 ~ [~ hh:1]").slow(2)
  .gain(sine.range(0.06, 0.12).slow(8))
  .hpf(7000)
  .room(0.3)

$: note("<g5 d5 b4 g5>").euclid(5,12).slow(4)
  .sound("sine")
  .attack(0.02).release(1.6)
  .gain(0.1)
  .room(0.7)

$: note("~ ~ ~ [fs4,a4,d5] ~ ~ [g4,b4] ~")
  .slow(4)
  .sound("triangle")
  .attack(0.2).release(1.2)
  .gain(sine.range(0.08, 0.14).slow(12))