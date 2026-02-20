setcps(93/60/4)

$: stack(
  note("g3 gb3 e3 <d3 b2> c3 d3 g2").slow(3)
    .sound("triangle")
    .gain(0.39)
    .lpf(sine.range(740, 3300).slow(11))
    .lpq(6.4)
    .every(5, x => x.rev()),
  s("bd*3 <bd bd~>")
    .gain(0.19)
    .room(0.32)
    .cutoff(1050)
    .echo(0.09,0.23,0.13)
)

$: s("hh cp <cp [cp~]> hh").slow(3)
  .gain(0.17)
  .pan(perlin.range(0.09,0.99).slow(7))
  .cutoff(3890)
  .hpf(sine.range(550, 924).slow(12))

$: stack(
  note("<c4 e4 g4 eb4 d4 f4 eb4>").slow(7)
    .sound("supersaw")
    .gain(0.21)
    .pan(sine.range(0.09,0.99).slow(5))
    .cutoff(3750)
    .tremolo(0.33),
  note("a3 <d4~ f4> g3").slow(11)
    .sound("supersaw")
    .gain(0.13)
    .tremolo(0.66)
    .lpf(970)
)

$: note("g4 d4 [f4~] <e4 a4>").slow(5)
  .sound("piano")
  .gain(0.15)
  .room(0.45)
  .release(1)
  .pan(sine.range(0.2,0.9).slow(6))

$: stack(
  note("<eb3~ f3~ c3> <bb2 d3> g2 gb2").slow(8)
    .sound("sine")
    .gain(0.14)
    .cutoff(perlin.range(920, 3720).slow(8))
    .room(0.27)
    .every(3, x => x.juxBy(0.44, y => y.rev())),
  note("f2~ c2 g2~ d2 <bb1~ d2>").slow(16)
    .sound("square")
    .gain(0.08)
    .cutoff(1220)
    .room(0.13)
    .compressor()
)

$: note("c5 eb4 g4~ <d5 a4>").slow(10)
  .sound("pulse")
  .gain(0.13)
  .pan(perlin.range(0.15,0.85).slow(9))
  .lpf(2320)
  .attack(0.08)