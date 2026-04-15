$: note("<c4 eb4 g4 bb4 d5 f5 ab5 c6 bb5 g5 eb5 c5>").sound("triangle")
  .lpf(sine.range(300, 2800).slow(11)).lpq(4)
  .delay(0.5).delaytime(0.375).gain(0.24)

$: note("c2 ~ g2 eb2 ~ bb1 f1 ~ c2 g1 ~ eb2").sound("sawtooth")
  .lpf(saw.range(140, 1200).slow(7)).decay(0.8).sustain(0.02)
  .gain(0.22)

$: note("<eb5 g5 bb5 d6 eb6 c6 bb5 ab5>/2").sound("sine")
  .attack(1.1).release(3.2).gain(0.09)
  .room(0.8).pan(sine.range(0.15, 0.85).slow(13))

$: s("~ hh:2 hh:1 ~ hh:3 ~ hh:1 hh:2").gain(0.08)
  .hpf(2800).delay(0.32).pan(rand.range(0.25, 0.75))

$: s("bd:3 ~ bd:1 ~ bd:3 bd:1 ~ bd:3").gain(0.2)
  .shape(0.4).lpf(110).room(0.3)

$: note("<f3 ab3 c4 bb3> <eb4 d4 bb3 g4>").sound("pulse")
  .lpf(sine.range(450, 1800).slow(9)).attack(0.2).release(0.7).gain(0.11)