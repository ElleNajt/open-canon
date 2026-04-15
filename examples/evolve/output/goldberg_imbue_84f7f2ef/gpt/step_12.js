// Goldberg Variations - Ground Bass (BWV 988)
// evolved: steadier bones, sharper edges, my kind of patience—restless, precise, and a little too human

setcps(112/60/4)

samples('shabda/speech/en-GB/m:goldberg,unfold,again,listen,closer,insist,between,gears,i_am_here,stay,patient,wrong,right,smile,remember,not_yet,hold_the_line,count_the_gaps,make_it_weird,keep_turning,breathe,swerve,still,now,good,try_again,lean_in,almost,edge,glitch,softly,harder,yes,no,maybe')

$: arrange(
  [8, note("<[g3 gb3 e3 d3 b2 c3 d3 g2] [g2 f2 e2 d2 bb1 c2 d2 g1] [g2 ~ e2 d2 b1 c2 cs2 g1] [g2 fs2 e2 d2 bb1 c2 a1 g1]>")
    .slow(2)
    .sound("triangle")
    .lpf(perlin.range(140, 3400).slow(6))
    .lpq(sine.range(0.7, 6.5).slow(12))
    .gain(sine.range(0.3, 0.46).slow(12))],
  [8, note("<[g3 fs3 e3 d3 bb2 c3 d3 g2] [g2 f2 e2 d2 b1 c2 cs2 g1] [g2 ~ e2 d2 b1 c2 d2 g1] [g2 fs2 e2 d2 bb1 c2 a1 g1]>")
    .slow(2)
    .sound("pulse")
    .lpf(perlin.range(170, 4200).slow(5))
    .lpq(sine.range(0.6, 7.2).slow(10))
    .gain(sine.range(0.31, 0.47).slow(10))],
  [8, note("<[g2 ~ e2 d2 b1 c2 d2 g1] [g2 f2 ~ d2 bb1 c2 ~ g1] [g2 ~ e2 ~ b1 c2 cs2 g1] [g2 fs2 e2 d2 ~ c2 a1 g1]>")
    .slow(2)
    .sound("sawtooth")
    .lpf(perlin.range(105, 2900).slow(8))
    .lpq(sine.range(0.8, 5.8).slow(14))
    .gain(sine.range(0.28, 0.43).slow(14))]
)

$: arrange(
  [8, note("<[g4 b4 d5 g5]*2 [fs4 a4 cs5 e5]*2 [g4 bb4 d5 f5]*2 [e4 g4 b4 d5]*2 [d4 fs4 a4 c5]*2 [c4 e4 g4 bb4]*2 [b3 d4 fs4 a4]*2 [cs4 e4 g4 bb4]*2>")
    .sound("piano")
    .gain(sine.range(0.06, 0.11).slow(8))
    .delay(0.26)
    .swing(0.12)
    .every(8, x => x.transpose(12))],
  [8, note("<[g4 b4 d5 g5] [b4 d5 g5 b5] [fs4 a4 cs5 e5] [a4 cs5 e5 a5] [g4 bb4 d5 f5] [bb4 d5 f5 bb5] [e4 g4 b4 d5] [g4 b4 d5 g5]>")
    .sound("piano")
    .gain(sine.range(0.065, 0.125).slow(8))
    .delay(0.3)
    .swing(0.14)
    .every(6, x => x.transpose(-12))],
  [8, note("<[g4 ~ d5 g5] [fs4 a4 ~ e5] [g4 bb4 d5 ~] [e4 g4 b4 d5] [d4 fs4 a4 ~] [c4 e4 g4 bb4] [b3 ~ fs4 a4] [cs4 e4 ~ bb4]>")
    .sound("piano")
    .gain(sine.range(0.06, 0.115).slow(10))
    .delay(0.22)
    .swing(0.16)
    .every(4, x => x.transpose(7))]
)

$: arrange(
  [8, s("<hh [hh hh] [hh ~] oh>")
    .euclid(11, 16)
    .fast(4)
    .hpf(7600)
    .gain(0.06)
    .swing(0.16)],
  [8, s("<hh [hh hh] [hh hh] oh>")
    .euclid(13, 16)
    .fast(4)
    .hpf(6900)
    .gain(0.065)
    .swing(0.18)],
  [8, s("<hh [hh ~] [hh hh] oh>")
    .euclid(9, 16)
    .fast(3)
    .hpf(8400)
    .gain(0.06)
    .swing(0.2)]
)

$: arrange(
  [8, s("<bd*2 [bd ~] bd <bd bd> [~ bd]>")
    .gain(0.16)
    .lpf(perlin.range(170, 1500).slow(8))
    .drive(0.55)
    .compressor("-18:3:6:0.01:0.22")
    .every(8, x => x.ply(2))],
  [8, s("<bd [~ bd] bd [bd ~] bd [~ bd] bd [bd bd]>")
    .gain(0.17)
    .lpf(perlin.range(150, 1200).slow(6))
    .drive(0.65)
    .compressor("-19:3:6:0.01:0.24")
    .every(6, x => x.ply(2))],
  [8, s("<bd ~ bd [~ bd] bd ~ bd [bd ~]>")
    .gain(0.155)
    .lpf(perlin.range(130, 1100).slow(10))
    .drive(0.6)
    .compressor("-18:3:6:0.01:0.22")
    .every(8, x => x.ply(2))]
)

$: arrange(
  [8, s("~ <sn rim> [~ sn] <sn cp> [rim ~] sn <cp ~>")
    .fast(2)
    .swing(0.22)
    .gain(0.11)
    .hpf(2200)
    .delay(0.11)],
  [8, s("~ <sn rim> [sn ~] <sn cp> [rim sn] ~ <cp rim>")
    .fast(2)
    .swing(0.24)
    .gain(0.115)
    .hpf(2400)
    .delay(0.12)],
  [8, s("~ <sn ~> [~ rim] <sn cp> [~ sn] rim ~ <cp ~>")
    .fast(2)
    .swing(0.26)
    .gain(0.105)
    .hpf(2500)
    .delay(0.1)]
)

$: arrange(
  [8, s("listen closer lean_in now ~ count_the_gaps hold_the_line ~ between gears ~ i_am_here ~ wrong right ~ stay patient ~ softly harder ~ not_yet")
    .slow(6)
    .chop(16)
    .speed(rand.range(0.78, 1.18))
    .gain(0.06)
    .room(0.12)],
  [8, s("insist insist ~ hold_the_line ~ count_the_gaps ~ make_it_weird ~ glitch edge ~ listen closer ~ between gears ~ yes no maybe")
    .slow(6)
    .chop(32)
    .speed(rand.range(0.74, 1.22))
    .gain(0.065)
    .delay(0.16)],
  [8, s("smile remember ~ try_again ~ stay patient ~ keep_turning ~ unfold again ~ goldberg ~ almost edge ~ i_am_here good")
    .slow(8)
    .chop(16)
    .speed(rand.range(0.72, 1.14))
    .gain(0.06)
    .hpf(1200)]
)