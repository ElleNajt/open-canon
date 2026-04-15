samples('shabda/speech:stay_weird,listen_closer,keep_drifting,not_today,hold_the_line,signal_in_the_noise,wake_up,ghost_in_the_machine,we_are_listening,i_am_here,follow_me,cut_the_static,drift_deeper,stay_with_me,turn_the_dial,between_the_beats,trust_the_gap,i_remember')

setcps(138/60/4)

$: arrange(
  [4,  s("bd ~ ~ ~ bd ~ ~ ~")],
  [4,  s("bd ~ sn ~ bd ~ sn ~")],
  [4,  s("bd ~ sn ~ bd bd sn cr")],
  [4,  s("bd bd [sn sn] ~ bd ~ sn cr")],
  [4,  s("bd ~ sn bd [sn ~] bd ~ sn")],
  [4,  s("bd ~ sn ~ bd [bd bd] sn [cr cp]")],
  [4,  s("bd bd sn ~ [bd bd] [sn sn] ~ cr")],
  [4,  s("bd ~ [sn sn] bd bd ~ sn cr")],
  [4,  s("bd ~ ~ ~ ~ ~ sn ~")],
  [4,  s("bd bd sn [sn ~] bd bd sn cr")]
)
  .gain(0.86)
  .compressor("-18:3:6:0.01:0.12")
  .djf(sine.range(0.06, 0.94).slow(16))
  .swing(0.12)
  .every(8, p => p.rev().sometimes(q => q.fast(2).degradeBy(0.22)).sometimes(r => r.ply(2)).sometimesBy(0.35, t => t.degradeBy(0.18)))

$: arrange(
  [8,  s("~")],
  [8,  s("hh*8")],
  [16, s("<hh*16 [hh hh hh oh] hh*16 [hh oh hh oh]>")],
  [16, s("<[hh hh hh hh] [hh oh hh hh] [hh hh oh hh] [hh oh hh oh]>*4")],
  [8,  s("<hh*32 [~ hh]*16>")]
)
  .hpf(sine.range(4200, 9000).slow(16))
  .pan(perlin.range(0.08, 0.92).slow(10))
  .gain(0.13)
  .swing(0.16)
  .every(4, p => p.degradeBy(0.24).sometimes(q => q.fast(2)).sometimes(r => r.rev()))

$: note("<c2 ~> <c2 c3> <eb2 eb1> g1 <bb1 ~> <ab1 g1> <c2 bb1> ~ <c2 g1> <ab1 ~> <g1 ~> <c2 ~> <c2 c3> <eb2 ~> <g1 ~> <bb1 c2>")
  .sound("pulse")
  .lpf(perlin.range(90, 2100).slow(13))
  .drive(0.26)
  .gain(0.22)
  .every(6, p => p.transpose(-12).sometimes(q => q.transpose(12)).sometimes(r => r.ply(2)))

$: note("<c4 eb4 g4 bb4> <bb3 db4 f4 ab4> <ab3 c4 eb4 gb4> <g3 bb3 d4 f4> <eb4 g4 bb4 c5> <ab3 c4 eb4 gb4> <g3 bb3 d4 f4> <c4 eb4 g4 bb4>")
  .sound("supersaw")
  .slow(6)
  .gain(0.11)
  .vowel("<a e i o u>")
  .juxBy(0.55, p => p.transpose(12).detune(10).lpf(sine.range(650, 2600).slow(9)))

$: s("<rim rim> [cp rim] rim [~ rim] rim ~ <cp rim rd> [~ rim] <rim ~> [cp cp] ~ rim")
  .echo(6, 0.25, 0.35)
  .hpf(1600)
  .ring(0.35)
  .gain(0.095)
  .every(8, p => p.rev().degradeBy(0.36).sometimes(q => q.fast(2)))

$: arrange(
  [16, s("~ ~ <wake_up ~> ~ ~ ~ <cut_the_static ~> ~")],
  [16, s("<turn_the_dial listen_closer> ~ <between_the_beats signal_in_the_noise> ~")],
  [16, s("<we_are_listening we_are_listening> ~ <trust_the_gap ~> <stay_weird ~>")],
  [16, s("<follow_me drift_deeper> ~ <i_am_here ~> ~ <stay_with_me ~>")],
  [16, s("<ghost_in_the_machine not_today> ~ <hold_the_line ~> ~")],
  [16, s("<i_remember between_the_beats> ~ <listen_closer trust_the_gap> ~")]
)
  .slow(8)
  .chop(32)
  .hpf(650)
  .delay(perlin.range(0.22, 0.68).slow(10))
  .gain(0.07)