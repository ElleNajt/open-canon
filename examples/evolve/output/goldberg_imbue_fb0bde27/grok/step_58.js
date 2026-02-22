samples('shabda/speech:goldberg_variations,bach,johann,variation,fugue')
setcps(152/60/4)

$: stack(
  note("gs3:minor [ab3 fs3 f3 d3 bb3 c4:maj] [c4 eb4:maj a4 g4 fs4 b3]").voicing()
    .slow(perlin.range(2,12))
    .sound("supersaw")
    .lpf(sine.range(200,5000).slow(4))
    .gain(0.75)
    .slide(saw.range(0.1,0.5)),
  note("gs4 [g4 fs4 f4 d4 bb3 eb4:maj] [f4 gs4 a4 b4 c5]").slow(perlin.range(1.5,10))
    .sound("pulse")
    .gain(0.78)
    .hpf(cosine.range(80,300))
).jux(rev)
  .room(0.82)
  .every(4,x=>x.rev().transpose(rand.range(-3,5)))
  .sometimesBy(0.15,rev)

$: note("gs1 [e2 a1 gs1 f1 d1] [ds1 b0 gs0 f0 a0]").slow(rand.range(1.5,11))
  .sound("sawtooth")
  .gain(0.85)
  .fmi(tri.range(15,45).slow(2.5))
  .bpf(perlin.range(120,900).slow(3))
  .room(0.88)

$: stack(
  s("bd*4,~bd*2,bd,~lt*2,bd*2").euclid(11,16).gain(0.9),
  s("~sn*2,cp*3,rim,~sn,cp").euclid(13,16).gain(0.88),
  s("hh*8,oh*4,rim*4,hh*3").euclid(15,16).coarse(tri.range(0.3,0.85)).hpf(2500).gain(0.8)
).room(0.92)
  .swing(perlin.range(0.65,0.95))
  .ply(rand.range(1,4))
  .degradeBy(0.1)

$: stack(
  s("johann*4,bach*3,goldberg_variations*3,variation*4,fugue").slow(rand.range(1.2,10))
    .chop(perlin.range(35,50))
    .speed(sine.range(-0.3,1.4).slow(4))
    .lpf(saw.range(250,4500).slow(3.5))
    .gain(0.75),
  s("fugue*3,variation*4,johann*3,bach*2,goldberg_variations")
    .striate(rand.range(30,48))
    .speed(perlin.range(-0.4,1.5).slow(2.5))
    .vowel("a e o i u")
    .gain(0.7),
  s("bach*4,fugue*3,goldberg_variations*4?,variation,johann*2")
    .chop(sine.range(28,50).slow(3))
    .speed(rand.range(-0.35,1.45))
    .gain(0.65)
).phaser(cosine.range(0.5,1.4).slow(3))
  .pan(saw.range(0.2,0.9).slow(5))
  .room(0.92)

$: stack(
  note("g2 [ab2 ds3 gs3 bb3] [bb3 eb2 gs2 ds3] [fs3 f2 ab2 c3]").slow(perlin.range(1.8,12))
    .sound("triangle")
    .lpf(tri.range(150,4200).slow(4.5))
    .gain(0.87)
    .ring(perlin.range(0.3,0.9).slow(4)),
  note("gs2 [bb2 ds3 eb3 g3]").slow(rand.range(2.5,13))
    .sound("sine")
    .gain(0.4)
    .detune(sine.range(-40,50).slow(5))
).room(0.95)
  .late(0.02)
  .tremolo(saw.range(0.2,0.6).slow(3))