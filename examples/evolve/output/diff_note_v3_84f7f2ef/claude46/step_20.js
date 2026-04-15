setcps(0.58)

$: note("<e2 d2 c2 [b1 c2]> <e2 [d2 cs2] c2 b1>".slow(2))
  .sound("sawtooth").lpf(sine.range(60, 3200).slow(13))
  .shape(0.62).gain(0.36)
  .every(7, x => x.add(note("<12 7 -12>")).distort(0.4))

$: note("e3 [~ g3] b3 [a3 ~] [~ fs3] g3 [e3 ~] [~ d3]".slow(4))
  .sound("triangle").delay(0.58).dt("0.375 0.25 0.5")
  .dfb(0.78).gain(0.22)
  .off(0.125, x => x.add(note("<-5 12 7 -12>")).gain(0.13))

$: note("<[e4 g4 b4] [d4 fs4 a4] [c4 e4 g4] [b3 ds4 fs4]>")
  .sound("sine").slow(2).attack(5)
  .release(12).gain(0.21)
  .juxBy(0.85, x => x.detune(180).late(0.5))

$: s("bd [~ bd:2] ~ <bd [bd bd:3]>, ~ cp:1 ~ <cp [~ cp:2]>, [hh hh:1]*4")
  .gain("0.46 0.32 0.42 0.36").shape(0.34)
  .room(0.22).sometimes(x => x.ply(2).gain(0.24))
  .every(11, x => x.speed("0.5 1.8"))

$: note("[e5 ~] [~ fs5] [b4 d5] ~ [g4 ~] [~ a4] [b4 ~] ~".slow(4))
  .sound("sine").fmi(sine.range(0.3, 28).slow(11))
  .fmh("<2 3 1.5 5>").gain(0.18)
  .pan(sine.range(0.08, 0.92).slow(7))

$: note("~ [b3 ~] [~ e4] [g4 ~] ~ [a4 b4] ~ [~ d4]".slow(6))
  .sound("pulse").lpf(perlin.range(280, 4200).slow(9))
  .gain(0.16).release(4).palindrome()