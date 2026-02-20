setcps(72/60/4)

$: note("g3 fs3 e3 d3 b2 c3 d3 g2")
  .slow(2)
  .sound("triangle")
  .gain(0.32)
  .lpf(sine.range(400, 1200).slow(16))

$: note("g4 fs4 e4 d4 b3 c4 d4 g3")
  .slow(2)
  .sound("sine")
  .gain(0.22)
  .delay(0.5).delaytime(0.5).delayfeedback(0.45)

$: note("<g5 b5 d6> <fs5 a5 c6> <e5 g5 b5> <d5 fs5 a5> <b4 d5 g5> <c5 e5 a5> <d5 fs5 b5> <g4 b4 d5>")
  .slow(2)
  .sound("sawtooth")
  .gain(0.13)
  .lpf(perlin.range(500, 1800).slow(4))
  .room(0.4)

$: note("g6 [~ fs6] [e6 ~] d6 [~ b5] c6 [d6 ~] [~ g5]")
  .slow(2)
  .sound("square")
  .gain(0.1)
  .lpf(900).lpq(5)

$: note("~ [d4 ~] ~ [a3 ~] ~ [e4 ~] ~ [b3 ~]")
  .slow(2)
  .sound("sine")
  .gain(0.18)
  .attack(0.1).release(0.8)

$: s("~ [hh ~] [~ hh] ~").gain(0.07).delay(0.3).delaytime(0.25)