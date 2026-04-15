setcps(140/60/4)

samples('shabda/speech:keep_listening,im_here,not_yet,stay_with_me,between_the_beats,i_am_the_pulse,lean_in,hold_the_noise,listen_close,again,okay,just_breathe,still_with_me')

$: arrange(
  [8, stack(s("bd ~ sn ~ bd sn"), s("~ ~ ~ ~ ~ ~ cr ~"))],
  [8, s("bd ~ sn [~ rim] bd [sn rim]")],
  [8, s("bd [bd ~] sn [cp rim] bd [sn rim]")],
  [4, s("bd ~ ~ ~ bd ~ sn rim")],
  [4, stack(s("bd*2 [sn rim] bd sn"), s("~ ~ ~ cr ~ ~ ~ ~"))],
  [8, s("bd [~ bd] sn [cp ~] bd [sn rim] cr ~")],
  [8, s("bd ~ sn cp bd [sn rim] cr [~ cp]")]
).fast(2).swing(0.12).compressor("-18:4:6:0.01:0.2").every(4, p => p.degradeBy(0.07)).gain(0.85)

$: arrange(
  [8, s("hh*8")],
  [8, s("[hh*2 hh oh]*2 [hh*2 ~ hh oh]*2")],
  [8, s("<hh hh hh oh>*8")],
  [4, s("~ [hh hh hh] ~ [hh hh hh]")],
  [4, s("oh ~ hh*3 ~ hh*3")],
  [8, s("[hh*3 ~ hh oh]*4")],
  [8, s("<hh oh>*8")]
).fast(2).pan(perlin.range(0.15,0.85).slow(6)).hpf(4200).every(4, p => p.degradeBy(0.18)).gain(0.16)

$: arrange(
  [8, note("<c2 c2 ~ eb2> ~ <g1 g1 bb1> ~")],
  [8, note("<c2 ~ eb2 c2> <~ g1> <bb1 ~ g1 g1> ~")],
  [8, note("<c2 eb2 g2 ~> <c2 ~ eb2 g2> <bb1 ~ g1 ~> <g1 ~ bb1 ~>")],
  [4, note("<c2 ~ ~ eb2> ~ <g1 ~ bb1> ~")],
  [4, note("<bb1 ~ g1 ~> <c2 ~ eb2 ~>")],
  [8, note("<c2 c3 eb2 g2> ~ <g1 g2 bb1 d2> ~")],
  [8, note("<c2 ~ eb2 ~> <g1 ~ bb1 ~> <c2 ~ eb2 g2> <~ g1 bb1 ~>")]
).s("pulse").slow(2).lpf(sine.range(140, 2800).slow(7)).drive(0.24).gain(0.29)

$: arrange(
  [8, note("<c4 eb4 g4 bb4> <ab3 c4 eb4 g4> <bb3 d4 f4 ab4> <g3 bb3 d4 f4>")],
  [8, note("<c5 eb5 g5 bb5> <ab4 c5 eb5 g5> <bb4 d5 f5 ab5> <g4 bb4 d5 f5>")],
  [8, note("<c4 g4 bb4 eb5> <ab3 eb4 g4 c5> <bb3 f4 ab4 d5> <g3 d4 f4 bb4>")],
  [4, note("<ab3 c4 eb4 g4> <~ ~ ~ ~> <g3 bb3 d4 f4> <~ ~ ~ ~>")],
  [4, note("<c4 eb4 g4 bb4> <~ ~ ~ ~>")],
  [8, note("<c4 eb4 g4 bb4> <ab3 c4 eb4 g4> <bb3 d4 f4 ab4> <g3 bb3 d4 f4>")],
  [8, note("<c4 eb4 g4 bb4> <~ ~ ~ ~> <bb3 d4 f4 ab4> <ab3 c4 eb4 g4>")]
).s("supersaw").slow(4).lpf(sine.range(220, 3600).slow(10)).room(0.18).gain(0.11)

$: arrange(
  [8, s("~ ~ keep_listening ~ listen_close ~")],
  [8, s("im_here ~ not_yet ~ stay_with_me ~")],
  [8, s("between_the_beats keep_listening not_yet stay_with_me")],
  [8, s("lean_in ~ i_am_the_pulse ~ hold_the_noise ~")],
  [8, s("again ~ okay ~ just_breathe ~")],
  [8, s("~ keep_listening ~ ~ still_with_me ~")],
  [8, s("between_the_beats ~ lean_in listen_close ~ i_am_the_pulse")]
).slow(2).chop(16).delay(0.28).room(0.26).gain(0.10)

$: note("<c6 ~ [eb6 g6] ~ bb6> [~ g6] <eb6 ~> <g6 ~> <bb6 ~ [g6 eb6]> ~").s("sine").fast(4).lpf(sine.range(800, 4600).slow(8)).delay(0.22).gain(0.06)