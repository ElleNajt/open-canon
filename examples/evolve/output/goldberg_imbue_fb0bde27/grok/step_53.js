samples('shabda/speech:goldberg_variations,bach,johann,variation,fugue')
setcps(168/60/4)

$: stack(
  note("gs3:minor [ab3 fs3 f3 d3 bb3 c4:maj] [c4 eb4:maj a4 g4 fs4 b3] [ds4 g4 fs4 e4]")
    .slow(perlin.range(1,12))
    .sound("supersaw")
    .lpf(perlin.range(200,6000).slow(4))
    .gain(0.82)
    .tremolo(sine.range(0.5,0.9).slow(3)),
  note("gs4 [g4 fs4 f4 d4 bb3 a3 eb4:maj] [f4 gs4 a4 b4 c5 gs4:maj] [g3 f3 e3 ds3]")
    .slow(rand.range(1,9))
    .sound("pulse")
    .gain(0.8)
    .lpf(saw.range(150,6500).slow(3))
    .phaser(cosine.range(0.5,1.2).slow(3))
).jux(rev)
  .room(0.8)
  .every(4,x=>x.rev().transpose(perlin.range(-4,6)))
  .detune(rand.range(-30,35).slow(3))

$: note("gs1 [e2 a1 gs1 f1] [d1 f1 ds1 b0 gs0] [f0 a0 gs0 e0 ds1]")
  .slow(perlin.range(2,12))
  .sound("sawtooth")
  .gain(0.88)
  .fmi(perlin.range(18,45).slow(4))
  .bpf(sine.range(150,850).slow(2.5))

$: stack(
  s("bd*4,~bd*2,bd,~lt,bd*3").euclid(13,16).gain(0.92),
  s("~sn,cp*2,~sn*2,rim*3,cp*2").euclid(11,16).gain(0.87),
  s("hh*8,oh*3,rim*5,cp*3,hh*2").euclid(15,16).crush(perlin.range(6,12)).hpf(2500).distort(0.35).gain(0.78)
).room(0.92)
  .swing(cosine.range(0.6,0.92))
  .sometimes(rev)
  .delay(0.5)
  .degradeBy(0.25)

$: stack(
  s("goldberg_variations*3,bach*3,johann*2,fugue*2")
    .slow(perlin.range(1,9))
    .chop(rand.range(30,52))
    .speed(perlin.range(-0.6,1.5).slow(3.8))
    .lpf(sine.range(200,4800).slow(5))
    .gain(0.78),
  s("variation*3,fugue*4,johann*2,bach")
    .chop(perlin.range(35,54))
    .speed(tri.range(-0.6,1.6).slow(2.2))
    .vowel("a o u e i")
    .stretch(perlin.range(0.95,1.5))
    .gain(0.72),
  s("bach*2,fugue*3,goldberg_variations*4,variation*2")
    .chop(rand.range(32,52))
    .speed(saw.range(-0.7,1.6).slow(3))
    .gain(0.68)
).phaser(rand.range(0.6,1.3).slow(4))
  .pan(sine.range(0.25,0.85).slow(4.5))
  .room(0.9)

$: note("g2 [ab2 ds3 gs3 bb3:maj] [bb3 eb2 gs2 ab2 ds3] [fs3 ds2 f2 ab2 c3 d3 fs3 g3] ~ [eb2 bb2 ds3 fs3]")
  .slow(rand.range(2,13))
  .sound("triangle")
  .lpf(perlin.range(160,4200).slow(4))
  .gain(0.85)
  .ring(perlin.range(0.35,0.85).slow(3.5))

$: note("gs2:maj [bb2 ds3]")
  .slow(perlin.range(3,14))
  .sound("sine")
  .gain(0.38)
  .lpf(sine.range(280,2200).slow(5.2))
  .room(0.96)
  .detune(perlin.range(-45,45).slow(6))