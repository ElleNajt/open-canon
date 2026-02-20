setcps(70/60/4)

$: stack([
  note("c4 c4 g4 g4 a4 a4 g4 ~ f4 f4 e4 e4 d4 d4 c4 ~ g4 g4 f4 f4 e4 e4 d4 ~ g4 g4 f4 f4 e4 e4 d4 ~ c4 c4 g4 g4 a4 a4 g4 ~ f4 f4 e4 e4 d4 d4 c4 ~")
    .sound("triangle")
    .room(0.35)
    .lpf(sine.range(1200, 2600).slow(12))
    .attack(0.01)
    .release(0.18),
  note("c3 ~ g3 ~ a3 ~ g3 ~ f3 ~ e3 ~ d3 ~ c3 ~")
    .sound("sine")
    .gain(0.32)
    .room(0.18)
    .lpf(700)
    .attack(0.02)
    .release(0.2),
  "bd [~ bd] ~ bd".sound("bd").gain(0.23).room(0.12)
])