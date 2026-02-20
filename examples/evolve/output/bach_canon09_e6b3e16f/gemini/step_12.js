setcps(110/60/4)

// Flowing Arp
$: n("g5 d5 b4 ~ a4 e5 c5 ~ f4 c5 a4? ~ c4 g4 e4 ~").slow(8)
  .s("sine")
  .fmi(perlin.range(0.1, 0.5).slow(16))
  .fmh(1.5)
  .gain(0.5)
  .release(0.1)
  .lpf(4000).lpq(2).lpenv(2500).lpdecay(0.08)
  .delay(0.4)
  .delaytime(3/16)
  .dfb(0.6)
  .pan(perlin.range(0.2, 0.8).slow(24))

// Lush Pads
$: n("[g3,b3,d4] [a3,c4,e4] [f3,a3,c4] [c3,e3,g3]").slow(4)
  .s("square")
  .gain(0.25)
  .attack(2)
  .release(6)
  .lpf(cosine.range(400, 1800).slow(18))
  .lpq(5)
  .phaser(0.1).phaserdepth(0.8)
  .off(0.015, p => p.pan(0.9).detune(3))
  .pan(0.1)
  .room(0.7)
  .size(0.9)

// Sub Bass
$: n("g1 a1 f1 c1").slow(4)
  .s("pulse").pw(sine.range(0.1, 0.9).slow(16))
  .drive(0.4)
  .gain(0.7)
  .lpf(180).lpenv(500).lpdecay(0.08)
  .cut(1)

// Evolved Groove
$: stack(
  s("bd ~ bd [~ bd]").gain(1.2),
  stack(
      s("~ sn").slow(2),
      s("~ cp").slow(2).gain(0.6)
  ).shape(0.3).crush(8).gain(0.8).room(0.25),
  s("hh").euclid(7, 8).fast(2).sustain(0.02).gain(0.5).velocity(perlin.range(0.4,1).slow(5)).hpf(7500).room(0.1)
).swing(0.08).compressor().compressorRatio(5).postgain(1.1)