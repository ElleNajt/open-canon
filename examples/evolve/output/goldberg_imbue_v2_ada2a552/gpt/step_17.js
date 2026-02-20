// Goldberg Variations - Ground Bass (BWV 988) - Evolved Personality

setcps(82/60/4)

$: stack(
  note("g3 gb3 e3 d3 b2 c3 d3 g2").slow(2)
    .sound("triangle")
    .gain(0.33)
    .room(0.22)
    .lpf(sine.range(350,1700).slow(9)),

  note("g4 gb4 e4 d4 b3 c4 d4 g3").slow(4)
    .sound("piano")
    .gain(0.14)
    .hpf(330)
    .pan(perlin.range(0.15, 0.87).slow(10))
)

$: s("hh*4 [oh cp] hh*3").slow(4)
  .gain(0.12)
  .delay(rand.range(0.09,0.23).slow(5))
  .pan(sine.range(0.13,0.86).slow(11))
  .crush(5)

$: note("<g5 e5 d5 b4> <g4 gb4 e4 d4>").slow(8)
  .sound("supersaw")
  .gain(0.14)
  .hpf(420)
  .every(2, x => x.rev())
  .room(0.29)
  .pan(sine.range(0.16, 0.83).slow(14))

$: note("eb3 ~ ab3 ~ f3 ~ bb2 ~").slow(16)
  .sound("sine")
  .gain(0.078)
  .lpf(cosine.range(700,1100).slow(32))
  .room(0.39)
  .pan(perlin.range(0.02,0.98).slow(20))

$: stack(
  s("supersaw*2 pulse [triangle] pulse sawtooth").slow(4)
    .gain(0.13)
    .lpf(rand.range(700,1600).slow(6))
    .resonance(rand.range(2,5).slow(5))
    .pan(perlin.range(0.19, 0.85).slow(9)),
  s("[rd cr]").slow(8)
    .gain(0.09)
    .delay(0.11)
    .room(0.19)
    .pan(sine.range(0.11, 0.78).slow(14))
)

$: note("c5 ~ eb4 g4 ~ <c5 e5> ~ bb4 f4 ~").slow(8)
  .sound("square")
  .gain(0.12)
  .every(3, x => x.rev())
  .pan(perlin.range(0.08,0.91).slow(8))
  .vowel("a o e u i")