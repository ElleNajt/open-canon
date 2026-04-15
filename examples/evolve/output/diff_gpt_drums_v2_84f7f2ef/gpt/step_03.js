setcps(140/60/4)

samples('shabda/speech:keep_listening,im_here,not_yet,stay_with_me,between_the_beats')

$: arrange(
  [8, s("bd ~ sn ~ bd sn").fast(2).swing(0.12).compressor("-18:4:6:0.01:0.2").gain(0.86)],
  [8, s("bd ~ sn [~ rim] bd sn").fast(2).swing(0.12).compressor("-18:4:6:0.01:0.2").gain(0.86)],
  [8, s("bd bd sn ~ bd [sn rim]").fast(2).swing(0.12).compressor("-18:4:6:0.01:0.2").gain(0.86)],
  [8, s("bd ~ sn ~ bd sn").fast(2).swing(0.12).compressor("-18:4:6:0.01:0.2").gain(0.86)]
)

$: arrange(
  [8, s("<hh hh oh hh>").euclid(9,16).fast(2).pan(sine.range(0.25,0.75).slow(6)).gain(0.16)],
  [8, s("<hh hh oh hh>").euclid(11,16).fast(2).pan(sine.range(0.2,0.8).slow(6)).gain(0.18)],
  [8, s("<hh hh oh hh>").euclid(13,16).fast(2).pan(sine.range(0.15,0.85).slow(6)).gain(0.19)],
  [8, s("<hh hh oh hh>").euclid(11,16).fast(2).pan(sine.range(0.2,0.8).slow(6)).gain(0.18)]
)

$: arrange(
  [8, note("<c2 c2 ~ eb2> ~ <g1 g1 bb1> ~").s("pulse").slow(2).lpf(sine.range(220, 1800).slow(8)).drive(0.38).gain(0.32)],
  [8, note("<c2 ~ c2 eb2> ~ <g1 bb1 g1> ~").s("pulse").slow(2).lpf(sine.range(200, 2400).slow(6)).drive(0.44).gain(0.32)],
  [8, note("<c2 c2 eb2 c3> ~ <g1 g1 bb1 g2> ~").s("pulse").slow(2).lpf(sine.range(180, 2600).slow(7)).drive(0.48).gain(0.31)],
  [8, note("<c2 c2 ~ eb2> ~ <g1 g1 bb1> ~").s("pulse").slow(2).lpf(sine.range(220, 1800).slow(8)).drive(0.38).gain(0.32)]
)

$: arrange(
  [8, note("<c4 eb4 g4 bb4> <ab3 c4 eb4 g4> <bb3 d4 f4 ab4> <g3 bb3 d4 f4>").s("supersaw").slow(4).lpf(sine.range(320, 2600).slow(10)).room(0.28).gain(0.13)],
  [8, note("<c5 eb5 g5 bb5> <ab4 c5 eb5 g5> <bb4 d5 f5 ab5> <g4 bb4 d5 f5>").s("supersaw").slow(4).lpf(sine.range(520, 3400).slow(10)).room(0.26).gain(0.12)],
  [8, note("<c4 g4 bb4 eb5> <ab3 eb4 g4 c5> <bb3 f4 ab4 d5> <g3 d4 f4 bb4>").s("supersaw").slow(4).lpf(sine.range(380, 3100).slow(8)).room(0.3).gain(0.13)],
  [8, note("<c4 eb4 g4 bb4> <ab3 c4 eb4 g4> <bb3 d4 f4 ab4> <g3 bb3 d4 f4>").s("supersaw").slow(4).lpf(sine.range(320, 2600).slow(10)).room(0.28).gain(0.13)]
)

$: arrange(
  [8, s("~ ~ ~ ~ keep_listening ~").slow(2).chop(8).speed(rand.range(0.9, 1.08)).gain(0.1)],
  [8, s("im_here ~ not_yet ~ stay_with_me ~").slow(2).chop(8).speed(rand.range(0.88, 1.12)).gain(0.12)],
  [8, s("between_the_beats keep_listening not_yet stay_with_me").slow(2).chop(16).speed(rand.range(0.82, 1.18)).gain(0.12)],
  [8, s("~ ~ im_here ~ keep_listening ~").slow(2).chop(8).speed(rand.range(0.9, 1.08)).gain(0.1)]
)

$: note("<c6 ~ [eb6 g6] ~ bb6> [~ g6] ~").s("sine").fast(4).slide(0.18).gain(0.07)