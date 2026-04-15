setcps(0.33)

$: note("<c3 ab2 f2 [g2 bb2]>".add(perlin.range(-0.5, 0.5)))
  .sound("sine").lpf(sine.range(40, 1100).slow(14))
  .gain(0.4).room(0.97).size(0.99)

$: note("c4 eb4 g4 c5 [g4 bb4] eb4 bb4 [g4 f4]")
  .sound("triangle").slow(2)
  .gain(sine.range(0.07, 0.34).slow(6))
  .delay(0.55).delaytime(0.375)
  .every(4, x=>x.add(5).palindrome())
  .sometimes(x=>x.add(12).gain(0.08))

$: note("[c5 ~] [~ eb5] [g5 ~] [~ bb5]".add("<0 3 5 -2>"))
  .sound("sine").slow(4)
  .lpf(perlin.range(300, 6000).slow(9))
  .pan(sine.range(0.08, 0.92).slow(5))
  .gain(0.22).fmi(perlin.range(0.2, 3.1).slow(13))

$: note("<[g5 ~] [c6 bb5] [~ eb6] [g5 ab5]>")
  .sound("sine").slow(8)
  .gain(0.14).attack(3).release(9)
  .delay(0.7).delaytime(0.75)

$: s("~ [hh:1 ~] ~ hh:3 ~ [hh:1 hh:2] [~ hh:1] ~").slow(2)
  .gain(sine.range(0.06, 0.16).slow(7))
  .pan(rand).hpf(8000)
  .sometimes(x=>x.speed(0.6).crush(5))

$: note("<c2 ab1 f1 [g1 bb1]>".add(perlin.range(-0.3, 0.3)))
  .sound("sawtooth").slow(4)
  .lpf(sine.range(30, 420).slow(16))
  .gain(0.2).shape(0.65)