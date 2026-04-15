setcps(128/60/4)

samples('shabda/speech:im_here,stay_curious,listen')

$: arrange(
  [8, note("c4 e4 g4 c5 g4 e4").sound("triangle").every(4, x=>x.transpose(2)).lpf(sine.range(350, 2600).slow(8)).delay(0.22).gain(0.3)],
  [8, note("eb4 g4 bb4 eb5 bb4 g4 eb4 g4").sound("triangle").every(4, x=>x.transpose(2)).lpf(sine.range(500, 3400).slow(8)).delay(0.28).gain(0.28)],
  [16, note("<c4 eb4 g4 c5> <bb3 d4 f4 bb4> <ab3 c4 eb4 ab4> <g3 bb3 d4 g4>").sound("triangle").every(8, x=>x.transpose(2)).lpf(sine.range(300, 3200).slow(16)).delay(0.18).gain(0.32)]
)

$: note("<c2 ~ c2 g1> <c2 ~ bb1 g1>").sound("sine").lpf(160).drive(0.3).gain(0.22).room(0.08)

$: stack(
  s("<bd*4 bd bd*3>"),
  s("~ sn ~ sn"),
  s("<hh*8 hh*16>")
).swing(0.1).hpf(170).gain(0.45).room(0.06).compressor("0.22:3.2:0.2:0.01:0.18")

$: note("<c4 eb4 g4 bb4> <ab3 c4 eb4 g4> <f3 ab3 c4 eb4> <g3 bb3 d4 f4>").sound("supersaw").slow(4).vowel("o a e i").room(0.38).gain(0.14)

$: arrange(
  [8, s("im_here ~ stay_curious listen").slow(8).chop(16).speed("<1 0.96 1.04 -1>").room(0.4).gain(0.11)],
  [8, s("stay_curious ~ im_here listen").slow(4).chop(32).speed(rand.range(0.85, 1.1)).room(0.35).gain(0.12)],
  [16, s("listen ~ im_here stay_curious").slow(8).chop(64).speed("<1 1 0.92 1.08>").room(0.45).gain(0.1)]
)