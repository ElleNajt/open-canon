samples('shabda/speech:goldberg_variations,bach')
setcps(120/60/4)

$: note("g3 [ab3 e3 d3 b3] [bb2 c3 eb3] [d3 g2 fs2 eb3 g2]")
  .slow(2.6)
  .sound("piano")
  .lpf(sine.range(80,3200).slow(3.8))
  .gain(0.62)
  .jux(rev)

$: note("g2 [eb2 bb1 ab1 g1 eb1 bb1]")
  .slow(5.5)
  .sound("sine")
  .gain(0.44)
  .fmi(perlin.range(2,22).slow(2.8))
  .ring(0.3)

$: stack(
  s("bd*2,~bd,bd*3").euclid(6,16).gain(0.88),
  s("~sn*3,cp,~sn").euclid(5,16).gain(0.52),
  s("hh*8,~oh*4,rim*4").crush(7).hpf(2800).gain(0.4).pan(saw.range(0,1)).sometimes(rev)
).room(0.68)
  .swing(0.38)
  .degradeBy(0.28)
  

$: note("g4 [fs4 e4 d4 c4] [bb3 c4 eb4 g4] [d4 g3 fs3 eb3]")
  .slow(2)
  .sound("pulse")
  .gain(0.5)
  .lpf(perlin.range(200,5800).slow(2.9))
  .detune(rand.range(-30,30))

$: stack(
  s("goldberg_variations")
    .slow(7.2)
    .chop(30)
    .speed(sine.range(0.7,1.3).slow(1.8))
    .lpf(perlin.range(200,2400).slow(4.8))
    .gain(0.38),
  s("goldberg_variations,bach")
    .chop(22)
    .speed(rand.range(0.6,1.4))
    .vowel("a e o i u")
    .gain(0.32)
).delay(0.48)
  .phaser(sine.range(0.25,0.75).slow(2.5))
  .pan(tri.slow(3.8))
  .room(0.58)

$: s("bach,goldberg_variations*2")
  .slow(11)
  .speed(rand.range(0.5,1.5))
  .gain(0.34)
  .crush(5)
  .leslie(0.5)