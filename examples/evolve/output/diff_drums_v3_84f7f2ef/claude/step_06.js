$: s("bd:3 [~ bd:0] ~ [bd:2 ~ bd:3 ~]").slow(1.75)
  .shape(0.62).lpf(sine.range(55, 280).slow(19)).gain(0.7)

$: s("~ sn:2 [~ sn:4] [~ sn:0]").slow(1.75)
  .hpf(280).room(0.7).size(0.85).gain(0.48)

$: note("<[e2 ~ ~] [g2 ~ b1] [~ ~ b2] [fs2 ~ a2]>").s("sawtooth")
  .lpf(sine.range(90, 800).slow(13)).lpq(5).decay(0.8).sustain(0).gain(0.38)

$: note("[~ cs4 ~] [b3 ~ e4] [~ gs4 ~] [fs4 ~ ~]").s("sine")
  .delay(0.75).delaytime(0.5).pan(sine.range(0.1, 0.9).slow(11)).gain(0.22)

$: s("[hh:1 ~] [~ ~ oh:2] [hh:0 ~ hh:1] [~ hh:0 ~]").slow(1.75)
  .lpf(4200).gain(0.26).pan(rand.range(0.25, 0.75))

$: note("<[b4 ~ e5] [~ fs5 a5] [~ ~ cs5] [gs4 ~ ~]>").s("triangle")
  .lpf(2200).delay(0.55).delaytime(0.375).gain(0.16)