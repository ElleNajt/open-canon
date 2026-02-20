setcps(116/60/4)

// Plucky Arp
$: n("<g4 d5 bb4 f5> <f4 c5 a4 e5>").slow(8)
  .s("triangle")
  .release(0.2)
  .gain(0.4)
  .fmenv(24)
  .fmdecay(0.1)
  .fmh(2)
  .lpf(perlin.range(1200, 5000).slow(12))
  .lpq(8)
  .delay(0.5)
  .delaytime(3/16)
  .dfb(0.7)
  .pan(cosine.slow(16).range(0.2, 0.8))

// Supersaw Pads
$: n("<[g2,bb2,d3,f3]> <[f2,a2,c3,e3]>").slow(4)
  .s("supersaw")
  .gain(0.18)
  .attack(3)
  .release(6)
  .lpenv(1500)
  .lpattack(3)
  .lpdecay(4)
  .lpf(perlin.range(400, 2000).slow(32))
  .lpq(6)
  .off(0.01, p => p.pan(1).detune(-12))
  .pan(0)
  .room(0.6)
  .size(0.95)

// Deep Sub
$: n("g1 ~ g1 f1").slow(4)
  .s("sine")
  .gain(0.6)
  .shape(sine.range(0, 0.2).slow(24))
  .lpf(120)
  .slide(0.02)
  .cut(1)

// Groove
$: stack(
  s("bd ~ [bd bd] ~").gain(1.1).velocity(perlin.range(0.8, 1).slow(8)).shape(0.1),
  s("~ cp").gain(0.8).release(0.2).jux(p => p.add(3)).hpf(200).room(0.25),
  s("hh*8").sustain(0.02).gain(sine.range(0.3, 0.7).slow(2)).hpf(8000),
  s("~ ~ ~ [~ oh] oh [oh oh]").gain(0.5).sustain(0.12).hpf(6000)
).swing(0.05).compressor().compressorRatio(8).postgain(1.1)