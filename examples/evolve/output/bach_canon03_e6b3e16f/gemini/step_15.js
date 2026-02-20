setcps(94/60/4)

let leadSynth = x => x
  .s("supersaw")
  .gain(0.18)
  .attack(0.01)
  .release(0.5)
  .lpf(tri.range(600, 6000).slow(12))
  .lpq(8)
  .fmi(0.1)
  .phaser(0.15)
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
  .iterBack(1)
  .apply(leadSynth)

$: n("[d2 d2 d2 g2] [a2 a2 g2 g2]")
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
  s("~ sn ~ [~ sn]").gain("<1 0.5>").lpf(8000).room(0.35),
  s("oh*8").release(0.05).hpf(6000).gain(rand.range(0.4, 0.7))
).postgain(0.95)