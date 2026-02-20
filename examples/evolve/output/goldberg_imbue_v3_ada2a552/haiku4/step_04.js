setcps(72/60/4)

$: note("g3 gb3 e3 d3 b2 c3 d3 g2")
  .slow(2)
  .sound("triangle")
  .gain(0.6)
  .lpf(sine.range(400, 1800).slow(6))

$: note("g4 gb4 e4 d4 b3 c4 d4 g3")
  .slow(4)
  .sound("sine")
  .gain(0.35)
  .delay(0.3)
  .lpq(3)

$: note("g2 gb2 e2 d2 b1 c2 d2 g1")
  .slow(1)
  .sound("square")
  .gain(0.5)
  .distort(0.2)

$: s("bd*2,cp*4").gain(0.4).pan(sine.range(0.2, 0.8).slow(10)).room(0.2)

$: s("hh").slow(8).gain(0.25).room(0.4).phaser(3)

$: note("d4 e4 fs4 g4").fast(2).sound("piano").gain(0.3).tremolo(0.4)