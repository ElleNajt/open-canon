samples('shabda/speech:goldberg_variations,bach,johann,variation,fugue')
setcps(172/60/4)

$: stack(
  note("gs3:minor [ab3 fs3 f3 d3 bb3 c4:maj] [c4 eb4:maj a4 g4 fs4 b3] [ds4 g4 fs4 e4]")
    .voicing()
    .slow(perlin.range(1,14))
    .sound("supersaw")
    .lpf(perlin.range(180,5800).slow(3.5))
    .gain(0.8)
    .detune(sine.range(-25,28).slow(4)),
  note("gs4 [g4 fs4 f4 d4 bb3 a3 eb4:maj] [f4 gs4 a4 b4 c5 gs4:maj] [g3 f3 e3 ds3]")
    .slow(rand.range(1,11))
    .sound("pulse")
    .gain(0.82)
    .lpf(saw.range(120,6800).slow(2.8))
    .phaser(cosine.range(0.4,1.4).slow(4))
).jux(rev)
  .room(0.85)
  .every(4,x=>x.rev().transpose(perlin.range(-5,5)))
  .delay(0.35)

$: note("gs1 [e2 a1 gs1 f1] [d1 f1 ds1 b0 gs0] [f0 a0 gs0 e0 ds1]")
  .slow(perlin.range(1.5,11))
  .sound("sawtooth")
  .gain(0.85)
  .fmi(perlin.range(15,48).slow(3.5))
  .bpf(sine.range(120,900).slow(3))

$: stack(
  s("bd*4,~bd*2,bd,~lt,bd*3").euclid(7,16).gain(0.9),
  s("~sn,cp*2,~sn*2,rim*3,cp*2").euclid(9,16).gain(0.88),
  s("hh*8,oh*3,rim*5,cp*3,hh*2").euclid(13,16).coarse(perlin.range(0.3,0.85)).hpf(2800).distort(0.4).gain(0.8)
).room(0.88)
  .swing(cosine.range(0.65,0.95))
  .sometimes(rev)
  .degradeBy(0.3)

$: stack(
  s("goldberg_variations*4?,bach*2,johann*3,fugue").slow(perlin.range(1.2,10))
    .striate(rand.range(24,48))
    .speed(perlin.range(-0.5,1.4).slow(4))
    .lpf(sine.range(250,5000).slow(4.5))
    .gain(0.75),
  s("variation*4,fugue*3,johann,bach*2")
    .striate(perlin.range(28,50))
    .speed(tri.range(-0.5,1.5).slow(2.5))
    .vowel("a e o i u")
    .stretch(perlin.range(0.9,1.4))
    .gain(0.7),
  s("bach*3,fugue*4,goldberg_variations*3,variation")
    .chop(rand.range(30,50))
    .speed(saw.range(-0.6,1.5).slow(3.2))
    .gain(0.65)
).phaser(rand.range(0.5,1.4).slow(3.5))
  .pan(sine.range(0.2,0.9).slow(5))
  .room(0.92)

$: note("g2 [ab2 ds3 gs3 bb3:maj] [bb3 eb2 gs2 ab2 ds3] [fs3 ds2 f2 ab2 c3 d3 fs3 g3] ~ [eb2 bb2 ds3 fs3]")
  .slow(rand.range(1.8,12))
  .sound("triangle")
  .lpf(perlin.range(140,4500).slow(4.5))
  .gain(0.87)
  .ring(perlin.range(0.3,0.9).slow(4))

$: note("gs2:maj [bb2 ds3]")
  .slow(perlin.range(2.5,13))
  .sound("sine")
  .gain(0.4)
  .lpf(sine.range(250,2400).slow(5.5))
  .room(0.95)
  .detune(perlin.range(-40,50).slow(5.5))