setcps(72/60/4)

$: stack(
  note("g3 gb3 e3 d3 b2 c3 d3 g2")
    .slow(2)
    .sound("triangle")
    .gain(0.45)
    .room(0.17)
    .lpf(sine.range(800, 2200).slow(8))
    .lpq(4),

  s("bd*4").gain(0.13).room(0.22).cutoff(620),

  note("<c4 e4 g4 eb4 d4 f4 eb4>").slow(4)
    .sound("supersaw")
    .gain(0.13)
    .pan(sine.range(0.15,0.85).slow(4))
    .room(0.18)
)