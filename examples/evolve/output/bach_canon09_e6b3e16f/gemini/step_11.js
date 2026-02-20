setcps(115/60/4)

// Flowing Arp
$: n("g5 d5 b4 g4 a4 e5 c5 a4 f4 c5 a4 f4 c4 g4 e4 c4").slow(8)
  .s("triangle")
  .fmi(perlin.range(0.1, 0.5).slow(16))
  .fmh(1.5)
  .gain(0.4)
  .release(0.1)
  .lpf(4000).lpq(2).lpenv(2500).lpdecay(0.08)
  .delay(0.5)
  .delaytime(3/16)
  .dfb(0.7)
  .pan(perlin.range(0.2, 0.8).slow(24))

// Lush Pads
$: n("[g3,b3,d4] [a3,c4,e4] [f3,a3,c4] [c3,e3,g3]").slow(4)
  .s("supersaw")
  .gain(0.25)
  .attack(2)
  .release(6)
  .lpf(cosine.range(800, 2200).slow(18))
  .lpq(4)
  .vowel("a u".slow(16))
  .off(0.015, p => p.pan(0.9).detune(5))
  .pan(0.1)
  .room(0.7)
  .size(0.9)

// Sub Bass
$: stack(
    n("g1 a1 f1 c1").slow(4).euclid(5,8),
    n("g0 a0 f0 c0").slow(4).euclid(5,8).s("sine").gain(0.9)
  )
  .s("pulse").pw(0.5)
  .drive(0.4)
  .gain(0.65)
  .lpf(200).lpenv(600).lpdecay(0.1)
  .cut(1)

// Refined Groove
$: stack(
  s("bd ~ bd ~").gain(1.2),
  s("~ sn").slow(2).shape(0.3).crush(8).gain(0.8).room(0.25),
  s("[hh hh] hh [hh oh]").fast(2).gain(0.5).velocity(perlin.range(0.4,1).slow(5)).hpf(7500).room(0.1)
).swing(0.1).compressor().compressorRatio(5).postgain(1.1)