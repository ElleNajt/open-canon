setcps(108/60/4)

// Plucky Arp
$: n("g4 b4 d5 [~ c5] e5 g4 b3").slow(4)
  .s("triangle")
  .fmi(0.4)
  .fmh(2)
  .gain(0.4)
  .lpf(1000)
  .lpenv(2000)
  .lpdecay(0.15)
  .release(0.1)
  .delay(0.5)
  .delaytime(1/6)
  .delayfeedback(0.5)
  .pan(perlin.range(0.2, 0.8).slow(16))

// Phaser Pads
$: n("<g3 f3>").chord("major7")
  .s("supersaw")
  .slow(4)
  .gain(0.2)
  .attack(3)
  .release(5)
  .lpf(sine.range(400, 2500).slow(8))
  .lpq(5)
  .phaser(0.1)
  .off(0.02, p => p.pan(0.9).detune(10))
  .pan(0.1)
  .room(0.6)

// Octave Bass
$: n("<g1 g1 [g1 g2]> <f1 f1 [f1 f2]>").slow(4)
  .s("square")
  .distort(0.3)
  .gain(0.55)
  .lpf(250)
  .lpenv(400)
  .lpdecay(0.1)
  .lpq(2)
  .cut(1)
  .release(0.05)

// Groovebox
$: stack(
  s("bd ~ [~ bd] ~ bd").gain(1.1),
  s("~ sn ~ [sn cp]").gain(0.8).shape(0.4).room(0.2).lpf(9000),
  s("hh*8").every(4, s => s.s("oh")).hpf(8000).gain(0.4).velocity(perlin.range(0.5,1).slow(2))
).compressor().postgain(1.1)