setcps(76/60/4)
samples('shabda/speech:groove,pulse,evolve')

$: note("g3 gb3 e3 d3 b2 c3 d3 g2 bb2")
  .slow(2)
  .sound("piano")
  .lpf(tri.range(350,1500).slow(4))
  .gain(0.42)
  .tremolo(0.25)

$: note("bb3 d4 f4 g4 bb4 c5 d5 eb5 ~")
  .slow(2)
  .every(8,rev())
  .sound("triangle")
  .lpf(1400)
  .vowel("a o i")
  .gain(0.25)

$: note("eb4 g4 c5 eb5 d5 f5 ab5 g5 ~")
  .slow(2)
  .sound("supersaw")
  .lpf(sine.range(1800,3200).slow(6))
  .gain(0.28)
  .phaser(0.3)

$: stack(
  s("bd").euclid(3,8).slow(2).gain(0.32),
  s("~sn").euclid(2,8).slow(2).gain(0.22).pan(0.7),
  s("hh*16").fast(4).gain(0.12).hpf(5500).degradeBy(0.25).crush(11)
).room(0.25)
.swing(0.08)

$: note("Bb2 Eb3 G3 Bb2")
  .slow(2)
  .sound("sawtooth")
  .lpf(600)
  .gain(0.22)
  .distort(0.08)

$: s("groove*2 pulse evolve ?")
  .slow(4)
  .gain(0.15)
  .lpf(2000)
  .pan(rand.range(0,1))
  .chop(8)