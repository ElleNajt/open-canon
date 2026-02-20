setcps(72/60/4)

$: stack(
  note("g3 gb3 e3 d3 b2 c3 d3 g2")
    .slow(2)
    .sound("triangle")
    .gain(0.45)
    .room(0.17)
    .lpf(sine.range(600, 1800).slow(11))
    .lpq(5),

  s("bd*4").gain(0.13).room(0.22).cutoff(520),

  note("<c4 e4 g4 eb4 d4 f4 eb4>").slow(4)
    .sound("supersaw")
    .gain(0.15)
    .pan(sine.range(0.10,0.88).slow(7))
    .release(0.33)
)

$: s("hh cp <~ [cp~]> hh").slow(2)
  .gain(0.13)
  .pan(perlin.range(0.18,0.82).slow(3))
  .cutoff(4100)
  .degradeBy(0.16)

$: note("g4 d4 [f4~] <e4 a4>").slow(6)
  .sound("piano")
  .gain(0.13)
  .room(0.12)
  .release(1.0)
  .pan(sine.range(0.1,0.75).slow(5))

$: note("e2 ~ [b2~] <g2 c3>").slow(8)
  .sound("sawtooth")
  .gain(0.10)
  .room(0.22)
  .lpf(saw.range(420, 1600).slow(7))
  .pan(rand.range(0.2, 0.8).slow(8))

$: stack(
  note("c5 <eb5 d5>").slow(16)
    .sound("sine")
    .gain(0.08)
    .room(0.22)
    .release(2.7)
    .pan(perlin.range(0.23,0.75).slow(9)),
  note("g4 c5 ~ e5").slow(31)
    .sound("triangle")
    .gain(0.07)
    .room(0.16)
    .release(2.5)
    .pan(sine.range(0.7,0.3).slow(10))
)