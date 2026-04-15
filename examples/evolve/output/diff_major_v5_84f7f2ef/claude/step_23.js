$: note("<c4 eb4 g4 bb4 d5 f5 ab5 c6>/3").sound("triangle")
  .lpf(sine.range(180, 3200).slow(13)).lpq(8)
  .delay(0.6).delaytime(0.333).gain(0.11)

$: note("c2 ~ g2 ~ eb2 ~ bb1 ~ f1 ~ c2 g1").sound("sawtooth")
  .lpf(saw.range(60, 1400).slow(5)).decay(0.5).sustain(0.01)
  .gain(0.14)

$: note("<eb5 bb5 d6 g5 c6 f5 ab5 bb5 gb6>/11").sound("sine")
  .attack(2.2).release(4).gain(0.08)
  .pan(sine.range(0.1, 0.9).slow(7))

$: s("~ hh:2 ~ hh:1 ~ hh:3 ~ hh:1").degradeBy(0.4).gain(0.07)
  .hpf(3200).delay(0.3).pan(rand)

$: s("bd:3 ~ ~ bd:1 ~ ~ bd:2 ~").gain(0.15)
  .shape(0.5).lpf(80).room(0.35)

$: note("<f3 ab3 eb4 c4 bb3 db4>/11 <g4 d4 f4 eb4 a4>/13").sound("pulse")
  .lpf(sine.range(280, 2200).slow(11)).attack(0.6).release(2).gain(0.1)