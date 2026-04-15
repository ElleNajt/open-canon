$: s("bd:3 [~ bd:0] ~ [bd:2 ~ bd:3 ~]").slow(1.75)
  .shape(0.62).lpf(sine.range(40, 280).slow(31)).gain(0.65)

$: s("~ sn:2 [~ sn:4] [~ sn:0]").slow(1.75)
  .hpf(280).room(0.85).size(0.92).gain(0.42)

$: note("<[e2 ~ ~] [g2 ~ b1] [~ ~ b2] [fs2 ~ a2]>").s("sawtooth")
  .lpf(sine.range(60, 580).slow(19)).decay(1.1).sustain(0).gain(0.34)

$: note("[~ cs4 ~] [b3 ~ e4] [~ gs4 ~] [fs4 ~ ~]").s("sine")
  .delay(0.75).delaytime(0.4).pan(sine.range(0.1, 0.9).slow(11)).gain(0.18)

$: s("[hh:1 ~] [~ ~ oh:2] [hh:0 ~ hh:1] [~ hh:0 ~]").slow(1.75)
  .lpf(3200).gain(0.22).pan(rand.range(0.15, 0.85))

$: note("<[b4 ~ e5] [~ fs5 a5] [~ ~ cs5] [gs4 ~ ~]>").s("triangle")
  .lpf(1600).delay(0.55).delaytime(0.45).gain(0.12)