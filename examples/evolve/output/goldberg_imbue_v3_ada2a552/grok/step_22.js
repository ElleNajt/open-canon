setcps(152/60/4)
samples('shabda/speech:groove,pulse,evolve,grok,mutate,change,strudel,livecode')

$: note("bb1 [d2 f2 ab2 c3] [eb3 g3 bb3] [ab3 c4 eb5 bb4]")
  .slow(2.2)
  .sound("sawtooth")
  .lpf(perlin.range(80,4800).slow(2.5))
  .sometimesBy(0.18, rev)
  .gain(0.65)

$: note("eb3 [g3 bb3 eb4] [ab4 c5 eb5] [f5 bb5 d6]")
  .slow(2.4)
  .sometimesBy(0.3, rev)
  .sound("square")
  .lpf(saw.range(250,5200).slow(2.7))
  .phaser(cosine.range(0.2,1.0).slow(2.0))

$: note("g3 [bb3 d4 f4] [ab4 c5 eb6] [f6 ab6 c7]")
  .slow(2.1)
  .sound("supersaw")
  .lpf(perlin.range(400,5800).slow(3.2))
  .pan(sine.range(0.1,0.9).slow(5.5))
  .fmi(perlin.range(0.4,1.4).slow(3.5))

$: stack(
  s("bd*2 ~ [bd bd]").euclid(7,16).slow(2.3).gain(0.75),
  s("~ [sn cp] [rim sn]").euclid(10,16).slow(2.3).gain(0.6).pan(tri.range(0.1,0.9)),
  s("hh*16? [oh*8? hh*8?]").fast(4.0).gain(0.45).hpf(4500).degradeBy(0.5).crush(perlin.range(4,14).slow(4.5))
).room(0.7)
.delay(0.6)
.delaytime(perlin.range(0.25,0.35))
.swing(0.15)
.juxBy(-0.3, rev)

$: note("ab1 [c2 eb2 g2] [bb2 d3 f3] [ab3 eb4 g4 bb4]")
  .slow(2.6)
  .sound("pulse")
  .drive(perlin.range(0.4,0.9).slow(2.7))
  .pan(sine.range(0.2,0.8).slow(7))
  .gain(0.62)

$: s("~ [grok strudel] [livecode*2 groove] [evolve mutate*2 change], [pulse*3 grok] [strudel groove evolve livecode]")
  .slow(2.7)
  .gain(perlin.range(0.6,0.85))
  .vowel("e a o i u")
  .chop(rand.range(8,20).slow(4.8))
  .speed(sine.range(0.75,1.25).slow(5.2))