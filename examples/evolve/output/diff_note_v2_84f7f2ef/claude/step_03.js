$: note("<e2 b1 g1 d2 [g1 a1] fs1>").sound("sawtooth")
  .lpf(sine.range(80,1200).slow(23))
  .attack(0.01).decay(0.6).sustain(0.2)
  .gain(0.35)

$: note("[e3 ~] [g3 b3] [~ a3] [b3 ~] [fs3 g3]").sound("triangle")
  .delay(0.5).delaytime(0.375).delayfeedback(0.6)
  .gain(0.2).pan(sine.range(0.2,0.8).slow(13))

$: note("<e4 g4 b3 [d4 e4] [g4 fs4]>".add(perlin.range(-0.2,0.2)))
  .sound("sine").slow(4)
  .tremolo(0.4).tremolosync(3)
  .gain(0.14).room(0.7)

$: s("[~ hh:1] hh:2 [hh:1 ~] hh:3 [hh:2 ~]").fast(2)
  .gain(rand.range(0.05,0.11))
  .pan(rand).hpf(6000)

$: s("bd ~ [~ bd] [~ bd:1] bd").sometimes(x=>x.shape(0.3))
  .room(0.3).gain(0.26)

$: note("<[~ e5] [b4 g5] [~ d5] [e5 fs5] [~ g5]>").sound("pulse")
  .slow(6).lpf(sine.range(1200,2400).slow(11))
  .gain(0.09).delay(0.6)