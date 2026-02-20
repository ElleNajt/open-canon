setcps(85/60/4)

$: stack(
  note("g3 gb3 e3 d3 b2 c3 d3 g2").slow(3)
    .sound("triangle")
    .gain(0.44)
    .room(0.17)
    .lpf(sine.range(900, 1750).slow(6))
    .lpq(4.5),
  s("bd*3 <bd bd~>")
    .gain(0.15)
    .room(0.20)
    .cutoff(710)
    .degradeBy(0.13)
)

$: s("hh cp <cp [cp~]> hh").slow(2)
  .gain(0.13)
  .pan(perlin.range(0.1,0.72).slow(3))
  .cutoff(3500)
  .every(3, x => x.rev())
  .room(0.11)

$: stack(
  note("<c4 e4 g4 eb4 d4 f4 eb4>").slow(5)
    .sound("supersaw")
    .gain(0.21)
    .pan(sine.range(0.16,0.91).slow(7))
    .tremolo(0.22)
    .cutoff(1550),
  note("a3 <d4~ f4> g3").slow(8)
    .sound("supersaw")
    .gain(0.09)
    .pan(perlin.range(0.70,0.24).slow(7))
    .every(2, x => x.palindrome())
    .lpf(900)
)

$: note("g4 d4 [f4~] <e4 a4>").slow(5)
  .sound("piano")
  .gain(0.16)
  .room(0.11)
  .release(1)
  .pan(sine.range(0.1,0.85).slow(5))
  .degradeBy(0.09)

$: stack(
  s("<cr*2 ~ [ht lt]>*2 <cb [cb~]>").slow(3)
    .gain(0.10)
    .cutoff(perlin.range(2160,3500).slow(5))
    .pan(sine.range(0.35,0.78).slow(6))
    .room(0.13)
    .hcutoff(300),
  s("rim <rim~> [rim]~").slow(7)
    .gain(0.08)
    .cutoff(1900)
    .pan(perlin.range(0.24,0.65).slow(4))
)