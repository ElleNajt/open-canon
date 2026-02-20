// Goldberg Variations - Ground Bass (BWV 988) - Evolved Personality

setcps(91/60/4)

$: stack(
  note("g3 gb3 e3 d3 b2 c3 d3 g2").slow(2)
    .sound("triangle")
    .gain(0.34)
    .lpf(sine.range(700,1350).slow(15))
    .lpq(6.8)
    .pan(perlin.range(0.18, 0.82).slow(8)),

  note("g4 gb4 e4 d4 b3 c4 d4 g3").slow(4)
    .sound("piano")
    .gain(0.12)
    .hpf(530)
    .every(3, x => x.rev())
    .delay(0.14)
)

$: stack(
  s("hh*2 [oh cp] hh*2 [oh ~] [cp ~]").slow(4)
    .gain(0.11)
    .crush(5)
    .delay(rand.range(0.12,0.16).slow(6)),

  s("cb lt ht").slow(7)
    .gain(0.07)
    .pan(perlin.range(0.16,0.95).slow(7))
    .echo(2, 0.11, 0.19)
)

$: note("<g5 e5 d5 b4> <g4 gb4 e4 d4>").slow(7)
  .sound("supersaw")
  .gain(0.18)
  .every(2, x => x.jux(y => y.rev()))
  .pan(sine.range(0.12, 0.89).slow(11))
  .echo(2, 0.15, 0.21)
  .lpf(1770)

$: note("eb3 ~ ab3 ~ f3 ~ bb2 ~").slow(11)
  .sound("sine")
  .gain(0.11)
  .lpf(cosine.range(860,1240).slow(14))
  .lpq(6.9)
  .pan(sine.range(0.07,0.69).slow(13))

$: stack(
  s("supersaw pulse triangle sawtooth").slow(8)
    .gain(0.13)
    .lpf(rand.range(1100,1470).slow(8))
    .resonance(rand.range(6, 8.5).slow(9))
    .pan(perlin.range(0.18, 0.99).slow(11)),
  s("[rd cr]").slow(5)
    .gain(0.09)
    .delay(0.11)
    .pan(sine.range(0.11, 0.7).slow(7))
)

$: note("c5 ~ eb4 g4 ~ <c5 e5> ~ bb4 f4 ~").slow(4)
  .sound("square")
  .gain(0.13)
  .every(4, x => x.juxBy(0.7, y => y.rev()))
  .pan(perlin.range(0.14,0.94).slow(8))
  .room(0.21)