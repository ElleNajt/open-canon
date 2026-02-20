setcps(107/60/4)

$: stack(
  note("g3 gb3 e3 <d3 b2> c3 d3 g2").slow(4)
    .sound("triangle")
    .gain(0.36)
    .lpf(sine.range(780, 3220).slow(6.7))
    .lpq(5.6)
    .every(4, x => x.jux(y => y.rev().pan(0.93))),
  s("bd*3 <bd [bd~]>")
    .gain(0.19)
    .cutoff(1950)
    .room(perlin.range(0.38,0.49).slow(8.5))
)

$: s("hh cp <cp [cp~]> oh~").slow(6)
  .gain(0.15)
  .pan(perlin.range(0.18, 0.82).slow(7))
  .cutoff(3080)
  .every(3, x => x.jux(y => y.rev()))

$: stack(
  note("<c4 eb4 g4 eb4 d4 f4 eb4>").slow(8)
    .sound("supersaw")
    .gain(0.19)
    .cutoff(2770)
    .tremolo(0.73)
    .pan(sine.range(0.09,0.94).slow(15)),
  note("a3 <f4~ d4> g3").slow(11)
    .sound("supersaw")
    .gain(0.13)
    .lpf(1430)
    .every(4, x => x.jux(y => y.rev()))
)

$: note("g4 d4 [f4~] <e4 a4>").slow(10)
  .sound("piano")
  .gain(0.17)
  .release(0.57)
  .every(3, x => x.jux(y => y.rev()))
  .pan(sine.range(0.21,0.78).slow(13))

$: stack(
  note("<b3 eb4 d4 g3> [a3~] <fs3 cs4>").slow(8)
    .sound("pulse")
    .gain(0.13)
    .cutoff(rand.range(1810,3300).slow(8))
    .degradeBy(0.29)
    .pan(cosine.range(0.22,0.90).slow(9)),
  s("supersaw [triangle~] <saw square> [piano~]").slow(12)
    .gain(0.13)
    .cutoff(sine.range(1050,3380).slow(12))
)