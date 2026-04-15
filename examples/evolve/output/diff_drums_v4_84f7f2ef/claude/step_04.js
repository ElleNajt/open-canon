$: s("bd:3 ~ ~ bd:1 ~ ~ bd:2 ~ ~ ~ bd:3 ~").slow(4)
  .shape(0.6).room(0.5).lpf(90).gain(0.7)

$: s("~ ~ sn:2 ~ ~ ~ sn:4 ~ ~ sn:1 ~ ~").slow(4)
  .delay(0.6).delaytime(0.66).hpf(400).gain(0.55)

$: note("<c2 ~ ~ g1 ~ ~ eb2 ~ ~ bb1 ~ ~ f1 ~ ~ ab1 ~ ~>").sound("sawtooth")
  .lpf(sine.range(120, 600).slow(12)).slow(6)
  .attack(0.08).release(1.2).gain(0.38)

$: note("[~ ~ c4] [~ eb4 ~] [~ ~ g4] [bb4 ~ ~] [~ c5 ~] [~ ~ g4]").sound("sine")
  .slow(8).delay(0.7).delaytime(0.875)
  .lpf(1400).gain(0.22)

$: note("~ ~ eb5 ~ ~ ~ g5 ~ ~ bb5 ~ ~ ~ c6 ~ ~ ~").sound("triangle")
  .slow(8).attack(0.2).release(2)
  .room(0.7).gain(0.15)

$: s("~ ~ hh:1 ~ ~ oh:1 ~ ~ ~ hh:2 ~ ~").slow(4)
  .gain(sine.range(0.1, 0.25).slow(7))
  .pan(rand.range(0.15, 0.85)).hpf(9000)