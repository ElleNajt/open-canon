setcps(0.42)

$: note("<c3 ab2 f2 [g2 bb2]>".add(perlin.range(-0.2, 0.2)))
  .sound("sine").lpf(sine.range(60, 900).slow(11))
  .gain(0.38).room(0.9).size(0.95)

$: note("c4 eb4 g4 c5 [g4 bb4] eb4 bb4 [g4 f4]")
  .sound("triangle").slow(2)
  .gain(sine.range(0.1, 0.4).slow(6))
  .delay(0.5).delaytime(0.375)
  .every(3, x=>x.add(5).palindrome())
  .sometimes(x=>x.add(12).gain(0.15))

$: note("[c5 ~] [~ eb5] [g5 ~] [~ bb5]".add("<0 3 5 -2>"))
  .sound("sine").slow(4)
  .lpf(perlin.range(350, 5200).slow(9))
  .pan(sine.range(0.08, 0.92).slow(5))
  .gain(0.24).fmi(perlin.range(0.1, 1.2).slow(13))

$: note("<[g5 ~] [c6 bb5] [~ eb6] [g5 ab5]>")
  .sound("sine").slow(8)
  .gain(0.16).attack(1.5).release(5)
  .delay(0.65).delaytime(0.75)

$: s("~ hh:1 ~ [hh:1 ~] ~ hh:1 [~ hh:3] hh:1").slow(2)
  .gain(sine.range(0.06, 0.18).slow(7))
  .pan(rand).hpf(6800)
  .every(5, x=>x.speed(0.5).crush(6))

$: note("<c2 ab1 f1 [g1 bb1]>")
  .sound("sawtooth").slow(4)
  .lpf(sine.range(45, 380).slow(16))
  .gain(0.22).shape(0.5).release(5)