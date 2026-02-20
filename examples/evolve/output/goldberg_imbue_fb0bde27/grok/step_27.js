samples('shabda/speech:goldberg_variations,bach,johann')
setcps(128/60/4)

$: stack(
  note("g3 [bb3 g3 f3 ds3] [a3 c4 eb4 bb4] [fs3 b3 d4 fs4]")
    .slow(4)
    .sound("supersaw")
    .lpf(sine.range(100,3800).slow(4))
    .gain(0.7)
    .detune(rand.range(-28,28)),
  note("g4 [fs4 e4 ds4 c4 bb3] [c4 eb4 g4 a4] [g3 fs3 eb3 ds3]")
    .slow(3)
    .sound("pulse")
    .gain(0.65)
    .lpf(perlin.range(140,6000).slow(3.8))
    .accelerate(0.02)
).juxBy(0.7,rev)
  .room(0.4)
  .sometimes(rev)

$: note("g1 [eb2 bb1 a1 fs1] [eb1 ds1 b0] bb0")
  .slow(6.5)
  .sound("sawtooth")
  .gain(0.65)
  .fmi(perlin.range(8,28).slow(3.2))
  .ring(sine.range(0.3,0.75).slow(4))
  .lpq(2)

$: stack(
  s("bd*2,~bd,bd*3,~lt").euclid(12,16).gain(0.9),
  s("~sn*3,cp,~sn,rim").euclid(9,16).gain(0.75),
  s("hh*8,~oh*4,rim*4,cp").crush(4).hpf(3000).gain(0.5)
).room(0.85)
  .swing(0.45)
  .degradeBy(0.25)
  .tremolo(sine.range(0.15,0.4).slow(6))

$: stack(
  s("goldberg_variations")
    .slow(8.5)
    .chop(48)
    .speed(sine.range(0.7,1.4).slow(2.5))
    .lpf(cosine.range(100,3000).slow(5))
    .gain(0.5),
  s("goldberg_variations,bach")
    .chop(32)
    .speed(rand.range(0.65,1.45))
    .vowel("a e o u i")
    .gain(0.46)
).delay(0.5)
  .phaser(sine.range(0.5,0.95).slow(3.2))
  .pan(tri.slow(4))
  .room(0.78)

$: s("bach,johann,goldberg_variations*4")
  .slow(13.5)
  .speed(perlin.range(0.6,1.5))
  .gain(0.5)
  .leslie(sine.range(0.25,0.95).slow(4))
  .distort(0.15)
  .degradeBy(0.18)

$: note("gs2 [bb2 ds3 g3] [eb2 g2 bb2 ds3] [ds2 f2 ab2 c3 eb3]")
  .slow(4.8)
  .sound("sine")
  .lpf(saw.range(160,800).slow(6))
  .gain(0.46)
  .pan(perlin.range(0.2,0.8))
  .tremolosync(4.5)