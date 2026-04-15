$: s("bd:3 ~ ~ bd:1 ~ ~ ~ bd:2 ~ ~ bd:3 ~ ~").slow(11)
  .shape(0.65).room(0.85).lpf(perlin.range(40, 160).slow(14)).gain(0.18)

$: s("~ sn:2 ~ ~ ~ ~ sn:4 ~ ~ ~ sn:1 ~ ~").slow(13)
  .delay(0.88).delaytime(2.236).dfb(0.58).hpf(1800).gain(0.09)

$: note("<c2 ~ eb2 ~ g1 ~ ~ bb1 ~ f1 ~ ~ ab1 ~ db2 ~>").sound("sawtooth")
  .lpf(sine.range(45, 280).slow(15)).slow(11)
  .attack(4.5).release(14).gain(0.12)

$: note("[~ c4 ~] [eb4 ~ ~] [~ ~ g4] [~ bb4 ~] [f4 ~ ~] [~ ~ ab4] [~ d5 ~]").sound("triangle")
  .slow(16).delay(0.78).delaytime(1.414).lpf(800).gain(0.08)

$: note("~ eb5 ~ ~ ~ g5 ~ bb5 ~ ~ ~ ~ d6 ~ ~ ~ ab5 ~ ~ c6 ~ ~ ~ f5").sound("sine")
  .slow(14).attack(5.5).release(14).pan(sine.range(0.15, 0.85).slow(11)).gain(0.07)

$: s("~ ~ oh:1 ~ ~ ~ ~ oh:2 ~ ~ hh:1 ~ ~ ~ ~ ~ cr:1 ~ ~ ~ ~ ~ ~").slow(16)
  .gain(perlin.range(0.05, 0.09).slow(13)).room(0.75).pan(cosine.range(0.1, 0.9).slow(7))