setcps(105/60/4)

// Plucky Arp
$: n("g5 d5 b4 a4 e5 c5 f4 ~ c5 a4 g4 e4 c4").slow(8)
  .s("triangle")
  .fmi(perlin.range(0.2, 0.8).slow(20))
  .fmh(2)
  .gain(0.45)
  .release(0.15)
  .lpf(sine.range(1000, 5000).slow(12))
  .lpq(3)
  .delay(0.5)
  .delaytime(1/8)
  .dfb(0.5)
  .pan(perlin.range(0.1, 0.9).slow(18))

// Supersaw Pads
$: n("[g3,b3,d4,f4] [f3,a3,c4,e4]").slow(2)
  .s("supersaw")
  .gain(0.2)
  .attack(3)
  .release(8)
  .lpf(cosine.range(600, 2200).slow(16))
  .lpq(4)
  .off(0.012, p => p.pan(0.9).detune(-4))
  .pan(0.1)
  .room(0.6)
  .size(0.85)

// Deep Sub
$: n("g1 f1").slow(2)
  .s("sine")
  .gain(0.8)
  .lpf(120)
  .cut(1)

// New Groove
$: stack(
  s("bd*2 bd [~ bd]").gain(1.1),
  s("~ [sn,cp]").gain(0.8).shape(0.4).distort(0.2).hpf(200),
  s("hh").euclid(5, 8).fast(2).sustain(0.02).gain(perlin.range(0.3, 0.6).slow(4)).hpf(8000),
  s("~ oh ~ oh").sustain(0.1).gain(0.5).hpf(6000).crush(10)
).swing(0.05).compressor().compressorRatio(6).postgain(1.2).room(0.1)