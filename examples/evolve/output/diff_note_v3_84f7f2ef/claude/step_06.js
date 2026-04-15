$: note("<e2 [b1 ~] g1 d2 [~ a1] e2 [fs1 b1]>").sound("sawtooth")
  .lpf(sine.range(60,2200).slow(13))
  .shape(0.28).gain(0.4).room(0.55)

$: note("[e3 b2] [~ g3] fs3 [a2 ~] [e3 d3] ~").sound("triangle")
  .delay(0.6).dt(0.333).dfb(0.52)
  .gain(0.27).pan(sine.range(0.15,0.85).slow(9))

$: note("<[e4 g4 b4] [d4 fs4 a4] [g4 b4 e5] [a4 cs5 fs5] [e4 gs4 b4] [fs4 a4 d5]>/2")
  .sound("sine").attack(0.5).release(3.5)
  .gain(0.19).room(0.5)

$: s("[~ hh:3] hh:1 [~ hh:5] [hh:2 ~] ~ hh:4").gain(0.14)
  .hpf(5200).delay(0.45).pan(rand)

$: note("e5*<3 5 4 7 5 6>").sound("pulse")
  .lpf(1400).lpenv(5).lpdecay(0.25)
  .gain(perlin.range(0.07,0.15).slow(11))

$: note("<b5 ~ fs6 e6 ~ g6 a6 ~ d6 ~ cs6>/4").sound("sine")
  .attack(0.6).release(4).gain(0.12)
  .delay(0.58).room(0.5)