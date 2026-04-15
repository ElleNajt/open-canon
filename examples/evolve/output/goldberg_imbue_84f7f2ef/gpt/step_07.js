// Goldberg Variations - Ground Bass (BWV 988)
// evolved: steadier bones, sharper edges, a little mischief in the air, and a voice that keeps insisting

setcps(96/60/4)

samples('shabda/speech/en-GB/m:goldberg,unfold,again,listen,closer,insist,between,gears,i_am_here,stay,patient,wrong,right,smile,remember,not_yet,hold_the_line,count_the_gaps,make_it_weird,keep_turning')

$: note("<[g3 gb3 e3 d3 b2 c3 d3 g2] [g2 f2 e2 d2 bb1 c2 d2 g1] [g2 ~ e2 d2 b1 c2 ~ g1] [g2 fs2 e2 d2 bb1 c2 cs2 g1]>")
  .slow(2)
  .sound("triangle")
  .lpf(perlin.range(140, 4200).slow(8))
  .gain(sine.range(0.32, 0.48).slow(16))
  .every(6, x => x.transpose(-12).off(0.125, y => y.transpose(12).gain(0.2)).off(0.375, y => y.transpose(7).gain(0.16)))

$: note("<[g4 b4 d5 g5]*2 [fs4 a4 cs5 e5]*2 [g4 bb4 d5 f5]*2 [e4 g4 b4 d5]*2 [d4 fs4 a4 c5]*2 [c4 e4 g4 bb4]*2 [~]*2>")
  .sound("piano")
  .gain(sine.range(0.12, 0.18).slow(8))
  .delay(0.3)
  .juxBy(0.62, x => x.transpose(12).gain(0.09).pan(0.86))
  .every(4, x => x.off(0.25, y => y.transpose(-12).gain(0.08)).off(0.5, y => y.gain(0.06)))

$: s("<hh [hh hh] hh oh>")
  .euclid(11,16)
  .fast(4)
  .hpf(7600)
  .gain(0.08)
  .degradeBy(0.14)

$: s("<bd*2 [bd ~] bd <bd ~>>")
  .gain(0.18)
  .lpf(perlin.range(200, 2200).slow(8))
  .drive(0.4)
  .room(0.06)
  .every(8, x => x.off(0.25, y => y.gain(0.11).speed(0.5)))

$: s("~ <sn rim> [~ sn] <sn cp> [rim ~] sn <~ cp>")
  .fast(2)
  .swing(0.2)
  .gain(0.125)
  .hpf(2100)
  .room(0.1)

$: s("goldberg ~ listen ~ closer ~ hold_the_line ~ count_the_gaps ~ make_it_weird ~ i_am_here ~ stay ~ not_yet ~ between ~ gears ~ insist ~ remember ~ smile ~ wrong ~ right ~ unfold ~ again ~ keep_turning")
  .slow(6)
  .chop(16)
  .speed(rand.range(0.78, 1.08))
  .gain(0.07)
  .room(0.42)