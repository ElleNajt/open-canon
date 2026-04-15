$: s("bd:3 [~ bd:0] ~ [bd:2 ~ bd:3 ~]").slow(2.5)
  .shape(0.58).lpf(sine.range(60, 320).slow(29)).gain(0.52)

$: s("~ sn:2 [~ sn:4] [~ sn:0]").slow(2.5)
  .hpf(320).room(0.88).size(0.94).gain(0.28)

$: note("<[e2 ~ ~] [g2 ~ b1] [~ ~ b2] [fs2 ~ a2] [d2 ~ ~] [a1 ~ e2]>").s("sawtooth")
  .lpf(sine.range(45, 520).slow(19)).decay(2.8).sustain(0).gain(0.22)

$: note("[~ cs4 ~] [b3 ~ e4] [~ gs4 ~] [fs4 ~ ~] [~ a4 ~] [e4 ~ b4]").s("sine")
  .delay(0.78).delaytime(0.48).pan(sine.range(0.1, 0.9).slow(15)).gain(0.11)

$: s("[hh:1 ~] [~ ~ oh:2] [~ ~ hh:1] [~ hh:0 ~]").slow(2.5)
  .lpf(2400).gain(0.13).pan(rand.range(0.2, 0.8))

$: note("<[b4 ~ e5] [~ fs5 ~] [~ ~ cs5] [~ ~ ~] [a4 ~ d5] [~ e5 ~]>").s("triangle")
  .lpf(1200).delay(0.58).delaytime(0.54).gain(0.08)