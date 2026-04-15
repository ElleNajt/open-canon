setcps(0.38)

$: note("<c3 bb2 ab2 [g2 f2]>").sound("sine")
  .lpf(sine.range(50, 1100).slow(16))
  .gain(0.48).shape(0.28).release(1.8)

$: note("c4 eb4 g4 bb4 ab4 [g4 f4]".slow(3))
  .sound("sawtooth").gain(0.2)
  .lpf(perlin.range(300, 2600).slow(11))
  .delay(0.55).dt(0.4).dfb(0.5)

$: note("[c5 ~] [eb5 g5] [bb4 ab4] [~ g4] [f4 eb4] [<db5 d5> ~]".slow(5))
  .sound("sine").attack(0.4).release(3)
  .pan(sine.range(0.05, 0.95).slow(7))
  .room(0.8).gain(0.23)

$: note("<[c6 eb6] [bb5 ~] [ab5 g5] [~ f5] [eb5 db5] [c5 ~]>".slow(12))
  .sound("triangle").gain(0.13)
  .lpf(perlin.range(500, 5000).slow(14))
  .penv(3).pdecay(1.2)

$: s("~ [cp:3 ~] [~ rim] [~ cp:3]".slow(2))
  .gain(0.1).room(0.65)
  .delay(0.35).dt(0.375)
  .hpf(perlin.range(800, 3500).slow(9))

$: note("[c2 ~] [~ eb2] [~ bb1] [ab1 <g1 f1>]".slow(4))
  .sound("sawtooth").lpf(sine.range(90, 420).slow(13))
  .gain(0.28).shape(0.45).fmi(perlin.range(0.1, 1.8).slow(11))