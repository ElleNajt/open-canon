setcps(80/60/4)
samples('shabda/speech:groove,pulse,evolve')

$: note("g3 bb2 d3 g2 bb1 c2 d2 g1")
  .slow(2)
  .sound("piano")
  .lpf(perlin.range(300,2000).slow(4))
  .gain(0.4)
  .room(0.3)

$: note("bb3 d4 f4 g4 bb4 c5 d5 eb5 ~")
  .slow(2)
  .every(8,rev())
  .sound("triangle")
  .lpf(saw.range(900,2600).slow(6))
  .gain(0.28)

$: note("eb4 g4 bb4 eb5 d5 f5 ab5 bb5 ~")
  .slow(2)
  .sound("supersaw")
  .lpf(cosine.range(1600,3400).slow(5))
  .gain(0.3)
  .leslie(0.4)

$: stack(
  s("bd").euclid(3,8).slow(2).gain(0.35),
  s("~sn,rim").euclid(3,16).slow(2).gain(0.25).pan(rand.range(0.3,0.8)),
  s("hh*16,oh*8").fast(4).gain(0.14).hpf(5800).degradeBy(0.3).crush(10)
).room(0.35)
.swing(0.12)
.delay(0.18)

$: note("Bb2 Eb3 G3 Bb3 Eb4")
  .slow(3)
  .sound("sawtooth")
  .lpf(750)
  .gain(0.25)
  .phaser(0.22)

$: s("groove*2 pulse evolve groove ?")
  .slow(3)
  .gain(0.2)
  .lpf(sine.range(1600,3200).slow(6))
  .pan(rand.range(0,1))
  .speed(tri.range(0.88,1.12))