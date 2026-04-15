$: s("bd:3 [~ bd:0] ~ [bd:2 ~ bd:3 ~]").slow(2.25)
  .shape(0.48).lpf(sine.range(55, 340).slow(29)).gain(0.56)

$: s("~ sn:2 [~ sn:4] [~ sn:0]").slow(2.25)
  .hpf(320).room(0.88).size(0.94).gain(0.33)

$: note("<[e2 ~ ~] [g2 ~ b1] [~ ~ b2] [fs2 ~ a2] [d2 ~ ~] [a1 ~ e2]>").s("sawtooth")
  .lpf(sine.range(40, 520).slow(19)).decay(2.1).sustain(0).gain(0.26)

$: note("[~ cs4 ~] [b3 ~ e4] [~ gs4 ~] [fs4 ~ ~] [~ a4 ~] [e4 ~ b4]").s("sine")
  .delay(0.82).delaytime(0.48).pan(sine.range(0.08, 0.92).slow(15)).gain(0.13)

$: s("[hh:1 ~] [~ ~ oh:2] [~ ~ hh:1] [~ hh:0 ~]").slow(2.25)
  .lpf(2400).gain(0.16).pan(rand.range(0.2, 0.8))

$: note("<[b4 ~ e5] [~ fs5 ~] [~ ~ cs5] [~ ~ ~] [a4 ~ d5] [~ e5 ~]>").s("triangle")
  .lpf(1200).delay(0.58).delaytime(0.56).gain(0.08)