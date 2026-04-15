$: s("bd:3 ~ bd:1 ~ bd:2 ~ ~ bd:3 ~ ~ bd:1 ~").slow(4)
  .shape(0.65).room(0.5).lpf(sine.range(60, 120).slow(12)).gain(0.7)

$: s("~ ~ sn:2 ~ ~ sn:4 ~ ~ sn:1 ~ ~ sn:2").slow(4)
  .delay(0.6).delaytime(0.75).hpf(600).gain(0.48)

$: note("<c2 g1 eb2 bb1 f1 ab1 [db2 eb2] ab1>").sound("sawtooth")
  .lpf(sine.range(80, 480).slow(14)).slow(8)
  .attack(0.15).release(2.2).gain(0.33)

$: note("[c4 ~ eb4] [~ g4 ~] [bb4 ~ c5] [~ eb4 g4]").sound("sine")
  .slow(8).delay(0.7).delaytime(0.83)
  .lpf(saw.range(800, 1400).slow(10)).gain(0.18)

$: note("eb5 ~ ~ g5 ~ ~ bb5 ~ c6 ~ ~ g5 ~ eb5 ~ ~").sound("triangle")
  .slow(12).attack(0.3).release(3)
  .room(0.7).gain(0.12)

$: s("hh:1 ~ oh:1 ~ ~ hh:2 ~ ~ hh:1 oh:2 ~ ~").slow(4)
  .gain(sine.range(0.07, 0.2).slow(11))
  .pan(sine.range(0.25, 0.75).slow(7)).hpf(9000)