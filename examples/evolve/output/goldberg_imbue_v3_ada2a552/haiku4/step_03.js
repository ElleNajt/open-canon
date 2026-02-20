setcps(72/60/4)

$: note("g3 gb3 e3 d3 b2 c3 d3 g2")
  .slow(2)
  .sound("triangle")
  .gain(0.5)
  .lpf(sine.range(600, 2400).slow(8))
  .lpq(4)

$: note("g4 gb4 e4 d4 b3 c4 d4 g3")
  .slow(4)
  .sound("sine")
  .gain(0.3)
  .delay(0.25)
  .ring(0.4)

$: note("g2 gb2 e2 d2 b1 c2 d2 g1")
  .slow(1)
  .sound("square")
  .gain(0.4)
  .drive(0.3)

$: s("bd*2,cp*4").gain(0.35).pan(sine.range(0.15, 0.85).slow(12)).room(0.15).delay(0.15)

$: s("hh").slow(8).gain(0.2).room(0.35).pan(cosine.range(0.3, 0.7).slow(16)).phaser(4)

$: note("d4 e4 fs4 g4").fast(2).sound("piano").gain(0.25).slide(0.05)