setcps(160/60/4)
samples('shabda/speech:groove,pulse,evolve,grok,mutate,change,strudel,livecode')

$: note("bb1 [eb2 g2 bb2] [d3 f3 ab3] [c4 eb5 g5 bb5]")
  .slow(2.4)
  .sound("sawtooth")
  .lpf(sine.range(120,4800).slow(2.6))
  .iter(4)
  .gain(0.72)

$: note("eb3 [ab3 c4 eb4] [g4 bb4 d5] [f5 ab5 c6 eb6]")
  .slow(2.6)
  .sound("square")
  .lpf(perlin.range(280,5200).slow(2.9))
  .phaser(tri.range(0.25,1.15).slow(2.4))
  .gain(0.7)

$: note("g3 [c4 eb4 g4] [bb4 d5 f5] [ab5 c6 eb7 g7]")
  .slow(2.3)
  .sound("supersaw")
  .lpf(saw.range(420,5800).slow(3.6))
  .pan(cosine.range(0.1,0.9).slow(5.8))
  .fmi(rand.range(0.4,1.6).slow(4.2))

$: stack(
  s("bd*2 [bd ~] bd").euclid(9,16).slow(2.5).gain(0.8),
  s("~ sn [cp rim]").euclid(10,16).slow(2.5).gain(0.65).pan(saw.range(0.2,0.8)),
  s("hh*16? oh*8?").fast(4.3).gain(0.5).hpf(5200).degradeBy(0.52).crush(rand.range(4,14).slow(4.8))
).room(0.78)
.delay(0.68)
.delaytime(sine.range(0.26,0.42))
.swing(0.22)
.juxBy(-0.4, rev)

$: note("ab1 [c2 g2 bb2] [d3 f3 ab3] [eb4 g4 c5 eb5 g5]")
  .slow(2.8)
  .sound("pulse")
  .drive(saw.range(0.4,0.98).slow(3.2))
  .pan(perlin.range(0.1,0.9).slow(7.8))
  .gain(0.68)

$: s("[grok groove*2] [strudel livecode*2] [evolve mutate] [pulse change*2], [grok*3 evolve] [strudel groove livecode mutate pulse change]")
  .slow(2.9)
  .gain(perlin.range(0.68,0.92))
  .lpf(perlin.range(400,2800).slow(4.5))
  .chop(sine.range(12,20).slow(5.5))
  .speed(rand.range(0.75,1.25).slow(6.2))