$: s("bd:3 ~ ~ ~ ~ bd:1 ~ ~ ~ ~ ~ bd:2 ~ ~ ~ ~ ~ ~ bd:3 ~ ~ ~ ~").slow(16)
  .shape(0.68).room(0.85).lpf(perlin.range(45, 140).slow(14)).gain(0.14)

$: s("~ ~ ~ sn:2 ~ ~ ~ ~ ~ sn:4 ~ ~ ~ ~ ~ sn:1 ~ ~ ~ ~ ~").slow(15)
  .delay(0.88).delaytime(2.618).dfb(0.58).hpf(1800).gain(0.07)

$: note("<c2 ~ ~ ~ eb2 ~ ~ ~ g1 ~ ~ ~ ~ bb1 ~ ~ ~ f1 ~ ~ ~ ~ ab1 ~ ~ ~ db2 ~ ~ ~ ~ ~>").sound("sawtooth")
  .lpf(sine.range(35, 180).slow(14)).slow(13)
  .attack(6).release(14).gain(0.1)

$: note("[~ ~ c4 ~] [~ ~ ~ eb4] [~ g4 ~ ~] [bb4 ~ ~ ~] [~ ~ f4 ~] [~ ab4 ~ ~] [~ ~ ~ d5]").sound("triangle")
  .slow(15).delay(0.78).delaytime(1.618).lpf(520).gain(0.065)

$: note("~ ~ ~ eb5 ~ ~ ~ ~ ~ g5 ~ ~ ~ bb5 ~ ~ ~ ~ ~ ~ d6 ~ ~ ~ ~ ~ ab5 ~ ~ ~ ~ c6 ~ ~ ~ ~ ~ f5 ~ ~").sound("sine")
  .slow(16).attack(7).release(14).pan(sine.range(0.15, 0.85).slow(11)).gain(0.055)

$: s("~ ~ ~ ~ oh:1 ~ ~ ~ ~ ~ ~ ~ oh:2 ~ ~ ~ ~ ~ ~ hh:1 ~ ~ ~ ~ ~ ~ ~ ~ cr:1 ~ ~ ~ ~ ~ ~ ~ ~").slow(15)
  .gain(perlin.range(0.045, 0.07).slow(13)).room(0.75).pan(cosine.range(0.1, 0.9).slow(11))