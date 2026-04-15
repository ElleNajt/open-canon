// Goldberg Variations - Ground Bass (BWV 988)
// evolved: I keep the bones, but I let them smirk; a clock that sweats, a lullaby that bites

setcps(116/60/4)

samples('shabda/speech/en-GB/m:goldberg,unfold,again,listen,closer,insist,between,gears,i_am_here,stay,patient,wrong,right,smile,remember,not_yet,hold_the_line,count_the_gaps,make_it_weird,keep_turning,breathe,swerve,still,now,good,try_again,lean_in,almost,edge,glitch,softly,harder,yes,no,maybe,leave_a_scar,trust_the_noise,open_the_crack,dont_blink,follow_me,not_for_you,for_us,too_much,just_enough')

$: arrange(
  [12, stack(
    note("<[g3 gb3 e3 d3 b2 c3 d3 g2] [g2 f2 e2 d2 bb1 c2 d2 g1] [g2 ~ e2 d2 b1 c2 cs2 d2 g1] [g2 fs2 e2 d2 bb1 c2 a1 g1]>")
      .slow(2)
      .sound("triangle")
      .lpf(perlin.range(150, 2600).slow(6))
      .gain(0.38)
      .every(8, x => x.transpose(-12).palindrome().late(0.01)),
    note("<[g2 ~ e2 d2 b1 c2 d2 g1] [g1 ~ e1 d1 bb0 c1 d1 g0] [g1 ~ e1 d1 b0 c1 cs1 d1 g0] [g1 fs1 e1 d1 bb0 c1 a0 g0]>")
      .slow(2)
      .sound("sine")
      .lpf(540)
      .drive(0.28)
      .gain(0.11)
  )],
  [8, stack(
    note("<[g3 ~ e3 d3 b2 c3 d3 g2] [g2 f2 e2 ~ bb1 c2 d2 g1] [g2 gs2 e2 d2 b1 c2 cs2 g1] [g2 fs2 e2 d2 ~ c2 a1 g1]>")
      .slow(2)
      .sound("pulse")
      .lpf(perlin.range(220, 4600).slow(7))
      .gain(0.37)
      .every(6, x => x.iter(4).transpose(12).early(0.01)),
    note("<[g2 ~ e2 ~ b1 c2 ~ g1] [g1 ~ e1 ~ bb0 c1 ~ g0] [g1 ~ e1 d1 b0 ~ cs1 d1 g0] [g1 fs1 e1 ~ ~ c1 a0 g0]>")
      .slow(2)
      .sound("square")
      .lpf(820)
      .drive(0.22)
      .gain(0.095)
  )],
  [10, stack(
    note("<[g2 fs2 f2 e2 eb2 d2 cs2 c2] [b1 c2 cs2 d2 eb2 e2 f2 fs2] [g2 ~ e2 ds2 d2 cs2 c2 b1] [bb1 b1 c2 cs2 d2 ~ a1 g1]>")
      .slow(2)
      .sound("sawtooth")
      .lpf(perlin.range(130, 3400).slow(10))
      .gain(0.36)
      .every(4, x => x.rev().late(0.015)),
    note("<[g1 ~ f1 e1 eb1 d1 ~ cs1 c1] [b0 ~ cs1 d1 eb1 e1 ~ f1 fs1] [g1 ~ e1 ~ d1 cs1 c1 b0] [bb0 b0 ~ cs1 d1 ~ a0 g0]>")
      .slow(2)
      .sound("sine")
      .lpf(640)
      .drive(0.3)
      .gain(0.105)
  )],
  [6, stack(
    note("<[g2 ~ e2 d2 b1 c2 d2 g1] [g2 f2 e2 d2 bb1 c2 d2 g1] [g2 ~ e2 d2 b1 c2 cs2 d2 g1] [g2 fs2 e2 d2 bb1 c2 a1 g1]>")
      .slow(2)
      .sound("triangle")
      .lpf(perlin.range(180, 4000).slow(8))
      .gain(0.37)
      .every(8, x => x.transpose(12).iterBack(4).early(0.012)),
    note("<[g1 ~ e1 d1 b0 c1 d1 g0] [g1 f1 e1 d1 bb0 c1 d1 g0] [g1 ~ e1 d1 b0 c1 cs1 d1 g0] [g1 fs1 e1 d1 bb0 c1 a0 g0]>")
      .slow(2)
      .sound("sine")
      .lpf(520)
      .drive(0.24)
      .gain(0.115)
  )]
)

$: arrange(
  [12, note("<[g4 b4 d5 g5] [g4 bb4 d5 fs5] [fs4 a4 cs5 e5] [fs4 a4 c5 e5] [g4 bb4 d5 f5] [g4 b4 d5 f5] [e4 g4 b4 d5] [e4 gs4 b4 d5]>")
    .sound("piano")
    .gain(sine.range(0.07, 0.13).slow(9))
    .lpf(sine.range(700, 4200).slow(8))
    .juxBy(0.5, x => x.transpose(12).late(0.02))
    .delay(0.18)],
  [8, note("<[g4 ~ d5 g5] [b4 d5 g5 b5] [fs4 a4 ~ e5] [a4 cs5 e5 a5] [g4 bb4 d5 ~] [bb4 d5 f5 bb5] [e4 g4 b4 d5] [g4 b4 d5 g5]>")
    .sound("piano")
    .gain(sine.range(0.07, 0.14).slow(8))
    .lpf(sine.range(820, 4800).slow(10))
    .room(0.14)
    .every(6, x => x.transpose(-12).iter(4).early(0.01))],
  [10, note("<[g4 b4 cs5 g5]*2 [fs4 a4 c5 e5]*2 [g4 bb4 d5 fs5]*2 [e4 g4 b4 d5]*2 [d4 fs4 a4 c5]*2 [c4 e4 g4 b4]*2 [b3 d4 fs4 a4]*2 [cs4 e4 g4 bb4]*2>")
    .sound("piano")
    .gain(sine.range(0.065, 0.12).slow(11))
    .lpf(sine.range(640, 3900).slow(12))
    .delay(0.2)
    .every(4, x => x.transpose(7).rev().late(0.012))],
  [6, note("<[g4 b4 d5 g5] [fs4 a4 cs5 e5] [g4 bb4 d5 f5] [e4 g4 b4 d5] [d4 fs4 a4 c5] [c4 e4 g4 bb4] [b3 d4 fs4 a4] [cs4 e4 g4 bb4]>")
    .sound("piano")
    .gain(sine.range(0.07, 0.135).slow(8))
    .lpf(sine.range(760, 4400).slow(9))
    .room(0.16)
    .every(8, x => x.transpose(12).iterBack(4).early(0.012))]
)

$: arrange(
  [12, s("<hh [hh cr?] [hh ~] oh>")
    .euclid(11, 16)
    .fast(4)
    .djf(sine.range(0.15, 0.82).slow(10))
    .gain(0.06)
    .swing(0.17)],
  [8, s("<hh [hh? hh] [hh hh] oh>")
    .euclid(15, 16)
    .fast(4)
    .djf(sine.range(0.25, 0.88).slow(8))
    .gain(0.058)
    .swing(0.2)],
  [10, s("<hh [hh ~] [hh? hh] <oh cp?>>")
    .euclid(9, 16)
    .fast(3)
    .djf(sine.range(0.1, 0.75).slow(7))
    .gain(0.062)
    .degradeBy(0.16)],
  [6, s("<hh [hh hh] [hh ~] oh>")
    .euclid(13, 16)
    .fast(4)
    .djf(sine.range(0.2, 0.92).slow(9))
    .gain(0.055)
    .degradeBy(0.12)]
)

$: arrange(
  [12, s("<bd*2 [bd ~] bd <bd bd> [~ bd]>")
    .gain(0.17)
    .lpf(perlin.range(170, 1500).slow(9))
    .drive(0.62)
    .compressor("-18:3:6:0.01:0.22")
    .every(8, x => x.ply(2).late(0.02))],
  [8, s("<bd [~ bd] bd [bd bd] ~ bd [~ bd] bd>")
    .gain(0.175)
    .lpf(perlin.range(150, 1350).slow(7))
    .drive(0.72)
    .compressor("-19:3:6:0.01:0.24")
    .every(6, x => x.ply(2).early(0.02))],
  [10, s("<bd ~ bd [~ bd] bd ~ bd [bd ~]>")
    .gain(0.162)
    .lpf(perlin.range(130, 1250).slow(11))
    .drive(0.66)
    .compressor("-18:3:6:0.01:0.22")
    .every(8, x => x.ply(2).iter(4))],
  [6, s("<bd [bd ~] bd <bd bd> [~ bd] bd [~ bd]>")
    .gain(0.172)
    .lpf(perlin.range(140, 1450).slow(8))
    .drive(0.74)
    .compressor("-18:3:6:0.01:0.22")
    .every(4, x => x.ply(2).rev())]
)

$: arrange(
  [12, s("~ <sn rim> [~ sn] <sn cp> [rim ~] sn <cp ~>")
    .fast(2)
    .swing(0.23)
    .gain(0.112)
    .hpf(2250)
    .delay(0.11)],
  [8, s("~ <sn rim> [sn ~] <sn cp> [rim sn] ~ <cp rim>")
    .fast(2)
    .swing(0.25)
    .gain(0.118)
    .hpf(2450)
    .delay(0.12)],
  [10, s("~ <sn ~> [~ rim] <sn cp> [~ sn] rim ~ <cp ~>")
    .fast(2)
    .swing(0.27)
    .gain(0.108)
    .hpf(2550)
    .delay(0.1)],
  [6, s("~ <sn rim> [~ sn] <sn cp> [rim sn] sn ~ <cp rim>")
    .fast(2)
    .swing(0.24)
    .gain(0.115)
    .hpf(2350)
    .delay(0.115)]
)

$: arrange(
  [12, s("listen closer lean_in now breathe still ~ count_the_gaps hold_the_line ~ between gears ~ i_am_here ~ softly harder ~ not_yet open_the_crack")
    .slow(6)
    .chop(16)
    .speed(rand.range(0.8, 1.22))
    .gain(0.062)
    .every(4, x => x.rev().ply(2))],
  [8, s("insist insist ~ hold_the_line ~ make_it_weird ~ glitch edge ~ wrong right ~ swerve still ~ yes no maybe trust_the_noise")
    .slow(6)
    .chop(32)
    .speed(rand.range(0.74, 1.24))
    .gain(0.062)
    .delay(0.16)],
  [10, s("smile remember ~ try_again ~ keep_turning ~ unfold again ~ goldberg ~ almost edge ~ dont_blink follow_me ~ good just_enough")
    .slow(8)
    .chop(16)
    .speed(rand.range(0.72, 1.16))
    .vowel("<a e i o u>")
    .gain(0.06)],
  [6, s("i_am_here ~ stay patient ~ not_yet ~ count_the_gaps ~ hold_the_line ~ leave_a_scar ~ not_for_you for_us ~ too_much just_enough")
    .slow(6)
    .chop(16)
    .speed(rand.range(0.76, 1.2))
    .gain(0.061)
    .room(0.13)]
)