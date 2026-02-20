setcps(100/60/4)
samples('shabda/speech:groove,pulse,evolve,grok,mutate,change,strudel,livecode')

$: note("g2 bb1 d2 [g1 c1]? [d1 bb0] g0 [c1 eb1 g1]")
  .slow(1.8)
  .sound("piano")
  .lpf(perlin.range(140,2900).slow(1.9))
  .detune(perlin.range(-15,25).slow(3.1))
  .gain(0.5)

$: note("bb3 d4 f4 [g4 bb4] c5 [d5 eb5] [bb4 d5 f5]")
  .slow(2.1)
  .palindrome()
  .sound("triangle")
  .lpf(saw.range(650,3300).slow(2.8))
  .phaser(cosine.range(0.25,0.8).slow(2.2))

$: note("eb4 g4 bb4 [eb5 d5] f5 ab5 [bb5 eb6]")
  .slow(2)
  .sound("supersaw")
  .lpf(cosine.range(1200,3900).slow(2.6))
  .gain(0.4)
  .fm(perlin.range(0.2,1.2).slow(3.4))

$: stack(
  s("bd bd ~ bd").euclid(7,16).slow(2).gain(0.4),
  s("~ sn, rim*2 cp ~").euclid(5,16).slow(2).gain(0.32).pan(sine.range(0.2,0.9)),
  s("hh*16, [oh*8 ~] hh*4?").fast(3.8).gain(0.22).hpf(4800).degradeBy(0.42).crush(perlin.range(5,13).slow(2.9))
).room(0.48)
.delay(0.3)
.delaytime(0.23)
.delayfeedback(0.28)
.swing(0.25)

$: note("bb1 eb2 g2 [bb2 eb3] ab3 db4 [bb2 g2]")
  .slow(2.3)
  .sound("pulse")
  .shape(perlin.range(0.15,0.55).slow(2.5))
  .lpf(sine.range(250,2000).slow(2.2))
  .gain(0.3)

$: s("~groove*2, grok*3, pulse*2, evolve*2, mutate, change, ~strudel, livecode")
  .ply(perlin.range(1,5).slow(3.8))
  .slow(2.2)
  .gain(0.34)
  .chop(rand.range(3,12).slow(4.2))
  .speed(sine.range(0.85,1.15).slow(4.8))