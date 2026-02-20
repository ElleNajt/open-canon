setcps(110/60/4)

// Pluck Arp
$: n("g3 d4 bb3 c4").slow(2)
  .s("pulse")
  .release(0.12).attack(0.01)
  .gain(0.4)
  .shape(0.3)
  .fmh(1.5).fmi(0.1)
  .lpf(500).lpq(6)
  .lpenv(3000).lpdecay(0.2)
  .delay(0.4).dt(3/16).dfb(0.6)
  .pan(cosine.slow(16).range(0.2, 0.8))

// Pads
$: n("<g2 f3> <c3 bb3>").slow(8)
  .s("supersaw")
  .gain(0.25)
  .attack(6).release(10)
  .lpf(perlin.slow(32).range(600, 2200)).lpq(4)
  .room(0.7).size(0.95)
  .off(0.015, p => p.detune(-10).pan(1))
  .pan(0).detune(10)

// Sub
$: n("g1 ~ c1 ~").slow(4)
  .s("sine")
  .gain(0.75)
  .attack(0.01).release(0.3)
  .lpf(110).lpq(1)
  .shape(0.15)
  .cut(1)

// Groove
$: stack(
  s("bd ~ [~ bd] bd").gain(1).shape(0.2),
  s("~ cp ~ sn").release(0.2).gain(0.8).crush(6).room(0.2),
  s("[hh hh] [hh oh]!4").velocity(perlin.range(0.5, 1).slow(7)).gain(0.55).hpf(8500).sustain(0.03)
).swing(0.025)