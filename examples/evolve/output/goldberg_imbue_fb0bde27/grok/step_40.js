samples('shabda/speech:goldberg_variations,bach,johann')
setcps(152/60/4)

$: stack(
  note("gs3 [a3 fs3? f3 d3 bb3 c4] [c4 d4 a4 g4 fs4 b3] [ds4 fs4 g4 e4]")
    .slow(perlin.range(1.8,6.2))
    .sound("supersaw")
    .lpf(perlin.range(60,4500).slow(3.5))
    .gain(0.75)
    .tremolo(0.5),
  note("gs4 [g4 fs4 f4 d4 bb3 a3 d4] [f4 gs4 a4 b4 c5 gs3] [g3 f3 e3 ds3]")
    .slow(perlin.range(2,4))
    .sound("pulse")
    .gain(0.72)
    .lpf(saw.range(80,7000).slow(2.5))
    .slide(0.05)
).juxBy(0.6,rev)
  .room(0.65)
  .every(9,x=>x.palindrome().transpose(3))
  .degradeBy(0.22)

$: note("gs1 [e2 a1 gs1 f1] [d1 e1 ds1 b0 gs0] [f0 a0 gs0 e0 ds1]")
  .slow(perlin.range(3,6))
  .sound("sawtooth")
  .gain(0.8)
  .fmi(perlin.range(8,42).slow(3))
  .ring(perlin.range(0.2,0.6))

$: stack(
  s("bd*3,~bd,bd*4,~lt*2,bd").euclid(13,16).gain(0.98),
  s("~sn*2,cp*3,~sn,rim*3,cp").euclid(11,16).gain(0.92),
  s("hh*8,~oh*4,rim*4,cp*3,hh").crush(perlin.range(3,12)).hpf(2800).distort(0.2).gain(0.7)
).room(0.85)
  .compressor()
  .swing(sine.range(0.55,0.85))
  .sometimesBy(0.25,rev)
  .delay(0.3)

$: stack(
  s("goldberg_variations*3")
    .slow(perlin.range(4,12))
    .chop(32)
    .speed(perlin.range(0.6,1.5).slow(2.5))
    .lpf(tri.range(50,4000).slow(6))
    .gain(0.65),
  s("goldberg_variations,bach*2,johann")
    .chop(32)
    .speed(sine.range(0.75,1.45))
    .vowel("a i o e u")
    .stretch(perlin.range(0.9,1.4))
    .gain(0.6)
).phaser(perlin.range(0.2,1.3).slow(3.5))
  .pan(saw.slow(4.5))
  .room(0.8)
  .echo(5,0.1,0.4)

$: s("bach*3,johann*2,goldberg_variations*2,bach,johann")
  .chop(rand.range(12,32))
  .slow(perlin.range(4,9))
  .speed(perlin.range(0.6,1.6))
  .gain(0.6)
  .phaser(perlin.range(0.3,1.0).slow(2.5))

$: note("g2 [a2 ds3 gs3 bb3] [bb3 eb2 gs2 a2 ds3] [fs3 ds2 f2 ab2 c3 d3 fs3 g3]")
  .slow(perlin.range(2,5))
  .sound("piano")
  .lpf(perlin.range(80,1800).slow(3))
  .gain(0.7)
  .every(4,x=>x.rev())