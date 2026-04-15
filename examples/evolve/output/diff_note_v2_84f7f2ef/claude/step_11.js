$: note("<e2 [b1 ~] g1 [d2 e2] [g1 a1] [fs1 b1] ~ [e2 b1]>").sound("sawtooth")
  .lpf(sine.range(40,2200).slow(13))
  .attack(0.01).decay(0.6).sustain(0.15)
  .gain(0.48).shape(0.22)

$: note("[e3 ~] [~ b3] [g3 a3] [fs3 ~] [~ e3] [g3 b3]").sound("triangle")
  .delay(0.6).delaytime(0.375).delayfeedback(0.7)
  .gain(0.24).pan(sine.range(0.1,0.9).slow(11))

$: note("<[e4 g4] [~ b4] [d4 ~] [fs4 a4] [b3 e4] [~ g4] [a4 b4] [d5 ~]>".add(perlin.range(-0.2,0.2)))
  .sound("sine").slow(9)
  .room(0.8).gain(0.18).pan(cosine.range(0.2,0.8).slow(15))

$: s("[~ hh:2] [hh:1 hh:3] ~ [hh:2 ~] [hh:1 hh:3] [~ hh:1]").fast(2)
  .gain(rand.range(0.05,0.11)).degradeBy(0.35)
  .pan(rand).hpf(6000)

$: s("bd ~ [~ bd] ~ [bd bd:1] [bd ~]").sometimes(x=>x.speed(0.75))
  .lpf(350).gain(0.38).shape(0.32)

$: note("<[b4 ~] [e5 g5] [~ d5] [fs5 ~] [e5 b4] [g5 ~] [~ a5] [b5 fs5]>").sound("pulse")
  .slow(11).lpf(sine.range(350,3200).slow(16))
  .gain(0.14).room(0.65)