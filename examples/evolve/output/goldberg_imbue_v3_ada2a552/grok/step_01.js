setcps(72/60/4)

$: note("g3 gb3 e3 d3 b2 c3 d3 g2")
  .slow(2)
  .sound("piano")
  .lpf(sine.range(400,1400).slow(8))
  .gain(0.4)
  .room(0.2)

$: note("bb3 d4 f4 g4 bb4 c5 d5 eb5")
  .slow(2)
  .sound("triangle")
  .lpf(1500)
  .lpq(2.5)
  .gain(0.25)

$: note("eb4 g4 c5 eb5 d5 f5 ab5 g5")
  .slow(2)
  .sound("supersaw")
  .lpf(2500)
  .gain(0.3)
  .phaser(0.3)

$: stack(
  s("bd").euclid(3,8).slow(2).gain(0.25),
  s("hh*8").fast(2).gain(0.12).hpf(4000).degradeBy(0.2)
)