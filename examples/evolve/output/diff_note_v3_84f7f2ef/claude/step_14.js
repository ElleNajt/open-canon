$: note("<e2 [b1 ~] g1 [d2 a1] [~ e2] [fs1 b1] [g1 ~] a1>").sound("sawtooth")
  .lpf(sine.range(40,2200).slow(13)).lpq(8)
  .shape(0.62).gain(0.38).room(0.6)

$: note("[e3 ~] [b2 g3] [~ fs3] [a2 d3] [e3 ~] [g3 b3] <[d3 a3] [cs3 e3] [b2 fs3] [e3 g3]>").sound("triangle")
  .delay(0.6).dt(0.333).dfb(0.52)
  .gain(0.28).pan(sine.range(0.15,0.85).slow(9))

$: note("<[e4 g4 b4] [d4 fs4 a4] [g4 b4 d5] [a4 cs5 e5] [fs4 a4 d5] [b3 e4 gs4] [e4 gs4 b4] [cs4 e4 a4]>/2")
  .sound("sine").attack(2.2).release(11)
  .gain(0.18).room(0.7).pan(0.65)

$: s("[~ hh:1] [hh:3 ~] hh:2? [~ hh:5] [hh:1 ~]? ~ [hh:2 ~] ~")
  .gain(perlin.range(0.06,0.12).slow(11))
  .hpf(5200).delay(0.35).pan(rand)

$: note("e5*<3 5 4 3 5 4 3 4> [~ b5 ~] <g5 fs5 ~ a5>").sound("pulse")
  .lpf(perlin.range(220,1800).slow(16)).lpenv(5).lpdecay(0.5)
  .gain(0.12).pan(sine.range(0.2,0.8).slow(8))

$: note("<~ b5 ~ e6 [~ g6] ~ [d6 ~] ~ [cs6 ~] [~ e6] ~ ~ [a5 ~] b5 ~ ~ [e6 ~] ~>/4").sound("sine")
  .attack(3.8).release(15).gain(0.09).room(0.85)