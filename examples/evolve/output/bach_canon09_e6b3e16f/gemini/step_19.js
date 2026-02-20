setcps(116/60/4)

// Evolved Arp
$: n("<g4 bb4 d5> <c4 eb4 g4>").slow(4)
  .s("square")
  .release(0.3)
  .gain(0.35)
  .lpf(saw.range(800, 6000).slow(4))
  .lpq(10)
  .delay(0.4)
  .delaytime(3/16)
  .dfb(0.5)
  .pan(cosine.slow(12).range(0.1, 0.9))
  .sometimesBy(0.2, p => p.ply(2))

// Evolved Pads
$: n("<[g2,bb2,d3,f3]> <[c3,eb3,g3,bb3]>").slow(4)
  .s("supersaw")
  .gain(0.2)
  .attack(4)
  .release(7)
  .lpf(perlin.range(500, 2500).slow(24))
  .lpq(4)
  .trem(sine.range(0.1, 0.4).slow(16))
  .off(0.015, p => p.pan(1).detune(-15))
  .pan(0)
  .room(0.7)
  .size(0.9)

// Evolved Sub
$: n("g1 ~ g1 [~ g1] c1 ~ c1 [~ c1]").slow(8)
  .s("sine")
  .gain(0.5)
  .attack(0.01)
  .release(0.4)
  .shape(sine.range(0.1, 0.3).slow(16))
  .lpf(150)
  .cut(1)

// Evolved Groove
$: stack(
  s("bd ~ [bd bd] ~").gain(1.1).shape(0.1),
  s("~ cp ~ [~ cp]").gain(0.7).release(0.1).jux(p => p.add(2.5)).hpf(300).room(0.2),
  s("[hh ~] [hh hh] hh [~ hh]").fast(2).sustain(0.025).gain(sine.range(0.2, 0.6).slow(3)).hpf(7000),
  s("~ ~ ~ oh ~ ~ oh ~").gain(0.4).sustain(0.1).hpf(5000)
).swing(0.05).crush(7).compressor().compressorRatio(6).postgain(1.0)