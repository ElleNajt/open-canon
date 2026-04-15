$: note("<e2 [b1 ~] g1 [d2 e2] [g1 a1] [fs1 b1] ~ [e2 b1]>").sound("sawtooth")
  .lpf(sine.range(60,1800).slow(11))
  .attack(0.02).decay(0.5).sustain(0.3)
  .gain(0.42)

$: note("[e3 ~] [~ b3] [g3 a3] [fs3 ~] [~ e3] [g3 b3]").sound("triangle")
  .delay(0.55).delaytime(0.33).delayfeedback(0.65)
  .gain(0.22).pan(sine.range(0.15,0.85).slow(9))

$: note("<[e4 g4] [~ b4] [d4 ~] [fs4 a4] [b3 e4] [~ g4] [a4 b4]>".add(perlin.range(-0.15,0.15)))
  .sound("sine").slow(8)
  .room(0.75).gain(0.16).pan(0.35)

$: s("[~ hh:2] [hh:1 hh:3] ~ [hh:2 ~] [hh:1 hh:3] [~ hh:1]").fast(2)
  .gain(rand.range(0.06,0.12)).degradeBy(0.2)
  .pan(rand).hpf(5500)

$: s("bd ~ [~ bd] ~ [bd bd:1] [bd ~]").sometimes(x=>x.speed(0.88))
  .lpf(480).gain(0.36).shape(0.2)

$: note("<[b4 ~] [e5 g5] [~ d5] [fs5 ~] [e5 b4] [g5 ~] [~ a5]>").sound("pulse")
  .slow(13).lpf(sine.range(400,2800).slow(14))
  .gain(0.12).room(0.6)