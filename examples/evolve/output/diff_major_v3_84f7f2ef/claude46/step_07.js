setcps(0.42)

$: note("<c3 bb2 ab2 [g2 f2]> <eb3 db3 c3 [bb2 ab2]>".slow(2))
  .sound("sine").lpf(sine.range(40, 900).slow(13))
  .gain(0.48).shape(0.42).release(3.2)

$: note("c4 eb4 g4 bb4 ab4 [g4 f4] db5 [c5 bb4]".slow(4))
  .sound("sawtooth").gain(0.18)
  .lpf(perlin.range(180, 3200).slow(7))
  .delay(0.7).dt(0.333).dfb(0.62)
  .juxBy(0.5, x => x.detune(11).slow(3))

$: note("[c5 ~] [eb5 g5] [bb4 ab4] [~ g4] [f4 eb4] [<db5 d5> ~] [ab4 bb4] [c5 ~]".slow(6))
  .sound("triangle").attack(1.2).release(6)
  .pan(sine.range(0.05, 0.95).slow(9))
  .room(0.92).size(0.95)
  .sometimes(x => x.add(note("7")))

$: note("<[c6 eb6] [bb5 ab5] [g5 ~] [f5 eb5] [db5 c5] [~ bb4]>".slow(13))
  .sound("sine").gain(0.13)
  .fmi(sine.range(0.2, 5.5).slow(16))
  .fmdecay(perlin.range(0.15, 1.8).slow(11))
  .degradeBy(0.3)

$: s("~ [cp:3 ~] [~ rim] ~ [~ cp:3] [rim ~]".slow(3))
  .gain(0.08).room(0.8)
  .delay(0.5).dt(0.375)
  .hpf(perlin.range(1400, 6000).slow(6))

$: note("[c2 ~] [~ eb2] [~ bb1] [ab1 <g1 f1>] [~ db2] [c2 ~]".slow(5))
  .sound("sawtooth").lpf(sine.range(50, 280).slow(14))
  .gain(0.35).shape(0.6)
  .fmi(perlin.range(0.2, 4.0).slow(11))