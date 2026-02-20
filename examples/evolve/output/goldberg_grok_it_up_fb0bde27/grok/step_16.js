samples('shabda/speech:goldberg_variations,bach')
setcps(115/60/4)

$: note("g3 [ab3 e3 d3 b3] [bb2 c3 eb3] [d3 g2 fs2 eb3]")
  .slow(2.4)
  .sound("piano")
  .lpf(sine.range(120,2800).slow(3.2))
  .gain(0.6)
  .jux(rev)

$: note("g2 [eb2 bb1 ab1 g1 eb1]")
  .slow(5.2)
  .sound("triangle")
  .gain(0.42)
  .fmi(perlin.range(3,20).slow(2.5))
  .ring(0.25)

$: stack(
  s("bd*2,~bd,bd").euclid(7,16).gain(0.9),
  s("~sn*3,cp,~").euclid(6,16).gain(0.5),
  s("hh*8,~oh*3,rim*3").crush(8).hpf(3200).gain(0.38).pan(saw.range(0,1))
).room(0.7)
  .swing(0.4)
  .degradeBy(0.3)
  .compressor()

$: note("g4 [fs4 e4 d4 c4] [bb3 c4 eb4] [d4 g3 fs3 eb3]")
  .slow(2.1)
  .sound("pulse")
  .gain(0.48)
  .lpf(saw.range(250,5500).slow(2.8))
  .detune(rand.range(-25,25))

$: stack(
  s("goldberg_variations")
    .slow(7)
    .chop(28)
    .speed(sine.range(0.75,1.25).slow(2))
    .lpf(perlin.range(300,2200).slow(5.5))
    .gain(0.35),
  s("goldberg_variations,bach")
    .chop(20)
    .speed(rand.range(0.65,1.35))
    .vowel("a o i")
    .gain(0.3)
).delay(0.5)
  .phaser(sine.range(0.3,0.7).slow(2.2))
  .pan(tri.slow(4))
  .room(0.55)

$: s("bach,goldberg_variations")
  .slow(10)
  .speed(rand.range(0.55,1.45))
  .gain(0.32)
  .distort(0.18)
  .leslie(0.45)