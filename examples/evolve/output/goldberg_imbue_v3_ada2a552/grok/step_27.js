setcps(172/60/4)
samples('shabda/speech:groove,pulse,evolve,grok,mutate,change,strudel,livecode')

$: note("eb1 [ab1 c2 eb2] [g2 bb2 d3]? [f3 ab3 c4 eb4]")
  .slow(2.55)
  .sound("sawtooth")
  .lpf(sine.range(40,5200).slow(3.1))
  .lpq(perlin.range(0.9,4.8))
  .gain(0.76)

$: note("eb2 [ab2 c3 eb3] [g3 bb3 d4] [f4 ab4 c5 eb5]")
  .slow(2.75)
  .sound("square")
  .lpf(perlin.range(160,5600).slow(3.5))
  .phaser(tri.range(0.15,1.3).slow(2.9))
  .gain(0.74)

$: note("g2 [c3 eb3 g3] [bb3 d4 f4] [ab4 c5 eb5 g5]")
  .slow(2.45)
  .sound("supersaw")
  .lpf(saw.range(280,6600).slow(4.1))
  .fmi(rand.range(0.3,1.9).slow(5.2))
  .detune(sine.range(-18,18).slow(4.5))
  .gain(0.71)

$: stack(
  s("bd*2 [~ bd] bd").euclid(8,16).slow(2.65).gain(0.82),
  s("~ [sn cp] rim").euclid(10,16).slow(2.65).gain(0.68).pan(saw.range(0.15,0.85)),
  s("hh*14? [oh*6? ~]").fast(4.1).gain(0.52).hpf(4800).degradeBy(0.38).coarse(rand.range(3,14).slow(6))
).room(0.78)
.delay(0.72)
.delaytime(tri.range(0.22,0.48))
.swing(0.29)
.juxBy(-0.38, rev)

$: note("ab1 [c2 eb2 g2] [d3 f3 ab3] [eb4 g4 bb4 c5 eb5]")
  .slow(2.85)
  .sound("pulse")
  .drive(saw.range(0.35,1.15).slow(3.9))
  .pan(perlin.range(0,1).slow(7.2))
  .tremolo(perlin.range(0.35,0.55))
  .gain(0.70)

$: s("strudel [groove grok] [pulse*2 evolve] [mutate change grok] [livecode*3 ~], [grok*2 groove strudel] [pulse evolve*2 mutate change livecode]")
  .slow(2.65)
  .gain(perlin.range(0.68,0.98))
  .lpf(rand.range(350,2900).slow(5.1))
  .chop(saw.range(10,26).slow(6.8))
  .speed(sine.range(0.78,1.28).slow(7.8))