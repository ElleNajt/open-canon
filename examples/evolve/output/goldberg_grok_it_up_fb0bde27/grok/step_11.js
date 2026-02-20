samples('shabda/speech:goldberg_variations,bach')
setcps(96/60/4)

$: note("g3 [gb3 e3 d3 b3] [b2 c3 eb3] [d3 g2 fs2 eb3]")
  .slow(2.6)
  .sound("piano")
  .lpf(sine.range(80,2000).slow(5))
  .gain(0.4)
  .jux(rev)

$: note("g2 [eb2 bb1 ab1 g1]")
  .slow(4.8)
  .sound("supersaw")
  .gain(0.28)
  .fmi(saw.range(0.4,12).slow(2.5))
  .leslie(sine.range(0.2,0.8))

$: stack(
  s("bd,~bd").euclid(8,16).gain(0.72),
  s("~sn,cp").euclid(7,16).gain(0.38),
  s("hh*8,~oh,rim,cp").hpf(4200).gain(0.26).pan(rand.range(0,1))
).room(0.48)
  .swing(0.38)
  .degradeBy(0.25)
  .compressor()
  .every(8, rev)

$: note("g4 [fs4 e4 d4 c4] [bb3 c4 eb4] [d4 g3 fs3 eb3]")
  .slow(1.65)
  .sound("sawtooth")
  .gain(0.35)
  .lpf(perlin.range(380,3800).slow(2.5))
  .phaser(sine.range(0.15,0.65).slow(2.2))

$: stack(
  s("goldberg_variations")
    .slow(6.5)
    .chop(30)
    .speed(sine.range(0.82,1.18))
    .lpf(cosine.range(280,1200).slow(6.5))
    .gain(0.24),
  s("goldberg_variations,bach")
    .chop(28)
    .speed(rand.range(0.7,1.3))
    .lpf(perlin.range(320,1280).slow(3.5))
    .gain(0.2)
    .striate(3)
).delay(0.35)
  .vowel("o a u i e")
  .pan(sine.slow(3.8))
  .room(0.3)

$: s("goldberg_variations")
  .slow(9.5)
  .chop(26)
  .speed(rand.range(0.6,1.4))
  .lpf(saw.range(85,720).slow(9.5))
  .degradeBy(0.22)