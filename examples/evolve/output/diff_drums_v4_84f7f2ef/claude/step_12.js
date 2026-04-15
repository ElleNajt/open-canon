$: s("bd:3 ~ ~ ~ bd:1 ~ ~ bd:2 ~ ~ ~ ~ bd:3 ~ ~").slow(12)
  .shape(0.6).room(0.5).lpf(sine.range(60, 200).slow(7)).gain(0.52)

$: s("~ ~ ~ sn:2 ~ ~ ~ ~ sn:4 ~ sn:1 ~ ~ ~ ~").slow(10)
  .delay(0.7).delaytime(0.875).hpf(1200).gain(0.38)

$: note("<c2 ~ g1 ~ eb2 ~ bb1 ~ f1 ab1 ~>").sound("sawtooth")
  .lpf(sine.range(80, 350).slow(9)).slow(11)
  .attack(0.4).release(4).gain(0.28)

$: note("[c4 ~] [~ eb4] [g4 ~] [~ bb4] [c5 ~] [g4 ~]").sound("triangle")
  .slow(11).delay(0.8).delaytime(1.25).gain(0.15)

$: note("~ eb5 ~ ~ g5 ~ ~ bb5 ~ c6 ~ g5 ~").sound("sine")
  .slow(11).attack(0.8).release(5).gain(0.11)

$: s("hh:1 ~ ~ oh:1 ~ ~ hh:2 ~ ~ oh:2 ~ ~").slow(11)
  .gain(sine.range(0.07, 0.13).slow(11)).pan(sine.range(0.25, 0.75).slow(7)).hpf(8000)