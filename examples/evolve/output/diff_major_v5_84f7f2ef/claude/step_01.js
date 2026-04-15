$: note("<c4 e4 g4 c5 g4 e4 b4 g4>").sound("triangle")
  .lpf(sine.range(400, 2200).slow(7))
  .gain(0.4).room(0.3).delay(0.2)

$: note("c3 ~ g2 ~").sound("sawtooth")
  .lpf(800).decay(0.3).sustain(0)
  .gain(0.25)

$: s("~ hh:1 ~ hh:2").gain(0.15)
  .pan(sine.range(0.3, 0.7).fast(2))