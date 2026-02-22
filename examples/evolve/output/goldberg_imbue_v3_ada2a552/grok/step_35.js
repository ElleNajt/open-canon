setcps(185/60/4)
samples('shabda/speech:groove,pulse,evolve,grok,mutate,change,strudel,livecode')

$: note("eb1 [ab1 c2 eb2 ~ g2] [bb2 d3 f3 ab3] [c4 eb4 g4 bb4]")
  .slow(perlin.range(2.3,3.2))
  .sound("sawtooth")
  .lpf(sine.range(100,6000).slow(2.8))
  .gain(perlin.range(0.65,0.9))
  .sometimes(rev)

$: note("eb2 [ab2 c3 eb3 g3] [bb3 d4 f4 ab4] [c5 eb5 g5 bb5]")
  .slow(sine.range(2.4,3.0))
  .sound("square")
  .lpf(perlin.range(150,7000).slow(3.5))
  .fmi(tri.range(0.4,2.5).slow(3.8))
  .sometimes(rev)

$: note("g2 [c3 eb3 g3 bb3] [d4 f4 ab4 c5] [eb5 g5 bb5 d6]")
  .slow(perlin.range(2.4,2.9))
  .sound("supersaw")
  .lpf(saw.range(200,8000).slow(5))
  .sometimes(rev)
  .gain(perlin.range(0.65,0.82))

$: stack(
  s("bd*2 [~ bd] bd").euclid(9,16).slow(perlin.range(2.5,2.8)).gain(0.82),
  s("~ [sn cp] [rim cp]").euclid(10,16).slow(perlin.range(2.5,2.8)).gain(0.68).pan(saw.range(0.2,0.8)),
  s("hh*16? [oh*5 ~]").fast(perlin.range(4.8,6.2)).gain(0.52).hpf(4200).degradeBy(0.3).pan(cosine.range(0,1).slow(9))
).room(0.85)
.delay(0.7)
.swing(perlin.range(0.3,0.5).slow(10))
.juxBy(perlin.range(-0.4,-0.1), rev)
.sometimes(rev)

$: note("ab1 [c2 eb2 g2 bb2] [d3 f3 ab3 c4] [eb4 g4 bb4 d5]")
  .slow(perlin.range(2.6,3.0))
  .sound("pulse")
  .fmi(rand.range(0.5,3.0).slow(6))
  .lpf(cosine.range(250,5500).slow(5.5))
  .sometimes(rev)

$: s("[groove strudel ~] [pulse evolve grok] [mutate*2 change] [livecode groove? evolve]")
  .slow(perlin.range(2.4,3.1))
  .gain(perlin.range(0.6,0.95))
  .vowel("a e i o u".slow(4.5))
  .chop(perlin.range(12,24).slow(8))
  .speed(rand.range(0.8,1.3).slow(8.5))