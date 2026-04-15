setcps(0.58)

$: note("<e2 d2 c2 [b1 c2]> <e2 [d2 cs2] c2 b1>".slow(2))
  .sound("sawtooth").lpf(sine.range(40, 2800).slow(11))
  .shape(0.58).gain(0.38)
  .every(7, x => x.add(note("<12 -12 7>")).crush(6))

$: note("e3 [~ g3] b3 [a3 ~] [~ fs3] g3 [e3 ~] [~ d3]".slow(4))
  .sound("triangle").delay(0.62).dt("0.375 0.25 0.5")
  .dfb(0.82).gain(0.24)
  .off(0.125, x => x.add(note("<-5 12 -12 7>")).gain(0.14))

$: note("<[e4 g4 b4] [d4 fs4 a4] [c4 e4 g4] [b3 ds4 fs4]>")
  .sound("sine").slow(2).attack(4)
  .release(9).gain(0.19)
  .juxBy(0.9, x => x.detune(220).late(0.5))

$: s("bd [~ bd:2] ~ <bd [bd bd:3]>, ~ cp:1 ~ <cp [~ cp:2]>, [hh hh:1]*4")
  .gain("0.48 0.34 0.44 0.38").shape(0.38)
  .room(0.18).sometimes(x => x.ply(2).gain(0.26))
  .every(11, x => x.speed("0.5 1.8"))

$: note("[e5 ~] [~ fs5] [b4 d5] ~ [g4 ~] [~ a4] [b4 ~] ~".slow(4))
  .sound("sine").fmi(sine.range(1.2, 32).slow(9))
  .fmh("<2 3 1.5 5>").gain(0.19)
  .pan(sine.range(0.08, 0.92).slow(7))

$: note("~ [b3 ~] [~ e4] [g4 ~] ~ [a4 b4] ~ [~ d4]".slow(6))
  .sound("pulse").lpf(perlin.range(220, 3800).slow(8))
  .gain(0.18).release(3.5).palindrome()