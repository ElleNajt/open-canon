setcps(0.56)

$: note("<e2 d2 c2 [b1 c2]> <e2 [d2 cs2] c2 b1>".slow(2))
  .sound("sawtooth").lpf(sine.range(110, 3200).slow(13))
  .shape(0.62).gain(0.36)
  .every(5, x => x.add(note("<7 12>")).crush(5))

$: note("e3 [~ g3] b3 [a3 ~] [~ fs3] g3 [e3 ~] [~ d3]".slow(4))
  .sound("triangle").delay(0.58).dt("0.375 0.25 0.333")
  .dfb(0.68).gain(0.22)
  .off(0.125, x => x.add(note("<7 12 -5 5>")).gain(0.13))

$: note("<[e4 g4 b4] [d4 fs4 a4] [c4 e4 g4] [b3 ds4 fs4]>")
  .sound("sine").slow(2).attack(3.8)
  .release(12).gain(0.18)
  .juxBy(0.85, x => x.detune(180).late(0.5))

$: s("bd [~ bd:2] ~ <bd [bd bd]>, ~ cp ~ <cp [~ cp]>, [hh hh:1]*4")
  .gain("0.46 0.28 0.42 0.32").shape(0.35)
  .room(0.18).sometimes(x => x.ply(2).gain(0.20))
  .every(7, x => x.speed("0.5 1.6"))

$: note("[e5 ~] [~ fs5] [b4 d5] ~ [g4 ~] [~ a4] [b4 ~] ~".slow(4))
  .sound("sine").fmi(sine.range(0.3, 28).slow(11))
  .fmh("<2 3 2.5 1.5>").gain(0.16)
  .pan(sine.range(0.08, 0.92).slow(7))

$: note("~ [b3 ~] [~ e4] ~ [g4 a4] ~ [~ fs4] [d4 ~]".slow(8))
  .sound("pulse").lpf(sine.range(260, 5200).slow(9))
  .gain(0.17).release(2.8).palindrome()