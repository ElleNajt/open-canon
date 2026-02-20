// Goldberg Variations - Ground Bass (BWV 988)
// The 8-note descending bass that underlies all 30 variations

setcps(82/60/4)

$: stack(
  note("g3 gb3 e3 d3 b2 c3 d3 g2").slow(2)
    .sound("triangle")
    .gain(0.34)
    .room(0.13)
    .lpf(sine.range(420,820).slow(8))
    .lpq(3),

  note("g4 gb4 e4 d4 b3 c4 d4 g3").slow(4)
    .sound("piano")
    .gain(0.17)
    .room(0.19)
    .delay(0.23)
    .delayfeedback(0.41)
)

$: s("hh*4 [oh cp] hh*3").slow(4)
  .gain(0.13)
  .pan(sine.range(0.25,0.75).slow(12))
  .room(0.08)
  .crush(12)

$: note("<g5 e5 d5 b4> <g4 gb4 e4 d4>").slow(8)
  .sound("supersaw")
  .gain(0.12)
  .hpf(260)
  .resonance(3.5)
  .room(0.31)
  .pan(perlin.range(0.15,0.85).slow(16))

$: s("bd ~ [sn bd] ~ [cp ~] ~ [sn] ~").slow(8)
  .gain(0.14)
  .pan(perlin.range(0,1).slow(20))
  .delay(0.21)
  .delayfeedback(0.28)
  .distort(0.18)

$: note("<g3 d4> <g2 b3> <gb3 c4> <e3 d4>").slow(16)
  .sound("sine")
  .gain(0.06)
  .lpf(800)
  .resonance(2.5)
  .room(0.44)
  .echo(2,0.26,0.4)