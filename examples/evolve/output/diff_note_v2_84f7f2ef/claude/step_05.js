$: note("<e2 [b1 ~] g1 [d2 e2] [g1 a1] [fs1 b1] ~ e2>").sound("sawtooth")
  .lpf(sine.range(40,2200).slow(13))
  .attack(0.01).decay(0.6).sustain(0.2)
  .gain(0.4)

$: note("[e3 ~] [~ b3] [g3 a3] [~ ~] [fs3 ~] [e3 g3]").sound("triangle")
  .delay(0.6).delaytime(0.25).delayfeedback(0.7)
  .gain(0.24).pan(sine.range(0.1,0.9).slow(7))

$: note("<[e4 ~] [g4 b4] ~ [d4 fs4] [~ e4] [b4 g4] [e4 ~]>".add(perlin.range(-0.2,0.2)))
  .sound("sine").slow(6)
  .tremolo(0.4).gain(0.18).room(0.8)

$: s("[~ hh:2] [hh:1 ~] hh:3 [~ hh:1] [hh:2 hh:3] ~").fast(2)
  .gain(rand.range(0.05,0.14))
  .pan(rand).hpf(6000).delay(0.15)

$: s("bd ~ [bd ~] ~ [bd bd:1] [~ bd]").sometimes(x=>x.crush(8))
  .lpf(700).gain(0.32).shape(0.25)

$: note("<[e5 ~] [~ g5] [b4 d5] ~ [fs5 e5] [~ b4] [g5 ~]>").sound("pulse")
  .slow(9).lpf(sine.range(700,3200).slow(11))
  .gain(0.13).delay(0.5)