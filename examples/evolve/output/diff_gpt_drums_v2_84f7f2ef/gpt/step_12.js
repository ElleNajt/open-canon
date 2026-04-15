setcps(140/60/4)

samples('shabda/speech:keep_listening,im_here,not_yet,stay_with_me,between_the_beats,i_am_the_pulse,lean_in,hold_the_noise,listen_close,again,okay,just_breathe,still_with_me,trust_me,no_rush,follow_me,deeper_now,shift_with_me,one_more_time,dont_let_go,lets_get_strange,more_space,little_glitch,i_know_you_can_hear_me')

$: arrange(
  [8, stack(s("bd ~ ~ ~ bd ~ ~ ~"), s("~ ~ ~ ~ ~ ~ cr ~"))],
  [8, stack(s("bd ~ sn ~ bd ~ sn ~"), s("~ ~ ~ ~ cr ~ ~ ~"))],
  [8, stack(s("bd [~ bd] sn [cp ~] bd [sn rim] ~ sn"), s("~ ~ cr ~ ~ ~ ~ ~"))],
  [8, stack(s("bd ~ sn cp bd [sn rim] cr [~ cp]"), s("~ ~ ~ ~ ~ ~ rim ~"))],
  [8, stack(s("bd*2 [sn rim] bd sn"), s("~ cr ~ ~ ~ ~ cr ~"))],
  [8, stack(s("bd [bd ~] sn [cp rim] bd [sn rim] cr ~"), s("~ ~ ~ ~ ~ rim ~ ~"))],
  [8, stack(s("bd bd ~ [sn rim] bd [sn cp] ~ sn"), s("~ ~ cr ~ ~ ~ cr ~"))],
  [8, stack(s("bd ~ ~ rim bd ~ sn rim"), s("~ ~ ~ ~ ~ ~ cr ~"))]
).fast(2).swing(0.21).compressor("-22:6:6:0.008:0.15").every(4, p => p.degradeBy(0.10).sometimes(q => q.rev()).rarely(q => q.palindrome())).gain(0.86)

$: arrange(
  [8, s("~ hh*4 ~ hh*3")],
  [8, s("[hh*3 ~ hh oh]*2 [hh*2 ~ hh oh]*2")],
  [8, s("<hh hh hh oh>*8")],
  [8, s("~ [hh hh hh] ~ [hh hh oh]")],
  [8, s("oh ~ hh*3 ~ hh*3")],
  [8, s("[hh*4 ~] [hh*2 oh] [hh*4 ~] [hh*2 oh]")],
  [8, s("<hh oh hh hh>*4")],
  [8, s("[hh*2 ~ hh] [oh ~ hh*2] [hh*3 ~] [~ hh oh]")]
).fast(2).pan(perlin.range(0.12,0.88).slow(6)).hpf(5200).every(4, p => p.degradeBy(0.24).sometimes(q => q.rev()).rarely(q => q.ply(2))).gain(0.15)

$: arrange(
  [8, note("<c2 ~ c2 eb2> ~ <g1 ~ bb1 g1> ~")],
  [8, note("<c2 eb2 ~ g1> <bb1 ~ g1 ~> <ab1 ~ bb1 ~> <g1 ~ ~ ~>")],
  [8, note("<c2 ~ eb2 ~> <f1 ~ g1 ~> <ab1 ~ bb1 ~> <g1 ~ bb1 ~>")],
  [8, note("<c2 ~ ~ eb2> ~ <g1 ~ bb1> ~")],
  [8, note("<bb1 ~ g1 ~> <ab1 ~ g1 ~> <f1 ~ g1 ~> <g1 ~ ~ ~>")],
  [8, note("<c2 c3 eb2 g2> ~ <g1 g2 bb1 d2> ~")],
  [8, note("<c2 ~ eb2 g2> <~ g1 bb1 ~> <c2 ~ eb2 ~> <g1 ~ bb1 ~>")],
  [8, note("<c2 ~ eb2 ~> <g1 ~ bb1 ~> <ab1 ~ bb1 ~> <g1 ~ ~ ~>")]
).s("pulse").slow(2).lpf(sine.range(140, 2600).slow(10)).every(4, p => p.transpose(-12).rarely(q => q.rev())).gain(0.30)

$: arrange(
  [8, note("<c4 eb4 g4 bb4> <ab3 c4 eb4 g4> <f3 ab3 c4 eb4> <g3 bb3 d4 f4>")],
  [8, note("<c5 eb5 g5 bb5> <ab4 c5 eb5 g5> <f4 ab3 c4 eb4> <g4 bb3 d4 f4>")],
  [8, note("<c4 g4 bb4 eb5> <ab3 eb4 g4 c5> <f3 c4 eb4 ab4> <g3 d4 f4 bb4>")],
  [8, note("<ab3 c4 eb4 g4> <~ ~ ~ ~> <g3 bb3 d4 f4> <~ ~ ~ ~>")],
  [8, note("<c4 eb4 g4 bb4> <ab3 c4 eb4 g4> <bb3 d4 f4 ab4> <g3 bb3 d4 f4>")],
  [8, note("<c4 eb4 g4 bb4> <~ ~ ~ ~> <bb3 d4 f4 ab4> <f3 ab3 c4 eb4>")],
  [8, note("<c4 eb4 g4 bb4> <ab3 c4 eb4 g4> <f3 ab3 c4 eb4> <g3 bb3 d4 f4>")],
  [8, note("<c4 eb4 g4 bb4> <g3 bb3 d4 f4> <ab3 c4 eb4 g4> <bb3 d4 f4 ab4>")]
).s("supersaw").slow(4).lpf(sine.range(260, 5600).slow(18)).room(0.22).gain(0.12)

$: arrange(
  [8, s("~ keep_listening ~ ~ listen_close ~ ~")],
  [8, s("im_here ~ not_yet ~ trust_me ~")],
  [8, s("between_the_beats ~ just_breathe ~ stay_with_me")],
  [8, s("lean_in ~ i_am_the_pulse ~ hold_the_noise ~")],
  [8, s("i_know_you_can_hear_me ~ ~ more_space ~")],
  [8, s("again ~ follow_me still_with_me ~")],
  [8, s("lets_get_strange ~ little_glitch ~ dont_let_go")],
  [8, s("one_more_time ~ keep_listening ~ trust_me ~")]
).slow(2).chop(16).delay(0.30).room(0.18).gain(0.11)

$: note("<c6 ~ [eb6 g6] ~ bb6> [~ g6] <eb6 ~> <g6 ~> <bb6 ~ [g6 eb6]> ~ <c7 ~ bb6 ~> <fs6 ~> ~ <eb6 ~ [g6 bb6]>").s("sine").fast(4).lpf(perlin.range(900, 7600).slow(7)).echo(3, 0.25, 0.32).gain(0.065)