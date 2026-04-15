$: note("<e2 [b1 ~] g1 [d2 a1] [~ e2] [fs1 b1] [g1 ~] a1>").sound("sawtooth")
  .lpf(sine.range(60,2200).slow(13))
  .shape(0.42).gain(0.4).room(0.55)

$: note("[e3 ~] [b2 g3] [~ fs3] [a2 d3] [e3 ~] [g3 b3]").sound("triangle")
  .delay(0.6).dt(0.333).dfb(0.52)
  .gain(0.28).pan(sine.range(0.15,0.85).slow(9))

$: note("<[e4 g4 b4] [d4 fs4 a4] [g4 b4 d5] [a4 cs5 e5] [fs4 a4 d5] [b3 e4 gs4]>/2")
  .sound("sine").attack(0.9).release(5)
  .gain(0.19).room(0.45)

$: s("[~ hh:1] [hh:3 ~] hh:2 [~ hh:5] [hh:1 hh:4] ~")
  .gain(perlin.range(0.08,0.16).slow(7))
  .hpf(5200).delay(0.35).pan(rand)

$: note("e5*<4 3 5 4 6 5 3 7>").sound("pulse")
  .lpf(perlin.range(800,1600).slow(11)).lpenv(5).lpdecay(0.25)
  .gain(0.12)

$: note("<~ b5 [fs6 ~] e6 [~ g6] [a6 d6] ~ [cs6 b5]>/4").sound("sine")
  .attack(1.1).release(5).gain(0.13)
  .room(0.65)