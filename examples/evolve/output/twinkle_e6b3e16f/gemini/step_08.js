setcps(88/60/4)

$: note("[g4 f4] d#4 c4 [g4 a#4] c5 ~")
  .s("supersaw")
  .slow(2)
  .release(0.2)
  .sustain(0)
  .lpf(perlin.range(1000, 4000).slow(8))
  .lpq(5)
  .drive(0.2)
  .gain(0.4)
  .pan(perlin.slow(12).range(0.2, 0.8))
  .delay(0.5)
  .dfb(0.5)
  .dt(3/8)
  .room(0.3)

$: n("c2 ~ f1 ~ [g1 a#1] g1 ~").s("supersaw")
  .slow(4)
  .release(0.4)
  .sustain(0)
  .attack(0.01)
  .lpf(150)
  .lpenv(600)
  .lpdecay(0.25)
  .lpq(8)
  .drive(0.4)
  .gain(0.6)

$: stack(
  s("bd ~ ~ bd").gain(1.1),
  s("~ cp ~ sn").gain(0.8),
  s("[hh hh hh hh]").hpf(7000).gain(0.4).velocity(perlin.slow(3).range(0.6, 0.9)).pan(0.6)
).room(0.2).crush(8)