// Goldberg Variations - Ground Bass (BWV 988)
// evolved: steadier bones, sharper edges, a little mischief in the air, and a voice that keeps insisting

setcps(78/60/4)

samples('shabda/speech/en-GB/m:goldberg,unfold,again,listen,closer,insist')

$: note("<[g3 gb3 e3 d3 b2 c3 d3 g2] [g2 f2 e2 d2 bb1 c2 d2 g1]>")
  .slow(2)
  .sound("triangle")
  .lpf(perlin.range(150, 2200).slow(8))
  .gain(0.42)
  .every(8, x => x.transpose(-12))

$: note("[g4 b4 d5 g5]*2 [g4 bb4 d5 f5]*2 [d4 g4 b4 d5]*2 [c4 e4 g4 c5]*2")
  .sound("piano")
  .palindrome()
  .gain(0.12)
  .delay(0.22)
  .juxBy(0.62, x => x.transpose(12).gain(0.06))

$: s("hh")
  .euclid(13,16)
  .fast(4)
  .hpf(8200)
  .gain(0.08)
  .sometimesBy(0.35, x => x.ply(2))

$: s("bd*4")
  .gain(0.14)
  .lpf(sine.range(320, 1200).slow(8))
  .drive(0.24)
  .room(0.06)
  .every(8, x => x.off(0.25, y => y.gain(0.06)))

$: s("~ <sn rim> [~ sn] sn")
  .fast(2)
  .swing(0.14)
  .gain(0.11)
  .hpf(2300)
  .room(0.08)

$: s("goldberg ~ listen ~ unfold ~ closer ~ again ~ insist")
  .slow(4)
  .chop(10)
  .vowel("o a e i")
  .gain(0.07)
  .room(0.38)