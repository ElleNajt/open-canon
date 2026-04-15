setcps(0.29)

$: note("<c3 ab2 f2 [g2 bb2]>".add(perlin.range(-0.8, 0.8)))
  .sound("sine").lpf(sine.range(60, 1100).slow(14))
  .gain(0.4).room(0.97).size(0.95)

$: note("c4 eb4 g4 c5 [g4 bb4] eb4 bb4 [g4 f4]")
  .sound("triangle").slow(2)
  .gain(sine.range(0.08, 0.28).slow(6))
  .delay(0.55).delaytime(0.375)
  .every(4, x=>x.add(7).rev())

$: note("[c5 ~] [~ eb5] [g5 ~] [~ bb5]".add("<0 3 5 -2>"))
  .sound("sawtooth").slow(4)
  .lpf(perlin.range(300, 3500).slow(11))
  .gain(0.19).fmi(perlin.range(0.5, 6).slow(13))
  .pan(sine.range(0.1, 0.9).slow(5))

$: note("<[g5 ab5] [c6 bb5] [eb6 ~] [g5 f5]>")
  .sound("sine").slow(8)
  .gain(0.15).attack(2).release(6)
  .delay(0.6).delaytime(0.625)

$: s("~ [hh:1 ~] ~ hh:3 ~ [hh:1 hh:2] [~ hh:1] ~").slow(2)
  .gain(sine.range(0.06, 0.19).slow(7))
  .pan(rand).hpf(7000)
  .sometimesBy(0.4, x=>x.speed(0.4).crush(5))

$: note("<c2 ab1 f1 [g1 bb1]>".add(perlin.range(-0.5, 0.5)))
  .sound("square").slow(4)
  .lpf(sine.range(30, 400).slow(16))
  .gain(0.16).shape(0.65)