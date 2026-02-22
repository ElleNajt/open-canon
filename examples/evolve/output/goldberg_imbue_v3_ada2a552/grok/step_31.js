setcps(178/60/4)
samples('shabda/speech:groove,pulse,evolve,grok,mutate,change,strudel,livecode')

$: note("eb1 [ab1 c2 eb2 g2] [bb2 d3 f3 ab3] [c4 eb4 g4 bb4]")
  .slow(2.6)
  .sound("sawtooth")
  .lpf(sine.range(80,5500).slow(2.8))
  .lpq(perlin.range(0.8,5.5))
  .gain(0.76)

$: note("eb2 [ab2 c3 eb3 g3] [bb3 d4 f4 ab4] [c5 eb5 g5 bb5]")
  .slow(2.65)
  .sound("square")
  .lpf(perlin.range(200,6500).slow(3.5))
  .phaser(tri.range(0.3,1.5).slow(2.5))
  .gain(0.72)

$: note("g2 [c3 eb3 g3 bb3] [d4 f4 ab4 c5] [eb5 g5 bb5 d6]")
  .slow(2.55)
  .sound("supersaw")
  .lpf(saw.range(250,7500).slow(5))
  .fmi(rand.range(0.5,2.5).slow(6))
  .gain(0.72)

$: stack(
  s("bd*2 [bd ~] bd").euclid(9,16).slow(2.6).gain(0.82),
  s("~ [sn cp] [rim cp]").euclid(11,16).slow(2.6).gain(0.68).pan(saw.range(0.3,0.7)),
  s("hh*16? [oh*4 ~]").fast(4.5).gain(0.52).hpf(4500).degradeBy(0.42).pan(sine.range(0.1,0.9).slow(12))
).room(0.85)
.delay(0.72)
.swing(0.4)
.juxBy(-0.35, rev)
.compressor("-22:5:0.3:0.005:0.18")

$: note("ab1 [c2 eb2 g2 bb2] [d3 f3 ab3 c4] [eb4 g4 bb4 d5]")
  .slow(2.75)
  .sound("pulse")
  .drive(saw.range(0.4,1.3).slow(5))
  .pan(perlin.range(0.15,0.85).slow(7))
  .gain(0.72)

$: s("[strudel*2 grok] [evolve groove livecode] [pulse mutate] [change*2 grok strudel evolve?]")
  .slow(2.6)
  .gain(perlin.range(0.8,1.25))
  .lpf(sine.range(350,3800).slow(5.8))
  .chop(tri.range(8,32).slow(8))
  .speed(rand.range(0.7,1.4).slow(9.2))