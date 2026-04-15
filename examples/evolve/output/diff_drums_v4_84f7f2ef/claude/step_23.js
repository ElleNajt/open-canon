$: s("bd:3 ~ ~ ~ ~ bd:1 ~ ~ ~ bd:2 ~ ~ ~ ~ ~ bd:3 ~ ~").slow(11)
  .shape(0.72).room(0.9).lpf(perlin.range(35, 160).slow(13)).gain(0.24)

$: s("~ ~ ~ ~ sn:2 ~ ~ ~ ~ ~ ~ sn:4 ~ ~ sn:1 ~ ~ ~ ~ ~").slow(13)
  .delay(0.92).delaytime(2.618).dfb(0.62).hpf(2400).gain(0.12)

$: note("<c2 ~ ~ ~ g1 ~ ~ eb2 ~ ~ ~ bb1 ~ ~ f1 ~ ~ ab1 ~ db2 ~ ~ a1 ~ ~>").sound("sawtooth")
  .lpf(sine.range(45, 220).slow(11)).slow(13)
  .attack(3.2).release(13).gain(0.14)

$: note("[~ c4 ~] [eb4 ~ ~] [~ ~ g4] [bb4 ~] [~ d5 ~] [~ eb5 ~] [ab4 ~] [~ f4 ~]").sound("triangle")
  .slow(13).delay(0.85).delaytime(1.618).lpf(1200).gain(0.09)

$: note("~ ~ eb5 ~ ~ ~ g5 ~ ~ ~ bb5 ~ ~ ~ d6 ~ ~ ~ ab5 ~ ~ ~ e5 ~ ~ c6 ~ ~").sound("sine")
  .slow(11).attack(4.2).release(14).pan(sine.range(0.1, 0.9).slow(13)).gain(0.08)

$: s("~ ~ oh:1 ~ ~ ~ ~ ~ oh:2 ~ ~ ~ ~ hh:1 ~ ~ ~ ~ hh:2 ~ ~ ~ ~ cr:1 ~ ~").slow(13)
  .gain(perlin.range(0.05, 0.11).slow(11)).pan(cosine.range(0.05, 0.95).slow(13)).room(0.7)