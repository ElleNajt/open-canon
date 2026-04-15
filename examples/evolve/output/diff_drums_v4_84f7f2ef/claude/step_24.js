$: s("bd:3 ~ ~ ~ bd:1 ~ ~ bd:2 ~ ~ ~ ~ bd:3 ~").slow(9)
  .shape(0.68).room(0.85).lpf(perlin.range(50, 200).slow(11)).gain(0.26)

$: s("~ ~ ~ sn:2 ~ ~ ~ ~ ~ sn:4 ~ sn:1 ~ ~ ~").slow(11)
  .delay(0.88).delaytime(2.1).dfb(0.58).hpf(2600).gain(0.14)

$: note("<c2 ~ g1 ~ eb2 ~ bb1 ~ f1 ~ ab1 ~ db2 ~ a1 ~>").sound("sawtooth")
  .lpf(sine.range(60, 280).slow(9)).slow(11)
  .attack(2.8).release(11).gain(0.16)

$: note("[c4 ~] [~ eb4] [g4 ~] [~ bb4] [d5 ~] [~ ab4] [f4 ~] [~ a4]").sound("triangle")
  .slow(11).delay(0.78).delaytime(1.414).lpf(1600).gain(0.11)

$: note("eb5 ~ ~ g5 ~ ~ bb5 ~ ~ d6 ~ ~ ab5 ~ ~ c6 ~").sound("sine")
  .slow(9).attack(3.6).release(12).pan(sine.range(0.15, 0.85).slow(11)).gain(0.10)

$: s("~ oh:1 ~ ~ ~ oh:2 ~ ~ hh:1 ~ ~ hh:2 ~ ~ cr:1 ~").slow(11)
  .gain(perlin.range(0.06, 0.13).slow(9)).pan(cosine.range(0.1, 0.9).slow(11)).room(0.65)