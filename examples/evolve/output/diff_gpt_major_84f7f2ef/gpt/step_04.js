setcps(128/60/4)

samples('shabda/speech:im_here,stay_curious,listen,breathe,again,softly')

$: arrange(
  [8, note("c4 [e4 g4] c5 [g4 e4] c4").sound("triangle").juxBy(0.5, x=>x.transpose(12)).lpf(sine.range(320, 2600).slow(8)).delay(0.22).gain(0.3)],
  [8, note("eb4 [g4 bb4] eb5 [bb4 g4] eb4").sound("triangle").juxBy(0.45, x=>x.transpose(12)).lpf(sine.range(420, 3400).slow(8)).delay(0.26).gain(0.28)],
  [8, note("ab4 [c5 eb5] ab5 [eb5 c5] ab4").sound("triangle").juxBy(0.42, x=>x.transpose(12)).lpf(sine.range(380, 3000).slow(8)).delay(0.24).gain(0.27)],
  [16, note("<c4 eb4 g4 c5> <bb3 d4 f4 bb4> <ab3 c4 eb4 ab4> <g3 bb3 d4 g4>").sound("triangle").juxBy(0.4, x=>x.transpose(12)).lpf(sine.range(260, 3200).slow(16)).delay(0.18).gain(0.32)]
)

$: note("<c2 ~ c2 g1> <c2 ~ bb1 g1> <ab1 ~ ab1 eb1> <g1 ~ g1 d1>").sound("sine").lpf(sine.range(90, 220).slow(16)).slide(0.06).drive(0.25).gain(0.22)

$: arrange(
  [16, stack(
    s("<bd*4 bd bd*3>"),
    s("~ sn ~ sn"),
    s("<hh*8 hh*16>")
  ).swing(0.12).every(8, x=>x.degradeBy(0.2)).hpf(180).gain(0.46).compressor("0.22:3.2:0.2:0.01:0.18")],
  [8, stack(
    s("bd*4 <~ bd bd> bd"),
    s("~ sn ~ <sn sn>"),
    s("<hh*16 ~>*2")
  ).swing(0.08).every(4, x=>x.degradeBy(0.35)).hpf(220).gain(0.42).compressor("0.22:3.2:0.2:0.01:0.18")],
  [8, stack(
    s("<bd*4 bd bd*3>"),
    s("~ sn ~ sn"),
    s("<oh*4 hh*8>")
  ).swing(0.14).every(6, x=>x.degradeBy(0.25)).hpf(160).gain(0.48).compressor("0.22:3.2:0.2:0.01:0.18")]
)

$: note("<c4 eb4 g4 bb4> <ab3 c4 eb4 g4> <f3 ab3 c4 eb4> <g3 bb3 d4 f4>").sound("supersaw").slow(4).lpf(sine.range(420, 2600).slow(16)).room(0.4).gain(0.12)

$: arrange(
  [8, s("im_here ~ stay_curious listen").slow(8).chop(16).speed("<1 0.96 1.04 -1>").delay(0.32).gain(0.11)],
  [8, s("breathe ~ softly again listen").slow(4).chop(32).speed(rand.range(0.85, 1.1)).delay(0.28).gain(0.12)],
  [8, s("stay_curious ~ im_here breathe").slow(8).chop(64).speed("<1 1 0.92 1.08>").delay(0.36).gain(0.1)],
  [16, s("listen ~ again softly im_here").slow(8).chop(64).speed("<1 -1 1 0.9>").delay(0.38).gain(0.1)]
)