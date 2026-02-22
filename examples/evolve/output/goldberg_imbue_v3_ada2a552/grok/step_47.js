setcps(180/60/4)
samples('shabda/speech:groove,pulse,evolve,grok,mutate,change,strudel,livecode')

$: note("[eb1 bb1] [c2 eb2 g2 bb2] [ab2 d3 f3 ab3 c4 eb4]").every(16, x=>x.transpose(rand.range(-2,12)))
  .slow(perlin.range(1.1,5.0))
  .sound("sine")
  .lpf(sine.range(80,10000).slow(3.5))
  .fmi(perlin.range(0.4,7).slow(4.5))

$: note("eb2 [ab2 c3 eb3 g3 bb3] [d4 f4 ab4 c5 eb5]").sometimesBy(0.3, x=>x.rev().transpose(5))
  .slow(perlin.range(1.3,5.1))
  .sound("square")
  .lpf(perlin.range(100,10000).slow(4.8))
  .fmi(tri.range(0.2,7).slow(3.8))

$: note("g2 [c3 eb3 g3 bb3] [d4 f4 ab4 c5 eb5]").slow(perlin.range(1.2,5.3))
  .sound("supersaw")
  .lpf(saw.range(90,15000).slow(5))
  .detune(sine.range(-30,50).slow(6))
  .ring(sine.range(0.2,0.6).slow(4))

$: stack(
  s("bd*2 [bd ~] ~").euclid(6,16).slow(perlin.range(1.4,4.2)).gain(1),
  s("[sn cp ~ cp]").euclid(6,16).slow(perlin.range(1.6,4)).gain(0.8).pan(sine.range(0.15,0.85)),
  s("hh*8? [oh*4 ~ ~]").fast(perlin.range(3.5,13)).gain(0.6).hpf(4500).pan(cosine.range(0,1).slow(6)).coarse(saw.range(3,13).slow(12))
).room(0.75)
.delay(0.45)
.swing(perlin.range(0.2,0.6).slow(10))
.juxBy(sine.range(-0.2,0.2).slow(4), rev)
.compressor("-20:4:0.25:0.01:0.25")

$: note("ab1 [c2 eb2 g2 bb2] [d3 f3 ab3 c4 eb4]").every(16, x=>x.transpose(rand.range(-5,8)))
  .slow(perlin.range(1.6,5.1))
  .sound("triangle")
  .fmi(saw.range(0.4,5.5).slow(4.8))
  .lpf(perlin.range(100,9500).slow(5.2))

$: s("[grok*4] [strudel*2 livecode] [groove pulse*2] [evolve*2 mutate] [change grok ~]").sometimesBy(0.33, rev)
  .slow(perlin.range(1.1,5.5))
  .gain(perlin.range(0.7,1.3))
  .speed(perlin.range(0.65,1.75).slow(8))
  .chop(perlin.range(4,12).slow(6))