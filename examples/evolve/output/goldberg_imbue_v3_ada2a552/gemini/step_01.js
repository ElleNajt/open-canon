setcps(72/60/4)

$: note("g3 gb3 e3 d3 b2 c3 d3 g2")
  .slow(2)
  .sound("sawtooth")
  .lpf(100)
  .lpenv(800)
  .gain(0.4)

$: note("g5 gb5 e5 d5 b4 c5 d5 g4")
  .fast(4)
  .sound("square")
  .gain(0.2)
  .delay(0.5)
  .lpf(2000)

$: note("g2 gb2 e2 d2 b1 c2 d2 g1")
  .slow(2)
  .sound("supersaw")
  .gain(0.25)
  .attack(1)
  .lpf(600)

$: stack(
    s("bd").euclid(3, 8),
    s("[~ cp]*4").slow(2)
  )
  .gain(0.7)
  .crush(8)
  .lpf(6000)

$: s("hh*16")
  .gain(0.3)
  .hpf(9000)
  .pan(perlin.slow(3).range(0.2, 0.8))