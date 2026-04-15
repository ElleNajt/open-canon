setcps(0.31)

$: note("<c3 ab2 f2 [g2 bb2]>".add(perlin.range(-1.2, 1.2)))
  .sound("sine").lpf(sine.range(40, 900).slow(16))
  .gain(0.38).room(0.98).size(0.97)

$: note("c4 eb4 g4 c5 [g4 bb4] eb4 bb4 [g4 f4]")
  .sound("triangle").slow(2)
  .gain(sine.range(0.07, 0.32).slow(6))
  .delay(0.6).delaytime(0.375)
  .every(3, x=>x.add(5).palindrome())

$: note("[c5 ~] [~ eb5] [g5 ~] [~ bb5]".add("<0 3 -2 7 5 -4>"))
  .sound("sawtooth").slow(4)
  .lpf(perlin.range(200, 4200).slow(13))
  .gain(0.21).fmi(perlin.range(0.3, 8).slow(11))
  .pan(sine.range(0.05, 0.95).slow(7))

$: note("<[g5 ab5] [c6 bb5] [eb6 ~] [g5 f5] [ab5 ~] [bb5 c6]>")
  .sound("sine").slow(8)
  .gain(0.17).attack(2.5).release(7)
  .delay(0.65).delaytime(0.75)

$: s("~ [hh:1 ~] ~ hh:3 ~ [hh:1 hh:2] [~ hh:1] ~").slow(2)
  .gain(sine.range(0.06, 0.22).slow(9))
  .pan(rand).hpf(6500)
  .sometimesBy(0.5, x=>x.speed(0.3).crush(4))

$: note("<c2 ab1 f1 [g1 bb1] eb1 [f1 ab1]>".add(perlin.range(-0.7, 0.7)))
  .sound("square").slow(4)
  .lpf(sine.range(25, 500).slow(14))
  .gain(0.18).shape(0.7)