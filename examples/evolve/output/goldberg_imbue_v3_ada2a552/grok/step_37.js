setcps(192/60/4)
samples('shabda/speech:groove,pulse,evolve,grok,mutate,change,strudel,livecode')

$: note("eb1 [ab1 c2 eb2 ~ g2] [bb2 d3 f3 ab3] [c4 eb4 g4 bb4]")
  .slow(perlin.range(2.2,3.4))
  .sound("sine")
  .lpf(sine.range(200,6000).slow(2.8))
  .gain(perlin.range(0.75,0.95))
  .slide(perlin.range(0,0.3).slow(8))

$: note("eb2 [ab2 c3 eb3 g3] [bb3 d4 f4 ab4] [c5 eb5 g5 bb5]")
  .slow(perlin.range(2.1,3.4))
  .sound("square")
  .lpf(perlin.range(160,7200).slow(3.8))
  .fmi(tri.range(0.4,3.2).slow(4.5))
  .detune(perlin.range(-18,18).slow(10))

$: note("g2 [c3 eb3 g3 bb3] [d4 f4 ab4 c5] [eb5 g5 bb5 d6]")
  .slow(saw.range(2.4,3.2))
  .sound("supersaw")
  .lpf(perlin.range(240,8200).slow(5))
  .gain(perlin.range(0.7,0.88))
  .detune(sine.range(-24,24).slow(6))

$: stack(
  s("bd*2 [~ bd] bd").euclid(9,16).slow(perlin.range(2.5,3.1)).gain(0.88),
  s("~ [sn cp] [rim cp]").euclid(12,16).slow(perlin.range(2.5,3.1)).gain(0.72).pan(saw.range(0.2,0.8)),
  s("hh*16? [oh*6 ~]").fast(perlin.range(4.8,7.2)).gain(0.58).hpf(4200).degradeBy(0.28).pan(cosine.range(0,1).slow(9))
).room(0.85)
.delay(0.78)
.swing(perlin.range(0.32,0.58).slow(9))
.juxBy(rand.range(-0.4, -0.02), rev)

$: note("ab1 [c2 eb2 g2 bb2] [d3 f3 ab3 c4] [eb4 g4 bb4 d5]")
  .slow(perlin.range(2.4,3.4))
  .sound("pulse")
  .fmi(saw.range(0.5,3.5).slow(6.2))
  .lpf(cosine.range(250,5600).slow(5.5))
  .tremolo(sine.range(0.25,0.45)).slow(4.5)

$: s("[strudel*2 livecode] [grok groove evolve] [mutate*2 pulse] [change ~ grok?]")
  .slow(saw.range(2.3,3.4))
  .gain(perlin.range(0.72,1.0))
  .vowel("e i o a u".slow(4.2))
  .chop(rand.range(12,24).slow(8))
  .speed(perlin.range(0.88,1.18).slow(11))