// Goldberg Variations - Ground Bass (BWV 988) - Evolved Personality

setcps(89/60/4)

$: stack(
  note("g3 gb3 e3 d3 b2 c3 d3 g2").slow(2)
    .sound("triangle")
    .gain(0.36)
    .lpf(sine.range(620,1430).slow(19))
    .lpq(7)
    .pan(perlin.range(0.21, 0.74).slow(9)),

  note("g4 gb4 e4 d4 b3 c4 d4 g3").slow(4)
    .sound("piano")
    .gain(0.13)
    .hpf(480)
    .every(4, x => x.rev())
    .delay(0.11)
)

$: stack(
  s("hh*2 [oh cp] hh*2 ~ [cp oh]").slow(4)
    .gain(0.12)
    .crush(6)
    .delay(rand.range(0.10,0.18).slow(7)),

  s("cb lt ht").slow(8)
    .gain(0.08)
    .pan(perlin.range(0.18,0.88).slow(6))
    .echo(2, 0.11, 0.14)
)

$: note("<g5 e5 d5 b4> <g4 gb4 e4 d4>").slow(8)
  .sound("supersaw")
  .gain(0.19)
  .every(3, x => x.jux(y => y.rev()))
  .pan(sine.range(0.10, 0.87).slow(10))
  .echo(2, 0.16, 0.18)
  .lpf(1950)

$: note("eb3 ~ ab3 ~ f3 ~ bb2 ~").slow(12)
  .sound("sine")
  .gain(0.10)
  .lpf(cosine.range(700,1200).slow(13))
  .lpq(6)
  .pan(sine.range(0.09,0.73).slow(15))

$: stack(
  s("supersaw pulse triangle sawtooth").slow(6)
    .gain(0.15)
    .lpf(rand.range(990,1490).slow(6))
    .resonance(rand.range(5, 7.5).slow(8))
    .pan(perlin.range(0.21, 0.91).slow(10)),
  s("[rd cr]").slow(6)
    .gain(0.10)
    .delay(0.13)
    .pan(sine.range(0.06, 0.75).slow(8))
)

$: note("c5 ~ eb4 g4 ~ <c5 e5> ~ bb4 f4 ~").slow(5)
  .sound("square")
  .gain(0.14)
  .every(2, x => x.juxBy(0.8, y => y.rev()))
  .pan(perlin.range(0.10,0.91).slow(9))
  .echo(2, 0.14, 0.14)