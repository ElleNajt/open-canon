$: s("bd:3 ~ bd:1 ~ ~ bd:2 ~ bd:3").slow(3)
  .shape(0.5).room(0.4).lpf(120).gain(0.75)

$: s("~ sn:2 ~ ~ sn:4 ~ sn:1 ~").slow(3)
  .delay(0.5).delaytime(0.5).hpf(300).gain(0.6)

$: note("<c2 ~ g1 ~ eb2 ~ bb1 ~ f1 ~ ab1 ~>").sound("sawtooth")
  .lpf(sine.range(150, 700).slow(16)).slow(4)
  .attack(0.05).release(0.9).gain(0.4)

$: note("[~ c4 ~] [~ eb4] [g4 ~ ~] [bb4 ~] [~ ~ c5] [~ g4]").sound("sine")
  .slow(6).delay(0.6).delaytime(0.75)
  .lpf(1800).gain(0.25)

$: note("~ eb5 ~ ~ g5 ~ bb5 ~ ~ c6 ~ ~").sound("triangle")
  .slow(6).attack(0.15).release(1.5)
  .room(0.6).gain(0.18)

$: s("~ hh:1 ~ ~ oh:1 ~ ~ hh:2").slow(3)
  .gain(sine.range(0.12, 0.3).slow(5))
  .pan(rand.range(0.2, 0.8)).hpf(8000)