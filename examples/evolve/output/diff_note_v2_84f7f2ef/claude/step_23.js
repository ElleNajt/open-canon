$: note("<e2 [b1 ~] g1 [d2 e2] [g1 a1] [fs1 b1] ~ [e2 b1]>").sound("sawtooth")
  .lpf(sine.range(60,1800).slow(13))
  .attack(0.18).decay(2.5).sustain(0.01)
  .gain(0.52).shape(0.72)

$: note("[e3 ~] [~ b3] [g3 a3] [fs3 ~] [~ e3] [g3 b3]").sound("triangle")
  .delay(0.58).delaytime(0.375).delayfeedback(0.72)
  .gain(0.14).pan(sine.range(0.1,0.9).slow(7))

$: note("<[e4 g4] [~ b4] [d4 ~] [fs4 a4] [b3 e4] [~ g4] [a4 b4] [d5 ~]>".add(perlin.range(-0.5,0.5)))
  .sound("sine").slow(16)
  .room(0.82).gain(0.1).lpf(cosine.range(320,2400).slow(11))

$: s("[~ hh:2] [hh:1 ~] ~ [~ hh:3] [hh:1 hh:2] [~ hh:1]").fast(2)
  .gain(rand.range(0.04,0.09)).degradeBy(0.7)
  .pan(rand).hpf(7800)

$: s("bd ~ [~ bd] ~ [bd bd:1] [~ bd]").sometimes(x=>x.speed(0.6))
  .lpf(120).gain(0.48).shape(0.58).room(0.22)

$: note("<[b4 ~] [~ g5] [e5 d5] [~ fs5] [e5 ~] [g5 b4] [a5 ~] [~ d5]>").sound("pulse")
  .slow(14).lpf(sine.range(300,1600).slow(9))
  .gain(0.11).room(0.68).pan(perlin.range(0.2,0.8))