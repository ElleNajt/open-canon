setcps(85/60/4)

$: stack(
  note("g3 gb3 e3 d3 b2 c3 d3 g2").slow(3)
    .sound("triangle")
    .gain(0.42)
    .room(0.16)
    .lpf(sine.range(950, 1700).slow(6))
    .lpq(6),
  s("bd*3 <bd bd~>")
    .gain(0.16)
    .room(0.21)
    .cutoff(710)
    .degradeBy(0.07)
)

$: s("hh cp <cp [cp~]> hh").slow(2)
  .gain(0.13)
  .pan(perlin.range(0.1,0.72).slow(2))
  .cutoff(3300)
  .every(4, x => x.rev())
  .room(0.13)

$: stack(
  note("<c4 e4 g4 eb4 d4 f4 eb4>").slow(5)
    .sound("supersaw")
    .gain(0.19)
    .pan(sine.range(0.10,0.86).slow(8))
    .cutoff(1700)
    .tremolo(0.28),
  note("a3 <d4~ f4> g3").slow(9)
    .sound("supersaw")
    .gain(0.08)
    .pan(perlin.range(0.70,0.24).slow(9))
    .every(2, x => x.palindrome())
    .lpf(820)
)

$: note("g4 d4 [f4~] <e4 a4>").slow(6)
  .sound("piano")
  .gain(0.13)
  .room(0.14)
  .release(1)
  .pan(sine.range(0.2,0.8).slow(7))
  .degradeBy(0.08)

$: stack(
  s("<cr*2 ~ [ht lt]>*2 <cb [cb~]>").slow(3)
    .gain(0.12)
    .cutoff(perlin.range(2200,3400).slow(6))
    .pan(sine.range(0.34,0.75).slow(5))
    .room(0.14),
  s("rim <rim~> [rim]~").slow(8)
    .gain(0.07)
    .cutoff(1700)
    .pan(perlin.range(0.18,0.78).slow(5))
)