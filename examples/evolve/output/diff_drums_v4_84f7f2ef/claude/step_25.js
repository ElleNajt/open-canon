$: s("bd:3 ~ ~ bd:1 ~ ~ bd:2 ~ ~ ~ bd:3 ~ ~ ~").slow(7)
  .shape(0.72).room(0.9).lpf(perlin.range(40, 180).slow(13)).gain(0.24)

$: s("~ ~ sn:2 ~ ~ ~ ~ sn:4 ~ ~ sn:1 ~ ~ ~").slow(9)
  .delay(0.92).delaytime(1.618).dfb(0.62).hpf(2200).gain(0.13)

$: note("<c2 g1 ~ eb2 ~ bb1 f1 ~ ab1 db2 ~ a1 e1 ~>").sound("sawtooth")
  .lpf(sine.range(55, 320).slow(11)).slow(9)
  .attack(3.2).release(14).gain(0.15)

$: note("[c4 ~] [eb4 ~] [~ g4] [bb4 ~] [~ f4] [ab4 ~] [d5 ~] [~ a4]").sound("triangle")
  .slow(13).delay(0.82).delaytime(1.732).lpf(1400).gain(0.10)

$: note("eb5 ~ g5 ~ ~ bb5 ~ d6 ~ ~ ab5 ~ c6 ~ ~ f5").sound("sine")
  .slow(11).attack(4.2).release(16).pan(sine.range(0.12, 0.88).slow(9)).gain(0.09)

$: s("~ oh:1 ~ ~ oh:2 ~ ~ ~ hh:1 ~ hh:2 ~ ~ cr:1 ~ ~").slow(13)
  .gain(perlin.range(0.05, 0.12).slow(7)).pan(cosine.range(0.08, 0.92).slow(9)).room(0.7)