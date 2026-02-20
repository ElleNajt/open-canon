// Twinkle Twinkle Little Star

setcps(70/60/4)

$: stack([
  note("c4 c4 g4 g4 a4 a4 g4 ~ f4 f4 e4 e4 d4 d4 c4 ~ g4 g4 f4 f4 e4 e4 d4 ~ g4 g4 f4 f4 e4 e4 d4 ~ c4 c4 g4 g4 a4 a4 g4 ~ f4 f4 e4 e4 d4 d4 c4 ~")
    .sound("triangle")
    .room(0.2)
    .lpf(2200),
  note("c3 ~ g3 ~ a3 ~ g3 ~ f3 ~ e3 ~ d3 ~ c3 ~")
    .sound("sine")
    .gain(0.35)
    .room(0.25)
    .lpf(900)
])