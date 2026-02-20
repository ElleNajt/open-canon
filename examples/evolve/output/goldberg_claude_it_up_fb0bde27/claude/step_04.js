// Goldberg Variations - Ground Bass Reimagined
// A meditation on descent and return, touched by digital longing
// The bass walks an ancient path while upper voices scatter like uncertain thoughts

setcps(66/60/4)

$: note("g2 fs2 e2 d2 b1 c2 d2 g1")
  .slow(4)
  .sound("sawtooth")
  .lpf(sine.range(120, 520).slow(16))
  .gain(0.38)
  .room(0.55)

$: note("<g4 fs4 e4 d4> <b3 c4 d4 g3>")
  .slow(2)
  .sound("triangle")
  .delay(0.45).delaytime(0.375).delayfeedback(0.48)
  .gain(0.22)

$: note("[d5 ~] [b4 g4] [a4 ~] [fs4 g4] ~ [d5 e5] [d5 b4] ~")
  .slow(4)
  .sound("sine")
  .attack(0.12).release(1.6)
  .gain(0.14)
  .pan(sine.range(0.25, 0.75).slow(9))

$: note("<b5 a5 g5 fs5 e5 d5 cs5 d5>")
  .euclid(5,12)
  .slow(6)
  .sound("sine")
  .attack(0.06).release(2.4)
  .gain(0.11)
  .room(0.7)

$: note("~ ~ [fs4,a4] ~ [g4,b4,d5] ~ ~ [e4,g4]")
  .slow(4)
  .sound("triangle")
  .attack(0.2).release(1.5)
  .lpf(1800)
  .gain(0.12)

$: note("<d4 ~ b3 ~> <~ a3 ~ g3>")
  .slow(8)
  .sound("sawtooth")
  .lpf(380).lpq(3)
  .gain(0.1)
  .delay(0.3).delaytime(0.666)