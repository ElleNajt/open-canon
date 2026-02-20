setcps(140/60/4)
samples('shabda/speech:groove,pulse,evolve,grok,mutate,change,strudel,livecode')

$: note("bb1 [eb2 g2 bb2] [d3 eb3 g3] [bb3 eb4 d4 f4]")
  .slow(1.8)
  .sound("piano")
  .lpf(perlin.range(100,3800).slow(2.2))
  .detune(sine.range(-28,28).slow(3.9))
  .gain(0.62)

$: note("d4 [f4 ab4 bb4] [d5 eb5 bb4] [ab5 bb5 c6]")
  .slow(2.2)
  .sometimes(rev)
  .sound("triangle")
  .lpf(tri.range(400,4500).slow(2.5))
  .phaser(sine.range(0.3,0.9).slow(1.8))

$: note("eb4 [g4 bb4 d5] [f5 ab5 bb5] [eb6 f6 g6]")
  .slow(1.9)
  .sound("supersaw")
  .lpf(cosine.range(700,5000).slow(2.9))
  .degradeBy(0.18)
  .fmi(perlin.range(0.4,1.0).slow(3.3))

$: stack(
  s("bd*2 ~ bd [bd bd]").euclid(11,16).slow(1.9).gain(0.58),
  s("~ sn [cp rim sn]").euclid(10,16).slow(1.9).gain(0.45).pan(saw.range(0.2,0.85)),
  s("hh*16? [oh*8 hh*8]").fast(4.0).gain(0.35).hpf(4500).degradeBy(0.4).crush(sine.range(4,14).slow(4.2))
).room(0.55)
.delay(0.5)
.delaytime(0.25)
.delayfeedback(0.4)
.swing(0.26)

$: note("bb1 [eb2 g2] [bb2 d3 eb3] [g3 bb3 eb4] [d4 f4 ab4]")
  .slow(2.4)
  .sound("pulse")
  .drive(perlin.range(0.3,0.7).slow(2.4))
  .lpf(sine.range(150,3200).slow(2.7))
  .gain(perlin.range(0.45,0.62))

$: s("[grok*3 strudel] [livecode evolve*2], groove*4 [pulse mutate change], [grok*2 groove] [strudel*2 livecode pulse]")
  .slow(2.3)
  .gain(0.52)
  .vowel("a e i o u")
  .chop(rand.range(8,20).slow(3.9))
  .speed(sine.range(0.85,1.15).slow(4.9))