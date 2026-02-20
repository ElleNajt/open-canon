setcps(142/60/4)
samples('shabda/speech:groove,pulse,evolve,grok,mutate,change,strudel,livecode')

$: note("bb1 [eb2 g2 bb2] [d3 eb3 g3] [bb3 d4 f4 ab4]")
  .slow(1.9)
  .sound("piano")
  .lpf(perlin.range(80,4000).slow(2.4))
  .detune(sine.range(-25,32).slow(4.1))
  .gain(0.6)

$: note("d4 [f4 ab4 bb4] [d5 eb5 ab5] [bb5 c6 d6]")
  .slow(2.1)
  .sometimes(rev)
  .sound("triangle")
  .lpf(saw.range(300,4800).slow(2.3))
  .phaser(cosine.range(0.4,0.95).slow(1.9))

$: note("eb4 [g4 bb4 d5] [f5 ab5 c6] [eb6 f6 ab6]")
  .slow(2.0)
  .sound("supersaw")
  .lpf(perlin.range(600,5200).slow(3.1))
  .pan(sine.range(0.2,0.8))
  .fmi(perlin.range(0.3,1.1).slow(3.5))

$: stack(
  s("bd*2 ~ [bd bd]").euclid(9,16).slow(2.0).gain(0.6),
  s("~ sn [cp rim sn]").euclid(11,16).slow(2.0).gain(0.48).pan(tri.range(0.1,0.9)),
  s("hh*16? [oh*8 hh*8]").fast(3.8).gain(0.38).hpf(4200).degradeBy(0.35).crush(perlin.range(3,15).slow(4.5))
).room(0.62)
.delay(0.48)
.delaytime(0.28)
.delayfeedback(0.45)
.swing(0.28)

$: note("bb1 [eb2 g2 bb2] [d3 f3 ab3] [bb3 eb4 g4] [d4 f4 bb4]")
  .slow(2.3)
  .sound("pulse")
  .drive(perlin.range(0.25,0.75).slow(2.6))
  .lpf(cosine.range(120,3400).slow(2.9))
  .gain(perlin.range(0.42,0.65))

$: s("[grok*2 strudel] [livecode evolve*2], groove*4 [pulse mutate*2], [grok groove*2] [strudel livecode*2 pulse change]")
  .slow(2.4)
  .gain(perlin.range(0.45,0.6))
  .vowel("e i o a u")
  .chop(rand.range(6,22).slow(4.2))
  .speed(sine.range(0.82,1.18).slow(5.2))