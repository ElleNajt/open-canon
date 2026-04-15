setcps(0.38)

$: note("<c3 ab2 f2 [g2 bb2]>".add(perlin.range(-0.3, 0.3)))
  .sound("sine").lpf(sine.range(55, 1100).slow(13))
  .gain(0.4).room(0.92).size(0.97)

$: note("c4 eb4 g4 c5 [g4 bb4] eb4 bb4 [g4 f4]")
  .sound("triangle").slow(2)
  .gain(sine.range(0.08, 0.35).slow(6))
  .delay(0.55).delaytime(0.375)
  .every(3, x=>x.add(5).palindrome())
  .sometimes(x=>x.add(12).gain(0.12))

$: note("[c5 ~] [~ eb5] [g5 ~] [~ bb5]".add("<0 3 5 -2>"))
  .sound("sine").slow(4)
  .lpf(perlin.range(300, 4800).slow(9))
  .pan(sine.range(0.05, 0.95).slow(5))
  .gain(0.22).fmi(perlin.range(0.2, 1.8).slow(11))

$: note("<[g5 ~] [c6 bb5] [~ eb6] [g5 ab5]>")
  .sound("sine").slow(8)
  .gain(0.14).attack(2).release(6)
  .delay(0.7).delaytime(0.75)

$: s("~ hh:1 ~ [hh:1 ~] ~ hh:1 [~ hh:3] hh:1").slow(2)
  .gain(sine.range(0.06, 0.16).slow(7))
  .pan(rand).hpf(7200)
  .every(5, x=>x.speed(0.5).crush(5))

$: note("<c2 ab1 f1 [g1 bb1]>".add(perlin.range(-0.15, 0.15)))
  .sound("sawtooth").slow(4)
  .lpf(sine.range(40, 420).slow(16))
  .gain(0.2).shape(0.55).release(6)