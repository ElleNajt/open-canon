setcps(89/60/4)

$: stack(
  note("g3 gb3 e3 d3 b2 c3 d3 g2").slow(3)
    .sound("triangle")
    .gain(0.44)
    .room(0.16)
    .lpf(sine.range(950, 1800).slow(5))
    .lpq(5.8),
  s("bd*3 <bd bd~>")
    .gain(0.18)
    .room(0.19)
    .cutoff(750)
    .degradeBy(0.06)
)

$: s("hh cp <cp [cp~]> hh").slow(2)
  .gain(0.14)
  .pan(perlin.range(0.1,0.72).slow(3))
  .cutoff(3400)
  .every(4, x => x.rev())
  .room(0.11)

$: stack(
  note("<c4 e4 g4 eb4 d4 f4 eb4>").slow(5)
    .sound("supersaw")
    .gain(0.18)
    .pan(sine.range(0.10,0.86).slow(9))
    .cutoff(1750)
    .tremolo(0.23),
  note("a3 <d4~ f4> g3").slow(8)
    .sound("supersaw")
    .gain(0.09)
    .pan(perlin.range(0.70,0.24).slow(7))
    .every(2, x => x.palindrome())
    .lpf(830)
)

$: note("g4 d4 [f4~] <e4 a4>").slow(6)
  .sound("piano")
  .gain(0.14)
  .room(0.13)
  .release(1)
  .pan(sine.range(0.2,0.8).slow(8))
  .degradeBy(0.09)

$: stack(
  s("<cr*2 ~ [ht lt]>*2 <cb [cb~]>").slow(3)
    .gain(0.13)
    .cutoff(perlin.range(2300,3300).slow(6))
    .pan(sine.range(0.34,0.75).slow(6)),
  s("rim <rim~> [rim]~").slow(8)
    .gain(0.08)
    .cutoff(1750)
    .pan(perlin.range(0.18,0.78).slow(5))
)

$: s("sine square [pulse~] <triangle sawtooth>").slow(7)
  .gain(0.07)
  .pan(sine.range(0.09, 0.92).slow(10))
  .cutoff(sine.range(900, 2800).slow(12))
  .room(0.17)