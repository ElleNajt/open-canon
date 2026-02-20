// Goldberg Variations - Ground Bass (BWV 988)
// The 8-note descending bass that underlies all 30 variations

setcps(76/60/4)

$: stack(
  note("g3 gb3 e3 d3 b2 c3 d3 g2").slow(2)
    .sound("triangle")
    .gain(0.36)
    .room(0.18)
    .lpf(620)
    .lpq(3.5),

  note("g4 gb4 e4 d4 b3 c4 d4 g3").slow(4)
    .sound("piano")
    .gain(0.19)
    .room(0.21)
    .delay(0.23)
    .delayfeedback(0.43)
)

$: s("hh*4 [oh cp] hh*3").slow(4)
  .gain(0.13)
  .pan(sine.range(0.25,0.75).slow(12))
  .room(0.08)

$: note("<g5 e5 d5 b4> <g4 gb4 e4 d4>").slow(8)
  .sound("supersaw")
  .gain(0.11)
  .hpf(240)
  .resonance(4)
  .room(0.31)

$: s("bd ~ [sn bd] ~ [cp ~] ~ [sn] ~").slow(8)
  .gain(0.15)
  .pan(perlin.range(0,1).slow(24))
  .delay(0.22)
  .delayfeedback(0.31)