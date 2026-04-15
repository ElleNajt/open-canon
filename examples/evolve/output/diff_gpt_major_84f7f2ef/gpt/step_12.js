setcps(128/60/4)

samples('shabda/speech:im_here,stay_curious,listen,breathe,again,softly,closer,let_go,remember,now,keep_going,inside,its_ok,wake_up,trust,hold_on,between,we_begin,go_slow,not_yet,follow_me,let_it_ring,smile')

$: arrange(
  [8, stack(
    note("<c4 [eb4 g4] c5 [g4 eb4] [c4 ~] [d4 eb4]>")
      .sound("triangle")
      .lpf(perlin.range(800, 3200).slow(8))
      .echo(4, 0.25, 0.15)
      .gain(0.14),
    note("<~ [eb4 g4] ~ [g4 eb4] [c4 ~] [d4 eb4]>")
      .sound("piano")
      .lpf(sine.range(900, 4800).slow(8))
      .every(4, x=>x.rev())
      .gain(0.12)
  )],
  [8, note("<eb4 [g4 bb4] eb5 [bb4 g4] [f4 eb4] [db4 eb4]>")
    .sound("piano")
    .lpf(sine.range(1200, 5400).slow(8))
    .juxBy(0.5, y=>y.transpose(12).pan(0.85))
    .echo(3, 0.125, 0.14)
    .gain(0.16)],
  [8, note("<c4 eb4 g4 c5> <bb3 d4 f4 bb4> <ab3 c4 eb4 ab4> <g3 bb3 d4 fs4> <f3 ab3 c4 eb4> <g3 bb3 d4 f4>")
    .arp("random")
    .sound("square")
    .lpf(sine.range(600, 3000).slow(8))
    .sometimes(x=>x.rev())
    .gain(0.15)],
  [8, note("<ab4 [c5 eb5] ab5 [eb5 c5] [bb4 ab4 g4] [ab4 ~]>")
    .sound("triangle")
    .bpf(saw.range(700, 2400).slow(6))
    .every(4, x=>x.palindrome())
    .echo(4, 0.5, 0.12)
    .gain(0.14)]
)

$: arrange(
  [16, note("<c2 ~ [c2 d2] g1> <c2 ~ [bb1 c2] g1> <ab1 ~ [ab1 bb1] eb1> <g1 ~ [g1 ab1] d1>")
    .sound("sine")
    .lpf(sine.range(70, 200).slow(16))
    .fm(1.2)
    .slide(0.06)
    .gain(0.18)],
  [8, note("<f1 ~ [f1 g1] c1> <ab1 ~ [ab1 bb1] eb1> <g1 ~ [g1 ab1] d1> <c2 ~ [bb1 c2] g1>")
    .sound("sine")
    .lpf(sine.range(80, 260).slow(8))
    .fm(1.6)
    .slide(0.07)
    .gain(0.19)],
  [8, note("<ab1 ~ [ab1 bb1] eb1> <g1 ~ [g1 ab1] d1> <f1 ~ [f1 g1] c1> <c2 ~ [bb1 c2] g1>")
    .sound("sine")
    .lpf(sine.range(70, 220).slow(8))
    .fm(0.9)
    .slide(0.05)
    .gain(0.18)]
)

$: arrange(
  [16, stack(
    s("bd*4"),
    s("~ sn ~ sn"),
    s("hh*8"),
    s("~ ~ rim ~")
  ).swing(0.12).hpf(170).every(8, x=>x.degradeBy(0.18)).compressor("0.22:3.2:0.2:0.01:0.18").gain(0.4)],
  [8, stack(
    s("<bd*4 bd bd*3>"),
    s("~ sn ~ <~ sn>"),
    s("<hh*16 ~>*2"),
    s("~ oh ~ ~")
  ).swing(0.1).hpf(200).every(4, x=>x.degradeBy(0.28)).compressor("0.22:3.2:0.2:0.01:0.18").gain(0.36)],
  [8, stack(
    s("bd*4 <~ bd bd> bd"),
    s("~ sn ~ <sn sn>"),
    s("<oh*4 [hh*8 ~]>*2"),
    s("<cr ~ ~ ~>*2")
  ).swing(0.14).hpf(160).every(6, x=>x.degradeBy(0.22)).compressor("0.22:3.2:0.2:0.01:0.18").gain(0.44)],
  [8, stack(
    s("<bd ~ bd ~>*2"),
    s("~ sn ~ sn"),
    s("<hh*8 [~ hh*16]>"),
    s("~ ~ cp ~")
  ).swing(0.16).hpf(190).every(4, x=>x.degradeBy(0.35)).compressor("0.22:3.2:0.2:0.01:0.18").gain(0.34)]
)

$: note("<c4 eb4 g4 bb4> <ab3 c4 eb4 g4> <f3 ab3 c4 eb4> <g3 bb3 d4 f4> <c4 eb4 g4 d5> <bb3 d4 f4 c5> <ab3 c4 eb4 g4> <g3 bb3 d4 fs4>")
  .sound("supersaw")
  .slow(4)
  .djf(sine.range(0.1, 0.88).slow(16))
  .room(0.32)
  .gain(0.07)

$: arrange(
  [16, s("<we_begin im_here> ~ <stay_curious listen> <breathe again> <softly closer>")
    .slow(16)
    .chop(8)
    .speed("<1 0.99 1.01>")
    .every(4, x=>x.rev())
    .gain(0.075)],
  [8, s("<remember now> <inside its_ok> <keep_going> <wake_up trust> <hold_on between>")
    .slow(8)
    .chop(16)
    .speed("<1 1 0.98 1.02 -1>")
    .every(4, x=>x.rev())
    .gain(0.08)],
  [8, s("<go_slow not_yet> <follow_me> <let_it_ring smile> ~")
    .slow(8)
    .chop(16)
    .speed("<1 -1 1 0.5>")
    .every(2, x=>x.rev())
    .gain(0.07)]
)