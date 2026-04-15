setcps(0.42)

$: note("<c3 bb2 ab2 [g2 f2]>").sound("sine")
  .lpf(sine.range(60, 900).slow(15))
  .gain(0.5).shape(0.22).release(1.5)

$: note("c4 eb4 g4 bb4 ab4 [g4 f4]".slow(3))
  .sound("sawtooth").gain(0.22)
  .lpf(perlin.range(400, 2200).slow(11))
  .delay(0.6).dt(0.375).dfb(0.55)

$: note("[c5 ~] [eb5 g5] [bb4 ab4] [~ g4] [f4 eb4] [<db5 d5> ~]".slow(5))
  .sound("sine").attack(0.3).release(2.5)
  .pan(sine.range(0.1, 0.9).slow(9))
  .room(0.75).gain(0.25)

$: note("<[c6 eb6] [bb5 ~] [ab5 g5] [~ f5] [eb5 db5] [c5 ~]>".slow(12))
  .sound("triangle").gain(0.15)
  .lpf(perlin.range(600, 4000).slow(13))
  .phaser(0.3).release(3.5)

$: s("~ [cp:3 ~] [~ rim] [~ cp:3]".slow(2))
  .gain(0.12).room(0.7)
  .pan(perlin.range(0.2, 0.8).slow(7))
  .delay(0.4).dt(0.333)

$: note("[c2 ~] [~ eb2] [~ bb1] [ab1 <g1 f1>]".slow(4))
  .sound("sawtooth").lpf(sine.range(120, 380).slow(11))
  .gain(0.3).shape(0.4).release(0.4)