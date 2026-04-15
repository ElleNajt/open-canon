$: note("<c4 e4 g4 b4 c5 b4 g4 eb4>").sound("triangle")
  .lpf(sine.range(300, 2800).slow(11))
  .delay(0.35).delaytime(0.375).gain(0.38)

$: note("c3 ~ g2 ~ eb3 ~ bb2 ~").sound("sawtooth")
  .lpf(600).decay(0.4).sustain(0.1)
  .gain(0.22)

$: note("<eb5 d5 c5 bb4>").sound("sine")
  .attack(0.3).release(0.8).gain(0.12)
  .room(0.5).pan(0.7)

$: s("~ hh:1 ~ hh:3").gain(0.13)
  .pan(sine.range(0.25, 0.75).fast(3))

$: s("bd:3 ~ ~ bd:3 ~ ~ bd:3 ~").gain(0.2)
  .shape(0.2).room(0.15)