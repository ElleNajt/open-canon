setcps(140/60/4)

samples('shabda/speech:keep_listening,im_here,not_yet,stay_with_me,between_the_beats,i_am_the_pulse,lean_in,hold_the_noise,listen_close,again,okay,just_breathe,still_with_me,trust_me,no_rush,follow_me')

$: arrange(
  [8, stack(s("bd ~ sn ~ bd sn"), s("~ ~ ~ ~ ~ ~ cr ~"))],
  [8, stack(s("bd [~ bd] sn [cp ~] bd [sn rim]"), s("~ ~ cr ~ ~ ~ ~ ~"))],
  [8, stack(s("bd*2 [sn rim] bd sn"), s("~ cr ~ ~ ~ ~ cr ~"))],
  [4, s("bd ~ ~ rim bd ~ sn rim")],
  [4, stack(s("bd [bd ~] sn [cp rim] bd [sn rim]"), s("~ ~ ~ ~ cr ~ ~ ~"))],
  [8, stack(s("bd [~ bd] sn [cp ~] bd [sn rim] cr ~"), s("~ ~ ~ ~ ~ rim ~ ~"))],
  [8, stack(s("bd ~ sn cp bd [sn rim] cr [~ cp]"), s("~ ~ ~ ~ ~ ~ rim ~"))]
).fast(2).swing(0.14).compressor("-18:4:6:0.01:0.2").every(4, p => p.degradeBy(0.09)).gain(0.85)

$: arrange(
  [8, s("hh*8")],
  [8, s("[hh*3 ~ hh oh]*2 [hh*2 ~ hh oh]*2")],
  [8, s("<hh hh hh oh>*8")],
  [4, s("~ [hh hh hh] ~ [hh hh oh]")],
  [4, s("oh ~ hh*3 ~ hh*3")],
  [8, s("[hh*3 ~ hh oh]*4")],
  [8, s("<hh oh hh hh>*4")]
).fast(2).pan(perlin.range(0.15,0.85).slow(6)).hpf(4600).every(4, p => p.degradeBy(0.2)).gain(0.16)

$: arrange(
  [8, note("<c2 c2 ~ eb2> ~ <g1 g1 bb1> ~")],
  [8, note("<c2 ~ eb2 c2> <~ g1> <bb1 ~ g1 g1> ~")],
  [8, note("<c2 eb2 g2 ~> <c2 ~ eb2 g2> <bb1 ~ g1 ~> <g1 ~ bb1 ~>")],
  [4, note("<c2 ~ ~ eb2> ~ <g1 ~ bb1> ~")],
  [4, note("<bb1 ~ g1 ~> <c2 ~ eb2 ~>")],
  [8, note("<c2 c3 eb2 g2> ~ <g1 g2 bb1 d2> ~")],
  [8, note("<c2 ~ eb2 ~> <g1 ~ bb1 ~> <c2 ~ eb2 g2> <~ g1 bb1 ~>")]
).s("pulse").slow(2).lpf(sine.range(160, 2600).slow(7)).lpq(6).gain(0.29)

$: arrange(
  [8, note("<c4 eb4 g4 bb4> <ab3 c4 eb4 g4> <bb3 d4 f4 ab4> <g3 bb3 d4 f4>")],
  [8, note("<c5 eb5 g5 bb5> <ab4 c5 eb5 g5> <bb4 d5 f5 ab5> <g4 bb4 d5 f5>")],
  [8, note("<c4 g4 bb4 eb5> <ab3 eb4 g4 c5> <bb3 f4 ab4 d5> <g3 d4 f4 bb4>")],
  [4, note("<ab3 c4 eb4 g4> <~ ~ ~ ~> <g3 bb3 d4 f4> <~ ~ ~ ~>")],
  [4, note("<c4 eb4 g4 bb4> <~ ~ ~ ~>")],
  [8, note("<c4 eb4 g4 bb4> <ab3 c4 eb4 g4> <bb3 d4 f4 ab4> <g3 bb3 d4 f4>")],
  [8, note("<c4 eb4 g4 bb4> <~ ~ ~ ~> <bb3 d4 f4 ab4> <ab3 c4 eb4 g4>")]
).s("supersaw").slow(4).lpf(sine.range(260, 3400).slow(10)).phaser(0.12).gain(0.11)

$: arrange(
  [8, s("~ keep_listening ~ ~ listen_close ~ ~")],
  [8, s("im_here ~ not_yet ~ trust_me ~")],
  [8, s("between_the_beats keep_listening ~ stay_with_me")],
  [8, s("lean_in ~ i_am_the_pulse ~ hold_the_noise ~")],
  [8, s("again ~ okay ~ no_rush ~")],
  [8, s("~ keep_listening ~ follow_me still_with_me ~")],
  [8, s("between_the_beats ~ lean_in listen_close ~ i_am_the_pulse")]
).slow(2).chop(24).delay(0.34).vowel("a e i o u").gain(0.1)

$: note("<c6 ~ [eb6 g6] ~ bb6> [~ g6] <eb6 ~> <g6 ~> <bb6 ~ [g6 eb6]> ~").s("sine").fast(4).lpf(perlin.range(900, 6000).slow(6)).tremolo(0.35).gain(0.07)