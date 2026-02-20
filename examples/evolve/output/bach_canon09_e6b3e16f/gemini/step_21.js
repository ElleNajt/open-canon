setcps(115/60/4)

// Evolved Arp
$: n("<g3,bb3> <d4,f4> <c3,eb3> <g3,bb3>").slow(4)
  .s("triangle")
  .release(0.4).attack(0.01)
  .gain(0.5)
  .lpf(1200).lpq(2)
  .room(0.5).size(0.8)
  .pan(cosine.slow(16).range(0.3, 0.7))

// Evolved Pads
$: n("<[g2,bb2,d3,f3]> <[c3,eb3,g3,bb3]>").slow(8)
  .s("supersaw")
  .gain(0.2)
  .attack(6).release(10)
  .lpf(perlin.range(300, 1500).slow(32))
  .lpq(4)
  .room(0.7).size(0.9)
  .off(0.015, p => p.detune(-15).pan(1))
  .pan(0).detune(15)

// Evolved Sub
$: n("g1 ~ ~ ~ c1 ~ ~ ~").slow(4)
  .s("sine")
  .gain(0.7)
  .attack(0.02).release(0.8)
  .lpf(100)
  .cut(1)

// Evolved Groove
$: stack(
  s("bd ~ ~ [~ bd] ~ bd ~ ~").gain(1.0).shape(0.2),
  s("~ ~ sn ~").gain(0.7).release(0.2).crush(8).room(0.2),
  s("hh*8").gain(perlin.range(0.3,0.7).slow(3)).hpf(8000).sustain(0.01),
  s("~ ~ ~ ~ ~ ~ oh ~").gain(0.4).sustain(0.15).hpf(6000).delay(0.3).dt(3/16).dfb(0.3)
).swing(0.05)