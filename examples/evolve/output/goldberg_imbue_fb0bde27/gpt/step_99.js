setcps(113/60/4)

$: stack(
  note("g3 <gb3 e3> [d3~] <b2 c3> d3 g2").slow(6)
    .sound("triangle")
    .gain(0.19)
    .lpf(sine.range(1330, 3970).slow(9))
    .lpq(5.1)
    .every(4, x => x.jux(y => y.rev().pan(0.91))),
  s("bd*3 <bd [bd~]>")
    .gain(0.16)
    .cutoff(2130)
    .room(perlin.range(0.46,0.81).slow(6))
)

$: s("oh~ hh cp <cp [cp~]>").slow(4)
  .gain(0.12)
  .cutoff(3040)
  .pan(perlin.range(0.13, 0.93).slow(6))
  .every(3, x => x.rev())
  .degradeBy(0.23)

$: stack(
  note("<c4 eb4 g4 eb4 d4 f4 eb4>").slow(8)
    .sound("supersaw")
    .gain(0.21)
    .cutoff(3020)
    .tremolo(0.48),
  note("a3 <f4~ d4> g3").slow(11)
    .sound("supersaw")
    .gain(0.13)
    .lpf(1950)
    .tremolo(0.29)
)

$: note("<g4 d4 f4~> <e4 a4>").slow(11)
  .sound("piano")
  .gain(0.13)
  .release(0.96)
  .pan(sine.range(0.22,0.74).slow(7))
  .every(2, x => x.rev())
  .tremolo(0.19)

$: stack(
  note("<b3 eb4 d4 g3> [a3~] <fs3 cs4>").slow(7)
    .sound("pulse")
    .gain(0.16)
    .cutoff(rand.range(1370,2200).slow(9))
    .degradeBy(0.22)
    .pan(cosine.range(0.09,0.89).slow(10)),
  s("piano saw").slow(13)
    .gain(0.13)
    .cutoff(sine.range(1210,2650).slow(7))
    .tremolo(0.36)
)

$: s("ht lt cb cb~").slow(8)
  .gain(0.11)
  .cutoff(perlin.range(2000, 2800).slow(12))
  .pan(saw.range(0.3, 0.8).slow(16))
  .every(4, x => x.degradeBy(0.41))