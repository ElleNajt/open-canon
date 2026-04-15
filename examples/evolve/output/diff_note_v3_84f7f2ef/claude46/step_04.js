setcps(0.49)

$: note("<e2 d2 c2 [b1 c2]> <e2 [d2 cs2] c2 b1>".slow(2))
  .sound("sawtooth").lpf(sine.range(110, 1800).slow(13))
  .shape(0.35).gain(0.32)
  .every(6, x => x.add(note("7")).crush(8))

$: note("e3 [~ g3] b3 [a3 ~] [~ fs3] g3 [e3 ~] [~ d3]".slow(4))
  .sound("triangle").delay(0.5).dt("0.375 0.25 0.333")
  .dfb(0.58).gain(0.22)
  .off(0.125, x => x.add(note("5")).gain(0.12))

$: note("<[e4 g4 b4] [d4 fs4 a4] [c4 e4 g4] [b3 ds4 fs4]>")
  .sound("sine").slow(2).attack(0.6)
  .release(2.8).gain(0.19)
  .juxBy(0.8, x => x.detune(17).late(0.04))

$: s("bd [~ bd:2] ~ <bd [bd bd]>, ~ cp ~ <cp [~ cp]>, [hh hh:1]*4")
  .gain("0.48 0.28 0.42 0.33").shape(0.28)
  .room(0.18).often(x => x.speed("0.9 1.1"))
  .every(7, x => x.ply(2).gain(0.22))

$: note("[e5 ~] [~ fs5] [b4 d5] ~ [g4 ~] [~ a4] [b4 ~] ~".slow(4))
  .sound("sine").fmi(sine.range(0.3, 6.2).slow(11))
  .fmh("<2 3 2 1.5>").gain(0.15)
  .pan(sine.range(0.15, 0.85).slow(7))

$: note("~ [b3 ~] [~ e4] ~ [g4 a4] ~ [~ fs4] [d4 ~]".slow(8))
  .sound("pulse").lpf(sine.range(400, 3200).slow(9))
  .gain(0.17).release(1.1).palindrome()