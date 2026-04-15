setcps(128/60/4)

samples('shabda/speech:im_here,stay_curious,listen,breathe,again,softly,closer,let_go,remember,now')

$: arrange(
  [8, note("<c4 [eb4 g4] c5 [g4 eb4] [c4 ~] [d4 eb4]>").sound("triangle").lpf(sine.range(420, 2400).slow(8)).echo(3, 0.25, 0.22).every(4, x=>x.rev()).gain(0.24)],
  [8, note("<eb4 [g4 bb4] eb5 [bb4 g4] [f4 eb4] [db4 eb4]>").sound("piano").lpf(sine.range(680, 4200).slow(8)).delay(0.26).dt(0.375).gain(0.2)],
  [8, note("<ab4 [c5 eb5] ab5 [eb5 c5] [bb4 ab4 g4] [ab4 ~]>").sound("triangle").vowel("a e i o u").echo(4, 0.125, 0.16).every(8, x=>x.transpose(7)).gain(0.22)],
  [16, note("<c4 eb4 g4 c5> <bb3 d4 f4 bb4> <ab3 c4 eb4 ab4> <g3 bb3 d4 fs4> <f3 ab3 c4 eb4> <g3 bb3 d4 f4>").sound("square").lpf(sine.range(300, 2600).slow(16)).phaser(0.16).every(8, x=>x.palindrome()).gain(0.2)]
)

$: arrange(
  [16, note("<c2 ~ [c2 d2] g1> <c2 ~ [bb1 c2] g1> <ab1 ~ [ab1 bb1] eb1> <g1 ~ [g1 ab1] d1>").sound("sine").lpf(sine.range(75, 220).slow(16)).slide(0.08).triode(0.34).gain(0.2)],
  [16, note("<c2 ~ [c2 eb2] g1> <c2 ~ [bb1 db2] g1> <ab1 ~ [ab1 c2] eb1> <g1 ~ [g1 bb1] d1>").sound("sine").lpf(sine.range(75, 220).slow(16)).slide(0.08).triode(0.34).gain(0.2)]
)

$: arrange(
  [16, stack(
    s("<bd*4 bd bd*3>"),
    s("~ sn ~ sn"),
    s("<hh*8 hh*16>"),
    s("~ ~ cp ~")
  ).swing(0.12).every(8, x=>x.degradeBy(0.22)).hpf(180).gain(0.46).compressor("0.22:3.2:0.2:0.01:0.18")],
  [8, stack(
    s("<bd ~ bd ~>*2"),
    s("~ sn ~ <~ sn>"),
    s("<hh*16 ~>*2"),
    s("~ oh ~ ~")
  ).swing(0.1).every(4, x=>x.degradeBy(0.36)).hpf(210).gain(0.4).compressor("0.22:3.2:0.2:0.01:0.18")],
  [8, stack(
    s("bd*4 <~ bd bd> bd"),
    s("~ sn ~ <sn sn>"),
    s("<oh*4 [hh*8 ~]>*2"),
    s("rim*8")
  ).swing(0.14).every(6, x=>x.degradeBy(0.26)).hpf(160).gain(0.48).compressor("0.22:3.2:0.2:0.01:0.18")],
  [8, stack(
    s("<bd*4 bd bd*3>"),
    s("~ sn ~ sn"),
    s("<hh*8 [~ hh*16]>")
  ).swing(0.12).every(8, x=>x.degradeBy(0.3)).hpf(190).gain(0.4).compressor("0.22:3.2:0.2:0.01:0.18")]
)

$: note("<c4 eb4 g4 bb4> <ab3 c4 eb4 g4> <f3 ab3 c4 eb4> <g3 bb3 d4 f4> <c4 eb4 g4 d5> <ab3 c4 eb4 bb4>").sound("supersaw").slow(4).djf(sine.range(0.12, 0.9).slow(16)).room(0.34).gain(0.11)

$: arrange(
  [8, s("im_here ~ stay_curious listen").slow(8).chop(16).speed("<1 0.98 1.02 -1>").hpf(320).gain(0.11)],
  [8, s("breathe ~ softly again closer").slow(4).chop(32).speed(rand.range(0.86, 1.08)).delay(0.3).gain(0.12)],
  [8, s("remember ~ let_go breathe now").slow(8).chop(64).speed("<1 1 0.92 1.08>").room(0.26).gain(0.1)],
  [16, s("listen ~ again softly im_here").slow(8).chop(64).speed("<1 -1 1 0.9>").delay(0.38).gain(0.1)]
)