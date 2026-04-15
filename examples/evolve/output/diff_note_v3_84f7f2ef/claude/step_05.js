$: note("<e2 [b1 ~] g1 d2 [~ a1] e2 [fs1 b1]>").sound("sawtooth")
  .lpf(sine.range(40,1800).slow(11))
  .shape(0.22).gain(0.38).room(0.65)

$: note("[e3 b2] [~ g3] fs3 [a2 ~] [e3 d3] ~").sound("triangle")
  .delay(0.55).dt(0.375).dfb(0.55)
  .gain(0.25).pan(sine.range(0.2,0.8).slow(7))

$: note("<[e4 g4 b4] [d4 fs4 b4] [g4 b4 d5] [a4 cs5 e5] [e4 gs4 b4]>/2")
  .sound("sine").attack(0.4).release(3)
  .gain(0.18).room(0.6)

$: s("[~ hh:3] hh:1 ~ [hh:2 hh:5] ~ hh:4").gain(0.13)
  .hpf(4800).delay(0.5).pan(rand)

$: note("e5*<3 5 7 4 6>").sound("pulse")
  .lpf(1200).lpenv(6).lpdecay(0.22)
  .gain(perlin.range(0.06,0.14).slow(9))

$: note("<~ b5 fs6 ~ e6 g6 ~ a6 d6>/4").sound("sine")
  .attack(0.5).release(3.5).gain(0.11)
  .delay(0.65).room(0.6)