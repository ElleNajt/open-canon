setcps(101/60/4)

$: stack(
  note("g3 gb3 e3 <d3 b2> c3 d3 g2").slow(3)
    .sound("triangle")
    .gain(0.41)
    .lpf(sine.range(900, 3140).slow(6))
    .lpq(4.5)
    .every(5, x => x.jux(y => y.rev())),
  s("bd*3 <bd bd~>")
    .gain(0.19)
    .cutoff(1640)
    .room(0.28)
    .every(3, x => x.jux(y => y.pan(0.88)))
)

$: s("hh cp <cp [cp~]> hh").slow(4)
  .gain(0.17)
  .pan(perlin.range(0.12,0.89).slow(6))
  .cutoff(2920)
  .degradeBy(0.13)
  .every(6, x => x.jux(y => y.rev()))

$: stack(
  note("<c4 e4 g4 eb4 d4 f4 eb4>").slow(9)
    .sound("supersaw")
    .gain(0.22)
    .cutoff(3250)
    .tremolo(0.51)
    .every(4, x => x.jux(y => y.rev()))
    .pan(sine.range(0.13,0.95).slow(7)),
  note("a3 <d4~ f4> g3").slow(12)
    .sound("supersaw")
    .gain(0.13)
    .tremolo(0.81)
    .lpf(1380)
)

$: note("g4 d4 [f4~] <e4 a4>").slow(5)
  .sound("piano")
  .gain(0.22)
  .release(0.9)
  .every(8, x => x.jux(y => y.pan(0.74)))
  .pan(sine.range(0.24,0.86).slow(5))

$: stack(
  note("<eb3~ f3~ c3> <bb2 d3> g2 gb2").slow(8)
    .sound("sine")
    .gain(0.16)
    .cutoff(perlin.range(1700, 3280).slow(10))
    .room(0.41)
    .every(6, x => x.jux(y => y.pan(0.91))),
  note("f2~ c2 g2~ d2 <bb1~ d2>").slow(14)
    .sound("square")
    .gain(0.11)
    .cutoff(1350)
)

$: note("b3 g3 eb4 d4 [a3~] <fs3 cs4>").slow(7)
  .sound("pulse")
  .gain(0.17)
  .cutoff(rand.range(1100,3300).slow(8))
  .room(0.23)
  .degradeBy(0.18)