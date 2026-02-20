samples('shabda/speech:goldberg_variations,bach')
setcps(92/60/4)

$: note("g3~[gb3 e3 d3] [b2 c3] [d3 g2 fs2 eb3]?")
  .slow(3)
  .sound("piano")
  .lpf(sine.range(100,1400).slow(5))
  .gain(0.35)
  .every(8, rev)

$: note("g2 [eb2 bb1 ab1]")
  .slow(6)
  .sound("supersaw")
  .gain(0.25)
  .fmi(saw.range(0.3,6).slow(4))
  .leslie(sine.range(0.2,0.6))

$: stack(
  s("bd,~bd").euclid(7,16).gain(0.65),
  s("~sn,cp").euclid(4,16).gain(0.4),
  s("hh*8,~oh,rim").hpf(4500).gain(0.25).pan(rand.range(0,1))
).room(0.45)
  .swing(0.35)
  .degradeBy(0.2)
  .every(12, rev)

$: note("g4 [fs4 e4 d4] [bb3 c4] [d4 g3 eb3]")
  .slow(1.8)
  .sound("sawtooth")
  .gain(0.32)
  .lpf(perlin.range(500,3200).slow(2.5))
  .phaser(sine.range(0.25,0.75))

$: stack(
  s("goldberg_variations")
    .slow(7)
    .chop(20)
    .speed(sine.range(0.8,1.2))
    .lpf(cosine.range(250,1000).slow(7))
    .gain(0.22),
  s("goldberg_variations,bach")
    .chop(32)
    .speed(rand.range(0.65,1.35))
    .lpf(perlin.range(350,1200).slow(4))
    .gain(0.15)
    .striate(5)
).delay(0.3)

$: s("goldberg_variations")
  .slow(12)
  .chop(48)
  .speed(rand.range(0.55,1.45))
  .lpf(sine.range(80,700).slow(10))
  .gain(0.13)