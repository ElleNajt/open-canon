setcps(72/60/4)

$: stack(
  note("g3 gb3 e3 d3 b2 c3 d3 g2")
    .slow(2)
    .sound("triangle")
    .gain(0.45)
    .room(0.14)
    .lpf(sine.range(800, 2200).slow(7))
    .lpq(3),

  s("bd*4").gain(0.13).room(0.22).cutoff(620),

  note("<c4 e4 g4 eb4 d4 f4 eb4>").slow(4)
    .sound("supersaw")
    .gain(0.13)
    .pan(sine.range(0.15,0.85).slow(5))
    .release(0.45)
    .room(0.15)
)

$: s("hh cp ~ [~ cp] hh").slow(2)
  .gain(0.10)
  .pan(perlin.range(0.2,0.8).slow(6))
  .room(0.13)
  .cutoff(4500)

$: note("g4 d4 [f4~] <e4 a4>").slow(8)
  .sound("piano")
  .gain(0.10)
  .room(0.1)
  .release(1.1)
  .pan(sine.range(0.2,0.7).slow(8))