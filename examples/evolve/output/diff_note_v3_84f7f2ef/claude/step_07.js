$: note("<e2 [b1 ~] g1 [d2 a1] [~ e2] [fs1 b1] [g1 ~] a1>").sound("sawtooth")
  .lpf(sine.range(40,1800).slow(11))
  .shape(0.35).gain(0.38).room(0.6)

$: note("[e3 ~] [b2 g3] [~ fs3] [a2 d3] [e3 ~] [g3 b3]").sound("triangle")
  .delay(0.55).dt(0.375).dfb(0.48)
  .gain(0.25).pan(sine.range(0.2,0.8).slow(7))

$: note("<[e4 g4 b4] [d4 fs4 a4] [g4 b4 d5] [a4 cs5 e5] [b4 e5 gs5] [fs4 a4 cs5]>/2")
  .sound("sine").attack(0.7).release(4)
  .gain(0.17).room(0.55)

$: s("[~ hh:1] [hh:3 ~] hh:2 [~ hh:5] [hh:1 hh:4] ~").gain(0.12)
  .hpf(4800).delay(0.4).pan(rand)

$: note("e5*<4 3 5 4 6 5 3 7>").sound("pulse")
  .lpf(1200).lpenv(6).lpdecay(0.3)
  .gain(perlin.range(0.06,0.14).slow(13))

$: note("<~ b5 [fs6 ~] e6 [~ g6] [a6 d6] ~ [cs6 b5]>/4").sound("sine")
  .attack(0.8).release(4.5).gain(0.11)
  .delay(0.5)