samples('shabda/speech:goldberg_variations,bach,johann')
setcps(140/60/4)

$: stack(
  note("g3 [gs3 e3 d3 b3~] [bb2 c3 eb3 g3] [d3 g2 f2 eb3 g2]")
    .slow(2.9)
    .sound("supersaw")
    .lpf(cosine.range(80,3400).slow(4.2))
    .gain(0.72),
  note("g4 [fs4 e4 d4 c4 bb3] [c4 eb4 g4 d4] [g3 fs3 eb3 d3]")
    .slow(2.3)
    .sound("pulse")
    .gain(0.58)
    .lpf(perlin.range(150,6000).slow(3.2))
    .slide(0.22)
).juxBy(0.72,rev)

$: note("g1 [eb2 bb1 gs1 g1] eb1")
  .slow(5.9)
  .sound("sawtooth")
  .gain(0.52)
  .fmi(perlin.range(5,24).slow(3.1))
  .tremolo(sine.range(0.35,0.68).slow(4.8))

$: stack(
  s("bd*2,~bd,bd*3,~lt").euclid(10,16).gain(0.92),
  s("~sn*3,cp,~sn,rim").euclid(9,16).gain(0.62),
  s("hh*8,~oh*4,rim*4,cp").crush(4).hpf(2600).gain(0.42).pan(saw.range(0,1))
).room(0.8)
  .swing(0.38)
  .degradeBy(0.18)
  

$: stack(
  s("goldberg_variations")
    .slow(7.5)
    .chop(28)
    .speed(sine.range(0.65,1.45).slow(2))
    .lpf(sine.range(180,3000).slow(5.2))
    .gain(0.4),
  s("goldberg_variations,bach")
    .chop(24)
    .speed(rand.range(0.75,1.35))
    .vowel("e a o u i")
    .gain(0.36)
).delay(0.52)
  .phaser(sine.range(0.45,0.8).slow(3.4))
  .pan(tri.slow(4.2))
  .room(0.72)
  .distort(0.15)

$: s("bach,johann,~goldberg_variations*2")
  .slow(11)
  .speed(perlin.range(0.55,1.55))
  .gain(0.38)
  .leslie(sine.range(0.3,0.85).slow(4.2))
  .vowel("a e i o u")

$: note("g2 [bb2 d3 g3] [eb2 g2 bb2] [d2 f2 ab2 bb2]")
  .slow(4.1)
  .sound("sine")
  .lpf(sine.range(250,550).slow(6.3))
  .gain(0.34)
  .room(0.82)