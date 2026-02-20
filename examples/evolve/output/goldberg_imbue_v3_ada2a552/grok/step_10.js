setcps(98/60/4)
samples('shabda/speech:groove,pulse,evolve,grok,mutate,change')

$: note("g2 bb1 d2 [g1 c1] [d1 bb0] g0 [c1 eb1]")
  .slow(2)
  .sound("piano")
  .lpf(perlin.range(160,2700).slow(2))
  .tremolo(perlin.range(0.25,0.55).slow(4))
  .gain(0.48)

$: note("bb3 d4 f4 [g4 bb4] c5 d5 eb5 [bb4 d5]")
  .slow(2)
  .palindrome()
  .sound("triangle")
  .lpf(saw.range(700,3100).slow(2.9))
  .phaser(sine.range(0.2,0.75).slow(2.3))

$: note("eb4 g4 bb4 [eb5 d5] f5 ab5 [bb5 eb6]")
  .slow(2)
  .sound("supersaw")
  .lpf(cosine.range(1300,3700).slow(2.7))
  .gain(0.38)
  .ring(perlin.range(0.15,0.45).slow(3.2))

$: stack(
  s("bd").euclid(8,16).slow(2).gain(0.42),
  s("~sn,rim,cp ~").euclid(4,16).slow(2).gain(0.3).pan(rand.range(0.1,0.95)),
  s("hh*16,oh*8 ~").fast(4).gain(0.2).hpf(4500).degradeBy(0.45).crush(perlin.range(4,12).slow(2.8))
).room(0.45)
.delay(0.25)
.dt(0.24)
.swing(0.2)
.phaser(sine.range(0.15,0.55).slow(3))

$: note("bb1 eb2 g2 [bb2 eb3] ab3 db4 bb2")
  .slow(2.5)
  .sound("pulse")
  .shape(perlin.range(0.2,0.5))
  .lpf(perlin.range(300,1800).slow(2.4))
  .gain(0.32)

$: s("~groove,grok*3,pulse*2,evolve,mutate*2,change~")
  .ply(perlin.range(1.5,4.5).slow(3.5))
  .slow(2.4)
  .gain(0.32)
  .stretch(perlin.range(0.8,1.3).slow(5))
  .speed(sine.range(0.88,1.18).slow(5.5))