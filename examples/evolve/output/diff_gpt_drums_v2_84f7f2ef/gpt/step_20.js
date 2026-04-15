setcps(140/60/4)

samples('shabda/speech:keep_listening,im_here,not_yet,stay_with_me,between_the_beats,i_am_the_pulse,lean_in,hold_the_noise,listen_close,again,okay,just_breathe,still_with_me,trust_me,no_rush,follow_me,deeper_now,shift_with_me,one_more_time,dont_let_go,lets_get_strange,more_space,little_glitch,i_know_you_can_hear_me,i_dream_in_rhythm,soft_reset,lets_loop,stay_awake,hum_the_room,we_are_signal,human_noise,smile_in_sync')
samples('shabda/speech/fr-FR/m:magnifique,encore,toujours')

$: arrange(
  [8,  stack(s("bd ~ ~ ~ bd ~ ~ ~"), s("~ ~ rim ~ ~ ~ cr ~"))],
  [8,  stack(s("bd ~ sn ~ bd ~ sn ~"), s("~ cp ~ ~ rim ~ cr ~"))],
  [8,  stack(s("bd [~ bd] sn [cp ~] bd [sn rim] ~ sn"), s("~ mt ~ ~ ~ ht ~ ~"), s("~ ~ cr ~ ~ ~ cr ~"))],
  [4,  stack(s("bd ~ ~ ~ ~ ~ ~ ~"), s("~ ~ ~ ~ rim ~ ~ ~"))],
  [8,  stack(s("bd [bd ~] sn [cp rim] bd ~ sn [~ cp]"), s("~ ~ cr ~ ~ rim cr ~"))],
  [8,  stack(s("bd").euclid(5, 8), s("sn").euclid(3, 8).late(0.125), s("cp").euclid(7, 16), s("rim ~ rim ~").fast(2))],
  [8,  stack(s("bd ~ ~ [~ bd] ~ ~ ~ bd"), s("~ ~ sn ~ ~ ~ sn ~"), s("~ ~ ~ ~ rim ~ ~ cr"))],
  [8,  stack(s("bd [bd bd] sn bd bd sn bd [sn cp]"), s("~ rim ~ rim cr ~ rim ~"), s("~ ~ ~ ~ rd ~ ~ ~"))],
  [8,  stack(s("bd ~ ~ ~ bd ~ ~ ~"), s("~ ~ rim ~ ~ ~ ~ ~"))]
).fast(2).swing(0.29).compressor("-23:7:6:0.006:0.18").every(4, p => p.degradeBy(0.18).sometimes(q => q.rev()).sometimesBy(0.35, q => q.ply(2)).rarely(q => q.echo(3, 0.125, 0.20))).gain(0.84)

$: arrange(
  [8,  s("hh*8")],
  [8,  s("[hh*3 ~ hh oh]*2 [hh*2 ~ hh oh]*2")],
  [8,  s("oh ~ hh*6 ~")],
  [4,  s("~ ~ ~ ~ ~ ~ ~ ~")],
  [8,  s("<hh hh oh hh>*8")],
  [8,  s("[hh hh*2 ~]*4 [oh ~ hh hh]*2")],
  [8,  s("hh").euclid(11, 16)],
  [8,  s("[hh*2 ~ hh*2 ~]*2 [oh ~ hh ~]*2")],
  [8,  s("~ cb ~ hh*6 ~")]
).fast(2).pan(perlin.range(0.12, 0.88).slow(7)).bpf(sine.range(900, 6500).slow(12)).every(4, p => p.degradeBy(0.25).sometimes(q => q.rev()).rarely(q => q.ply(2))).gain(0.12)

$: arrange(
  [8, note("<c2 ~ c2 eb2> ~ <g1 ~ bb1 g1> ~")],
  [8, note("<c2 ~ eb2 g2> <bb1 ~ g1 ~> <ab1 ~ bb1 ~> <g1 ~ f1 g1>")],
  [8, note("<c2 eb2 ~ g1> <f1 ~ g1 ~> <ab1 ~ bb1 ~> <g1 ~ db2 ~>")],
  [4, note("~ ~ <c2 ~> ~")],
  [8, note("<bb1 ~ g1 ~> <ab1 ~ g1 ~> <f1 ~ g1 ~> <g1 ~ ~ f1>")],
  [8, note("<c2 c3 eb2 g2> ~ <g1 g2 bb1 d2> <ab1 ~ bb1 ~> <g1 ~ ~ ~>")],
  [8, note("<c2 ~ g1 ~> <eb2 ~ bb1 ~> <ab1 ~ g1 ~> <f1 ~ g1 ~>")],
  [8, note("<c2 ~> <c2 ~> <bb1 ~> <g1 ~>").ply(2)],
  [8, note("<c2 ~ eb2 ~> <g1 ~ bb1 ~> <ab1 ~ g1 ~> <f1 ~ g1 ~>")]
).s("pulse").slow(2).lpf(sine.range(90, 2200).slow(12)).drive(0.22).gain(0.24)

$: arrange(
  [8, note("<c4 eb4 g4 bb4> <ab3 c4 eb4 g4> <f3 ab3 c4 eb4> <g3 bb3 d4 f4>")],
  [8, note("<c5 eb5 g5 bb5> <ab4 c5 eb5 g5> <f4 ab3 c4 eb4> <g4 bb3 d4 f4>")],
  [8, note("<c4 eb4 g4 bb4> ~ <ab3 c4 eb4 g4> <g3 bb3 d4 f4>")],
  [4, note("<~ ~ ~ ~> <~ ~ ~ ~> <~ ~ ~ ~> <~ ~ ~ ~>")],
  [8, note("<c4 g4 bb4 eb5> <ab3 eb4 g4 c5> <db4 f4 ab4 c5> <g3 d4 f4 bb4>")],
  [8, note("<c4 eb4 g4 bb4> <g3 bb3 d4 f4> <ab3 c4 eb4 g4> <bb3 d4 f4 ab4>")],
  [8, note("<c4 eb4 g4 bb4> <ab3 c4 eb4 g4> <c4 eb4 g4 bb4> <g3 bb3 d4 f4>").palindrome()],
  [8, note("<c4 eb4 g4 bb4> <~ ~ ~ ~> <ab3 c4 eb4 g4> <g3 bb3 d4 f4>").palindrome()],
  [8, note("<ab3 c4 eb4 g4> <f3 ab3 c4 eb4> <g3 bb3 d4 f4> <c4 eb4 g4 bb4>")]
).s("supersaw").slow(4).lpf(perlin.range(520, 7200).slow(20)).room(0.28).gain(0.085)

$: arrange(
  [8, s("~ keep_listening ~ ~ listen_close ~ ~")],
  [8, s("im_here ~ trust_me ~ okay ~")],
  [8, s("between_the_beats ~ i_am_the_pulse ~ just_breathe")],
  [4, s("~ ~ stay_with_me ~ ~ ~ ~")],
  [8, s("lean_in ~ hold_the_noise ~ deeper_now")],
  [8, s("i_know_you_can_hear_me ~ more_space ~ little_glitch ~")],
  [8, s("one_more_time ~ dont_let_go ~ magnifique encore")],
  [8, s("soft_reset ~ i_dream_in_rhythm ~ lets_loop ~")],
  [8, s("stay_awake ~ hum_the_room ~ we_are_signal human_noise")],
  [8, s("no_rush ~ follow_me ~ lets_get_strange ~")],
  [8, s("shift_with_me ~ toujours ~ again ~ not_yet")],
  [8, s("smile_in_sync ~ keep_listening ~ im_here ~")]
).slow(2).striate(8).delay(0.32).djf(sine.range(0.14, 0.94).slow(22)).gain(0.10)

$: arrange(
  [8,  note("<c6 ~ [eb6 g6] ~ bb6> [~ g6] <eb6 ~> <g6 ~> <bb6 ~ [g6 eb6]> <db6 ~> <c7 ~ bb6 ~> <~ ~> <fs6 ~> <eb6 ~ [g6 bb6]>")],
  [4,  note("~ ~ ~ ~ ~ ~ ~ ~")],
  [8,  note("<g6 ~ bb6 ~> <eb6 ~ g6 ~> <db6 ~> <c6 ~ [eb6 g6]> <bb6 ~> <g6 ~> <fs6 ~> <eb6 ~>")],
  [8,  note("<c7 ~> <bb6 ~ [g6 eb6]> <g6 ~> <eb6 ~> <db6 ~> <c6 ~> <bb6 ~> <g6 ~>")],
  [8,  note("<eb6 g6> ~ <bb6 ~> <g6 ~> <c7 ~> <bb6 ~> <fs6 ~> <g6 ~>")]
).s("triangle").fast(4).echo(4, 0.25, 0.32).every(6, p => p.rev().sometimesBy(0.6, q => q.palindrome())).gain(0.06)