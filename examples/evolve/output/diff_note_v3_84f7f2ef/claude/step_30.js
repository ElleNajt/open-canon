$: note("<e2 [b1 ~] g1 [d2 a1] [~ e2] [fs1 b1] [g1 ~] a1>").sound("sawtooth")
  .lpf(sine.range(60,2200).slow(13)).lpq(6)
  .shape(0.68).gain(0.38).room(0.6)

$: note("[e3 ~] [b2 g3] [~ fs3] [a2 d3] [e3 ~] [g3 b3] <[d3 a3] [cs3 e3] [b2 fs3] [e3 g3] [a3 cs4] [fs3 b3] [d3 g3] [e3 a3]>").sound("triangle")
  .delay(0.55).dt("<0.333 0.25 0.5 0.375 0.666>").dfb(0.48)
  .gain(0.24).pan(sine.range(0.15,0.85).slow(9))

$: note("<[e4 g4 b4] [d4 fs4 a4] [g4 b4 d5] [a4 cs5 e5] [fs4 a4 d5] [b3 e4 gs4] [cs4 e4 a4] [g4 b4 e5]>/2")
  .sound("sine").attack(2.5).release(8)
  .gain(0.11).room(0.75)

$: s("[~ hh:1] hh:3? [hh:2 ~] [~ hh:5]? [hh:1 ~] <~ hh:4 ~> [hh:2? ~] [~ hh:3]")
  .gain(perlin.range(0.07,0.13).slow(11))
  .hpf(5500).delay(0.28).pan(rand)

$: note("e5*<2 3 4 2 3 5 2 4> [~ b5 ~] <g5 fs5 a5 d6 cs6 b5 gs5 fs6 e6 b5> [~ <fs5 b5 cs6 e6>]").sound("pulse")
  .lpf(perlin.range(350,2800).slow(14)).lpq(5)
  .gain(0.12).delay(0.22).pan(sine.range(0.25,0.75).slow(6))

$: note("<~ b5 ~ e6 [~ g6] ~ [d6 ~] ~ [fs6 ~] [~ e6] ~ a5 ~ [b5 ~] ~ gs6 ~ [e6 ~] ~ fs6>/4").sound("sine")
  .attack(3.5).release(10).gain(0.07).room(0.8)