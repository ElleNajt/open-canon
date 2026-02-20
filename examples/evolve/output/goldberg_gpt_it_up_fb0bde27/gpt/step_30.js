setcps(93/60/4)

$: stack(
  note("g3 gb3 e3 <d3 b2> c3 d3 g2").slow(3)
    .sound("triangle")
    .gain(0.41)
    .lpf(sine.range(1550, 3080).slow(5))
    .lpq(7.4)
    .every(6, x => x.rev())
    .sometimes(x => x.hpf(420)),
  s("bd*3 <bd bd~>")
    .gain(0.17)
    .room(0.21)
    .cutoff(650)
)

$: s("hh cp <cp [cp~]> hh").slow(2)
  .gain(0.13)
  .pan(perlin.range(0.12,0.75).slow(5))
  .cutoff(2860)
  .every(4, x => x.rev())
  .hpf(sine.range(390, 630).slow(9))

$: stack(
  note("<c4 e4 g4 eb4 d4 f4 eb4>").slow(5)
    .sound("supersaw")
    .gain(0.21)
    .pan(sine.range(0.15,0.98).slow(3))
    .cutoff(2950)
    .tremolo(0.23),
  note("a3 <d4~ f4> g3").slow(8)
    .sound("supersaw")
    .gain(0.11)
    .lpf(1190)
    .tremolo(0.31)
)

$: note("g4 d4 [f4~] <e4 a4>").slow(4)
  .sound("piano")
  .gain(0.19)
  .release(1)
  .room(0.46)
  .every(6, x => x.pan(rand.range(0.12,0.93)))
  .every(3, x => x.rev())

$: stack(
  s("<cr*2 ~ [ht lt]>*2 <cb [cb~]>").slow(3)
    .gain(0.14)
    .cutoff(perlin.range(1450,4200).slow(11))
    .echo(0.18,0.152,0.22)
    .pan(sine.range(0.18,0.92).slow(8)),
  s("rim <rim~> [rim]~").slow(5)
    .gain(0.11)
    .cutoff(1390)
)

$: s("sine triangle").slow(12)
  .gain(0.13)
  .cutoff(sine.range(1100,6800).slow(7))
  .tremolo(sine.range(0.18,0.36).slow(9))
  .pan(perlin.range(0.19,0.81).slow(14))
  .degradeBy(0.13)