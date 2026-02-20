setcps(94/60/4)

let leadSynth = x => x
  .s("supersaw")
  .gain(0.18)
  .attack(0.01)
  .release(0.6)
  .lpf(tri.range(800, 5000).slow(12))
  .lpq(6)
  .fmi(0.3)
  .phaser(0.1)
  .room(0.3)
  .delay(0.5)
  .delaytime(3/8)
  .delayfeedback(0.6)

let bassSynth = x => x
  .s("pulse")
  .gain(0.4)
  .octave(-1)
  .lpf(sine.range(200, 450).slow(8))
  .lpq(4)
  .shape(perlin.range(0.2, 0.8).slow(12))
  .attack(0.01)
  .release(0.4)

$: n("[a4 ~ g4 fs4] [d4 g4 fs4 e4]")
  .slow(4)
  .iterBack(1)
  .apply(leadSynth)

$: n("d2 ~ d2 g2 a2 ~ a2 g2")
  .slow(4)
  .apply(bassSynth)

$: n("[d3, a3]")
  .s("triangle")
  .gain(0.25)
  .attack(8)
  .release(16)
  .lpf(perlin.range(400, 2500).slow(16))
  .lpq(5)
  .pan(sine.range(0.1, 0.9).slow(20))
  .room(0.8)
  .delay(0.2)
  .slow(16)

$: stack(
  s("bd*4").velocity("<1 0.8 0.9 0.7>").cut(1),
  s("~ sn ~ [~ sn/2 sn/2]").gain("<1 0.5 0.5>").lpf(9000).room(0.2),
  s("hh*8").gain(perlin.range(0.3, 0.8)).hpf(7000).pan(0.6)
).postgain(0.95)