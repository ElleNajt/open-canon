samples('shabda/speech:goldberg_variations,bach,johann')
setcps(132/60/4)

$: stack(
  note("g3 [bb3 g3 f3 ds3] [a3 c4 eb4 bb4] [fs3 b3 d4 fs4]")
    .slow(3.8)
    .sound("supersaw")
    .lpf(sine.range(80,4200).slow(3.5))
    .gain(0.72)
    .detune(perlin.range(-32,32)),
  note("g4 [fs4 e4 ds4 c4 bb3] [c4 eb4 g4 a4] [g3 fs3 eb3 ds3]")
    .slow(2.9)
    .sound("pulse")
    .gain(0.68)
    .lpf(saw.range(120,6500).slow(4))
    .accelerate(0.018)
).juxBy(0.72,rev)
  .room(0.42)
  .every(7,rev)

$: note("g1 [eb2 bb1 a1 fs1] [eb1 ds1 b0] bb0")
  .slow(6.2)
  .sound("sawtooth")
  .gain(0.68)
  .fmi(sine.range(7,30).slow(3.5))
  .ring(perlin.range(0.25,0.8).slow(3.8))
  .lpq(1.8)

$: stack(
  s("bd*3,~bd,bd*4,~lt").euclid(13,16).gain(0.92),
  s("~sn*2,cp*2,~sn,rim*2").euclid(10,16).gain(0.78),
  s("hh*8,~oh*3,rim*5,cp*2").crush(3.5).hpf(2800).gain(0.52)
).room(0.88)
  .swing(0.48)
  .degradeBy(0.22)
  .tremolo(cosine.range(0.12,0.42).slow(5.5))

$: stack(
  s("goldberg_variations")
    .slow(8.2)
    .chop(52)
    .speed(perlin.range(0.68,1.42).slow(2.8))
    .lpf(tri.range(90,3200).slow(4.8))
    .gain(0.52),
  s("goldberg_variations,bach")
    .chop(36)
    .speed(sine.range(0.62,1.48))
    .vowel("e a o i u")
    .gain(0.48)
).delay(0.48)
  .phaser(perlin.range(0.48,0.98).slow(3.5))
  .pan(saw.slow(3.8))
  .room(0.8)

$: s("bach,johann,goldberg_variations*3,bach")
  .slow(13.2)
  .speed(rand.range(0.58,1.52))
  .gain(0.52)
  .leslie(cosine.range(0.22,0.98).slow(4.2))
  .distort(0.18)
  .degradeBy(0.2)

$: note("gs2 [bb2 ds3 g3] [eb2 g2 bb2 ds3] [ds2 f2 ab2 c3 eb3]")
  .slow(4.5)
  .sound("sine")
  .lpf(perlin.range(140,900).slow(5.8))
  .gain(0.48)
  .pan(rand.range(0.15,0.85))
  .tremolosync(4.2)