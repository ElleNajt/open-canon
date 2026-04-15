$: note("<e2 [b1 ~] g1 [d2 a1] [~ e2] [fs1 b1] [g1 ~] a1>").sound("sawtooth")
  .lpf(sine.range(60,1800).slow(11)).lpq(6)
  .shape(0.58).gain(0.4).room(0.55)

$: note("[e3 ~] [b2 g3] [~ fs3] [a2 d3] [e3 ~] [g3 b3] <[d3 a3] [cs3 e3] [b2 fs3] [e3 g3]>").sound("triangle")
  .delay(0.55).dt(0.375).dfb(0.48)
  .gain(0.26).pan(sine.range(0.2,0.8).slow(7))

$: note("<[e4 g4 b4] [d4 fs4 a4] [g4 b4 d5] [a4 cs5 e5] [fs4 a4 d5] [b3 e4 gs4]>/2")
  .sound("sine").attack(1.8).release(9)
  .gain(0.2).room(0.65)

$: s("[~ hh:1] [hh:3 ~] hh:2? [~ hh:5] [hh:1 ~]? ~ [hh:2 ~] ~")
  .gain(perlin.range(0.07,0.14).slow(9))
  .hpf(4800).delay(0.3).pan(rand)

$: note("e5*<3 5 4 3> [~ b5 ~] <g5 fs5 a5 ~>").sound("pulse")
  .lpf(perlin.range(280,2200).slow(13)).lpenv(4).lpdecay(0.4)
  .gain(0.14).pan(sine.range(0.25,0.75).slow(6))

$: note("<~ b5 ~ e6 [~ g6] ~ [d6 ~] ~ [cs6 ~] [~ e6] ~ [a5 ~] b5 ~ [e6 ~] ~>/4").sound("sine")
  .attack(2.5).release(12).gain(0.11).room(0.75)