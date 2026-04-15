setcps(0.31)

$: note("<c3 ab2 f2 [g2 bb2] eb2 [f2 g2] bb1 [ab1 c2]>".add(perlin.range(-1, 7)))
  .sound("sine").lpf(sine.range(80, 1200).slow(14))
  .gain(0.35).room(0.97).size(0.97)

$: note("c4 eb4 g4 c5 [g4 bb4] eb4 bb4 [g4 f4]".add("<0 5 -2 7 0 3 -4 12>"))
  .sound("triangle").slow(2)
  .gain(sine.range(0.12, 0.55).slow(6))
  .delay(0.7).delaytime(0.28)
  .every(4, x=>x.add(12).palindrome())

$: note("[c5 ~] [~ eb5] [g5 ~] [~ bb5] [~ f5] [ab5 ~] [~ g5] [eb5 ~]".add("<0 3 -2 7 5 -4 -7 2>"))
  .sound("sawtooth").slow(4)
  .lpf(perlin.range(400, 5500).slow(11)).lpq(6)
  .gain(0.19).fmi(perlin.range(3, 22).slow(7))
  .pan(sine.range(0.05, 0.95).slow(5))

$: note("<[g5 ab5] [c6 bb5] [eb6 ~] [g5 f5] [ab5 ~] [bb5 c6] [~ eb6] [f5 g5]>".add(perlin.range(-3, 11)))
  .sound("sine").slow(8)
  .gain(sine.range(0.07, 0.32).slow(13))
  .attack(2.5).release(10)
  .phaser(perlin.range(0.2, 3).slow(9))

$: s("~ [hh:1 ~] ~ hh:3 ~ [hh:1 hh:2] [~ hh:1] ~").slow(2)
  .gain(sine.range(0.07, 0.22).slow(9))
  .pan(rand).hpf(6800)
  .sometimes(x=>x.speed(perlin.range(0.5, 1.8)))

$: note("<c2 ab1 f1 [g1 bb1] eb1 [f1 ab1] g1 [bb1 c2]>".add(perlin.range(-1, 5)))
  .sound("square").slow(4)
  .lpf(sine.range(50, 700).slow(12)).shape(0.75)
  .gain(0.2).distort(perlin.range(0.0, 0.25).slow(10))