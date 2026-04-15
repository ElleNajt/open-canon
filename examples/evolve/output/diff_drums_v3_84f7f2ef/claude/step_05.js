$: s("bd:3 [~ bd:0] ~ [bd:2 ~ bd:3 ~]").slow(1.75)
  .shape(0.55).lpf(sine.range(60, 220).slow(16)).gain(0.68)

$: s("~ sn:2 [~ sn:4] [~ sn:0]").slow(1.75)
  .hpf(320).room(0.6).size(0.8).gain(0.5)

$: note("<[e2 ~ ~] [g2 ~ b1] [~ ~ b2] [fs2 ~ a2]>").s("sawtooth")
  .lpf(sine.range(120, 700).slow(11)).lpq(4).decay(0.7).sustain(0.01).gain(0.35)

$: note("[~ cs4 ~] [b3 ~ e4] [~ gs4 ~] [fs4 ~ ~]").s("sine")
  .delay(0.7).delaytime(0.5).pan(sine.range(0.15, 0.85).slow(9)).gain(0.24)

$: s("[hh:1 ~] [~ ~ oh:2] [hh:0 ~ hh:1] [~ hh:0 ~]").slow(1.75)
  .lpf(3800).gain(0.28).pan(rand.range(0.3, 0.7))

$: note("<[b4 ~ e5] [~ fs5 a5] [~ ~ cs5] [gs4 ~ ~]>").s("triangle")
  .lpf(1800).delay(0.5).delaytime(0.333).gain(0.18)