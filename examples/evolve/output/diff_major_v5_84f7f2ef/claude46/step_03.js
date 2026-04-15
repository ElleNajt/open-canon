setcps(0.42)

$: note("<c3 bb2 ab2 [g2 eb2]> <c3 [ab2 g2] bb2 eb2>".slow(2))
  .sound("sine").gain(0.52)
  .lpf(sine.range(180,420).slow(13)).shape(0.18)
  .attack(0.5).release(4)

$: note("c4 eb4 g4 bb4 ab4 g4 [eb4 db4] ~".slow(1.5))
  .sound("triangle").gain(0.28)
  .delay(0.55).delaytime(0.375).delayfeedback(0.58)
  .sometimes(x => x.add(note("7")))

$: note("[c5 db5] [eb5 g5] [bb4 ab5] [g4 eb5] [c5 bb4] [~ ab4]".slow(2))
  .sound("sine").gain(0.2)
  .lpf(sine.range(500,3800).slow(14))
  .fmi(sine.range(0.1, 1.2).slow(11))
  .room(0.55)

$: note("<[c6 eb6] [bb5 g5] [ab5 db6] [g5 f5]>".slow(4))
  .sound("triangle").gain(0.13)
  .attack(1.0).release(6)
  .pan(sine.range(0.1,0.9).slow(7))
  .phaser(sine.range(0.15, 1.8).slow(9))

$: s("~ [cp:3 ~] [~ rim] [~ cp:1]".slow(2)).gain(0.14)
  .room(0.65).shape(0.22)
  .pan(perlin.range(0.15,0.85))
  .speed(perlin.range(0.8,1.2))

$: note("[eb7 ~] [~ g7] [~ ~] [bb6 c7] [~ db7] [ab6 ~] [~ eb7] [~ ~]".slow(4))
  .sound("sine").gain(0.08)
  .attack(0.005).release(0.8)
  .delay(0.65).delayfeedback(0.62)