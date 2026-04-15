setcps(0.58)

$: note("<e2 d2 c2 [b1 c2]> <e2 [d2 cs2] c2 b1>".slow(2))
  .sound("sawtooth").lpf(sine.range(110, 1800).slow(13))
  .shape(0.55).gain(0.36)
  .every(7, x => x.add(note("7")).shape(0.72))

$: note("e3 [~ g3] b3 [a3 ~] [~ fs3] g3 [e3 ~] [~ d3]".slow(4))
  .sound("triangle").delay(0.48).dt("0.375 0.25 0.333")
  .dfb(0.58).gain(0.22)
  .off(0.125, x => x.add(note("<7 12 -12 5>")).gain(0.13))

$: note("<[e4 g4 b4] [d4 fs4 a4] [c4 e4 g4] [b3 ds4 fs4]>")
  .sound("sine").slow(2).attack(1.2)
  .release(4).gain(0.19)
  .juxBy(0.85, x => x.detune(55).late(0.15))

$: s("bd [~ bd:2] ~ <bd [bd bd]>, ~ cp ~ <cp [~ cp]>, [hh hh:1]*4")
  .gain("0.48 0.28 0.42 0.33").shape(0.3)
  .room(0.18).every(5, x => x.speed("0.6 1.4"))
  .sometimes(x => x.ply(2).gain(0.22))

$: note("[e5 ~] [~ fs5] [b4 d5] ~ [g4 ~] [~ a4] [b4 ~] ~".slow(4))
  .sound("sine").fmi(sine.range(0.3, 13).slow(11))
  .fmh("<2 3 2.5 1.5>").gain(0.15)
  .pan(sine.range(0.08, 0.92).slow(6))

$: note("~ [b3 ~] [~ e4] ~ [g4 a4] ~ [~ fs4] [d4 ~]".slow(8))
  .sound("pulse").lpf(sine.range(280, 4200).slow(9))
  .gain(0.17).release(1.4).palindrome()