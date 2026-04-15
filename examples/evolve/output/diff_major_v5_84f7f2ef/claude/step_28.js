$: note("<c4 bb4 eb5 g4 f5 ab5 d5 c6>/3").sound("triangle")
  .lpf(sine.range(220, 2800).slow(11)).lpq(6)
  .delay(0.55).delaytime(0.375).gain(0.12)

$: note("c2 ~ g2 eb2 ~ bb1 ~ f1 c2 ~ g1 ~").sound("sawtooth")
  .lpf(saw.range(80, 1600).slow(7)).decay(0.4).sustain(0.02)
  .gain(0.15)

$: note("<g5 eb5 bb5 d6 f6 c6 ab5>/11").sound("sine")
  .attack(1.8).release(3.5).gain(0.09)
  .pan(sine.range(0.15, 0.85).slow(13))

$: s("~ hh:1 ~ hh:3 ~ ~ hh:2 ~").degradeBy(0.35).gain(0.08)
  .hpf(2800).delay(0.35).pan(rand)

$: s("bd:3 ~ ~ bd:2 ~ bd:1 ~ ~").gain(0.16)
  .shape(0.45).lpf(90).room(0.3)

$: note("<eb3 f3 ab3 c4 bb3>/5 <g4 d4 a4 f4>/11").sound("pulse")
  .lpf(sine.range(320, 2400).slow(8)).attack(0.5).release(2).gain(0.11)