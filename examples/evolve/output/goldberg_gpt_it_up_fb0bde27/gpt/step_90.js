setcps(113/60/4)

$: stack(
  note("g3 <gb3 e3> [d3~] <b2 c3> d3 g2").slow(4)
    .sound("triangle")
    .gain(0.33)
    .lpf(sine.range(1220, 3620).slow(7))
    .lpq(3.4)
    .every(4, x => x.jux(y => y.rev().pan(0.79))),
  s("bd*3 <bd [bd~]>")
    .gain(0.21)
    .cutoff(2130)
    .room(perlin.range(0.37,0.6).slow(7))
)

$: s("oh~ hh cp <cp [cp~]>").slow(6)
  .gain(0.15)
  .cutoff(3390)
  .pan(perlin.range(0.16, 0.88).slow(5))
  .every(3, x => x.jux(y => y.rev()))
  .degradeBy(0.22)

$: stack(
  note("<c4 eb4 g4 eb4 d4 f4 eb4>").slow(7)
    .sound("supersaw")
    .gain(0.23)
    .cutoff(3010)
    .tremolo(0.47)
    .pan(sine.range(0.11,0.91).slow(9)),
  note("a3 <f4~ d4> g3").slow(11)
    .sound("supersaw")
    .gain(0.12)
    .lpf(1800)
    .tremolo(0.19)
)

$: note("g4 d4 [f4~] <e4 a4>").slow(8)
  .sound("piano")
  .gain(0.17)
  .release(0.77)
  .pan(sine.range(0.23,0.71).slow(9))
  .every(2, x => x.rev())

$: stack(
  note("<b3 eb4 d4 g3> [a3~] <fs3 cs4>").slow(12)
    .sound("pulse")
    .gain(0.14)
    .cutoff(rand.range(1700,2900).slow(5))
    .degradeBy(0.14)
    .pan(cosine.range(0.19,0.95).slow(12)),
  s("piano saw <triangle~>").slow(14)
    .gain(0.14)
    .cutoff(sine.range(1510,2720).slow(8))
    .tremolo(0.48)
)

$: s("cr <rd~> <cb~>").slow(13)
  .gain(0.09)
  .cutoff(rand.range(1480,3320).slow(6))
  .pan(tri.range(0.08, 0.92).slow(8))
  .every(4, x => x.jux(y => y.rev()))