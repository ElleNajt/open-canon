setcps(0.31)

$: note("<c3 ab2 f2 [g2 bb2]>".add(perlin.range(-1.2, 1.2)))
  .sound("sine").lpf(sine.range(40, 900).slow(14))
  .gain(0.38).room(0.97).size(0.95)

$: note("c4 eb4 g4 c5 [g4 bb4] eb4 bb4 [g4 f4]")
  .sound("triangle").slow(2)
  .gain(sine.range(0.07, 0.3).slow(6))
  .delay(0.5).delaytime(0.375)
  .every(4, x=>x.add(7).rev())

$: note("[c5 ~] [~ eb5] [g5 ~] [~ bb5]".add("<0 3 5 -2>"))
  .sound("sawtooth").slow(4)
  .lpf(perlin.range(200, 4000).slow(11))
  .gain(0.17).fmi(perlin.range(0.3, 8).slow(13))
  .pan(sine.range(0.08, 0.92).slow(5))

$: note("<[g5 ab5] [c6 bb5] [eb6 ~] [g5 f5]>")
  .sound("sine").slow(8)
  .gain(0.13).attack(2.5).release(7)
  .delay(0.65).delaytime(0.625)

$: s("~ [hh:1 ~] ~ hh:3 ~ [hh:1 hh:2] [~ hh:1] ~").slow(2)
  .gain(sine.range(0.06, 0.18).slow(7))
  .pan(rand).hpf(7500)
  .sometimesBy(0.35, x=>x.speed(0.35).crush(4))

$: note("<c2 ab1 f1 [g1 bb1]>".add(perlin.range(-0.6, 0.6)))
  .sound("square").slow(4)
  .lpf(sine.range(25, 350).slow(16))
  .gain(0.14).shape(0.7)