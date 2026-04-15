setcps(128/60/4)

samples('shabda/speech:im_here,stay_curious,listen,breathe,again,softly,closer,let_go,remember,now,keep_going,inside,its_ok,wake_up,trust,hold_on,between,we_begin,go_slow,not_yet,follow_me,let_it_ring,smile')

$: arrange(
  [8, stack(
    note("<c4 [eb4 g4] [g4 c5] [eb4 g4] [d4 f4] [c4 ~]>")
      .sound("triangle")
      .lpf(perlin.range(700, 2800).slow(8))
      .vowel("a e i o u")
      .echo(4, 0.25, 0.12)
      .gain(0.12),
    note("<~ [eb4 g4] ~ [g4 eb4] [c4 ~] [d4 eb4]>")
      .sound("piano")
      .lpf(sine.range(900, 5200).slow(8))
      .echo(3, 0.125, 0.1)
      .every(4, x=>x.rev())
      .gain(0.11)
  )],
  [8, note("<eb4 [g4 bb4] eb5 [bb4 g4] [f4 eb4] [db4 eb4] [c4 ~] [d4 f4]>")
    .sound("piano")
    .lpf(sine.range(1100, 6000).slow(8))
    .juxBy(0.5, y=>y.transpose(12).pan(0.82))
    .echo(3, 0.125, 0.13)
    .gain(0.15)],
  [8, note("<c4 eb4 g4 c5> <bb3 d4 f4 bb4> <ab3 c4 eb4 ab4> <g3 bb3 d4 f4> <f3 ab3 c4 eb4> <g3 bb3 d4 fs4>")
    .arp("random")
    .sound("square")
    .lpf(sine.range(500, 2600).slow(6))
    .delay(0.16)
    .sometimes(x=>x.rev())
    .gain(0.14)],
  [8, note("<ab4 [c5 eb5] ab5 [eb5 c5] [bb4 ab4 g4] [f4 ~]>")
    .sound("triangle")
    .bpf(saw.range(600, 2600).slow(6))
    .echo(4, 0.5, 0.1)
    .every(4, x=>x.palindrome())
    .gain(0.13)],
  [8, note("<c4 ~ eb4 ~ g4 ~ bb4 ~>")
    .sound("piano")
    .lpf(perlin.range(800, 3800).slow(12))
    .echo(6, 0.25, 0.18)
    .room(0.22)
    .gain(0.11)]
)

$: arrange(
  [16, note("<c2 ~ [c2 d2] g1> <c2 ~ [bb1 c2] g1> <ab1 ~ [ab1 bb1] eb1> <g1 ~ [g1 ab1] d1>")
    .sound("sine")
    .lpf(sine.range(70, 180).slow(16))
    .fm(1.1)
    .slide(0.06)
    .gain(0.18)],
  [8, note("<f1 ~ [f1 g1] c1> <ab1 ~ [ab1 bb1] eb1> <g1 ~ [g1 ab1] d1> <c2 ~ [bb1 c2] g1>")
    .sound("sine")
    .lpf(sine.range(80, 240).slow(8))
    .fm(1.5)
    .drive(0.18)
    .gain(0.19)],
  [8, note("<ab1 ~ [ab1 bb1] eb1> <g1 ~ [g1 ab1] d1> <f1 ~ [f1 g1] c1> <c2 ~ [bb1 c2] g1>")
    .sound("pulse")
    .lpf(sine.range(70, 210).slow(8))
    .slide(0.04)
    .drive(0.12)
    .gain(0.18)],
  [8, note("<c2 ~ g1 ~> <ab1 ~ eb1 ~> <f1 ~ c1 ~> <g1 ~ d1 ~>")
    .sound("sine")
    .lpf(sine.range(60, 160).slow(8))
    .fm(0.8)
    .slide(0.05)
    .gain(0.16)]
)

$: arrange(
  [16, stack(
    s("bd*4"),
    s("~ sn ~ sn"),
    s("hh*8"),
    s("~ ~ rim ~")
  ).swing(0.12).hpf(170).crush(12).compressor("0.22:3.2:0.2:0.01:0.18").gain(0.38)],
  [8, stack(
    s("<bd*4 bd bd*3>"),
    s("~ sn ~ <~ sn>"),
    s("<hh*16 ~>*2"),
    s("~ oh ~ ~"),
    s("~ ~ cp ~")
  ).swing(0.1).hpf(210).every(4, x=>x.degradeBy(0.24)).compressor("0.22:3.2:0.2:0.01:0.18").gain(0.36)],
  [8, stack(
    s("bd*2 [~ bd] bd"),
    s("~ sn ~ <sn sn>"),
    s("<oh*4 [hh*8 ~]>*2"),
    s("<cr ~ ~ ~>*2")
  ).swing(0.14).hpf(160).crush(10).compressor("0.22:3.2:0.2:0.01:0.18").gain(0.42)],
  [8, stack(
    s("<bd ~ bd ~>*2"),
    s("~ sn ~ sn"),
    s("<hh*8 [~ hh*16]>"),
    s("~ ~ cp ~"),
    s("~ ~ ~ cr")
  ).swing(0.16).hpf(190).every(4, x=>x.degradeBy(0.3)).compressor("0.22:3.2:0.2:0.01:0.18").gain(0.34)]
)

$: arrange(
  [16, note("<c4 eb4 g4 bb4> <ab3 c4 eb4 g4> <f3 ab3 c4 eb4> <g3 bb3 d4 f4> <c4 eb4 g4 d5> <bb3 d4 f4 c5> <ab3 c4 eb4 g4> <g3 bb3 d4 fs4>")
    .sound("supersaw")
    .slow(4)
    .djf(sine.range(0.12, 0.85).slow(16))
    .phaser(0.18)
    .gain(0.07)],
  [16, note("<c4 eb4 g4 bb4> <ab3 c4 eb4 g4> <f3 ab3 c4 eb4> <g3 bb3 d4 f4> <c4 eb4 g4 d5> <bb3 d4 f4 c5> <ab3 c4 eb4 g4> <g3 bb3 d4 fs4>")
    .sound("supersaw")
    .slow(4)
    .lpf(sine.range(500, 3200).slow(16))
    .room(0.28)
    .gain(0.065)],
  [8, note("<c4 eb4 g4 bb4> <ab3 c4 eb4 g4> <f3 ab3 c4 eb4> <g3 bb3 d4 f4>")
    .sound("supersaw")
    .slow(4)
    .lpf(perlin.range(600, 2600).slow(8))
    .delay(0.22)
    .gain(0.065)]
)

$: arrange(
  [16, s("<we_begin im_here> ~ <stay_curious listen> <breathe again> <softly closer>")
    .slow(16)
    .chop(8)
    .sometimesBy(0.35, x=>x.rev())
    .room(0.18)
    .gain(0.075)],
  [8, s("<remember now> <inside its_ok> <keep_going> <wake_up trust> <hold_on between>")
    .slow(8)
    .chop(16)
    .speed("<1 1 0.98 1.02 -1>")
    .room(0.16)
    .gain(0.08)],
  [8, s("<go_slow not_yet> <follow_me> <let_it_ring smile> ~")
    .slow(8)
    .chop(16)
    .sometimesBy(0.45, x=>x.rev())
    .room(0.15)
    .gain(0.07)],
  [8, s("<listen breathe> <now keep_going> <inside remember> <let_go softly>")
    .slow(8)
    .chop(8)
    .speed("<1 1 0.5 -1>")
    .sometimesBy(0.4, x=>x.rev())
    .gain(0.075)]
)