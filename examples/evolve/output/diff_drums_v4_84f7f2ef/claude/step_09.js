$: s("bd:3 ~ ~ ~ bd:1 ~ ~ ~ ~ bd:2 ~ ~ ~ ~ ~ bd:3 ~").slow(11)
  .shape(0.55).room(0.6).lpf(sine.range(40, 95).slow(16)).gain(0.55)

$: s("~ ~ ~ ~ sn:2 ~ ~ ~ ~ ~ sn:4 ~ sn:1 ~ ~ ~ ~").slow(9)
  .delay(0.65).delaytime(0.875).hpf(900).gain(0.35)

$: note("<c2 ~ ~ ~ g1 ~ ~ ~ eb2 ~ ~ ~ bb1 ~ ~ ~ f1 ~ ~ ab1 ~>").sound("sawtooth")
  .lpf(sine.range(45, 280).slow(16)).slow(11)
  .attack(0.4).release(5).gain(0.24)

$: note("[~ ~ c4] [~ eb4 ~] [~ ~ ~] [g4 ~ ~] [~ bb4 ~] [~ ~ c5]").sound("triangle")
  .slow(13).delay(0.75).delaytime(1.5)
  .room(0.7).gain(0.11)

$: note("~ ~ ~ eb5 ~ ~ ~ ~ g5 ~ ~ ~ ~ ~ bb5 ~ ~ ~ ~ c6 ~ ~ ~ g5 ~ ~").sound("sine")
  .slow(15).attack(0.8).release(6)
  .lpf(600).gain(0.08)

$: s("~ ~ ~ hh:1 ~ ~ ~ ~ oh:1 ~ ~ ~ ~ hh:2 ~ ~ ~ ~ ~ oh:2 ~ ~ ~ ~").slow(13)
  .gain(sine.range(0.05, 0.1).slow(14))
  .pan(sine.range(0.2, 0.8).slow(9)).hpf(11000)