setcps(92/60/4)
samples('shabda/speech:groove,pulse,evolve,grok,mutate,change')

$: note("g2 bb1 d2 [g1 c1] d1 bb0 g0 c1")
  .slow(2)
  .sound("piano")
  .lpf(perlin.range(200,2500).slow(4))
  .detune(perlin.range(-20,20).slow(8))
  .gain(0.45)

$: note("bb3 d4 f4 [g4 bb4] c5 d5 eb5 ~ bb4")
  .slow(2)
  .every(4,rev())
  .sound("triangle")
  .lpf(saw.range(800,2800).slow(4))
  .phaser(sine.range(0.2,0.8).slow(2))

$: note("eb4 g4 bb4 [eb5 d5] f5 ab5 [bb5 ~]")
  .slow(2)
  .sound("supersaw")
  .lpf(cosine.range(1400,3600).slow(4))
  .gain(0.35)
  .leslie(sine.range(0.2,0.6))

$: stack(
  s("bd").euclid(7,16).slow(2).gain(0.4),
  s("~sn,rim,cp").euclid(5,16).slow(2).gain(0.28).pan(rand.range(0.1,0.8)),
  s("hh*16,oh*8").fast(4).gain(0.18).hpf(6000).degradeBy(0.4).crush(8)
).room(0.5)
.delay(0.25)
.dt(0.35)
.swing(0.16)
.phaser(0.3)

$: note("Bb2 Eb3 G3 [Bb3 Eb4] Ab4 Db4 ~")
  .slow(3)
  .sound("pulse")
  .fm(sine.range(0.4,0.7))
  .lpf(perlin.range(400,1600).slow(3))
  .gain(0.3)

$: s("grok*8? evolve*4 groove*2 pulse*4 mutate*4 change ~")
  .slow(2)
  .gain(0.25)
  .lpf(sine.range(1200,3800).slow(4))
  .chop(12)
  .speed(perlin.range(0.8,1.2).slow(2))