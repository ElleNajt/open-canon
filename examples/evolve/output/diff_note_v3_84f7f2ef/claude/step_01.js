$: note("<e2 b1 g1 d2>").sound("sawtooth")
  .lpf(sine.range(180,900).slow(11))
  .gain(0.38).room(0.4).attack(0.02).release(0.8)

$: note("e3 [~ e3] b2 [g3 ~]").sound("triangle")
  .delay(0.4).dt(0.375).dfb(0.45)
  .gain(0.25).pan(sine.range(0.3,0.7).slow(7))

$: note("<[e4 g4 b4] [d4 fs4 a4] [e4 g4 b4] [fs4 a4 cs5]>/2")
  .sound("sine").attack(0.15).release(1.2)
  .gain(0.18).room(0.5)

$: s("~ hh:3 ~ [hh:1 hh:2]").gain(0.12)
  .hpf(6000).delay(0.3).pan(rand)

$: note("e5*<4 8 4 12>").sound("pulse")
  .lpf(1200).lpenv(4).lpdecay(0.15)
  .gain(perlin.range(0.02,0.14).slow(5))