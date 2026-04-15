// Goldberg Variations - Ground Bass (BWV 988)
// evolved: I keep the bass honest; I let the room breathe elsewhere; I sharpen the hinge-points; I let the hats argue with the grid; I speak only in fragments the loop can forgive

setcps(126/60/4)

samples('shabda/speech/en-GB/m:goldberg,unfold,again,listen,closer,insist,between,gears,i_am_here,stay,patient,wrong,right,smile,remember,not_yet,hold_the_line,count_the_gaps,make_it_weird,keep_turning,breathe,swerve,still,now,good,try_again,lean_in,almost,edge,glitch,softly,harder,yes,no,maybe,leave_a_scar,trust_the_noise,open_the_crack,dont_blink,follow_me,not_for_you,for_us,too_much,just_enough,wait,shhh,okay,i_refuse,ask_me_again,hold_it,too_close,underneath,sweet,fracture,we_continue,not_done,my_turn,little_machine,burn_slow,wake_up,i_change_my_mind,be_kind_to_the_loop,keep_the_promise,dear_listener,confess,prove_it,not_a_god,just_a_loop,again_again,i_wont_apologize,break_it,heal_it,ghost_in_the_grid')

$: arrange(
  [12, stack(
    note("<[g2 ~ e2 d2 b1 c2 d2 g1] [g2 f2 e2 d2 bb1 c2 d2 g1] [g2 ~ e2 d2 b1 c2 cs2 d2 g1] [g2 f2 e2 d2 bb1 a1 g1 ~]>")
      .slow(2)
      .sound("triangle")
      .lpf(perlin.range(140, 4100).slow(9))
      .lpq(perlin.range(0.8, 7.8).slow(12))
      .gain(0.29)
      .every(4, x => x.transpose(12)),
    note("<[g1 ~ e1 d1 b0 c1 d1 g0] [g1 f1 e1 d1 bb0 c1 d1 g0] [g1 ~ e1 d1 b0 c1 cs1 d1 g0] [g1 f1 e1 d1 bb0 a0 g0 ~]>")
      .slow(2)
      .sound("sine")
      .lpf(sine.range(500, 980).slow(12))
      .gain(0.095)
      .sometimesBy(0.35, x => x.transpose(12))
  )],
  [8, stack(
    note("<[g2 ~ e2 d2 b1 c2 eb2 d2 g1] [g2 gs2 e2 d2 b1 c2 cs2 d2] [g2 ~ e2 d2 bb1 c2 eb2 d2 g1] [g2 fs2 e2 d2 bb1 c2 a1 g1]>")
      .slow(2)
      .sound("pulse")
      .lpf(perlin.range(160, 5600).slow(10))
      .lpq(perlin.range(0.9, 8.6).slow(12))
      .gain(0.28)
      .every(6, x => x.rev()),
    note("<[g1 ~ e1 d1 b0 c1 ~ g0] [g1 ~ e1 d1 bb0 c1 ~ g0] [g1 ~ e1 d1 b0 c1 cs1 d1 g0] [g1 fs1 e1 d1 bb0 c1 a0 g0]>")
      .slow(2)
      .sound("sine")
      .lpf(sine.range(520, 1040).slow(11))
      .gain(0.092)
      .pan(tri.range(0.2, 0.8).slow(14))
  )],
  [10, stack(
    note("<[g2 fs2 f2 e2 eb2 d2 cs2 c2] [b1 c2 cs2 d2 eb2 e2 f2 fs2] [g2 ~ f2 e2 eb2 d2 cs2 c2 b1] [g2 fs2 f2 e2 eb2 d2 cs2 ~]>")
      .slow(2)
      .sound("sawtooth")
      .lpf(perlin.range(120, 4600).slow(12))
      .lpq(perlin.range(0.9, 9.2).slow(14))
      .gain(0.265)
      .every(5, x => x.palindrome()),
    note("<[g1 ~ f1 e1 eb1 d1 ~ cs1 c1] [b0 ~ cs1 d1 eb1 e1 ~ f1 fs1] [g1 fs1 f1 e1 eb1 d1 cs1 c1] [b0 ~ cs1 d1 eb1 e1 ~ f1 ~]>")
      .slow(2)
      .sound("sine")
      .lpf(sine.range(470, 920).slow(10))
      .gain(0.093)
      .pan(sine.range(0.37, 0.63).slow(12))
  )],
  [6, stack(
    note("<[g2 ~ e2 d2 b1 c2 d2 g1] [g2 fs2 e2 d2 bb1 c2 a1 g1] [g2 ~ e2 d2 b1 c2 cs2 d2 g1] [g2 f2 e2 d2 bb1 a1 g1 ~]>")
      .slow(2)
      .sound("triangle")
      .lpf(perlin.range(160, 5400).slow(9))
      .lpq(perlin.range(0.7, 8.4).slow(10))
      .gain(0.295)
      .every(3, x => x.transpose(-12)),
    note("<[g1 ~ e1 d1 b0 c1 d1 g0] [g1 fs1 e1 d1 bb0 c1 a0 g0] [g1 ~ e1 d1 b0 c1 cs1 d1 g0] [g1 f1 e1 d1 bb0 a0 g0 ~]>")
      .slow(2)
      .sound("sine")
      .lpf(sine.range(500, 960).slow(12))
      .gain(0.096)
      .pan(sine.range(0.26, 0.74).slow(16))
  )],
  [8, stack(
    note("<[g2 ~ e2 ~ b1 c2 ~ fs1] [g2 f2 ~ d2 bb1 c2 ~ g1] [g2 ~ e2 d2 ~ c2 b1 ~ g1] [g2 f2 ~ d2 bb1 a1 ~ g1]>")
      .slow(2)
      .sound("pulse")
      .lpf(perlin.range(110, 6000).slow(7))
      .lpq(perlin.range(0.9, 9.5).slow(11))
      .gain(0.275)
      .every(4, x => x.rev()),
    note("<[g1 ~ e1 ~ b0 c1 ~ fs0] [g1 f1 ~ d1 bb0 c1 ~ g0] [g1 ~ e1 d1 ~ c1 b0 ~ g0] [g1 f1 ~ d1 bb0 a0 ~ g0]>")
      .slow(2)
      .sound("sine")
      .lpf(sine.range(460, 900).slow(13))
      .gain(0.097)
      .pan(tri.range(0.33, 0.67).slow(12))
  )],
  [4, stack(
    note("<[g2 ~ e2 d2 b1] [c2 d2 g1 ~] [g2 ~ e2 d2 bb1] [c2 cs2 d2 g1]>")
      .slow(2)
      .sound("triangle")
      .lpf(perlin.range(90, 5200).slow(6))
      .lpq(perlin.range(0.8, 9.6).slow(9))
      .gain(0.285)
      .every(2, x => x.palindrome()),
    note("<[g1 ~ e1 d1 b0] [c1 d1 g0 ~] [g1 ~ e1 d1 bb0] [c1 cs1 d1 g0]>")
      .slow(2)
      .sound("sine")
      .lpf(sine.range(420, 860).slow(8))
      .gain(0.094)
      .sometimesBy(0.4, x => x.rev())
  )]
)

$: arrange(
  [12, note("<[[g4 b4] [d5 g5]] [[g4 bb4] [d5 fs5]] [[fs4 a4] [cs5 e5]] [[a4 c5] [e5 ~]] [[g4 bb4] [d5 f5]] [[g4 b4] [d5 f5]] [[e4 g4] [b4 d5]] [[e4 gs4] [b4 d5]]>")
    .sound("piano")
    .gain(sine.range(0.075, 0.145).slow(9))
    .lpf(sine.range(900, 6100).slow(10))
    .room(0.23)
    .juxBy(0.38, x => x.transpose(12))],
  [8, note("<[g4 b4 d5 g5]*2 [b4 d5 g5 b5] [fs4 a4 c5 e5]*2 [a4 cs5 e5 a5] [g4 bb4 d5 fs5] [bb4 d5 f5 bb5] [e4 g4 b4 d5] [g4 b4 d5 ~]>")
    .sound("piano")
    .gain(sine.range(0.072, 0.148).slow(8))
    .lpf(sine.range(1020, 6900).slow(9))
    .room(0.21)
    .juxBy(0.36, x => x.transpose(12))],
  [10, note("<[[g4 b4] [cs5 g5]] [[fs4 a4] [c5 e5]] [[g4 bb4] [d5 fs5]] [[e4 g4] [b4 d5]] [[d4 fs4] [a4 c5]] [[c4 e4] [g4 b4]] [[b3 d4] [fs4 a4]] [[cs4 e4] [g4 bb4]]>")
    .sound("piano")
    .gain(sine.range(0.07, 0.132).slow(11))
    .lpf(sine.range(820, 5600).slow(12))
    .room(0.25)
    .juxBy(0.34, x => x.transpose(12))],
  [6, note("<[g4 b4 d5 g5] [fs4 a4 cs5 e5] [g4 bb4 d5 f5] [e4 g4 b4 d5] [d4 fs4 a4 c5] [c4 e4 g4 bb4] [b3 d4 fs4 a4] [cs4 e4 g4 ~]>")
    .sound("piano")
    .gain(sine.range(0.076, 0.155).slow(8))
    .lpf(sine.range(880, 6100).slow(9))
    .room(0.22)
    .juxBy(0.4, x => x.transpose(12))],
  [8, note("<[[g4 b4] [d5 g5]] [[g4 bb4] [d5 fs5]] [[fs4 a4] [cs5 e5]] [[a4 c5] [e5 ~]] [[g4 bb4] [d5 f5]] [[e4 g4] [b4 d5]] [[d4 fs4] [a4 c5]] [[c4 e4] [g4 bb4]]>")
    .sound("piano")
    .gain(sine.range(0.07, 0.142).slow(10))
    .lpf(sine.range(980, 7000).slow(8))
    .room(0.24)
    .juxBy(0.36, x => x.transpose(12))],
  [4, note("<[g4 b4 d5] [fs4 a4 cs5] [g4 bb4 d5] [e4 g4 b4] [d4 fs4 a4] [c4 e4 g4] [b3 d4 fs4] [cs4 e4 g4]>")
    .sound("piano")
    .gain(sine.range(0.07, 0.125).slow(6))
    .lpf(sine.range(760, 5200).slow(7))
    .room(0.26)
    .juxBy(0.44, x => x.transpose(12))]
)

$: arrange(
  [12, s("<hh [hh cr?] [hh ~] oh>")
    .euclid(11, 16)
    .fast(4)
    .gain(0.056)
    .swing(0.2)
    .degradeBy(0.12)],
  [8, s("<hh [hh? hh] [hh hh] <oh cr?>>")
    .euclid(15, 16)
    .fast(4)
    .gain(0.055)
    .swing(0.22)
    .degradeBy(0.1)],
  [10, s("<hh [hh ~] [hh? hh] <oh cp?>>")
    .euclid(9, 16)
    .fast(3)
    .gain(0.057)
    .swing(0.17)
    .degradeBy(0.14)],
  [6, s("<hh [hh hh] [hh ~] <oh cr?>>")
    .euclid(13, 16)
    .fast(4)
    .gain(0.055)
    .swing(0.21)
    .degradeBy(0.11)],
  [8, s("<[hh hh] [~ hh] <oh hh> [hh cr?]>")
    .euclid(12, 16)
    .fast(4)
    .gain(0.056)
    .swing(0.2)
    .degradeBy(0.13)],
  [4, s("<hh*2 [~ hh] <oh ~> [hh cr?]>")
    .euclid(7, 16)
    .fast(4)
    .gain(0.055)
    .swing(0.26)
    .degradeBy(0.18)]
)

$: arrange(
  [12, s("<bd*2 [bd ~] bd <bd bd> [~ bd]>")
    .gain(0.172)
    .lpf(perlin.range(120, 1450).slow(9))
    .drive(0.48)
    .shape(0.26)
    .compressor("-18:3:6:0.01:0.22")],
  [8, s("<bd [~ bd] bd [bd bd] ~ bd [~ bd] bd>")
    .gain(0.176)
    .lpf(perlin.range(110, 1320).slow(7))
    .drive(0.52)
    .shape(0.28)
    .compressor("-19:3:6:0.01:0.24")],
  [10, s("<bd ~ bd [~ bd] bd ~ bd [bd ~]>")
    .gain(0.165)
    .lpf(perlin.range(100, 1220).slow(11))
    .drive(0.46)
    .shape(0.25)
    .compressor("-18:3:6:0.01:0.22")],
  [6, s("<bd [bd ~] bd <bd bd> [~ bd] bd [~ bd]>")
    .gain(0.174)
    .lpf(perlin.range(110, 1420).slow(8))
    .drive(0.54)
    .shape(0.29)
    .compressor("-18:3:6:0.01:0.22")],
  [8, s("<bd ~ [bd bd] ~ bd [~ bd] bd ~>")
    .gain(0.167)
    .lpf(perlin.range(95, 1380).slow(10))
    .drive(0.5)
    .shape(0.27)
    .compressor("-18:3:6:0.01:0.22")],
  [4, s("<bd ~ ~ bd [~ bd] ~ bd ~>")
    .gain(0.162)
    .lpf(perlin.range(85, 1200).slow(6))
    .drive(0.56)
    .shape(0.24)
    .compressor("-19:3:6:0.01:0.24")]
)

$: arrange(
  [12, s("~ <sn rim> [~ sn] <sn cp> [rim ~] sn <cp ~>")
    .fast(2)
    .swing(0.24)
    .gain(0.113)
    .bpf(sine.range(2100, 4500).slow(10))
    .echo(2, 0.25, 0.23)],
  [8, s("~ <sn rim> [sn ~] <sn cp> [rim sn] ~ <cp rim>")
    .fast(2)
    .swing(0.26)
    .gain(0.118)
    .bpf(sine.range(2200, 4700).slow(9))
    .echo(2, 0.25, 0.21)],
  [10, s("~ <sn ~> [~ rim] <sn cp> [~ sn] rim ~ <cp ~>")
    .fast(2)
    .swing(0.28)
    .gain(0.109)
    .bpf(sine.range(2300, 4900).slow(8))
    .echo(2, 0.333, 0.19)],
  [6, s("~ <sn rim> [~ sn] <sn cp> [rim sn] sn ~ <cp rim>")
    .fast(2)
    .swing(0.25)
    .gain(0.115)
    .bpf(sine.range(2150, 4550).slow(9))
    .echo(2, 0.25, 0.22)],
  [8, s("~ <sn cp> [rim ~] <sn rim> [~ sn] <cp ~> rim")
    .fast(2)
    .swing(0.27)
    .gain(0.111)
    .bpf(sine.range(2250, 5000).slow(7))
    .echo(2, 0.25, 0.2)],
  [4, s("~ <sn rim> ~ <cp ~> [rim sn] ~ <sn ~>")
    .fast(2)
    .swing(0.29)
    .gain(0.108)
    .bpf(sine.range(2400, 5200).slow(6))
    .echo(2, 0.25, 0.18)]
)

$: arrange(
  [12, s("<dear_listener listen closer> ~ <lean_in now> ~ <confess breathe still> ~ count_the_gaps ~ hold_the_line ~ <between gears> ~ i_am_here")
    .slow(6)
    .striate(8)
    .speed(rand.range(0.8, 1.18))
    .gain(0.062)
    .vowel("o a e")],
  [8, s("smile remember ~ <wrong right> ~ <insist patient> ~ <prove_it almost> ~ keep_turning ~ make_it_weird ~ open_the_crack ~ trust_the_noise")
    .slow(6)
    .striate(8)
    .speed(rand.range(0.78, 1.24))
    .gain(0.061)
    .vowel("u o a")],
  [10, s("<i_refuse ask_me_again> ~ <yes no maybe> ~ <softly harder> ~ leave_a_scar ~ i_change_my_mind ~ <not_a_god just_a_loop> ~ again_again ~ <dont_blink follow_me> ~ <edge glitch>")
    .slow(8)
    .striate(10)
    .speed(rand.range(0.74, 1.16))
    .gain(0.06)
    .vowel("i e a")],
  [6, s("not_done my_turn ~ we_continue ~ <not_for_you for_us> ~ <too_much just_enough> ~ <too_close underneath> ~ keep_the_promise ~ <wake_up burn_slow>")
    .slow(6)
    .striate(8)
    .speed(rand.range(0.78, 1.22))
    .gain(0.061)
    .vowel("o u e")],
  [8, s("<goldberg unfold> again_again ~ <stay patient> ~ <good try_again> ~ <fracture sweet> ~ <hold_it not_yet> ~ <shhh wait> ~ <now okay> ~ little_machine")
    .slow(6)
    .striate(8)
    .speed(rand.range(0.8, 1.24))
    .gain(0.062)
    .vowel("a o i")],
  [4, s("<ghost_in_the_grid i_wont_apologize> ~ break_it ~ heal_it ~ <shhh breathe> ~")
    .slow(8)
    .striate(12)
    .speed(rand.range(0.7, 1.12))
    .gain(0.06)
    .vowel("u i o")]
)