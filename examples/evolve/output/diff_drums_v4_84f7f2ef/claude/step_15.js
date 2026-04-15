$: s("bd:3 ~ ~ bd:1 ~ ~ ~ bd:2 ~ bd:3 ~ ~ ~ ~").slow(13)
  .shape(0.7).room(0.6).lpf(perlin.range(35, 140).slow(11)).gain(0.42)

$: s("~ ~ ~ sn:2 ~ ~ ~ sn:4 ~ ~ sn:1 ~ ~ ~").slow(11)
  .delay(0.85).delaytime(0.618).dfb(0.55).hpf(1400).gain(0.28)

$: note("<c2 ~ g1 ~ eb2 ~ bb1 ~ f1 ~ ab1 ~ db2 ~ a1 ~ d2 ~>").sound("sawtooth")
  .lpf(sine.range(55, 420).slow(13)).slow(11)
  .attack(1.2).release(9).gain(0.22)

$: note("[~ c4] [eb4 ~] [~ g4] [bb4 c5] [~ ~] [eb5 ~] [~ d5]").sound("triangle")
  .slow(11).delay(0.88).delaytime(1.618).lpf(2200).gain(0.11)

$: note("~ ~ eb5 ~ ~ g5 ~ bb5 ~ ~ c6 ~ ~ ab5 ~ f5").sound("sine")
  .slow(13).attack(2).release(10).pan(sine.range(0.2, 0.8).slow(11)).gain(0.08)

$: s("~ hh:1 ~ ~ oh:1 ~ hh:2 ~ ~ oh:2 ~ ~ hh:1 ~").slow(11)
  .gain(perlin.range(0.06, 0.12).slow(9)).pan(cosine.range(0.1, 0.9).slow(7)).hpf(7500)