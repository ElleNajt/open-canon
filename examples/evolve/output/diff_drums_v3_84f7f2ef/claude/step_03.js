$: s("bd:3 [~ bd:0] ~ [bd:2 bd:3]").slow(1.5)
  .shape(0.5).lpf(140).gain(0.75)

$: s("~ sn:2 [~ sn:4] ~").slow(1.5)
  .hpf(320).room(0.4).gain(0.6)

$: note("<[e2 ~] [g2 ~] [~ b2] [fs2 a2]>").s("sawtooth")
  .lpf(sine.range(250, 700).slow(16)).decay(0.5).sustain(0.03).gain(0.4)

$: note("[~ cs4] [b3 e4] [~ gs4] [fs4 a4]").s("sine")
  .delay(0.55).delaytime(0.5).pan(0.7).gain(0.28)

$: s("[hh:1 ~] [~ oh:2] [hh:0 hh:1] [~ hh:0]").slow(1.5)
  .lpf(3800).gain(0.32).pan(sine.range(0.3, 0.7).slow(4))

$: note("<[b4 e5] [fs5 a5] [~ cs5] [gs4 ~]>").s("triangle")
  .lpf(1800).delay(0.5).decay(0.7).gain(0.22)