$: note("<c4 eb4 g4 bb4 d5 f5 ab5 c6>").sound("triangle")
  .lpf(sine.range(300, 2800).slow(11))
  .delay(0.38).delaytime(0.375).gain(0.28)

$: note("c2 ~ g2 ~ eb2 ~ bb1 ~").sound("sawtooth")
  .lpf(saw.range(180, 1200).slow(7)).decay(0.6).sustain(0.05)
  .gain(0.26)

$: note("<eb5 g5 bb5 c6 d6 eb6 d6 bb5>/2").sound("sine")
  .attack(0.8).release(2.2).gain(0.12)
  .room(0.7).pan(sine.range(0.15, 0.85).slow(13))

$: s("~ hh:2 ~ hh:1 ~ hh:3 hh:1 ~").gain(0.10)
  .hpf(2800).delay(0.32).pan(rand.range(0.25, 0.75))

$: s("bd:3 ~ ~ bd:1 ~ ~ bd:3 ~").gain(0.24)
  .shape(0.3).lpf(140).room(0.22)

$: note("<f3 ab3 ~ g3> <~ bb3 c4 ~>").sound("pulse")
  .lpf(sine.range(600, 1800).slow(9)).attack(0.12).release(0.5).gain(0.11)