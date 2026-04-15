$: s("bd:3 ~ ~ ~ bd:1 ~ ~ bd:2 ~ ~ bd:3 ~ ~ ~ ~ ~").slow(11)
  .shape(0.72).room(0.8).lpf(perlin.range(35, 220).slow(13)).gain(0.35)

$: s("~ ~ ~ sn:2 ~ ~ ~ ~ sn:4 ~ ~ sn:1 ~ ~ ~ ~").slow(13)
  .delay(0.88).delaytime(0.809).dfb(0.62).hpf(1400).gain(0.24)

$: note("<c2 ~ ~ g1 ~ eb2 ~ ~ bb1 ~ f1 ~ ~ ab1 ~ db2 ~ ~ a1 ~>").sound("sawtooth")
  .lpf(sine.range(55, 420).slow(11)).slow(13)
  .attack(1.8).release(13).gain(0.18)

$: note("[~ c4 ~] [~ eb4] [g4 ~ ~] [bb4 ~] [~ ~ d5] [eb5 ~] [~ ab4 ~]").sound("triangle")
  .slow(13).delay(0.92).delaytime(2.236).lpf(1600).gain(0.09)

$: note("~ ~ ~ eb5 ~ ~ ~ g5 ~ bb5 ~ ~ ~ d6 ~ ~ ~ ab5 ~ ~ e5 ~").sound("sine")
  .slow(11).attack(3.2).release(14).pan(sine.range(0.12, 0.88).slow(13)).gain(0.06)

$: s("~ ~ oh:1 ~ ~ ~ ~ oh:2 ~ ~ ~ hh:1 ~ ~ ~ ~ hh:2 ~").slow(13)
  .gain(perlin.range(0.04, 0.1).slow(11)).pan(cosine.range(0.08, 0.92).slow(9)).hpf(7500)