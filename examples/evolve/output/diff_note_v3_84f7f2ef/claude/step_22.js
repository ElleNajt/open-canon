$: note("<e2 [b1 ~] g1 [d2 a1] [~ e2] [fs1 b1] [g1 ~] a1>").sound("sawtooth")
  .lpf(sine.range(60,2200).slow(13)).lpq(7)
  .shape(0.62).gain(0.38).room(0.6)

$: note("[e3 ~] [b2 g3] [~ fs3] [a2 d3] [e3 ~] [g3 b3] <[d3 a3] [cs3 e3] [b2 fs3] [e3 g3] [a3 cs4] [fs3 b3]>").sound("triangle")
  .delay(0.52).dt("0.375 0.25 0.5").dfb(0.48)
  .gain(0.24).pan(sine.range(0.15,0.85).slow(9))

$: note("<[e4 g4 b4] [d4 fs4 a4] [g4 b4 d5] [a4 cs5 e5] [fs4 a4 d5] [b3 e4 gs4] [cs4 e4 a4] [e4 gs4 b4]>/2")
  .sound("sine").attack(2.2).release(11)
  .gain(0.14).room(0.7)

$: s("[~ hh:1] hh:3? hh:2 [~ hh:5]? [hh:1 ~] ~ hh:2? [~ hh:3]").sometimes(x => x.speed(1.5))
  .gain(perlin.range(0.06,0.13).slow(11))
  .hpf(5200).delay(0.28).pan(rand)

$: note("e5*<3 4 5 3 6 4> [~ b5 ~] <g5 fs5 a5 d6 cs6 b5>").sound("pulse")
  .lpf(perlin.range(350,2800).slow(15)).lpq(5)
  .gain(0.12).delay(0.22).dt("0.25 0.375")

$: note("<~ b5 ~ e6 [~ g6] ~ [d6 ~] ~ [fs6 ~] [~ e6] ~ a5 b5 [~ cs6] d6 ~>/4").sound("sine")
  .attack(2.8).release(14).gain(0.09).room(0.75)