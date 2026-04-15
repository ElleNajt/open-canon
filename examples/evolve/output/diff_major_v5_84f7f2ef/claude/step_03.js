$: note("<c4 eb4 g4 bb4 c5 g4 eb4 d4>").sound("triangle")
  .lpf(sine.range(400, 3200).slow(13))
  .delay(0.42).delaytime(0.333).gain(0.35)

$: note("c2 ~ g2 eb2 ~ bb1 ~ g2").sound("sawtooth")
  .lpf(saw.range(200, 900).slow(8)).decay(0.5).sustain(0.08)
  .gain(0.24)

$: note("<eb5 f5 g5 ab5 g5 f5 eb5 d5>/2").sound("sine")
  .attack(0.4).release(1.2).gain(0.14)
  .room(0.6).pan(sine.range(0.2, 0.8).slow(7))

$: s("~ hh:2 hh:1 ~ hh:3 ~ hh:1 ~").gain(0.11)
  .hpf(2000).delay(0.25).pan(0.6)

$: s("bd:3 ~ ~ bd:1 ~ bd:3 ~ ~").gain(0.22)
  .shape(0.25).lpf(150).room(0.2)

$: note("~ ~ <g3 ab3> ~ ~ <bb3 c4> ~ ~").sound("pulse")
  .lpf(1200).attack(0.15).release(0.6).gain(0.09)