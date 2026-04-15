$: s("bd:3 ~ ~ ~ bd:1 ~ ~ ~ ~ bd:2 ~ ~ ~ ~ bd:3 ~ ~").slow(14)
  .shape(0.72).room(0.9).lpf(perlin.range(35, 120).slow(16)).gain(0.16)

$: s("~ ~ sn:2 ~ ~ ~ ~ ~ sn:4 ~ ~ ~ ~ sn:1 ~ ~ ~").slow(15)
  .delay(0.92).delaytime(2.618).dfb(0.62).hpf(2200).gain(0.08)

$: note("<c2 ~ ~ eb2 ~ ~ g1 ~ ~ ~ bb1 ~ ~ f1 ~ ~ ~ ab1 ~ ~ db2 ~ ~ ~>").sound("sawtooth")
  .lpf(sine.range(40, 220).slow(16)).slow(13)
  .attack(5.5).release(16).gain(0.11)

$: note("[~ c4 ~ ~] [~ eb4 ~ ~] [~ ~ g4 ~] [~ ~ ~ bb4] [f4 ~ ~ ~] [~ ~ ab4 ~] [~ d5 ~ ~]").sound("triangle")
  .slow(14).delay(0.82).delaytime(1.618).lpf(600).gain(0.07)

$: note("~ ~ eb5 ~ ~ ~ ~ g5 ~ ~ bb5 ~ ~ ~ ~ ~ d6 ~ ~ ~ ~ ab5 ~ ~ ~ c6 ~ ~ ~ ~ f5 ~ ~").sound("sine")
  .slow(16).attack(6.5).release(16).pan(sine.range(0.12, 0.88).slow(13)).gain(0.06)

$: s("~ ~ ~ oh:1 ~ ~ ~ ~ ~ ~ oh:2 ~ ~ ~ ~ hh:1 ~ ~ ~ ~ ~ ~ ~ cr:1 ~ ~ ~ ~ ~ ~ ~").slow(14)
  .gain(perlin.range(0.05, 0.08).slow(15)).room(0.8).pan(cosine.range(0.08, 0.92).slow(9))