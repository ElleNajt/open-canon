setcps(192/60/4)
samples('shabda/speech:groove,pulse,evolve,grok,mutate,change,strudel,livecode')

$: note("eb1 [ab1 c2 eb2 ~ g2] [bb2 d3 f3 ab3]").sometimes(rev)
  .slow(perlin.range(2.1,3.6))
  .sound("sine")
  .lpf(sine.range(180,5800).slow(3.2))
  .gain(perlin.range(0.78,0.98))
  .slide(perlin.range(0,0.4).slow(7))

$: note("eb2 [ab2 c3 eb3 g3] [bb3 d4 f4 ab4]").sometimes(x=>x.rev())
  .slow(perlin.range(2.2,3.5))
  .sound("square")
  .lpf(perlin.range(140,7400).slow(4))
  .fmi(tri.range(0.3,3.5).slow(5))
  .detune(perlin.range(-20,20).slow(9))

$: note("g2 [c3 eb3 g3 bb3] [d4 f4 ab4 c5]").degradeBy(0.12)
  .slow(saw.range(2.3,3.4))
  .sound("supersaw")
  .lpf(perlin.range(220,8400).slow(4.8))
  .gain(perlin.range(0.72,0.9))
  .detune(sine.range(-28,28).slow(5.5))

$: stack(
  s("bd*2 [~ bd] bd").euclid(10,16).slow(perlin.range(2.4,3.3)).gain(0.9),
  s("~ [sn cp] [rim cp]").euclid(11,16).slow(perlin.range(2.6,3.2)).gain(0.75).pan(saw.range(0.1,0.9)),
  s("hh*16? [oh*5 ~]").fast(perlin.range(5,7.5)).gain(0.6).hpf(4500).pan(cosine.range(0,1).slow(8))
).room(0.88)
.delay(0.82)
.swing(perlin.range(0.35,0.55).slow(10))
.juxBy(rand.range(-0.35, -0.01), rev)

$: note("ab1 [c2 eb2 g2 bb2] [d3 f3 ab3 c4]").every(5, x=>x.transpose(12))
  .slow(perlin.range(2.3,3.5))
  .sound("pulse")
  .fmi(saw.range(0.6,3.8).slow(5.8))
  .lpf(cosine.range(220,5800).slow(5))
  .tremolo(sine.range(0.3,0.5)).slow(4.2)

$: s("[strudel*2 ~] [livecode groove grok] [evolve*2 mutate] [pulse change ~]").every(6, rev)
  .slow(saw.range(2.2,3.5))
  .gain(perlin.range(0.75,1.02))
  .vowel("a e o i u".slow(4.8))
  .chop(rand.range(14,22).slow(7.5))
  .speed(perlin.range(0.85,1.22).slow(10))