// Goldberg Variations - Ground Bass Reimagined
// A meditation on descent and return

setcps(66/60/4)

$: note("g2 fs2 e2 d2 b1 c2 d2 g1")
  .slow(4)
  .sound("sawtooth")
  .lpf(sine.range(180, 420).slow(16))
  .gain(0.35)
  .room(0.4)

$: note("<g4 fs4 e4 d4> <b3 c4 d4 g3>")
  .slow(2)
  .sound("triangle")
  .delay(0.3).delaytime(0.375).delayfeedback(0.4)
  .gain(0.25)

$: note("d5 [b4 g4] [a4 fs4] g4 ~ [d5 e5] d5 ~")
  .slow(4)
  .sound("sine")
  .attack(0.08).release(0.6)
  .gain(0.2)

$: s("~ hh:1 ~ hh:1").slow(2)
  .gain(sine.range(0.08, 0.15).slow(8))
  .hpf(6000)
  .pan(sine.range(0.3, 0.7).slow(6))

$: note("g5").euclid(3,8).slow(4)
  .sound("sine")
  .attack(0.01).release(1.2)
  .gain(0.12).room(0.6)