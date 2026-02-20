// Goldberg Variations - Ground Bass (BWV 988) - Evolved Personality

setcps(91/60/4)

$: stack(
  note("g3 gb3 e3 d3 b2 c3 d3 g2").slow(2)
    .sound("triangle")
    .gain(0.38)
    .lpf(sine.range(810,1370).slow(9))
    .lpq(7.1)
    .pan(perlin.range(0.24, 0.72).slow(10))
    .every(4, x => x.rev()),

  note("g4 gb4 e4 d4 b3 c4 d4 g3").slow(4)
    .sound("piano")
    .gain(0.14)
    .hpf(570)
    .every(2, x => x.jux(y => y.rev()))
    .delay(0.15)
)

$: stack(
  s("hh*2 [oh cp] hh*2 [oh ~] [cp ~]").slow(4)
    .gain(0.13)
    .crush(4)
    .delay(rand.range(0.13,0.17).slow(6)),

  s("cb lt ht").slow(7)
    .gain(0.09)
    .pan(sine.range(0.22,0.91).slow(6))
    .echo(2, 0.13, 0.22)
)

$: note("<g5 e5 d5 b4> <g4 gb4 e4 d4>").slow(6)
  .sound("supersaw")
  .gain(0.17)
  .every(2, x => x.jux(y => y.rev()))
  .pan(sine.range(0.13, 0.91).slow(11))
  .lpf(1840)
  .room(0.21)

$: note("eb3 ~ ab3 ~ f3 ~ bb2 ~").slow(13)
  .sound("sine")
  .gain(0.13)
  .lpf(cosine.range(950,1170).slow(13))
  .lpq(7.5)
  .pan(sine.range(0.11,0.74).slow(8))

$: stack(
  s("supersaw pulse triangle sawtooth").slow(9)
    .gain(0.15)
    .lpf(rand.range(1270,1490).slow(6))
    .resonance(rand.range(6.5, 8.7).slow(7))
    .pan(perlin.range(0.18, 0.94).slow(8)),
  s("[rd cr]").slow(6)
    .gain(0.09)
    .delay(0.13)
    .room(0.22)
    .pan(sine.range(0.22, 0.71).slow(7))
)