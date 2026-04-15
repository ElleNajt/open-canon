$: note("<c4 eb4 g4 bb4 d5 bb4 g4 eb4>").sound("triangle")
  .lpf(sine.range(300, 2800).slow(11))
  .delay(0.38).delaytime(0.375).gain(0.32)

$: note("c2 ~ g2 ~ eb2 bb1 ~ g2").sound("sawtooth")
  .lpf(saw.range(180, 1100).slow(7)).decay(0.6).sustain(0.05)
  .gain(0.26)

$: note("<eb5 g5 ab5 bb5 ab5 g5 f5 eb5>/2").sound("sine")
  .attack(0.5).release(1.4).gain(0.12)
  .room(0.55).pan(sine.range(0.25, 0.75).slow(9))

$: s("~ hh:2 ~ hh:1 ~ hh:3 hh:1 ~").gain(0.10)
  .hpf(2200).delay(0.22).pan(0.55)

$: s("bd:3 ~ ~ bd:1 ~ ~ bd:3 ~").gain(0.24)
  .shape(0.2).lpf(140).room(0.15)

$: note("~ <f3 g3> ~ ~ <ab3 bb3> ~ ~ <c4 d4>").sound("pulse")
  .lpf(1400).attack(0.12).release(0.5).gain(0.11)