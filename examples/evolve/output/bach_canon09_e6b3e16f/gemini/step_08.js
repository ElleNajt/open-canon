setcps(108/60/4)

// Plucky Arp
$: n("<g4 b4 d5 e5> <f4 a4 c5 d5>").slow(4)
  .s("triangle")
  .fmi(0.4)
  .fmh(2)
  .gain(0.45)
  .lpf(1000)
  .lpenv(2000)
  .lpdecay(0.1)
  .release(0.1)
  .delay(0.5)
  .delaytime(1/6)
  .delayfeedback(0.5)
  .pan(perlin.range(0.2, 0.8).slow(16))

// Phaser Pads
$: n("<g3 f3>").chord("major7")
  .s("supersaw")
  .slow(4)
  .gain(0.25)
  .attack(2)
  .release(4)
  .lpf(perlin.range(500, 3000).slow(12))
  .lpq(5)
  .phaser(0.2)
  .off(0.02, p => p.pan(0.9).detune(10))
  .pan(0.1)
  .room(0.6)

// Syncopated Bass
$: n("<g1 f1>").slow(4).euclid(5,8)
  .s("pulse").pw(0.3)
  .distort(0.2)
  .gain(0.6)
  .lpf(saw.range(200, 500).slow(8))
  .lpenv(400)
  .lpdecay(0.1)
  .cut(1)
  .release(0.05)

// Groovebox
$: stack(
  s("bd*4").gain(1),
  s("~ sn ~ [sn cp]").gain(0.8).shape(0.4).room(0.2).lpf(9000),
  s("hh*16").euclid(11,16).every(8, s => s.s("oh")).hpf(8000).gain(0.4).velocity(perlin.range(0.5,1).slow(4))
).swing(0.5).compressor().postgain(1.1)