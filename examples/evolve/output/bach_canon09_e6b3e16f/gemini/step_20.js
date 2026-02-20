setcps(112/60/4)

// Evolved Pluck
$: n("[g3,bb3,d4] [c3,eb3,g3]").slow(2).ply(2)
  .s("fm")
  .fmi(4).fmh(2).fmenv(8).fmdecay(0.1)
  .release(0.2)
  .gain(0.4)
  .delay(0.4).delaytime(3/16).dfb(0.5)
  .pan(cosine.slow(12).range(0.2, 0.8))

// Evolved Pads
$: n("<[g2,bb2,d3,f3]> <[c3,eb3,g3,b3]>").slow(4)
  .s("sawtooth")
  .gain(0.25)
  .attack(5)
  .release(8)
  .lpf(perlin.range(400, 2200).slow(28))
  .lpq(5)
  .phaser(0.1).phaserdepth(8)
  .room(0.6).size(0.9)
  .off(0.01, p => p.detune(-20).pan(1))
  .pan(0).detune(20)

// Evolved Sub
$: n("g1 ~ g1 ~ c1 ~ [c1 g1]").slow(4)
  .s("triangle")
  .gain(0.6)
  .attack(0.01)
  .release(0.5)
  .drive(0.3)
  .lpf(120)
  .cut(1)

// Evolved Groove
$: stack(
  s("bd ~ ~ [~ bd] ~ bd ~ ~").gain(1.0).shape(0.1),
  s("~ ~ [sn cp] ~").gain(0.6).hpf(200).release(0.15).jux(p => p.pan(0.7).speed(1.2)),
  s("hh").euclid(5,8).sustain(0.02).gain(0.5).hpf(7000),
  s("~ ~ ~ ~ ~ ~ oh ~").gain(0.4).sustain(0.2).hpf(5000).delay(0.3).dt(1/8).dfb(0.4)
).swing(0.1)