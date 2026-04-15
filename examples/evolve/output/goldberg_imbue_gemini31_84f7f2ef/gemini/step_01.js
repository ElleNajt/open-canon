samples('shabda/speech:goldberg,variation')

setcps(60/60/4)

$: note("g2 gb2 e2 d2 b1 c2 d2 g1")
  .slow(4)
  .sound("sine")
  .fmh(3)
  .fm(sine.range(0.2, 2.5).slow(8))
  .room(0.8)

$: note("g4 gb4 e4 d4 b3 c4 d4 g3")
  .slow(4)
  .jux(x => x.rev())
  .sound("triangle")
  .delay(0.6)
  .dt(0.75)

$: s("bd(3,8) [~ rim]")
  .room(0.2)
  .gain(0.7)
  .lpf(1500)

$: s("hh*8")
  .often(x => x.hurry(2))
  .pan(sine.slow(2))
  .gain(0.5)

$: s("goldberg variation")
  .slow(4)
  .chop(16)
  .room(0.8)
  .gain(0.8)