setcps(72/60/4)

$: stack(
  note("g3 gb3 e3 d3 b2 c3 d3 g2")
    .slow(2)
    .sound("triangle")
    .gain(0.48)
    .room(0.17)
    .lpf(sine.range(900, 2100).slow(8))
    .lpq(6),

  s("bd*4").gain(0.13).room(0.22).cutoff(520),

  note("<c4 e4 g4 eb4 d4 f4 eb4>").slow(4)
    .sound("supersaw")
    .gain(0.18)
    .pan(sine.range(0.10,0.88).slow(7))
    .release(0.33)
)

$: s("hh cp <~ [cp~]> hh").slow(2)
  .gain(0.13)
  .pan(perlin.range(0.18,0.82).slow(3))
  .cutoff(3900)
  .degradeBy(0.14)

$: note("g4 d4 [f4~] <e4 a4>").slow(6)
  .sound("piano")
  .gain(0.13)
  .room(0.12)
  .release(1.0)
  .pan(sine.range(0.1,0.75).slow(5))

$: note("e2 ~ [b2~] <g2 c3>").slow(8)
  .sound("sawtooth")
  .gain(0.11)
  .room(0.18)
  .lpf(sine.range(440, 1800).slow(5))
  .pan(rand.range(0.2, 0.8).slow(7))

$: stack(
  note("c5 <eb5 d5>").slow(16)
    .sound("sine")
    .gain(0.09)
    .room(0.21)
    .release(2.3)
    .pan(perlin.range(0.19,0.85).slow(6)),
  note("g4 c5 ~ e5").slow(14)
    .sound("triangle")
    .gain(0.07)
    .room(0.14)
    .release(2.1)
    .pan(sine.range(0.7,0.3).slow(12))
)