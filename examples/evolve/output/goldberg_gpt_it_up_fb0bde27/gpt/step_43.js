setcps(93/60/4)

$: stack(
  note("g3 gb3 e3 <d3 b2> c3 d3 g2").slow(3)
    .sound("triangle")
    .gain(0.39)
    .lpf(sine.range(740, 3300).slow(11))
    .lpq(5.8)
    .every(5, x => x.rev())
    .every(4, x => x.pan(sine.range(0.12,0.75).slow(8))),
  s("bd*3 <bd bd~>")
    .gain(0.19)
    .room(0.32)
    .cutoff(1050)
)

$: s("hh cp <cp [cp~]> hh").slow(3)
  .gain(0.17)
  .pan(perlin.range(0.09,0.99).slow(7))
  .cutoff(3890)
  .hpf(sine.range(550, 924).slow(12))

$: stack(
  note("<c4 e4 g4 eb4 d4 f4 eb4>").slow(7)
    .sound("supersaw")
    .gain(0.22)
    .pan(sine.range(0.09,0.99).slow(5))
    .cutoff(3750)
    .echo(0.07,0.18,0.14),
  note("a3 <d4~ f4> g3").slow(11)
    .sound("supersaw")
    .gain(0.11)
    .tremolo(0.71)
    .lpf(1170)
)

$: note("g4 d4 [f4~] <e4 a4>").slow(5)
  .sound("piano")
  .gain(0.15)
  .room(0.45)
  .release(1)
  .every(3, x => x.pan(rand.range(0.05,0.97)))
  .every(6, x => x.jux(x=>x.rev()))

$: stack(
  note("<eb3~ f3~ c3> <bb2 d3> g2 gb2").slow(8)
    .sound("sine")
    .gain(0.14)
    .cutoff(perlin.range(920, 3720).slow(8))
    .room(0.27)
    .every(3, x => x.juxBy(0.44, y => y.rev())),
  note("f2~ c2 g2~ d2 <bb1~ d2>").slow(16)
    .sound("square")
    .gain(0.07)
    .cutoff(1220)
    .room(0.16)
)

$: note("c5 eb4 g4~ <d5 a4>").slow(10)
  .sound("pulse")
  .gain(0.13)
  .pan(perlin.range(0.15,0.85).slow(9))
  .lpf(2750)
  .attack(0.08)