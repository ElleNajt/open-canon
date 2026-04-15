$: note("<c4 bb4 eb5 g4 f5 ab5 d5 c6>/3").sound("triangle")
  .lpf(sine.range(180, 3200).slow(13)).lpq(8)
  .delay(0.6).delaytime(0.333).gain(0.11)

$: note("c2 ~ g2 ~ eb2 ~ bb1 f1").sound("sawtooth")
  .lpf(saw.range(60, 1200).slow(5)).decay(0.5).sustain(0.01)
  .gain(0.14)

$: note("<g5 ~ eb5 bb5 ~ d6 f6 ~ c6 ab5 ~>/11").sound("sine")
  .attack(2.2).release(4).gain(0.08)
  .pan(sine.range(0.1, 0.9).slow(11))

$: s("~ hh:1 ~ ~ hh:3 ~ hh:2 ~").degradeBy(0.4).gain(0.07)
  .hpf(3200).delay(0.4).pan(rand)

$: s("bd:3 ~ ~ ~ bd:2 ~ bd:1 ~").gain(0.15)
  .shape(0.5).lpf(75).room(0.35)

$: note("<eb3 ~ ab3 c4 ~>/5 <g4 ~ d4 ~ a4>/7").sound("pulse")
  .lpf(sine.range(280, 2000).slow(7)).attack(0.6).release(2.5).gain(0.1)