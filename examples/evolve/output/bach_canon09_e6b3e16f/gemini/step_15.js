setcps(120/60/4)

// Plucky Arp
$: n("<g4 bb4 d5 ~> <f4 c5 a4 ~>").slow(4)
  .s("triangle")
  .release(0.2)
  .gain(0.4)
  .fmi(sine.range(0.1, 4).slow(24))
  .lpf(sine.range(800, 4000).slow(16))
  .lpq(5)
  .delay(0.5)
  .delaytime(3/16)
  .dfb(0.6)
  .pan(cosine.slow(32).range(0.2, 0.8))

// Saw Pads
$: n("<[g2,bb2,d3,f3]> <[f2,a2,c3,e3]>").slow(4)
  .s("saw")
  .gain(0.2)
  .attack(3)
  .release(9)
  .lpf(perlin.range(400, 1600).slow(24))
  .lpenv(2500)
  .lpattack(6)
  .lpq(4)
  .off(0.015, p => p.pan(0.9).detune(-8))
  .pan(0.1)
  .room(0.7)
  .size(0.9)

// Deep Sub
$: n("g1 f1").slow(4)
  .s("triangle")
  .gain(0.7)
  .lpf(120)
  .slide(0.01)
  .cut(1)

// Groove
$: stack(
  s("bd*4").gain(1.1).shape(0.2),
  s("~ sn ~ sn").gain(0.8).shape(0.4).crush(8).hpf(200).room(0.3),
  s("[~,hh] [hh,oh]").fast(2).sustain(0.03).gain(perlin.range(0.4, 0.6).slow(4)).hpf(8000)
).swing(0.05).compressor().compressorRatio(8).postgain(1.1)