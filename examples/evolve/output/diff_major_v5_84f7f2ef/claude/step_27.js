$: note("<c4 g4 eb5 bb4 f5 d5 ab5 c6>/3").sound("triangle")
  .lpf(sine.range(180, 3200).slow(13)).lpq(8)
  .delay(0.6).delaytime(0.333).gain(0.11)

$: note("c2 ~ g2 ~ eb2 ~ bb1 f1 ~ c2 g1 ~").sound("sawtooth")
  .lpf(saw.range(60, 1400).slow(9)).decay(0.5).sustain(0.01)
  .gain(0.14)

$: note("<eb5 g5 bb5 f6 d6 ab5 c6>/13").sound("sine")
  .attack(2.2).release(4).gain(0.08)
  .pan(sine.range(0.1, 0.9).slow(11))

$: s("~ hh:2 ~ hh:1 ~ hh:3 ~ ~").degradeBy(0.4).gain(0.07)
  .hpf(3200).delay(0.3).pan(rand)

$: s("bd:3 ~ ~ ~ bd:1 ~ bd:2 ~").gain(0.15)
  .shape(0.5).lpf(85).room(0.35)

$: note("<f3 eb4 ab3 bb3 c4>/7 <g4 f4 d4 a4>/13").sound("pulse")
  .lpf(sine.range(280, 2200).slow(10)).attack(0.6).release(2.2).gain(0.1)