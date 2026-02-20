setcps(115/60/4)

// Pluck Arp
$: n("g3 d4 bb3 g4").slow(2)
  .s("pulse")
  .release(0.12).attack(0.01)
  .gain(0.4)
  .shape(0.3)
  .fmh(1.5).fmi(0.1)
  .lpf(600).lpq(6)
  .lpenv(2500).lpdecay(0.25)
  .phaser(0.1).phaserdepth(4)
  .delay(0.4).dt(3/16).dfb(perlin.slow(20).range(0.5, 0.7))
  .pan(cosine.slow(16).range(0.2, 0.8))

// Pads
$: n("<g2 f3> <c3 bb3>").slow(8)
  .s("supersaw")
  .gain(0.25)
  .attack(6).release(10)
  .lpf(perlin.slow(24).range(700, 2400)).lpq(4)
  .room(0.6).size(0.9)
  .juxBy(0.35, p => p.octave(1).detune(-5))
  .detune(5)

// Sub
$: n("g1 ~ c1 g1").slow(4)
  .s("sine")
  .gain(0.7)
  .attack(0.01).release(0.3)
  .slide(0.01)
  .lpf(120).lpq(1)
  .shape(0.2)
  .cut(1)

// Groove
$: stack(
  s("bd ~ [~ bd] bd*2").gain(0.9).shape(0.15),
  s("~ cp ~ [sn cp/2]").release(0.18).gain(0.7).crush(5).room(0.2),
  s("[hh hh] [hh oh]!4").velocity(perlin.range(0.5, 1).slow(7)).gain(0.5).hpf(9000).sustain(0.03)
).swing(0.025).compressor().compressorRatio(4).compressorKnee(10)