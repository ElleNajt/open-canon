setcps(105/60/4)

// Evolved FM Arp
$: n("<g4 b4 d5 b4> <c4 e4 g4 e4>")
  .s("sawtooth")
  .fmi(sine.range(0.5, 2).slow(6))
  .fmh(2)
  .slow(2)
  .gain(0.4)
  .lpf(sine.range(1500, 4000).slow(8))
  .lpq(3)
  .release(0.4)
  .delay(0.5)
  .delaytime(3/8)
  .delayfeedback(0.45)
  .pan(saw.range(0.2, 0.8).slow(12))

// Lush Pads
$: n("<g3 c3>").chord("major7")
  .s("supersaw")
  .slow(4)
  .gain(0.3)
  .attack(2)
  .release(4)
  .lpf(800)
  .lpq(5)
  .off(0.02, p => p.pan(0.8).detune(12))
  .pan(0.2)
  .room(0.7)
  .tremolo(0.3)
  .tremolosync(8)

// Octave Bass
$: n("<g2 g1 g2 g1> <c2 c1 c2 c1>")
  .s("pulse")
  .gain(0.5)
  .lpf(250)
  .lpq(1)
  .decay(0.1)
  .release(0.2)
  .drive(0.15)

// Groove Drums
$: stack(
  s("bd*4").gain(1),
  s("[~ <sn cp>]*2").gain(0.7).room(0.25).lpf(8000),
  s("[hh*3 ~]*4").release(0.05).gain(0.4).hpf(8000).velocity(perlin.range(0.5, 1))
).compressor().postgain(1)