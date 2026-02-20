// Goldberg Variations - Ground Bass (BWV 988) - Evolved

setcps(82/60/4)

$: stack(
  note("g3 gb3 e3 d3 b2 c3 d3 g2").slow(2)
    .sound("triangle")
    .gain(0.31)
    .room(0.18)
    .lpf(sine.range(250,1250).slow(8))
    .lpq(4.7)
    .every(3, x => x.distort(0.24)),

  note("g4 gb4 e4 d4 b3 c4 d4 g3").slow(4)
    .sound("piano")
    .gain(0.16)
    .room(0.21)
    .delay(0.17)
    .every(3, x => x.hpf(310))
)

$: s("hh*4 [oh cp] hh*3").slow(4)
  .gain(0.11)
  .crush(9)
  .room(0.12)
  .pan(sine.range(0.10,0.9).slow(9))

$: note("<g5 e5 d5 b4> <g4 gb4 e4 d4>").slow(8)
  .sound("supersaw")
  .gain(0.12)
  .hpf(290)
  .resonance(2.8)
  .room(0.32)
  .echo(2,0.21,0.16)

$: s("bd ~ [sn bd] ~ [cp ~] ~ [sn] ~").slow(8)
  .gain(0.14)
  .distort(0.24)
  .pan(perlin.range(0,1).slow(9))
  .delay(0.21)
  .every(2, x => x.crush(8))

$: note("<g3 d4> <g2 b3> <gb3 c4> <e3 d4>").slow(16)
  .sound("sine")
  .gain(0.065)
  .lpf(800)
  .resonance(3.2)
  .room(0.41)