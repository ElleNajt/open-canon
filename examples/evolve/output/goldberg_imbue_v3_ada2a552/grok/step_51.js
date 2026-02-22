setcps(155/60/4)
samples('shabda/speech:groove,pulse,evolve,grok,mutate,change,strudel,livecode')

$: note("[eb1 ab1 bb1] [c2 eb2 g2 bb2 c3] [ab2 d3 f3 ab3 c4 eb4]").every(16, x=>x.transpose(rand.range(-10,15)))
  .slow(perlin.range(1.3,6.5))
  .sound("sine")
  .lpf(sine.range(80,13000).slow(2.8))
  .fmi(perlin.range(0.3,11).slow(3.8))
  .gain(perlin.range(0.7,1.1))

$: note("eb2 [ab2 c3 eb3 g3 bb3] [d4 f4 ab4 c5 eb5]").sometimesBy(0.25, x=>x.rev().transpose(rand.range(3,9)))
  .slow(perlin.range(1.1,5))
  .sound("square")
  .lpf(perlin.range(120,9500).slow(3.5))
  .detune(sine.range(-25,55).slow(5.5))
  .ring(perlin.range(0.1,0.6).slow(5))

$: note("g2 [c3 eb3 g3 bb3] [d4 f4 ab4 c5 eb5]").slow(perlin.range(1.1,6.5))
  .sound("supersaw")
  .lpf(saw.range(80,16000).slow(6.5))
  .detune(sine.range(-40,70).slow(5.5))
  .leslie(perlin.range(0.15,0.7).slow(7))

$: stack(
  s("bd*2 [~ bd bd]").euclid(7,16).slow(perlin.range(1.3,4.2)).gain(1.1),
  s("[sn ~ cp]").euclid(5,16).slow(perlin.range(1.5,4.2)).gain(0.85).pan(sine.range(0.25,0.75)),
  s("hh*16? [oh*8 ~ oh*8]").fast(perlin.range(3.5,14)).gain(0.75).hpf(4200).pan(cosine.range(0,1).slow(7)).coarse(saw.range(4,13).slow(11))
).room(0.65)
.delay(0.35)
.swing(perlin.range(0.25,0.65).slow(9))
.juxBy(sine.range(-0.25,0.15).slow(5.5), rev)
.compressor("-18:4.5:0.3:0.015:0.3")

$: note("ab1 [c2 eb2 g2 bb2] [d3 f3 ab3 c4 eb4]").every(16, x=>x.transpose(rand.range(-7,14)))
  .slow(perlin.range(1.5,5.8))
  .sound("triangle")
  .fmi(saw.range(0.5,7.5).slow(5.5))
  .lpf(perlin.range(90,10500).slow(4.5))
  .room(0.35)

$: s("[grok*5? strudel*3] [livecode*4 groove*3] [pulse*3 evolve*4] [mutate*4 change*3 grok ~]").sometimesBy(0.3, rev)
  .gain(perlin.range(0.75,1.4))
  .speed(perlin.range(0.8,1.6).slow(9))
  .striate(perlin.range(6,14).slow(7))
  .hpf(perlin.range(150,550))
  .vowel("a e o i u".slow(2.5))