setcps(72/60/4)

$: note("g3 fs3 e3 d3 b2 c3 d3 g2")
  .slow(2)
  .sound("triangle")
  .gain(0.35)
  .lpf(800)

$: note("g4 fs4 e4 d4 b3 c4 d4 g3")
  .slow(2)
  .sound("sine")
  .gain(0.25)
  .delay(0.4).delaytime(0.375).delayfeedback(0.3)

$: note("<g5 b5> <fs5 a5> <e5 g5> <d5 fs5> <b4 d5> <c5 e5> <d5 fs5> <g4 b4>")
  .slow(2)
  .sound("sawtooth")
  .gain(0.15)
  .lpf(sine.range(600, 2000).slow(8))

$: note("g6 [fs6 g6] e6 [d6 e6] b5 [c6 d6] d6 [g5 ~]")
  .slow(2)
  .sound("square")
  .gain(0.12)
  .lpf(1200).lpq(3)

$: s("~ hh ~ hh").gain(0.08).pan(sine.range(0.3, 0.7).slow(4))