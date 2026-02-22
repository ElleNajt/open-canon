samples('shabda/speech:goldberg_variations,bach,johann,variation,fugue')
setcps(170/60/4)

$: stack(
  note("gs3:minor [ab3 fs3 f3 d3 bb3 c4:minor] [c4 eb4:maj a4 g4 fs4 b3] [ds4 g4 fs4 e4]")
    .slow(perlin.range(1,16))
    .sound("supersaw")
    .lpf(perlin.range(100,6500).slow(3))
    .gain(0.75)
    .tremolo(sine.range(0.3,0.7).slow(2)),
  note("gs4 [g4 fs4 f4 d4 bb3 a3 eb4:maj] [f4 gs4 a4 b4 c5 gs4:minor] [g3 f3 e3 ds3]")
    .slow(rand.range(1,11))
    .sound("pulse")
    .gain(0.72)
    .lpf(saw.range(150,7000).slow(3.5))
    .phaser(cosine.range(0.5,1).slow(2.2))
).jux(rev)
  .room(0.8)
  .every(4,x=>x.rev().transpose(rand.range(-3,5)))
  .detune(perlin.range(-25,30).slow(2))

$: note("gs1 [e2 a1 gs1 f1] [d1 f1 ds1 b0 gs0] [f0 a0 gs0 e0 ds1]")
  .slow(perlin.range(1,12))
  .sound("sawtooth")
  .gain(0.82)
  .fmi(perlin.range(15,50).slow(3))
  .bpf(sine.range(120,900))

$: stack(
  s("bd*4,~bd*2,bd,~lt,bd*3").euclid(13,16).gain(0.9),
  s("~sn,cp*2,~sn*2,rim*3,cp*2").euclid(12,16).gain(0.85),
  s("hh*8,oh*3,rim*5,cp*3,hh*2").euclid(10,16).crush(perlin.range(5,11)).hpf(2800).distort(0.4).gain(0.68)
).room(0.9)
  .swing(cosine.range(0.6,0.95))
  .sometimesBy(0.25,rev)
  .delay(0.5)
  .degradeBy(0.12)

$: stack(
  s("goldberg_variations*2,bach*3,johann,fugue")
    .slow(perlin.range(1,14))
    .chop(rand.range(32,50))
    .speed(perlin.range(-0.8,1.6).slow(4.5))
    .lpf(sine.range(100,5000).slow(6))
    .gain(0.72),
  s("variation*4,fugue*3,johann*2")
    .chop(perlin.range(32,54))
    .speed(tri.range(-0.75,1.8).slow(2.5))
    .vowel("a e o u i")
    .stretch(perlin.range(0.8,1.6))
    .gain(0.66),
  s("bach,fugue*2,goldberg_variations,variation")
    .chop(rand.range(28,52))
    .speed(saw.range(-0.85,1.7).slow(3.2))
    .gain(0.63)
).phaser(rand.range(0.6,1.4).slow(3.5))
  .pan(sine.range(0.1,0.9).slow(5))
  .room(0.87)

$: note("g2 [ab2 ds3 gs3 bb3:minor] [bb3 eb2 gs2 ab2 ds3] [fs3 ds2 f2 ab2 c3 d3 fs3 g3] ~ [eb2 bb2 ds3 fs3]")
  .slow(rand.range(1,13))
  .sound("triangle")
  .lpf(perlin.range(150,3800).slow(4.2))
  .gain(0.78)
  .ring(perlin.range(0.3,0.8).slow(3.2))

$: note("gs2:minor")
  .slow(perlin.range(4,16))
  .sound("sine")
  .gain(0.32)
  .lpf(sine.range(300,2000).slow(5))
  .room(0.95)