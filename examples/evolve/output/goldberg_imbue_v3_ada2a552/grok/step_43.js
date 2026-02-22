setcps(215/60/4)
samples('shabda/speech:groove,pulse,evolve,grok,mutate,change,strudel,livecode')

$: note("eb1 [ab1 c2 eb2 g2 bb2] [d3 f3 ab3 c4]").sometimesBy(0.25, palindrome)
  .slow(perlin.range(1.8,4.8))
  .sound("sine")
  .lpf(sine.range(100,8000).slow(4))
  .fmi(perlin.range(0.3,5).slow(5))

$: note("eb2 [ab2 c3 eb3 g3 bb3] [d4 f4 ab4 c5]").sometimesBy(0.3, rev)
  .slow(perlin.range(1.7,4.5))
  .sound("square")
  .lpf(perlin.range(100,9000).slow(4.5))
  .fmi(tri.range(0.2,5).slow(4.5))

$: note("g2 [c3 eb3 g3 bb3] [d4 f4 ab4 c5]").slow(perlin.range(1.5,4.5))
  .sound("supersaw")
  .lpf(saw.range(150,12000).slow(5))
  .detune(sine.range(-25,35).slow(6))
  .phaser(sine.range(0.2,0.6).slow(3.5))

$: stack(
  s("bd*2 [bd ~] ~").euclid(7,16).slow(perlin.range(2,4)).gain(0.95),
  s("[sn cp ~] cp").euclid(7,16).slow(perlin.range(2.2,3.8)).gain(0.75).pan(sine.range(0.3,0.7)),
  s("hh*8? [oh*4 ~ ~]").fast(perlin.range(4,10)).gain(0.65).hpf(5000).pan(cosine.range(0,1).slow(8)).coarse(saw.range(4,12).slow(10))
).room(0.6)
.delay(0.4)
.swing(perlin.range(0.25,0.65).slow(12))
.juxBy(rand.range(-0.2,0), rev)
.degradeBy(0.03)

$: note("ab1 [c2 eb2 g2 bb2] [d3 f3 ab3 c4]").every(12, x=>x.transpose(5))
  .slow(perlin.range(1.9,4.4))
  .sound("pulse")
  .fmi(saw.range(0.5,4.8).slow(5.5))
  .lpf(cosine.range(150,7500).slow(4.8))

$: s("[grok*2 strudel] [livecode*2 groove] [pulse evolve] [mutate*2 change]").sometimesBy(0.4, rev)
  .slow(perlin.range(1.6,4.8))
  .gain(perlin.range(0.55,1.05))
  .speed(perlin.range(0.7,1.5).slow(8))
  .vowel("a e i o u".slow(4))