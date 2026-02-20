setcps(72/60/4)

$: note("g3 gb3 e3 d3 b2 c3 d3 g2")
  .slow(2)
  .sound("triangle")
  .gain(0.4)
  .lpf(sine.range(800, 3200).slow(8))

$: note("g4 gb4 e4 d4 b3 c4 d4 g3")
  .slow(4)
  .sound("sine")
  .gain(0.25)
  .delay(0.3)

$: note("g2 gb2 e2 d2 b1 c2 d2 g1")
  .slow(1)
  .sound("square")
  .gain(0.35)
  .distort(0.15)

$: s("bd*2,cp*4").gain(0.3).pan(sine.range(0.2, 0.8).slow(16))

$: s("hh").slow(8).gain(0.15).room(0.4).pan(0.25)

$: note("d4 e4 fs4 g4").fast(2).sound("piano").gain(0.2).delaytime(0.5).delay(0.25)