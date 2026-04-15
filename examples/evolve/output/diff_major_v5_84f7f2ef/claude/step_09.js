$: note("<c4 eb4 g4 bb4 d5 f5 ab5 c6 eb6 bb5 g5 d5>").sound("triangle")
  .lpf(sine.range(280, 3200).slow(13)).lpq(6)
  .delay(0.6).delaytime(0.333).gain(0.22)

$: note("c2 ~ g2 ~ eb2 bb1 ~ f1 c2 ~ g1 eb2").sound("sawtooth")
  .lpf(saw.range(120, 1400).slow(9)).decay(0.9).sustain(0.01)
  .gain(0.2)

$: note("<eb5 g5 bb5 d6 f6 eb6 c6 ab5>/2").sound("sine")
  .attack(1.4).release(4).gain(0.08)
  .room(0.85).pan(sine.range(0.1, 0.9).slow(15))

$: s("~ hh:2 hh:1 ~ hh:3 ~ [hh:1 hh:2] ~").gain(0.07)
  .hpf(3200).delay(0.38).pan(rand.range(0.2, 0.8))

$: s("bd:3 ~ ~ bd:1 ~ bd:3 bd:1 ~").gain(0.19)
  .shape(0.45).lpf(100).room(0.35)

$: note("<f3 ab3 c4 eb4> <bb3 d4 g4 f4>").sound("pulse")
  .lpf(sine.range(400, 2000).slow(11)).attack(0.25).release(0.9).gain(0.1)