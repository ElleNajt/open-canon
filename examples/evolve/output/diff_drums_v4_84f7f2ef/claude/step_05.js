$: s("bd:3 ~ ~ bd:1 ~ bd:2 ~ ~ ~ bd:3 ~ ~").slow(4)
  .shape(0.7).room(0.4).lpf(75).gain(0.72)

$: s("~ ~ sn:2 ~ ~ ~ sn:4 ~ ~ sn:1 ~ ~").slow(4)
  .delay(0.55).delaytime(0.66).hpf(500).gain(0.5)

$: note("<c2 g1 eb2 bb1 f1 ab1 db2 ab1>").sound("sawtooth")
  .lpf(sine.range(100, 550).slow(16)).slow(8)
  .attack(0.12).release(1.8).gain(0.35)

$: note("[~ c4 ~] [eb4 ~ g4] [~ bb4 c5] [g4 ~ eb4]").sound("sine")
  .slow(8).delay(0.65).delaytime(0.75)
  .lpf(1200).gain(0.2)

$: note("~ eb5 ~ ~ g5 ~ bb5 ~ ~ c6 ~ ~ g5 ~ ~ ~").sound("triangle")
  .slow(10).attack(0.25).release(2.5)
  .room(0.65).gain(0.14)

$: s("~ hh:1 ~ oh:1 ~ ~ hh:2 ~ hh:1 ~ ~ oh:2").slow(4)
  .gain(sine.range(0.08, 0.22).slow(9))
  .pan(rand.range(0.2, 0.8)).hpf(8500)