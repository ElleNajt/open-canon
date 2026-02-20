setcps(128/60/4)
samples('shabda/speech:groove,pulse,evolve,grok,mutate,change,strudel,livecode')

$: note("bb1 [d2 g2] [bb2 eb3 d3] [g3 bb3 eb4]")
  .slow(2)
  .sound("piano")
  .lpf(perlin.range(100,3500).slow(2.2))
  .detune(cosine.range(-28,28).slow(4.2))
  .gain(0.5)

$: note("d4 [f4 ab4] [bb4 d5 eb5 f5] [ab5 bb5]")
  .slow(2.4)
  .sometimes(rev)
  .sound("triangle")
  .lpf(tri.range(280,4100).slow(2.9))
  .phaser(sine.range(0.18,0.88).slow(2.3))

$: note("eb4 [g4 bb4] [d5 f5 ab5] [bb5 eb6]")
  .slow(2.1)
  .sound("supersaw")
  .lpf(sine.range(720,4900).slow(3.3))
  .degradeBy(0.16)
  .fmi(perlin.range(0.25,0.85).slow(3))

$: stack(
  s("bd*2 ~ bd [bd ~]").euclid(11,16).slow(2).gain(0.52),
  s("~ [sn cp] [rim sn ~]").euclid(10,16).slow(2).gain(0.4).pan(cosine.range(0.2,0.85)),
  s("hh*14 [oh*5 hh*3]?").fast(4).gain(0.3).hpf(4100).degradeBy(0.38).crush(perlin.range(6,14).slow(3.3))
).room(0.62)
.delay(0.48)
.delaytime(0.24)
.delayfeedback(0.42)
.swing(0.2)

$: note("bb1 eb2 [g2 bb2 d3] eb3 [g3 bb3] [eb4 d4]")
  .slow(2.5)
  .sound("pulse")
  .drive(perlin.range(0.2,0.6).slow(2.9))
  .lpf(sine.range(150,2700).slow(2.6))
  .gain(perlin.range(0.38,0.52))

$: s("grok*3 [strudel livecode], groove*2 [evolve*2 mutate], pulse*3 [change grok*2]")
  .slow(2.7)
  .gain(0.47)
  .chop(rand.range(7,18).slow(3.8))
  .speed(sine.range(0.78,1.22).slow(5))
  .sometimes(rev)