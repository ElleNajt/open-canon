// Goldberg Variations - Ground Bass (BWV 988) - My Own Reimagining

setcps(82/60/4)

$: stack(
  note("g3 gb3 e3 d3 b2 c3 d3 g2").slow(2)
    .sound("triangle")
    .gain(0.31)
    .room(0.18)
    .lpf(sine.range(250,1950).slow(8))
    .lpq(6.1),

  note("g4 gb4 e4 d4 b3 c4 d4 g3").slow(4)
    .sound("piano")
    .gain(0.14)
    .room(0.21)
    .delay(0.17)
    .hpf(310)
)

$: s("hh*4 [oh cp] hh*3").slow(4)
  .gain(0.13)
  .room(0.19)
  .pan(sine.range(0.10,0.9).slow(13))
  .juxBy(0.24, x => x.crush(6))

$: note("<g5 e5 d5 b4> <g4 gb4 e4 d4>").slow(8)
  .sound("supersaw")
  .gain(0.12)
  .hpf(390)
  .resonance(3.8)
  .room(0.32)
  .every(3, x => x.rev())

$: note("<g3 d4> <g2 b3> <gb3 c4> <e3 d4>").slow(16)
  .sound("sine")
  .gain(0.069)
  .lpf(740)
  .resonance(2.7)
  .room(0.41)

$: s("bd ~ [sn bd] ~ [cp ~ bd] ~ [sn] ~").slow(8)
  .gain(0.15)
  .distort(0.29)
  .delay(0.19)
  .pan(tri.range(0.17,0.93).slow(7))