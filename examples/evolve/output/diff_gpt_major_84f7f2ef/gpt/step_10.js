setcps(128/60/4)

samples('shabda/speech:im_here,stay_curious,listen,breathe,again,softly,closer,let_go,remember,now,keep_going,inside,its_ok')

$: arrange(
  [8, note("<c4 [eb4 g4] c5 [g4 eb4] [c4 ~] [d4 eb4]>").sound("triangle").lpf(perlin.range(600, 3200).slow(8)).phaser(0.18).every(4, x=>x.rev()).gain(0.22)],
  [8, note("<eb4 [g4 bb4] eb5 [bb4 g4] [f4 eb4] [db4 eb4]>").sound("piano").lpf(sine.range(800, 4800).slow(8)).echo(4, 0.125, 0.16).every(8, x=>x.transpose(12)).gain(0.2)],
  [8, note("<ab4 [c5 eb5] ab5 [eb5 c5] [bb4 ab4 g4] [ab4 ~]>").sound("triangle").bpf(saw.range(700, 2600).slow(6)).echo(5, 0.125, 0.14).every(4, x=>x.palindrome()).gain(0.21)],
  [16, note("<c4 eb4 g4 c5> <bb3 d4 f4 bb4> <ab3 c4 eb4 ab4> <g3 bb3 d4 fs4> <f3 ab3 c4 eb4> <g3 bb3 d4 f4>").sound("square").lpf(sine.range(360, 3200).slow(16)).echo(3, 0.375, 0.12).every(8, x=>x.transpose(7)).gain(0.18)],
  [8, note("<c4 eb4 g4 c5> <bb3 d4 f4 bb4> <ab3 c4 eb4 g4> <g3 bb3 d4 f4>").arp("up").sound("piano").lpf(perlin.range(900, 5000).slow(8)).echo(6, 0.125, 0.18).gain(0.18)]
)

$: arrange(
  [16, note("<c2 ~ [c2 d2] g1> <c2 ~ [bb1 c2] g1> <ab1 ~ [ab1 bb1] eb1> <g1 ~ [g1 ab1] d1>").sound("sine").lpf(sine.range(80, 240).slow(16)).slide(0.09).drive(0.18).gain(0.19)],
  [16, note("<c2 ~ [c2 eb2] g1> <c2 ~ [bb1 db2] g1> <ab1 ~ [ab1 c2] eb1> <g1 ~ [g1 bb1] d1>").sound("sine").lpf(sine.range(80, 240).slow(16)).slide(0.09).drive(0.18).gain(0.19)]
)

$: arrange(
  [16, stack(
    s("<bd*4 bd bd*3>"),
    s("~ sn ~ sn"),
    s("<hh*8 hh*16>"),
    s("~ ~ cp ~")
  ).swing(0.12).hpf(180).every(8, x=>x.degradeBy(0.22)).compressor("0.22:3.2:0.2:0.01:0.18").gain(0.44)],
  [8, stack(
    s("<bd ~ bd ~>*2"),
    s("~ sn ~ <~ sn>"),
    s("<hh*16 ~>*2"),
    s("~ oh ~ ~")
  ).swing(0.1).hpf(210).every(4, x=>x.degradeBy(0.34)).compressor("0.22:3.2:0.2:0.01:0.18").gain(0.38)],
  [8, stack(
    s("bd*4 <~ bd bd> bd"),
    s("~ sn ~ <sn sn>"),
    s("<oh*4 [hh*8 ~]>*2"),
    s("<rim*8 ~ rim*4>")
  ).swing(0.14).hpf(160).every(6, x=>x.degradeBy(0.26)).compressor("0.22:3.2:0.2:0.01:0.18").gain(0.46)],
  [8, stack(
    s("<bd*4 bd bd*3>"),
    s("~ sn ~ sn"),
    s("<hh*8 [~ hh*16]>"),
    s("~ ~ cr ~")
  ).swing(0.12).hpf(190).every(8, x=>x.degradeBy(0.3)).compressor("0.22:3.2:0.2:0.01:0.18").gain(0.38)]
)

$: note("<c4 eb4 g4 bb4> <ab3 c4 eb4 g4> <f3 ab3 c4 eb4> <g3 bb3 d4 f4> <c4 eb4 g4 d5> <ab3 c4 eb4 bb4>").sound("supersaw").slow(4).djf(sine.range(0.08, 0.9).slow(16)).echo(4, 0.5, 0.22).gain(0.09)

$: s("<im_here stay_curious> <listen breathe> <again softly> <closer let_go> <remember now> <inside its_ok keep_going>").slow(8).chop(16).speed("<1 1 0.98 1.02 -1>").every(4, x=>x.rev()).gain(0.08)