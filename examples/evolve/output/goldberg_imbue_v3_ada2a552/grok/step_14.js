setcps(122/60/4)
samples('shabda/speech:groove,pulse,evolve,grok,mutate,change,strudel,livecode')

$: note("bb1 d2 g2 [bb2 d3] [g2 eb3] bb2 [d3 g3 eb3]")
  .slow(2)
  .sound("piano")
  .lpf(perlin.range(100,3000).slow(2))
  .detune(sine.range(-25,25).slow(4.2))
  .gain(0.55)

$: note("d4 f4 [bb3 g4] [bb4 d5 eb5] f5 [ab5 bb5 d6]")
  .slow(2.2)
  .sometimes(rev)
  .sound("triangle")
  .lpf(saw.range(400,3500).slow(3))
  .phaser(cosine.range(0.2,0.85).slow(2.4))

$: note("eb4 g4 [bb4 d5] eb5 [f5 ab5] [bb5 eb6 g6]")
  .slow(2.1)
  .sound("supersaw")
  .lpf(cosine.range(900,4200).slow(3))
  .degradeBy(0.22)
  .fm(perlin.range(0.3,1.3).slow(3.8))

$: stack(
  s("bd bd ~ bd").euclid(11,16).slow(2).gain(0.48),
  s("~ sn [cp*2 rim] ~ sn").euclid(8,16).slow(2).gain(0.35).pan(sine.range(0.2,0.85)),
  s("hh*16 [oh*8 ~ ~] [hh*5 oh*3]?").fast(3.8).gain(0.3).hpf(4500).degradeBy(0.45).crush(perlin.range(4,14).slow(3))
).room(0.6)
.delay(0.4)
.delaytime(0.25)
.delayfeedback(0.42)
.swing(0.14)

$: note("bb1 eb2 [g2 bb2] eb3 [ab3 db4] [bb3 g3 eb3]")
  .slow(2.4)
  .sound("pulse")
  .shape(perlin.range(0.2,0.7).slow(3))
  .lpf(sine.range(180,2400).slow(2.4))
  .gain(0.38)

$: s("grok*4 strudel livecode*3, evolve*3 groove, mutate*2 pulse change")
  .slow(2.5)
  .gain(0.4)
  .striate(rand.range(6,14).slow(4.5))
  .speed(sine.range(0.75,1.25).slow(5))
  .vowel("o u a i e".slow(3.2))