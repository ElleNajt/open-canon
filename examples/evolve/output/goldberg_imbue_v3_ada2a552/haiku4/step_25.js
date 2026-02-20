setcps(72/60/4)

$: note("g3 gb3 e3 d3 b2 c3 d3 g2")
  .slow(2)
  .sound("triangle")
  .gain(0.75)
  .lpf(sine.range(200, 3500).slow(8))

$: note("g4 gb4 e4 d4 b3 c4 d4 g3")
  .slow(4)
  .sound("sine")
  .gain(0.55)
  .lpenv(sine.range(0.5, 2).slow(6))
  .lpdecay(0.8)

$: note("g2 gb2 e2 d2 b1 c2 d2 g1")
  .slow(1)
  .sound("square")
  .gain(0.7)
  .drive(sine.range(0.2, 0.6).slow(10))

$: s("bd*2,cp*4")
  .gain(0.65)
  .pan(sine.range(0.2, 0.8).slow(6))
  .delay(0.35)

$: s("hh").fast(8).gain(0.4).phaser(sine.range(0.5, 3).slow(7))

$: note("[d4 e4] [fs4 g4] [a4 b4]")
  .fast(3)
  .sound("supersaw")
  .fmi(sine.range(1.5, 4).slow(12))
  .room(0.45)