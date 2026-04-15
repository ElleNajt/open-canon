$: s("bd:3 ~ ~ ~ ~ bd:1 ~ ~ ~ bd:2 ~ ~ ~ ~ ~ bd:3 ~").slow(11)
  .shape(0.72).room(0.9).lpf(perlin.range(35, 160).slow(13)).gain(0.28)

$: s("~ ~ ~ ~ sn:2 ~ ~ ~ ~ ~ ~ sn:4 ~ ~ sn:1 ~ ~ ~ ~").slow(13)
  .delay(0.92).delaytime(2.236).dfb(0.62).hpf(1400).gain(0.19)

$: note("<c2 ~ ~ ~ ~ g1 ~ ~ eb2 ~ ~ ~ ~ bb1 ~ ~ ~ f1 ~ ~ ~ ab1 ~ ~ ~ db2 ~ ~ a1 ~ ~>").sound("sawtooth")
  .lpf(sine.range(40, 320).slow(11)).slow(13)
  .attack(2.8).release(13).gain(0.14)

$: note("[~ ~ c4] [~ eb4] [~ ~ g4] [bb4 ~] [~ ~ d5] [eb5 ~] [~ ab4 ~]").sound("triangle")
  .slow(13).delay(0.9).delaytime(3.14159).lpf(1200).gain(0.07)

$: note("~ ~ ~ eb5 ~ ~ ~ ~ g5 ~ ~ ~ bb5 ~ ~ ~ ~ d6 ~ ~ ~ ~ ~ ab5 ~ ~ ~ e5 ~ ~ ~").sound("sine")
  .slow(11).attack(4.2).release(11).pan(sine.range(0.12, 0.88).slow(13)).gain(0.06)

$: s("~ ~ oh:1 ~ ~ ~ ~ ~ ~ oh:2 ~ ~ ~ ~ ~ hh:1 ~ ~ ~ ~ ~ ~ hh:2 ~ ~ ~").slow(13)
  .gain(perlin.range(0.06, 0.12).slow(11)).pan(cosine.range(0.08, 0.92).slow(13)).hpf(7200)