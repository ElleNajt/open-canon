setcps(0.38)

$: note("<c3 bb2 ab2 [g2 f2]> <eb3 db3 c3 bb2>".slow(2))
  .sound("sine").lpf(sine.range(50, 700).slow(11))
  .gain(0.46).shape(0.38).release(2.8)

$: note("c4 eb4 g4 bb4 ab4 [g4 f4]".slow(3))
  .sound("sawtooth").gain(0.16)
  .lpf(perlin.range(220, 2800).slow(9))
  .delay(0.65).dt(0.375).dfb(0.58)
  .juxBy(0.45, x => x.detune(9).slow(2))

$: note("[c5 ~] [eb5 g5] [bb4 ab4] [~ g4] [f4 eb4] [<db5 d5> ~]".slow(5))
  .sound("triangle").attack(0.8).release(5)
  .pan(sine.range(0.05, 0.95).slow(7))
  .room(0.88).size(0.92)
  .sometimes(x => x.add(note("12")))

$: note("<[c6 eb6] [bb5 ~] [ab5 g5] [~ f5] [eb5 db5] [c5 ~]>".slow(11))
  .sound("sine").gain(0.12)
  .fmi(sine.range(0.3, 3.8).slow(16))
  .fmdecay(perlin.range(0.2, 1.4).slow(13))
  .degradeBy(0.25)

$: s("~ [cp:3 ~] [~ rim] [~ cp:3]".slow(2))
  .gain(0.09).room(0.75)
  .delay(0.45).dt(0.333)
  .hpf(perlin.range(1100, 5000).slow(8))
  .pan(perlin.range(0.15, 0.85).slow(5))

$: note("[c2 ~] [~ eb2] [~ bb1] [ab1 <g1 f1>]".slow(4))
  .sound("sawtooth").lpf(sine.range(60, 320).slow(11))
  .gain(0.32).shape(0.55)
  .fmi(perlin.range(0.3, 3.2).slow(13))