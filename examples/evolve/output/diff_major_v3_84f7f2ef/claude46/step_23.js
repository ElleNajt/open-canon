setcps(0.24)

$: note("<c3 bb2 ab2 [g2 f2]> <eb3 db3 c3 [bb2 ab2]>".slow(2))
  .sound("sine").lpf(sine.range(40, 880).slow(13))
  .shape(0.72).release(9)
  .gain(sine.range(0.28, 0.52).slow(7))

$: note("c4 eb4 g4 bb4 ab4 [g4 f4] db5 [c5 bb4]".slow(4))
  .sound("sawtooth").gain(perlin.range(0.12, 0.28).slow(6))
  .lpf(perlin.range(90, 3600).slow(9))
  .delay(0.72).dt(0.375).dfb(0.52)
  .juxBy(0.7, x => x.detune(9).add(note("<0 -12 7 5>".slow(8))))

$: note("[c5 ~] [eb5 g5] [bb4 ab4] [~ g4] [f4 eb4] [<db5 d5 eb5 f5> ~] [ab4 bb4] [c5 ~]".slow(6))
  .sound("triangle").attack(3).release(11)
  .pan(sine.range(0.05, 0.95).slow(13))
  .room(0.96).size(0.97)

$: note("<[c6 eb6] [bb5 ab5] [g5 ~] [f5 eb5] [db5 c5] [~ bb4] [ab4 g4] [~ f4]>".slow(13))
  .sound("sine").gain(perlin.range(0.06, 0.18).slow(11))
  .fmi(sine.range(0.2, 22).slow(16))
  .fmdecay(perlin.range(0.4, 4).slow(9))
  .degradeBy(0.55)

$: note("[c2 ~] [~ eb2] [~ bb1] [ab1 <g1 f1 eb1 db1>] [~ db2] [c2 ~]".slow(5))
  .sound("sawtooth").lpf(sine.range(30, 160).slow(14))
  .gain(0.35).shape(0.74)
  .fmi(perlin.range(0.4, 14).slow(11))

$: note("<c4 [~ eb4] ab3 [g3 bb3]> <[~ db4] c4 [bb3 ~] [ab3 g3]>".slow(8))
  .sound("pulse").gain(perlin.range(0.06, 0.16).slow(11))
  .lpf(perlin.range(200, 2400).slow(9))
  .delay(0.82).dt("<0.5 0.333 0.375>".slow(7))