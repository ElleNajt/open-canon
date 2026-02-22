samples('shabda/speech:goldberg_variations,bach,johann,variation,fugue')
setcps(160/60/4)

$: stack(
  note("gs3:minor [ab3 fs3 f3 d3 bb3 c4:maj] [c4 eb4:maj a4 g4 fs4 b3] [ds4 g4 fs4 e4]").voicing()
    .slow(rand.range(1.1,15))
    .sound("supersaw")
    .lpf(perlin.range(160,6000).slow(3))
    .gain(0.78)
    .slide(perlin.range(0.2,0.6)),
  note("gs4 [g4 fs4 f4 d4 bb3 a3 eb4:maj] [f4 gs4 a4 b4 c5 gs4:maj] [g3 f3 e3 ds3]")
    .slow(perlin.range(1.3,13))
    .sound("pulse")
    .gain(0.8)
    .lpf(saw.range(150,7000).slow(2.5))
    .accelerate(cosine.range(0.1,0.4))
).jux(rev)
  .room(0.85)
  .every(3,x=>x.rev().transpose(rand.range(-4,6)))
  .degradeBy(0.12)

$: note("gs1 [e2 a1 gs1 f1] [d1 f1 ds1 b0 gs0] [f0 a0 gs0 e0 ds1]")
  .slow(rand.range(1.4,12))
  .sound("sawtooth")
  .gain(0.88)
  .fmi(sine.range(12,52).slow(3))
  .bpf(perlin.range(110,1000).slow(2.7))
  .hpf(45)

$: stack(
  s("bd*4,~bd*2,bd,~lt,bd*3,~bd").euclid(10,16).gain(0.92),
  s("~sn,cp*2,~sn*2,rim*3,cp*2").euclid(12,16).gain(0.9),
  s("hh*8,oh*3,rim*5,cp*3,hh*2").euclid(14,16).coarse(saw.range(0.25,0.9)).hpf(2600).distort(0.42).gain(0.82)
).room(0.9)
  .swing(perlin.range(0.6,0.98))
  .sometimesBy(0.4,rev)
  .ply(rand.range(1,3))

$: stack(
  s("johann*3,bach*4,goldberg_variations*2,variation*3,fugue?").slow(rand.range(1.1,11))
    .striate(perlin.range(30,52))
    .speed(sine.range(-0.4,1.45).slow(3.8))
    .lpf(tri.range(220,5000).slow(4))
    .gain(0.77),
  s("fugue*4,variation*3,johann*2,bach,goldberg_variations*2")
    .striate(rand.range(28,52))
    .speed(perlin.range(-0.5,1.6).slow(2.3))
    .vowel("e a o u i")
    .stretch(saw.range(0.85,1.45))
    .gain(0.72),
  s("bach*3,fugue*4,goldberg_variations*3,variation*3?,johann")
    .chop(perlin.range(32,52))
    .speed(rand.range(-0.45,1.55).slow(3))
    .gain(0.68)
).phaser(sine.range(0.4,1.5).slow(3.2))
  .pan(cosine.range(0.15,0.95).slow(4.5))
  .room(0.94)

$: stack(
  note("g2 [ab2 ds3 gs3 bb3:maj] [bb3 eb2 gs2 ab2 ds3] [fs3 ds2 f2 ab2 c3 d3 fs3 g3] ~ [eb2 bb2 ds3 fs3]")
    .slow(perlin.range(1.6,14))
    .sound("triangle")
    .lpf(sine.range(130,4800).slow(4))
    .gain(0.89)
    .ring(saw.range(0.25,0.95).slow(3.8)),
  note("gs2:maj [bb2 ds3] [eb3 g3]")
    .slow(rand.range(2.2,14))
    .sound("sine")
    .gain(0.42)
    .lpf(perlin.range(240,2600).slow(5))
    .detune(tri.range(-45,55).slow(4.5))
).room(0.96)
  .late(0.03)
  .detune(rand.range(-12,12))