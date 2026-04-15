setcps(0.29)

$: note("<c3 ab2 f2 [g2 bb2] eb2 [f2 g2] bb1 [ab1 c2]>".add(perlin.range(-1.5, 1.5)))
  .sound("sine").lpf(sine.range(35, 1100).slow(14))
  .gain(0.4).room(0.98).size(0.97)

$: note("c4 eb4 g4 c5 [g4 bb4] eb4 bb4 [g4 f4]")
  .sound("triangle").slow(2)
  .gain(sine.range(0.07, 0.42).slow(6))
  .delay(0.65).delaytime(0.375)
  .every(3, x=>x.add(7).rev())

$: note("[c5 ~] [~ eb5] [g5 ~] [~ bb5] [~ f5] [ab5 ~] [~ g5] [eb5 ~]".add("<0 3 -2 7 5 -4 -7 2>"))
  .sound("sawtooth").slow(4)
  .lpf(perlin.range(90, 5500).slow(11))
  .gain(0.24).fmi(perlin.range(0.2, 11).slow(9))
  .pan(sine.range(0.05, 0.95).slow(7))

$: note("<[g5 ab5] [c6 bb5] [eb6 ~] [g5 f5] [ab5 ~] [bb5 c6] [~ eb6] [f5 g5]>")
  .sound("sine").slow(8)
  .gain(sine.range(0.08, 0.26).slow(13))
  .attack(4).release(10)
  .delay(0.74).delaytime(0.75)

$: s("~ [hh:1 ~] ~ hh:3 ~ [hh:1 hh:2] [~ hh:1] ~").slow(2)
  .gain(sine.range(0.06, 0.2).slow(9))
  .pan(rand).hpf(7800)
  .sometimesBy(0.6, x=>x.speed(0.15).crush(2))

$: note("<c2 ab1 f1 [g1 bb1] eb1 [f1 ab1] g1 [bb1 c2]>".add(perlin.range(-0.8, 0.8)))
  .sound("square").slow(4)
  .lpf(sine.range(20, 520).slow(16))
  .gain(0.16).shape(0.75)