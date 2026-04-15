$: s("bd:3 ~ ~ bd:1 ~ ~ ~ bd:2 ~ bd:3 ~ ~ ~ ~").slow(13)
  .shape(0.65).room(0.7).lpf(perlin.range(40, 160).slow(11)).gain(0.44)

$: s("~ ~ ~ sn:2 ~ ~ ~ sn:4 ~ ~ sn:1 ~ ~ ~").slow(11)
  .delay(0.8).delaytime(0.777).dfb(0.5).hpf(1200).gain(0.32)

$: note("<c2 ~ g1 ~ eb2 ~ bb1 ~ f1 ~ ab1 ~ db2 ~>").sound("sawtooth")
  .lpf(sine.range(60, 380).slow(13)).slow(11)
  .attack(0.8).release(7).gain(0.24)

$: note("[~ c4] [eb4 ~] [~ ~] [g4 bb4] [~ ~] [c5 ~] [~ g4]").sound("triangle")
  .slow(11).delay(0.9).delaytime(1.5).lpf(1800).gain(0.12)

$: note("~ ~ eb5 ~ ~ g5 ~ bb5 ~ ~ c6 ~ ~ g5").sound("sine")
  .slow(11).attack(1.5).release(8).pan(sine.range(0.25, 0.75).slow(9)).gain(0.09)

$: s("~ hh:1 ~ ~ oh:1 ~ ~ hh:2 ~ oh:2 ~ ~ ~ hh:1").slow(11)
  .gain(perlin.range(0.05, 0.11).slow(7)).pan(cosine.range(0.15, 0.85).slow(13)).hpf(8000)