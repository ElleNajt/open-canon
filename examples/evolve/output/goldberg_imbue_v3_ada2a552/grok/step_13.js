setcps(118/60/4)
samples('shabda/speech:groove,pulse,evolve,grok,mutate,change,strudel,livecode')

$: note("g2 bb1 d2 [g1 c1] [d1 bb0] g0 [c1 eb1 bb1]")
  .slow(1.95)
  .sound("piano")
  .lpf(perlin.range(120,3100).slow(1.9))
  .transpose(perlin.range(-3,5).slow(11))
  .gain(0.5)

$: note("bb3 d4 f4 [g4 bb4] c5 [d5 eb5] [bb4 d5 f5]")
  .slow(2.3)
  .sometimes(rev)
  .sound("triangle")
  .lpf(saw.range(550,3400).slow(3.2))
  .phaser(cosine.range(0.15,0.9).slow(2.3))

$: note("eb4 g4 bb4 [eb5 d5] [f5 ab5] bb5 [eb6 g6]")
  .slow(2.15)
  .sound("supersaw")
  .lpf(cosine.range(1100,4100).slow(2.9))
  .degradeBy(0.18)
  .fm(perlin.range(0.25,1.2).slow(3.5))

$: stack(
  s("bd ~ bd bd").euclid(10,16).slow(2).gain(0.45),
  s("~ sn cp*3 rim ~").euclid(7,16).slow(2).gain(0.32).pan(sine.range(0.15,0.8)),
  s("hh*16 [oh*8 ~] [hh*4 oh*2]?").fast(3.7).gain(0.27).hpf(4800).degradeBy(0.4).crush(perlin.range(5,13).slow(2.8))
).room(0.55)
.delay(0.35)
.delaytime(0.22)
.delayfeedback(0.38)
.tremolo(sine.range(0,0.4).slow(4))

$: note("bb1 eb2 g2 [bb2 eb3] ab3 [db4 bb3] [g2 eb3]")
  .slow(2.45)
  .sound("pulse")
  .shape(perlin.range(0.15,0.65).slow(2.9))
  .lpf(sine.range(220,2200).slow(2.3))
  .gain(0.35)

$: s("strudel*3 livecode*2, evolve*2 groove grok, mutate pulse*2 change")
  .slow(2.4)
  .gain(0.35)
  .striate(rand.range(5,12).slow(4.2))
  .speed(sine.range(0.78,1.22).slow(4.8))
  .pan(tri.range(0.2,0.9).slow(3.5))