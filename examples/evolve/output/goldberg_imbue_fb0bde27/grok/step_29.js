samples('shabda/speech:goldberg_variations,bach,johann')
setcps(128/60/4)

$: stack(
  note("g3 [bb3 g3 f3 ds3] [a3 c4 eb4 bb4] [fs3 b3 d4 fs4]")
    .slow(4)
    .sound("supersaw")
    .lpf(cosine.range(100,4500).slow(4))
    .gain(0.75)
    .detune(perlin.range(-28,28)),
  note("g4 [fs4 e4 ds4 c4 bb3] [c4 eb4 g4 a4] [g3 fs3 eb3 ds3]")
    .slow(3)
    .sound("pulse")
    .gain(0.7)
    .lpf(saw.range(150,7000).slow(3.5))
    .slide(0.015)
).juxBy(0.75,rev)
  .room(0.45)
  .every(8,rev)

$: note("g1 [eb2 bb1 a1 fs1] [eb1 ds1 b0] bb0")
  .slow(6)
  .sound("sawtooth")
  .gain(0.7)
  .fmi(tri.range(8,32).slow(4))
  .ring(rand.range(0.3,0.85).slow(4))
  .lpq(2)

$: stack(
  s("bd*3,~bd,bd*4,~lt").euclid(12,16).gain(0.9),
  s("~sn*2,cp*2,~sn,rim*2").euclid(11,16).gain(0.8),
  s("hh*8,~oh*3,rim*5,cp*2").crush(4).hpf(3000).gain(0.55)
).room(0.85)
  .swing(0.5)
  .degradeBy(0.25)
  .tremolo(sine.range(0.15,0.45).slow(5))

$: stack(
  s("goldberg_variations")
    .slow(8)
    .chop(64)
    .speed(perlin.range(0.65,1.45).slow(3))
    .lpf(sine.range(80,3500).slow(5))
    .gain(0.55),
  s("goldberg_variations,bach")
    .chop(42)
    .speed(cosine.range(0.6,1.5))
    .vowel("a e o u i")
    .gain(0.5)
).delay(0.5)
  .phaser(saw.range(0.5,1).slow(4))
  .pan(tri.slow(4))
  .room(0.82)

$: s("bach,johann,goldberg_variations*4,bach")
  .slow(13)
  .speed(perlin.range(0.55,1.55))
  .gain(0.55)
  .leslie(sine.range(0.25,1).slow(4.5))
  .coarse(12)
  .degradeBy(0.25)

$: note("gs2 [bb2 ds3 g3] [eb2 g2 bb2 ds3] [ds2 f2 ab2 c3 eb3]")
  .slow(4.5)
  .sound("sine")
  .lpf(saw.range(120,1000).slow(6))
  .gain(0.5)
  .pan(rand.range(0.2,0.8))
  .tremolosync(4)