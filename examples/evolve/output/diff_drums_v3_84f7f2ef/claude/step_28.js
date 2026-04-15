$: s("bd:3 [~ bd:0] ~ [bd:2 ~ bd:3 ~]").slow(3.5)
  .shape(0.62).lpf(sine.range(40, 380).slow(31)).gain(0.46)

$: s("~ sn:2 [~ sn:4] [~ sn:0]").slow(3.5)
  .hpf(280).room(0.92).size(0.96).gain(0.22)

$: note("<[e2 ~ ~] [g2 ~ b1] [~ ~ b2] [fs2 ~ a2] [d2 ~ ~] [a1 ~ e2] [~ cs2 ~] [b1 ~ fs1]>").s("sawtooth")
  .lpf(sine.range(60, 580).slow(43)).decay(5.2).sustain(0.015).gain(0.28)

$: note("[~ cs4 ~] [b3 ~ e4] [~ gs4 ~] [fs4 ~ a4] [~ a4 ~] [e4 ~ b4] [~ ~ fs4] [gs4 ~ cs5]").s("sine")
  .delay(0.82).delaytime(0.42).pan(sine.range(0.1, 0.9).slow(13)).gain(0.13)

$: s("<[~ hh:1] [~ ~ oh:2] [hh:1 ~ ~] [~ ~ hh:0]> <[hh:1 ~ ~] [~ oh:2 ~] [~ hh:1 ~] [oh:2 ~ ~]>").slow(3.5)
  .lpf(1650).gain(0.15).pan(rand.range(0.15, 0.85))

$: note("<[b4 ~ e5] [~ fs5 ~] [gs5 ~ cs5] [~ a4 ~]> <[d5 ~ a4] [~ e5 b4] [~ cs5 ~] [fs5 ~ b4]>").s("triangle")
  .lpf(1500).delay(0.72).delaytime(0.52).gain(0.11)