setcps(113/60/4)

$: stack(
  note("g3 <gb3 e3> [d3~] <b2 c3> d3 g2").slow(5)
    .sound("triangle")
    .gain(0.26)
    .lpf(sine.range(1060, 3880).slow(6))
    .lpq(3.7)
    .every(4, x => x.jux(y => y.rev().pan(0.81))),
  s("bd*3 <bd [bd~]>")
    .gain(0.18)
    .cutoff(2130)
    .room(perlin.range(0.41,0.68).slow(5))
)

$: s("oh~ hh cp <cp [cp~]>").slow(4)
  .gain(0.13)
  .cutoff(3190)
  .pan(perlin.range(0.13, 0.93).slow(7))
  .every(3, x => x.jux(y => y.rev()))
  .degradeBy(0.22)

$: stack(
  note("<c4 eb4 g4 eb4 d4 f4 eb4>").slow(8)
    .sound("supersaw")
    .gain(0.26)
    .cutoff(3090)
    .tremolo(0.44)
    .pan(sine.range(0.09,0.88).slow(7)),
  note("a3 <f4~ d4> g3").slow(9)
    .sound("supersaw")
    .gain(0.15)
    .lpf(2000)
    .tremolo(0.29)
)

$: note("g4 d4 [f4~] <e4 a4>").slow(12)
  .sound("piano")
  .gain(0.19)
  .release(0.93)
  .pan(sine.range(0.18,0.66).slow(8))
  .every(2, x => x.rev())
  .tremolo(0.13)

$: stack(
  note("<b3 eb4 d4 g3> [a3~] <fs3 cs4>").slow(10)
    .sound("pulse")
    .gain(0.19)
    .cutoff(rand.range(1300,2500).slow(7))
    .degradeBy(0.15)
    .pan(cosine.range(0.14,0.91).slow(13)),
  s("piano saw <triangle~>").slow(16)
    .gain(0.13)
    .cutoff(sine.range(1420,2850).slow(6))
    .tremolo(0.29)
)

$: s("cr <rd~> <cb~>").slow(13)
  .gain(0.13)
  .cutoff(rand.range(1200,3220).slow(7))
  .pan(tri.range(0.05, 0.98).slow(9))
  .every(2, x => x.jux(y => y.rev()))
  .degradeBy(0.16)