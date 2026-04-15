setcps(0.31)

$: note("<c3 ab2 f2 [g2 bb2] eb2 [f2 g2] bb1 [ab1 c2]>".add(perlin.range(-2, 2)))
  .sound("sine").lpf(sine.range(40, 900).slow(14))
  .gain(0.38).room(0.99).size(0.99)

$: note("c4 eb4 g4 c5 [g4 bb4] eb4 bb4 [g4 f4]")
  .sound("triangle").slow(2)
  .gain(sine.range(0.1, 0.45).slow(6))
  .delay(0.7).delaytime(0.375)
  .every(3, x=>x.add(7).rev())

$: note("[c5 ~] [~ eb5] [g5 ~] [~ bb5] [~ f5] [ab5 ~] [~ g5] [eb5 ~]".add("<0 3 -2 7 5 -4 -7 2>"))
  .sound("sawtooth").slow(4)
  .lpf(perlin.range(120, 4800).slow(11))
  .gain(0.21).fmi(perlin.range(0.5, 14).slow(9))
  .pan(sine.range(0.08, 0.92).slow(7))

$: note("<[g5 ab5] [c6 bb5] [eb6 ~] [g5 f5] [ab5 ~] [bb5 c6] [~ eb6] [f5 g5]>")
  .sound("sine").slow(8)
  .gain(sine.range(0.07, 0.32).slow(13))
  .attack(3.5).release(12)
  .delay(0.78).delaytime(0.75)

$: s("~ [hh:1 ~] ~ hh:3 ~ [hh:1 hh:2] [~ hh:1] ~").slow(2)
  .gain(sine.range(0.06, 0.22).slow(9))
  .pan(rand).hpf(7200)
  .sometimesBy(0.55, x=>x.speed(0.12).crush(3))

$: note("<c2 ab1 f1 [g1 bb1] eb1 [f1 ab1] g1 [bb1 c2]>".add(perlin.range(-1.5, 1.5)))
  .sound("square").slow(4)
  .lpf(sine.range(25, 580).slow(16))
  .gain(0.18).shape(0.7)