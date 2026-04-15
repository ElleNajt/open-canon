$: note("<c4 eb4 g4 bb4 d5 f5 ab5 c6>/3").sound("triangle")
  .lpf(sine.range(200, 2800).slow(11)).lpq(4)
  .delay(0.55).delaytime(0.375).gain(0.2)

$: note("c2 ~ g2 eb2 ~ bb1 f1 ~ c2 g1 ~ eb2").sound("sawtooth")
  .lpf(saw.range(100, 1200).slow(7)).decay(0.8).sustain(0.02)
  .gain(0.18)

$: note("<eb5 bb5 g5 d6 c6 ab5 f5>/4").sound("sine")
  .attack(1.8).release(3.5).gain(0.09)
  .pan(sine.range(0.15, 0.85).slow(13))

$: s("~ hh:2 ~ hh:1 ~ hh:3 [~ hh:1] hh:2").gain(0.08)
  .hpf(2800).delay(0.42).pan(rand.range(0.25, 0.75))

$: s("bd:3 ~ bd:1 ~ ~ bd:3 ~ bd:1").gain(0.17)
  .shape(0.4).lpf(90).room(0.3)

$: note("<f3 c4 ab3 eb4>/2 <bb3 g4 d4 f4>/3").sound("pulse")
  .lpf(sine.range(350, 1800).slow(9)).attack(0.3).release(1.1).gain(0.11)