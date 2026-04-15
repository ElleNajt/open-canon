// Goldberg Variations - Ground Bass (BWV 988)
// evolved: steadier bones, sharper edges, a little mischief in the air, and a voice that keeps insisting

setcps(80/60/4)

samples('shabda/speech/en-GB/m:goldberg,unfold,again,listen,closer,insist,between,gears,i_am_here')

$: note("<[g3 gb3 e3 d3 b2 c3 d3 g2] [g2 f2 e2 ~ bb1 c2 d2 g1]>")
  .slow(2)
  .sound("triangle")
  .lpf(perlin.range(120, 2600).slow(8))
  .gain(0.4)
  .every(8, x => x.transpose(-12).off(0.125, y => y.transpose(12).gain(0.16)))

$: note("[g4 b4 d5 g5]*2 [fs4 a4 cs5 e5]*2 [g4 bb4 d5 f5]*2 [e4 g4 b4 d5]*2")
  .sound("piano")
  .palindrome()
  .gain(0.13)
  .delay(0.18)
  .juxBy(0.62, x => x.transpose(12).gain(0.07).pan(0.82))

$: s("<hh hh hh oh>")
  .euclid(13,16)
  .fast(4)
  .hpf(7800)
  .gain(0.08)
  .sometimesBy(0.35, x => x.ply(2))

$: s("<bd*3 [bd ~]>")
  .gain(0.15)
  .lpf(sine.range(280, 1400).slow(8))
  .drive(0.28)
  .room(0.07)
  .every(8, x => x.off(0.25, y => y.gain(0.08).speed(0.5)))

$: s("~ <sn rim> [~ sn] <sn cp>")
  .fast(2)
  .swing(0.16)
  .gain(0.11)
  .hpf(2100)
  .room(0.09)

$: s("goldberg ~ listen ~ closer ~ between ~ gears ~ i_am_here ~ unfold ~ again ~ insist")
  .slow(4)
  .chop(12)
  .vowel("u o a e i")
  .gain(0.07)
  .room(0.42)