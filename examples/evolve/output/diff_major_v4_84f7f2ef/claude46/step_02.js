setcps(0.45)

$: note("<c3 ab2 f2 [g2 bb2]>").sound("sine")
  .lpf(sine.range(140, 1100).slow(13))
  .gain(0.5).room(0.7).attack(0.4)

$: note("c4 eb4 g4 c5 [g4 bb4] eb4 bb4 [g4 f4]")
  .sound("triangle").slow(2)
  .gain(sine.range(0.12, 0.48).slow(6))
  .delay(0.45).delaytime(0.375)
  .every(4, x=>x.add(7).slow(2))

$: note("[c5 ~] [~ eb5] [g5 ~] [~ bb5]".add("<0 3 5 -2>"))
  .sound("sine").slow(4)
  .lpf(perlin.range(600, 2400).slow(9))
  .pan(sine.range(0.15, 0.85).slow(5))
  .gain(0.22)

$: note("<g5 [c6 bb5] eb6 [~ g5]>")
  .sound("triangle").slow(8)
  .gain(0.14).attack(0.6).release(2)
  .delay(0.6).delaytime(0.75)

$: s("~ hh:1 ~ [hh:1 ~] ~ hh:1 [~ hh:3] hh:1").slow(2)
  .gain(sine.range(0.06, 0.16).slow(7))
  .pan(rand).hpf(6500).room(0.35)

$: note("<c2 ab1 f1 [g1 bb1]>").sound("sawtooth").slow(4)
  .lpf(sine.range(60, 420).slow(11))
  .gain(0.2).shape(0.35).release(2.5)