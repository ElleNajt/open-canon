$: s("bd:3 bd:0 ~ bd:2").slow(1.2)
  .shape(0.3).room(0.15).gain(0.85)

$: s("~ sn:2 ~ sn:4").slow(1.2)
  .hpf(200).delay(0.2).delaytime(0.33).gain(0.7)

$: note("<[e2 ~] [g2 b2] ~ [fs2 a2]>").s("sawtooth")
  .lpf(sine.range(400, 1200).slow(8)).decay(0.3).sustain(0.1).gain(0.5)

$: note("[~ cs4] [~ e4] [b3 ~] [~ fs4]").s("triangle")
  .delay(0.4).delaytime(0.5).pan(sine.range(0.3, 0.7).slow(4)).gain(0.35)

$: s("hh:1*3 [~ oh:2] hh:0*2 ~").slow(1.2)
  .lpf(6000).gain(0.4).pan(rand.range(0.2, 0.8))