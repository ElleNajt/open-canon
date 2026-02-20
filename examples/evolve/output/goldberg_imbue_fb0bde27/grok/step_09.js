samples('shabda/speech:goldberg_variations,bach')
setcps(94/60/4)

$: note("g3 [gb3 e3 d3 b3] [b2 c3 eb3] [d3 g2 fs2 eb3]")
  .slow(2.7)
  .sound("piano")
  .lpf(sine.range(110,1450).slow(4.8))
  .gain(0.37)
  .every(7, rev)

$: note("g2 [eb2 bb1 ab1 g1]")
  .slow(5.5)
  .sound("supersaw")
  .gain(0.28)
  .fmi(saw.range(0.4,7).slow(3.5))
  .leslie(sine.range(0.3,0.7))

$: stack(
  s("bd,~bd").euclid(8,16).gain(0.7),
  s("~sn,cp").euclid(5,16).gain(0.42),
  s("hh*8,~oh,rim").hpf(4200).gain(0.28).pan(rand.range(0,1))
).room(0.5)
  .swing(0.4)
  .degradeBy(0.15)
  .every(10, rev)

$: note("g4 [fs4 e4 d4 c4] [bb3 c4 eb4] [d4 g3 fs3 eb3]")
  .slow(1.7)
  .sound("sawtooth")
  .gain(0.35)
  .lpf(perlin.range(400,3500).slow(3))
  .tremolo(sine.range(0.2,0.5).slow(2))

$: stack(
  s("goldberg_variations")
    .slow(6.5)
    .chop(24)
    .speed(sine.range(0.75,1.25))
    .lpf(cosine.range(280,1100).slow(6.5))
    .gain(0.24),
  s("goldberg_variations,bach")
    .chop(28)
    .speed(rand.range(0.7,1.3))
    .lpf(perlin.range(320,1300).slow(3.5))
    .gain(0.17)
    .striate(4)
).delay(0.35)
  .vowel("a e i o u")

$: s("goldberg_variations")
  .slow(11)
  .chop(40)
  .speed(rand.range(0.6,1.4))
  .lpf(saw.range(90,750).slow(11))
  .gain(0.15)
  .pan(sine.slow(7))