$: s("bd:3 [~ bd:0] ~ [bd:2 ~ bd:3 ~]").slow(4.2)
  .shape(0.72).lpf(sine.range(40, 280).slow(31)).gain(0.42)

$: s("~ sn:2 [~ sn:4] [~ sn:0]").slow(4.2)
  .hpf(380).room(0.92).size(0.96).gain(0.18)

$: note("<[e2 ~ ~] [g2 ~ b1] [~ ~ b2] [fs2 ~ a2] [d2 ~ ~] [a1 ~ e2] [~ cs2 ~] [b1 ~ ~]>").s("sawtooth")
  .lpf(sine.range(60, 520).slow(41)).decay(5.2).sustain(0.01).gain(0.24)

$: note("[~ cs4 ~] [b3 ~ e4] [~ gs4 ~] [fs4 ~ ~] [~ a4 ~] [e4 ~ b4] [~ ~ fs4] [gs4 ~ ~]").s("sine")
  .delay(0.82).delaytime(0.44).pan(sine.range(0.1, 0.9).slow(13)).gain(0.11)

$: s("<[~ hh:1] [~ ~ ~] [hh:1 ~ ~] [~ ~ hh:0]> <[hh:1 ~ ~] [~ oh:2 ~] [~ ~ ~] [oh:2 ~ ~]>").slow(4.2)
  .lpf(1320).gain(0.12).pan(rand.range(0.15, 0.85))

$: note("<[b4 ~ ~] [~ fs5 ~] [gs5 ~ ~] [~ a4 ~]> <[d5 ~ ~] [~ e5 b4] [~ ~ ~] [fs5 ~ ~]>").s("triangle")
  .lpf(1180).delay(0.74).delaytime(0.52).gain(0.09)