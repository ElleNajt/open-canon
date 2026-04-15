$: note("<c4 eb4 g4 bb4 d5 f5 ab5 c6>/3").sound("triangle")
  .lpf(sine.range(220, 2800).slow(11)).lpq(6)
  .delay(0.55).delaytime(0.375).gain(0.14)

$: note("c2 ~ g2 eb2 ~ bb1 ~ f1 c2 ~ g1 ~ eb2 bb1 ~ ~").sound("sawtooth")
  .lpf(saw.range(80, 1100).slow(7)).decay(0.7).sustain(0.02)
  .gain(0.13)

$: note("<eb5 bb5 g5 d6 c6 ab5 f5 bb5>/7").sound("sine")
  .attack(1.8).release(3.5).gain(0.09)
  .pan(sine.range(0.15, 0.85).slow(9))

$: s("~ hh:2 ~ hh:1 ~ hh:3 ~ hh:1").degradeBy(0.35).gain(0.06)
  .hpf(2800).delay(0.25).pan(rand)

$: s("bd:3 ~ ~ bd:1 ~ bd:3 ~ bd:1").gain(0.12)
  .shape(0.4).lpf(90).room(0.3)

$: note("<f3 ab3 c4 eb4 bb3>/5 <bb3 d4 g4 f4 ab4>/7").sound("pulse")
  .lpf(sine.range(350, 1800).slow(9)).attack(0.5).release(1.8).gain(0.11)