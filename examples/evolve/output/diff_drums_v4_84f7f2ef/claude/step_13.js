$: s("bd:3 ~ ~ bd:1 ~ ~ bd:2 ~ ~ bd:3 ~ ~").slow(11)
  .shape(0.7).room(0.6).lpf(perlin.range(55, 180).slow(9)).gain(0.48)

$: s("~ ~ sn:2 ~ ~ ~ sn:4 ~ sn:1 ~ ~ ~").slow(9)
  .delay(0.75).delaytime(0.666).dfb(0.45).hpf(1400).gain(0.35)

$: note("<c2 g1 eb2 bb1 f1 ab1 db2>").sound("sawtooth")
  .lpf(perlin.range(70, 420).slow(11)).slow(13)
  .attack(0.5).release(5).gain(0.26)

$: note("[c4 ~] [eb4 ~] [~ g4] [bb4 ~] [~ c5] [g4 eb4]").sound("triangle")
  .slow(13).delay(0.85).delaytime(1.333).lpf(2200).gain(0.14)

$: note("~ eb5 ~ g5 ~ ~ bb5 c6 ~ ~ g5 ~").sound("sine")
  .slow(13).attack(1.2).release(6).pan(sine.range(0.3, 0.7).slow(7)).gain(0.1)

$: s("hh:1 ~ oh:1 ~ hh:2 ~ oh:2 ~ hh:1 ~ ~ ~").slow(13)
  .gain(perlin.range(0.06, 0.12).slow(9)).pan(cosine.range(0.2, 0.8).slow(11)).hpf(7500)