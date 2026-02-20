setcps(101/60/4)

$: stack(
  note("g3 gb3 e3 <d3 b2> c3 d3 g2").slow(3)
    .sound("triangle")
    .gain(0.39)
    .lpf(sine.range(740, 3040).slow(10))
    .lpq(5.2)
    .every(5, x => x.jux(y => y.rev())),
  s("bd*3 <bd bd~>")
    .gain(0.18)
    .room(0.22)
    .cutoff(1540)
    .every(3, x => x.jux(y => y.pan(0.88)))
)

$: s("hh cp <cp [cp~]> hh").slow(4)
  .gain(0.19)
  .pan(perlin.range(0.12,0.89).slow(6))
  .cutoff(3120)
  .every(6, x => x.jux(y => y.rev()))
  .sometimes(x => x.cutoff(1920))

$: stack(
  note("<c4 e4 g4 eb4 d4 f4 eb4>").slow(8)
    .sound("supersaw")
    .gain(0.20)
    .cutoff(3450)
    .tremolo(0.53)
    .pan(sine.range(0.11,0.99).slow(7)),
  note("a3 <d4~ f4> g3").slow(12)
    .sound("supersaw")
    .gain(0.11)
    .tremolo(0.69)
    .lpf(1280)
)

$: note("g4 d4 [f4~] <e4 a4>").slow(5)
  .sound("piano")
  .gain(0.21)
  .release(0.84)
  .room(0.32)
  .every(4, x => x.jux(y => y.rev()))
  .pan(sine.range(0.21,0.84).slow(7))

$: stack(
  note("<eb3~ f3~ c3> <bb2 d3> g2 gb2").slow(8)
    .sound("sine")
    .gain(0.16)
    .cutoff(perlin.range(1600, 3180).slow(8))
    .room(0.37)
    .every(6, x => x.jux(y => y.pan(0.91))),
  note("f2~ c2 g2~ d2 <bb1~ d2>").slow(13)
    .sound("square")
    .gain(0.09)
    .cutoff(1300)
)

$: note("c5 [eb4~] <d5 a4> g4").slow(9)
  .sound("pulse")
  .gain(0.14)
  .pan(sine.range(0.26,0.81).slow(5))
  .lpf(perlin.range(1480, 3580).slow(9))
  .every(4, x => x.rev())