setcps(128/60/4)

samples('shabda/speech:im_here,stay_curious,listen,breathe,again,softly,closer,let_go,remember,now,keep_going,inside,its_ok,wake_up,trust,hold_on,between,we_begin,go_slow,not_yet,follow_me,let_it_ring,smile')

$: arrange(
  [16, stack(
    note("<c4 [eb4 g4] [g4 bb4] [eb4 g4] [d4 f4] [c4 ~]>"),
    note("<~ [g4 bb4] ~ [bb4 g4] [c5 ~] [d5 eb5]>")
  )],
  [16, stack(
    note("<eb4 [g4 bb4] [bb4 c5] [g4 bb4] [f4 ab4] [eb4 ~]>"),
    note("<~ [bb4 c5] ~ [c5 bb4] [d5 ~] [eb5 f5]>")
  )],
  [8, stack(
    note("<ab3 [c4 eb4] [eb4 g4] [c4 eb4] [bb3 d4] [ab3 ~]>"),
    note("<~ [eb4 g4] ~ [g4 eb4] [ab4 ~] [bb4 c5]>")
  )],
  [8, stack(
    note("<g3 [bb3 d4] [d4 f4] [bb3 d4] [ab3 c4] [g3 ~]>"),
    note("<~ [d4 f4] ~ [f4 d4] [g4 ~] [ab4 bb4]>")
  )]
)
.sound("piano")
.lpf(perlin.range(900, 5200).slow(16))
.echo(3, 0.25, 0.09)
.pan(sine.range(0.35, 0.65).slow(8))
.gain(0.085)

$: arrange(
  [16, note("<c2 ~ [c2 d2] g1> <c2 ~ [bb1 c2] g1> <ab1 ~ [ab1 bb1] eb1> <g1 ~ [g1 ab1] d1>")],
  [16, note("<c2 ~ g1 ~> <ab1 ~ eb1 ~> <f1 ~ c1 ~> <g1 ~ d1 ~>")],
  [8, note("<ab1 ~ [ab1 bb1] eb1> <g1 ~ [g1 ab1] d1> <f1 ~ [f1 g1] c1> <c2 ~ [bb1 c2] g1>")],
  [8, note("<c2 ~ [c2 d2] g1> <eb2 ~ [eb2 f2] bb1> <ab1 ~ [ab1 bb1] eb1> <g1 ~ [g1 ab1] d1>")]
)
.sound("pulse")
.lpf(sine.range(60, 220).slow(16))
.fm(1)
.slide(0.055)
.gain(0.15)

$: arrange(
  [16, stack(
    s("bd*4"),
    s("hh*8"),
    s("~ ~ rim ~")
  )],
  [16, stack(
    s("<bd*4 bd bd*3>"),
    s("~ sn ~ <~ sn>"),
    s("<hh*16 ~>*2"),
    s("~ oh ~ ~")
  )],
  [8, stack(
    s("bd*2 [~ bd] bd"),
    s("~ sn ~ <sn sn>"),
    s("<oh*4 [hh*8 ~]>*2"),
    s("<cr ~ ~ ~>*2")
  )],
  [8, stack(
    s("<bd ~ bd ~>*2"),
    s("~ sn ~ sn"),
    s("hh*8"),
    s("~ ~ cp cr")
  )]
)
.swing(0.12)
.hpf(180)
.compressor("0.22:3.2:0.2:0.01:0.18")
.every(8, x=>x.degradeBy(0.16))
.gain(0.32)

$: arrange(
  [16, note("<c4 eb4 g4 bb4> <ab3 c4 eb4 g4> <f3 ab3 c4 eb4> <g3 bb3 d4 f4>")],
  [16, note("<c4 eb4 g4 d5> <bb3 d4 f4 c5> <ab3 c4 eb4 g4> <g3 bb3 d4 fs4>")],
  [8, note("<ab3 c4 eb4 g4> <g3 bb3 d4 f4> <f3 ab3 c4 eb4> <c4 eb4 g4 bb4>")],
  [8, note("<c4 eb4 g4 bb4> <c4 eb4 g4 d5> <ab3 c4 eb4 g4> <g3 bb3 d4 f4>")]
)
.sound("supersaw")
.slow(4)
.djf(sine.range(0.08, 0.88).slow(24))
.room(0.22)
.gain(0.058)

$: arrange(
  [16, s("<we_begin im_here> ~ <stay_curious listen> <breathe again> <softly closer>")],
  [16, s("<inside its_ok> <remember now> <keep_going> <hold_on between> <wake_up trust>")],
  [8, s("<go_slow not_yet> <follow_me> <let_it_ring smile> <listen breathe>")],
  [8, s("~ <let_go softly> ~ <im_here remember>")]
)
.slow(8)
.chop(16)
.sometimesBy(0.28, x=>x.rev())
.room(0.14)
.gain(0.07)