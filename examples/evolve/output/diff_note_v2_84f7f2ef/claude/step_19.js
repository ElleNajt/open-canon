$: note("<e2 [b1 ~] g1 [d2 e2] [g1 a1] [fs1 b1] ~ [e2 b1]>").sound("sawtooth")
  .lpf(sine.range(60,2200).slow(13))
  .attack(0.08).decay(2.5).sustain(0.03)
  .gain(0.48).shape(0.62)

$: note("[e3 ~] [~ b3] [g3 a3] [fs3 ~] [~ e3] [g3 b3]").sound("triangle")
  .delay(0.52).delaytime(0.375).delayfeedback(0.72)
  .gain(0.19).pan(sine.range(0.1,0.9).slow(7))

$: note("<[e4 g4] [~ b4] [d4 ~] [fs4 a4] [b3 e4] [~ g4] [a4 b4] [d5 ~]>".add(perlin.range(-0.5,0.5)))
  .sound("sine").slow(14)
  .room(0.82).gain(0.14).lpf(cosine.range(350,3800).slow(11))

$: s("[~ hh:2] [hh:1 ~] ~ [~ hh:3] [hh:1 hh:2] [~ hh:1]").fast(2)
  .gain(rand.range(0.07,0.15)).degradeBy(0.58)
  .pan(rand).hpf(7200)

$: s("bd ~ [~ bd] ~ [bd bd:1] [~ bd]").sometimes(x=>x.speed(0.65))
  .lpf(180).gain(0.44).shape(0.58).room(0.32)

$: note("<[b4 ~] [~ g5] [e5 d5] [~ fs5] [e5 ~] [g5 b4] [a5 ~] [~ fs5]>").sound("pulse")
  .slow(16).lpf(sine.range(320,2400).slow(9))
  .gain(0.15).room(0.68).pan(perlin.range(0.2,0.8))