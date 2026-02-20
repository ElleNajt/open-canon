setcps(104/60/4)

let leadSynth = x => x
  .s("pulse")
  .gain(0.25)
  .attack(0.01)
  .release(0.3)
  .lpf(sine.range(1200, 3500).slow(4))
  .lpq(6)
  .crush(7)
  .room(0.2)
  .delay(0.3)
  .delaytime(3/8)
  .delayfeedback(0.45)

let bassSynth = x => x
  .s("square")
  .gain(0.4)
  .octave(-1)
  .lpf(400)
  .lpq(3)
  .drive(0.3)
  .attack(0.01)
  .release(0.25)
  .lpenv(2500)
  .lpdecay(0.1)

$: n("[a4 g4] fs4 ~ ~ d4 ~ ~")
  .slow(2)
  .apply(leadSynth)

$: n("d3 ~ g2 ~ a2 ~ ~ ~")
  .slow(2)
  .apply(bassSynth)

$: n("d2")
  .s("triangle")
  .gain(0.2)
  .attack(4)
  .release(8)
  .lpf(perlin.range(200, 900).slow(16))
  .lpq(4)
  .room(0.7)
  .slow(8)

$: stack(
  s("bd ~ [bd bd:0.7] ~").cut(1),
  s("~ sn").gain(0.8).lpf(8000).room(0.1).delay(0.1).dt(1/16),
  s("hh*8").fast(2).euclid(11, 16).gain(rand.range(0.2, 0.5)).hpf(9000).sustain(0.04).crush(8)
).swing(0.55).postgain(0.95)