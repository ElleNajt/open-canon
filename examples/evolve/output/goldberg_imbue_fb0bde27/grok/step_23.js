samples('shabda/speech:goldberg_variations,bach,johann')
setcps(128/60/4)

$: stack(
  note("g3 [a3 f3 ds3 b3~] [bb2 c3 eb3 g3] [d3 g2 fs2 d3 g2]")
    .slow(3.1)
    .sound("supersaw")
    .lpf(sine.range(90,3600).slow(3.8))
    .gain(0.68)
    .detune(rand.range(-22,18)),
  note("g4 [fs4 e4 ds4 c4 bb3] [c4 eb4 g4 ds4] [g3 fs3 eb3 ds3]")
    .slow(2.5)
    .sound("pulse")
    .gain(0.62)
    .lpf(perlin.range(120,5800).slow(2.9))
    .slide(0.28)
).juxBy(0.68,rev)

$: note("g1 [eb2 bb1 a1 g1] eb1 ds1")
  .slow(6.2)
  .sound("sawtooth")
  .gain(0.56)
  .fmi(perlin.range(6,26).slow(2.7))
  .tremolo(sine.range(0.42,0.72).slow(5.1))

$: stack(
  s("bd*2,~bd,bd*3,~lt").euclid(9,16).gain(0.88),
  s("~sn*3,cp,~sn,rim").euclid(8,16).gain(0.66),
  s("hh*8,~oh*4,rim*4,cp").crush(5).hpf(2800).gain(0.46).pan(saw.range(0,1).fast(2))
).room(0.82)
  .swing(0.42)
  .degradeBy(0.22)
  .compressor()

$: stack(
  s("goldberg_variations")
    .slow(8.2)
    .chop(32)
    .speed(sine.range(0.72,1.38).slow(1.8))
    .lpf(cosine.range(160,2800).slow(4.8))
    .gain(0.42),
  s("goldberg_variations,bach")
    .chop(28)
    .speed(rand.range(0.68,1.42))
    .vowel("e a o u i")
    .gain(0.38)
).delay(0.48)
  .phaser(sine.range(0.52,0.85).slow(3.1))
  .pan(tri.slow(3.9))
  .room(0.76)
  .crush(3)

$: s("bach,johann,~goldberg_variations*2,bach")
  .slow(12.3)
  .speed(perlin.range(0.62,1.48))
  .gain(0.42)
  .leslie(sine.range(0.28,0.92).slow(3.9))
  .vowel("a e i o u")
  .hpf(180)

$: note("gs2 [bb2 ds3 g3] [eb2 g2 bb2] [ds2 f2 ab2 bb2]")
  .slow(4.4)
  .sound("sine")
  .lpf(sine.range(220,620).slow(5.8))
  .gain(0.38)
  .pan(perlin.range(0.2,0.8))