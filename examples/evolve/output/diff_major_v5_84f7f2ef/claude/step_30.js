$: note("<c4 bb4 eb5 g4 f5 ab5 d5 c6>/3").sound("triangle")
  .lpf(sine.range(220, 2800).slow(11)).lpq(6)
  .delay(0.55).delaytime(0.375).gain(0.12)

$: note("c2 ~ g2 ~ eb2 ~ bb1 f1").sound("sawtooth")
  .lpf(saw.range(80, 900).slow(7)).decay(0.6).sustain(0.02)
  .gain(0.13)

$: note("<g5 ~ eb5 bb5 ~ d6 f6 ~ c6 ab5 ~ a5>/13").sound("sine")
  .attack(1.8).release(3.5).gain(0.09)
  .pan(sine.range(0.15, 0.85).slow(9))

$: s("~ hh:1 ~ hh:3 ~ hh:2 ~").degradeBy(0.35).gain(0.08)
  .hpf(2800).delay(0.45).pan(rand)

$: s("bd:3 ~ ~ bd:2 ~ bd:1 ~ ~").gain(0.14)
  .shape(0.45).lpf(90).room(0.3)

$: note("<eb3 ab3 ~ c4 bb3>/5 <g4 d4 ~ a4 e4>/7").sound("pulse")
  .lpf(sine.range(320, 1800).slow(9)).attack(0.5).release(2).gain(0.11)