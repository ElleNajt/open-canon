samples('shabda/speech:goldberg_variations,bach,johann,variation,fugue')
setcps(148/60/4)

$: stack(
  note("gs3:minor [ab3 fs3 f3 d3 bb3 c4:maj] [c4 eb4:maj a4 g4 fs4 b3] [ds4 g4 fs4 e4]").voicing()
    .slow(perlin.range(1.2,15))
    .sound("supersaw")
    .lpf(perlin.range(160,6200).slow(3.2))
    .gain(0.78)
    .tremolo(perlin.range(0.2,0.7).slow(6)),
  note("gs4 [g4 fs4 f4 d4 bb3 a3 eb4:maj] [f4 gs4 a4 b4 c5 gs4:maj] [g3 f3 e3 ds3]")
    .slow(rand.range(1.1,12))
    .sound("pulse")
    .gain(0.8)
    .lpf(saw.range(140,7200).slow(2.6))
    .phaser(cosine.range(0.3,1.5).slow(3.8))
).jux(rev)
  .room(0.82)
  .every(3,x=>x.rev().transpose(perlin.range(-4,6)))
  .delay(0.38)

$: note("gs1 [e2 a1 gs1 f1] [d1 f1 ds1 b0 gs0] [f0 a0 gs0 e0 ds1]")
  .slow(perlin.range(1.4,12))
  .sound("sawtooth")
  .gain(0.83)
  .fmi(perlin.range(12,52).slow(3.2))
  .bpf(sine.range(110,950).slow(2.8))

$: stack(
  s("bd*4,~bd*2,bd,~lt,bd*3").euclid(8,16).gain(0.88),
  s("~sn,cp*2,~sn*2,rim*3,cp*2").euclid(10,16).gain(0.86),
  s("hh*8,oh*3,rim*5,cp*3,hh*2").euclid(12,16).coarse(perlin.range(0.25,0.9)).hpf(2600).distort(0.35).gain(0.78)
).room(0.85)
  .swing(cosine.range(0.6,0.98))
  .sometimesBy(0.4,rev)
  .degradeBy(0.28)

$: stack(
  s("goldberg_variations*4?,bach*2,johann*3,fugue").slow(perlin.range(1.1,11))
    .striate(rand.range(26,52))
    .speed(perlin.range(-0.4,1.5).slow(3.8))
    .lpf(sine.range(220,5200).slow(4.2))
    .gain(0.73),
  s("variation*4,fugue*3,johann,bach*2")
    .striate(perlin.range(25,52))
    .speed(tri.range(-0.4,1.6).slow(2.3))
    .vowel("e a o u i")
    .stretch(perlin.range(0.85,1.45))
    .gain(0.68),
  s("bach*3,fugue*4,goldberg_variations*3,variation")
    .chop(rand.range(28,52))
    .speed(saw.range(-0.5,1.6).slow(3))
    .gain(0.63)
).phaser(rand.range(0.4,1.5).slow(3.2))
  .pan(sine.range(0.15,0.95).slow(4.8))
  .room(0.9)

$: stack(
  note("g2 [ab2 ds3 gs3 bb3:maj] [bb3 eb2 gs2 ab2 ds3] [fs3 ds2 f2 ab2 c3 d3 fs3 g3] ~ [eb2 bb2 ds3 fs3]")
    .slow(rand.range(1.6,13))
    .sound("triangle")
    .lpf(perlin.range(120,4800).slow(4.2))
    .gain(0.85)
    .ring(perlin.range(0.25,0.95).slow(3.8)),
  note("gs2:maj [bb2 ds3]")
    .slow(perlin.range(2.2,14))
    .sound("sine")
    .gain(0.38)
    .lpf(sine.range(230,2600).slow(5.2))
    .detune(perlin.range(-35,55).slow(5))
).room(0.93)