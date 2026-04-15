setcps(140/60/4)

samples('shabda/speech:keep_listening,im_here,not_yet,stay_with_me,between_the_beats,i_am_the_pulse,lean_in,hold_the_noise,listen_close,again,okay,just_breathe,still_with_me,trust_me,no_rush,follow_me,deeper_now,shift_with_me,one_more_time,dont_let_go')

$: arrange(
  [4, stack(s("bd ~ ~ ~ bd ~ ~ ~"), s("~ ~ ~ ~ ~ ~ cr ~"))],
  [4, stack(s("bd ~ sn ~ bd sn ~ sn"), s("~ ~ ~ ~ cr ~ ~ ~"))],
  [8, stack(s("bd [~ bd] sn [cp ~] bd [sn rim]"), s("~ ~ cr ~ ~ ~ ~ ~"))],
  [4, stack(s("bd ~ ~ rim bd ~ sn rim"), s("~ ~ ~ ~ ~ ~ cr ~"))],
  [8, stack(s("bd*2 [sn rim] bd sn"), s("~ cr ~ ~ ~ ~ cr ~"))],
  [8, stack(s("bd [bd ~] sn [cp rim] bd [sn rim] cr ~"), s("~ ~ ~ ~ ~ rim ~ ~"))],
  [8, stack(s("bd ~ sn cp bd [sn rim] cr [~ cp]"), s("~ ~ ~ ~ ~ ~ rim ~"))]
).fast(2).swing(0.16).compressor("-18:4:6:0.01:0.2").every(4, p => p.degradeBy(0.07)).gain(0.86)

$: arrange(
  [4, s("~ hh*4 ~ hh*3")],
  [4, s("[hh*3 ~ hh oh]*2 [hh*2 ~ hh oh]*2")],
  [8, s("<hh hh hh oh>*8")],
  [4, s("~ [hh hh hh] ~ [hh hh oh]")],
  [4, s("oh ~ hh*3 ~ hh*3")],
  [8, s("[hh*4 ~] [hh*2 oh] [hh*4 ~] [hh*2 oh]")],
  [8, s("<hh oh hh hh>*4")]
).fast(2).pan(perlin.range(0.15,0.85).slow(6)).hpf(5000).every(4, p => p.degradeBy(0.2)).gain(0.15)

$: arrange(
  [8, note("<c2 ~ c2 eb2> ~ <g1 ~ bb1 g1> ~")],
  [8, note("<c2 eb2 ~ g1> <bb1 ~ g1 ~> <ab1 ~ bb1 ~> <g1 ~ ~ ~>")],
  [8, note("<c2 ~ eb2 ~> <f1 ~ g1 ~> <ab1 ~ bb1 ~> <g1 ~ bb1 ~>")],
  [4, note("<c2 ~ ~ eb2> ~ <g1 ~ bb1> ~")],
  [4, note("<bb1 ~ g1 ~> <ab1 ~ g1 ~>")],
  [8, note("<c2 c3 eb2 g2> ~ <g1 g2 bb1 d2> ~")],
  [8, note("<c2 ~ eb2 g2> <~ g1 bb1 ~> <c2 ~ eb2 ~> <g1 ~ bb1 ~>")]
).s("pulse").slow(2).lpf(sine.range(140, 2400).slow(8)).lpq(7).gain(0.3)

$: arrange(
  [8, note("<c4 eb4 g4 bb4> <ab3 c4 eb4 g4> <f3 ab3 c4 eb4> <g3 bb3 d4 f4>")],
  [8, note("<c5 eb5 g5 bb5> <ab4 c5 eb5 g5> <f4 ab4 c5 eb5> <g4 bb4 d5 f5>")],
  [8, note("<c4 g4 bb4 eb5> <ab3 eb4 g4 c5> <f3 c4 eb4 ab4> <g3 d4 f4 bb4>")],
  [4, note("<ab3 c4 eb4 g4> <~ ~ ~ ~> <g3 bb3 d4 f4> <~ ~ ~ ~>")],
  [4, note("<c4 eb4 g4 bb4> <f3 ab3 c4 eb4>")],
  [8, note("<c4 eb4 g4 bb4> <ab3 c4 eb4 g4> <bb3 d4 f4 ab4> <g3 bb3 d4 f4>")],
  [8, note("<c4 eb4 g4 bb4> <~ ~ ~ ~> <bb3 d4 f4 ab4> <f3 ab3 c4 eb4>")]
).s("supersaw").slow(4).lpf(sine.range(220, 3600).slow(12)).phaser(0.1).gain(0.12)

$: arrange(
  [8, s("~ keep_listening ~ ~ listen_close ~ ~")],
  [8, s("im_here ~ not_yet ~ trust_me ~")],
  [8, s("between_the_beats keep_listening ~ stay_with_me")],
  [8, s("lean_in ~ i_am_the_pulse ~ hold_the_noise ~")],
  [8, s("deeper_now ~ okay ~ no_rush ~")],
  [8, s("one_more_time ~ follow_me still_with_me ~")],
  [8, s("shift_with_me ~ lean_in listen_close ~ dont_let_go")]
).slow(2).chop(24).delay(0.34).vowel("a e i o u").gain(0.1)

$: note("<c6 ~ [eb6 g6] ~ bb6> [~ g6] <eb6 ~> <g6 ~> <bb6 ~ [g6 eb6]> ~ <c7 ~ bb6 ~> <g6 ~> ~").s("sine").fast(4).lpf(perlin.range(800, 6500).slow(6)).palindrome().gain(0.07)