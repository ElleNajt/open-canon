setcps(105/60/4)

// Evolved Arp
$: n("<g4 b4 d5 g5> <c4 e4 g4 c5>")
  .sound("triangle")
  .detune(2)
  .slow(2)
  .gain(0.45)
  .lpf(sine.range(1200, 3500).slow(8))
  .lpq(4)
  .attack(0.01)
  .release(0.3)
  .delay(0.5)
  .delaytime(3/8)
  .delayfeedback(0.5)
  .pan(0.65)

// Atmospheric Pads
$: n("<g3 c3>").chord("major7")
  .sound("supersaw")
  .slow(4)
  .gain(0.35)
  .attack(1.5)
  .release(3)
  .lpf(sine.range(400, 1000).slow(12))
  .lpq(6)
  .room(0.6)
  .pan(0.35)
  .detune(8)
  .phaser(0.1)
  .phaserdepth(8)

// Bass
$: n("<g1 ~ g1 ~> <c1 ~ c1 ~>")
  .sound("sine")
  .gain(0.6)
  .lpf(180)
  .attack(0.01)
  .release(0.4)

// Drums
$: stack(
  s("bd*4").gain(0.9),
  s("[~ sn]*2").gain(0.7).room(0.2),
  s("oh").release(0.04).euclid(7, 16).gain(0.5).hpf(7000).velocity(perlin.range(0.6, 1))
).compressor().postgain(0.9)