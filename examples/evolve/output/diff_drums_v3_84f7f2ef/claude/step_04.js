$: s("bd:3 [~ bd:0] ~ [bd:2 bd:3]").slow(1.5)
  .shape(0.6).lpf(sine.range(90, 180).slow(12)).gain(0.72)

$: s("~ sn:2 [~ sn:4] ~").slow(1.5)
  .hpf(280).room(0.5).size(0.7).gain(0.55)

$: note("<[e2 ~] [g2 ~] [~ b2] [fs2 a2]>").s("sawtooth")
  .lpf(sine.range(180, 900).slow(14)).lpq(3).decay(0.6).sustain(0.02).gain(0.38)

$: note("[~ cs4] [b3 e4] [~ gs4] [fs4 a4]").s("sine")
  .delay(0.6).delaytime(0.375).room(0.3).pan(sine.range(0.25, 0.75).slow(6)).gain(0.26)

$: s("[hh:1 ~] [~ oh:2] [hh:0 hh:1] [~ hh:0]").slow(1.5)
  .lpf(4200).gain(0.3).pan(sine.range(0.2, 0.8).slow(5))

$: note("<[b4 e5] [fs5 a5] [~ cs5] [gs4 ~]>").s("triangle")
  .lpf(2200).delay(0.45).delaytime(0.25).decay(0.8).gain(0.2)