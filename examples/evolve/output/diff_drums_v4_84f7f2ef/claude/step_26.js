$: s("bd:3 ~ bd:1 ~ bd:2 ~ ~ bd:3 ~ ~").slow(11)
  .shape(0.65).room(0.85).lpf(perlin.range(60, 220).slow(17)).gain(0.22)

$: s("~ sn:2 ~ ~ sn:4 ~ sn:1 ~ ~ ~").slow(13)
  .delay(0.88).delaytime(2.236).dfb(0.58).hpf(1800).gain(0.11)

$: note("<c2 ~ g1 eb2 bb1 ~ f1 ab1 ~ db2 a1 ~ e1>").sound("sawtooth")
  .lpf(sine.range(45, 280).slow(19)).slow(11)
  .attack(4.5).release(18).gain(0.14)

$: note("[c4 ~] [~ eb4] [g4 ~] [~ bb4] [f4 ~] [~ ab4] [d5 ~]").sound("triangle")
  .slow(17).delay(0.78).delaytime(1.414).lpf(1200).gain(0.09)

$: note("eb5 ~ ~ g5 ~ bb5 ~ ~ d6 ~ ab5 ~ ~ c6 ~ f5 ~").sound("sine")
  .slow(13).attack(5.5).release(22).pan(sine.range(0.15, 0.85).slow(11)).gain(0.08)

$: s("~ ~ oh:1 ~ ~ oh:2 ~ ~ hh:1 ~ ~ cr:1 ~ ~ ~").slow(11)
  .gain(perlin.range(0.06, 0.11).slow(13)).room(0.75).pan(cosine.range(0.1, 0.9).slow(7))