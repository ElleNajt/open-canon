setcps(110/60/4)
samples('shabda/speech:groove,pulse,evolve,grok,mutate,change,strudel,livecode')

$: note("g2 bb1 d2 [g1 c1] [d1 bb0] g0 [c1 eb1 g1]")
  .slow(1.9)
  .sound("piano")
  .lpf(perlin.range(140,2900).slow(2))
  .transpose(perlin.range(-2,4).slow(12))
  .gain(0.48)

$: note("bb3 d4 f4 [g4 bb4] c5 [d5 eb5] [bb4 d5 f5]")
  .slow(2.2)
  .palindrome()
  .sound("triangle")
  .lpf(saw.range(650,3300).slow(3))
  .phaser(cosine.range(0.2,0.85).slow(2.5))

$: note("eb4 g4 bb4 [eb5 d5] f5 ab5 [bb5 eb6]")
  .slow(2.1)
  .sound("supersaw")
  .lpf(cosine.range(1200,3900).slow(2.7))
  .gain(0.38)
  .fm(perlin.range(0.3,1.1).slow(3.7))

$: stack(
  s("bd ~ bd bd").euclid(9,16).slow(2).gain(0.42),
  s("~ sn cp*3 rim ~").euclid(6,16).slow(2).gain(0.3).pan(sine.range(0.1,0.85)),
  s("hh*16 [oh*8 ~] [hh*4 oh*2]?").fast(4).gain(0.25).hpf(5200).degradeBy(0.38).crush(perlin.range(4,14).slow(3))
).room(0.5)
.delay(0.32)
.delaytime(0.25)
.delayfeedback(0.3)
.swing(0.28)

$: note("bb1 eb2 g2 [bb2 eb3] ab3 db4 [bb2 g2 eb3]")
  .slow(2.4)
  .sound("pulse")
  .shape(perlin.range(0.2,0.6).slow(2.7))
  .lpf(sine.range(250,2000).slow(2.4))
  .gain(0.32)

$: s("grok*3 strudel*2, groove pulse evolve*2, mutate*2 change ~livecode*4")
  .slow(2.3)
  .gain(0.32)
  .chop(rand.range(4,14).slow(4.5))
  .speed(sine.range(0.82,1.18).slow(5))
  .pan(cosine.range(0.25,0.85).slow(3.2))