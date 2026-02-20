setcps(148/60/4)
samples('shabda/speech:groove,pulse,evolve,grok,mutate,change,strudel,livecode')

$: note("bb1 [eb2 bb2 d3] [eb3 g3 bb3] [d4 f4 ab4 c5]")
  .slow(2.0)
  .sound("piano")
  .lpf(perlin.range(100,4500).slow(2.2))
  .detune(sine.range(-20,40).slow(3.8))
  .gain(0.55)

$: note("eb4 [ab4 bb4 d5] [eb5 f5 ab5] [bb5 c6 eb6]")
  .slow(2.2)
  .sometimes(rev)
  .sound("triangle")
  .lpf(saw.range(250,5000).slow(2.5))
  .phaser(cosine.range(0.3,1.0).slow(2.0))

$: note("g4 [bb4 d5 f5] [ab5 c6 eb6] [f6 g6 bb6]")
  .slow(1.9)
  .sound("supersaw")
  .lpf(perlin.range(500,5500).slow(3.0))
  .pan(sine.range(0.1,0.9))
  .fmi(perlin.range(0.4,1.2).slow(3.2))

$: stack(
  s("bd*2 ~ [bd bd]").euclid(7,16).slow(2.1).gain(0.65),
  s("~ sn [cp rim sn]").euclid(13,16).slow(2.1).gain(0.5).pan(tri.range(0.1,0.9)),
  s("hh*16? [oh*8 hh*8]").fast(4.0).gain(0.4).hpf(4500).degradeBy(0.4).crush(perlin.range(4,14).slow(4.2))
).room(0.7)
.delay(0.5)
.delaytime(0.3)
.delayfeedback(0.4)
.juxBy(-0.3, rev)

$: note("d2 [f2 ab2 bb2] [eb3 g3 bb3] [d4 ab4 c5 eb5]")
  .slow(2.4)
  .sound("pulse")
  .drive(perlin.range(0.3,0.8).slow(2.4))
  .lpf(sine.range(150,3800).slow(3.1))
  .gain(perlin.range(0.4,0.7))

$: s("~ [strudel groove] [evolve*2 grok], [livecode*2 mutate] [change pulse groove], [strudel*4 evolve livecode]")
  .slow(2.5)
  .gain(perlin.range(0.5,0.7))
  .vowel("u a o e i")
  .chop(rand.range(8,20).slow(4.5))
  .speed(sine.range(0.8,1.2).slow(4.8))