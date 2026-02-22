samples('shabda/speech:goldberg_variations,bach')
setcps(104/60/4)

$: note("g3 [gb3 e3 d3 b3] [b2 c3 eb3] [d3 g2 fs2 eb3]")
  .slow(2.4)
  .sound("piano")
  .lpf(cosine.range(90,2500).slow(5))
  .gain(0.45)
  .tremolo(sine.range(0.1,0.4).slow(3))

$: note("g2 [eb2 bb1 ab1 g1]")
  .slow(4.8)
  .sound("supersaw")
  .gain(0.32)
  .fmi(saw.range(2,18).slow(2.5))
  .phaser(cosine.range(0.2,0.8).slow(2))

$: stack(
  s("bd*2,~bd,bd").euclid(10,16).gain(0.78),
  s("~sn*2,cp,~").euclid(9,16).gain(0.42),
  s("hh*8,~oh*2,rim*2,cp").crush(10).hpf(4200).gain(0.3).pan(tri.range(0,1))
).room(0.55)
  .swing(0.35)
  .degradeBy(0.25)
  
  .every(7, rev)

$: note("g4 [fs4 e4 d4 c4] [bb3 c4 eb4] [d4 g3 fs3 eb3]")
  .slow(1.6)
  .sound("sawtooth")
  .gain(0.4)
  .lpf(perlin.range(400,4500).slow(3))
  .detune(rand.range(-20,20))

$: stack(
  s("goldberg_variations")
    .slow(6.8)
    .chop(36)
    .speed(sine.range(0.8,1.2).slow(1.8))
    .lpf(cosine.range(280,1600).slow(6.5))
    .gain(0.28),
  s("goldberg_variations,bach")
    .chop(32)
    .speed(rand.range(0.7,1.3))
    .lpf(perlin.range(350,1700).slow(3.5))
    .gain(0.24)
    .striate(5)
).delay(0.45)
  .vowel("a e o i u")
  .pan(sine.slow(3.8))
  .room(0.4)

$: s("goldberg_variations")
  .slow(9.8)
  .chop(32)
  .speed(rand.range(0.6,1.4))
  .crush(8)
  .lpf(tri.range(100,900).slow(9))