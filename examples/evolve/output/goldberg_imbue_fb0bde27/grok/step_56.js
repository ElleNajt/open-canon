samples('shabda/speech:goldberg_variations,bach,johann,variation,fugue')
setcps(152/60/4)

$: stack(
  note("gs3:minor [ab3 fs3 f3 d3 bb3 c4:maj] [c4 eb4:maj a4 g4 fs4 b3] [ds4 g4 fs4 e4]").voicing()
    .slow(perlin.range(1.3,14))
    .sound("supersaw")
    .lpf(perlin.range(180,5800).slow(3.4))
    .gain(0.76)
    .tremolo(perlin.range(0.3,0.65).slow(5.2)),
  note("gs4 [g4 fs4 f4 d4 bb3 a3 eb4:maj] [f4 gs4 a4 b4 c5 gs4:maj] [g3 f3 e3 ds3]")
    .slow(rand.range(1.2,11))
    .sound("pulse")
    .gain(0.82)
    .lpf(saw.range(160,6800).slow(2.8))
    .phaser(cosine.range(0.4,1.4).slow(3.6))
).jux(rev)
  .room(0.8)
  .every(4,x=>x.rev().transpose(perlin.range(-5,5)))
  .delay(0.42)

$: note("gs1 [e2 a1 gs1 f1] [d1 f1 ds1 b0 gs0] [f0 a0 gs0 e0 ds1]")
  .slow(perlin.range(1.5,11))
  .sound("sawtooth")
  .gain(0.85)
  .fmi(perlin.range(14,48).slow(3.4))
  .bpf(sine.range(120,920).slow(2.9))

$: stack(
  s("bd*4,~bd*2,bd,~lt,bd*3,~bd").euclid(9,16).gain(0.9),
  s("~sn,cp*2,~sn*2,rim*3,cp*2").euclid(11,16).gain(0.88),
  s("hh*8,oh*3,rim*5,cp*3,hh*2").euclid(13,16).coarse(perlin.range(0.3,0.85)).hpf(2800).distort(0.38).gain(0.8)
).room(0.88)
  .swing(cosine.range(0.65,0.96))
  .sometimesBy(0.35,rev)
  .degradeBy(0.25)

$: stack(
  s("goldberg_variations*4,bach*3,johann*4?,variation,fugue*2").slow(perlin.range(1.2,10))
    .striate(rand.range(28,48))
    .speed(perlin.range(-0.35,1.4).slow(4))
    .lpf(sine.range(240,4800).slow(4.4))
    .gain(0.75),
  s("variation*5,fugue*2,johann*3,bach*2,goldberg_variations")
    .striate(perlin.range(26,50))
    .speed(tri.range(-0.45,1.5).slow(2.5))
    .vowel("a e o i u")
    .stretch(perlin.range(0.9,1.4))
    .gain(0.7),
  s("bach*4,fugue*3,goldberg_variations*4?,variation*2")
    .chop(rand.range(30,50))
    .speed(saw.range(-0.4,1.5).slow(3.2))
    .gain(0.65)
).phaser(rand.range(0.45,1.4).slow(3.4))
  .pan(sine.range(0.2,0.9).slow(5))
  .room(0.92)

$: stack(
  note("g2 [ab2 ds3 gs3 bb3:maj] [bb3 eb2 gs2 ab2 ds3] [fs3 ds2 f2 ab2 c3 d3 fs3 g3] ~ [eb2 bb2 ds3 fs3]")
    .slow(rand.range(1.7,12))
    .sound("triangle")
    .lpf(perlin.range(140,4500).slow(4.4))
    .gain(0.87)
    .ring(perlin.range(0.3,0.9).slow(4)),
  note("gs2:maj [bb2 ds3] [eb3 g3]")
    .slow(perlin.range(2.4,13))
    .sound("sine")
    .gain(0.4)
    .lpf(sine.range(250,2400).slow(5.4))
    .detune(perlin.range(-40,50).slow(4.8))
).room(0.95)
  .late(0.05)