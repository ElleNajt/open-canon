setcps(107/60/4)

$: stack(
  note("g3 gb3 e3 <d3 b2> c3 d3 g2").slow(4)
    .sound("triangle")
    .gain(0.34)
    .lpf(sine.range(1000, 3400).slow(9))
    .lpq(5.1)
    .every(4, x => x.jux(y => y.rev().pan(0.88))),
  s("bd*3 <bd [bd~]>")
    .gain(0.21)
    .cutoff(2050)
    .room(perlin.range(0.34,0.52).slow(8))
)

$: s("hh cp <cp [cp~]> oh~").slow(5)
  .gain(0.13)
  .cutoff(3220)
  .pan(perlin.range(0.21, 0.85).slow(6))
  .every(3, x => x.jux(y => y.rev()))

$: stack(
  note("<c4 eb4 g4 eb4 d4 f4 eb4>").slow(8)
    .sound("supersaw")
    .gain(0.23)
    .cutoff(2890)
    .tremolo(0.61)
    .pan(sine.range(0.13,0.92).slow(11)),
  note("a3 <f4~ d4> g3").slow(11)
    .sound("supersaw")
    .gain(0.11)
    .lpf(1510)
)

$: note("g4 d4 [f4~] <e4 a4>").slow(9)
  .sound("piano")
  .gain(0.13)
  .release(0.63)
  .pan(sine.range(0.17,0.73).slow(14))
  .every(2, x => x.rev())

$: stack(
  note("<b3 eb4 d4 g3> [a3~] <fs3 cs4>").slow(12)
    .sound("pulse")
    .gain(0.14)
    .cutoff(rand.range(1900,3200).slow(9))
    .degradeBy(0.18)
    .pan(cosine.range(0.11,0.95).slow(13)),
  s("piano [supersaw~] <triangle saw>").slow(13)
    .gain(0.12)
    .cutoff(sine.range(1200,2900).slow(8))
    .tremolo(0.47)
)

$: note("eb3 <a2~ g2> cs3~").slow(14)
  .sound("sine")
  .gain(0.10)
  .lpf(perlin.range(1150,1760).slow(8))
  .pan(sine.range(0.15,0.82).slow(12))
  .every(2, x => x.rev())