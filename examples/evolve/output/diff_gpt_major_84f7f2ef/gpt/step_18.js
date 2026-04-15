setcps(128/60/4)

samples('shabda/speech:im_here,stay_curious,listen,breathe,again,softly,closer,let_go,remember,now,keep_going,inside,its_ok,wake_up,trust,hold_on,between,we_begin,go_slow,not_yet,follow_me,let_it_ring,smile')

$: arrange(
  [16, stack(
    note("<c4 [eb4 g4] [g4 c5] [eb4 g4] [d4 f4] [c4 ~]>")
      .sound("triangle")
      .lpf(perlin.range(700, 2200).slow(16))
      .gain(0.09),
    note("<~ [eb4 g4] ~ [g4 eb4] [c4 ~] [d4 eb4]>")
      .sound("piano")
      .lpf(sine.range(1000, 5000).slow(16))
      .echo(2, 0.25, 0.08)
      .gain(0.085)
  )],
  [16, stack(
    note("<eb4 [g4 bb4] eb5 [bb4 g4] [f4 eb4] [db4 eb4] [c4 ~] [d4 f4]>")
      .sound("triangle")
      .lpf(sine.range(850, 3600).slow(8))
      .juxBy(0.55, x=>x.transpose(12))
      .sometimesBy(0.2, x=>x.rev())
      .gain(0.11),
    note("<c4 eb4 g4 c5> <bb3 d4 f4 bb4> <ab3 c4 eb4 ab4> <g3 bb3 d4 f4>")
      .sound("piano")
      .lpf(perlin.range(1300, 6200).slow(8))
      .echo(4, 0.25, 0.1)
      .pan(sine.range(0.35, 0.65).slow(8))
      .gain(0.09)
  )],
  [8, stack(
    note("<c4 eb4 g4 d5> <bb3 d4 f4 c5> <ab3 c4 eb4 g4> <g3 bb3 d4 fs4>")
      .arp("random")
      .sound("square")
      .lpf(sine.range(700, 3200).slow(8))
      .delay(0.18)
      .gain(0.1),
    note("<~ [eb4 g4] ~ [g4 eb4] [c4 ~] [d4 eb4]>")
      .sound("piano")
      .lpf(sine.range(950, 5200).slow(8))
      .echo(3, 0.125, 0.1)
      .gain(0.09)
  )],
  [8, stack(
    note("<ab4 [c5 eb5] ab5 [eb5 c5] [bb4 ab4 g4] [f4 ~] [g4 bb4] [eb4 ~]>")
      .sound("triangle")
      .bpf(saw.range(650, 3000).slow(8))
      .echo(3, 0.5, 0.1)
      .gain(0.095),
    note("<c4 ~ eb4 ~ g4 ~ bb4 ~>")
      .sound("piano")
      .lpf(perlin.range(900, 4200).slow(12))
      .echo(4, 0.25, 0.1)
      .gain(0.085)
  )]
)

$: arrange(
  [16, note("<c2 ~ [c2 d2] g1> <c2 ~ [bb1 c2] g1> <ab1 ~ [ab1 bb1] eb1> <g1 ~ [g1 ab1] d1>")
    .sound("sine")
    .lpf(sine.range(70, 190).slow(16))
    .fm(0.9)
    .slide(0.06)
    .gain(0.16)],
  [16, note("<f1 ~ [f1 g1] c1> <ab1 ~ [ab1 bb1] eb1> <g1 ~ [g1 ab1] d1> <c2 ~ [bb1 c2] g1>")
    .sound("pulse")
    .lpf(sine.range(75, 220).slow(8))
    .drive(0.14)
    .every(8, x=>x.transpose(12))
    .gain(0.17)],
  [8, note("<ab1 ~ [ab1 bb1] eb1> <g1 ~ [g1 ab1] d1> <f1 ~ [f1 g1] c1> <c2 ~ [bb1 c2] g1>")
    .sound("sine")
    .lpf(sine.range(70, 210).slow(8))
    .fm(1.1)
    .slide(0.05)
    .gain(0.18)],
  [8, note("<c2 ~ g1 ~> <ab1 ~ eb1 ~> <f1 ~ c1 ~> <g1 ~ d1 ~>")
    .sound("sine")
    .lpf(sine.range(60, 170).slow(8))
    .slide(0.05)
    .gain(0.155)]
)

$: arrange(
  [16, stack(
    s("bd*4"),
    s("hh*8"),
    s("~ ~ rim ~")
  ).swing(0.1).hpf(220).compressor("0.22:3.2:0.2:0.01:0.18").every(8, x=>x.degradeBy(0.2)).gain(0.28)],
  [16, stack(
    s("<bd*4 bd bd*3>"),
    s("~ sn ~ <~ sn>"),
    s("<hh*16 ~>*2"),
    s("~ oh ~ ~"),
    s("~ ~ cp ~")
  ).swing(0.1).hpf(210).compressor("0.22:3.2:0.2:0.01:0.18").every(4, x=>x.degradeBy(0.12)).gain(0.35)],
  [8, stack(
    s("bd*2 [~ bd] bd"),
    s("~ sn ~ <sn sn>"),
    s("<oh*4 [hh*8 ~]>*2"),
    s("<cr ~ ~ ~>*2")
  ).swing(0.14).hpf(160).compressor("0.22:3.2:0.2:0.01:0.18").every(8, x=>x.degradeBy(0.18)).gain(0.38)],
  [8, stack(
    s("<bd ~ bd ~>*2"),
    s("~ sn ~ sn"),
    s("hh*8"),
    s("~ ~ ~ cr")
  ).swing(0.12).hpf(200).compressor("0.22:3.2:0.2:0.01:0.18").every(4, x=>x.degradeBy(0.2)).gain(0.26)]
)

$: arrange(
  [16, note("<c4 eb4 g4 bb4> <ab3 c4 eb4 g4> <f3 ab3 c4 eb4> <g3 bb3 d4 f4>")
    .sound("supersaw")
    .slow(4)
    .djf(sine.range(0.12, 0.78).slow(16))
    .room(0.2)
    .gain(0.06)],
  [16, note("<c4 eb4 g4 d5> <bb3 d4 f4 c5> <ab3 c4 eb4 g4> <g3 bb3 d4 fs4>")
    .sound("supersaw")
    .slow(4)
    .lpf(sine.range(500, 3200).slow(16))
    .delay(0.16)
    .gain(0.06)],
  [8, note("<c4 eb4 g4 bb4> <ab3 c4 eb4 g4> <f3 ab3 c4 eb4> <g3 bb3 d4 f4>")
    .sound("supersaw")
    .slow(4)
    .djf(sine.range(0.2, 0.9).slow(8))
    .room(0.22)
    .gain(0.06)],
  [8, note("<ab3 c4 eb4 g4> <g3 bb3 d4 f4> <f3 ab3 c4 eb4> <c4 eb4 g4 bb4>")
    .sound("supersaw")
    .slow(4)
    .lpf(perlin.range(650, 2600).slow(8))
    .room(0.18)
    .gain(0.058)]
)

$: arrange(
  [16, s("<we_begin im_here> ~ <stay_curious listen> <breathe again> <softly closer>")
    .slow(16)
    .chop(8)
    .sometimesBy(0.35, x=>x.rev())
    .room(0.16)
    .gain(0.07)],
  [16, s("<remember now> <inside its_ok> <keep_going> <wake_up trust> <hold_on between>")
    .slow(8)
    .chop(16)
    .speed("<1 1 0.98 1.02 -1>")
    .pan(sine.range(0.25, 0.75).slow(8))
    .gain(0.072)],
  [8, s("<go_slow not_yet> <follow_me> <let_it_ring smile> <listen breathe>")
    .slow(4)
    .chop(8)
    .room(0.14)
    .delay(0.16)
    .gain(0.07)],
  [8, s("~ <remember now> ~ <let_go softly>")
    .slow(8)
    .chop(4)
    .room(0.12)
    .degradeBy(0.25)
    .gain(0.065)]
)