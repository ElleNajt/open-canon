samples('shabda/speech:goldberg_variations,bach,johann')
setcps(132/60/4)

$: stack(
  note("g3 [bb3 g3 f3 ds3] [a3 c4 eb4 g4] [fs3 b3 d4 g3]")
    .slow(3.3)
    .sound("supersaw")
    .lpf(sine.range(110,3800).slow(4.1))
    .gain(0.72)
    .detune(rand.range(-28,22)),
  note("g4 [fs4 e4 ds4 c4 bb3] [c4 eb4 g4 fs4] [g3 fs3 eb3 d3]")
    .slow(2.7)
    .sound("pulse")
    .gain(0.65)
    .lpf(perlin.range(140,6000).slow(3.2))
    .slide(0.32)
).juxBy(0.72,rev)
  .sometimes(rev)

$: note("g1 [eb2 bb1 a1 fs1] eb1 ds1")
  .slow(6.5)
  .sound("sawtooth")
  .gain(0.6)
  .fmi(perlin.range(8,28).slow(2.9))
  .tremolo(sine.range(0.38,0.76).slow(5.4))

$: stack(
  s("bd*2,~bd,bd*3,~lt").euclid(10,16).gain(0.92),
  s("~sn*3,cp,~sn,rim").euclid(7,16).gain(0.7),
  s("hh*8,~oh*4,rim*4,cp").crush(4).hpf(3000).gain(0.5).pan(saw.range(0,1).fast(2.1))
).room(0.85)
  .swing(0.38)
  .degradeBy(0.28)
  .compressor()

$: stack(
  s("goldberg_variations")
    .slow(8.5)
    .chop(36)
    .speed(sine.range(0.68,1.42).slow(2.1))
    .lpf(cosine.range(140,3000).slow(5.2))
    .gain(0.46),
  s("goldberg_variations,bach")
    .chop(32)
    .speed(rand.range(0.65,1.45))
    .vowel("e a o u i")
    .gain(0.42)
).delay(0.52)
  .phaser(sine.range(0.48,0.88).slow(3.4))
  .pan(tri.slow(4.2))
  .room(0.8)
  .crush(4)

$: s("bach,johann,~goldberg_variations*2,bach")
  .slow(13.1)
  .speed(perlin.range(0.58,1.52))
  .gain(0.46)
  .leslie(sine.range(0.25,0.95).slow(4.2))
  .vowel("a e i o u")
  .hpf(200)

$: note("gs2 [bb2 ds3 g3] [eb2 g2 bb2] [ds2 f2 ab2 c3]")
  .slow(4.7)
  .sound("sine")
  .lpf(sine.range(200,680).slow(6.1))
  .gain(0.42)
  .pan(perlin.range(0.18,0.82))
  .lpq(1.6)