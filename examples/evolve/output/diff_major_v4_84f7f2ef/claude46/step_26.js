setcps(0.29)

$: note("<c3 ab2 f2 [g2 bb2] eb2 [f2 g2] bb1 [ab1 c2]>".add(perlin.range(-2, 2)))
  .sound("sine").lpf(sine.range(35, 900).slow(16))
  .gain(0.38).room(0.99).size(0.99)

$: note("c4 eb4 g4 c5 [g4 bb4] eb4 bb4 [g4 f4]".add("<0 0 5 -2 0 3 -4 0>"))
  .sound("triangle").slow(2)
  .gain(sine.range(0.1, 0.42).slow(6))
  .delay(0.65).delaytime(0.375)
  .every(3, x=>x.add(7).rev())

$: note("[c5 ~] [~ eb5] [g5 ~] [~ bb5] [~ f5] [ab5 ~] [~ g5] [eb5 ~]".add("<0 3 -2 7 5 -4 -7 2>"))
  .sound("sawtooth").slow(4)
  .lpf(perlin.range(180, 4800).slow(11)).lpq(4.5)
  .gain(0.17).fmi(perlin.range(1, 18).slow(9))
  .pan(sine.range(0.08, 0.92).slow(7))

$: note("<[g5 ab5] [c6 bb5] [eb6 ~] [g5 f5] [ab5 ~] [bb5 c6] [~ eb6] [f5 g5]>".add(perlin.range(-5, 5)))
  .sound("sine").slow(8)
  .gain(sine.range(0.06, 0.28).slow(13))
  .attack(3).release(12)
  .phaser(sine.range(0.15, 1.2).slow(11))

$: s("~ [hh:1 ~] ~ hh:3 ~ [hh:1 hh:2] [~ hh:1] ~").slow(2)
  .gain(sine.range(0.06, 0.18).slow(9))
  .pan(rand).hpf(7200)
  .sometimesBy(0.7, x=>x.speed(0.06).crush(3))

$: note("<c2 ab1 f1 [g1 bb1] eb1 [f1 ab1] g1 [bb1 c2]>".add(perlin.range(-2, 2)))
  .sound("square").slow(4)
  .lpf(sine.range(30, 580).slow(16)).shape(0.7)
  .gain(0.18).distort(perlin.range(0.0, 0.3).slow(12))