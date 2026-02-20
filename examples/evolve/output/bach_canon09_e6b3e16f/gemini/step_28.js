setcps(110/60/4)

// Arp Lead
$: n("g3 d4 bb3 f4 c4 bb3 g3 a3").slow(4)
  .s("triangle")
  .release(0.1).attack(0.01)
  .gain(0.45)
  .shape(0.1)
  .lpf(900).lpq(8)
  .lpenv(2200).lpdecay(0.2)
  .delay(0.5).dt([3/16, 1/8]).dfb(0.65)
  .pan(cosine.slow(12).range(0.25, 0.75))

// Pads
$: n("<g2 bb2 d3> <f2 a2 c3>").slow(8)
  .s("sawtooth")
  .gain(0.3)
  .attack(5).release(9)
  .ftype(1) // Ladder Filter
  .lpf(perlin.slow(32).range(400, 3000)).lpq(5)
  .room(0.5).size(0.85)
  .juxBy(0.4, p => p.octave(1).detune(-5))
  .detune(5)

// Sub
$: n("g1 f1").slow(8)
  .s("sine")
  .gain(0.65)
  .attack(0.01).release(0.5)
  .slide(0.02)
  .lpf(130).lpq(1)
  .cut(1)

// Groove
$: stack(
  s("bd ~ [~ bd] ~").gain(1.0).shape(0.1),
  s("~ ~ [sn cp] ~").gain(0.7).release(0.2).crush(5).room(0.2),
  s("hh").euclid(7, 8).velocity(perlin.range(0.4, 0.9).slow(6)).gain(0.4).hpf(8000).sustain(0.02)
).swing(0.05).compressor().compressorRatio(5)