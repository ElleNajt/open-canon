$: note("<e2 [b1 ~] g1 [d2 e2] [g1 a1] [fs1 b1] ~ [e2 b1]>").sound("sawtooth")
  .lpf(sine.range(40,1800).slow(11))
  .attack(0.12).decay(3).sustain(0.02)
  .gain(0.52).shape(0.55)

$: note("[e3 ~] [~ b3] [g3 a3] [fs3 ~] [~ e3] [g3 b3]").sound("triangle")
  .delay(0.58).delaytime(0.333).delayfeedback(0.68)
  .gain(0.17).pan(sine.range(0.15,0.85).slow(9))

$: note("<[e4 g4] [~ b4] [d4 ~] [fs4 a4] [b3 e4] [~ g4] [a4 b4] [d5 ~]>".add(perlin.range(-0.3,0.3)))
  .sound("sine").slow(16)
  .room(0.88).gain(0.12).lpf(cosine.range(400,3200).slow(13))

$: s("[~ hh:2] [hh:1 ~] ~ [~ hh:3] [hh:1 hh:2] [~ hh:1]").fast(2)
  .gain(rand.range(0.06,0.13)).degradeBy(0.65)
  .pan(rand).hpf(6800)

$: s("bd ~ [~ bd] ~ [bd bd:1] [~ bd]").sometimes(x=>x.speed(0.7))
  .lpf(200).gain(0.42).shape(0.52).room(0.28)

$: note("<[b4 ~] [~ g5] [e5 d5] [~ fs5] [e5 ~] [g5 b4] [a5 ~] [~ fs5]>").sound("pulse")
  .slow(14).lpf(sine.range(280,2000).slow(7))
  .gain(0.13).room(0.75).pan(perlin.range(0.25,0.75))