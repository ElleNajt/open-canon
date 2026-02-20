setcps(136/60/4)
samples('shabda/speech:groove,pulse,evolve,grok,mutate,change,strudel,livecode')

$: note("bb1 [eb2 g2] [bb2 d3 eb3] [g3 bb3 eb4 d4]")
  .slow(1.9)
  .sound("piano")
  .lpf(perlin.range(90,3600).slow(2.4))
  .detune(cosine.range(-32,32).slow(4.1))
  .gain(0.58)

$: note("d4 [f4 ab4] [bb4 d5 eb5] [ab5 bb5 c6]")
  .slow(2.3)
  .sometimes(rev)
  .sound("triangle")
  .lpf(tri.range(350,4300).slow(2.8))
  .phaser(sine.range(0.22,0.92).slow(2.1))

$: note("eb4 [g4 bb4] [d5 f5 ab5] [bb5 eb6 f6]")
  .slow(2.0)
  .sound("supersaw")
  .lpf(sine.range(650,4800).slow(3.1))
  .degradeBy(0.13)
  .fmi(perlin.range(0.3,0.9).slow(2.9))

$: stack(
  s("bd*2 ~ [bd bd]").euclid(12,16).slow(2).gain(0.55),
  s("~ [sn cp rim] [sn ~]").euclid(9,16).slow(2).gain(0.42).pan(cosine.range(0.15,0.8)),
  s("hh*16 [oh*4 hh*4]?").fast(3.9).gain(0.32).hpf(4200).degradeBy(0.35).crush(perlin.range(5,13).slow(3.8))
).room(0.58)
.delay(0.52)
.delaytime(0.22)
.delayfeedback(0.38)
.swing(0.24)

$: note("bb1 eb2 [g2 bb2 d3] [g3 bb3 eb4] [d4 f4]")
  .slow(2.6)
  .sound("pulse")
  .drive(perlin.range(0.28,0.68).slow(2.7))
  .lpf(sine.range(130,2900).slow(2.9))
  .gain(perlin.range(0.42,0.58))

$: s("[grok*2 evolve] [strudel*2 livecode], groove*3 [pulse*2 mutate], [change grok evolve*2] [groove*2 strudel]")
  .slow(2.4)
  .gain(0.5)
  .vowel("a e i o u")
  .chop(rand.range(9,19).slow(4.1))
  .speed(sine.range(0.8,1.2).slow(5.2))
  .hpf(280)