$: note("<c4 eb4 g4 bb4 d5 f5 g5 bb5>").sound("triangle")
  .lpf(sine.range(400, 3200).slow(13))
  .delay(0.42).delaytime(0.333).gain(0.30)

$: note("c2 ~ g2 eb2 ~ bb1 g2 ~").sound("sawtooth")
  .lpf(saw.range(200, 1400).slow(5)).decay(0.5).sustain(0.08)
  .gain(0.28)

$: note("<eb5 f5 g5 ab5 bb5 c6 bb5 g5>/2").sound("sine")
  .attack(0.6).release(1.8).gain(0.14)
  .room(0.62).pan(sine.range(0.2, 0.8).slow(11))

$: s("~ hh:2 hh:1 ~ hh:3 ~ hh:1 hh:2").gain(0.12)
  .hpf(2400).delay(0.28).pan(rand.range(0.3, 0.7))

$: s("bd:3 ~ bd:1 ~ ~ bd:3 ~ bd:1").gain(0.26)
  .shape(0.25).lpf(160).room(0.18)

$: note("<f3 ~ ab3 g3> ~ <bb3 c4 ~ d4>").sound("pulse")
  .lpf(sine.range(800, 2200).slow(7)).attack(0.08).release(0.4).gain(0.13)