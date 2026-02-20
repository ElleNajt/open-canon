// Goldberg Variations - Ground Bass (BWV 988) - Evolved Personality

setcps(89/60/4)

$: stack(
  note("g3 gb3 e3 d3 b2 c3 d3 g2").slow(2)
    .sound("triangle")
    .gain(0.34)
    .lpf(sine.range(400,1800).slow(13))
    .lpq(5),

  note("g4 gb4 e4 d4 b3 c4 d4 g3").slow(4)
    .sound("piano")
    .gain(0.15)
    .hpf(330)
    .every(4, x => x.rev())
    .pan(perlin.range(0.09, 0.89).slow(8))
)

$: stack(
  s("hh*4 [oh cp] hh*3").slow(4)
    .gain(0.12)
    .crush(5)
    .delay(rand.range(0.09,0.23).slow(5)),

  s("cb*2 lt ht").slow(6)
    .gain(0.08)
    .delay(0.18)
    .pan(perlin.range(0.13,0.82).slow(6))
)

$: note("<g5 e5 d5 b4> <g4 gb4 e4 d4>").slow(8)
  .sound("supersaw")
  .gain(0.15)
  .every(4, x => x.rev())
  .pan(sine.range(0.21, 0.77).slow(12))
  .echo(2, 0.21, 0.23)

$: note("eb3 ~ ab3 ~ f3 ~ bb2 ~").slow(11)
  .sound("sine")
  .gain(0.08)
  .lpf(cosine.range(700,1200).slow(23))
  .lpq(6)
  .vowel("<a e o u>".slow(8))

$: stack(
  s("supersaw*2 pulse triangle sawtooth").slow(5)
    .gain(0.13)
    .lpf(rand.range(900,1700).slow(6))
    .resonance(rand.range(4,9).slow(7))
    .pan(perlin.range(0.11, 0.91).slow(8)),
  s("[rd cr]").slow(7)
    .gain(0.09)
    .delay(0.14)
    .pan(sine.range(0.07, 0.84).slow(10))
)

$: note("c5 ~ eb4 g4 ~ <c5 e5> ~ bb4 f4 ~").slow(6)
  .sound("square")
  .gain(0.14)
  .every(2, x => x.juxBy(0.8, y => y.rev()))
  .pan(perlin.range(0.05,0.95).slow(7))
  .echo(2, 0.19, 0.27)