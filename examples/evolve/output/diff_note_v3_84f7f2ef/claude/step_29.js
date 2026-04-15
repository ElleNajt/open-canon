$: note("<e2 [b1 ~] g1 [d2 a1] [~ e2] [fs1 b1] [g1 ~] a1>").sound("sawtooth")
  .lpf(sine.range(80,1800).slow(11)).lpq(8)
  .shape(0.72).gain(0.4).room(0.55)

$: note("[e3 ~] [b2 g3] [~ fs3] [a2 d3] [e3 ~] [g3 b3] <[d3 a3] [cs3 e3] [b2 fs3] [e3 g3] [a3 cs4] [fs3 b3]>").sound("triangle")
  .delay(0.6).dt("<0.333 0.25 0.5 0.375>").dfb(0.52)
  .gain(0.26).pan(sine.range(0.2,0.8).slow(7))

$: note("<[e4 g4 b4] [d4 fs4 a4] [g4 b4 d5] [a4 cs5 e5] [fs4 a4 d5] [b3 e4 gs4]>/2")
  .sound("sine").attack(3).release(10)
  .gain(0.12).room(0.8)

$: s("[~ hh:1] hh:3? [hh:2 ~] [~ hh:5]? [hh:1 ~] <~ hh:4> [hh:2? ~] [~ hh:3]")
  .gain(perlin.range(0.08,0.14).slow(13))
  .hpf(6000).delay(0.32).pan(rand)

$: note("e5*<2 3 4 2 3 5> [~ b5 ~] <g5 fs5 a5 d6 cs6 b5 gs5 fs6> [~ <fs5 b5 cs6>]").sound("pulse")
  .lpf(perlin.range(400,2400).slow(16)).lpq(4)
  .gain(0.13).delay(0.18).pan(sine.range(0.3,0.7).slow(5))

$: note("<~ b5 ~ e6 [~ g6] ~ [d6 ~] ~ [fs6 ~] [~ e6] ~ a5 ~ [b5 ~] ~ gs6>/4").sound("sine")
  .attack(4).release(12).gain(0.08).room(0.85)