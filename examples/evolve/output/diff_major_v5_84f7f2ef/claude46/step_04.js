setcps(0.38)

$: note("<c3 bb2 ab2 [g2 eb2]> <c3 [ab2 g2] bb2 eb2>".slow(2))
  .sound("sine").gain(0.48)
  .lpf(sine.range(140,380).slow(13)).shape(0.22)
  .attack(0.7).release(5)

$: note("c4 eb4 g4 bb4 ab4 g4 [eb4 db4] ~".slow(1.5))
  .sound("triangle").gain(0.26)
  .delay(0.6).delaytime(0.375).delayfeedback(0.55)
  .sometimes(x => x.add(note("7")))

$: note("[c5 db5] [eb5 g5] [bb4 ab5] [g4 eb5] [c5 bb4] [~ ab4]".slow(2))
  .sound("sine").gain(0.18)
  .fmi(sine.range(0.2, 1.8).slow(11))
  .room(0.6).delay(0.3)

$: note("<[c6 eb6] [bb5 g5] [ab5 db6] [g5 f5]>".slow(4))
  .sound("triangle").gain(0.12)
  .attack(1.2).release(7)
  .pan(sine.range(0.1,0.9).slow(7))
  .phaser(sine.range(0.2, 2.0).slow(9))

$: s("~ [cp:3 ~] [~ rim] [~ cp:1]".slow(2)).gain(0.13)
  .room(0.7).shape(0.25)
  .pan(perlin.range(0.15,0.85))
  .speed(perlin.range(0.75,1.25))

$: note("[eb7 ~] [~ g7] [~ ~] [bb6 c7] [~ db7] [ab6 ~] [~ eb7] [~ ~]".slow(4))
  .sound("sine").gain(0.07)
  .attack(0.008).release(1.2)
  .delay(0.7).delayfeedback(0.58)