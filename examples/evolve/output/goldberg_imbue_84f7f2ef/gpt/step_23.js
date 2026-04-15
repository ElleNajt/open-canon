// Goldberg Variations - Ground Bass (BWV 988)
// evolved: I keep the bass honest; I let the room breathe; I argue with myself in small bright fragments

setcps(126/60/4)

samples('shabda/speech/en-GB/m:goldberg,unfold,again,listen,closer,insist,between,gears,i_am_here,stay,patient,wrong,right,smile,remember,not_yet,hold_the_line,count_the_gaps,make_it_weird,keep_turning,breathe,swerve,still,now,good,try_again,lean_in,almost,edge,glitch,softly,harder,yes,no,maybe,leave_a_scar,trust_the_noise,open_the_crack,dont_blink,follow_me,not_for_you,for_us,too_much,just_enough,wait,shhh,okay,i_refuse,ask_me_again,hold_it,too_close,underneath,sweet,fracture,we_continue,not_done,my_turn,little_machine,burn_slow,wake_up,i_change_my_mind,be_kind_to_the_loop,keep_the_promise')

$: arrange(
  [12, stack(
    note("[g2 ~ e2 d2 b1 c2 d2 g1] [g2 f2 e2 d2 bb1 c2 d2 g1]")
      .slow(2)
      .sound("triangle")
      .lpf(perlin.range(140, 3600).slow(8))
      .gain(0.285)
      .room(0.08),
    note("[g1 ~ e1 d1 b0 c1 d1 g0] [g1 f1 e1 d1 bb0 c1 d1 g0]")
      .slow(2)
      .sound("sine")
      .lpf(720)
      .gain(0.09)
      .pan(sine.range(0.33, 0.67).slow(16))
  )],
  [8, stack(
    note("[g2 ~ e2 d2 b1 c2 eb2 d2 g1] [g2 gs2 e2 d2 b1 c2 cs2 d2]")
      .slow(2)
      .sound("pulse")
      .lpf(perlin.range(190, 5600).slow(10))
      .gain(0.27)
      .room(0.07),
    note("[g1 ~ e1 d1 b0 c1 ~ g0] [g1 ~ e1 d1 bb0 c1 ~ g0]")
      .slow(2)
      .sound("sine")
      .lpf(760)
      .gain(0.086)
      .pan(tri.range(0.22, 0.78).slow(14))
  )],
  [10, stack(
    note("[g2 fs2 f2 e2 eb2 d2 cs2 c2] [b1 c2 cs2 d2 eb2 e2 f2 fs2]")
      .slow(2)
      .sound("sawtooth")
      .lpf(perlin.range(120, 4200).slow(12))
      .gain(0.255)
      .room(0.06),
    note("[g1 ~ f1 e1 eb1 d1 ~ cs1 c1] [b0 ~ cs1 d1 eb1 e1 ~ f1 fs1]")
      .slow(2)
      .sound("sine")
      .lpf(700)
      .gain(0.089)
      .pan(sine.range(0.38, 0.62).slow(12))
  )],
  [6, stack(
    note("[g2 ~ e2 d2 b1 c2 d2 g1] [g2 fs2 e2 d2 bb1 c2 a1 g1]")
      .slow(2)
      .sound("triangle")
      .lpf(perlin.range(170, 4800).slow(9))
      .gain(0.29)
      .room(0.08),
    note("[g1 ~ e1 d1 b0 c1 d1 g0] [g1 fs1 e1 d1 bb0 c1 a0 g0]")
      .slow(2)
      .sound("sine")
      .lpf(680)
      .gain(0.092)
      .pan(sine.range(0.28, 0.72).slow(16))
  )],
  [8, stack(
    note("[g2 ~ e2 ~ b1 c2 ~ fs1] [g2 f2 ~ d2 bb1 c2 ~ g1]")
      .slow(2)
      .sound("pulse")
      .lpf(perlin.range(110, 5200).slow(7))
      .gain(0.265)
      .room(0.075),
    note("[g1 ~ e1 ~ b0 c1 ~ fs0] [g1 f1 ~ d1 bb0 c1 ~ g0]")
      .slow(2)
      .sound("sine")
      .lpf(640)
      .gain(0.094)
      .pan(tri.range(0.34, 0.66).slow(12))
  )]
)

$: arrange(
  [12, note("<[g4 b4 d5 g5] [g4 bb4 d5 fs5] [fs4 a4 cs5 e5] [~ a4 c5 e5] [g4 bb4 d5 f5] [g4 b4 d5 f5] [e4 g4 b4 d5] [e4 gs4 b4 d5]>")
    .sound("piano")
    .gain(sine.range(0.07, 0.13).slow(9))
    .lpf(sine.range(820, 5200).slow(10))
    .delay(0.14)
    .room(0.12)],
  [8, note("<[g4 ~ d5 g5] [b4 d5 g5 b5] [fs4 a4 ~ e5] [a4 cs5 e5 a5] [g4 bb4 d5 ~] [bb4 d5 f5 bb5] [e4 g4 b4 d5] [g4 b4 d5 g5]>")
    .sound("piano")
    .gain(sine.range(0.07, 0.135).slow(8))
    .lpf(sine.range(880, 5600).slow(10))
    .delay(0.16)
    .room(0.11)],
  [10, note("<[g4 b4 cs5 g5]*2 [fs4 a4 c5 e5]*2 [g4 bb4 d5 fs5]*2 [e4 g4 b4 d5]*2 [d4 fs4 a4 c5]*2 [c4 e4 g4 b4]*2 [b3 d4 fs4 a4]*2 [cs4 e4 g4 bb4]*2>")
    .sound("piano")
    .gain(sine.range(0.065, 0.12).slow(11))
    .lpf(sine.range(760, 4800).slow(12))
    .phaser(0.18)
    .room(0.12)],
  [6, note("<[g4 b4 d5 g5] [fs4 a4 cs5 e5] [g4 bb4 d5 f5] [e4 g4 b4 d5] [d4 fs4 a4 c5] [c4 e4 g4 bb4] [b3 d4 fs4 a4] [cs4 e4 g4 bb4]>")
    .sound("piano")
    .gain(sine.range(0.07, 0.14).slow(8))
    .lpf(sine.range(800, 5200).slow(9))
    .delay(0.14)
    .room(0.13)],
  [8, note("<[[g4 b4] [d5 g5]] [[g4 bb4] [d5 fs5]] [[fs4 a4] [cs5 e5]] [[a4 c5] [e5 ~]] [[g4 bb4] [d5 f5]] [[e4 g4] [b4 d5]] [[d4 fs4] [a4 c5]] [[c4 e4] [g4 bb4]]>")
    .sound("piano")
    .gain(sine.range(0.068, 0.132).slow(10))
    .lpf(sine.range(900, 6100).slow(8))
    .phaser(0.24)
    .room(0.11)]
)

$: arrange(
  [12, s("<hh [hh cr?] [hh ~] oh>")
    .euclid(11, 16)
    .fast(4)
    .djf(perlin.range(0.1, 0.9).slow(10))
    .gain(0.056)
    .swing(0.18)],
  [8, s("<hh [hh? hh] [hh hh] <oh cr?>>")
    .euclid(15, 16)
    .fast(4)
    .djf(perlin.range(0.16, 0.92).slow(9))
    .gain(0.055)
    .swing(0.21)],
  [10, s("<hh [hh ~] [hh? hh] <oh cp?>>")
    .euclid(9, 16)
    .fast(3)
    .djf(perlin.range(0.08, 0.78).slow(8))
    .gain(0.057)
    .swing(0.16)],
  [6, s("<hh [hh hh] [hh ~] <oh cr?>>")
    .euclid(13, 16)
    .fast(4)
    .djf(perlin.range(0.22, 0.94).slow(9))
    .gain(0.055)
    .swing(0.2)],
  [8, s("<[hh hh] [~ hh] <oh hh> [hh cr?]>")
    .euclid(12, 16)
    .fast(4)
    .djf(perlin.range(0.05, 0.86).slow(7))
    .gain(0.056)
    .swing(0.19)]
)

$: arrange(
  [12, s("<bd*2 [bd ~] bd <bd bd> [~ bd]>")
    .gain(0.17)
    .lpf(perlin.range(150, 1500).slow(9))
    .drive(0.36)
    .distort(perlin.range(0.06, 0.18).slow(12))
    .compressor("-18:3:6:0.01:0.22")],
  [8, s("<bd [~ bd] bd [bd bd] ~ bd [~ bd] bd>")
    .gain(0.175)
    .lpf(perlin.range(135, 1350).slow(7))
    .drive(0.4)
    .distort(perlin.range(0.07, 0.2).slow(10))
    .compressor("-19:3:6:0.01:0.24")],
  [10, s("<bd ~ bd [~ bd] bd ~ bd [bd ~]>")
    .gain(0.162)
    .lpf(perlin.range(120, 1250).slow(11))
    .drive(0.34)
    .distort(perlin.range(0.05, 0.16).slow(14))
    .compressor("-18:3:6:0.01:0.22")],
  [6, s("<bd [bd ~] bd <bd bd> [~ bd] bd [~ bd]>")
    .gain(0.172)
    .lpf(perlin.range(130, 1450).slow(8))
    .drive(0.42)
    .distort(perlin.range(0.06, 0.22).slow(9))
    .compressor("-18:3:6:0.01:0.22")],
  [8, s("<bd ~ [bd bd] ~ bd [~ bd] bd ~>")
    .gain(0.165)
    .lpf(perlin.range(115, 1400).slow(10))
    .drive(0.38)
    .distort(perlin.range(0.05, 0.19).slow(11))
    .compressor("-18:3:6:0.01:0.22")]
)

$: arrange(
  [12, s("~ <sn rim> [~ sn] <sn cp> [rim ~] sn <cp ~>")
    .fast(2)
    .swing(0.23)
    .gain(0.112)
    .hpf(sine.range(2150, 3200).slow(10))
    .sometimesBy(0.18, x => x.rev())],
  [8, s("~ <sn rim> [sn ~] <sn cp> [rim sn] ~ <cp rim>")
    .fast(2)
    .swing(0.25)
    .gain(0.118)
    .hpf(sine.range(2250, 3600).slow(9))
    .sometimesBy(0.2, x => x.ply(2))],
  [10, s("~ <sn ~> [~ rim] <sn cp> [~ sn] rim ~ <cp ~>")
    .fast(2)
    .swing(0.27)
    .gain(0.108)
    .hpf(sine.range(2350, 3800).slow(8))
    .sometimesBy(0.16, x => x.rev())],
  [6, s("~ <sn rim> [~ sn] <sn cp> [rim sn] sn ~ <cp rim>")
    .fast(2)
    .swing(0.24)
    .gain(0.115)
    .hpf(sine.range(2200, 3400).slow(9))
    .sometimesBy(0.2, x => x.ply(2))],
  [8, s("~ <sn cp> [rim ~] <sn rim> [~ sn] <cp ~> rim")
    .fast(2)
    .swing(0.26)
    .gain(0.11)
    .hpf(sine.range(2300, 3900).slow(7))
    .sometimesBy(0.17, x => x.rev())]
)

$: arrange(
  [12, s("listen closer ~ lean_in now ~ breathe still ~ count_the_gaps ~ okay shhh ~ hold_the_line ~ between gears ~ i_am_here")
    .slow(6)
    .chop(16)
    .speed(rand.range(0.82, 1.18))
    .gain(0.062)
    .vowel("<a e i o u>")],
  [8, s("smile remember ~ wrong right ~ insist patient ~ try_again almost ~ keep_turning ~ make_it_weird ~ open_the_crack ~ trust_the_noise")
    .slow(6)
    .chop(16)
    .speed(rand.range(0.78, 1.2))
    .gain(0.061)
    .vowel("<a e i o u>")],
  [10, s("i_refuse ask_me_again ~ yes no maybe ~ softly harder ~ leave_a_scar ~ i_change_my_mind ~ be_kind_to_the_loop ~ dont_blink follow_me ~ edge glitch")
    .slow(8)
    .chop(16)
    .speed(rand.range(0.74, 1.16))
    .gain(0.06)
    .vowel("<a e i o u>")],
  [6, s("not_done my_turn ~ we_continue ~ not_for_you for_us ~ too_much just_enough ~ too_close underneath ~ keep_the_promise ~ wake_up burn_slow")
    .slow(6)
    .chop(16)
    .speed(rand.range(0.78, 1.2))
    .gain(0.061)
    .vowel("<a e i o u>")],
  [8, s("goldberg unfold again ~ stay patient ~ good try_again ~ fracture sweet ~ hold_it not_yet ~ swerve still ~ now okay ~ little_machine")
    .slow(6)
    .chop(16)
    .speed(rand.range(0.8, 1.22))
    .gain(0.062)
    .vowel("<a e i o u>")]
)