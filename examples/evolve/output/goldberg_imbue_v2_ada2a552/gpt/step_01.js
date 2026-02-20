// Goldberg Variations - Ground Bass (BWV 988)
// The 8-note descending bass that underlies all 30 variations

setcps(72/60/4)

$: stack(
  note("g3 gb3 e3 d3 b2 c3 d3 g2").slow(2)
    .sound("triangle")
    .gain(0.4)
    .room(0.15)
    .lpf(620)
    .lpq(4),

  note("g4 gb4 e4 d4 b3 c4 d4 g3").slow(4)
    .sound("piano")
    .gain(0.22)
    .room(0.25)
    .delay(0.19)
    .delayfeedback(0.4)
)

$: s("hh*4 [oh cp] hh*3").slow(4)
  .gain(0.13)
  .pan(sine.range(0.3,0.7).slow(8))
  .room(0.08)