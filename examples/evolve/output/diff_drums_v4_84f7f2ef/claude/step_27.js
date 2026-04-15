$: s("bd:3 ~ bd:1 ~ ~ bd:2 ~ bd:3 ~ ~ ~").slow(13)
  .shape(0.72).room(0.9).lpf(perlin.range(50, 180).slow(19)).gain(0.2)

$: s("~ sn:2 ~ ~ ~ sn:4 ~ ~ sn:1 ~ ~ ~ ~").slow(11)
  .delay(0.92).delaytime(2.618).dfb(0.62).hpf(2200).gain(0.1)

$: note("<c2 ~ ~ g1 ~ eb2 ~ bb1 ~ ~ f1 ~ ab1 ~ ~ db2>").sound("sawtooth")
  .lpf(sine.range(35, 240).slow(16)).slow(13)
  .attack(5.5).release(16).gain(0.13)

$: note("[c4 ~ ~] [~ eb4 ~] [~ ~ g4] [bb4 ~ ~] [~ f4 ~] [~ ~ ab4] [d5 ~ ~]").sound("triangle")
  .slow(14).delay(0.82).delaytime(1.732).lpf(900).gain(0.085)

$: note("eb5 ~ ~ ~ g5 ~ ~ bb5 ~ ~ ~ d6 ~ ~ ab5 ~ ~ ~ c6 ~ ~ f5 ~ ~").sound("sine")
  .slow(16).attack(6.5).release(16).pan(sine.range(0.1, 0.9).slow(13)).gain(0.075)

$: s("~ ~ ~ oh:1 ~ ~ ~ oh:2 ~ ~ ~ hh:1 ~ ~ ~ ~ cr:1 ~ ~ ~ ~ ~").slow(14)
  .gain(perlin.range(0.055, 0.1).slow(11)).room(0.8).pan(cosine.range(0.05, 0.95).slow(9))