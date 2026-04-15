$: note("<e2 [b1 ~] g1 [d2 e2] [g1 a1] [fs1 b1] ~ [e2 b1]>").sound("sawtooth")
  .lpf(sine.range(60,1800).slow(11))
  .attack(0.02).decay(0.8).sustain(0.2)
  .gain(0.52).shape(0.28)

$: note("[e3 ~] [~ b3] [g3 a3] [fs3 ~] [~ e3] [g3 b3]").sound("triangle")
  .delay(0.55).delaytime(0.333).delayfeedback(0.65)
  .gain(0.26).pan(sine.range(0.15,0.85).slow(9))

$: note("<[e4 g4] [~ b4] [d4 ~] [fs4 a4] [b3 e4] [~ g4] [a4 b4] [d5 ~]>".add(perlin.range(-0.15,0.15)))
  .sound("sine").slow(7)
  .room(0.75).gain(0.2).pan(cosine.range(0.25,0.75).slow(13))

$: s("[~ hh:2] [hh:1 hh:3] ~ [hh:2 ~] [hh:1 hh:3] [~ hh:1]").fast(2)
  .gain(rand.range(0.06,0.13)).degradeBy(0.4)
  .pan(rand).hpf(5500)

$: s("bd ~ [~ bd] ~ [bd bd:1] [bd ~]").sometimes(x=>x.speed(0.8))
  .lpf(400).gain(0.4).shape(0.35)

$: note("<[b4 ~] [e5 g5] [~ d5] [fs5 ~] [e5 b4] [g5 ~] [~ a5] [b5 fs5]>").sound("pulse")
  .slow(9).lpf(sine.range(400,2800).slow(14))
  .gain(0.16).room(0.6)