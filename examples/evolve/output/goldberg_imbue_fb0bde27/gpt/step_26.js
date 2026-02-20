setcps(93/60/4)

$: stack(
  note("g3 gb3 e3 <d3 b2> c3 d3 g2").slow(3)
    .sound("triangle")
    .gain(0.41)
    .lpf(sine.range(1050, 2022).slow(6))
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
  note("<c4 e4 g4 eb4 d4 f4 eb4>").slow(5)
    .sound("supersaw")
    .gain(0.19)
    .pan(sine.range(0.13,0.96).slow(7))
    .cutoff(2430)
    .tremolo(0.17),
  note("a3 <d4~ f4> g3").slow(8)
    .sound("supersaw")
    .gain(0.11)
    .lpf(970)
    .tremolo(0.21)
)

$: note("g4 d4 [f4~] <e4 a4>").slow(6)
  .sound("piano")
  .gain(0.19)
  .release(1)
  .room(0.41)
  .every(6, x => x.pan(rand.range(0.1,0.93)))
  .every(3, x => x.rev())

$: stack(
  s("<cr*2 ~ [ht lt]>*2 <cb [cb~]>").slow(3)
    .gain(0.14)
    .cutoff(perlin.range(1500,4200).slow(7))
    .echo(0.18,0.183,0.29)
    .pan(sine.range(0.21,0.89).slow(6)),
  s("rim <rim~> [rim]~").slow(5)
    .gain(0.10)
    .pan(perlin.range(0.08,0.91).slow(8))
    .cutoff(1550)
)

$: s("sine triangle").slow(8)
  .gain(0.12)
  .pan(sine.range(0.07,0.93).slow(13))
  .cutoff(sine.range(900,8000).slow(11))
  .room(0.49)