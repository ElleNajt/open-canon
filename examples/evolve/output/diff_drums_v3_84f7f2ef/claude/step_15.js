$: s("bd:3 [~ bd:0] ~ [bd:2 ~ bd:3 ~]").slow(3)
  .shape(0.58).lpf(sine.range(45, 320).slow(31)).gain(0.44)

$: s("~ sn:2 [~ sn:4] [~ sn:0]").slow(3)
  .hpf(320).room(0.88).size(0.94).gain(0.24)

$: note("<[e2 ~ ~] [g2 ~ b1] [~ ~ b2] [fs2 ~ a2] [d2 ~ ~] [a1 ~ e2] [~ cs2 ~] [b1 ~ ~]>").s("sawtooth")
  .lpf(sine.range(35, 480).slow(19)).decay(3.8).sustain(0).gain(0.22)

$: note("[~ cs4 ~] [b3 ~ e4] [~ gs4 ~] [fs4 ~ ~] [~ a4 ~] [e4 ~ b4] [~ ~ fs4] [gs4 ~ ~]").s("sine")
  .delay(0.78).delaytime(0.58).pan(sine.range(0.12, 0.88).slow(11)).gain(0.11)

$: s("[hh:1 ~] [~ ~ oh:2] [~ ~ hh:1] [~ hh:0 ~] [~ hh:1 ~] [oh:2 ~ ~]").slow(3)
  .lpf(1800).gain(0.13).pan(rand.range(0.2, 0.8))

$: note("<[b4 ~ e5] [~ fs5 ~] [~ ~ cs5] [~ ~ ~] [a4 ~ d5] [~ e5 ~] [~ cs5 ~] [b4 ~ ~]>").s("triangle")
  .lpf(1200).delay(0.68).delaytime(0.62).gain(0.08)