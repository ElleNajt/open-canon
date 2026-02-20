setcps(115/60/4)

// Arp
$: n("g3 d4 bb3 c4").slow(2)
  .s("sawtooth")
  .release(0.3).attack(0.01)
  .gain(0.4)
  .shape(0.2)
  .lpf(sine.slow(8).range(500, 3000)).lpq(4)
  .delay(0.5).dt(3/16).dfb(0.5)
  .pan(cosine.slow(12).range(0.1, 0.9))

// Pads
$: n("<g2,d3,f3> <c3,g3,bb3>").slow(8)
  .s("supersaw")
  .gain(0.2)
  .attack(7).release(12)
  .bpf(perlin.range(400, 2000).slow(24)).bpq(8)
  .room(0.6).size(0.95)
  .off(0.015, p => p.detune(-12).pan(1))
  .pan(0).detune(12)

// Sub
$: n("g1 g1 ~ g0 c1 c1 ~ c0").slow(4)
  .s("sine")
  .gain(0.8)
  .attack(0.01).release(0.4)
  .slide(0.02)
  .lpf(100).lpq(1)
  .cut(1)

// Groove
$: stack(
  s("bd ~ [bd bd] ~").gain(1.1).shape(0.2),
  s("~ ~ sn ~").gain(0.7).release(0.2).crush(8).room(0.2),
  s("hh*8").velocity(perlin.range(0.4, 1).slow(7)).gain(0.6).hpf(9000).sustain(0.02),
  s("~ ~ ~ ~ ~ mt ~ ~").gain(0.8).release(0.3).delay(0.4).dt(3/16).dfb(0.5)
).swing(0.05)