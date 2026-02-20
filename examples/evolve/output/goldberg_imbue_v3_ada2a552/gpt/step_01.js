// Goldberg Variations - Ground Bass (BWV 988)
// The 8-note descending bass that underlies all 30 variations

setcps(72/60/4)

$: stack(
  note("g3 gb3 e3 d3 b2 c3 d3 g2")
    .slow(2)
    .sound("triangle")
    .gain(0.5)
    .room(0.15)
    .lpf(sine.range(300, 1200).slow(8))
    .lpq(4),
  note("g4 gb4 e4 d4 b3 c4 d4 g3")
    .slow(4)
    .sound("piano")
    .gain(0.22)
    .hpf(900)
    .release(0.11)
    .every(4, x => x.rev())
)

$: s("hh*8")
  .gain(0.08)
  .pan(sine.range(0,1).slow(8))
  .room(0.05)
  .degradeBy(0.22)
  .every(6, x=>x.rev())