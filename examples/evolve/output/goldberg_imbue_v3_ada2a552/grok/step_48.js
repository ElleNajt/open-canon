setcps(190/60/4)
samples('shabda/speech:groove,pulse,evolve,grok,mutate,change,strudel,livecode')

$: note("[eb1 bb1] [c2 eb2 g2 bb2] [ab2 d3 f3 ab3 c4 eb4]").every(16, x=>x.transpose(rand.range(-5,15)))
  .slow(perlin.range(1.0,6.5))
  .sound("sine")
  .lpf(sine.range(60,12000).slow(4))
  .fmi(perlin.range(0.3,8).slow(5))
  .pan(sine.range(0.2,0.8).slow(10))

$: note("eb2 [ab2 c3 eb3 g3 bb3] [d4 f4 ab4 c5 eb5]").sometimesBy(0.4, x=>x.rev().transpose(rand.range(3,7)))
  .slow(perlin.range(1.2,6.0))
  .sound("square")
  .lpf(perlin.range(80,12000).slow(5))
  .detune(sine.range(-25,40).slow(5))
  .pan(cosine.range(0.1,0.9).slow(8))

$: note("g2 [c3 eb3 g3 bb3] [d4 f4 ab4 c5 eb5]").slow(perlin.range(1.1,6.2))
  .sound("supersaw")
  .lpf(saw.range(70,16000).slow(6))
  .detune(sine.range(-40,60).slow(7))
  .phaser(perlin.range(0.3,1.2).slow(5))

$: stack(
  s("bd*2 [bd ~ bd]").euclid(7,16).slow(perlin.range(1.3,4.5)).gain(1.1),
  s("[sn cp cp ~]").euclid(5,16).slow(perlin.range(1.5,4.2)).gain(0.85).pan(sine.range(0.2,0.8)),
  s("hh*16? [oh*8 ~]").fast(perlin.range(4,14)).gain(0.65).hpf(5000).pan(cosine.range(0,1).slow(7)).coarse(saw.range(4,14).slow(13))
).room(0.8)
.delay(0.5)
.swing(perlin.range(0.25,0.65).slow(12))
.juxBy(sine.range(-0.25,0.25).slow(5), rev)
.compressor("-18:5:0.3:0.01:0.3")

$: note("ab1 [c2 eb2 g2 bb2] [d3 f3 ab3 c4 eb4]").every(16, x=>x.transpose(rand.range(-7,10)).ply(rand.range(1,3)))
  .slow(perlin.range(1.5,5.8))
  .sound("triangle")
  .fmi(saw.range(0.3,6).slow(5.5))
  .lpf(perlin.range(80,10000).slow(6))

$: s("[grok*8?] [strudel*3 livecode*3] [groove*4 pulse] [evolve*3 mutate change ~]").sometimesBy(0.4, rev)
  .slow(perlin.range(1.0,6.0))
  .gain(perlin.range(0.75,1.4))
  .speed(perlin.range(0.7,1.8).slow(9))
  .chop(perlin.range(5,14).slow(7))
  .hpf(150)