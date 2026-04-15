$: s("bd:3 ~ ~ ~ ~ bd:1 ~ ~ ~ bd:2 ~ ~ ~ ~ bd:3 ~ ~").slow(13)
  .shape(0.65).room(0.85).lpf(perlin.range(40, 180).slow(11)).gain(0.32)

$: s("~ ~ ~ ~ sn:2 ~ ~ ~ ~ ~ sn:4 ~ ~ ~ sn:1 ~ ~ ~").slow(11)
  .delay(0.9).delaytime(1.618).dfb(0.58).hpf(1200).gain(0.22)

$: note("<c2 ~ ~ ~ g1 ~ ~ eb2 ~ ~ ~ bb1 ~ ~ f1 ~ ~ ~ ab1 ~ ~ db2 ~ ~ ~ a1 ~>").sound("sawtooth")
  .lpf(sine.range(45, 380).slow(13)).slow(11)
  .attack(2.2).release(11).gain(0.16)

$: note("[~ ~ c4] [eb4 ~] [~ g4 ~] [~ ~ bb4] [d5 ~] [~ eb5] [~ ~ ab4]").sound("triangle")
  .slow(11).delay(0.88).delaytime(2.618).lpf(1400).gain(0.08)

$: note("~ ~ ~ ~ eb5 ~ ~ ~ ~ g5 ~ ~ bb5 ~ ~ ~ ~ d6 ~ ~ ~ ~ ab5 ~ ~ ~ e5 ~").sound("sine")
  .slow(13).attack(3.8).release(13).pan(sine.range(0.15, 0.85).slow(11)).gain(0.055)

$: s("~ ~ ~ oh:1 ~ ~ ~ ~ ~ oh:2 ~ ~ ~ ~ hh:1 ~ ~ ~ ~ ~ hh:2 ~ ~").slow(11)
  .gain(perlin.range(0.05, 0.11).slow(13)).pan(cosine.range(0.1, 0.9).slow(11)).hpf(6800)