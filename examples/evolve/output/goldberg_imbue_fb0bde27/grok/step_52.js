samples('shabda/speech:goldberg_variations,bach,johann,variation,fugue')
setcps(172/60/4)

$: stack(
  note("gs3:minor [ab3 fs3 f3 d3 bb3 c4:maj] [c4 eb4:maj a4 g4 fs4 b3] [ds4 g4 fs4 e4]")
    .slow(perlin.range(1,14))
    .sound("supersaw")
    .lpf(perlin.range(150,6500).slow(4))
    .gain(0.8)
    .tremolo(sine.range(0.45,0.85).slow(2.8)),
  note("gs4 [g4 fs4 f4 d4 bb3 a3 eb4:maj] [f4 gs4 a4 b4 c5 gs4:maj] [g3 f3 e3 ds3]")
    .slow(rand.range(1,10))
    .sound("pulse")
    .gain(0.78)
    .lpf(saw.range(120,6800).slow(3.5))
    .phaser(cosine.range(0.45,1.3).slow(2.7))
).jux(rev)
  .room(0.78)
  .every(5,x=>x.rev().transpose(perlin.range(-5,7)))
  .detune(rand.range(-35,40).slow(2.8))

$: note("gs1 [e2 a1 gs1 f1] [d1 f1 ds1 b0 gs0] [f0 a0 gs0 e0 ds1]")
  .slow(perlin.range(2,13))
  .sound("sawtooth")
  .gain(0.9)
  .fmi(perlin.range(15,48).slow(3.8))
  .bpf(sine.range(120,900).slow(2.3))

$: stack(
  s("bd*4,~bd*2,bd,~lt,bd*3").euclid(13,16).gain(0.9),
  s("~sn,cp*2,~sn*2,rim*3,cp*2").euclid(12,16).gain(0.85),
  s("hh*8,oh*3,rim*5,cp*3,hh*2").euclid(14,16).crush(perlin.range(5,14)).hpf(2800).distort(0.4).gain(0.75)
).room(0.9)
  .swing(cosine.range(0.58,0.95))
  .sometimes(rev)
  .delay(0.48)
  .degradeBy(0.22)

$: stack(
  s("goldberg_variations*4,bach*2,johann,fugue")
    .slow(perlin.range(1,10))
    .chop(rand.range(28,56))
    .speed(perlin.range(-0.7,1.6).slow(3.5))
    .lpf(sine.range(180,5200).slow(4.8))
    .gain(0.76),
  s("variation*4,fugue*3,johann*3")
    .chop(perlin.range(32,56))
    .speed(tri.range(-0.7,1.7).slow(2))
    .vowel("a e o u i")
    .stretch(perlin.range(0.9,1.55))
    .gain(0.7),
  s("bach,fugue*4,goldberg_variations*3,variation")
    .chop(rand.range(28,54))
    .speed(saw.range(-0.8,1.7).slow(2.8))
    .gain(0.66)
).phaser(rand.range(0.55,1.4).slow(3.5))
  .pan(sine.range(0.2,0.9).slow(4))
  .room(0.88)

$: note("g2 [ab2 ds3 gs3 bb3:maj] [bb3 eb2 gs2 ab2 ds3] [fs3 ds2 f2 ab2 c3 d3 fs3 g3] ~ [eb2 bb2 ds3 fs3]")
  .slow(rand.range(2,14))
  .sound("triangle")
  .lpf(perlin.range(140,4500).slow(3.5))
  .gain(0.82)
  .ring(perlin.range(0.3,0.9).slow(3.2))

$: note("gs2:maj [bb2 ds3]")
  .slow(perlin.range(3,15))
  .sound("sine")
  .gain(0.36)
  .lpf(sine.range(300,2100).slow(5))
  .room(0.95)
  .detune(perlin.range(-50,50).slow(5.5))