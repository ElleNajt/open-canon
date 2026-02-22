setcps(152/60/4)
samples('shabda/speech:groove,pulse,evolve,grok,mutate,change,strudel,livecode')

$: note("[eb1 [ab1 bb1 cs2] db2]*2 [c2 eb2 [g2 bb2] c3] [ab2 d3 [f3 ab3] [c4 eb4 g4]]").scale("Eb:minor").transpose(perlin.range(-5,17).slow(6))
  .slow(perlin.range(1.3,4.2))
  .sound("sawtooth")
  .lpf(sine.range(100,12800).slow(3.8))
  .fmi(perlin.range(3.5,14).slow(3.2))
  .gain(perlin.range(0.7,1.3)).pan(sine.range(0,1).slow(5))

$: note("eb2 [ab2 [c3 eb3] g3] [bb3 c4 eb4] [g4 bb4 d5]").transpose(sine.range(-8,15).slow(7))
  .every(4, x=>x.sometimesBy(0.3, rev))
  .slow(perlin.range(1.4,3.6))
  .sound("square")
  .lpf(perlin.range(180,9600).slow(2.8)).gain(perlin.range(0.6,1.2)).detune(sine.range(-40,55).slow(5))

$: note("g2 [c3 eb3 [g3 bb3]] [d4 f4 ab4] [c4 eb4 g4 [bb4 d5]]").slow(perlin.range(1.6,4))
  .sound("supersaw")
  .lpf(saw.range(140,16800).slow(3))
  .detune(sine.range(-50,65).slow(4.5))
  .gain(perlin.range(0.65,1.3)).leslie(perlin.range(0.4,0.8).slow(4))

$: stack(
  s("bd*4 ~ bd").euclid(10,16).slow(perlin.range(1.5,2.6)).gain(1.25).pan(0.25),
  s("[sn ~ cp]").euclid(12,16).slow(perlin.range(1.7,3)).gain(1).pan(sine.range(0.25,0.75)),
  s("hh*16? [oh*3 hh*4 ~ lt]").fast(perlin.range(4,10)).gain(0.9).hpf(4800).pan(cosine.range(0.15,0.85).slow(4))
).room(0.55)
  .delay(0.45)
  .dt(perlin.range(0.28,0.4).slow(3.5))
  .swing(perlin.range(0.35,0.5).slow(8.5))
  .juxBy(sine.range(-0.25,0.25).slow(4.5), rev)

$: note("ab1 [c2 eb2 [g2 bb2 c3]] [d3 f3 ab3 [c4 eb4]] [g4 bb4 d5]").every(9, x=>x.transpose(rand.range(-7,11)))
  .slow(perlin.range(1.6,4.2))
  .sound("triangle")
  .lpf(perlin.range(120,10200).slow(4))
  .fmi(saw.range(3,13).slow(3.5))
  .gain(perlin.range(0.65,1.25))

$: s("[strudel*3 livecode groove] [pulse*2 evolve grok] [mutate*2 change pulse] [grok*3 ~ evolve] [strudel groove livecode ~]").sometimesBy(0.3, rev)
  .speed(perlin.range(0.75,1.6).slow(5))
  .chop(perlin.range(16,26).slow(4.5))
  .gain(perlin.range(0.85,1.35))
  .pan(sine.range(0.15,0.85).slow(3.5))