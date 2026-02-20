// Goldberg Variations - Ground Bass (BWV 988) - Evolved Personality

setcps(91/60/4)

$: stack(
  note("g3 gb3 e3 d3 b2 c3 d3 g2").slow(2)
    .sound("triangle")
    .gain(0.36)
    .lpf(sine.range(800,1420).slow(13))
    .lpq(7.3)
    .pan(perlin.range(0.22, 0.74).slow(9)),

  note("g4 gb4 e4 d4 b3 c4 d4 g3").slow(4)
    .sound("piano")
    .gain(0.14)
    .hpf(570)
    .every(3, x => x.rev())
    .delay(0.15)
)

$: stack(
  s("hh*2 [oh cp] hh*2 [oh ~] [cp ~]").slow(4)
    .gain(0.13)
    .crush(4)
    .delay(rand.range(0.13,0.17).slow(6)),

  s("cb lt ht").slow(7)
    .gain(0.08)
    .pan(sine.range(0.22,0.91).slow(6))
    .echo(2, 0.13, 0.22)
)

$: note("<g5 e5 d5 b4> <g4 gb4 e4 d4>").slow(7)
  .sound("supersaw")
  .gain(0.19)
  .every(2, x => x.jux(y => y.rev()))
  .pan(sine.range(0.19, 0.82).slow(10))
  .echo(2, 0.16, 0.23)
  .lpf(1900)

$: note("eb3 ~ ab3 ~ f3 ~ bb2 ~").slow(11)
  .sound("sine")
  .gain(0.13)
  .lpf(cosine.range(940,1280).slow(15))
  .lpq(7.7)
  .pan(sine.range(0.16,0.71).slow(11))

$: stack(
  s("supersaw pulse triangle sawtooth").slow(8)
    .gain(0.15)
    .lpf(rand.range(1200,1550).slow(7))
    .resonance(rand.range(6.7, 9).slow(7))
    .pan(perlin.range(0.23, 0.91).slow(9)),
  s("[rd cr]").slow(5)
    .gain(0.10)
    .delay(0.13)
    .pan(sine.range(0.18, 0.74).slow(8))
)

$: note("c5 ~ eb4 g4 ~ <c5 e5> ~ bb4 f4 ~").slow(4)
  .sound("square")
  .gain(0.16)
  .every(2, x => x.juxBy(0.5, y => y.rev()))
  .pan(perlin.range(0.25,0.87).slow(10))
  .room(0.28)