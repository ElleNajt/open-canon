setcps(0.15)

$: note("<c3 bb2 ab2 [g2 f2]> <eb3 db3 c3 [bb2 ab2]>".slow(2))
  .sound("sine").lpf(sine.range(40, 520).slow(11))
  .shape(0.93).release(16)
  .gain(sine.range(0.32, 0.5).slow(7))

$: note("c4 eb4 g4 bb4 ab4 [g4 f4] db5 [c5 bb4]".slow(4))
  .sound("sawtooth").gain(perlin.range(0.09, 0.24).slow(6))
  .lpf(perlin.range(90, 1800).slow(9))
  .delay(0.82).dt(0.375).dfb(0.62)
  .juxBy(0.7, x => x.detune(21).add(note("<0 -12 7 -5>".slow(8))))

$: note("[c5 ~] [eb5 g5] [bb4 ab4] [~ g4] [f4 eb4] [<db5 d5 eb5 f5> ~] [ab4 bb4] [c5 ~]".slow(6))
  .sound("triangle").attack(5).release(14)
  .pan(sine.range(0.05, 0.95).slow(11))
  .room(0.98).size(0.99)

$: note("<[c6 eb6] [bb5 ab5] [g5 ~] [f5 eb5] [db5 c5] [~ bb4] [ab4 g4] [~ f4]>".slow(13))
  .sound("sine").gain(perlin.range(0.06, 0.18).slow(11))
  .fmi(sine.range(0.1, 22).slow(16))
  .penv(perlin.range(-0.35, 0.45).slow(14))
  .degradeBy(0.55)

$: note("[c2 ~] [~ eb2] [~ bb1] [ab1 <g1 f1 eb1 db1>] [~ db2] [c2 ~]".slow(5))
  .sound("sawtooth").lpf(sine.range(25, 150).slow(14))
  .gain(0.36).shape(0.87)
  .fmi(perlin.range(0.3, 17).slow(11))

$: note("<c4 [~ eb4] ab3 [g3 bb3]> <[~ db4] c4 [bb3 ~] [ab3 g3]>".slow(8))
  .sound("pulse").gain(perlin.range(0.08, 0.17).slow(11))
  .lpf(perlin.range(180, 1600).slow(9))
  .vowel("<a ~ e ~ o ~ i ~>".slow(16))
  .delay(0.88).dt("<0.5 0.333 0.375>".slow(7))