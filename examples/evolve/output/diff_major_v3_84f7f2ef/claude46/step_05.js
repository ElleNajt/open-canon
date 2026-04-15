setcps(0.42)

$: note("<c3 bb2 ab2 [g2 f2]> <eb3 db3 c3 bb2>".slow(2))
  .sound("sine").lpf(sine.range(60, 900).slow(13))
  .gain(0.44).shape(0.32).release(2.2)

$: note("c4 eb4 g4 bb4 ab4 [g4 f4]".slow(3))
  .sound("sawtooth").gain(0.18)
  .lpf(perlin.range(280, 3200).slow(9))
  .delay(0.6).dt(0.375).dfb(0.55)
  .juxBy(0.4, x => x.detune(7).slow(2))

$: note("[c5 ~] [eb5 g5] [bb4 ab4] [~ g4] [f4 eb4] [<db5 d5> ~]".slow(5))
  .sound("sine").attack(0.5).release(4)
  .pan(sine.range(0.08, 0.92).slow(7))
  .room(0.85).size(0.9)
  .sometimes(x => x.add(note("7")))

$: note("<[c6 eb6] [bb5 ~] [ab5 g5] [~ f5] [eb5 db5] [c5 ~]>".slow(11))
  .sound("triangle").gain(0.14)
  .lpf(perlin.range(600, 6000).slow(14))
  .fmi(sine.range(0.2, 2.5).slow(16))
  .degradeBy(0.15)

$: s("~ [cp:3 ~] [~ rim] [~ cp:3]".slow(2))
  .gain(0.11).room(0.7)
  .delay(0.4).dt(0.333)
  .hpf(perlin.range(900, 4000).slow(8))
  .pan(perlin.range(0.2, 0.8).slow(5))

$: note("[c2 ~] [~ eb2] [~ bb1] [ab1 <g1 f1>]".slow(4))
  .sound("sawtooth").lpf(sine.range(80, 380).slow(11))
  .gain(0.3).shape(0.5)
  .fmi(perlin.range(0.2, 2.4).slow(13))