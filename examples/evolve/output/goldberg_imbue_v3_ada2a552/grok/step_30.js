setcps(178/60/4)
samples('shabda/speech:groove,pulse,evolve,grok,mutate,change,strudel,livecode')

$: note("eb1 [ab1 c2 eb2 g2] [bb2 d3 f3 ab3] [c4 eb4 g4 bb4]")
  .slow(2.65)
  .sound("sawtooth")
  .lpf(sine.range(100,5000).slow(3))
  .lpq(perlin.range(1,4))
  .gain(0.8)

$: note("eb2 [ab2 c3 eb3 g3] [bb3 d4 f4 ab4] [c5 eb5 g5 bb5]")
  .slow(2.72)
  .sound("square")
  .lpf(perlin.range(250,6000).slow(4))
  .phaser(tri.range(0.4,1.4).slow(3))
  .gain(0.75)

$: note("g2 [c3 eb3 g3 bb3] [d4 f4 ab4 c5] [eb5 g5 bb5 d6]")
  .slow(2.48)
  .sound("supersaw")
  .lpf(saw.range(300,7000).slow(4.8))
  .fmi(rand.range(0.7,2).slow(5.5))
  .detune(sine.range(-18,18).slow(4.8))
  .gain(0.74)

$: stack(
  s("bd*2 [bd ~] bd").euclid(8,16).slow(2.72).gain(0.85),
  s("~ [sn cp] [rim cp]").euclid(10,16).slow(2.72).gain(0.7).pan(saw.range(0.25,0.75)),
  s("hh*12? [oh*5 ~]").fast(4.2).gain(0.55).hpf(5000).degradeBy(0.38)
).room(0.82)
.delay(0.75)
.swing(0.36)
.juxBy(-0.38, rev)


$: note("ab1 [c2 eb2 g2 bb2] [d3 f3 ab3 c4] [eb4 g4 bb4 d5]")
  .slow(2.88)
  .sound("pulse")
  .drive(saw.range(0.5,1.2).slow(4.5))
  .pan(perlin.range(0.1,0.9).slow(8))
  .gain(0.74)

$: s("[grok*2 strudel] [groove pulse] [evolve*2 mutate] [change livecode grok*3]")
  .slow(2.72)
  .gain(perlin.range(0.7,1.1))
  .lpf(rand.range(500,3000).slow(6))
  .chop(saw.range(12,28).slow(7.5))
  .speed(sine.range(0.8,1.3).slow(8.5))