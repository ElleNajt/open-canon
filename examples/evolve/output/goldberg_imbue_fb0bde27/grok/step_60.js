samples('shabda/speech:goldberg_variations,bach,johann,variation,fugue')
setcps(170/60/4)

$: stack(
  note("gs3:minor [ab3 fs3 f3 d3 bb3 c4:maj] [c4 eb4:maj a4 g4 fs4 b3]").voicing()
    .slow(perlin.range(1,12))
    .sound("supersaw")
    .lpf(sine.range(160,5000).slow(4))
    .gain(0.7)
    .slide(saw.range(0.03,0.5)),
  note("gs4 [g4 fs4 f4 d4 bb3 eb4:maj] [f4 gs4 a4 b4 c5]").slow(perlin.range(1.3,10))
    .sound("pulse")
    .gain(0.73)
    .hpf(cosine.range(80,300))
).jux(rev)
  .room(0.88)
  .every(3,x=>x.rev().transpose(rand.range(-1,3)))
  .sometimesBy(0.1,rev)

$: note("gs1 [e2 a1 gs1 f1 d1] [ds1 b0 gs0 f0 a0]").slow(rand.range(2,14))
  .sound("sawtooth")
  .gain(0.8)
  .fmi(tri.range(15,45).slow(3))
  .bpf(perlin.range(90,900).slow(3))
  .lpq(4)
  .room(0.92)
  .orbit(1)

$: stack(
  s("bd*4,~bd*2,bd,~lt*2,bd*2").euclid(10,16).gain(0.86),
  s("~sn*2,cp*3,rim,~sn,cp").euclid(8,16).gain(0.84),
  s("hh*8,oh*4,rim*4,hh*3").euclid(12,16).coarse(tri.range(0.3,0.85)).hpf(2500).gain(0.76)
).room(0.92)
  .swing(perlin.range(0.65,0.99))
  .sometimes(rev)
  .degradeBy(0.1)
  .orbit(2)

$: stack(
  s("johann*4,bach*3,goldberg_variations*3,variation*4,fugue*2?").slow(rand.range(1.2,12))
    .chop(perlin.range(35,55))
    .speed(sine.range(-0.25,1.35).slow(4))
    .lpf(saw.range(260,4500).slow(3.5))
    .gain(0.71),
  s("fugue*3,variation*4,johann*3,bach*2,goldberg_variations?").striate(rand.range(30,55))
    .speed(perlin.range(-0.35,1.45).slow(2.5))
    .vowel("a e i o u")
    .gain(0.66),
  s("bach*4,fugue*3,goldberg_variations*2,variation*3?,johann")
    .chop(sine.range(32,50).slow(3))
    .speed(rand.range(-0.3,1.45))
    .gain(0.6)
).leslie(sine.range(0.4,0.95).slow(3))
  .pan(saw.range(0.05,0.98).slow(5))
  .room(0.92)

$: stack(
  note("g2 [ab2 ds3 gs3 bb3] [bb3 eb2 gs2 ds3] [fs3 f2 ab2 c3]").slow(perlin.range(1.6,12))
    .sound("triangle")
    .lpf(tri.range(110,4200).slow(4.5))
    .gain(0.83)
    .ring(perlin.range(0.3,0.9).slow(4)),
  note("gs2 [bb2 ds3 eb3 g3]").slow(rand.range(2.2,13))
    .sound("sine")
    .gain(0.36)
    .detune(sine.range(-40,50).slow(5))
).room(0.95)
  .late(0.02)
  .echo(4,0.12,0.55)
  .phaser(sine.range(0.2,0.8).slow(6))

$: note("eb4 [fs4 bb4 ds5] g5 [f5 e5 ds5 b4]").slow(sine.range(2.5,11))
  .sound("piano")
  .gain(0.65)
  .hpf(perlin.range(150,800).slow(4))
  .tremolo(0.4)
  .room(0.85)
  .transpose(rand.range(-0.5,1.5))
  .sometimesBy(0.15,x=>x.rev())