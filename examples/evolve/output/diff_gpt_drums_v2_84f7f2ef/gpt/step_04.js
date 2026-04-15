setcps(140/60/4)

samples('shabda/speech:keep_listening,im_here,not_yet,stay_with_me,between_the_beats')

$: arrange(
  [8, s("bd ~ sn ~ bd sn").fast(2).swing(0.12).compressor("-18:4:6:0.01:0.2").every(4, p => p.degradeBy(0.08)).gain(0.86)],
  [8, s("bd ~ sn [~ rim] bd sn").fast(2).swing(0.12).compressor("-18:4:6:0.01:0.2").every(4, p => p.degradeBy(0.06)).gain(0.86)],
  [8, s("bd bd sn [~ rim] bd [sn rim]").fast(2).swing(0.12).compressor("-18:4:6:0.01:0.2").every(4, p => p.degradeBy(0.05)).gain(0.86)],
  [8, s("bd ~ ~ ~ bd ~ sn ~").fast(2).swing(0.12).compressor("-18:4:6:0.01:0.2").every(4, p => p.degradeBy(0.12)).gain(0.86)],
  [8, s("bd ~ sn cp bd [sn rim]").fast(2).swing(0.12).compressor("-18:4:6:0.01:0.2").every(4, p => p.degradeBy(0.04)).gain(0.86)]
)

$: arrange(
  [8, s("<hh hh oh hh>").euclid(9,16).fast(2).pan(sine.range(0.25,0.75).slow(6)).every(4, p => p.degradeBy(0.18)).gain(0.16)],
  [8, s("<hh hh oh hh>").euclid(11,16).fast(2).pan(sine.range(0.2,0.8).slow(6)).every(4, p => p.degradeBy(0.16)).gain(0.18)],
  [8, s("<hh hh oh hh>").euclid(13,16).fast(2).pan(sine.range(0.15,0.85).slow(6)).every(4, p => p.degradeBy(0.14)).gain(0.19)],
  [8, s("<hh oh hh hh>").euclid(7,16).fast(2).pan(sine.range(0.3,0.7).slow(4)).every(4, p => p.degradeBy(0.22)).gain(0.17)],
  [8, s("<hh hh oh hh>").euclid(12,16).fast(2).pan(sine.range(0.2,0.8).slow(6)).every(4, p => p.degradeBy(0.15)).gain(0.18)]
)

$: arrange(
  [8, note("<c2 c2 ~ eb2> ~ <g1 g1 bb1> ~").s("pulse").slow(2).lpf(sine.range(220, 1800).slow(8)).lpq(6).gain(0.32)],
  [8, note("<c2 ~ c2 eb2> <~ g1> <bb1 ~ g1 g1> ~").s("pulse").slow(2).lpf(sine.range(200, 2400).slow(6)).lpq(6).gain(0.32)],
  [8, note("<c2 eb2 g2 ~> <c2 ~ eb2 g2> <bb1 ~ g1 ~> <g1 ~ bb1 ~>").s("pulse").slow(2).lpf(sine.range(180, 2600).slow(7)).lpq(6).gain(0.31)],
  [8, note("<c2 ~ ~ eb2> ~ <g1 ~ bb1> ~").s("pulse").slow(2).lpf(sine.range(160, 2100).slow(5)).lpq(6).gain(0.30)],
  [8, note("<c2 c3 eb2 g2> ~ <g1 g2 bb1 d2> ~").s("pulse").slow(2).lpf(sine.range(220, 2800).slow(6)).lpq(6).gain(0.32)]
)

$: arrange(
  [8, note("<c4 eb4 g4 bb4> <ab3 c4 eb4 g4> <bb3 d4 f4 ab4> <g3 bb3 d4 f4>").s("supersaw").slow(4).lpf(sine.range(320, 2600).slow(10)).pan(sine.range(0.42,0.58).slow(12)).gain(0.13)],
  [8, note("<c5 eb5 g5 bb5> <ab4 c5 eb5 g5> <bb4 d5 f5 ab5> <g4 bb4 d5 f5>").s("supersaw").slow(4).lpf(sine.range(520, 3400).slow(10)).pan(sine.range(0.35,0.65).slow(10)).gain(0.12)],
  [8, note("<c4 g4 bb4 eb5> <ab3 eb4 g4 c5> <bb3 f4 ab4 d5> <g3 d4 f4 bb4>").s("supersaw").slow(4).lpf(sine.range(380, 3100).slow(8)).pan(sine.range(0.3,0.7).slow(8)).gain(0.13)],
  [8, note("<ab3 c4 eb4 g4> <~ ~ ~ ~> <g3 bb3 d4 f4> <~ ~ ~ ~>").s("supersaw").slow(4).lpf(sine.range(240, 1800).slow(6)).pan(sine.range(0.4,0.6).slow(6)).gain(0.12)],
  [8, note("<c4 eb4 g4 bb4> <ab3 c4 eb4 g4> <bb3 d4 f4 ab4> <g3 bb3 d4 f4>").s("supersaw").slow(4).lpf(sine.range(420, 3600).slow(8)).pan(sine.range(0.25,0.75).slow(10)).gain(0.13)]
)

$: arrange(
  [8, s("~ ~ keep_listening ~ ~ ~").slow(2).chop(8).speed(rand.range(0.92, 1.06)).room(0.22).gain(0.10)],
  [8, s("im_here ~ not_yet ~ stay_with_me ~").slow(2).chop(12).speed(rand.range(0.88, 1.12)).room(0.24).gain(0.12)],
  [8, s("between_the_beats keep_listening not_yet stay_with_me").slow(2).chop(16).speed(rand.range(0.82, 1.18)).room(0.26).gain(0.12)],
  [8, s("~ keep_listening ~ ~ im_here ~").slow(2).chop(10).speed(rand.range(0.9, 1.1)).room(0.24).gain(0.11)],
  [8, s("stay_with_me ~ between_the_beats ~ keep_listening ~").slow(2).chop(14).speed(rand.range(0.86, 1.14)).room(0.26).gain(0.12)]
)

$: note("<c6 ~ [eb6 g6] ~ bb6> [~ g6] <eb6 ~> ~").s("sine").fast(4).slide(0.18).delay(0.22).gain(0.07)