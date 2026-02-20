setcps(105/60/4)

// Crystal Arp
$: n("g4 b4 d5 c5 e5 d5 b4").iter(2).slow(4)
  .s("sine")
  .fmi(sine.range(0.5, 2).slow(6))
  .fmh(2)
  .gain(0.4)
  .bpf(sine.range(800, 3000).slow(8))
  .bpq(8)
  .release(0.4)
  .delay(0.5)
  .delaytime(1/6)
  .delayfeedback(0.5)
  .pan(saw.range(0.1, 0.9).slow(16))

// Phaser Pads
$: n("<g3 f3>").chord("major7")
  .s("supersaw")
  .slow(4)
  .gain(0.3)
  .attack(2)
  .release(4)
  .lpf(800)
  .lpq(5)
  .phaser(cosine.range(0.1, 1).slow(24))
  .phaserdepth(0.8)
  .off(0.02, p => p.pan(0.8).detune(12))
  .pan(0.2)
  .room(0.8)

// Pulse Bass
$: n("<g2 ~ g2 g1> <f1 ~ f1 f2>").slow(2)
  .s("pulse")
  .shape(sine.range(0.2, 0.8).slow(6))
  .gain(0.55)
  .lpf(400)
  .lpq(2)
  .decay(0.05)
  .release(0.1)

// Groovebox
$: stack(
  s("bd ~ [bd bd] ~").gain(1),
  s("[~ sn]*2").gain(0.8).crush(5).room(0.2).lpf(9000),
  s("~ hh").euclid(5, 8).velocity(perlin.range(0.4, 1)).hpf(9000).gain(0.5)
).compressor().postgain(1.1)