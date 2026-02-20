setcps(124/60/4)
samples('shabda/speech:groove,pulse,evolve,grok,mutate,change,strudel,livecode')

$: note("bb1 [d2 g2] [bb2 eb3] [d3 g3] [bb3 eb4]")
  .slow(1.9)
  .sound("piano")
  .lpf(perlin.range(120,3200).slow(2.1))
  .detune(sine.range(-30,30).slow(3.7))
  .gain(0.52)

$: note("d4 [f4 ab4] [bb4 d5 eb5] [f5 ab5 bb5]")
  .slow(2.3)
  .sometimes(rev)
  .sound("triangle")
  .lpf(saw.range(350,3800).slow(2.7))
  .phaser(cosine.range(0.15,0.9).slow(2.2))

$: note("eb4 [g4 bb4] [d5 f5] [ab5 bb5 eb6]")
  .slow(2.0)
  .sound("supersaw")
  .lpf(cosine.range(800,4500).slow(3.2))
  .degradeBy(0.18)
  .tremolo(perlin.range(0.25,0.75).slow(4))

$: stack(
  s("bd*2 ~ [bd bd]").euclid(10,16).slow(2).gain(0.5),
  s("~ sn cp [rim sn]").euclid(9,16).slow(2).gain(0.38).pan(sine.range(0.15,0.9)),
  s("hh*12 [oh*6 hh*2]? ~").fast(4).gain(0.32).hpf(4200).degradeBy(0.42).crush(perlin.range(5,15).slow(3.2))
).room(0.55)
.delay(0.45)
.delaytime(0.22)
.delayfeedback(0.38)
.swing(0.16)

$: note("bb1 eb2 g2 [bb2 d3] eb3 [g3 bb3 eb4]")
  .slow(2.5)
  .sound("pulse")
  .shape(perlin.range(0.15,0.75).slow(2.8))
  .lpf(sine.range(160,2600).slow(2.5))
  .gain(0.42)

$: s("strudel*3 grok, evolve*2 groove livecode*2, mutate pulse*3 change*2")
  .slow(2.6)
  .gain(0.45)
  .chop(rand.range(8,16).slow(4))
  .speed(sine.range(0.8,1.2).slow(4.8))
  .sometimes(rev)