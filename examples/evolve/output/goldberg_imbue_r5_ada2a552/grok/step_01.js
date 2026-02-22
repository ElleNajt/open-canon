setcps(72/60/4)

$: note("g3 gb3 e3 d3 b2 c3 d3 g2")
  .slow(2)
  .sound("triangle")
  .lpf(900)
  .lpq(2.5)
  .gain(0.5)

$: note("g2 gb2 e2 d2 b1 c2 d2 g1")
  .slow(2)
  .sound("sine")
  .lpf(350)
  .gain(0.28)
  .room(0.45)

$: stack(
  s("bd").euclid(5,16),
  s("sn").euclid(3,16).fast(2).hpf(180),
  s("hh*16?").pan(rand.range(0.25,0.75))
)
.swing(0.03)
.gain(0.6)
.room(0.12)

$: n("0 7 4 2, 7 9 12 14, 2 4 7 9, 0 2 5 7")
  .scale("G:minor")
  .fast(2)
  .sound("sawtooth")
  .lpf(1800)
  .gain(0.38)

$: s("cp*3?, rd*5")
  .fast(3)
  .hpf(4500)
  .pan(saw.range(0.2,0.8))
  .gain(0.18)
  .room(0.25)