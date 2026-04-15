$: s("bd:3 ~ ~ ~ ~ bd:1 ~ ~ ~ ~ ~ ~ bd:2 ~ ~ ~ ~ ~ ~ bd:3 ~ ~").slow(14)
  .shape(0.5).room(0.6).lpf(sine.range(45, 150).slow(9)).gain(0.48)

$: s("~ ~ ~ ~ ~ sn:2 ~ ~ ~ ~ ~ ~ sn:4 ~ ~ sn:1 ~ ~ ~ ~ ~").slow(11)
  .delay(0.65).delaytime(1.125).hpf(900).gain(0.35)

$: note("<c2 ~ ~ ~ ~ g1 ~ ~ ~ ~ eb2 ~ ~ ~ ~ bb1 ~ ~ ~ ~ f1 ~ ~ ~ ab1 ~ ~>").sound("sawtooth")
  .lpf(sine.range(50, 280).slow(11)).slow(14)
  .attack(0.5).release(5).gain(0.24)

$: note("[~ ~ c4 ~] [~ eb4 ~ ~] [~ ~ g4 ~] [~ ~ ~ ~] [~ bb4 ~ ~] [~ ~ c5 ~] [~ g4 ~ ~]").sound("triangle")
  .slow(14).delay(0.75).delaytime(1.5)
  .room(0.65).gain(0.12)

$: note("~ ~ ~ ~ eb5 ~ ~ ~ ~ ~ g5 ~ ~ ~ ~ ~ ~ bb5 ~ ~ ~ ~ ~ c6 ~ ~ ~ ~ g5 ~ ~ ~").sound("sine")
  .slow(14).attack(1.0).release(6)
  .lpf(600).gain(0.09)

$: s("~ ~ ~ ~ hh:1 ~ ~ ~ ~ ~ ~ oh:1 ~ ~ ~ ~ ~ hh:2 ~ ~ ~ ~ ~ ~ oh:2 ~ ~ ~ ~ ~").slow(13)
  .gain(sine.range(0.06, 0.11).slow(14))
  .pan(sine.range(0.2, 0.8).slow(9)).hpf(9000)