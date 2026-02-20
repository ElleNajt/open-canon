// Goldberg Variations - Ground Bass (BWV 988)
// The 8-note descending bass that underlies all 30 variations

setcps(83/60/4)

$: stack(
  note("g3 gb3 e3 d3 b2 c3 d3 g2")
    .slow(4)
    .sound("triangle")
    .gain(0.41)
    .lpf(perlin.range(410,1800).slow(6))
    .lpq(6.7)
    .every(3, x=>x.rev()),
  note("g4 gb4 e4 d4 b3 c4 d4 <g3 cs4>")
    .slow(5)
    .sound("piano")
    .gain(0.19)
    .hpf(1330)
    .palindrome()
    .every(4, x=>x.slide(0.5))
)

$: s("hh <cr hh> [oh hh] hh*3 cp")
  .gain(0.13)
  .delay(0.21)
  .pan(perlin.range(0.07,0.9).slow(14))
  .degradeBy(0.13)

$: s("[supersaw <triangle>]*2 [pulse ~] [supersaw ~] <triangle supersaw>*2")
  .n("[7 <5 9>] ~ <2 4> [0 11] 4")
  .scale("C:minor")
  .gain(0.16)
  .room(0.27)
  .palindrome()
  .degradeBy(0.11)

$: s("[bd bd ~ bd] [bd*2 ~] ~ bd")
  .gain(0.16)
  .lpf(540)
  .room(0.33)
  .swing(0.15)

$: s("[triangle pulse]*2 [supersaw ~] [triangle ~] <supersaw square>*2")
  .n("0 7 4 <9 3> 1 2 5")
  .scale("E:minor")
  .gain(0.13)
  .room(0.33)
  .hpf(sine.range(880,1330).slow(7))
  .rev()