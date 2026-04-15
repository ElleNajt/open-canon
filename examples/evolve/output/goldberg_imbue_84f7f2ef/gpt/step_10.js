// Goldberg Variations - Ground Bass (BWV 988)
// evolved: steadier bones, sharper edges, a little mischief in the air, and a voice that keeps insisting

setcps(106/60/4)

samples('shabda/speech/en-GB/m:goldberg,unfold,again,listen,closer,insist,between,gears,i_am_here,stay,patient,wrong,right,smile,remember,not_yet,hold_the_line,count_the_gaps,make_it_weird,keep_turning')

$: arrange(
  [8, note("<[g3 gb3 e3 d3 b2 c3 d3 g2] [g2 f2 e2 d2 bb1 c2 d2 g1] [g2 ~ e2 d2 b1 c2 cs2 g1] [g2 fs2 e2 d2 bb1 c2 a1 g1]>")
    .slow(2)
    .sound("triangle")
    .lpf(perlin.range(160, 3800).slow(6))
    .gain(sine.range(0.32, 0.47).slow(12))
    .every(5, x => x.transpose(-12).off(0.125, y => y.transpose(12).gain(0.09)).off(0.375, y => y.transpose(7).gain(0.07)))],
  [8, note("<[g3 fs3 e3 d3 bb2 c3 d3 g2] [g2 f2 e2 d2 b1 c2 cs2 g1] [g2 ~ e2 d2 b1 c2 d2 g1] [g2 fs2 e2 d2 bb1 c2 a1 g1]>")
    .slow(2)
    .sound("pulse")
    .lpf(perlin.range(120, 2400).slow(4))
    .gain(sine.range(0.3, 0.44).slow(10))
    .every(4, x => x.off(0.25, y => y.transpose(12).gain(0.08)).off(0.5, y => y.transpose(-5).gain(0.075)))],
  [8, note("<[g3 ~ e3 d3 b2 ~ d3 g2] [g2 f2 ~ d2 bb1 c2 ~ g1] [g2 ~ e2 ~ b1 c2 cs2 g1] [g2 fs2 e2 d2 ~ c2 a1 g1]>")
    .slow(2)
    .sound("sine")
    .lpf(perlin.range(90, 1400).slow(8))
    .gain(sine.range(0.28, 0.42).slow(14))
    .every(6, x => x.transpose(-12).off(0.375, y => y.transpose(12).gain(0.085)))]
)

$: arrange(
  [8, note("<[g4 b4 d5 g5]*2 [fs4 a4 cs5 e5]*2 [g4 bb4 d5 f5]*2 [e4 g4 b4 d5]*2 [d4 fs4 a4 c5]*2 [c4 e4 g4 bb4]*2 [b3 d4 fs4 a4]*2 [cs4 e4 g4 bb4]*2>")
    .sound("piano")
    .gain(sine.range(0.07, 0.12).slow(8))
    .delay(0.22)
    .juxBy(0.6, x => x.transpose(12).gain(0.065).pan(0.86))
    .every(6, x => x.off(0.25, y => y.transpose(-12).gain(0.06)).off(0.5, y => y.gain(0.055)))],
  [8, note("<[g4 b4 d5 g5] [b4 d5 g5 b5] [fs4 a4 cs5 e5] [a4 cs5 e5 a5] [g4 bb4 d5 f5] [bb4 d5 f5 bb5] [e4 g4 b4 d5] [g4 b4 d5 g5]>")
    .sound("piano")
    .gain(sine.range(0.075, 0.135).slow(8))
    .delay(0.28)
    .juxBy(0.6, x => x.transpose(12).gain(0.07).pan(0.82))
    .every(4, x => x.off(0.25, y => y.transpose(-12).gain(0.06)).off(0.5, y => y.transpose(7).gain(0.058)))],
  [8, note("<[g4 ~ d5 g5] [fs4 a4 ~ e5] [g4 bb4 d5 ~] [e4 g4 b4 d5] [d4 fs4 a4 ~] [c4 e4 g4 bb4] [b3 ~ fs4 a4] [cs4 e4 ~ bb4]>")
    .sound("piano")
    .gain(sine.range(0.065, 0.11).slow(10))
    .delay(0.18)
    .juxBy(0.6, x => x.transpose(12).gain(0.06).pan(0.9))
    .every(6, x => x.off(0.5, y => y.transpose(-12).gain(0.057)).off(0.75, y => y.gain(0.055)))]
)

$: arrange(
  [8, s("<hh [hh hh] [hh ~] oh>")
    .euclid(11, 16)
    .fast(4)
    .hpf(7500)
    .gain(0.065)
    .sometimesBy(0.3, x => x.ply(2))],
  [8, s("<hh [hh hh] [hh hh] oh>")
    .euclid(13, 16)
    .fast(4)
    .hpf(6800)
    .gain(0.07)
    .sometimesBy(0.22, x => x.ply(2))],
  [8, s("<hh [hh ~] [hh hh] oh>")
    .euclid(9, 16)
    .fast(3)
    .hpf(8200)
    .gain(0.06)
    .sometimesBy(0.18, x => x.ply(2))]
)

$: arrange(
  [8, s("<bd*2 [bd ~] bd <bd bd> [~ bd]>")
    .gain(0.16)
    .lpf(perlin.range(180, 1600).slow(8))
    .drive(0.5)
    .compressor("-18:3:6:0.01:0.22")
    .every(8, x => x.off(0.25, y => y.gain(0.095).speed(0.5)))],
  [8, s("<bd [~ bd] bd [bd ~] bd [~ bd] bd [bd bd]>")
    .gain(0.17)
    .lpf(perlin.range(150, 1300).slow(6))
    .drive(0.62)
    .compressor("-19:3:6:0.01:0.24")
    .every(6, x => x.off(0.25, y => y.gain(0.1).speed(0.5)))],
  [8, s("<bd ~ bd [~ bd] bd ~ bd [bd ~]>")
    .gain(0.15)
    .lpf(perlin.range(120, 1100).slow(10))
    .drive(0.55)
    .compressor("-18:3:6:0.01:0.22")
    .every(8, x => x.off(0.5, y => y.gain(0.09).speed(0.5)))]
)

$: arrange(
  [8, s("~ <sn rim> [~ sn] <sn cp> [rim ~] sn <cp ~>")
    .fast(2)
    .swing(0.24)
    .gain(0.115)
    .hpf(2100)
    .room(0.1)],
  [8, s("~ <sn rim> [sn ~] <sn cp> [rim sn] ~ <cp rim>")
    .fast(2)
    .swing(0.24)
    .gain(0.12)
    .hpf(2300)
    .room(0.12)],
  [8, s("~ <sn ~> [~ rim] <sn cp> [~ sn] rim ~ <cp ~>")
    .fast(2)
    .swing(0.24)
    .gain(0.105)
    .hpf(2400)
    .room(0.08)]
)

$: arrange(
  [8, s("listen closer ~ count_the_gaps hold_the_line ~ between gears ~ insist ~ wrong right ~ stay patient ~ smile remember ~ not_yet")
    .slow(6)
    .chop(16)
    .speed(rand.range(0.78, 1.18))
    .gain(0.06)
    .vowel("a e i o u")],
  [8, s("insist insist ~ hold_the_line ~ count_the_gaps ~ make_it_weird ~ wrong right ~ listen closer ~ between gears ~ i_am_here")
    .slow(6)
    .chop(32)
    .speed(rand.range(0.72, 1.24))
    .gain(0.07)
    .vowel("<a e i o u>")],
  [8, s("smile remember ~ not_yet ~ stay patient ~ keep_turning ~ unfold again ~ goldberg ~ i_am_here")
    .slow(8)
    .chop(16)
    .speed(rand.range(0.7, 1.12))
    .gain(0.065)
    .vowel("<o u a e i>")]
)