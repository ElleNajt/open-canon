$: note("<e2 [b1 ~] g1 [d2 a1] [~ e2] [fs1 b1] [g1 ~] a1>").sound("sawtooth")
  .lpf(sine.range(40,1800).slow(11)).lpq(8)
  .shape(0.71).gain(0.42).room(0.55)

$: note("[e3 ~] [b2 g3] [~ fs3] [a2 d3] [e3 ~] [g3 b3] <[d3 a3] [cs3 e3] [b2 fs3] [e3 g3] [a3 cs4] [fs3 b3]>").sound("triangle")
  .delay(0.58).dt("0.375 0.25 0.5 0.333").dfb(0.52)
  .gain(0.22).pan(sine.range(0.1,0.9).slow(7))

$: note("<[e4 g4 b4] [d4 fs4 a4] [g4 b4 d5] [a4 cs5 e5] [fs4 a4 d5] [b3 e4 gs4] [cs4 e4 a4] [e4 gs4 b4] [d4 g4 b4] [e4 a4 cs5]>/2")
  .sound("sine").attack(3.5).release(14)
  .gain(0.11).room(0.8)

$: s("[~ hh:1] hh:3? hh:2 [~ hh:5]? [hh:1 ~] ~ hh:2? [~ hh:3]").rarely(x => x.speed(0.7))
  .gain(perlin.range(0.07,0.14).slow(13))
  .hpf(4800).delay(0.32).pan(rand)

$: note("e5*<3 5 4 6 3 7> [~ b5 ~] <g5 fs5 a5 d6 cs6 b5 e6 d6>").sound("pulse")
  .lpf(perlin.range(280,3200).slow(16)).lpq(6)
  .gain(0.1).delay(0.26).dt("0.25 0.333 0.375")

$: note("<~ b5 ~ e6 [~ g6] ~ [d6 ~] ~ [fs6 ~] [~ e6] ~ a5 b5 [~ cs6] d6 ~ [~ e6] ~ g6>/4").sound("sine")
  .attack(4).release(16).gain(0.08).room(0.82)