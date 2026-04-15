// Goldberg Variations - Ground Bass (BWV 988)
// evolved: steadier bones, sharper edges, a little mischief in the air, and a voice that keeps insisting

setcps(96/60/4)

samples('shabda/speech/en-GB/m:goldberg,unfold,again,listen,closer,insist,between,gears,i_am_here,stay,patient,wrong,right,smile,remember,not_yet,hold_the_line,count_the_gaps,make_it_weird,keep_turning')

$: note("<[g3 gb3 e3 d3 b2 c3 d3 g2] [g2 f2 e2 d2 bb1 c2 d2 g1] [g2 ~ e2 d2 b1 c2 cs2 g1] [g2 fs2 e2 d2 bb1 c2 a1 g1]>")
  .slow(2)
  .sound("triangle")
  .lpf(perlin.range(160, 3800).slow(8))
  .gain(sine.range(0.28, 0.44).slow(16))
  .every(6, x => x.transpose(-12).off(0.125, y => y.transpose(12).gain(0.08)).off(0.375, y => y.transpose(7).gain(0.06)))

$: note("<[g4 b4 d5 g5]*2 [fs4 a4 cs5 e5]*2 [g4 bb4 d5 f5]*2 [e4 g4 b4 d5]*2 [d4 fs4 a4 c5]*2 [c4 e4 g4 bb4]*2 [b3 d4 fs4 a4]*2 [~]*2>")
  .sound("piano")
  .gain(sine.range(0.08, 0.13).slow(8))
  .delay(0.28)
  .juxBy(0.62, x => x.transpose(12).gain(0.07).pan(0.86))
  .every(4, x => x.off(0.25, y => y.transpose(-12).gain(0.06)).off(0.5, y => y.gain(0.055)))

$: s("<hh [hh hh] [hh ~] oh>")
  .euclid(11, 16)
  .fast(4)
  .hpf(7200)
  .gain(0.06)
  .degradeBy(0.18)

$: s("<bd*2 [bd ~] bd <bd bd> [~ bd]>")
  .gain(0.16)
  .lpf(perlin.range(240, 2000).slow(8))
  .drive(0.45)
  .room(0.06)
  .every(8, x => x.off(0.25, y => y.gain(0.09).speed(0.5)))

$: s("~ <sn rim> [~ sn] <sn cp> [rim ~] sn <cp ~>")
  .fast(2)
  .swing(0.22)
  .gain(0.11)
  .hpf(1900)
  .room(0.12)

$: s("listen ~ closer ~ count_the_gaps ~ hold_the_line ~ i_am_here ~ between ~ gears ~ insist ~ remember ~ smile ~ wrong ~ right ~ not_yet ~ make_it_weird ~ keep_turning ~ unfold ~ again ~ goldberg")
  .slow(6)
  .chop(16)
  .speed(rand.range(0.76, 1.12))
  .gain(0.06)
  .room(0.45)