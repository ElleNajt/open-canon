setcps(72/60/4)

$: note("g3 gb3 e3 d3 b2 c3 d3 g2 bb2")
  .slow(2)
  .sound("piano")
  .lpf(sine.range(350,1500).slow(4))
  .gain(0.4)
  .delay(0.18)

$: note("bb3 d4 f4 g4 bb4 c5 d5 eb5 ~")
  .slow(2)
  .sound("triangle")
  .lpf(1400)
  .vowel("a o i")
  .gain(0.25)

$: note("eb4 g4 c5 eb5 d5 f5 ab5 g5 ~")
  .slow(2)
  .sound("supersaw")
  .lpf(sine.range(1800,3200).slow(6))
  .gain(0.28)
  .phaser(0.25)

$: stack(
  s("bd").euclid(3,8).slow(2).gain(0.3),
  s("~sn").euclid(2,8).slow(2).gain(0.2).pan(0.7),
  s("hh*16").fast(4).gain(0.11).hpf(5500).degradeBy(0.25).crush(11)
).swing(0.07)

$: note("Bb2*2 Eb3*2 G3*2")
  .slow(2)
  .sound("sawtooth")
  .lpf(550)
  .lpq(1.4)
  .gain(0.2)
  .room(0.55)