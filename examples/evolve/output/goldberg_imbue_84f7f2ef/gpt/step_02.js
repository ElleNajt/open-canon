// Goldberg Variations - Ground Bass (BWV 988)
// evolved: steadier bones, sharper edges, a little mischief in the air, and a voice that keeps insisting

setcps(72/60/4)

samples('shabda/speech/en-GB/m:goldberg,unfold,again')

$: note("<[g3 gb3 e3 d3 b2 c3 d3 g2] [g2 f2 e2 d2 bb1 c2 d2 g1]>")
  .slow(2)
  .sound("triangle")
  .lpf(perlin.range(180, 1800).slow(6))
  .lpq(6)
  .gain(0.42)

$: note("[g4 b4 d5 g5]*2 [g4 bb4 d5 f5]*2 [d4 g4 b4 d5]*2 [c4 e4 g4 c5]*2")
  .sound("piano")
  .palindrome()
  .gain(0.15)
  .delay(0.26)
  .dt(0.375)

$: s("hh")
  .euclid(13,16)
  .fast(4)
  .degradeBy(0.18)
  .gain(0.08)
  .hpf(8200)

$: s("bd*4")
  .gain(0.14)
  .lpf(900)
  .drive(0.22)
  .room(0.06)

$: s("~ <sn rim> ~ sn")
  .fast(2)
  .swing(0.12)
  .gain(0.11)
  .hpf(2300)
  .room(0.08)

$: s("goldberg ~ unfold ~ again")
  .slow(4)
  .chop(8)
  .vowel("o a e i")
  .gain(0.07)
  .room(0.38)