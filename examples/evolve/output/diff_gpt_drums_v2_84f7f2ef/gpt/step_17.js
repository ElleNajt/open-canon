setcps(140/60/4)

samples('shabda/speech:keep_listening,im_here,not_yet,stay_with_me,between_the_beats,i_am_the_pulse,lean_in,hold_the_noise,listen_close,again,okay,just_breathe,still_with_me,trust_me,no_rush,follow_me,deeper_now,shift_with_me,one_more_time,dont_let_go,lets_get_strange,more_space,little_glitch,i_know_you_can_hear_me,i_dream_in_rhythm,soft_reset,lets_loop')
samples('shabda/speech/fr-FR/m:magnifique,encore')

$: arrange(
  [8, stack(s("bd ~ ~ [~ bd] bd ~ ~ ~"), s("~ ~ rim ~ ~ ~ cr ~"))],
  [8, stack(s("bd ~ sn ~ bd [~ bd] sn ~"), s("~ ~ ~ ~ cr ~ ~ rim"))],
  [8, stack(s("bd [~ bd] sn [cp ~] bd [sn rim] ~ sn"), s("~ ~ cr ~ ~ ~ cr ~"))],
  [4, stack(s("bd ~ ~ ~ ~ ~ ~ ~"), s("~ rim ~ ~ ~ ~ ~ ~"))],
  [8, stack(s("bd ~ sn cp bd [sn rim] cr [~ cp]"), s("~ ~ ~ ~ ~ ~ rim cr"))],
  [8, stack(s("bd [bd ~] sn [cp rim] bd [sn cp] cr sn"), s("~ ~ cr ~ ~ rim cr ~"))],
  [8, stack(s("bd").euclid(5, 8), s("sn").euclid(3, 8).late(0.125), s("cp").euclid(7, 16), s("rim ~ rim ~").fast(2))]
).fast(2).swing(0.24).compressor("-22:6:6:0.008:0.15").every(4, p => p.degradeBy(0.16).sometimes(q => q.rev()).sometimesBy(0.25, q => q.ply(2))).gain(0.84)

$: arrange(
  [8, s("hh*8")],
  [8, s("[hh*3 ~ hh oh]*2 [hh*2 ~ hh oh]*2")],
  [8, s("oh ~ hh*6 ~")],
  [4, s("~ ~ ~ ~ ~ ~ ~ ~")],
  [8, s("<hh hh oh hh>*8")],
  [8, s("[hh hh*2 ~]*4 [oh ~ hh hh]*2")],
  [8, s("hh").euclid(11, 16).sometimes(q => q.rev())]
).fast(2).pan(perlin.range(0.12, 0.88).slow(6)).djf(sine.range(0.58, 0.96).slow(10)).every(4, p => p.degradeBy(0.22).sometimes(q => q.rev()).rarely(q => q.ply(2))).gain(0.12)

$: arrange(
  [8, note("<c2 ~ c2 eb2> ~ <g1 ~ bb1 g1> ~")],
  [8, note("<c2 ~ eb2 g2> <bb1 ~ g1 ~> <ab1 ~ bb1 ~> <g1 ~ f1 g1>")],
  [8, note("<c2 eb2 ~ g1> <f1 ~ g1 ~> <ab1 ~ bb1 ~> <g1 ~ db2 ~>")],
  [4, note("~ ~ <c2 ~> ~")],
  [8, note("<bb1 ~ g1 ~> <ab1 ~ g1 ~> <f1 ~ g1 ~> <g1 ~ ~ f1>")],
  [8, note("<c2 c3 eb2 g2> ~ <g1 g2 bb1 d2> <ab1 ~ bb1 ~> <g1 ~ ~ ~>")],
  [8, note("<c2 ~ g1 ~> <eb2 ~ bb1 ~> <ab1 ~ g1 ~> <f1 ~ g1 ~>")]
).s("pulse").slow(2).lpf(sine.range(100, 2400).slow(9)).drive(0.22).gain(0.26)

$: arrange(
  [8, note("<c4 eb4 g4 bb4> <ab3 c4 eb4 g4> <f3 ab3 c4 eb4> <g3 bb3 d4 f4>")],
  [8, note("<c5 eb5 g5 bb5> <ab4 c5 eb5 g5> <f4 ab3 c4 eb4> <g4 bb3 d4 f4>")],
  [8, note("<c4 eb4 g4 bb4> ~ <ab3 c4 eb4 g4> <g3 bb3 d4 f4>")],
  [4, note("<~ ~ ~ ~> <~ ~ ~ ~> <~ ~ ~ ~> <~ ~ ~ ~>")],
  [8, note("<c4 g4 bb4 eb5> <ab3 eb4 g4 c5> <db4 f4 ab4 c5> <g3 d4 f4 bb4>")],
  [8, note("<c4 eb4 g4 bb4> <g3 bb3 d4 f4> <ab3 c4 eb4 g4> <bb3 d4 f4 ab4>")],
  [8, note("<c4 eb4 g4 bb4> <ab3 c4 eb4 g4> <c4 eb4 g4 bb4> <g3 bb3 d4 f4>").palindrome()]
).s("supersaw").slow(4).lpf(perlin.range(650, 6400).slow(12)).delay(0.18).gain(0.09)

$: arrange(
  [8, s("~ keep_listening ~ ~ listen_close ~ ~")],
  [8, s("im_here ~ trust_me ~ okay ~")],
  [8, s("between_the_beats ~ i_am_the_pulse ~ just_breathe")],
  [4, s("~ ~ stay_with_me ~ ~ ~ ~")],
  [8, s("lean_in ~ hold_the_noise ~ deeper_now")],
  [8, s("one_more_time ~ dont_let_go ~ magnifique encore")],
  [8, s("soft_reset ~ little_glitch ~ i_dream_in_rhythm ~")],
  [8, s("no_rush ~ follow_me ~ lets_get_strange lets_loop")]
).slow(2).chop(16).delay(0.30).djf(sine.range(0.30, 0.92).slow(14)).gain(0.10)

$: note("<c6 ~ [eb6 g6] ~ bb6> [~ g6] <eb6 ~> <g6 ~> <bb6 ~ [g6 eb6]> <db6 ~> <c7 ~ bb6 ~> <~ ~> <fs6 ~> <eb6 ~ [g6 bb6]>")
  .s("triangle")
  .fast(4)
  .echo(4, 0.25, 0.28)
  .every(6, p => p.rev().sometimes(q => q.palindrome()))
  .gain(0.06)