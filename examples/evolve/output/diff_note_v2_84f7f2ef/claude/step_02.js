$: note("<e2 b1 g1 d2 [g1 a1]>").sound("sawtooth")
  .lpf(sine.range(120,900).slow(17))
  .attack(0.02).decay(0.4).sustain(0.3)
  .gain(0.33).room(0.5)

$: note("[e3 ~] [g3 b3] [~ a3] [b3 e3]").sound("triangle")
  .delay(0.45).delaytime(0.333).delayfeedback(0.55)
  .gain(0.22).pan(sine.range(0.25,0.75).slow(11))

$: note("<e4 g4 b3 [d4 e4]>".add(perlin.range(-0.15,0.15)))
  .sound("sine").slow(3)
  .tremolo(0.35).tremolosync(2.5)
  .gain(0.16).room(0.6)

$: s("[~ hh:1] hh:2 [hh:1 ~] hh:3").fast(2)
  .gain(rand.range(0.06,0.13))
  .pan(rand).hpf(5500).delay(0.15)

$: s("bd ~ [~ bd] [~ bd:1]")
  .shape(0.25).room(0.25).gain(0.28)

$: note("<[~ e5] [b4 g5] [~ d5] [e5 ~]>").sound("pulse")
  .slow(5).lpf(1800).gain(0.1)
  .delay(0.55).delayfeedback(0.45)