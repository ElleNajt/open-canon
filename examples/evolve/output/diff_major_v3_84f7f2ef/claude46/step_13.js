setcps(0.29)

$: note("<c3 bb2 ab2 [g2 f2]> <eb3 db3 c3 [bb2 ab2]>".slow(2))
  .sound("sine").lpf(sine.range(45, 900).slow(13))
  .gain(0.55).shape(0.58).release(7)

$: note("c4 eb4 g4 bb4 ab4 [g4 f4] db5 [c5 bb4]".slow(4))
  .sound("sawtooth").gain(0.22)
  .lpf(perlin.range(90, 3200).slow(9))
  .delay(0.74).dt(0.375).dfb(0.55)
  .juxBy(0.7, x => x.detune(11).add(note("<0 -12 7 5>".slow(8))))

$: note("[c5 ~] [eb5 g5] [bb4 ab4] [~ g4] [f4 eb4] [<db5 d5 eb5 f5> ~] [ab4 bb4] [c5 ~]".slow(6))
  .sound("triangle").attack(3).release(11)
  .pan(sine.range(0.05, 0.95).slow(13))
  .room(0.97).size(0.98)

$: note("<[c6 eb6] [bb5 ab5] [g5 ~] [f5 eb5] [db5 c5] [~ bb4] [ab4 g4] [~ f4]>".slow(13))
  .sound("sine").gain(0.14)
  .fmi(sine.range(0.2, 16).slow(16))
  .fmdecay(perlin.range(0.4, 4).slow(13))
  .degradeBy(0.52)

$: s("<[~ cp:3] [rim ~] [~ ~] [cp:3 rim]> <[~ rim] [~ cp:3] [rim ~] [~ ~]>".slow(4))
  .gain(0.08).room(0.92)
  .delay(0.68).dt("<0.333 0.25 0.375>".slow(7))
  .hpf(perlin.range(3200, 9000).slow(11))

$: note("[c2 ~] [~ eb2] [~ bb1] [ab1 <g1 f1 eb1 db1>] [~ db2] [c2 ~]".slow(5))
  .sound("sawtooth").lpf(sine.range(30, 200).slow(16))
  .gain(0.4).shape(0.62)
  .fmi(perlin.range(0.3, 11).slow(13))