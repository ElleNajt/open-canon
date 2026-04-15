$: s("bd:3 ~ ~ ~ ~ bd:1 ~ ~ ~ bd:2 ~ ~ ~ ~ ~ bd:3 ~").slow(11)
  .shape(0.68).room(0.85).lpf(perlin.range(45, 180).slow(13)).gain(0.26)

$: s("~ ~ ~ ~ sn:2 ~ ~ ~ ~ ~ ~ sn:4 ~ ~ sn:1 ~ ~ ~ ~").slow(13)
  .delay(0.88).delaytime(2.236).dfb(0.58).hpf(1600).gain(0.17)

$: note("<c2 ~ ~ ~ ~ g1 ~ ~ eb2 ~ ~ ~ ~ bb1 ~ ~ ~ f1 ~ ~ ~ ab1 ~ ~ ~ db2 ~ ~ a1 ~ ~>").sound("sawtooth")
  .lpf(sine.range(50, 380).slow(11)).slow(13)
  .attack(2.4).release(11).gain(0.13)

$: note("[~ ~ c4] [~ eb4] [~ ~ g4] [bb4 ~] [~ ~ d5] [eb5 ~] [~ ab4 ~] [~ f4 ~]").sound("triangle")
  .slow(13).delay(0.85).delaytime(3.14159).lpf(1400).gain(0.08)

$: note("~ ~ ~ eb5 ~ ~ ~ ~ g5 ~ ~ ~ bb5 ~ ~ ~ ~ d6 ~ ~ ~ ~ ~ ab5 ~ ~ ~ e5 ~ ~ ~ c6 ~").sound("sine")
  .slow(11).attack(3.8).release(9).pan(sine.range(0.15, 0.85).slow(13)).gain(0.07)

$: s("~ ~ oh:1 ~ ~ ~ ~ ~ ~ oh:2 ~ ~ ~ ~ ~ hh:1 ~ ~ ~ ~ ~ ~ hh:2 ~ ~ ~ ~ cr:1 ~ ~").slow(13)
  .gain(perlin.range(0.07, 0.13).slow(11)).pan(cosine.range(0.1, 0.9).slow(13)).hpf(6800)