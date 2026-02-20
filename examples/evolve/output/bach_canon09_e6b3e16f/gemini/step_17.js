setcps(116/60/4)

// Plucky Arp
$: n("<g4 bb4 d5 f5> <f4 a4 c5 e5>").slow(8)
  .s("square")
  .release(0.25)
  .gain(0.35)
  .fm(sine.range(0.5, 4).slow(20))
  .lpf(sine.range(900, 4500).slow(16))
  .lpq(7)
  .delay(0.5)
  .delaytime(3/16)
  .dfb(0.6)
  .pan(cosine.slow(16).range(0.1, 0.9))

// Supersaw Pads
$: n("<[g2,bb2,d3,f3]> <[f2,a2,c3,e3]>").slow(4)
  .s("supersaw")
  .gain(0.15)
  .attack(4)
  .release(8)
  .lpf(perlin.range(300, 1800).slow(28))
  .lpq(5)
  .off(0.01, p => p.pan(1).detune(-12))
  .pan(0)
  .room(0.7)
  .size(0.9)

// Deep Sub
$: n("g1 f1").slow(4)
  .s("sine")
  .gain(0.7)
  .lpf(110)
  .drive(0.2)
  .slide(0.015)
  .cut(1)

// Groove
$: stack(
  s("bd*4").gain(1).velocity(perlin.range(0.8, 1).slow(8)).shape(0.1),
  s("~ sn ~ sn").gain(0.8).shape(0.3).crush(6).hpf(150).delay(0.2).delaytime(1/16).dfb(0.4),
  s("<hh*3 oh>*4").sustain(0.05).gain(perlin.range(0.4, 0.8).slow(4)).hpf(8000)
).swing(0.05).compressor().compressorRatio(7).postgain(1)