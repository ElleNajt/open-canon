$: note("<e2 [b1 ~] g1 [d2 e2] [g1 a1] [fs1 b1] ~ [e2 b1]>").sound("sawtooth")
  .lpf(sine.range(40,2200).slow(11))
  .attack(0.9).decay(5).sustain(0.01)
  .gain(0.55).shape(0.78)

$: note("[e3 ~] [~ b3] [g3 a3] [fs3 ~] [~ e3] [g3 b3]").sound("triangle")
  .delay(0.62).delaytime(0.333).delayfeedback(0.78)
  .gain(0.16).pan(sine.range(0.05,0.95).slow(5))

$: note("<[e4 g4] [~ b4] [d4 ~] [fs4 a4] [b3 e4] [~ g4] [a4 b4] [d5 ~]>".add(perlin.range(-0.7,0.7)))
  .sound("sine").slow(14)
  .room(0.88).gain(0.12).lpf(cosine.range(280,2800).slow(13))

$: s("[~ hh:2] [hh:1 ~] ~ [~ hh:3] [hh:1 hh:2] [~ hh:1]").fast(2)
  .gain(rand.range(0.03,0.09)).degradeBy(0.65)
  .pan(rand).hpf(8400)

$: s("bd ~ [~ bd] ~ [bd bd:1] [~ bd]").sometimes(x=>x.speed(0.6))
  .lpf(90).gain(0.52).shape(0.65).room(0.38)

$: note("<[b4 ~] [~ g5] [e5 d5] [~ fs5] [e5 ~] [g5 b4] [a5 ~] [~ d5]>").sound("pulse")
  .slow(16).lpf(sine.range(220,1400).slow(7))
  .gain(0.13).room(0.75).delay(0.35)