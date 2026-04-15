setcps(0.31)

$: note("<c3 ab2 f2 [g2 bb2]>".add(perlin.range(-0.7, 0.7)))
  .sound("sine").lpf(sine.range(35, 900).slow(16))
  .gain(0.38).room(0.98).size(0.99)

$: note("c4 eb4 g4 c5 [g4 bb4] eb4 bb4 [g4 f4]")
  .sound("triangle").slow(2)
  .gain(sine.range(0.06, 0.3).slow(6))
  .delay(0.6).delaytime(0.375)
  .every(4, x=>x.add(7).rev())

$: note("[c5 ~] [~ eb5] [g5 ~] [~ bb5]".add("<0 3 5 -2>"))
  .sound("sine").slow(4)
  .lpf(perlin.range(200, 5000).slow(9))
  .pan(sine.range(0.05, 0.95).slow(5))
  .gain(0.2).fmi(perlin.range(0.1, 4.5).slow(13))

$: note("<[g5 ~] [c6 bb5] [~ eb6] [g5 ab5]>")
  .sound("sine").slow(8)
  .gain(0.12).attack(4).release(10)
  .delay(0.75).delaytime(0.75)

$: s("~ [hh:1 ~] ~ hh:3 ~ [hh:1 hh:2] [~ hh:1] ~").slow(2)
  .gain(sine.range(0.06, 0.14).slow(7))
  .pan(rand).hpf(9000)
  .sometimes(x=>x.speed(0.5).crush(4))

$: note("<c2 ab1 f1 [g1 bb1]>".add(perlin.range(-0.4, 0.4)))
  .sound("sawtooth").slow(4)
  .lpf(sine.range(25, 380).slow(16))
  .gain(0.18).shape(0.7)