setcps(95/60/4)
samples('shabda/speech:groove,pulse,evolve,grok,mutate,change')

$: note("g2 bb1 d2 [g1 c1] [d1 bb0] g0 [c1 eb1]")
  .slow(2)
  .sound("piano")
  .lpf(perlin.range(180,2600).slow(1.8))
  .detune(perlin.range(-25,35).slow(3.5))
  .gain(0.48)

$: note("bb3 d4 f4 [g4 bb4] c5 d5 eb5 [bb4 d5]")
  .slow(2)
  .palindrome()
  .sound("triangle")
  .lpf(saw.range(750,2900).slow(2.8))
  .phaser(perlin.range(0.15,0.85).slow(2.5))

$: note("eb4 g4 bb4 [eb5 d5] f5 ab5 [bb5 eb6]")
  .slow(2)
  .sound("supersaw")
  .lpf(cosine.range(1300,3700).slow(2.7))
  .gain(0.38)
  .leslie(sine.range(0.25,0.65))

$: stack(
  s("bd").euclid(9,16).slow(2).gain(0.42),
  s("~sn,rim,cp ~").euclid(3,16).slow(2).gain(0.3).pan(rand.range(0.2,0.9)),
  s("hh*16,oh*8 ~").fast(4).gain(0.2).hpf(5000).degradeBy(0.5).crush(perlin.range(5,11).slow(3))
).room(0.55)
.delay(0.28)
.dt(0.25)
.swing(0.18)
.phaser(sine.range(0.15,0.55).slow(3))

$: note("Bb1 Eb2 G2 [Bb2 Eb3] Ab3 Db4 Bb2")
  .slow(2.5)
  .sound("pulse")
  .shape(perlin.range(0.15,0.45))
  .lpf(perlin.range(350,1700).slow(2.2))
  .gain(0.32)

$: s("groove grok*2 pulse evolve mutate change")
  .ply(perlin.range(2,5).slow(4))
  .slow(2.5)
  .gain(0.28)
  .chop(perlin.range(12,24).slow(3))
  .speed(sine.range(0.9,1.15).slow(6))