samples('shabda/speech:goldberg_variations,bach,johann,variation,fugue')
setcps(164/60/4)

$: stack(
  note("gs3:minor [ab3 fs3 f3 d3 bb3 c4:maj] [c4 eb4:maj a4 g4 fs4 b3]").voicing()
    .slow(perlin.range(1,10))
    .sound("supersaw")
    .lpf(sine.range(180,4800).slow(3))
    .gain(0.72)
    .slide(saw.range(0.05,0.45)),
  note("gs4 [g4 fs4 f4 d4 bb3 eb4:maj] [f4 gs4 a4 b4 c5]").slow(perlin.range(1.2,9))
    .sound("pulse")
    .gain(0.75)
    .hpf(cosine.range(90,280))
).jux(rev)
  .room(0.85)
  .every(4,x=>x.rev().transpose(rand.range(-2,4)))
  .sometimesBy(0.12,rev)

$: note("gs1 [e2 a1 gs1 f1 d1] [ds1 b0 gs0 f0 a0]").slow(rand.range(1.8,13))
  .sound("sawtooth")
  .gain(0.82)
  .fmi(tri.range(12,42).slow(2))
  .bpf(perlin.range(100,850).slow(2.8))
  .room(0.9)
  .orbit(1)

$: stack(
  s("bd*4,~bd*2,bd,~lt*2,bd*2").euclid(9,16).gain(0.88),
  s("~sn*2,cp*3,rim,~sn,cp").euclid(7,16).gain(0.85),
  s("hh*8,oh*4,rim*4,hh*3").euclid(11,16).coarse(tri.range(0.25,0.8)).hpf(2400).gain(0.78)
).room(0.9)
  .swing(perlin.range(0.6,0.98))
  .sometimes(rev)
  .degradeBy(0.12)
  .orbit(2)

$: stack(
  s("johann*3,bach*4,goldberg_variations*2,variation*4,fugue*3?").slow(rand.range(1.1,11))
    .chop(perlin.range(32,52))
    .speed(sine.range(-0.2,1.3).slow(3.8))
    .lpf(saw.range(280,4200).slow(3))
    .gain(0.73),
  s("fugue*4,variation*3,johann*2,bach*3,goldberg_variations?").striate(rand.range(28,52))
    .speed(perlin.range(-0.3,1.4).slow(2))
    .vowel("a e i o u")
    .gain(0.68),
  s("bach*3,fugue*4,goldberg_variations*3,variation*2?,johann")
    .chop(sine.range(30,48).slow(2.8))
    .speed(rand.range(-0.25,1.4))
    .gain(0.62)
).leslie(sine.range(0.3,0.9).slow(2.5))
  .pan(saw.range(0.1,0.95).slow(4.5))
  .room(0.9)

$: stack(
  note("g2 [ab2 ds3 gs3 bb3] [bb3 eb2 gs2 ds3] [fs3 f2 ab2 c3]").slow(perlin.range(1.5,11))
    .sound("triangle")
    .lpf(tri.range(120,4000).slow(4))
    .gain(0.85)
    .ring(perlin.range(0.25,0.85).slow(3.5)),
  note("gs2 [bb2 ds3 eb3 g3]").slow(rand.range(2,12))
    .sound("sine")
    .gain(0.38)
    .detune(sine.range(-35,45).slow(4.5))
).room(0.93)
  .late(0.015)
  .echo(3,0.125,0.5)