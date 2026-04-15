setcps(0.45)

$: note("<e2 d2 c2 [b1 c2]> <e2 [d2 cs2] c2 b1>".slow(2))
  .sound("sawtooth").lpf(sine.range(140, 1100).slow(13))
  .gain(0.32).shape(0.25).attack(0.005)

$: note("e3 [~ g3] b3 [a3 ~] [~ fs3] g3 [e3 ~] ~".slow(4))
  .sound("triangle").delay(0.5).dt("0.375 0.25")
  .dfb(0.55).gain(0.22)

$: note("<[e4 g4 b4] [d4 fs4 a4] [c4 e4 g4] [b3 ds4 fs4]>")
  .sound("sine").slow(2).attack(0.4)
  .release(1.8).gain(0.17).juxBy(0.6, x => x.detune(12))

$: s("bd [~ bd:2] ~ <bd [bd bd]>, ~ cp ~ <cp [~ cp]>, [hh hh:1]*4")
  .gain("0.48 0.28 0.38 0.33").shape(0.35)
  .sometimes(x => x.speed(0.85))

$: note("[e5 ~] ~ [b4 d5] ~ [g4 ~] [~ a4] ~ ~".slow(4))
  .sound("sine").fmi(sine.range(0.3, 4.5).slow(11))
  .fmh(2).gain(0.13).pan(sine.range(0.15, 0.85).slow(7))

$: note("~ [b3 ~] ~ ~ [e4 g4] ~ [~ fs4] ~".slow(8))
  .sound("pulse").lpf(sine.range(600, 2200).slow(10))
  .gain(0.14).release(0.8).distort(0.12)