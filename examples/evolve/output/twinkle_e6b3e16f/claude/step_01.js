setcps(72/60/4)

$: note("c4 c4 g4 g4 a4 a4 g4 ~ f4 f4 e4 e4 d4 d4 c4 ~ g4 g4 f4 f4 e4 e4 d4 ~ g4 g4 f4 f4 e4 e4 d4 ~ c4 c4 g4 g4 a4 a4 g4 ~ f4 f4 e4 e4 d4 d4 c4 ~")
  .sound("triangle")
  .attack(0.02).release(0.3)
  .room(0.4).size(0.6)
  .gain(0.7)

$: note("c3 ~ ~ ~ f3 ~ ~ ~ g3 ~ ~ ~ c3 ~ ~ ~ c3 ~ ~ ~ f3 ~ ~ ~ g3 ~ ~ ~ c3 ~ ~ ~")
  .sound("sine")
  .attack(0.05).release(0.5)
  .gain(0.5)
  .room(0.2)

$: s("bd ~ ~ ~ bd ~ ~ ~, ~ ~ sn ~ ~ ~ sn ~, hh*8")
  .gain("<0.0 0.0 0.4 0.5 0.6 0.6 0.6 0.6>")
  .room(0.1)