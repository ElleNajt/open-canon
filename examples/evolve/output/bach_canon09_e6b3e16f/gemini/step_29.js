setcps(100/60/4)

// Arp Lead
$: n("<g3 d4 bb3 f4> <c4 a3 g3 d4>").slow(4)
  .s("supersaw")
  .release(0.15).attack(0.01)
  .gain(0.35)
  .shape(0.2)
  .lpf(700).lpq(6)
  .lpenv(2500).lpdecay(0.25)
  .delay(0.5).dt([3/16, 1/8]).dfb(0.65)
  .pan(cosine.slow(12).range(0.25, 0.75))

// Pads
$: n("<g2 bb2 d3> <f2 a2 c3>").slow(8)
  .s("sine")
  .fm(2).fmh(0.5).fmenv(8)
  .gain(0.4)
  .attack(6).release(10)
  .lpf(sine.slow(16).range(600, 2200)).lpq(4)
  .room(0.6).size(0.9)
  .juxBy(0.5, p => p.octave(1).detune(-8))
  .detune(8)

// Sub
$: n("g1 f1").slow(8)
  .s("square")
  .gain(0.5)
  .attack(0.01).release(0.6)
  .lpf(100).lpq(2)
  .cut(1)

// Groove
$: stack(
  s("bd ~ ~ bd").gain(1.1).shape(0.2),
  s("~ ~ sn [~ cp]").gain(0.8).release(0.15).crush(6).room(0.15).sustain(0.1),
  s("hh").euclid(5, 8).velocity(perlin.range(0.5, 1).slow(8)).gain(0.45).hpf(9000).sustain(0.01)
).swing(0.02).compressor().compressorRatio(4)