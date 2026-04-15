$: note("<e2 b1 g1 d2 [g1 a1] fs1 [b1 ~] e2>").sound("sawtooth")
  .lpf(sine.range(60,1800).slow(16))
  .attack(0.02).decay(0.8).sustain(0.15)
  .gain(0.38)

$: note("[e3 ~] [g3 b3] [~ a3] [b3 ~] [fs3 g3] [~ e3]").sound("triangle")
  .delay(0.55).delaytime(0.333).delayfeedback(0.65)
  .gain(0.22).pan(sine.range(0.15,0.85).slow(11))

$: note("<e4 g4 b3 [d4 e4] [g4 fs4] [b4 ~] e4>".add(perlin.range(-0.15,0.15)))
  .sound("sine").slow(5)
  .tremolo(0.35).gain(0.16).room(0.75)

$: s("[~ hh:1] hh:2 [hh:1 ~] hh:3 [hh:2 ~] hh:1").fast(2)
  .gain(rand.range(0.06,0.13))
  .pan(rand).hpf(5500).room(0.2)

$: s("bd ~ [~ bd] [~ bd:1] bd [bd ~]").sometimes(x=>x.shape(0.35))
  .lpf(800).gain(0.28).room(0.25)

$: note("<[~ e5] [b4 g5] [~ d5] [e5 fs5] [~ g5] [d5 b4]>").sound("pulse")
  .slow(7).lpf(sine.range(900,2800).slow(13))
  .gain(0.11).delay(0.55).pan(0.65)