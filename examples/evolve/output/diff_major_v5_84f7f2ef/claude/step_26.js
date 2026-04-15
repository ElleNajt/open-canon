$: note("<c4 eb4 g4 bb4 d5 f5 ab5 c6>/3").sound("triangle")
  .lpf(sine.range(220, 2800).slow(11)).lpq(6)
  .delay(0.55).delaytime(0.375).gain(0.12)

$: note("c2 ~ g2 eb2 ~ bb1 ~ f1 c2 ~ g1 ~").sound("sawtooth")
  .lpf(saw.range(80, 1200).slow(7)).decay(0.4).sustain(0.02)
  .gain(0.15)

$: note("<eb5 bb5 d6 g5 c6 f5 ab5 bb5>/11").sound("sine")
  .attack(1.8).release(3.5).gain(0.09)
  .pan(sine.range(0.15, 0.85).slow(9))

$: s("~ hh:2 ~ hh:1 ~ hh:3 ~ hh:1").degradeBy(0.35).gain(0.08)
  .hpf(2800).delay(0.25).pan(rand)

$: s("bd:3 ~ ~ bd:1 ~ bd:2 ~ ~").gain(0.16)
  .shape(0.45).lpf(90).room(0.3)

$: note("<f3 ab3 eb4 c4 bb3>/9 <g4 d4 f4 eb4 a4>/11").sound("pulse")
  .lpf(sine.range(320, 1900).slow(8)).attack(0.5).release(1.8).gain(0.11)