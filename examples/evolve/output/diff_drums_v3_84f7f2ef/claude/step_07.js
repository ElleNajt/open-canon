$: s("bd:3 [~ bd:0] ~ [bd:2 ~ bd:3 ~]").slow(1.75)
  .shape(0.58).lpf(sine.range(45, 320).slow(23)).gain(0.68)

$: s("~ sn:2 [~ sn:4] [~ sn:0]").slow(1.75)
  .hpf(320).room(0.8).size(0.9).gain(0.44)

$: note("<[e2 ~ ~] [g2 ~ b1] [~ ~ b2] [fs2 ~ a2]>").s("sawtooth")
  .lpf(sine.range(70, 650).slow(17)).decay(0.9).sustain(0).gain(0.36)

$: note("[~ cs4 ~] [b3 ~ e4] [~ gs4 ~] [fs4 ~ ~]").s("sine")
  .delay(0.8).delaytime(0.375).pan(sine.range(0.15, 0.85).slow(13)).gain(0.2)

$: s("[hh:1 ~] [~ ~ oh:2] [hh:0 ~ hh:1] [~ hh:0 ~]").slow(1.75)
  .lpf(3800).gain(0.24).pan(rand.range(0.2, 0.8))

$: note("<[b4 ~ e5] [~ fs5 a5] [~ ~ cs5] [gs4 ~ ~]>").s("triangle")
  .lpf(1800).delay(0.6).delaytime(0.5).gain(0.14)