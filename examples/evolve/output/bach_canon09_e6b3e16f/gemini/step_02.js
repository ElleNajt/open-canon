setcps(110/60/4)

// Evolved Arp
$: n("g4 b4 d5 g5 d5 b4")
  .sound("pulse")
  .detune(3)
  .slow(2)
  .gain(0.4)
  .lpf(sine.range(1000, 3000).slow(8))
  .lpq(8)
  .attack(0.01)
  .release(0.3)
  .delay(0.5)
  .delaytime(3/8)
  .delayfeedback(0.6)
  .swing(0.05)
  .pan(0.4)

// Atmospheric Pads
$: n("<g3 c3>").chord("major7")
  .sound("supersaw")
  .slow(4)
  .gain(0.3)
  .attack(1)
  .release(2.5)
  .lpf(sine.range(400, 1200).slow(12))
  .lpq(4)
  .room(0.5)
  .pan(0.6)
  .detune(6)

// Bass
$: n("<g1 c1>")
  .sound("square")
  .slow(2)
  .gain(0.5)
  .lpf(250)
  .lpq(5)
  .attack(0.02)
  .drive(0.2)
  .release(0.8)

// Drums
$: stack(
  s("bd*4"),
  s("[~ sn]*2").gain(0.8),
  s("hh").euclid(7, 16).gain(0.45).hpf(8000).crush(10).swing(0.05)
).compressor().postgain(0.8)