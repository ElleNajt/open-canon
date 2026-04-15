$: s("bd:3 [~ bd:0] ~ [bd:2 ~ bd:3 ~]").slow(1.75)
  .shape(0.58).lpf(sine.range(35, 320).slow(23)).gain(0.62)

$: s("~ sn:2 [~ sn:4] [~ sn:0]").slow(1.75)
  .hpf(320).room(0.78).size(0.88).gain(0.38)

$: note("<[e2 ~ ~] [g2 ~ b1] [~ ~ b2] [fs2 ~ a2]>").s("sawtooth")
  .lpf(sine.range(55, 620).slow(17)).decay(1.3).sustain(0).gain(0.32)

$: note("[~ cs4 ~] [b3 ~ e4] [~ gs4 ~] [fs4 ~ ~]").s("sine")
  .delay(0.72).delaytime(0.38).pan(sine.range(0.15, 0.85).slow(13)).gain(0.16)

$: s("[hh:1 ~] [~ ~ oh:2] [hh:0 ~ hh:1] [~ hh:0 ~]").slow(1.75)
  .lpf(2800).gain(0.2).pan(rand.range(0.2, 0.8))

$: note("<[b4 ~ e5] [~ fs5 a5] [~ ~ cs5] [gs4 ~ ~]>").s("triangle")
  .lpf(1400).delay(0.52).delaytime(0.42).gain(0.11)