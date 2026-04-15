setcps(0.4)

$: note("<e2 d2 c2 [b1 c2]>")
  .sound("sawtooth").lpf(sine.range(180, 900).slow(16))
  .gain(0.35).room(0.4).attack(0.01)

$: note("e3 [~ g3] b3 [a3 ~]".slow(2))
  .sound("triangle").delay(0.4).dt(0.375)
  .dfb(0.45).gain(0.25)

$: note("<[e4 g4 b4] [d4 fs4 a4] [c4 e4 g4] [b3 d4 fs4]>")
  .sound("sine").slow(2).attack(0.3)
  .release(1.2).gain(0.18).room(0.6)

$: s("bd [~ bd] ~ bd, ~ cp ~ cp, hh*8")
  .gain("0.5 0.3 0.4 0.35").shape(0.3)
  .sometimes(x => x.speed(0.8))

$: note("e5 ~ [b4 ~] ~ [g4 ~] ~ ~ ~".slow(4))
  .sound("sine").fmi(sine.range(0.5, 3).slow(11))
  .fmh(2).gain(0.12).pan(sine.range(0.2, 0.8).slow(7))

$: note("~ ~ ~ [e4 ~] ~ [~ b3] ~ ~".slow(8))
  .sound("pulse").lpf(1200).gain(0.15)
  .distort(0.15).release(0.6)