setcps(210/60/4)
samples('shabda/speech:groove,pulse,evolve,grok,mutate,change,strudel,livecode')

$: note("eb1 [ab1 c2 eb2 g2 bb2] [d3 f3 ab3 c4]").palindrome()
  .slow(perlin.range(1.8,4.2))
  .sound("sine")
  .lpf(sine.range(90,6800).slow(4.1))
  .fmi(perlin.range(0.7,3.8).slow(5.2))

$: note("eb2 [ab2 c3 eb3 g3 bb3] [d4 f4 ab4 c5]").sometimes(rev)
  .slow(perlin.range(1.9,4))
  .sound("square")
  .lpf(perlin.range(120,8200).slow(4))
  .fmi(tri.range(0.4,4.5).slow(4.8))
  .detune(sine.range(-25,25).slow(5))

$: note("g2 [c3 eb3 g3 bb3] [d4 f4 ab4 c5]").slow(saw.range(1.8,4))
  .sound("supersaw")
  .lpf(perlin.range(160,9200).slow(5.5))
  .detune(sine.range(-40,40).slow(6.5))
  .compressor("0.35:4.2:0.2:0.02:0.2")

$: stack(
  s("bd*2 [~ bd] bd").euclid(11,16).slow(perlin.range(2.2,3.8)).gain(0.92),
  s("~ [sn cp] [rim cp]").euclid(10,16).slow(perlin.range(2.3,3.7)).gain(0.78).pan(saw.range(0.15,0.85)),
  s("hh*16? [oh*6 ~]").fast(perlin.range(4.8,8.2)).gain(0.65).hpf(4200).pan(cosine.range(0,1).slow(8))
).room(0.65)
.delay(0.55)
.swing(perlin.range(0.28,0.62).slow(12))
.juxBy(rand.range(-0.35, -0.01), rev)
.tremolo(perlin.range(0.25,0.75).slow(4.5))

$: note("ab1 [c2 eb2 g2 bb2] [d3 f3 ab3 c4]").every(7, x=>x.transpose(12))
  .slow(perlin.range(1.9,4.1))
  .sound("pulse")
  .fmi(saw.range(0.6,4.3).slow(5.8))
  .lpf(cosine.range(170,6800).slow(5.1))

$: s("[grok*2 strudel] [livecode*2 groove] [pulse*2 evolve] [mutate*2 change]").sometimesBy(0.4, rev)
  .slow(saw.range(1.7,4.2))
  .gain(perlin.range(0.7,1.15))
  .speed(perlin.range(0.8,1.4).slow(6.2))
  .chop(perlin.range(12,25).slow(9))