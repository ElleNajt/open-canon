setcps(182/60/4)
samples('shabda/speech:groove,pulse,evolve,grok,mutate,change,strudel,livecode')

$: note("eb1 [ab1 c2 eb2 g2] [bb2 d3 f3 ab3] [c4 eb4 g4 bb4]")
  .slow(sine.range(2.4,2.9))
  .sound("sawtooth")
  .lpf(sine.range(80,5500).slow(2.8))
  .gain(0.78)
  .detune(perlin.range(-18,18).slow(5))

$: note("eb2 [ab2 c3 eb3 g3] [bb3 d4 f4 ab4] [c5 eb5 g5 bb5]")
  .slow(2.68)
  .sound("square")
  .lpf(perlin.range(200,6500).slow(3.2))
  .fmi(tri.range(0.6,2.2).slow(4))
  .gain(0.74)

$: note("g2 [c3 eb3 g3 bb3] [d4 f4 ab4 c5] [eb5 g5 bb5 d6]")
  .slow(sine.range(2.45,2.7))
  .sound("supersaw")
  .lpf(saw.range(250,7500).slow(4.8))
  .fmenv(0.35)
  .gain(0.74)

$: stack(
  s("bd*2 [~ bd] bd").euclid(10,16).slow(2.65).gain(0.84),
  s("~ [sn cp] [rim cp]").euclid(12,16).slow(2.65).gain(0.7).pan(saw.range(0.25,0.75)),
  s("hh*16? [oh*5 ~]").fast(5.2).gain(0.55).hpf(4200).degradeBy(0.38).pan(sine.range(0.05,0.95).slow(10))
).room(0.88)
.delay(0.75)
.swing(sine.range(0.32,0.48).slow(16))
.juxBy(perlin.range(-0.42,-0.22), rev)
.compressor("-24:4.5:0.25:0.004:0.2")

$: note("ab1 [c2 eb2 g2 bb2] [d3 f3 ab3 c4] [eb4 g4 bb4 d5]")
  .slow(2.72)
  .sound("pulse")
  .drive(saw.range(0.45,1.4).slow(4.5))
  .fmi(rand.range(0.7,2.8).slow(5.2))
  .gain(0.74)

$: s("[grok*2 strudel] [evolve*2 groove] [livecode mutate?] [pulse change grok evolve]")
  .slow(2.65)
  .gain(perlin.range(0.75,1.3))
  .lpf(sine.range(320,4100).slow(6))
  .chop(saw.range(10,28).slow(7.8))
  .speed(rand.range(0.72,1.42).slow(8.8))