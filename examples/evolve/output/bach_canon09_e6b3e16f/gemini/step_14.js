setcps(105/60/4)

// Plucky Arp
$: n("<g4 bb4 d5 ~> <f4 c5 a4 ~>").slow(4)
  .s("pulse")
  .release(0.1)
  .gain(0.4)
  .lpf(sine.range(800, 4000).slow(16))
  .lpq(5)
  .delay(0.6)
  .delaytime(3/16)
  .dfb(0.6)
  .pan(cosine.slow(24).range(0.2, 0.8))

// Supersaw Pads
$: n("<[g2,bb2,d3,f3]> <[f2,a2,c3,e3]>").slow(4)
  .s("supersaw")
  .gain(0.25)
  .attack(4)
  .release(8)
  .lpf(perlin.range(500, 1800).slow(32))
  .lpq(4)
  .off(0.01, p => p.pan(0.9).detune(-5))
  .pan(0.1)
  .room(0.7)
  .size(0.9)

// Deep Sub
$: n("g1 f1").slow(4)
  .s("sine")
  .gain(0.8)
  .lpf(100)
  .shape(0.1)
  .cut(1)

// New Groove
$: stack(
  s("bd*4").gain(1.1),
  s("~ sn ~ ~").gain(0.9).shape(0.4).crush(8).hpf(200).room(0.3),
  s("hh").euclid(7, 8).fast(2).sustain(0.02).gain(perlin.range(0.3, 0.7).slow(8)).hpf(7000),
  s("~ ~ mt ~").gain(0.6).delay(0.3).dfb(0.4).hpf(400)
).swing(0.05).compressor().compressorRatio(8).postgain(1.1)