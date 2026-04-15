$: s("bd:3 ~ ~ bd:1 ~ ~ bd:2 ~ ~ ~ bd:3 ~ ~ ~ bd:1 ~").slow(6)
  .shape(0.7).room(0.6).lpf(sine.range(45, 95).slow(16)).gain(0.65)

$: s("~ ~ ~ sn:2 ~ ~ ~ sn:4 ~ ~ sn:1 ~ ~ ~ sn:2 ~").slow(6)
  .delay(0.65).delaytime(0.875).hpf(700).gain(0.42)

$: note("<c2 ~ g1 ~ eb2 ~ bb1 ~ f1 ~ ab1 ~ db2 ~ ab1 ~>").sound("sawtooth")
  .lpf(sine.range(60, 380).slow(16)).slow(8)
  .attack(0.25).release(3.5).gain(0.28)

$: note("[~ c4 ~] [eb4 ~ ~] [~ ~ g4] [bb4 ~ ~] [~ c5 ~] [~ ~ eb4]").sound("sine")
  .slow(12).delay(0.75).delaytime(1.125)
  .lpf(saw.range(600, 1100).slow(14)).gain(0.15)

$: note("~ eb5 ~ ~ ~ g5 ~ ~ ~ bb5 ~ ~ c6 ~ ~ ~ g5 ~ ~ eb5 ~ ~ ~ ~").sound("triangle")
  .slow(16).attack(0.5).release(4.5)
  .room(0.8).gain(0.1)

$: s("~ hh:1 ~ ~ oh:1 ~ ~ ~ hh:2 ~ ~ ~ hh:1 ~ oh:2 ~ ~ ~ ~ ~").slow(6)
  .gain(sine.range(0.05, 0.15).slow(14))
  .pan(sine.range(0.2, 0.8).slow(9)).hpf(9500)