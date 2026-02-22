samples('shabda/speech:goldberg_variations,bach,johann,variation,fugue')
setcps(165/60/4)

$: stack(
  note("gs3:minor [ab3 fs3 f3 d3 bb3 c4:minor] [c4 eb4:maj a4 g4 fs4 b3] [ds4 g4 fs4 e4]")
    .slow(perlin.range(1,12))
    .sound("supersaw")
    .lpf(perlin.range(150,6000).slow(4))
    .gain(0.78)
    .tremolo(sine.range(0.4,0.8).slow(3)),
  note("gs4 [g4 fs4 f4 d4 bb3 a3 eb4:maj] [f4 gs4 a4 b4 c5 gs4:minor] [g3 f3 e3 ds3]")
    .slow(rand.range(1,9))
    .sound("pulse")
    .gain(0.75)
    .lpf(saw.range(100,6500).slow(4))
    .phaser(cosine.range(0.4,1.2).slow(3))
).jux(rev)
  .room(0.75)
  .every(6,x=>x.rev().transpose(perlin.range(-4,6)))
  .detune(rand.range(-30,35).slow(3))

$: note("gs1 [e2 a1 gs1 f1] [d1 f1 ds1 b0 gs0] [f0 a0 gs0 e0 ds1]")
  .slow(perlin.range(2,11))
  .sound("sawtooth")
  .gain(0.88)
  .fmi(perlin.range(12,45).slow(4))
  .bpf(sine.range(110,850).slow(2.5))

$: stack(
  s("bd*4,~bd*2,bd,~lt,bd*3").euclid(12,16).gain(0.92),
  s("~sn,cp*2,~sn*2,rim*3,cp*2").euclid(11,16).gain(0.82),
  s("hh*8,oh*3,rim*5,cp*3,hh*2").euclid(13,16).crush(perlin.range(4,12)).hpf(2600).distort(0.35).gain(0.72)
).room(0.88)
  .swing(cosine.range(0.55,0.92))
  .sometimes(rev)
  .delay(0.45)
  .degradeBy(0.18)

$: stack(
  s("goldberg_variations*3,bach*2,johann,fugue")
    .slow(perlin.range(1,9))
    .chop(rand.range(24,52))
    .speed(perlin.range(-0.6,1.5).slow(4))
    .lpf(sine.range(150,4800).slow(5))
    .gain(0.74),
  s("variation*3,fugue*4,johann*2")
    .chop(perlin.range(28,52))
    .speed(tri.range(-0.65,1.6).slow(2.2))
    .vowel("a e o u i")
    .stretch(perlin.range(0.85,1.5))
    .gain(0.68),
  s("bach,fugue*3,goldberg_variations*2,variation")
    .chop(rand.range(25,50))
    .speed(saw.range(-0.75,1.6).slow(3))
    .gain(0.64)
).phaser(rand.range(0.5,1.3).slow(4))
  .pan(sine.range(0.15,0.85).slow(4.5))
  .room(0.85)

$: note("g2 [ab2 ds3 gs3 bb3:minor] [bb3 eb2 gs2 ab2 ds3] [fs3 ds2 f2 ab2 c3 d3 fs3 g3] ~ [eb2 bb2 ds3 fs3]")
  .slow(rand.range(2,12))
  .sound("triangle")
  .lpf(perlin.range(120,4000).slow(3.8))
  .gain(0.8)
  .ring(perlin.range(0.25,0.85).slow(3.5))

$: note("gs2:minor [bb2 ds3]")
  .slow(perlin.range(4,14))
  .sound("sine")
  .gain(0.34)
  .lpf(sine.range(280,1900).slow(5.5))
  .room(0.93)
  .detune(perlin.range(-45,45).slow(6))