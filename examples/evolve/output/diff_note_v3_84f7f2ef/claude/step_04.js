$: note("<e2 b1 g1 [d2 ~] a1 [~ e2] fs1 [b1 ~]>").sound("sawtooth")
  .lpf(sine.range(60,2200).slow(13))
  .gain(0.35).room(0.7).shape(0.15)

$: note("[e3 ~] b2 [~ g3] fs3 [a2 e3] [~ d3]").sound("triangle")
  .delay(0.6).dt(0.333).dfb(0.6)
  .gain(0.23).pan(sine.range(0.15,0.85).slow(9))

$: note("<[e4 g4 b4] [d4 fs4 a4] [g4 b4 e5] [fs4 a4 cs5] [e4 gs4 b4] [a4 cs5 e5]>/2")
  .sound("sine").attack(0.3).release(2.5)
  .gain(0.16).room(0.55)

$: s("~ hh:3 [~ hh:1] hh:2 ~ [hh:5 ~] ~ hh:4").gain(0.11)
  .hpf(5200).delay(0.45).pan(rand)

$: note("e5*<4 6 8 5 10 7>").sound("pulse")
  .lpf(1400).lpenv(5).lpdecay(0.18)
  .gain(perlin.range(0.04,0.12).slow(7))

$: note("<b5 ~ fs6 e6 ~ g6 a6 ~ d6 ~>/4").sound("sine")
  .attack(0.4).release(3).gain(0.09)
  .delay(0.6).room(0.7)