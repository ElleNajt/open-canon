setcps(200/60/4)
samples('shabda/speech:groove,pulse,evolve,grok,mutate,change,strudel,livecode')

$: note("eb1 [ab1 c2 eb2 g2] [bb2 d3 f3 ab3]").palindrome()
  .slow(perlin.range(2,3.8))
  .sound("sine")
  .lpf(sine.range(90,6200).slow(3.8))
  .lpq(perlin.range(0.9,3.5))

$: note("eb2 [ab2 c3 eb3 g3] [bb3 d4 f4 ab4]").sometimes(rev)
  .slow(perlin.range(2,3.7))
  .sound("square")
  .lpf(perlin.range(110,7800).slow(3.7))
  .fmi(tri.range(0.35,4.2).slow(4.5))

$: note("g2 [c3 eb3 g3 bb3] [d4 f4 ab4 c5]")
  .slow(saw.range(2.1,3.6))
  .sound("supersaw")
  .lpf(perlin.range(190,8600).slow(5.2))
  .detune(sine.range(-35,35).slow(6.2))
  .gain(perlin.range(0.75,0.98))

$: stack(
  s("bd*2 [~ bd] bd").euclid(11,16).slow(perlin.range(2.3,3.5)).gain(0.95),
  s("~ [sn cp] [rim cp]").euclid(10,16).slow(perlin.range(2.4,3.4)).gain(0.8).pan(saw.range(0.2,0.8)),
  s("hh*16? [oh*6 ~]").fast(perlin.range(5,8)).gain(0.68).hpf(4300).pan(cosine.range(0,1).slow(7.5))
).room(0.7)
.delay(0.65)
.swing(perlin.range(0.32,0.58).slow(11))
.juxBy(rand.range(-0.32, -0.015), rev)
.phaser(perlin.range(0.2,0.7).slow(4.2))

$: note("ab1 [c2 eb2 g2 bb2] [d3 f3 ab3 c4]").every(6, x=>x.transpose(7))
  .slow(perlin.range(2.1,3.7))
  .sound("pulse")
  .fmi(saw.range(0.55,4.1).slow(5.5))
  .lpf(cosine.range(190,6200).slow(4.8))

$: s("[strudel*2 ~] [livecode groove] [grok*2 evolve] [mutate pulse change]").sometimes(rev)
  .slow(saw.range(1.9,3.9))
  .gain(perlin.range(0.72,1.12))
  .phaser(perlin.range(0.28,0.82).slow(5.8))
  .chop(rand.range(13,23).slow(8))