setcps(111/60/4)

$: stack(
  note("g3 gb3 e3 <d3 b2> c3 d3 g2").slow(4)
    .sound("triangle")
    .gain(0.34)
    .lpf(sine.range(1280, 3570).slow(5))
    .lpq(4.9)
    .every(4, x => x.jux(y => y.rev().pan(0.89))),
  s("bd*3 <bd [bd~]>")
    .gain(0.2)
    .cutoff(2330)
    .room(perlin.range(0.39,0.61).slow(5))
)

$: s("hh cp <cp [cp~]> oh~").slow(6)
  .gain(0.14)
  .cutoff(3490)
  .pan(perlin.range(0.17, 0.82).slow(7))
  .every(3, x => x.jux(y => y.rev()))
  .degradeBy(0.16)

$: stack(
  note("<c4 eb4 g4 eb4 d4 f4 eb4>").slow(7)
    .sound("supersaw")
    .gain(0.23)
    .cutoff(2910)
    .tremolo(0.55)
    .pan(sine.range(0.17,0.81).slow(8)),
  note("a3 <f4~ d4> g3").slow(10)
    .sound("supersaw")
    .gain(0.11)
    .lpf(1740)
    .tremolo(0.17)
)

$: note("g4 d4 [f4~] <e4 a4>").slow(8)
  .sound("piano")
  .gain(0.16)
  .release(0.73)
  .pan(sine.range(0.19,0.79).slow(13))
  .every(2, x => x.rev())
  .tremolo(0.29)

$: stack(
  note("<b3 eb4 d4 g3> [a3~] <fs3 cs4>").slow(13)
    .sound("pulse")
    .gain(0.14)
    .cutoff(rand.range(1900,3000).slow(7))
    .degradeBy(0.16)
    .pan(cosine.range(0.23,0.91).slow(11)),
  s("piano <triangle saw>").slow(15)
    .gain(0.15)
    .cutoff(sine.range(1480,2820).slow(7))
    .tremolo(0.45)
)