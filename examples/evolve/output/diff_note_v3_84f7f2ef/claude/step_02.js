$: note("<e2 b1 g1 d2 a1 e2 fs1 b1>").sound("sawtooth")
  .lpf(sine.range(120,1100).slow(13))
  .gain(0.35).room(0.5).attack(0.03).release(1.2)

$: note("e3 [~ e3] b2 [g3 ~] [~ fs3] a2").sound("triangle")
  .delay(0.45).dt(0.333).dfb(0.5)
  .gain(0.23).pan(sine.range(0.25,0.75).slow(9))

$: note("<[e4 g4 b4] [d4 fs4 a4] [e4 g4 b4] [fs4 a4 cs5] [g4 b4 d5] [a4 cs5 e5]>/2")
  .sound("sine").attack(0.2).release(1.5)
  .gain(0.16).room(0.55).pan(0.4)

$: s("~ hh:3 ~ [hh:1 hh:2] ~ hh:5").gain(0.11)
  .hpf(5500).delay(0.35).pan(rand)

$: note("e5*<4 8 4 12 6 16>").sound("pulse")
  .lpf(1400).lpenv(5).lpdecay(0.12)
  .gain(perlin.range(0.03,0.12).slow(7))

$: note("<b5 e6 fs6 ~ g6 ~ a6 e6>/4").sound("sine")
  .attack(0.3).release(2).gain(0.08)
  .delay(0.5).dt(0.5).room(0.6)