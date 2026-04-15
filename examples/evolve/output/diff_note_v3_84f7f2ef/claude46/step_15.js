setcps(0.54)

$: note("<e2 d2 c2 [b1 c2]> <e2 [d2 cs2] c2 b1>".slow(2))
  .sound("sawtooth").lpf(sine.range(90, 2800).slow(11))
  .shape(0.58).gain(0.34)
  .every(5, x => x.add(note("<7 12>")).crush(6))

$: note("e3 [~ g3] b3 [a3 ~] [~ fs3] g3 [e3 ~] [~ d3]".slow(4))
  .sound("triangle").delay(0.62).dt("0.375 0.25 0.333")
  .dfb(0.72).gain(0.20)
  .off(0.125, x => x.add(note("<7 12 -5 5>")).gain(0.11))

$: note("<[e4 g4 b4] [d4 fs4 a4] [c4 e4 g4] [b3 ds4 fs4]>")
  .sound("sine").slow(2).attack(4.5)
  .release(14).gain(0.16)
  .juxBy(0.9, x => x.detune(220).late(0.5))

$: s("bd [~ bd:2] ~ <bd [bd bd]>, ~ cp ~ <cp [~ cp]>, [hh hh:1]*4")
  .gain("0.44 0.26 0.40 0.30").shape(0.38)
  .room(0.22).sometimes(x => x.ply(2).gain(0.18))
  .every(7, x => x.speed("0.5 1.6"))

$: note("[e5 ~] [~ fs5] [b4 d5] ~ [g4 ~] [~ a4] [b4 ~] ~".slow(4))
  .sound("sine").fmi(sine.range(0.2, 32).slow(13))
  .fmh("<2 3 2.5 1.5>").gain(0.14)
  .pan(sine.range(0.05, 0.95).slow(7))

$: note("~ [b3 ~] [~ e4] ~ [g4 a4] ~ [~ fs4] [d4 ~]".slow(8))
  .sound("pulse").lpf(sine.range(220, 4800).slow(9))
  .gain(0.15).release(3.2).palindrome()