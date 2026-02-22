setcps(152/60/4)
samples('shabda/speech:groove,pulse,evolve,grok,mutate,change,strudel,livecode')

$: note("[eb1 [ab1 bb1 cs2 db2]]*2 [c2 eb2 g2 bb2 c3 eb3] [ab2 d3 f3 ab3 c4 eb4 g4]").scale("Eb:minor").transpose(perlin.range(-5,15).slow(7))
  .slow(perlin.range(1.1,3.8))
  .sound("sawtooth")
  .lpf(sine.range(120,12500).slow(4))
  .fmi(perlin.range(4,13).slow(3.5))
  .gain(perlin.range(0.65,1.25)).pan(sine.range(0,1).slow(4.5))

$: note("eb2 [ab2 c3 eb3] [g3 bb3 c4] [eb4 g4 bb4 d5]").transpose(sine.range(-7,14).slow(6.5))
  .every(5, x=>x.sometimesBy(0.28, rev))
  .slow(perlin.range(1.2,3.3))
  .sound("square")
  .lpf(perlin.range(220,9200).slow(3))
  .gain(perlin.range(0.55,1.15)).detune(sine.range(-30,50).slow(4.8))

$: note("g2 [c3 eb3 g3] [bb3 d4 f4] [c4 eb4 g4 bb4]").slow(perlin.range(1.5,3.7))
  .sound("supersaw")
  .lpf(saw.range(160,16500).slow(2.8))
  .detune(sine.range(-45,60).slow(4.2))
  .gain(perlin.range(0.6,1.25)).leslie(perlin.range(0.35,0.75).slow(4.5))

$: stack(
  s("bd*4 ~ [bd bd]").euclid(9,16).slow(perlin.range(1.4,2.4)).gain(1.2).pan(0.2),
  s("[sn cp ~]").euclid(11,16).slow(perlin.range(1.6,2.8)).gain(0.95).pan(sine.range(0.3,0.7)),
  s("hh*16? [oh*2 hh*5 lt]").fast(perlin.range(3.5,9.5)).gain(0.85).hpf(4500).pan(cosine.range(0.2,0.8).slow(3.5))
).room(0.5)
  .delay(0.4)
  .dt(perlin.range(0.25,0.36).slow(3.2))
  .swing(perlin.range(0.32,0.48).slow(9))
  .juxBy(sine.range(-0.2,0.2).slow(4), rev)

$: note("ab1 [c2 eb2 g2 bb2] [d3 f3 ab3 c4] [eb4 g4 bb4 d5]").every(11, x=>x.transpose(rand.range(-5,9)))
  .slow(perlin.range(1.5,4))
  .sound("triangle")
  .lpf(perlin.range(140,9800).slow(4.2))
  .fmi(saw.range(2.5,12).slow(3.2))
  .gain(perlin.range(0.6,1.2)).tremolo(perlin.range(0.3,0.6).slow(3.8))

$: s("[grok*4 strudel livecode] [groove*2 pulse evolve] [mutate change*3] [grok groove*2 ~] [pulse*3 strudel ~]").sometimesBy(0.25, rev)
  .speed(perlin.range(0.7,1.55).slow(4.5))
  .chop(perlin.range(14,24).slow(4))
  .gain(perlin.range(0.8,1.3))
  .pan(sine.range(0.2,0.8).slow(3)).room(0.6)