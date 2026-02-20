// Goldberg Variations - Ground Bass (BWV 988) - Evolved

setcps(82/60/4)

$: stack(
  note("g3 gb3 e3 d3 b2 c3 d3 g2").slow(2)
    .sound("triangle")
    .gain(0.33)
    .room(0.15)
    .lpf(sine.range(400,900).slow(10))
    .lpq(5)
    .every(4, x => x.distort(0.21)),

  note("g4 gb4 e4 d4 b3 c4 d4 g3").slow(4)
    .sound("piano")
    .gain(0.18)
    .room(0.18)
    .delay(0.15)
    .every(3, x => x.hpf(320))
)

$: s("hh*4 [oh cp] hh*3").slow(4)
  .gain(0.11)
  .crush(10)
  .room(0.10)
  .pan(sine.range(0.24,0.76).slow(10))
  .every(4, x => x.rev())

$: note("<g5 e5 d5 b4> <g4 gb4 e4 d4>").slow(8)
  .sound("supersaw")
  .gain(0.12)
  .hpf(270)
  .resonance(2.5)
  .room(0.29)
  .echo(2,0.25,0.13)

$: s("bd ~ [sn bd] ~ [cp ~] ~ [sn] ~").slow(8)
  .gain(0.14)
  .distort(0.21)
  .pan(perlin.range(0,1).slow(14))
  .delay(0.18)
  .every(2, x => x.crush(9))

$: note("<g3 d4> <g2 b3> <gb3 c4> <e3 d4>").slow(16)
  .sound("sine")
  .gain(0.07)
  .lpf(740)
  .resonance(2.7)
  .room(0.51)