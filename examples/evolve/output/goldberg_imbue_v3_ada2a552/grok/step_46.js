setcps(215/60/4)
samples('shabda/speech:groove,pulse,evolve,grok,mutate,change,strudel,livecode')

$: note("[eb1 bb1] [c2 eb2 g2 bb2] [ab2 d3 f3 ab3 c4 eb4]").every(16, x=>x.transpose(rand.range(0,12)))
  .slow(perlin.range(1.2,5.4))
  .sound("sine")
  .lpf(sine.range(100,9000).slow(4))
  .fmi(perlin.range(0.4,7).slow(4.5))

$: note("eb2 [ab2 c3 eb3 g3 bb3] [d4 f4 ab4 c5 eb5]").sometimesBy(0.33, x=>x.palindrome().transpose(3))
  .slow(perlin.range(1.4,5.2))
  .sound("square")
  .lpf(perlin.range(120,9500).slow(4.5))
  .fmi(tri.range(0.3,6.8).slow(4))

$: note("g2 [c3 eb3 g3 bb3] [d4 f4 ab4 c5 eb5]").slow(perlin.range(1.2,5.3))
  .sound("supersaw")
  .lpf(saw.range(90,15000).slow(5))
  .detune(sine.range(-30,50).slow(6))
  .phaser(sine.range(0.2,1).slow(4.2))

$: stack(
  s("bd*2 [bd ~] ~").euclid(6,16).slow(perlin.range(1.4,4.2)).gain(1),
  s("[sn cp ~ cp]").euclid(6,16).slow(perlin.range(1.6,4)).gain(0.8).pan(sine.range(0.15,0.85)),
  s("hh*8? [oh*4 ~ ~]").fast(perlin.range(3.5,13)).gain(0.6).hpf(4500).pan(cosine.range(0,1).slow(6)).coarse(saw.range(3,13).slow(12))
).room(0.75)
.delay(0.45)
.swing(perlin.range(0.2,0.6).slow(10))
.juxBy(rand.range(-0.25,0.25), rev)
.tremolo(perlin.range(0.3,0.75).slow(5))

$: note("ab1 [c2 eb2 g2 bb2] [d3 f3 ab3 c4 eb4]").every(16, x=>x.transpose(rand.range(-7,7)))
  .slow(perlin.range(1.7,5.4))
  .sound("pulse")
  .fmi(saw.range(0.6,6).slow(5))
  .lpf(cosine.range(120,9000).slow(5.5))
  .slide(perlin.range(0,0.12).slow(4))

$: s("[grok*4] [strudel*2 livecode] [groove pulse*2] [evolve*2 mutate] [change grok ~]").sometimesBy(0.35, rev)
  .slow(perlin.range(1.1,5.5))
  .gain(perlin.range(0.8,1.4))
  .speed(perlin.range(0.65,1.75).slow(9))
  .stretch(perlin.range(0.85,1.65).slow(7))