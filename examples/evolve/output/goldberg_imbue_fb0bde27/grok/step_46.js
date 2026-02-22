samples('shabda/speech:goldberg_variations,bach,johann,variation,fugue')
setcps(162/60/4)

$: stack(
  note("gs3:minor [ab3 fs3 f3 d3 bb3 c4:minor] [c4 eb4:maj a4 g4 fs4 b3] [ds4 g4 fs4 e4]")
    .slow(perlin.range(1,12))
    .sound("supersaw")
    .lpf(perlin.range(80,5500).slow(3))
    .gain(0.78)
    .tremolo(cosine.range(0.3,0.7).slow(2)),
  note("gs4 [g4 fs4 f4 d4 bb3 a3 eb4:maj] [f4 gs4 a4 b4 c5 gs4:minor] [g3 f3 e3 ds3]")
    .slow(perlin.range(1.5,9))
    .sound("pulse")
    .gain(0.75)
    .lpf(saw.range(100,7000).slow(3))
    .tremolo(sine.range(0.2,0.6))
).jux(rev)
  .room(0.8)
  .every(7,x=>x.rev().transpose(rand.range(-5,5)))
  .detune(perlin.range(-20,30))

$: note("gs1 [e2 a1 gs1 f1] [d1 f1 ds1 b0 gs0] [f0 a0 gs0 e0 ds1]")
  .slow(perlin.range(2,10))
  .sound("sawtooth")
  .gain(0.85)
  .fmi(perlin.range(12,55).slow(3))
  .leslie(sine.range(0.3,1.2).slow(4))

$: stack(
  s("bd*3,~bd,bd*4,~lt,bd").euclid(13,16).gain(0.92),
  s("~sn*2,cp*3,~sn,rim*4,cp").euclid(10,16).gain(0.88),
  s("hh*8,~oh*4,rim*4,cp*4,hh").crush(perlin.range(4,12)).hpf(2800).distort(0.35).gain(0.7)
).room(0.88)
  .swing(sine.range(0.7,0.9))
  .sometimesBy(0.35,rev)
  .delay(0.5)
  .degradeBy(0.08)

$: stack(
  s("goldberg_variations*4,bach*3")
    .slow(perlin.range(2,12))
    .chop(rand.range(32,48))
    .speed(perlin.range(-0.85,1.6).slow(4))
    .lpf(cosine.range(60,4800).slow(6))
    .gain(0.7),
  s("johann*4,fugue*3,variation*2")
    .chop(perlin.range(30,50))
    .speed(tri.range(-0.75,1.8))
    .vowel("a e o u")
    .stretch(perlin.range(0.7,1.7))
    .gain(0.65)
).phaser(rand.range(0.5,1.5).slow(3))
  .pan(sine.range(0.1,0.9).slow(4))
  .room(0.9)
  .echo(6,0.125,0.45)

$: s("fugue*5,variation*2,johann*2,bach")
  .chop(rand.range(28,54))
  .slow(perlin.range(2.2,14))
  .speed(saw.range(-0.75,1.6))
  .gain(0.7)
  .phaser(perlin.range(0.3,1.5).slow(4))

$: note("g2 [ab2 ds3 gs3 bb3:minor] [bb3 eb2 gs2 ab2 ds3] [fs3 ds2 f2 ab2 c3 d3 fs3 g3] ~ [eb2 bb2 ds3 fs3]")
  .slow(perlin.range(2,10))
  .sound("triangle")
  .lpf(perlin.range(120,3200).slow(4))
  .gain(0.8)
  .ring(perlin.range(0.15,0.65).slow(3))