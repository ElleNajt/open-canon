setcps(115/60/4)

// Evolved Arp
$: n("<g3,bb3> <d4,f4> <c3,eb3> <g3,bb3>").slow(4)
  .s("pulse")
  .release(0.5).attack(0.01)
  .gain(0.45)
  .lpf(sine.slow(13).range(800, 2500)).lpq(3)
  .delay(0.5).dt(3/16).dfb(0.4)
  .pan(cosine.slow(16).range(0.2, 0.8))

// Evolved Pads
$: n("<[g2,bb2,d3,f3]> <[c3,eb3,g3,bb3]>").slow(8)
  .s("supersaw")
  .gain(0.25)
  .attack(6).release(10)
  .lpf(perlin.range(300, 1500).slow(32)).lpq(4)
  .tremolo(perlin.range(0, 0.4).slow(23))
  .room(0.7).size(0.9)
  .off(0.015, p => p.detune(-12).pan(1))
  .pan(0).detune(12)

// Evolved Sub
$: n("g1 ~ [~ g1] ~ c1 ~ [~ c1] ~").slow(4)
  .s("sine")
  .gain(0.7)
  .attack(0.01).release(0.5)
  .drive(0.2)
  .lpf(90).lpq(1)
  .cut(1)

// Evolved Groove
$: stack(
  s("bd ~ ~ [~ bd] ~ bd ~ ~").gain(1.0).shape(0.1),
  s("~ ~ [sn|cp] ~").gain(0.8).release(0.15).crush(6).room(0.3),
  s("[hh hh] hh [hh hh] [~ hh]").gain(perlin.range(0.3,0.7).slow(5)).hpf(8500).sustain(0.01),
  s("~ ~ ~ ~ ~ ~ oh ~").gain(0.5).sustain(0.2).hpf(6000).delay(0.4).dt([3/16, 1/8]).dfb(0.35)
).swing(0.05)