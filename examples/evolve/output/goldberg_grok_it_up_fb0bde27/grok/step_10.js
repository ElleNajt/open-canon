samples('shabda/speech:goldberg_variations,bach')
setcps(98/60/4)

$: note("g3 [gb3 e3 d3 b3] [b2 c3 eb3] [d3 g2 fs2 eb3]")
  .slow(2.5)
  .sound("piano")
  .lpf(sine.range(120,1500).slow(4.2))
  .gain(0.35)
  .jux(rev)

$: note("g2 [eb2 bb1 ab1 g1]")
  .slow(5)
  .sound("supersaw")
  .gain(0.3)
  .fmi(saw.range(0.3,8).slow(3))
  .leslie(sine.range(0.25,0.75))

$: stack(
  s("bd,~bd").euclid(7,16).gain(0.7),
  s("~sn,cp").euclid(6,16).gain(0.4),
  s("hh*8,~oh,rim").hpf(4000).gain(0.28).pan(rand.range(0,1))
).room(0.45)
  .swing(0.35)
  .degradeBy(0.2)
  .every(8, rev)

$: note("g4 [fs4 e4 d4 c4] [bb3 c4 eb4] [d4 g3 fs3 eb3]")
  .slow(1.6)
  .sound("sawtooth")
  .gain(0.33)
  .lpf(perlin.range(450,3400).slow(2.8))
  .phaser(sine.range(0.2,0.6).slow(2.5))

$: stack(
  s("goldberg_variations")
    .slow(6.8)
    .chop(28)
    .speed(sine.range(0.8,1.2))
    .lpf(cosine.range(290,1150).slow(6))
    .gain(0.23),
  s("goldberg_variations,bach")
    .chop(26)
    .speed(rand.range(0.72,1.28))
    .lpf(perlin.range(330,1250).slow(3.8))
    .gain(0.19)
    .striate(3)
).delay(0.38)
  .vowel("o a u i e")
  .pan(sine.slow(3.5))

$: s("goldberg_variations")
  .slow(10)
  .chop(28)
  .speed(rand.range(0.62,1.38))
  .lpf(saw.range(95,780).slow(10))
  .gain(0.17)
  .ring(rand.range(0.25,0.45))