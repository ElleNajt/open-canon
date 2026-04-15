$: s("bd:3 [~ bd:0] ~ [bd:2 ~ bd:3 ~]").slow(3.5)
  .shape(0.58).lpf(sine.range(55, 420).slow(29)).gain(0.44)

$: s("~ sn:2 [~ sn:4] [~ sn:0]").slow(3.5)
  .hpf(320).room(0.88).size(0.94).gain(0.2)

$: note("<[e2 ~ ~] [g2 ~ b1] [~ ~ b2] [fs2 ~ a2] [d2 ~ ~] [a1 ~ e2] [~ cs2 ~] [b1 ~ fs1]>").s("sawtooth")
  .lpf(sine.range(80, 620).slow(37)).decay(4.8).sustain(0.02).gain(0.26)

$: note("[~ cs4 ~] [b3 ~ e4] [~ gs4 ~] [fs4 ~ a4] [~ a4 ~] [e4 ~ b4] [~ ~ fs4] [gs4 ~ cs5]").s("sine")
  .delay(0.78).delaytime(0.38).pan(sine.range(0.15, 0.85).slow(11)).gain(0.12)

$: s("<[~ hh:1] [~ ~ oh:2] [hh:1 ~ ~] [~ ~ hh:0]> <[hh:1 ~ ~] [~ oh:2 ~] [~ hh:1 ~] [oh:2 ~ ~]>").slow(3.5)
  .lpf(1580).gain(0.14).pan(rand.range(0.2, 0.8))

$: note("<[b4 ~ e5] [~ fs5 ~] [gs5 ~ cs5] [~ a4 ~]> <[d5 ~ a4] [~ e5 b4] [~ cs5 ~] [fs5 ~ b4]>").s("triangle")
  .lpf(1420).delay(0.68).delaytime(0.48).gain(0.1)