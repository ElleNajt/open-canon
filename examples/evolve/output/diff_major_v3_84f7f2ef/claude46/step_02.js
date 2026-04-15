setcps(0.45)

$: note("<c3 bb2 ab2 [g2 f2]>").sound("sine")
  .lpf(sine.range(90, 1100).slow(13))
  .gain(0.55).shape(0.15).release(1.2)

$: note("c4 eb4 g4 bb4 ab4 [g4 f4]".slow(3))
  .sound("triangle").gain(0.3)
  .delay(0.55).dt(0.333).dfb(0.5)

$: note("c5 [eb5 g5] bb4 [ab4 g4] [f4 ~] [eb5 <db5 d5>]".slow(4))
  .sound("sine").attack(0.15).release(1.8)
  .pan(sine.range(0.15, 0.85).slow(7))
  .room(0.65).gain(0.28)

$: note("<c6 [bb5 ab5] g5 [f5 eb5]>".slow(8))
  .sound("triangle").gain(0.18)
  .lpf(perlin.range(800, 3500).slow(11))
  .tremolo(0.6).tremolosync(5)
  .release(2.5)

$: s("~ [cp:3 ~] [~ rim] cp:3".slow(2))
  .gain(0.14).room(0.6)
  .pan(perlin.range(0.3, 0.7).slow(5))
  .delay(0.35).dt(0.25)

$: note("[c2 ~] [~ eb2] [bb1 ~] [ab1 <g1 f1>]".slow(4))
  .sound("sawtooth").lpf(sine.range(180, 420).slow(9))
  .gain(0.28).shape(0.35).release(0.5)