setcps(0.48)

$: note("<e2 d2 c2 [b1 c2]> <e2 [d2 cs2] c2 b1>".slow(2))
  .sound("sawtooth").lpf(sine.range(60, 3600).slow(13))
  .shape(0.62).gain(0.32)
  .every(7, x => x.add(note("<12 -12 7>")).crush(3))

$: note("e3 [~ g3] b3 [a3 ~] [~ fs3] g3 [e3 ~] [~ d3]".slow(4))
  .sound("triangle").delay(0.58).dt("0.375 0.25 0.5")
  .dfb(0.92).gain(0.19)
  .off(0.125, x => x.add(note("<-5 12 -12 7>")).gain(0.11))

$: note("<[e4 g4 b4] [d4 fs4 a4] [c4 e4 g4] [b3 ds4 fs4]>")
  .sound("sine").slow(2).attack(5)
  .release(11).gain(0.13)
  .juxBy(0.95, x => x.detune(280).late(0.5))

$: s("bd [~ bd:2] ~ <bd [bd bd:3]>, ~ cp:1 ~ <cp [~ cp:2]>, [hh hh:1]*4")
  .gain("0.42 0.28 0.38 0.32").shape(0.4)
  .room(0.22).sometimes(x => x.ply(2).gain(0.2))
  .every(11, x => x.speed("0.5 1.8"))

$: note("[e5 ~] [~ fs5] [b4 d5] ~ [g4 ~] [~ a4] [b4 ~] ~".slow(4))
  .sound("sine").fmi(sine.range(0.8, 28).slow(11))
  .fmh("<2 3 1.5 5>").gain(0.14)
  .pan(sine.range(0.05, 0.95).slow(7))

$: note("~ [b3 ~] [~ e4] [g4 ~] ~ [a4 b4] ~ [~ d4]".slow(6))
  .sound("pulse").lpf(perlin.range(140, 4200).slow(11))
  .gain(0.14).release(4).palindrome()