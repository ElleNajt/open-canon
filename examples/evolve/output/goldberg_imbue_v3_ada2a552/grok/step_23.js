setcps(152/60/4)
samples('shabda/speech:groove,pulse,evolve,grok,mutate,change,strudel,livecode')

$: note("bb1 [eb2 g2 bb2] [d3 f3 ab3] [c4 eb5 g5]")
  .slow(2.3)
  .sound("sawtooth")
  .lpf(perlin.range(100,5000).slow(2.8))
  .sometimesBy(0.22, rev)
  .gain(0.68)

$: note("eb3 [ab3 c4 eb4] [g4 bb4 d5] [f5 ab5 c6]")
  .slow(2.5)
  .sometimesBy(0.35, rev)
  .sound("square")
  .lpf(saw.range(300,5500).slow(3.0))
  .phaser(cosine.range(0.3,1.1).slow(2.3))

$: note("g3 [c4 eb4 g4] [bb4 d5 f5] [ab5 c6 eb7]")
  .slow(2.2)
  .sound("supersaw")
  .lpf(perlin.range(450,6000).slow(3.5))
  .pan(sine.range(0.0,1.0).slow(6.0))
  .fmi(perlin.range(0.5,1.5).slow(4.0))

$: stack(
  s("bd*2 [bd ~] bd").euclid(8,16).slow(2.4).gain(0.78),
  s("~ sn [cp rim]").euclid(11,16).slow(2.4).gain(0.62).pan(tri.range(0.0,1.0)),
  s("hh*16? oh*8?").fast(4.2).gain(0.48).hpf(4800).degradeBy(0.55).crush(perlin.range(5,15).slow(5.0))
).room(0.75)
.delay(0.65)
.delaytime(perlin.range(0.28,0.38))
.swing(0.18)
.juxBy(-0.35, rev)

$: note("ab1 [c2 g2 bb2] [d3 f3 ab3] [eb4 g4 c5 eb5]")
  .slow(2.7)
  .sound("pulse")
  .drive(perlin.range(0.45,0.95).slow(3.0))
  .pan(sine.range(0.15,0.85).slow(7.5))
  .gain(0.65)

$: s("[grok*2 ~] [strudel livecode] [groove evolve*2] [mutate change pulse], [grok groove*2] [strudel*2 livecode evolve mutate]")
  .slow(2.8)
  .gain(perlin.range(0.65,0.9))
  .vowel("a e o i u")
  .chop(rand.range(10,22).slow(5.2))
  .speed(sine.range(0.7,1.3).slow(5.8))