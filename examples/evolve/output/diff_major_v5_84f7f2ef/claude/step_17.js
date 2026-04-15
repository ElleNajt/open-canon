$: note("<c4 eb4 g4 bb4 d5 f5 ab5 c6>/3").sound("triangle")
  .lpf(sine.range(180, 3200).slow(13)).lpq(8)
  .delay(0.6).delaytime(0.333).gain(0.13)

$: note("c2 ~ g2 eb2 ~ bb1 ~ f1 c2 ~ g1 ~ eb2 bb1 ~ ~").sound("sawtooth")
  .lpf(saw.range(60, 1400).slow(5)).decay(0.8).sustain(0.01)
  .gain(0.12)

$: note("<eb5 bb5 g5 d6 c6 ab5 f5 bb5>/7").sound("sine")
  .attack(2.2).release(4).gain(0.08)
  .pan(sine.range(0.1, 0.9).slow(11))

$: s("~ hh:2 ~ hh:1 ~ hh:3 ~ hh:1").degradeBy(0.4).gain(0.055)
  .hpf(3200).delay(0.3).pan(rand)

$: s("bd:3 ~ ~ bd:1 ~ bd:3 ~ bd:1").gain(0.11)
  .shape(0.5).lpf(80).room(0.35)

$: note("<f3 ab3 c4 eb4 bb3>/5 <bb3 d4 g4 f4 ab4>/7").sound("pulse")
  .lpf(sine.range(280, 2200).slow(7)).attack(0.6).release(2).gain(0.1)