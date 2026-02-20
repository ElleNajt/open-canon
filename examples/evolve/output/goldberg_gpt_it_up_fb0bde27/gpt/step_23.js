setcps(93/60/4)

$: stack(
  note("g3 gb3 e3 <d3 b2> c3 d3 g2").slow(3)
    .sound("triangle")
    .gain(0.41)
    .lpf(sine.range(950, 2300).slow(8))
    .lpq(7)
    .every(6, x => x.rev()),
  s("bd*3 <bd bd~>")
    .gain(0.17)
    .room(0.18)
    .cutoff(710)
)

$: s("hh cp <cp [cp~]> hh").slow(2)
  .gain(0.13)
  .pan(perlin.range(0.1,0.72).slow(3))
  .cutoff(3400)
  .every(4, x => x.rev())
  .every(3, x => x.hpf(420))

$: stack(
  note("<c4 e4 g4 eb4 d4 f4 eb4>").slow(4)
    .sound("supersaw")
    .gain(0.20)
    .pan(sine.range(0.13,0.96).slow(9))
    .cutoff(2100)
    .tremolo(0.17),
  note("a3 <d4~ f4> g3").slow(7)
    .sound("supersaw")
    .gain(0.12)
    .lpf(900)
    .tremolo(0.19)
)

$: note("g4 d4 [f4~] <e4 a4>").slow(6)
  .sound("piano")
  .gain(0.16)
  .release(1)
  .pan(sine.range(0.2,0.8).slow(8))
  .room(0.25)
  .every(3, x => x.rev())

$: stack(
  s("<cr*2 ~ [ht lt]>*2 <cb [cb~]>").slow(4)
    .gain(0.14)
    .cutoff(perlin.range(2100,3500).slow(8))
    .pan(sine.range(0.28,0.79).slow(6))
    .echo(0.19,0.185,0.26),
  s("rim <rim~> [rim]~").slow(6)
    .gain(0.08)
    .pan(perlin.range(0.16,0.71).slow(5))
    .cutoff(1650)
)