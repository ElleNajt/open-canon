// Goldberg Variations - Ground Bass (BWV 988) - Reimagined + Personality

setcps(82/60/4)

$: stack(
  note("g3 gb3 e3 d3 b2 c3 d3 g2").slow(2)
    .sound("triangle")
    .gain(0.29)
    .room(0.22)
    .lpf(sine.range(350,1700).slow(9))
    .lpq(7.2),

  note("g4 gb4 e4 d4 b3 c4 d4 g3").slow(4)
    .sound("piano")
    .gain(0.12)
    .delay(0.19)
    .hpf(330)
    .resonance(6.7)
)

$: s("hh*4 [oh cp] hh*3").slow(4)
  .gain(0.13)
  .room(0.14)
  .pan(sine.range(0.13,0.86).slow(11))
  .juxBy(0.3, x => x.crush(5))

$: note("<g5 e5 d5 b4> <g4 gb4 e4 d4>").slow(8)
  .sound("supersaw")
  .gain(0.13)
  .hpf(420)
  .resonance(5.1)
  .room(0.24)
  .every(2, x => x.rev())

$: note("<g3 d4> <g2 b3> <gb3 c4> <e3 d4>").slow(16)
  .sound("sine")
  .gain(0.064)
  .lpf(870)
  .room(0.36)
  .pan(cosine.range(0.06,0.94).slow(32))

$: s("bd ~ [sn bd] ~ [cp ~ bd] ~ [sn] ~").slow(8)
  .gain(0.15)
  .delay(0.22)
  .distort(0.21)
  .every(3, x => x.rev())
  .pan(tri.range(0.09,0.85).slow(9))