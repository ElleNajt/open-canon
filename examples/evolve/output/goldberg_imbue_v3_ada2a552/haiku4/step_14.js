setcps(72/60/4)

$: note("g3 gb3 e3 d3 b2 c3 d3 g2")
  .slow(2)
  .sound("triangle")
  .gain(0.7)
  .lpf(sine.range(180, 3200).slow(8))

$: note("g4 gb4 e4 d4 b3 c4 d4 g3")
  .slow(4)
  .sound("sine")
  .gain(0.5)
  .delay(0.4)
  .delaytime(0.3)

$: note("g2 gb2 e2 d2 b1 c2 d2 g1")
  .slow(1)
  .sound("square")
  .gain(0.65)
  .distort(0.6)

$: s("bd*2,cp*4")
  .gain(0.6)
  .pan(sine.range(0, 1).slow(6))
  .room(0.5)

$: s("hh").fast(4).gain(0.4).crush(8).lpf(sine.range(4000, 8000).slow(12))

$: note("d4 e4 fs4 g4 a4 b4")
  .fast(3)
  .sound("supersaw")
  .gain(0.45)
  .drive(0.3)