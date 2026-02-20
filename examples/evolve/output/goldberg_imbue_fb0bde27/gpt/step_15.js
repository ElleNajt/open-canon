setcps(81/60/4)

$: stack(
  note("g3 gb3 e3 d3 b2 c3 d3 g2").slow(2)
    .sound("triangle")
    .gain(0.44)
    .room(0.17)
    .lpf(sine.range(850, 1850).slow(7)),
  s("bd*3 <bd bd~>")
    .gain(0.15)
    .room(0.20)
    .cutoff(620)
)

$: s("hh cp <cp [cp~]> hh").slow(2)
  .gain(0.13)
  .pan(perlin.range(0.22,0.82).slow(4))
  .cutoff(3900)
  .degradeBy(0.18)
  .every(3, x => x.rev())

$: stack(
  note("<c4 e4 g4 eb4 d4 f4 eb4>").slow(4)
    .sound("supersaw")
    .gain(0.21)
    .pan(sine.range(0.08,0.91).slow(9))
    .lpf(1750)
    .tremolo(0.18),
  note("a3 <d4~ f4> g3").slow(8)
    .sound("supersaw")
    .gain(0.09)
    .pan(perlin.range(0.7,0.24).slow(7))
    .every(2, x => x.palindrome())
)

$: note("g4 d4 [f4~] <e4 a4>").slow(6)
  .sound("piano")
  .gain(0.16)
  .room(0.11)
  .release(1.1)
  .pan(sine.range(0.1,0.85).slow(6))

$: stack(
  note("c5 <eb5 d5>").slow(16)
    .sound("sine")
    .gain(0.13)
    .room(0.21)
    .release(2.5)
    .pan(perlin.range(0.14,0.89).slow(7))
    .tremolo(0.11),
  note("g4 c5 ~ e5").slow(14)
    .sound("triangle")
    .gain(0.07)
    .release(2.1)
    .pan(sine.range(0.7,0.3).slow(13))
    .tremolo(0.17)
)

$: stack(
  s("<cr*2 ~ [ht lt]>*2 <cb [cb~]>").slow(4)
    .gain(0.09)
    .cutoff(perlin.range(2160,3600).slow(6))
    .pan(sine.range(0.42,0.78).slow(8))
    .room(0.13),
  s("rim <rim~> [rim]~").slow(8)
    .gain(0.08)
    .cutoff(2100)
    .pan(perlin.range(0.35,0.65).slow(5))
)