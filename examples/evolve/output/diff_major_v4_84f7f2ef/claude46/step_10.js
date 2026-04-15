setcps(0.28)

$: note("<c3 ab2 f2 [g2 bb2]>".add(perlin.range(-0.9, 0.9)))
  .sound("sine").lpf(sine.range(30, 700).slow(14))
  .gain(0.4).room(0.99).size(0.99)

$: note("c4 eb4 g4 c5 [g4 bb4] eb4 bb4 [g4 f4]")
  .sound("triangle").slow(2)
  .gain(sine.range(0.06, 0.28).slow(6))
  .delay(0.55).delaytime(0.375)
  .every(4, x=>x.add(7).rev())

$: note("[c5 ~] [~ eb5] [g5 ~] [~ bb5]".add("<0 3 5 -2>"))
  .sound("sawtooth").slow(4)
  .lpf(perlin.range(180, 3200).slow(11))
  .gain(0.15).fmi(perlin.range(0.2, 6).slow(13))
  .pan(sine.range(0.1, 0.9).slow(5))

$: note("<[g5 ~] [c6 bb5] [~ eb6] [g5 ab5]>")
  .sound("sine").slow(8)
  .gain(0.11).attack(3).release(8)
  .delay(0.7).delaytime(0.625)

$: s("~ [hh:1 ~] ~ hh:3 ~ [hh:1 hh:2] [~ hh:1] ~").slow(2)
  .gain(sine.range(0.06, 0.16).slow(7))
  .pan(rand).hpf(8500)
  .sometimesBy(0.3, x=>x.speed(0.4).crush(3))

$: note("<c2 ab1 f1 [g1 bb1]>".add(perlin.range(-0.5, 0.5)))
  .sound("square").slow(4)
  .lpf(sine.range(20, 300).slow(16))
  .gain(0.13).shape(0.65)