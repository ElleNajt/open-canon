setcps(89/60/4)

$: stack(
  note("g3 gb3 e3 d3 b2 c3 d3 g2").slow(3)
    .sound("triangle")
    .gain(0.41)
    .lpf(sine.range(950, 2300).slow(7))
    .lpq(4.7),
  s("bd*3 <bd bd~>")
    .gain(0.17)
    .room(0.21)
    .cutoff(750)
)

$: s("hh cp <cp [cp~]> hh").slow(2)
  .gain(0.13)
  .pan(perlin.range(0.1,0.72).slow(3))
  .cutoff(3400)
  .every(4, x => x.rev())

$: stack(
  note("<c4 e4 g4 eb4 d4 f4 eb4>").slow(4)
    .sound("supersaw")
    .gain(0.20)
    .pan(sine.range(0.17,0.93).slow(11))
    .cutoff(2100)
    .tremolo(0.17),
  note("a3 <d4~ f4> g3").slow(7)
    .sound("supersaw")
    .gain(0.12)
    .pan(perlin.range(0.56,0.34).slow(6))
    .lpf(900)
)

$: note("g4 d4 [f4~] <e4 a4>").slow(6)
  .sound("piano")
  .gain(0.16)
  .release(1)
  .pan(sine.range(0.2,0.8).slow(8))
  .room(0.28)

$: stack(
  s("<cr*2 ~ [ht lt]>*2 <cb [cb~]>").slow(4)
    .gain(0.14)
    .cutoff(perlin.range(2100,3500).slow(8))
    .pan(sine.range(0.28,0.79).slow(8)),
  s("rim <rim~> [rim]~").slow(6)
    .gain(0.08)
    .cutoff(1650)
    .pan(perlin.range(0.16,0.71).slow(5))
)

$: s("sine [triangle~] <pulse sawtooth>").slow(6)
  .gain(0.11)
  .cutoff(sine.range(530, 3600).slow(9))
  .pan(rand.range(0.04, 0.98).slow(7))
  .every(3, x => x.rev())