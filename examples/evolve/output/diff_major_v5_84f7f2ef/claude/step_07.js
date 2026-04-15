$: note("<c4 eb4 g4 bb4 d5 f5 ab5 c6>").sound("triangle")
  .lpf(sine.range(400, 3200).slow(13)).lpq(3)
  .delay(0.42).delaytime(0.333).gain(0.26)

$: note("c2 ~ g2 ~ eb2 ~ bb1 ~ f1 ~ c2 ~").sound("sawtooth")
  .lpf(saw.range(160, 1400).slow(9)).decay(0.7).sustain(0.03)
  .gain(0.24)

$: note("<eb5 g5 bb5 c6 d6 eb6 f6 d6>/2").sound("sine")
  .attack(0.9).release(2.8).gain(0.11)
  .room(0.75).pan(sine.range(0.1, 0.9).slow(11))

$: s("~ hh:2 ~ hh:1 ~ hh:3 hh:1 hh:2").gain(0.09)
  .hpf(3200).delay(0.28).pan(rand.range(0.2, 0.8))

$: s("bd:3 ~ ~ bd:1 ~ bd:3 ~ bd:1").gain(0.22)
  .shape(0.35).lpf(120).room(0.25)

$: note("<f3 ab3 bb3 g3> <eb4 bb3 c4 d4>").sound("pulse")
  .lpf(sine.range(500, 2000).slow(7)).attack(0.15).release(0.6).gain(0.10)