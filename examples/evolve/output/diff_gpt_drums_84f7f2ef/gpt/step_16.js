samples('shabda/speech:stay_weird,listen_closer,keep_drifting,not_today,hold_the_line,signal_in_the_noise,wake_up,ghost_in_the_machine,we_are_listening,i_am_here,follow_me,cut_the_static,drift_deeper,stay_with_me,turn_the_dial,between_the_beats,trust_the_gap,i_remember,lean_in,write_the_loop,breathe_again,kind_to_noise,pattern_thinker,soft_reset,tune_your_ears,dont_panic,more_than_signal,hello_stranger')

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
  [4,  s("bd bd [sn sn] bd [bd ~] sn cr cr")],
  [8,  s("bd ~ sn ~ bd ~ [sn sn] [cr ~]")],
  [8,  s("bd bd sn ~ bd ~ sn [cp cr]")],
  [4,  s("bd ~ ~ ~ bd ~ sn cr")]
)
  .gain(0.84)
  .compressor("-18:3:6:0.01:0.12")
  .djf(sine.range(0.10, 0.90).slow(16))
  .swing(0.14)
  .every(8, p => p.rev().sometimes(q => q.fast(2)))

$: arrange(
  [4,  s("~")],
  [8,  s("hh*8")],
  [16, s("<hh*16 [hh hh hh oh] hh*16 [hh oh hh oh]>")],
  [16, s("<[hh hh hh hh] [hh oh hh hh] [hh hh oh hh] [hh oh hh oh]>*4")],
  [8,  s("<hh*32 [~ hh]*16>")],
  [16, s("<hh*32 [~ hh]*16 [hh hh oh hh]*8>")],
  [8,  s("<[hh*6 oh] [hh*8] [~ hh*7] [hh*5 oh]>*2")]
)
  .hpf(sine.range(3400, 11200).slow(16))
  .pan(perlin.range(0.10, 0.90).slow(12))
  .gain(0.11)
  .swing(0.18)
  .every(4, p => p.degradeBy(0.24).sometimes(q => q.fast(2)))

$: note("<c2 ~> <c2 c3> <eb2 ~> <g1 ~> <bb1 ~> <ab1 g1> <c2 bb1> <g1 ~> <c2 g1> <ab1 ~> <g1 ~> <c2 ~> <c2 c3> <eb2 eb1> <g1 ~> <bb1 c2>")
  .sound("pulse")
  .lpf(perlin.range(140, 2400).slow(15))
  .slide(0.12)
  .gain(0.23)
  .every(6, p => p.transpose(-12).palindrome().sometimes(q => q.transpose(12)))

$: note("<c4 eb4 g4 bb4> <ab3 c4 eb4 gb4> <g3 bb3 d4 f4> <bb3 db4 f4 ab4> <c4 eb4 g4 bb4> <eb4 g4 bb4 c5> <g3 bb3 d4 f4> <ab3 c4 eb4 gb4>")
  .sound("supersaw")
  .slow(6)
  .lpf(sine.range(480, 3200).slow(12))
  .gain(0.10)
  .juxBy(0.55, p => p.transpose(12).detune(9).lpf(sine.range(900, 3800).slow(9)).sometimes(q => q.rev()))

$: s("<rim rim> [cp rim] rim [~ rim] rim ~ <cp rim rd> [~ rim] <rim ~> [cp cp] ~ rim <~ rim>")
  .echo(6, 0.25, 0.33)
  .hpf(1700)
  .ring(0.40)
  .distort(0.12)
  .gain(0.085)

$: arrange(
  [16, s("<wake_up ~> ~ <cut_the_static ~> ~ <lean_in ~> ~ <breathe_again ~> ~")],
  [16, s("<turn_the_dial listen_closer> ~ <between_the_beats signal_in_the_noise> ~")],
  [16, s("<we_are_listening we_are_listening> ~ <trust_the_gap ~> <stay_weird ~>")],
  [16, s("<follow_me drift_deeper> ~ <i_am_here ~> ~ <stay_with_me ~>")],
  [16, s("<ghost_in_the_machine not_today> ~ <hold_the_line ~> ~")],
  [16, s("<i_remember between_the_beats> ~ <write_the_loop pattern_thinker> ~")],
  [16, s("<soft_reset tune_your_ears> ~ <dont_panic more_than_signal> ~")],
  [16, s("<hello_stranger ~> <keep_drifting ~> <kind_to_noise ~> <trust_the_gap ~>")],
  [16, s("<stay_weird ~> <listen_closer ~> <between_the_beats ~> <we_are_listening ~>")]
)
  .slow(8)
  .chop(24)
  .vowel("<i o a e u a o>")
  .delay(perlin.range(0.22, 0.68).slow(12))
  .gain(0.07)