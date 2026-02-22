setcps(215/60/4)
samples('shabda/speech:groove,pulse,evolve,grok,mutate,change,strudel,livecode')

$: note("[eb1 ab1] [c2 eb2 g2] [bb2 d3 f3 ab3 c4]").every(16, x=>x.transpose(7))
  .slow(perlin.range(1.4,5.2))
  .sound("sine")
  .lpf(sine.range(120,8500).slow(3.8))
  .fmi(perlin.range(0.3,6.5).slow(4.2))

$: note("eb2 [ab2 c3 eb3 g3 bb3] [d4 f4 ab4 c5]").sometimesBy(0.2, palindrome)
  .slow(perlin.range(1.5,4.9))
  .sound("square")
  .lpf(perlin.range(100,9200).slow(4.2))
  .fmi(tri.range(0.2,6).slow(3.8))

$: note("g2 [c3 eb3 g3 bb3] [d4 f4 ab4 c5]").slow(perlin.range(1.3,5.1))
  .sound("supersaw")
  .lpf(saw.range(80,14000).slow(4.8))
  .detune(sine.range(-25,45).slow(5.2))
  .fmi(sine.range(0.1,4.8).slow(4.2))

$: stack(
  s("bd*2 [bd ~] ~").euclid(7,16).slow(perlin.range(1.5,4)).gain(0.95),
  s("[sn cp ~ cp]").euclid(5,16).slow(perlin.range(1.8,3.8)).gain(0.75).pan(sine.range(0.2,0.8)),
  s("hh*8? [oh*4 ~ ~]").fast(perlin.range(4,12)).gain(0.65).hpf(5000).pan(cosine.range(0,1).slow(5)).coarse(saw.range(4,12).slow(10))
).room(0.7)
.delay(0.4)
.swing(perlin.range(0.15,0.65).slow(12))
.juxBy(rand.range(-0.2,0.2), rev)
.tremolo(perlin.range(0.2,0.7).slow(6))

$: note("ab1 [c2 eb2 g2 bb2] [d3 f3 ab3 c4]").every(16, x=>x.transpose(rand.range(-5,5)))
  .slow(perlin.range(1.9,5.1))
  .sound("pulse")
  .fmi(saw.range(0.5,5.5).slow(4.8))
  .lpf(cosine.range(100,8500).slow(5.2))

$: s("~ [grok*2 strudel] [groove pulse] [evolve mutate change] [livecode grok ~]").sometimesBy(0.3, rev)
  .slow(perlin.range(1.3,5.3))
  .gain(perlin.range(0.7,1.3))
  .speed(perlin.range(0.6,1.7).slow(8))
  .chop(perlin.range(3,20).slow(6))