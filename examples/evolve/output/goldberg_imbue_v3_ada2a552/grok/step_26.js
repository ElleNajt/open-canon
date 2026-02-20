setcps(168/60/4)
samples('shabda/speech:groove,pulse,evolve,grok,mutate,change,strudel,livecode')

$: note("eb1 [ab1 c2 eb2] [g2 bb2 d3] [f3 ab3 c4 eb4]")
  .slow(2.6)
  .sound("sawtooth")
  .lpf(sine.range(60,5800).slow(3.2))
  .lpq(perlin.range(0.8,5.2))
  .gain(0.78)

$: note("eb2 [ab2 c3 eb3] [g3 bb3 d4] [f4 ab4 c5 eb5]")
  .slow(2.8)
  .sound("square")
  .lpf(perlin.range(180,5800).slow(3.4))
  .phaser(tri.range(0.2,1.4).slow(3))
  .gain(0.75)

$: note("g2 [c3 eb3 g3] [bb3 d4 f4] [ab4 c5 eb5 g5]")
  .slow(2.5)
  .sound("supersaw")
  .lpf(saw.range(320,6800).slow(4.2))
  .pan(cosine.range(0,1).slow(7))
  .fmi(rand.range(0.2,2.0).slow(5))
  .gain(0.73)

$: stack(
  s("bd*2 [bd ~] bd").euclid(7,16).slow(2.7).gain(0.85),
  s("~ sn [cp rim]").euclid(11,16).slow(2.7).gain(0.7).pan(saw.range(0.1,0.9)),
  s("hh*16? oh*8?").fast(4.2).gain(0.55).hpf(5200).degradeBy(0.42).crush(rand.range(4,16).slow(5.8))
).room(0.85)
.delay(0.75)
.delaytime(sine.range(0.25,0.45))
.swing(0.32)
.juxBy(-0.4, rev)

$: note("ab1 [c2 eb2 g2] [d3 f3 ab3] [eb4 g4 bb4 c5 eb5]")
  .slow(2.9)
  .sound("pulse")
  .drive(saw.range(0.4,1.1).slow(3.8))
  .pan(perlin.range(0,1).slow(7.5))
  .tremolo(0.45)
  .gain(0.72)

$: s("strudel*2 [grok*4 groove] [pulse*2 evolve mutate] [change*3 livecode], [grok groove strudel*2] [livecode pulse*2 mutate evolve change grok]")
  .slow(2.7)
  .gain(perlin.range(0.75,1.0))
  .lpf(perlin.range(400,2800).slow(5.2))
  .chop(sine.range(12,24).slow(7))
  .speed(rand.range(0.75,1.25).slow(7.5))