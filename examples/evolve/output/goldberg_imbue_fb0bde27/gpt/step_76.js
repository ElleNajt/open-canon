setcps(103/60/4)

$: stack(
  note("g3 gb3 e3 <d3 b2> c3 d3 g2").slow(3)
    .sound("triangle")
    .gain(0.36)
    .lpf(sine.range(440, 4000).slow(7))
    .lpq(4.7)
    .every(4, x => x.jux(y => y.rev().pan(0.86))),
  s("bd*3 <bd bd~>")
    .gain(0.17)
    .cutoff(1680)
    .room(perlin.range(0.27,0.48).slow(13))
    .every(3, x => x.jux(y => y.pan(0.91)))
)

$: s("hh cp <cp [cp~]> oh~").slow(6)
  .gain(0.14)
  .pan(perlin.range(0.28, 0.75).slow(8))
  .cutoff(3070)
  .every(4, x => x.jux(y => y.rev()))
  .degradeBy(0.23)

$: stack(
  note("<c4 e4 g4 eb4 d4 f4 eb4>").slow(9)
    .sound("supersaw")
    .gain(0.19)
    .cutoff(3390)
    .tremolo(0.8)
    .pan(sine.range(0.09,0.99).slow(17)),
  note("a3 <d4~ f4> g3").slow(11)
    .sound("supersaw")
    .gain(0.11)
    .lpf(1390)
    .every(2, x => x.jux(y => y.rev()))
)

$: note("g4 d4 [f4~] <e4 a4>").slow(8)
  .sound("piano")
  .gain(0.17)
  .release(0.6)
  .every(3, x => x.jux(y => y.rev()))
  .pan(sine.range(0.33,0.7).slow(14))

$: stack(
  note("<b3 g3 eb4 d4> [a3~] <fs3 cs4>").slow(7)
    .sound("pulse")
    .gain(0.12)
    .cutoff(rand.range(1550,3250).slow(7))
    .degradeBy(0.29)
    .pan(cosine.range(0.15,0.94).slow(9)),
  s("supersaw [triangle~] <saw square> [piano~]").slow(8)
    .gain(0.12)
    .cutoff(sine.range(850,3890).slow(9))
    .every(2, x => x.jux(y => y.rev()))
)