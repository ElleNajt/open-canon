setcps(185/60/4)
samples('shabda/speech:groove,pulse,evolve,grok,mutate,change,strudel,livecode')

$: note("eb1 [ab1 c2 eb2 ~ g2] [bb2 d3 f3 ab3] [c4 eb4 g4 bb4]")
  .slow(perlin.range(2.4,3.3))
  .sound("sawtooth")
  .lpf(sine.range(120,5800).slow(3.2))
  .gain(perlin.range(0.7,0.92))
  .pan(cosine.range(0.25,0.75).slow(7))

$: note("eb2 [ab2 c3 eb3 g3] [bb3 d4 f4 ab4] [c5 eb5 g5 bb5]")
  .slow(sine.range(2.3,3.1))
  .sound("square")
  .lpf(perlin.range(180,6800).slow(4))
  .fmi(tri.range(0.5,2.8).slow(4.2))
  .detune(perlin.range(-15,15).slow(12))

$: note("g2 [c3 eb3 g3 bb3] [d4 f4 ab4 c5] [eb5 g5 bb5 d6]")
  .slow(perlin.range(2.5,3.0))
  .sound("supersaw")
  .lpf(saw.range(220,7800).slow(5.5))
  .gain(perlin.range(0.68,0.85))
  .phaser(0.4).slow(6)

$: stack(
  s("bd*2 [~ bd] bd").euclid(10,16).slow(perlin.range(2.6,2.9)).gain(0.85),
  s("~ [sn cp] [rim cp]").euclid(11,16).slow(perlin.range(2.6,2.9)).gain(0.7).pan(saw.range(0.15,0.85)),
  s("hh*16? [oh*5 ~]").fast(perlin.range(5,6.5)).gain(0.55).hpf(4500).degradeBy(0.25).pan(cosine.range(0,1).slow(10))
).room(0.88)
.delay(0.75)
.swing(perlin.range(0.35,0.55).slow(12))
.juxBy(perlin.range(-0.35,-0.05), rev)

$: note("ab1 [c2 eb2 g2 bb2] [d3 f3 ab3 c4] [eb4 g4 bb4 d5]")
  .slow(perlin.range(2.7,3.2))
  .sound("pulse")
  .fmi(rand.range(0.6,3.2).slow(7))
  .lpf(cosine.range(280,5200).slow(6))
  .tremolo(0.35).slow(5)

$: s("[grok*2 strudel] [evolve livecode grok] [mutate groove pulse] [change*2 ~ evolve?]")
  .slow(perlin.range(2.5,3.2))
  .gain(perlin.range(0.65,0.98))
  .vowel("a e i o u".slow(5))
  .chop(perlin.range(14,22).slow(9))
  .distort(0.15).slow(4)