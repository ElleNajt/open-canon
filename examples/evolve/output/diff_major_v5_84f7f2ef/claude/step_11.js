$: note("<c4 eb4 g4 bb4 d5 f5 ab5 c6>/3").sound("triangle")
  .lpf(sine.range(180, 3200).slow(13)).lpq(6)
  .delay(0.6).delaytime(0.333).gain(0.18)

$: note("c2 ~ g2 ~ eb2 ~ bb1 ~ f1 ~ c2 ~ g1 eb2 ~").sound("sawtooth")
  .lpf(saw.range(80, 1400).slow(9)).decay(0.9).sustain(0.01)
  .gain(0.16)

$: note("<eb5 bb5 g5 d6 c6 ab5 f5 bb5>/5").sound("sine")
  .attack(2.2).release(4).gain(0.08)
  .pan(sine.range(0.1, 0.9).slow(11))

$: s("~ hh:2 ~ hh:1 ~ hh:3 ~ hh:1").degradeBy(0.15).gain(0.07)
  .hpf(3200).delay(0.38).pan(rand.range(0.2, 0.8))

$: s("bd:3 ~ ~ bd:1 ~ bd:3 ~ ~").gain(0.15)
  .shape(0.35).lpf(85).room(0.35)

$: note("<f3 ab3 c4 eb4>/3 <bb3 d4 g4 f4>/4").sound("pulse")
  .lpf(sine.range(400, 2000).slow(7)).attack(0.4).release(1.4).gain(0.1)