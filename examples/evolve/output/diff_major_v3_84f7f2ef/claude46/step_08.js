setcps(0.38)

$: note("<c3 bb2 ab2 [g2 f2]> <eb3 db3 c3 [bb2 ab2]>".slow(2))
  .sound("sine").lpf(sine.range(35, 1100).slow(11))
  .gain(0.52).shape(0.48).release(3.8)

$: note("c4 eb4 g4 bb4 ab4 [g4 f4] db5 [c5 bb4]".slow(4))
  .sound("sawtooth").gain(0.2)
  .lpf(perlin.range(160, 3800).slow(7))
  .delay(0.72).dt(0.375).dfb(0.58)
  .juxBy(0.6, x => x.detune(13))

$: note("[c5 ~] [eb5 g5] [bb4 ab4] [~ g4] [f4 eb4] [<db5 d5 eb5> ~] [ab4 bb4] [c5 ~]".slow(6))
  .sound("triangle").attack(1.4).release(7)
  .pan(sine.range(0.05, 0.95).slow(9))
  .room(0.94).size(0.97)
  .sometimes(x => x.add(note("<7 12 5>")))

$: note("<[c6 eb6] [bb5 ab5] [g5 ~] [f5 eb5] [db5 c5] [~ bb4] [ab4 g4] [~ f4]>".slow(13))
  .sound("sine").gain(0.14)
  .fmi(sine.range(0.1, 6.2).slow(16))
  .fmdecay(perlin.range(0.12, 2.1).slow(11))
  .degradeBy(0.35)

$: s("~ [cp:3 ~] [~ rim] ~ [~ cp:3] [rim ~]".slow(3))
  .gain(0.07).room(0.85)
  .delay(0.55).dt(0.333)
  .hpf(perlin.range(1600, 5500).slow(6))
  .sometimes(x => x.speed(0.7))

$: note("[c2 ~] [~ eb2] [~ bb1] [ab1 <g1 f1 eb1>] [~ db2] [c2 ~]".slow(5))
  .sound("sawtooth").lpf(sine.range(45, 320).slow(14))
  .gain(0.38).shape(0.55)
  .fmi(perlin.range(0.3, 4.8).slow(11))