samples('shabda/speech:goldberg_variations,bach,johann')
setcps(124/60/4)

$: stack(
  note("gs3 [a3 fs3 f3 d3] [bb3 c4 d4 bb4 g4] [b3 ds4 fs4 g4]")
    .slow(4)
    .sound("supersaw")
    .lpf(cosine.range(80,4800).slow(4))
    .gain(0.8)
    .tremolo(0.4),
  note("gs4 [g4 fs4 f4 d4 bb3] [d4 f4 gs4 a4 b4] [gs3 g3 f3 e3]")
    .slow(3)
    .sound("pulse")
    .gain(0.75)
    .lpf(sine.range(120,7500).slow(3))
).juxBy(0.8,rev)
  .room(0.5)
  .every(8,x=>x.rev().transpose(12))

$: note("gs1 [e2 a1 gs1 f1] [e1 ds1 b0 gs0] [a0 gs0]")
  .slow(5)
  .sound("sawtooth")
  .gain(0.75)
  .fmi(saw.range(6,35).slow(4))
  .ring(rand.range(0.25,0.9).slow(4))

$: stack(
  s("bd*3,~bd,bd*4,~lt,bd").euclid(13,16).gain(0.95),
  s("~sn*2,cp*2,~sn,rim*2,cp").euclid(11,16).gain(0.85),
  s("hh*8,~oh*3,rim*5,cp*2,hh").crush(5).hpf(2800).gain(0.6)
).room(0.9)
  .swing(0.65)
  .degradeBy(0.15)
  .sometimesBy(0.3,rev)

$: stack(
  s("goldberg_variations")
    .slow(8)
    .chop(72)
    .speed(perlin.range(0.6,1.5).slow(3))
    .lpf(sine.range(70,3800).slow(5))
    .gain(0.6),
  s("goldberg_variations,bach")
    .chop(48)
    .speed(cosine.range(0.55,1.6))
    .vowel("a e o u i")
    .gain(0.55)
    .stretch(perlin.range(0.85,1.4))
).delay(0.55)
  .phaser(saw.range(0.4,1.1).slow(4))
  .pan(tri.slow(4))
  .room(0.85)

$: s("bach,johann,goldberg_variations*4,johann,bach")
  .slow(8)
  .speed(perlin.range(0.5,1.6))
  .gain(0.6)
  .leslie(sine.range(0.2,1.1).slow(4.5))
  .crush(6)

$: note("g2 [a2 ds3 gs3] [eb2 gs2 a2 ds3] [ds2 f2 ab2 c3 d3 fs3]")
  .slow(4.5)
  .sound("sine")
  .lpf(saw.range(100,1200).slow(6))
  .gain(0.55)
  .pan(rand.range(0.15,0.85))
  .accelerate(0.02)