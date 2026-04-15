setcps(0.44)

$: note("<c3 ab2 f2 [g2 bb2]>".add(perlin.range(-0.15, 0.15)))
  .sound("sine").lpf(sine.range(70, 1100).slow(13))
  .gain(0.4).room(0.85).size(0.9)

$: note("c4 eb4 g4 c5 [g4 bb4] eb4 bb4 [g4 f4]")
  .sound("triangle").slow(2)
  .gain(sine.range(0.12, 0.44).slow(6))
  .delay(0.45).delaytime(0.375)
  .every(4, x=>x.add(7).rev())

$: note("[c5 ~] [~ eb5] [g5 ~] [~ bb5]".add("<0 3 5 -2>"))
  .sound("sine").slow(4)
  .lpf(perlin.range(400, 4800).slow(9))
  .pan(sine.range(0.05, 0.95).slow(5))
  .gain(0.26).fmi(perlin.range(0.05, 0.7).slow(11))

$: note("<[g5 ~] [c6 bb5] [~ eb6] [g5 ab5]>")
  .sound("sine").slow(8)
  .gain(0.18).attack(1.2).release(4)
  .delay(0.7).delaytime(0.625)

$: s("~ hh:1 ~ [hh:1 ~] ~ hh:1 [~ hh:3] hh:1").slow(2)
  .gain(sine.range(0.06, 0.2).slow(7))
  .pan(rand).hpf(6200)
  .sometimes(x=>x.speed(0.6).crush(8))

$: note("<c2 ab1 f1 [g1 bb1]>").sound("sawtooth").slow(4)
  .lpf(sine.range(50, 440).slow(14))
  .gain(0.24).shape(0.45).release(4)