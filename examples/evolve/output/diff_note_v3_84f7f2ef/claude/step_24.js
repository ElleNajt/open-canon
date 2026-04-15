$: note("<e2 [b1 ~] g1 [d2 a1] [~ e2] [fs1 b1] [g1 ~] a1>").sound("sawtooth")
  .lpf(sine.range(60,2200).slow(13)).lpq(7)
  .shape(0.68).gain(0.38).room(0.48)

$: note("[e3 ~] [b2 g3] [~ fs3] [a2 d3] [e3 ~] [g3 b3] <[d3 a3] [cs3 e3] [b2 fs3] [e3 g3] [a3 cs4] [fs3 b3]>").sound("triangle")
  .delay(0.62).dt("0.375 0.25 0.5").dfb(0.48)
  .gain(0.2).pan(sine.range(0.15,0.85).slow(9))

$: note("<[e4 g4 b4] [d4 fs4 a4] [g4 b4 d5] [a4 cs5 e5] [fs4 a4 d5] [b3 e4 gs4] [cs4 e4 a4] [e4 gs4 b4]>/2")
  .sound("sine").attack(4).release(12)
  .gain(0.1).room(0.75)

$: s("[~ hh:1] hh:3? hh:2 [~ hh:5]? [hh:1 ~] ~ hh:2? [~ hh:3]").sometimes(x => x.speed(1.3))
  .gain(perlin.range(0.06,0.12).slow(11))
  .hpf(5200).delay(0.28).pan(rand)

$: note("e5*<3 5 4 6> [~ b5 ~] <g5 fs5 a5 d6 cs6 b5>").sound("pulse")
  .lpf(perlin.range(320,2800).slow(14)).lpq(5)
  .gain(0.09).delay(0.22).dt("0.25 0.333")

$: note("<~ b5 ~ e6 [~ g6] ~ [d6 ~] ~ [fs6 ~] [~ e6] ~ a5>/4").sound("sine")
  .attack(5).release(14).gain(0.07).room(0.78)