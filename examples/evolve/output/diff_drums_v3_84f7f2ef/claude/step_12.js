$: s("bd:3 [~ bd:0] ~ [bd:2 ~ bd:3 ~]").slow(2.25)
  .shape(0.52).lpf(sine.range(45, 280).slow(31)).gain(0.54)

$: s("~ sn:2 [~ sn:4] [~ sn:0]").slow(2.25)
  .hpf(280).room(0.92).size(0.96).gain(0.31)

$: note("<[e2 ~ ~] [g2 ~ b1] [~ ~ b2] [fs2 ~ a2] [d2 ~ ~] [a1 ~ e2]>").s("sawtooth")
  .lpf(sine.range(35, 480).slow(23)).decay(2.4).sustain(0).gain(0.24)

$: note("[~ cs4 ~] [b3 ~ e4] [~ gs4 ~] [fs4 ~ ~] [~ a4 ~] [e4 ~ b4]").s("sine")
  .delay(0.85).delaytime(0.52).pan(sine.range(0.05, 0.95).slow(17)).gain(0.12)

$: s("[hh:1 ~] [~ ~ oh:2] [~ ~ hh:1] [~ hh:0 ~]").slow(2.25)
  .lpf(2200).gain(0.14).pan(rand.range(0.15, 0.85))

$: note("<[b4 ~ e5] [~ fs5 ~] [~ ~ cs5] [~ ~ ~] [a4 ~ d5] [~ e5 ~]>").s("triangle")
  .lpf(1100).delay(0.62).delaytime(0.58).gain(0.07)