samples('shabda/speech:goldberg_variations,bach,johann')
setcps(132/60/4)

$: stack(
  note("g3 [bb3 g3 f3 ds3] [a3 c4 eb4 bb4] [fs3 b3 d4 fs4]")
    .slow(3.5)
    .sound("supersaw")
    .lpf(sine.range(120,3600).slow(3.8))
    .gain(0.68)
    .detune(rand.range(-32,26)),
  note("g4 [fs4 e4 ds4 c4 bb3] [c4 eb4 g4 a4] [g3 fs3 eb3 ds3]")
    .slow(2.9)
    .sound("pulse")
    .gain(0.62)
    .lpf(perlin.range(160,5800).slow(3.5))
    .accelerate(0.018)
).juxBy(0.68,rev)
  .every(7,rev)
  .room(0.38)

$: note("g1 [eb2 bb1 a1 fs1] [eb1 ds1 b0] bb0")
  .slow(6.2)
  .sound("sawtooth")
  .gain(0.62)
  .fmi(perlin.range(9,26).slow(3.1))
  .ring(sine.range(0.32,0.72).slow(3.9))
  .lpq(1.8)

$: stack(
  s("bd*2,~bd,bd*3,~lt").euclid(11,16).gain(0.88),
  s("~sn*3,cp,~sn,rim").euclid(8,16).gain(0.72),
  s("hh*8,~oh*4,rim*4,cp").crush(5).hpf(2800).gain(0.48)
).room(0.82)
  .swing(0.42)
  .degradeBy(0.28)
  .tremolo(sine.range(0.12,0.38).slow(6.4))

$: stack(
  s("goldberg_variations")
    .slow(8.2)
    .chop(42)
    .speed(sine.range(0.72,1.38).slow(2.4))
    .lpf(cosine.range(120,2800).slow(4.8))
    .gain(0.48),
  s("goldberg_variations,bach")
    .chop(28)
    .speed(rand.range(0.68,1.42))
    .vowel("e o a u i")
    .gain(0.44)
).delay(0.48)
  .phaser(sine.range(0.52,0.92).slow(3.1))
  .pan(tri.slow(3.9))
  .room(0.75)

$: s("bach,johann,goldberg_variations*3")
  .slow(12.8)
  .speed(perlin.range(0.62,1.48))
  .gain(0.48)
  .leslie(sine.range(0.28,0.92).slow(3.9))
  .distort(0.12)

$: note("gs2 [bb2 ds3 g3] [eb2 g2 bb2 ds3] [ds2 f2 ab2 c3 eb3]")
  .slow(4.4)
  .sound("sine")
  .lpf(saw.range(180,720).slow(5.8))
  .gain(0.44)
  .pan(perlin.range(0.22,0.78))
  .tremolosync(4.2)