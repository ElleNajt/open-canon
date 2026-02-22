samples('shabda/speech:goldberg_variations,bach,johann,variation,fugue')
setcps(162/60/4)

$: stack(
  note("gs3:minor [ab3 fs3 f3 d3 bb3 c4:minor] [c4 eb4:maj a4 g4 fs4 b3] [ds4 g4 fs4 e4]")
    .slow(perlin.range(1.1,12.8))
    .sound("supersaw")
    .lpf(perlin.range(80,6000).slow(2.9))
    .gain(0.74)
    .phaser(cosine.range(0.4,0.8).slow(1.9)),
  note("gs4 [g4 fs4 f4 d4 bb3 a3 eb4:maj] [f4 gs4 a4 b4 c5 gs4:minor] [g3 f3 e3 ds3]")
    .slow(rand.range(1.2,9))
    .sound("pulse")
    .gain(0.71)
    .lpf(saw.range(100,6500).slow(3.1))
    .tremolo(sine.range(0.2,0.6).slow(2.5))
).jux(rev)
  .room(0.78)
  .every(5,x=>x.rev().transpose(rand.range(-3,5)))
  .detune(perlin.range(-25,28).slow(2))

$: note("gs1 [e2 a1 gs1 f1] [d1 f1 ds1 b0 gs0] [f0 a0 gs0 e0 ds1]")
  .slow(perlin.range(1.8,10))
  .sound("sawtooth")
  .gain(0.81)
  .fmi(perlin.range(12,55).slow(2.9))
  .bpf(sine.range(150,800)).bpq(3.2)

$: stack(
  s("bd*4,~bd*2,bd,~lt,bd*3").euclid(13,16).gain(0.89),
  s("~sn,cp*2,~sn*2,rim*3,cp*2").euclid(10,16).gain(0.84),
  s("hh*8,oh*3,rim*5,cp*3,hh*2").crush(perlin.range(4,12)).hpf(2500).distort(0.35).coarse(0.7).gain(0.67)
).room(0.88)
  .swing(sine.range(0.6,0.88))
  .sometimesBy(0.28,rev)
  .delay(0.45)
  .degradeBy(0.11)

$: stack(
  s("goldberg_variations*2,bach*3,johann")
    .slow(perlin.range(1.8,12))
    .chop(rand.range(30,48))
    .speed(perlin.range(-0.85,1.5).slow(4))
    .lpf(sine.range(80,4800).slow(5.5))
    .gain(0.71),
  s("variation*4,fugue*3,johann*2")
    .chop(perlin.range(30,52))
    .speed(tri.range(-0.8,1.7).slow(2.4))
    .vowel("a e o u i")
    .stretch(perlin.range(0.7,1.7))
    .gain(0.65),
  s("bach,fugue*2,goldberg_variations,variation")
    .chop(rand.range(25,50))
    .speed(saw.range(-0.9,1.6).slow(3))
    .gain(0.62)
).phaser(rand.range(0.5,1.5).slow(3))
  .pan(sine.range(0.1,0.9).slow(4))
  .room(0.85)

$: note("g2 [ab2 ds3 gs3 bb3:minor] [bb3 eb2 gs2 ab2 ds3] [fs3 ds2 f2 ab2 c3 d3 fs3 g3] ~ [eb2 bb2 ds3 fs3]")
  .slow(rand.range(1.5,11))
  .sound("triangle")
  .lpf(perlin.range(120,3600).slow(4))
  .gain(0.77)
  .ring(perlin.range(0.2,0.7).slow(3))