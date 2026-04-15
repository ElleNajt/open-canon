setcps(0.4)

$: note("<c3 ab2 f2 g2>").sound("sine")
  .lpf(sine.range(180, 900).slow(16))
  .gain(0.55).room(0.6).attack(0.3)

$: note("c4 eb4 g4 c5 g4 eb4 bb4 g4")
  .sound("triangle").slow(2)
  .gain(sine.range(0.15, 0.45).slow(8))
  .delay(0.4).delaytime(0.375)

$: note("c5 ~ eb5 ~ g5 ~ bb5 ~".add("<0 3 5 -2>"))
  .sound("sine").slow(4)
  .lpf(1200).pan(sine.range(0.2, 0.8).slow(5))
  .gain(0.2).room(0.5)

$: note("g5 c6 eb6 ~ bb5 ~ g5 ~")
  .sound("triangle").slow(8)
  .gain(0.12).attack(0.5).release(1.5)
  .delay(0.55).delaytime(0.75)

$: s("~ hh:1 ~ hh:1 ~ hh:1 ~ hh:1").slow(2)
  .gain(sine.range(0.06, 0.14).slow(7))
  .pan(rand).hpf(7000).room(0.3)

$: note("<c2 ab1 f1 g1>").sound("sawtooth").slow(4)
  .lpf(sine.range(80, 350).slow(12))
  .gain(0.18).shape(0.3).release(2)