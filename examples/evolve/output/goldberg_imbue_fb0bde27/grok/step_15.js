samples('shabda/speech:goldberg_variations,bach')
setcps(112/60/4)

$: note("g3 [ab3 e3 d3 b3] [bb2 c3 eb3] [d3 g2 fs2 eb3]")
  .slow(2.2)
  .sound("piano")
  .lpf(sine.range(100,3000).slow(4))
  .gain(0.55)
  .detune(rand.range(-15,15))

$: note("g2 [eb2 bb1 ab1 g1]")
  .slow(4.8)
  .sound("triangle")
  .gain(0.38)
  .fmi(saw.range(4,18).slow(2.8))
  .tremolo(0.3)

$: stack(
  s("bd*2,~bd,bd").euclid(8,16).gain(0.85),
  s("~sn*2,cp,~").euclid(7,16).gain(0.48),
  s("hh*8,~oh*2,rim*2,cp").crush(10).hpf(3500).gain(0.35).pan(saw.range(0,1))
).room(0.65)
  .swing(0.35)
  .degradeBy(0.25)
  .sometimesBy(0.4, rev)

$: note("g4 [fs4 e4 d4 c4] [bb3 c4 eb4] [d4 g3 fs3 eb3]")
  .slow(1.9)
  .sound("pulse")
  .gain(0.45)
  .lpf(perlin.range(300,5000).slow(3))
  .accelerate(0.02)

$: stack(
  s("goldberg_variations")
    .slow(6.5)
    .chop(32)
    .speed(sine.range(0.8,1.2).slow(1.8))
    .lpf(sine.range(280,2000).slow(6))
    .gain(0.32),
  s("goldberg_variations,bach")
    .chop(24)
    .speed(rand.range(0.7,1.3))
    .lpf(perlin.range(350,2100).slow(3.5))
    .gain(0.28)
    .striate(3)
).delay(0.45)
  .phaser(sine.range(0.4,0.6).slow(2))
  .pan(tri.slow(3.5))
  .room(0.5)

$: s("goldberg_variations")
  .slow(9.5)
  .chop(32)
  .speed(rand.range(0.6,1.4))
  .gain(0.28)
  .distort(0.12)
  .leslie(0.4)