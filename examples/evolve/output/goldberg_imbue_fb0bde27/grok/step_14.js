samples('shabda/speech:goldberg_variations,bach')
setcps(112/60/4)

$: note("g3 [gb3 e3 d3 b3] [b2 c3 eb3] [d3 g2 fs2 eb3]")
  .slow(2)
  .sound("piano")
  .lpf(sine.range(80,2800).slow(4.5))
  .gain(0.5)
  .room(0.4)

$: note("g2 [eb2 bb1 ab1 g1]")
  .slow(5)
  .sound("triangle")
  .gain(0.35)
  .fmi(saw.range(3,20).slow(3))
  .lpf(perlin.range(120,600).slow(2.8))

$: stack(
  s("bd*2,~bd,bd").euclid(7,16).gain(0.8),
  s("~sn*2,cp,~").euclid(8,16).gain(0.45),
  s("hh*8,~oh*2,rim*2,cp").crush(12).hpf(3800).gain(0.32).pan(saw.range(0,1))
).room(0.6)
  .swing(0.4)
  .degradeBy(0.2)
  .sometimes(rev)
  

$: note("g4 [fs4 e4 d4 c4] [bb3 c4 eb4] [d4 g3 fs3 eb3]")
  .slow(1.8)
  .sound("pulse")
  .gain(0.42)
  .lpf(perlin.range(350,4800).slow(2.7))
  .slide(rand.range(0,0.08))

$: stack(
  s("goldberg_variations")
    .slow(7)
    .chop(40)
    .speed(sine.range(0.75,1.25).slow(2))
    .lpf(sine.range(250,1800).slow(7))
    .gain(0.3),
  s("goldberg_variations,bach")
    .chop(28)
    .speed(rand.range(0.65,1.35))
    .lpf(perlin.range(320,1900).slow(4))
    .gain(0.26)
    .striate(4)
).delay(0.5)
  .phaser(sine.range(0.3,0.7).slow(2.2))
  .pan(tri.slow(4))
  .room(0.45)

$: s("goldberg_variations")
  .slow(10)
  .chop(36)
  .speed(rand.range(0.55,1.45))
  .gain(0.25)
  .distort(0.15)
  .lpf(cosine.range(90,1100).slow(10))