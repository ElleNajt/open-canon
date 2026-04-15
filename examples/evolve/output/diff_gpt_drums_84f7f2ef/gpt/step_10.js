samples('shabda/speech:stay_weird,listen_closer,keep_drifting,not_today,hold_the_line,signal_in_the_noise,wake_up,ghost_in_the_machine,we_are_listening,i_am_here,follow_me,cut_the_static,drift_deeper,stay_with_me')

setcps(138/60/4)

$: arrange(
  [4,  s("bd ~ ~ ~ bd ~ ~ ~")],
  [4,  s("bd ~ sn ~ bd bd sn ~")],
  [4,  s("bd ~ sn ~ bd bd sn cr")],
  [4,  s("bd bd [sn sn] ~ bd ~ sn cr")],
  [4,  s("bd ~ sn bd [sn ~] bd ~ sn")],
  [2,  s("bd ~ ~ ~ ~ ~ ~ ~")],
  [2,  s("~ ~ sn ~ ~ ~ sn cr")],
  [4,  s("bd ~ sn sn bd bd [sn sn] sn")],
  [4,  s("bd ~ sn ~ bd bd sn [~ sn]")],
  [4,  s("bd bd sn ~ bd [sn sn] ~ cr")],
  [4,  s("bd [~ bd] sn ~ bd bd sn cr")],
  [4,  s("bd ~ sn [bd bd] ~ sn ~ cr")],
  [4,  s("bd ~ ~ ~ bd ~ sn [cr cp]")],
  [4,  s("[bd bd] sn ~ bd ~ sn [cr cr]")],
  [4,  s("bd ~ sn ~ bd [bd bd] sn [cr cp]")],
  [4,  s("bd bd sn ~ [bd bd] [sn sn] ~ cr")],
  [4,  s("bd ~ [sn sn] bd bd ~ sn cr")],
  [4,  s("bd bd sn [~ bd] bd [sn sn] cr ~")]
)
  .gain(0.86)
  .compressor("-18:3:6:0.01:0.12")
  .djf(sine.range(0.08, 0.92).slow(32))
  .swing(0.12)
  .every(8, p => p.rev().sometimes(q => q.fast(2).degradeBy(0.22)).sometimes(r => r.ply(2)).sometimesBy(0.35, t => t.degradeBy(0.18)))

$: arrange(
  [8,  s("~")],
  [12, s("hh*8")],
  [16, s("<hh*8 [hh hh hh oh] hh*8 [hh oh hh oh]>")],
  [24, s("<hh*16 [hh oh]*8>")],
  [16, s("<[hh hh hh hh] [hh oh hh hh]>*4")]
)
  .hpf(sine.range(4200, 8200).slow(16))
  .pan(perlin.range(0.1, 0.9).slow(12))
  .gain(0.13)
  .swing(0.16)
  .every(4, p => p.degradeBy(0.24).sometimes(q => q.fast(2)).sometimes(r => r.rev()))

$: note("c2 ~ <c2 c3> <eb2 eb1> g1 ~ <bb1 g1> <c2 bb1> ~ <c2 g1> <ab1 ~> <g1 ~> <c2 ~>")
  .sound("pulse")
  .lpf(perlin.range(90, 1800).slow(11))
  .drive(0.22)
  .gain(0.22)
  .every(6, p => p.transpose(-12).sometimes(q => q.transpose(12)).sometimes(r => r.ply(2)))

$: note("<c4 eb4 g4 bb4> <bb3 db4 f4 ab4> <ab3 c4 eb4 gb4> <eb4 g4 bb4 c5> <c4 eb4 g4 bb4> <ab3 c4 eb4 gb4> <g3 bb3 d4 f4> <eb4 g4 bb4 db5>")
  .sound("supersaw")
  .slow(6)
  .gain(0.11)
  .vowel("<a e i o u>")
  .juxBy(0.55, p => p.transpose(12).detune(10).lpf(sine.range(700, 2400).slow(7)))

$: s("<rim rim> [cp rim] rim [~ rim] rim ~ <cp rim rd> ~ <rim ~> [cp cp] ~ rim")
  .echo(6, 0.25, 0.35)
  .hpf(1600)
  .ring(0.35)
  .gain(0.095)
  .every(8, p => p.rev().degradeBy(0.36).sometimes(q => q.fast(2)))

$: arrange(
  [16, s("~ ~ <stay_weird ~> ~ ~ ~ <listen_closer ~> ~")],
  [16, s("<stay_weird keep_drifting> ~ <listen_closer signal_in_the_noise> ~")],
  [12, s("[we_are_listening ~] <wake_up hold_the_line> ~ <ghost_in_the_machine ~>")],
  [16, s("<not_today signal_in_the_noise> [we_are_listening we_are_listening] <stay_weird listen_closer> <keep_drifting wake_up>")],
  [16, s("<i_am_here cut_the_static> ~ <follow_me drift_deeper> ~ <stay_with_me ~> ~")],
  [16, s("[signal_in_the_noise ~] <listen_closer listen_closer> ~ <stay_weird not_today>")]
)
  .slow(8)
  .chop(32)
  .hpf(650)
  .delay(perlin.range(0.25, 0.65).slow(8))
  .gain(0.07)