samples('shabda/speech:goldberg_variations,bach,johann,variation,fugue')
setcps(155/60/4)

$: stack(
  note("gs3:minor [ab3 fs3 f3 d3 bb3 c4:minor] [c4 eb4:maj a4 g4 fs4 b3] [ds4 g4 fs4 e4]")
    .slow(perlin.range(1.2,11))
    .sound("supersaw")
    .lpf(perlin.range(90,5800).slow(2.7))
    .gain(0.76)
    .tremolo(cosine.range(0.35,0.75).slow(1.8)),
  note("gs4 [g4 fs4 f4 d4 bb3 a3 eb4:maj] [f4 gs4 a4 b4 c5 gs4:minor] [g3 f3 e3 ds3]")
    .slow(perlin.range(1.3,8.5))
    .sound("pulse")
    .gain(0.73)
    .lpf(saw.range(90,6800).slow(2.9))
    .tremolo(sine.range(0.15,0.55).slow(2.7))
).jux(rev)
  .room(0.76)
  .every(6,x=>x.rev().transpose(rand.range(-4,6)))
  .detune(perlin.range(-22,32).slow(1.8))

$: note("gs1 [e2 a1 gs1 f1] [d1 f1 ds1 b0 gs0] [f0 a0 gs0 e0 ds1]")
  .slow(perlin.range(1.9,9.5))
  .sound("sawtooth")
  .gain(0.83)
  .fmi(perlin.range(11,58).slow(2.7))
  .leslie(sine.range(0.25,1.35).slow(3.2))

$: stack(
  s("bd*3,~bd,bd*4,~lt,bd").euclid(12,16).gain(0.91),
  s("~sn*2,cp*3,~sn,rim*4,cp").euclid(9,16).gain(0.86),
  s("hh*8,~oh*4,rim*4,cp*4,hh").crush(perlin.range(3.5,13)).hpf(2600).distort(0.38).gain(0.69)
).room(0.86)
  .swing(sine.range(0.65,0.91))
  .sometimesBy(0.32,rev)
  .delay(0.48)
  .degradeBy(0.095)

$: stack(
  s("goldberg_variations*3,bach*4")
    .slow(perlin.range(1.9,11.5))
    .chop(rand.range(28,50))
    .speed(perlin.range(-0.88,1.55).slow(3.8))
    .lpf(sine.range(70,4900).slow(5.2))
    .gain(0.69),
  s("johann*3,fugue*4,variation*2")
    .chop(perlin.range(28,53))
    .speed(tri.range(-0.82,1.75).slow(2.2))
    .vowel("e a o i")
    .stretch(perlin.range(0.65,1.75))
    .gain(0.63)
).phaser(rand.range(0.45,1.55).slow(2.8))
  .pan(sine.range(0.08,0.92).slow(3.8))
  .room(0.87)
  .echo(5,0.11,0.48)

$: s("fugue*4,variation*3,johann*3,bach,goldberg_variations")
  .chop(rand.range(26,55))
  .slow(perlin.range(2.1,13.5))
  .speed(saw.range(-0.82,1.65))
  .gain(0.69)
  .phaser(perlin.range(0.35,1.45).slow(3.8))

$: note("g2 [ab2 ds3 gs3 bb3:minor] [bb3 eb2 gs2 ab2 ds3] [fs3 ds2 f2 ab2 c3 d3 fs3 g3] ~ [eb2 bb2 ds3 fs3]")
  .slow(perlin.range(1.6,10.5))
  .sound("triangle")
  .lpf(perlin.range(110,3400).slow(3.8))
  .gain(0.79)
  .ring(perlin.range(0.18,0.68).slow(2.8))