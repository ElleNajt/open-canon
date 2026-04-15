$: s("bd:3 [~ bd:0] ~ [bd:2 bd:3]").slow(1.5)
  .shape(0.4).room(0.25).lpf(180).gain(0.8)

$: s("~ sn:2 [~ sn:4] ~").slow(1.5)
  .hpf(280).delay(0.35).delaytime(0.375).gain(0.65)

$: note("<[e2 ~] [g2 ~] [~ b2] [fs2 a2]>").s("sawtooth")
  .lpf(sine.range(300, 900).slow(12)).decay(0.4).sustain(0.05).gain(0.45)

$: note("[~ cs4] [b3 e4] [~ ~] [fs4 a4]").s("sine")
  .delay(0.5).delaytime(0.625).room(0.3).pan(0.65).gain(0.3)

$: s("[hh:1 ~] [~ oh:2] [hh:0 hh:1] ~").slow(1.5)
  .lpf(4500).gain(0.35).pan(rand.range(0.25, 0.75))

$: note("<[b4 e5] [fs5 ~] [~ cs5] [a4 ~]>").s("triangle")
  .lpf(2200).delay(0.45).decay(0.6).pan(0.35).gain(0.25)