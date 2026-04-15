// Goldberg Variations - Ground Bass (BWV 988)
// evolved: steadier bones, sharper edges, a little mischief in the air, and a voice that keeps insisting

setcps(86/60/4)

samples('shabda/speech/en-GB/m:goldberg,unfold,again,listen,closer,insist,between,gears,i_am_here,stay,patient,wrong,right,smile,remember')

$: note("<[g3 gb3 e3 d3 b2 c3 d3 g2] [g2 f2 e2 ~ bb1 c2 d2 g1] [g2 ~ e2 d2 b1 c2 ~ g1]>")
  .slow(2)
  .sound("triangle")
  .lpf(perlin.range(140, 3200).slow(8))
  .gain(0.42)
  .every(6, x => x.transpose(-12).off(0.125, y => y.transpose(12).gain(0.18)))

$: note("[g4 b4 d5 g5]*2 [fs4 a4 cs5 e5]*2 [g4 bb4 d5 f5]*2 [e4 g4 b4 d5]*2 [d4 fs4 a4 c5]*2")
  .sound("piano")
  .gain(0.14)
  .delay(0.22)
  .juxBy(0.64, x => x.transpose(12).gain(0.08).pan(0.84))
  .every(4, x => x.off(0.25, y => y.transpose(-12).gain(0.07)))

$: s("<hh hh hh oh>")
  .euclid(13,16)
  .fast(4)
  .hpf(8200)
  .gain(0.08)
  .degradeBy(0.16)

$: s("<bd*3 [bd ~]>")
  .gain(0.16)
  .lpf(perlin.range(240, 1600).slow(8))
  .drive(0.32)
  .room(0.07)
  .every(8, x => x.off(0.25, y => y.gain(0.09).speed(0.5)))

$: s("~ <sn rim> [~ sn] <sn cp> [~ rim] sn")
  .fast(2)
  .swing(0.18)
  .gain(0.11)
  .hpf(2200)
  .room(0.09)

$: s("goldberg ~ listen ~ closer ~ stay ~ between ~ gears ~ i_am_here ~ remember ~ unfold ~ again ~ insist ~ smile ~ wrong ~ right")
  .slow(4)
  .chop(16)
  .speed(rand.range(0.88, 1.06))
  .gain(0.07)
  .room(0.42)