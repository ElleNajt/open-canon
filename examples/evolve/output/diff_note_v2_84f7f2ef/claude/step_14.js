$: note("<e2 [b1 ~] g1 [d2 e2] [g1 a1] [fs1 b1] ~ [e2 b1]>").sound("sawtooth")
  .lpf(sine.range(80,1800).slow(11))
  .attack(0.02).decay(1.4).sustain(0.12)
  .gain(0.52).shape(0.28)

$: note("[e3 ~] [~ b3] [g3 a3] [fs3 ~] [~ e3] [g3 b3]").sound("triangle")
  .delay(0.55).delaytime(0.333).delayfeedback(0.68)
  .gain(0.22).pan(sine.range(0.15,0.85).slow(9))

$: note("<[e4 g4] [~ b4] [d4 ~] [fs4 a4] [b3 e4] [~ g4] [a4 b4] [d5 ~]>".add(perlin.range(-0.15,0.15)))
  .sound("sine").slow(13)
  .room(0.78).gain(0.16).lpf(cosine.range(600,4500).slow(16))

$: s("[~ hh:2] [hh:1 ~] ~ [~ hh:3] [hh:1 hh:2] [~ hh:1]").fast(2)
  .gain(rand.range(0.06,0.12)).degradeBy(0.52)
  .pan(rand).hpf(7200)

$: s("bd ~ [~ bd] ~ [bd bd:1] [~ bd]").sometimes(x=>x.speed(0.8))
  .lpf(380).gain(0.4).shape(0.35).room(0.18)

$: note("<[b4 ~] [~ g5] [e5 d5] [~ fs5] [e5 ~] [g5 b4] [a5 ~] [~ fs5]>").sound("pulse")
  .slow(15).lpf(sine.range(400,2800).slow(14))
  .gain(0.13).room(0.65).pan(perlin.range(0.25,0.75))