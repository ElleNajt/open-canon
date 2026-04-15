setcps(0.47)

$: note("<e2 d2 c2 [b1 c2]> <e2 [d2 cs2] c2 b1>".slow(2))
  .sound("sawtooth").lpf(sine.range(90, 1400).slow(11))
  .shape(0.3).gain(0.34)
  .every(8, x => x.add(note("7")).lpf(2800))

$: note("e3 [~ g3] b3 [a3 ~] [~ fs3] g3 [e3 ~] [~ d3]".slow(4))
  .sound("triangle").delay(0.45).dt("0.375 0.25 0.333")
  .dfb(0.62).gain(0.24)
  .sometimes(x => x.add(note("12")))

$: note("<[e4 g4 b4] [d4 fs4 a4] [c4 e4 g4] [b3 ds4 fs4]>")
  .sound("sine").slow(2).attack(0.5)
  .release(2.2).gain(0.18)
  .juxBy(0.7, x => x.detune(14).late(0.03))

$: s("bd [~ bd:2] ~ <bd [bd bd]>, ~ cp ~ <cp [~ cp]>, [hh hh:1]*4")
  .gain("0.5 0.3 0.4 0.35").shape(0.32)
  .room(0.15).sometimes(x => x.speed(0.82))

$: note("[e5 ~] [~ fs5] [b4 d5] ~ [g4 ~] [~ a4] [b4 ~] ~".slow(4))
  .sound("sine").fmi(sine.range(0.2, 5.8).slow(13))
  .fmh(2).gain(0.14).pan(sine.range(0.1, 0.9).slow(7))

$: note("~ [b3 ~] [~ e4] ~ [g4 a4] ~ [~ fs4] [d4 ~]".slow(8))
  .sound("pulse").lpf(sine.range(500, 2600).slow(9))
  .gain(0.16).release(0.9).palindrome()