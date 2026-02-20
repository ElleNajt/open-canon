samples('shabda/speech:goldberg_variations,bach,johann')
setcps(132/60/4)

$: stack(
  note("gs3 [a3 fs3 f3 d3 bb3] [c4 d4 bb4 g4 fs4 b3] [ds4 fs4 g4 e4]")
    .slow(4)
    .sound("supersaw")
    .lpf(cosine.range(60,4500).slow(4))
    .gain(0.7)
    .detune(sine.range(-15,15)),
  note("gs4 [g4 fs4 f4 d4 bb3 a3 d4] [f4 gs4 a4 b4 c5 gs3] [g3 f3 e3 ds3]")
    .slow(3)
    .sound("pulse")
    .gain(0.7)
    .lpf(sine.range(80,7000).slow(3))
    .slide(0.02)
).juxBy(0.75,rev)
  .room(0.55)
  .every(8,x=>x.rev().transpose(7))

$: note("gs1 [e2 a1 gs1 f1] [d1 e1 ds1 b0 gs0] [f0 a0 gs0 e0]")
  .slow(5)
  .sound("sawtooth")
  .gain(0.75)
  .fmi(saw.range(4,35).slow(4))
  .ring(rand.range(0.4,0.9).slow(3))
  .distort(0.15)

$: stack(
  s("bd*3,~bd,bd*4,~lt,bd").euclid(13,16).gain(0.95),
  s("~sn*2,cp*2,~sn,rim*2,cp").euclid(11,16).gain(0.9),
  s("hh*8,~oh*3,rim*5,cp*2,hh").crush(4).hpf(2800).gain(0.65)
).room(0.8)
  .swing(0.65)
  .sometimesBy(0.3,rev)
  .compressor()
  .delay(0.25)

$: stack(
  s("goldberg_variations*2")
    .slow(8)
    .chop(64)
    .speed(perlin.range(0.75,1.35).slow(3))
    .lpf(sine.range(50,3800).slow(5))
    .gain(0.6),
  s("goldberg_variations,bach,johann")
    .chop(32)
    .speed(cosine.range(0.65,1.45))
    .vowel("a o u i e")
    .gain(0.55)
    .stretch(perlin.range(0.85,1.25))
).phaser(saw.range(0.35,1.05).slow(4))
  .pan(tri.slow(4))
  .room(0.8)

$: s("bach*2,johann,goldberg_variations*3,johann*2,bach")
  .slow(7.5)
  .speed(perlin.range(0.6,1.65))
  .gain(0.6)
  .leslie(sine.range(0.25,1.15).slow(4))
  .orbit(1)

$: note("g2 [a2 ds3 gs3] [bb3 eb2 gs2 a2 ds3] [fs3 ds2 f2 ab2 c3 d3 fs3 g3]")
  .slow(4)
  .sound("piano")
  .lpf(saw.range(120,1400).slow(5))
  .gain(0.65)
  .pan(rand.range(0.25,0.75))
  .jux(rev)