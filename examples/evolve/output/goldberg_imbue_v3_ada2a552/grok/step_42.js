setcps(210/60/4)
samples('shabda/speech:groove,pulse,evolve,grok,mutate,change,strudel,livecode')

$: note("eb1 [ab1 c2 eb2 g2 bb2] [d3 f3 ab3 c4]").palindrome()
  .slow(perlin.range(2,4.5))
  .sound("sine")
  .lpf(sine.range(100,7000).slow(3.8))
  .fmi(perlin.range(0.5,4).slow(6))

$: note("eb2 [ab2 c3 eb3 g3 bb3] [d4 f4 ab4 c5]").sometimes(rev)
  .slow(perlin.range(2,4.2))
  .sound("square")
  .lpf(perlin.range(150,8000).slow(4.2))
  .fmi(tri.range(0.3,4.8).slow(5))

$: note("g2 [c3 eb3 g3 bb3] [d4 f4 ab4 c5]").slow(saw.range(2,4.2))
  .sound("supersaw")
  .lpf(perlin.range(200,10000).slow(6))
  .detune(sine.range(-30,30).slow(7))
  .phaser(perlin.range(0.1,0.5).slow(4))

$: stack(
  s("bd*2 [bd ~] ~").euclid(9,16).slow(perlin.range(2.1,3.9)).gain(0.9),
  s("[sn cp ~] cp").euclid(8,16).slow(perlin.range(2.4,3.6)).gain(0.8).pan(saw.range(0.2,0.8)),
  s("hh*8? [oh*4 ~ ~]").fast(perlin.range(5,9)).gain(0.7).hpf(4500).pan(cosine.range(0,1).slow(9)).coarse(perlin.range(3,10).slow(12))
).room(0.7)
.delay(0.5)
.swing(perlin.range(0.3,0.6).slow(16))
.juxBy(rand.range(-0.3,-0.02), rev)
.tremolo(perlin.range(0.3,0.8).slow(5))

$: note("ab1 [c2 eb2 g2 bb2] [d3 f3 ab3 c4]").every(8, x=>x.transpose(7))
  .slow(perlin.range(2,4.3))
  .sound("pulse")
  .fmi(saw.range(0.4,4.5).slow(6.2))
  .lpf(cosine.range(200,7000).slow(5.5))

$: s("[grok*3 strudel] [livecode groove] [pulse*2 evolve] [mutate change*2]").sometimesBy(0.35, rev)
  .slow(saw.range(1.8,4.5))
  .gain(perlin.range(0.75,1.2))
  .speed(perlin.range(0.75,1.45).slow(7))
  .chop(perlin.range(10,28).slow(10))