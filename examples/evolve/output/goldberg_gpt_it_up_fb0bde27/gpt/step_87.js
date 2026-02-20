setcps(111/60/4)

$: stack(
  note("g3 gb3 e3 <d3 b2> c3 d3 g2").slow(4)
    .sound("triangle")
    .gain(0.36)
    .lpf(sine.range(920, 3680).slow(7))
    .lpq(4.7)
    .every(4, x => x.jux(y => y.rev().pan(0.92))),
  s("bd*3 <bd [bd~]>")
    .gain(0.23)
    .cutoff(2070)
    .room(perlin.range(0.31,0.54).slow(7))
)

$: s("hh cp <cp [cp~]> oh~").slow(5)
  .gain(0.14)
  .cutoff(3490)
  .pan(perlin.range(0.27, 0.79).slow(5))
  .every(3, x => x.jux(y => y.rev()))
  .degradeBy(0.19)

$: stack(
  note("<c4 eb4 g4 eb4 d4 f4 eb4>").slow(8)
    .sound("supersaw")
    .gain(0.25)
    .cutoff(2910)
    .tremolo(0.65)
    .pan(sine.range(0.13,0.97).slow(11)),
  note("a3 <f4~ d4> g3").slow(11)
    .sound("supersaw")
    .gain(0.12)
    .lpf(1640)
)

$: note("g4 d4 [f4~] <e4 a4>").slow(9)
  .sound("piano")
  .gain(0.15)
  .release(0.69)
  .pan(sine.range(0.13,0.82).slow(13))
  .every(2, x => x.rev())
  .tremolo(0.31)

$: stack(
  note("<b3 eb4 d4 g3> [a3~] <fs3 cs4>").slow(12)
    .sound("pulse")
    .gain(0.16)
    .cutoff(rand.range(1900,3200).slow(9))
    .degradeBy(0.17)
    .pan(cosine.range(0.13,0.94).slow(13)),
  s("piano [supersaw~] <triangle saw>").slow(13)
    .gain(0.13)
    .cutoff(sine.range(1210,2920).slow(8))
    .tremolo(0.50)
)

$: stack(
  note("eb3 <a2~ g2> cs3~").slow(14)
    .sound("sine")
    .gain(0.11)
    .lpf(perlin.range(1200,1740).slow(7))
    .release(0.45),
  note("f3 <bb2 ab2> g2").slow(8)
    .sound("triangle")
    .gain(0.13)
    .lpf(1380)
    .pan(perlin.range(0.18,0.79).slow(9))
)