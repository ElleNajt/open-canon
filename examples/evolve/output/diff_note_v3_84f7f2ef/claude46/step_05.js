setcps(0.52)

$: note("<e2 d2 c2 [b1 c2]> <e2 [d2 cs2] c2 b1>".slow(2))
  .sound("sawtooth").lpf(sine.range(90, 2200).slow(11))
  .shape(0.4).gain(0.34)
  .every(5, x => x.add(note("12")).distort(0.3))

$: note("e3 [~ g3] b3 [a3 ~] [~ fs3] g3 [e3 ~] [~ d3]".slow(4))
  .sound("triangle").delay(0.55).dt("0.375 0.25 0.333")
  .dfb(0.62).gain(0.24)
  .off(0.125, x => x.add(note("7")).gain(0.13))

$: note("<[e4 g4 b4] [d4 fs4 a4] [c4 e4 g4] [b3 ds4 fs4]>")
  .sound("sine").slow(2).attack(0.8)
  .release(3.2).gain(0.21)
  .juxBy(0.9, x => x.detune(22).late(0.06))

$: s("bd [~ bd:2] ~ <bd [bd bd]>, ~ cp ~ <cp [~ cp]>, [hh hh:1]*4")
  .gain("0.5 0.3 0.44 0.35").shape(0.3)
  .room(0.22).sometimes(x => x.speed("0.85 1.15"))
  .every(7, x => x.ply(2).gain(0.24))

$: note("[e5 ~] [~ fs5] [b4 d5] ~ [g4 ~] [~ a4] [b4 ~] ~".slow(4))
  .sound("sine").fmi(sine.range(0.5, 7.8).slow(9))
  .fmh("<2 3 2.5 1.5>").gain(0.17)
  .pan(sine.range(0.1, 0.9).slow(6))

$: note("~ [b3 ~] [~ e4] ~ [g4 a4] ~ [~ fs4] [d4 ~]".slow(8))
  .sound("pulse").lpf(sine.range(350, 3800).slow(7))
  .gain(0.19).release(1.4).palindrome()