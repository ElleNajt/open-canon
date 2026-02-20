setcps(92/60/4)
samples('shabda/speech:groove,pulse,evolve,grok,mutate,change')

$: note("g2 bb1 d2 [g1 c1] d1 bb0 g0 c1")
  .slow(2)
  .sound("piano")
  .lpf(perlin.range(200,2500).slow(2))
  .detune(perlin.range(-30,30).slow(4))
  .gain(0.45)

$: note("bb3 d4 f4 [g4 bb4] c5 d5 eb5 ~ bb4")
  .slow(2)
  .every(4,rev())
  .sound("triangle")
  .lpf(saw.range(800,2800).slow(3))
  .phaser(perlin.range(0.1,0.9).slow(3))

$: note("eb4 g4 bb4 [eb5 d5] f5 ab5 [bb5 ~]")
  .slow(2)
  .sound("supersaw")
  .lpf(cosine.range(1400,3600).slow(3))
  .gain(0.35)
  .leslie(sine.range(0.2,0.6))

$: stack(
  s("bd").euclid(7,16).slow(2).gain(0.4),
  s("~sn,rim,cp").euclid(5,16).slow(2).gain(0.28).pan(rand.range(0.1,0.8)),
  s("hh*16,oh*8").fast(4).gain(0.18).hpf(6000).degradeBy(0.4).crush(perlin.range(6,12).slow(4))
).room(0.5)
.delay(0.25)
.dt(0.375)
.swing(0.16)
.phaser(sine.range(0.1,0.5).slow(4))

$: note("Bb2 Eb3 G3 [Bb3 Eb4] Ab4 Db4 ~")
  .slow(3)
  .sound("pulse")
  .fm(perlin.range(0.3,0.8))
  .lpf(perlin.range(400,1600).slow(2))
  .gain(0.3)

$: s("groove grok pulse evolve mutate change")
  .ply(perlin.range(1,6).slow(8))
  .slow(2)
  .gain(0.25)
  .lpf(sine.range(1200,3800).slow(2))
  .chop(16)