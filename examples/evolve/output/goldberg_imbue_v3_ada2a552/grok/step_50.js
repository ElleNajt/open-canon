setcps(160/60/4)
samples('shabda/speech:groove,pulse,evolve,grok,mutate,change,strudel,livecode')

$: note("[eb1 bb1 ab1] [c2 eb2 g2 bb2] [ab2 d3 f3 ab3 c4 eb4]").every(16, x=>x.transpose(rand.range(-7,17)))
  .slow(perlin.range(1.2,7))
  .sound("sine")
  .lpf(sine.range(50,14000).slow(3))
  .fmi(perlin.range(0.2,10).slow(4))
  .room(0.4)

$: note("eb2 [ab2 c3 eb3 g3 bb3] [d4 f4 ab4 c5 eb5]").sometimesBy(0.3, x=>x.rev().transpose(rand.range(2,8)))
  .slow(perlin.range(1.0,5.5))
  .sound("square")
  .lpf(perlin.range(100,10000).slow(4))
  .detune(sine.range(-30,50).slow(6))
  .phaser(perlin.range(0.2,1.0).slow(4))

$: note("g2 [c3 eb3 g3 bb3] [d4 f4 ab4 c5 eb5]").slow(perlin.range(1.0,7))
  .sound("supersaw")
  .lpf(saw.range(60,18000).slow(7))
  .detune(sine.range(-45,65).slow(6))
  .pan(sine.range(0,1).slow(12))

$: stack(
  s("bd*2 [bd ~ bd]").euclid(8,16).slow(perlin.range(1.2,4.8)).gain(1.0),
  s("[sn cp ~ cp]").euclid(6,16).slow(perlin.range(1.4,4.5)).gain(0.8).pan(sine.range(0.2,0.8)),
  s("hh*16? [oh*8 ~ oh*8]").fast(perlin.range(3,15)).gain(0.7).hpf(4500).pan(cosine.range(0,1).slow(6)).coarse(saw.range(5,12).slow(12))
).room(0.7)
.delay(0.4)
.swing(perlin.range(0.2,0.7).slow(10))
.juxBy(sine.range(-0.2,0.2).slow(6), rev)
.compressor("-20:4:0.4:0.02:0.25")

$: note("ab1 [c2 eb2 g2 bb2] [d3 f3 ab3 c4 eb4]").every(16, x=>x.transpose(rand.range(-5,12)))
  .slow(perlin.range(1.4,6.2))
  .sound("triangle")
  .fmi(saw.range(0.4,8).slow(6))
  .lpf(perlin.range(70,11000).slow(5))
  .delay(0.25)

$: s("[grok*4? ~ strudel*4] [livecode*3 groove*2] [pulse*4 evolve*3] [mutate*3 change*2 ~]").sometimesBy(0.35, rev)
  .gain(perlin.range(0.7,1.5))
  .speed(perlin.range(0.75,1.7).slow(10))
  .chop(perlin.range(7,15).slow(8))
  .hpf(perlin.range(120,600))
  .vowel("e o a i u".slow(3))