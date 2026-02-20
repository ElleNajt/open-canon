// Goldberg Variations - Ground Bass (BWV 988) - Evolved Personality

setcps(89/60/4)

$: stack(
  note("g3 gb3 e3 d3 b2 c3 d3 g2").slow(2)
    .sound("triangle")
    .gain(0.34)
    .room(0.22)
    .lpf(sine.range(350,2000).slow(7))
    .lpq(6),

  note("g4 gb4 e4 d4 b3 c4 d4 g3").slow(4)
    .sound("piano")
    .gain(0.15)
    .hpf(330)
    .every(4, x => x.rev())
    .pan(perlin.range(0.09, 0.89).slow(8))
)

$: s("hh*4 [oh cp] hh*3").slow(4)
  .gain(0.12)
  .delay(rand.range(0.09,0.23).slow(5))
  .crush(5)
  .pan(sine.range(0.11,0.86).slow(9))

$: note("<g5 e5 d5 b4> <g4 gb4 e4 d4>").slow(8)
  .sound("supersaw")
  .gain(0.15)
  .hpf(420)
  .every(2, x => x.rev())
  .room(0.31)
  .pan(sine.range(0.21, 0.77).slow(12))
  .tremolo(0.40)

$: note("eb3 ~ ab3 ~ f3 ~ bb2 ~").slow(14)
  .sound("sine")
  .gain(0.08)
  .lpf(cosine.range(700,1100).slow(29))
  .vowel("a e o u")
  .pan(perlin.range(0.02,0.96).slow(16))

$: stack(
  s("supersaw*2 pulse triangle sawtooth").slow(3)
    .gain(0.13)
    .lpf(rand.range(700,1900).slow(4))
    .resonance(rand.range(3,7).slow(6))
    .pan(perlin.range(0.11, 0.91).slow(8)),
  s("[rd cr]").slow(7)
    .gain(0.09)
    .delay(0.14)
    .room(0.19)
    .pan(sine.range(0.07, 0.84).slow(10))
)

$: note("c5 ~ eb4 g4 ~ <c5 e5> ~ bb4 f4 ~").slow(7)
  .sound("square")
  .gain(0.13)
  .vowel("a o e u i")
  .every(3, x => x.rev())
  .pan(perlin.range(0.05,0.95).slow(7))