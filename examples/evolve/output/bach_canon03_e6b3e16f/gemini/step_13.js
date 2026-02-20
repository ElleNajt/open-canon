setcps(98/60/4)

let leadSynth = x => x
  .s("supersaw")
  .gain(0.18)
  .attack(0.01)
  .release(0.4)
  .lpf(sine.range(1000, 4000).slow(8))
  .lpq(4)
  .shape(0.4)
  .room(0.3)
  .delay(0.4)
  .delaytime(3/8)
  .delayfeedback(0.5)

let bassSynth = x => x
  .s("square")
  .gain(0.4)
  .octave(-1)
  .lpf(400)
  .lpq(3)
  .drive(0.2)
  .attack(0.01)
  .release(0.25)
  .lpenv(2500)
  .lpdecay(0.1)
  .slide(0.03)

$: n("[a4 g4 fs4 d4]/2")
  .slow(2)
  .apply(leadSynth)

$: n("[d3 d2] ~ g2 ~ a2 ~ d3 ~")
  .slow(2)
  .apply(bassSynth)

$: n("d2")
  .s("triangle")
  .gain(0.2)
  .attack(4)
  .release(8)
  .lpf(perlin.range(300, 1200).slow(12))
  .lpq(4)
  .room(0.7)
  .slow(8)

$: stack(
  s("bd ~ bd ~ [~ bd] bd").cut(1),
  s("~ cp").gain(0.8).lpf(9000).room(0.25),
  s("oh*8").fast(2).euclid(7, 16).delay(0.1).dt(3/16).gain(rand.range(0.3, 0.6)).hpf(7000).sustain(0.08).shape(0.2)
).swing(0.55).postgain(0.95)