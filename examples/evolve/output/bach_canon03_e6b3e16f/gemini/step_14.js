setcps(94/60/4)

let leadSynth = x => x
  .s("supersaw")
  .gain(0.18)
  .attack(0.01)
  .release(0.5)
  .lpf(tri.range(800, 5000).slow(12))
  .lpq(6)
  .shape(0.3)
  .phaser(0.1)
  .room(0.35)
  .delay(0.5)
  .delaytime(3/16)
  .delayfeedback(0.55)

let bassSynth = x => x
  .s("pulse")
  .gain(0.4)
  .octave(-1)
  .lpf(350)
  .lpq(3.5)
  .drive(0.5)
  .crush(10)
  .attack(0.01)
  .release(0.3)
  .lpenv(2000)
  .lpdecay(0.15)

$: n("[a4 g4 fs4 d4] [g4 fs4 g4 e4]")
  .slow(4)
  .apply(leadSynth)

$: n("d2 g2 a2 g2")
  .slow(2)
  .apply(bassSynth)

$: n("[d2, a2]")
  .s("triangle")
  .gain(0.25)
  .attack(8)
  .release(16)
  .lpf(perlin.range(200, 1500).slow(24))
  .lpq(5)
  .room(0.8)
  .delay(0.2)
  .slow(16)

$: stack(
  s("bd*4").velocity("<1 0.7>").cut(1),
  s("~ sn").gain(0.8).lpf(8000).room(0.25),
  s("hh*16").euclid(11, 16).hpf(7000).gain(rand.range(0.4, 0.6))
).postgain(0.9)