setcps(70/60/4)
$: stack(
  note("c4 c4 g4 g4 a4 a4 g4 ~ f4 f4 e4 e4 d4 d4 c4 ~ g4 g4 f4 f4 e4 e4 d4 ~ g4 g4 f4 f4 e4 e4 d4 ~ c4 c4 g4 g4 a4 a4 g4 ~ f4 f4 e4 e4 d4 d4 c4 ~")
    .sound("saw")
    .room(0.3)
    .lpf(2000)
    .lpq(4),
  note("c4 c4 g4 g4 a4 a4 g4 ~ f4 f4 e4 e4 d4 d4 c4 ~ g4 g4 f4 f4 e4 e4 d4 ~ g4 g4 f4 f4 e4 e4 d4 ~ c4 c4 g4 g4 a4 a4 g4 ~ f4 f4 e4 e4 d4 d4 c4 ~")
    .octave(-1)
    .sound("pulse")
    .gain(0.6)
    .hpf(80)
    .lpf(sine.range(250,550).slow(4))
    .room(0.5),
  s("bd*2 sn , hh*16")
    .gain(0.4)
    .room(0)
)