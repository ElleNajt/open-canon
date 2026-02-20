setcps(72/60/4)

$: note("g3 gb3 e3 d3 b2 c3 d3 g2")
  .slow(2)
  .sound("triangle")
  .gain(0.75)
  .lpf(sine.range(250, 2400).slow(6))

$: note("g4 gb4 e4 d4 b3 c4 d4 g3")
  .slow(4)
  .sound("sine")
  .gain(0.45)
  .delay(0.35)
  .delaytime(0.25)

$: note("g2 gb2 e2 d2 b1 c2 d2 g1")
  .slow(1)
  .sound("square")
  .gain(0.6)
  .distort(0.45)

$: s("bd*2,cp*4")
  .gain(0.55)
  .pan(sine.range(0.1, 0.9).slow(8))
  .room(0.4)

$: s("hh").fast(3).gain(0.35).room(0.6).phaser(sine.range(1, 4).slow(10))

$: note("d4 e4 fs4 g4")
  .fast(2)
  .sound("supersaw")
  .gain(0.4)
  .fmi(sine.range(3, 7).slow(10))