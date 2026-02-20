setcps(93/60/4)

$: stack(
  note("g3 gb3 e3 <d3 b2> c3 d3 g2").slow(3)
    .sound("triangle")
    .gain(0.42)
    .lpf(sine.range(1330, 3400).slow(7))
    .lpq(6.5)
    .every(6, x => x.rev())
    .sometimes(x => x.hpf(400)),
  s("bd*3 <bd bd~>")
    .gain(0.18)
    .room(0.2)
    .cutoff(670)
)

$: s("hh cp <cp [cp~]> hh").slow(2)
  .gain(0.14)
  .pan(perlin.range(0.16,0.67).slow(5))
  .cutoff(2890)
  .every(4, x => x.rev())
  .hpf(sine.range(410, 570).slow(7))

$: stack(
  note("<c4 e4 g4 eb4 d4 f4 eb4>").slow(6)
    .sound("supersaw")
    .gain(0.20)
    .pan(sine.range(0.08,0.84).slow(5))
    .cutoff(3160)
    .tremolo(0.27),
  note("a3 <d4~ f4> g3").slow(7)
    .sound("supersaw")
    .gain(0.13)
    .lpf(1210)
    .tremolo(0.33)
)

$: note("g4 d4 [f4~] <e4 a4>").slow(4)
  .sound("piano")
  .gain(0.16)
  .release(1)
  .room(0.43)
  .every(6, x => x.pan(rand.range(0.21,0.81)))
  .every(3, x => x.rev())

$: stack(
  s("<cr*2 ~ [ht lt]>*2 <cb [cb~]>").slow(4)
    .gain(0.13)
    .cutoff(perlin.range(1750,4250).slow(9))
    .echo(0.19,0.148,0.21)
    .pan(sine.range(0.12,0.95).slow(10)),
  s("rim <rim~> [rim]~").slow(5)
    .gain(0.12)
    .cutoff(1420)
)

$: s("sine square triangle").slow(10)
  .gain(0.09)
  .pan(perlin.range(0.29,0.81).slow(8))
  .tremolo(sine.range(0.18,0.38).slow(13))
  .cutoff(sine.range(2400, 6500).slow(6))