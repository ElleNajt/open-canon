setcps(0.4)

$: note("<c3 bb2 ab2 g2>").sound("sine")
  .lpf(sine.range(120, 800).slow(16))
  .gain(0.6).room(0.4).release(0.8)

$: note("c4 eb4 g4 bb4 g4 eb4".slow(3))
  .sound("triangle").gain(0.35)
  .delay(0.5).dt(0.375).dfb(0.45)

$: note("c5 [eb5 g5] bb4 [ab4 g4] ~ eb5".slow(4))
  .sound("sine").attack(0.1).release(1.2)
  .pan(sine.range(0.2, 0.8).slow(7))
  .gain(0.3).room(0.6)

$: note("<c6 bb5 ab5 g5>".slow(8))
  .sound("triangle").gain(0.15)
  .tremolo(0.7).tremolosync(3)
  .lpf(2200).release(2)

$: s("~ [cp:3 ~] ~ cp:3".slow(2))
  .gain(0.12).room(0.7)
  .delay(0.4).dt(0.25)

$: note("c2 ~ ~ bb1 ~ ~ ab1 ~".slow(4))
  .sound("sawtooth").lpf(280).gain(0.25)
  .shape(0.3).release(0.4)