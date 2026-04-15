$: note("<e2 b1 g1 [d2 ~] a1 [~ e2] fs1 b1>").sound("sawtooth")
  .lpf(sine.range(80,1600).slow(11))
  .gain(0.38).room(0.6).release(1.8)

$: note("[e3 ~] b2 [~ g3] fs3 [a2 e3]").sound("triangle")
  .delay(0.5).dt(0.375).dfb(0.55)
  .gain(0.25).pan(sine.range(0.2,0.8).slow(7))

$: note("<[e4 g4 b4] [d4 fs4 b4] [g4 b4 e5] [fs4 a4 d5] [e4 a4 cs5] [g4 b4 e5]>/2")
  .sound("sine").attack(0.25).release(2)
  .gain(0.18).room(0.5)

$: s("~ hh:3 [~ hh:1] hh:2 ~ [hh:5 ~]").gain(0.13)
  .hpf(4800).delay(0.4).pan(rand)

$: note("e5*<4 6 8 4 12 8>").sound("pulse")
  .lpf(1200).lpenv(6).lpdecay(0.15)
  .gain(perlin.range(0.05,0.14).slow(5))

$: note("<b5 ~ fs6 e6 ~ g6 a6 ~>/4").sound("sine")
  .attack(0.35).release(2.5).gain(0.1)
  .delay(0.55).room(0.65)