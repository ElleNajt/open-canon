samples('shabda/speech:stay_weird,listen_closer,keep_drifting,not_today,hold_the_line,signal_in_the_noise,wake_up,ghost_in_the_machine,we_are_listening,i_am_here,follow_me,cut_the_static,drift_deeper,stay_with_me,turn_the_dial,between_the_beats,trust_the_gap,i_remember,lean_in,write_the_loop,breathe_again,kind_to_noise,pattern_thinker,soft_reset,tune_your_ears,dont_panic,more_than_signal,hello_stranger,stay_curious,tune_in,make_it_breathe,we_build_patterns,i_hear_you')

setcps(138/60/4)

$: arrange(
  [8,  s("bd ~ ~ ~ bd ~ ~ ~")],
  [8,  s("bd ~ sn ~ bd ~ sn ~")],
  [8,  s("bd ~ sn ~ bd bd sn cr")],
  [8,  s("bd bd [sn sn] ~ bd ~ sn cr")],
  [8,  s("bd ~ sn bd [sn ~] bd ~ sn")],
  [8,  s("bd ~ sn ~ [bd bd] ~ sn [cr cp]")],
  [8,  s("bd bd sn ~ [bd bd] [sn sn] ~ cr")],
  [8,  s("bd ~ [sn sn] bd bd ~ sn cr")],
  [4,  s("bd ~ ~ ~ ~ ~ sn ~")],
  [8,  s("bd ~ sn ~ bd ~ sn [cr ~]")],
  [8,  s("bd bd [sn sn] ~ bd ~ sn [cp cr]")],
  [8,  s("bd ~ sn ~ bd [bd bd] [sn sn] [cr ~]")],
  [8,  s("bd bd [sn sn] bd ~ [sn ~] [cr cp]")],
  [8,  s("bd ~ [sn sn] ~ [bd bd] sn ~ [cr cp]")],
  [8,  s("bd [~ bd] sn ~ bd bd [sn sn] [cr cp]")],
  [8,  s("bd ~ sn bd bd ~ [sn sn] cr")],
  [8,  s("bd bd [sn sn] bd [bd ~] sn [cr cp]")],
  [4,  s("bd ~ ~ ~ ~ ~ ~ ~")],
  [8,  s("bd ~ sn ~ bd ~ sn [cr cp]")],
  [8,  s("bd bd [sn sn] [bd bd] sn ~ cr")],
  [8,  s("bd ~ [sn sn] bd [bd bd] ~ sn cr")]
)
  .gain(0.84)
  .compressor("-18:3:6:0.01:0.12")
  .djf(sine.range(0.06, 0.92).slow(16))
  .swing(0.14)
  .every(8, p => p.palindrome().sometimesBy(0.6, q => q.fast(2)))

$: arrange(
  [4,  s("~")],
  [8,  s("hh*8")],
  [16, s("<hh*16 [hh hh hh oh] hh*16 [hh oh hh oh]>")],
  [16, s("<[hh hh hh hh] [hh oh hh hh] [hh hh oh hh] [hh oh hh oh]>*4")],
  [8,  s("<hh*32 [~ hh]*16>")],
  [16, s("<hh*32 [~ hh]*16 [hh hh oh hh]*8>")],
  [8,  s("<[hh*6 oh] [hh*8] [~ hh*7] [hh*5 oh]>*2")],
  [16, s("<hh*32 [~ hh]*16 [oh ~ hh oh]>*2")],
  [16, s("<hh*24 [oh hh]*4 hh*32 [~ hh]*16>")],
  [8,  s("<[hh*5 ~ hh*3] [hh*7 oh] [~ hh*8] [hh*6 oh]>*2")]
)
  .hpf(sine.range(2400, 12000).slow(16))
  .pan(perlin.range(0.06, 0.94).slow(12))
  .gain(0.11)
  .swing(0.19)
  .every(4, p => p.degradeBy(0.22).sometimesBy(0.5, q => q.fast(2)))

$: note("<c2 ~> <c2 g1> <eb2 ~> <g1 bb1> <ab1 ~> <ab1 g1> <c2 bb1> <g1 ~> <c2 g1> [<c2 ~> <d2 g1>] <eb2 g1> <g1 bb1> <ab1 g1> [<ab1 ~> <g1 ab1>] <c2 bb1> [<g1 ~> <f1 bb1> <c2 g1>]")
  .sound("pulse")
  .lpf(perlin.range(120, 2800).slow(11))
  .lpq(7.6)
  .slide(0.12)
  .gain(0.21)

$: note("<c4 eb4 g4 bb4 d5> <ab3 c4 eb4 gb4 bb4> <f3 ab3 c4 eb4 g4> <g3 bb3 d4 f4 ab4> <bb3 db4 f4 ab4 c5> <ab3 c4 eb4 gb4 bb4> <c4 eb4 g4 bb4 d5> <eb4 g4 bb4 d5 f5> <f3 ab3 c4 eb4 g4> <g3 bb3 d4 f4 ab4>")
  .sound("supersaw")
  .slow(6)
  .lpf(sine.range(620, 4600).slow(12))
  .gain(0.11)
  .juxBy(0.55, p => p.transpose(12).detune(7).lpf(sine.range(1000, 5600).slow(9)))

$: s("<rim ~ rim> [cp rim] [~ rim] [rim rim] ~ <cp rd> [~ rim] <rim ~> [cp cp] ~ [rim ~ rim] <~ rim> <rim rd rim> ~ <cp rim> ~ <rim ~> [cp ~] <rim rim> [~ rd]")
  .echo(6, 0.25, 0.33)
  .hpf(1750)
  .phaser(0.28)
  .distort(0.14)
  .gain(0.085)

$: arrange(
  [16, s("<hello_stranger ~> ~ <listen_closer ~> ~ <between_the_beats ~> ~ <we_are_listening ~> ~")],
  [16, s("<tune_in ~> ~ <turn_the_dial ~> ~ <cut_the_static ~> ~")],
  [16, s("<pattern_thinker ~> ~ <signal_in_the_noise ~> ~ <lean_in drift_deeper> ~")],
  [16, s("<trust_the_gap trust_the_gap> ~ <stay_curious ~> ~ <follow_me ~>")],
  [16, s("<i_am_here ~> ~ <stay_with_me stay_with_me> ~ <hold_the_line ~>")],
  [16, s("<ghost_in_the_machine not_today> ~ <wake_up ~> ~ <i_remember ~>")],
  [16, s("<write_the_loop we_build_patterns> ~ <make_it_breathe ~> ~ <kind_to_noise ~>")],
  [16, s("<soft_reset tune_your_ears> ~ <dont_panic more_than_signal> ~ <breathe_again ~>")],
  [16, s("<keep_drifting ~> <i_hear_you ~> <listen_closer ~> <stay_weird ~>")]
)
  .slow(8)
  .chop(16)
  .delay(perlin.range(0.18, 0.64).slow(10))
  .djf(sine.range(0.12, 0.84).slow(16))
  .gain(0.065)