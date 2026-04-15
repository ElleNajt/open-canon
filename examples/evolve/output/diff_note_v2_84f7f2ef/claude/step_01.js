$: note("<e2 b1 g1 d2>").sound("sawtooth")
  .lpf(sine.range(180,1200).slow(13))
  .attack(0.01).decay(0.3).sustain(0.4)
  .gain(0.35).room(0.4)

$: note("e3 [~ g3] b3 [a3 ~]").sound("triangle")
  .delay(0.4).delaytime(0.375).delayfeedback(0.5)
  .gain(0.25).pan(sine.range(0.3,0.7).slow(7))

$: note("<e4 b3 d4 g4>".add(perlin.range(-0.1,0.1)))
  .sound("sine").slow(2)
  .tremolo(0.3).tremolosync(3)
  .gain(0.18).room(0.5)

$: s("~ hh:1 ~ hh:2").fast(2)
  .gain(rand.range(0.08,0.15))
  .pan(rand).hpf(6000)

$: s("bd ~ [~ bd] ~").gain(0.3)
  .shape(0.2).room(0.2)

$: note("[~ e5] [~ b4] [g5 ~] [~ d5]").sound("pulse")
  .slow(4).lpf(2200).gain(0.12)
  .delay(0.5).delaytime(0.5).delayfeedback(0.4)