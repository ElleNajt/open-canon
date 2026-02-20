setcps(88/60/4)
samples('shabda/speech:groove,pulse,evolve')

$: note("g2 bb1 d2 g1 c1 d1 bb0 g0")
  .slow(2)
  .sound("piano")
  .lpf(perlin.range(250,2200).slow(3))
  .lpq(2.5)
  .gain(0.42)

$: note("bb3 d4 f4 g4 bb4 c5 d5 eb5 ~")
  .slow(2)
  .every(8,rev())
  .sound("triangle")
  .lpf(saw.range(900,2600).slow(6))
  .detune(perlin.range(-10,10))

$: note("eb4 g4 bb4 eb5 d5 f5 ab5 bb5 ~")
  .slow(2)
  .sound("supersaw")
  .lpf(cosine.range(1600,3400).slow(5))
  .gain(0.32)
  .distort(0.12)

$: stack(
  s("bd").euclid(5,16).slow(2).gain(0.36),
  s("~sn,rim,cp").euclid(3,16).slow(2).gain(0.26).pan(rand.range(0.2,0.7)),
  s("hh*16,oh*8").fast(4).gain(0.15).hpf(6200).degradeBy(0.35).crush(9)
).room(0.4)
.swing(0.14)
.delay(0.22)
.dt(0.33)

$: note("Bb2 Eb3 G3 Bb3 Eb4 Ab4 Db4")
  .slow(3)
  .sound("pulse")
  .fm(0.45)
  .lpf(820)
  .gain(0.27)

$: s("groove evolve*2 pulse ~ groove?")
  .slow(2.5)
  .gain(0.23)
  .lpf(sine.range(1400,3600).slow(5))
  .chop(7)
  .speed(tri.range(0.9,1.1))