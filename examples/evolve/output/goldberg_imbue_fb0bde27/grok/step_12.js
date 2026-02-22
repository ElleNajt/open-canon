samples('shabda/speech:goldberg_variations,bach')
setcps(96/60/4)

$: note("g3 [gb3 e3 d3 b3] [b2 c3 eb3] [d3 g2 fs2 eb3]")
  .slow(2.7)
  .sound("piano")
  .lpf(cosine.range(70,2300).slow(4.8))
  .gain(0.42)
  .jux(rev)

$: note("g2 [eb2 bb1 ab1 g1]")
  .slow(5.2)
  .sound("supersaw")
  .gain(0.3)
  .fmi(tri.range(1,15).slow(3))
  .leslie(sine.range(0.3,0.9).slow(1.5))

$: stack(
  s("bd*2,~bd,bd").euclid(9,16).gain(0.74),
  s("~sn*2,cp,~").euclid(8,16).gain(0.4),
  s("hh*8,~oh*2,rim*2,cp").crush(12).hpf(4500).gain(0.27).pan(sine.range(0,1))
).room(0.5)
  .swing(0.4)
  .degradeBy(0.2)
  
  .every(8, rev)

$: note("g4 [fs4 e4 d4 c4] [bb3 c4 eb4] [d4 g3 fs3 eb3]")
  .slow(1.8)
  .sound("sawtooth")
  .gain(0.37)
  .lpf(perlin.range(350,4200).slow(2.8))
  .phaser(sine.range(0.1,0.7).slow(2.5))

$: stack(
  s("goldberg_variations")
    .slow(7.2)
    .chop(32)
    .speed(sine.range(0.78,1.22).slow(2))
    .lpf(cosine.range(250,1400).slow(7))
    .gain(0.25),
  s("goldberg_variations,bach")
    .chop(30)
    .speed(rand.range(0.75,1.25))
    .lpf(perlin.range(300,1500).slow(4))
    .gain(0.22)
    .striate(4)
).delay(0.4)
  .vowel("a o u e i")
  .pan(sine.slow(4.2))
  .room(0.35)

$: s("goldberg_variations")
  .slow(10.5)
  .chop(28)
  .speed(rand.range(0.55,1.45))
  .crush(10)
  .lpf(saw.range(75,800).slow(10))