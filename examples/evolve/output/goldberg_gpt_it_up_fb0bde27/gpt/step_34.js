setcps(93/60/4)

$: stack(
  note("g3 gb3 e3 <d3 b2> c3 d3 g2").slow(3)
    .sound("triangle")
    .gain(0.43)
    .lpf(sine.range(1330, 3400).slow(7))
    .lpq(4.2)
    .every(5, x => x.rev()),
  s("bd*3 <bd bd~>")
    .gain(0.19)
    .room(0.21)
    .cutoff(670)
    .every(6, x => x.echo(0.17,0.13,0.19))
)

$: s("hh cp <cp [cp~]> hh").slow(2)
  .gain(0.15)
  .pan(perlin.range(0.16,0.67).slow(5))
  .cutoff(3190)
  .every(4, x => x.rev())
  .hpf(sine.range(410, 740).slow(8))

$: stack(
  note("<c4 e4 g4 eb4 d4 f4 eb4>").slow(6)
    .sound("supersaw")
    .gain(0.21)
    .pan(sine.range(0.08,0.84).slow(5))
    .cutoff(3160)
    .echo(0.15,0.2,0.13),
  note("a3 <d4~ f4> g3").slow(7)
    .sound("supersaw")
    .gain(0.14)
    .lpf(1290)
    .tremolo(0.33)
)

$: note("g4 d4 [f4~] <e4 a4>").slow(4)
  .sound("piano")
  .gain(0.18)
  .release(1)
  .room(0.43)
  .every(6, x => x.pan(rand.range(0.21,0.81)))
  .every(3, x => x.rev())

$: stack(
  s("<cr*2 ~ [ht lt]>*2 <cb [cb~]>").slow(4)
    .gain(0.13)
    .cutoff(perlin.range(1750,4250).slow(9))
    .pan(sine.range(0.12,0.95).slow(10)),
  s("rim <rim~> [rim]~").slow(6)
    .gain(0.13)
    .cutoff(1270)
    .room(0.24)
)

$: s("sine square triangle").slow(12)
  .gain(0.11)
  .pan(perlin.range(0.24,0.93).slow(7))
  .tremolo(sine.range(0.26,0.38).slow(15))
  .cutoff(sine.range(2400, 7200).slow(8))
  .every(8, x => x.rev())