setcps(0.45)

$: note("<c3 bb2 ab2 [g2 eb2]>").sound("sine")
  .gain(0.55).lpf(280).attack(0.4).release(3)
  .shape(0.15)

$: note("c4 eb4 g4 bb4 ab4 g4 eb4 ~".slow(1.5))
  .sound("triangle").gain(0.3)
  .delay(0.5).delaytime(0.333).delayfeedback(0.55)
  .sometimes(x => x.add(12))

$: note("[c5 db5] [eb5 g5] [bb4 ab5] [g4 eb5] c5 ~".slow(2))
  .sound("sine").gain(0.22)
  .lpf(sine.range(600,4200).slow(16)).room(0.6)
  .fmi(sine.range(0, 0.8).slow(11))

$: note("<c6 bb5 ab5 [g5 f5]>".slow(4))
  .sound("triangle").gain(0.14)
  .attack(0.8).release(5).pan(sine.range(0.15,0.85).slow(7))
  .phaser(sine.range(0.2, 1.5).slow(9))

$: s("~ [cp:3 ~] ~ [~ cp:1]".slow(2)).gain(0.16)
  .room(0.7).shape(0.25).pan(perlin.range(0.2,0.8))
  .speed(perlin.range(0.85,1.15))

$: note("eb7 ~ g7 ~ ~ bb6 ~ c7".slow(4))
  .sound("sine").gain(0.07)
  .attack(0.01).release(0.6).delay(0.6)
  .delaytime(0.5).delayfeedback(0.6)