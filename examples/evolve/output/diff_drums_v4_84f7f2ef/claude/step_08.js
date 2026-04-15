$: s("bd:3 ~ ~ bd:1 ~ ~ ~ bd:2 ~ ~ ~ ~ bd:3 ~ ~ ~").slow(7)
  .shape(0.6).room(0.7).lpf(sine.range(55, 120).slow(14)).gain(0.6)

$: s("~ ~ ~ sn:2 ~ ~ ~ ~ sn:4 ~ ~ sn:1 ~ ~ ~ ~").slow(7)
  .delay(0.7).delaytime(0.75).hpf(800).gain(0.38)

$: note("<c2 ~ ~ g1 ~ ~ eb2 ~ ~ bb1 ~ ~ f1 ~ ~ ab1>").sound("sawtooth")
  .lpf(sine.range(50, 320).slow(15)).slow(8)
  .attack(0.3).release(4).gain(0.26)

$: note("[~ c4 ~] [~ eb4 ~] [~ ~ g4] [~ bb4 ~] [~ ~ c5] [eb4 ~ ~]").sound("sine")
  .slow(14).delay(0.8).delaytime(1.25)
  .lpf(saw.range(500, 900).slow(16)).gain(0.13)

$: note("~ ~ eb5 ~ ~ ~ g5 ~ ~ ~ ~ bb5 ~ ~ ~ c6 ~ ~ ~ ~ g5 ~ ~ ~").sound("triangle")
  .slow(16).attack(0.6).release(5)
  .room(0.85).gain(0.09)

$: s("~ ~ hh:1 ~ ~ ~ oh:1 ~ ~ ~ ~ hh:2 ~ ~ ~ ~ hh:1 ~ ~ oh:2 ~ ~ ~ ~").slow(7)
  .gain(sine.range(0.05, 0.12).slow(16))
  .pan(sine.range(0.25, 0.75).slow(11)).hpf(10000)