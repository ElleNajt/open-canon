samples('shabda/speech:goldberg_variations,bach,johann')
setcps(128/60/4)

$: note("g3 [gs3 e3 d3 b3~] [bb2 c3 eb3 g3] [d3 g2 f2 eb3 g2]")
  .slow(3)
  .sound("supersaw")
  .lpf(cosine.range(100,3200).slow(3.8))
  .gain(0.7)
  .juxBy(0.8,rev)

$: note("g1 [eb2 bb1 gs1 g1] eb1")
  .slow(6.2)
  .sound("sawtooth")
  .gain(0.5)
  .fmi(perlin.range(4,22).slow(2.9))
  .tremolo(sine.range(0.4,0.65).slow(5))

$: stack(
  s("bd*2,~bd,bd*3,~").euclid(9,16).gain(0.95),
  s("~sn*3,cp,~sn,rim").euclid(8,16).gain(0.6),
  s("hh*8,~oh*4,rim*4,cp").crush(5).hpf(2800).gain(0.45).pan(saw.range(0,1))
).room(0.78)
  .swing(0.42)
  .degradeBy(0.2)
  

$: note("g4 [fs4 e4 d4 c4 bb3] [c4 eb4 g4 d4] [g3 fs3 eb3 d3]")
  .slow(2.4)
  .sound("pulse")
  .gain(0.55)
  .lpf(perlin.range(160,5800).slow(2.9))
  .slide(0.2)

$: stack(
  s("goldberg_variations")
    .slow(8)
    .chop(32)
    .speed(sine.range(0.7,1.4).slow(1.8))
    .lpf(sine.range(200,2800).slow(4.8))
    .gain(0.42),
  s("goldberg_variations,bach")
    .chop(22)
    .speed(rand.range(0.7,1.4))
    .vowel("e a o u i")
    .gain(0.38)
).delay(0.48)
  .phaser(sine.range(0.4,0.75).slow(3))
  .pan(tri.slow(3.8))
  .room(0.68)

$: s("bach,johann,~goldberg_variations")
  .slow(10)
  .speed(rand.range(0.6,1.5))
  .gain(0.4)
  .crush(5)
  .striate(4)