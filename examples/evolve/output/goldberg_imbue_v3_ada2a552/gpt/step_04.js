// Goldberg Variations - Ground Bass (BWV 988)
// The 8-note descending bass that underlies all 30 variations

setcps(72/60/4)

$: stack(
  note("g3 gb3 e3 d3 b2 c3 d3 g2")
    .slow(2)
    .sound("triangle")
    .gain(0.42)
    .lpf(sine.range(400, 1500).slow(7))
    .lpq(5),
  note("g4 gb4 e4 d4 b3 c4 d4 <g3 e4>")
    .slow(4)
    .sound("piano")
    .gain(0.18)
    .hpf(777)
    .release(0.17)
    .every(3, x => x.rev())
)

$: s("<hh~ cr> [~ hh] hh*6")
  .gain(0.07)
  .pan(perlin.range(0,1).slow(7))
  .degradeBy(0.19)
  .every(5, x => x.rev())

$: s("supersaw")
  .n("<7 [~ 5]> ~ 3 2 0")
  .scale("C:minor")
  .gain(0.13)
  .room(0.22)
  .delay(0.11)
  .every(4, x=>x.rev())

$: s("[bd bd ~ bd] [bd*2 ~] ~ bd")
  .gain(0.13)
  .lpf(570)
  .room(0.08)
  .degradeBy(0.15)
  .every(7, x=>x.rev())

$: s("<triangle pulse>~ <supersaw square> [<triangle supersaw> ~] triangle*4")
  .n("0 7 4 <9 [11 3]> ~ 2 5")
  .scale("E:minor")
  .gain(0.09)
  .room(0.33)
  .hpf(perlin.range(350,700).slow(11))
  .every(6, x => x.palindrome())