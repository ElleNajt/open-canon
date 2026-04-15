// Goldberg Variations - Ground Bass (BWV 988)
// evolved: steadier bones, sharper edges, a little mischief in the air, and a voice that keeps insisting

setcps(90/60/4)

samples('shabda/speech/en-GB/m:goldberg,unfold,again,listen,closer,insist,between,gears,i_am_here,stay,patient,wrong,right,smile,remember')

$: note("<[g3 gb3 e3 d3 b2 c3 d3 g2] [g2 f2 e2 d2 bb1 c2 d2 g1] [g2 ~ e2 d2 b1 c2 ~ g1]>")
  .slow(2)
  .sound("triangle")
  .lpf(perlin.range(160, 3600).slow(8))
  .gain(0.4)
  .every(6, x => x.transpose(-12).off(0.125, y => y.transpose(12).gain(0.19)).off(0.5, y => y.gain(0.12)))

$: note("<[g4 b4 d5 g5]*2 [fs4 a4 cs5 e5]*2 [g4 bb4 d5 f5]*2 [e4 g4 b4 d5]*2 [d4 fs4 a4 c5]*2 [~]*2>")
  .sound("piano")
  .gain(0.15)
  .delay(0.28)
  .juxBy(0.62, x => x.transpose(12).gain(0.085).pan(0.86))
  .every(4, x => x.off(0.25, y => y.transpose(-12).gain(0.075)).off(0.5, y => y.gain(0.06)))

$: s("<hh hh hh oh>")
  .euclid(11,16)
  .fast(4)
  .hpf(7800)
  .gain(0.075)
  .degradeBy(0.12)

$: s("<bd*2 [bd ~] bd>")
  .gain(0.17)
  .lpf(perlin.range(220, 1900).slow(8))
  .drive(0.35)
  .room(0.06)
  .every(8, x => x.off(0.25, y => y.gain(0.1).speed(0.5)))

$: s("~ <sn rim> [~ sn] <sn cp> [~ rim] sn <~ cp>")
  .fast(2)
  .swing(0.2)
  .gain(0.12)
  .hpf(2100)
  .room(0.1)

$: s("goldberg ~ listen ~ closer ~ i_am_here ~ stay ~ patient ~ between ~ gears ~ insist ~ remember ~ smile ~ wrong ~ right ~ unfold ~ again")
  .slow(8)
  .chop(16)
  .speed(rand.range(0.8, 1.1))
  .gain(0.065)
  .room(0.45)