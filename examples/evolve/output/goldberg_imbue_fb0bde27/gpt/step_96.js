setcps(113/60/4)

$: stack(
  note("g3 <gb3 e3> [d3~] <b2 c3> d3 g2").slow(5)
    .sound("triangle")
    .gain(0.23)
    .lpf(sine.range(990, 3670).slow(7))
    .lpq(4.7)
    .every(4, x => x.jux(y => y.rev().pan(0.91))),
  s("bd*3 <bd [bd~]>")
    .gain(0.18)
    .cutoff(2130)
    .room(perlin.range(0.41,0.68).slow(5))
)

$: s("oh~ hh cp <cp [cp~]>").slow(4)
  .gain(0.13)
  .cutoff(3190)
  .pan(perlin.range(0.13, 0.93).slow(7))
  .every(3, x => x.rev())
  .degradeBy(0.18)

$: stack(
  note("<c4 eb4 g4 eb4 d4 f4 eb4>").slow(8)
    .sound("supersaw")
    .gain(0.21)
    .cutoff(3020)
    .tremolo(0.43)
    .pan(sine.range(0.12,0.89).slow(6)),
  note("a3 <f4~ d4> g3").slow(9)
    .sound("supersaw")
    .gain(0.13)
    .lpf(2100)
    .tremolo(0.22)
)

$: note("g4 d4 [f4~] <e4 a4>").slow(10)
  .sound("piano")
  .gain(0.15)
  .release(0.92)
  .pan(sine.range(0.14,0.64).slow(9))
  .every(2, x => x.rev())
  .tremolo(0.12)

$: stack(
  note("<b3 eb4 d4 g3> [a3~] <fs3 cs4>").slow(8)
    .sound("pulse")
    .gain(0.15)
    .cutoff(rand.range(1300,2150).slow(8))
    .degradeBy(0.13)
    .pan(cosine.range(0.16,0.94).slow(9)),
  s("piano saw <triangle~>").slow(14)
    .gain(0.12)
    .cutoff(sine.range(1330,2700).slow(7))
    .tremolo(0.31)
)

$: s("rim*2 lt <cb~> sn <ht mt>*2").slow(8)
  .gain(0.11)
  .pan(perlin.range(0.22, 0.74).slow(10))
  .room(0.53)
  .cutoff(saw.range(2100,2850).slow(11))