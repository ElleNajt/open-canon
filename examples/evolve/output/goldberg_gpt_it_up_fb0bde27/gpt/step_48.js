setcps(93/60/4)

$: stack(
  note("g3 gb3 e3 <d3 b2> c3 d3 g2").slow(3)
    .sound("triangle")
    .gain(0.39)
    .lpf(sine.range(880, 2900).slow(9))
    .lpq(6.5)
    .every(5, x => x.rev()),
  s("bd*3 <bd bd~>")
    .gain(0.19)
    .room(0.32)
    .cutoff(1220)
    .echo(0.11,0.25,0.13)
)

$: s("hh cp <cp [cp~]> hh").slow(3)
  .gain(0.17)
  .pan(perlin.range(0.05,0.92).slow(5))
  .cutoff(3890)
  .hpf(sine.range(580, 840).slow(13))

$: stack(
  note("<c4 e4 g4 eb4 d4 f4 eb4>").slow(7)
    .sound("supersaw")
    .gain(0.21)
    .pan(sine.range(0.19,0.89).slow(4))
    .cutoff(3750)
    .tremolo(0.38),
  note("a3 <d4~ f4> g3").slow(10)
    .sound("supersaw")
    .gain(0.13)
    .tremolo(0.71)
    .lpf(1100)
)

$: note("g4 d4 [f4~] <e4 a4>").slow(6)
  .sound("piano")
  .gain(0.17)
  .room(0.37)
  .release(1)
  .pan(sine.range(0.12,0.83).slow(8))
  .every(4, x => x.rev())

$: stack(
  note("<eb3~ f3~ c3> <bb2 d3> g2 gb2").slow(8)
    .sound("sine")
    .gain(0.14)
    .cutoff(perlin.range(1080, 3490).slow(10))
    .room(0.31)
    .every(3, x => x.juxBy(0.50, y => y.rev())),
  note("f2~ c2 g2~ d2 <bb1~ d2>").slow(12)
    .sound("square")
    .gain(0.08)
    .cutoff(1460)
    .room(0.19)
)

$: note("<c5 eb4 g4~> <d5 a4>").slow(8)
  .sound("pulse")
  .gain(0.13)
  .pan(perlin.range(0.18,0.81).slow(7))
  .lpf(2470)
  .every(6, x => x.jux(y => y.rev()))