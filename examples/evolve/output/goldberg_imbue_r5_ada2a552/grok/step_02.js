setcps(72/60/4)

$: note("g3 gb3 e3 d3 b2 c3 d3 g2")
  .slow(2)
  .every(4, rev())
  .sound("triangle")
  .lpf(900)
  .gain(0.5)

$: note("g2 gb2 e2 d2 b1 c2 d2 g1")
  .slow(2)
  .sound("sine")
  .lpf(350)
  .delay(0.2)
  .gain(0.28)

$: stack(
  s("bd").euclid(5,16),
  s("sn").euclid(3,16).fast(2).hpf(180),
  s("hh*8? oh*4").pan(rand.range(0.2,0.8)).degradeBy(0.1)
)
.swing(0.05)
.gain(0.6)
.room(0.12)

$: n("0 7 4 2, 7 9 12 14, 2 4 7 9, 0 2 5 7")
  .scale("G:minor")
  .fast(2)
  .sound("sawtooth")
  .lpf(1800)
  .fm(0.3)
  .gain(0.38)

$: s("cp*3?, rd*5")
  .fast(3)
  .hpf(4500)
  .pan(saw.range(0.2,0.8))
  .distort(0.1)
  .gain(0.18)

$: n("7 5 3 7, 5 3 0 3, 12 10 7 5, 7 5 3 0")
  .scale("G:minor")
  .fast(2)
  .sound("pulse")
  .lpf(1200)
  .tremolo(0.4)
  .gain(0.3)