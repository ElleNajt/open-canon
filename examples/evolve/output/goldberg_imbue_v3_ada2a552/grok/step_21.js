setcps(148/60/4)
samples('shabda/speech:groove,pulse,evolve,grok,mutate,change,strudel,livecode')

$: note("bb1 [d2 f2 ab2 c3] [eb3 g3 bb3] [ab3 c4 eb5 bb4]")
  .slow(2.1)
  .sound("sawtooth")
  .lpf(perlin.range(90,4700).slow(2.4))
  .detune(sine.range(-18,42).slow(4.1))
  .gain(0.62)

$: note("eb3 [g3 bb3 eb4] [ab4 c5 eb5] [f5 bb5 d6]")
  .slow(2.3)
  .sometimesBy(0.25, rev)
  .sound("square")
  .lpf(saw.range(280,5100).slow(2.6))
  .phaser(cosine.range(0.25,0.95).slow(1.9))

$: note("g3 [bb3 d4 f4] [ab4 c5 eb6] [f6 ab6 c7]")
  .slow(2.0)
  .sound("supersaw")
  .lpf(perlin.range(450,5600).slow(3.1))
  .pan(sine.range(0.15,0.85).slow(6))
  .fmi(perlin.range(0.45,1.3).slow(3.4))

$: stack(
  s("bd*2 ~ [bd bd]").euclid(8,16).slow(2.2).gain(0.7),
  s("~ [sn cp] [rim sn]").euclid(11,16).slow(2.2).gain(0.55).pan(tri.range(0.2,0.8)),
  s("hh*16? [oh*8? hh*8?]").fast(3.8).gain(0.42).hpf(4200).degradeBy(0.45).crush(perlin.range(3.5,13.5).slow(4.4))
).room(0.65)
.delay(0.55)
.delaytime(0.28)
.swing(0.13)
.juxBy(-0.28, rev)

$: note("ab1 [c2 eb2 g2] [bb2 d3 f3] [ab3 eb4 g4 bb4]")
  .slow(2.5)
  .sound("pulse")
  .drive(perlin.range(0.35,0.85).slow(2.6))
  .lpf(sine.range(130,3900).slow(3.2))
  .gain(perlin.range(0.45,0.72))

$: s("~ [strudel groove evolve] [grok*2 mutate], [change pulse*2 livecode] [strudel groove], [evolve*3 grok change mutate]")
  .slow(2.6)
  .gain(perlin.range(0.58,0.82))
  .vowel("a o e i u")
  .chop(rand.range(10,18).slow(4.7))
  .speed(sine.range(0.78,1.22).slow(5.1))