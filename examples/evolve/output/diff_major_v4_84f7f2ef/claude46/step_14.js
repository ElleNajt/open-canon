setcps(0.29)

$: note("<c3 ab2 f2 [g2 bb2] eb2 [f2 g2]>".add(perlin.range(-0.8, 0.8)))
  .sound("sine").lpf(sine.range(55, 1100).slow(14))
  .gain(0.4).room(0.97).size(0.96)

$: note("c4 eb4 g4 c5 [g4 bb4] eb4 bb4 [g4 f4]")
  .sound("triangle").slow(2)
  .gain(sine.range(0.08, 0.34).slow(6))
  .delay(0.55).delaytime(0.375)
  .every(3, x=>x.add(5).palindrome())

$: note("[c5 ~] [~ eb5] [g5 ~] [~ bb5]".add("<0 3 -2 7 5 -4 -7 2>"))
  .sound("sawtooth").slow(4)
  .lpf(perlin.range(180, 3800).slow(11))
  .gain(0.19).fmi(perlin.range(0.2, 6).slow(9))
  .pan(sine.range(0.08, 0.92).slow(7))

$: note("<[g5 ab5] [c6 bb5] [eb6 ~] [g5 f5] [ab5 ~] [bb5 c6] [~ eb6] [f5 g5]>")
  .sound("sine").slow(8)
  .gain(0.15).attack(3).release(8)
  .delay(0.7).delaytime(0.75)

$: s("~ [hh:1 ~] ~ hh:3 ~ [hh:1 hh:2] [~ hh:1] ~").slow(2)
  .gain(sine.range(0.06, 0.2).slow(9))
  .pan(rand).hpf(7200)
  .sometimesBy(0.45, x=>x.speed(0.25).crush(3))

$: note("<c2 ab1 f1 [g1 bb1] eb1 [f1 ab1] g1 [bb1 c2]>".add(perlin.range(-0.5, 0.5)))
  .sound("square").slow(4)
  .lpf(sine.range(30, 550).slow(16))
  .gain(0.16).shape(0.65)