setcps(215/60/4)
samples('shabda/speech:groove,pulse,evolve,grok,mutate,change,strudel,livecode')

$: note("eb1 [ab1 c2 eb2 g2 bb2] [d3 f3 ab3 c4]").sometimesBy(0.2, rev)
  .slow(perlin.range(1.5,5))
  .sound("sine")
  .lpf(sine.range(150,9000).slow(3.5))
  .fmi(perlin.range(0.4,6).slow(4))

$: note("eb2 [ab2 c3 eb3 g3 bb3] [d4 f4 ab4 c5]").sometimesBy(0.25, palindrome)
  .slow(perlin.range(1.6,5))
  .sound("square")
  .lpf(perlin.range(150,9500).slow(4))
  .fmi(tri.range(0.3,5.5).slow(4))

$: note("g2 [c3 eb3 g3 bb3] [d4 f4 ab4 c5]").slow(perlin.range(1.4,5))
  .sound("supersaw")
  .lpf(saw.range(100,13000).slow(4.5))
  .detune(sine.range(-30,40).slow(5))
  .phaser(sine.range(0.15,0.65).slow(4))

$: stack(
  s("bd*2 [bd ~] ~").euclid(5,16).slow(perlin.range(1.8,4.2)).gain(0.9),
  s("[sn cp ~] cp").euclid(6,16).slow(perlin.range(2,4)).gain(0.8).pan(sine.range(0.25,0.75)),
  s("hh*8? [oh*4 ~ ~]").fast(perlin.range(3.5,11)).gain(0.7).hpf(4500).pan(cosine.range(0,1).slow(6)).coarse(saw.range(3,14).slow(12))
).room(0.65)
.delay(0.45)
.swing(perlin.range(0.2,0.7).slow(16))
.juxBy(rand.range(-0.15,0.15), rev)
.crush(perlin.range(5,11).slow(8))

$: note("ab1 [c2 eb2 g2 bb2] [d3 f3 ab3 c4]").every(16, x=>x.transpose(7))
  .slow(perlin.range(1.8,5))
  .sound("pulse")
  .fmi(saw.range(0.4,5).slow(4.5))
  .lpf(cosine.range(120,8000).slow(5))

$: s("[grok*3 ~] [strudel livecode groove] [pulse*2 evolve] [mutate*2 change]").sometimesBy(0.35, rev)
  .slow(perlin.range(1.4,5.2))
  .gain(perlin.range(0.65,1.15))
  .speed(perlin.range(0.65,1.55).slow(7))
  .chop(perlin.range(4,14).slow(7))