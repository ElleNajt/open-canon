setcps(93/60/4)

$: stack(
  note("g3 gb3 e3 <d3 b2> c3 d3 g2").slow(3)
    .sound("triangle")
    .gain(0.41)
    .lpf(sine.range(1050, 1900).slow(6))
    .lpq(4.8)
    .every(6, x => x.rev())
    .sometimes(x => x.hpf(350)),
  s("bd*3 <bd bd~>")
    .gain(0.17)
    .room(0.21)
    .cutoff(670)
)

$: s("hh cp <cp [cp~]> hh").slow(2)
  .gain(0.13)
  .pan(perlin.range(0.1,0.72).slow(3))
  .cutoff(2860)
  .every(4, x => x.rev())
  .every(3, x => x.hpf(470))

$: stack(
  note("<c4 e4 g4 eb4 d4 f4 eb4>").slow(4)
    .sound("supersaw")
    .gain(0.20)
    .pan(sine.range(0.13,0.96).slow(9))
    .cutoff(2100)
    .tremolo(0.23),
  note("a3 <d4~ f4> g3").slow(7)
    .sound("supersaw")
    .gain(0.12)
    .lpf(740)
    .tremolo(0.16)
)

$: note("g4 d4 [f4~] <e4 a4>").slow(6)
  .sound("piano")
  .gain(0.16)
  .release(1)
  .pan(sine.range(0.2,0.8).slow(8))
  .every(3, x => x.rev())
  .room(0.29)

$: stack(
  s("<cr*2 ~ [ht lt]>*2 <cb [cb~]>").slow(4)
    .gain(0.14)
    .cutoff(perlin.range(2200,3700).slow(7))
    .pan(sine.range(0.28,0.79).slow(4))
    .echo(0.18,0.183,0.29),
  s("rim <rim~> [rim]~").slow(5)
    .gain(0.08)
    .pan(perlin.range(0.16,0.71).slow(6))
    .cutoff(1390)
)

$: s("sine triangle").slow(10)
  .gain(0.09)
  .pan(sine.range(0.07,0.93).slow(13))
  .cutoff(sine.range(1200,7000).slow(16))
  .room(0.44)