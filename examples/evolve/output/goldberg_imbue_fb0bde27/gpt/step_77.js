setcps(103/60/4)

$: stack(
  note("g3 gb3 e3 <d3 b2> c3 d3 g2").slow(4)
    .sound("triangle")
    .gain(0.37)
    .lpf(sine.range(620, 3700).slow(6.2))
    .lpq(4.2)
    .every(3, x => x.jux(y => y.rev().pan(0.89))),
  s("bd*3 <bd bd~>")
    .gain(0.18)
    .cutoff(1780)
    .room(perlin.range(0.34,0.52).slow(9.5))
)

$: s("hh cp <cp [cp~]> oh~").slow(7)
  .gain(0.15)
  .pan(perlin.range(0.18, 0.82).slow(6))
  .cutoff(3190)
  .every(4, x => x.jux(y => y.rev()))

$: stack(
  note("<c4 e4 g4 eb4 d4 f4 eb4>").slow(8)
    .sound("supersaw")
    .gain(0.18)
    .cutoff(3160)
    .tremolo(0.77)
    .pan(sine.range(0.09,0.94).slow(19)),
  note("a3 <d4~ f4> g3").slow(13)
    .sound("supersaw")
    .gain(0.12)
    .lpf(1520)
    .every(3, x => x.jux(y => y.rev()))
)

$: note("g4 d4 [f4~] <e4 a4>").slow(9)
  .sound("piano")
  .gain(0.17)
  .release(0.66)
  .every(2, x => x.jux(y => y.rev()))
  .pan(sine.range(0.29,0.73).slow(11))

$: stack(
  note("<b3 g3 eb4 d4> [a3~] <fs3 cs4>").slow(8)
    .sound("pulse")
    .gain(0.13)
    .cutoff(rand.range(1620,3050).slow(6.5))
    .degradeBy(0.25)
    .pan(cosine.range(0.22,0.90).slow(10)),
  s("supersaw [triangle~] <saw square> [piano~]").slow(9)
    .gain(0.13)
    .cutoff(sine.range(950,3670).slow(10))
)