setcps(72/60/4)

$: stack(
  note("g3 gb3 e3 d3 b2 c3 d3 g2")
    .slow(2)
    .sound("triangle")
    .gain(0.44)
    .room(0.17)
    .lpf(sine.range(750, 2100).slow(8)),

  s("bd*3 <bd bd~>").gain(0.15).room(0.20).cutoff(520),

  note("<c4 e4 g4 eb4 d4 f4 eb4>").slow(4)
    .sound("supersaw")
    .gain(0.19)
    .pan(sine.range(0.14,0.88).slow(9))
    .release(0.39)
)

$: s("hh cp <cp [cp~]> hh").slow(2)
  .gain(0.13)
  .pan(perlin.range(0.22,0.82).slow(4))
  .cutoff(3900)
  .degradeBy(0.2)

$: note("g4 d4 [f4~] <e4 a4>").slow(6)
  .sound("piano")
  .gain(0.14)
  .room(0.13)
  .release(1.2)
  .pan(sine.range(0.1,0.85).slow(6))

$: note("e2 ~ [b2~] <g2 c3>").slow(8)
  .sound("sawtooth")
  .gain(0.12)
  .room(0.19)
  .lpf(sine.range(380, 1900).slow(7))
  .pan(rand.range(0.1, 0.8).slow(8))

$: stack(
  note("c5 <eb5 d5>").slow(16)
    .sound("sine")
    .gain(0.10)
    .room(0.21)
    .release(2.5)
    .pan(perlin.range(0.14,0.89).slow(7)),
  note("g4 c5 ~ e5").slow(14)
    .sound("triangle")
    .gain(0.07)
    .room(0.14)
    .release(2.1)
    .pan(sine.range(0.7,0.3).slow(13))
    .every(4, x => x.rev())
)