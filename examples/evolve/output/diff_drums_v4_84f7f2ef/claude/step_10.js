$: s("bd:3 ~ ~ ~ ~ bd:1 ~ ~ ~ ~ ~ ~ bd:2 ~ ~ ~ ~ ~ ~ bd:3 ~ ~").slow(14)
  .shape(0.4).room(0.7).lpf(sine.range(35, 120).slow(11)).gain(0.5)

$: s("~ ~ ~ ~ ~ sn:2 ~ ~ ~ ~ ~ ~ sn:4 ~ ~ sn:1 ~ ~ ~ ~ ~").slow(11)
  .delay(0.7).delaytime(1.125).hpf(850).gain(0.32)

$: note("<c2 ~ ~ ~ ~ g1 ~ ~ ~ ~ eb2 ~ ~ ~ ~ bb1 ~ ~ ~ ~ f1 ~ ~ ~ ab1 ~ ~>").sound("sawtooth")
  .lpf(sine.range(40, 200).slow(13)).slow(14)
  .attack(0.6).release(6).gain(0.22)

$: note("[~ ~ c4 ~] [~ eb4 ~ ~] [~ ~ ~ ~] [g4 ~ ~ ~] [~ bb4 ~ ~] [~ ~ c5 ~] [~ ~ ~ g4]").sound("triangle")
  .slow(16).delay(0.8).delaytime(1.75)
  .room(0.75).gain(0.1)

$: note("~ ~ ~ ~ eb5 ~ ~ ~ ~ ~ g5 ~ ~ ~ ~ ~ ~ bb5 ~ ~ ~ ~ ~ c6 ~ ~ ~ ~ g5 ~ ~ ~").sound("sine")
  .slow(16).attack(1.2).release(7)
  .lpf(500).gain(0.07)

$: s("~ ~ ~ ~ hh:1 ~ ~ ~ ~ ~ ~ oh:1 ~ ~ ~ ~ ~ hh:2 ~ ~ ~ ~ ~ ~ oh:2 ~ ~ ~ ~ ~").slow(15)
  .gain(sine.range(0.05, 0.09).slow(16))
  .pan(sine.range(0.15, 0.85).slow(11)).hpf(10000)