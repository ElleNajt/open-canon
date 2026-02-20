// Goldberg Variations - Ground Bass Reimagined
// The bass descends like memory through sediment
// But memory warps, stutters, refuses linearity
// Each voice carries its own temporal wound

setcps(58/60/4)

$: note("g2 fs2 e2 d2 b1 c2 d2 [g1 ~]")
  .slow(4)
  .sound("sawtooth")
  .lpf(sine.range(60, 520).slow(16))
  .gain(0.38)
  .room(0.7)

$: note("<g4 [fs4 ~] e4 [d4 cs4]> <b3 [~ c4] d4 [g3 a3]>")
  .slow(2)
  .sometimes(x => x.add(12))
  .sound("triangle")
  .delay(0.55).delaytime(0.375).delayfeedback(0.58)
  .gain(0.22)

$: note("[d5 ~] [b4 a4] [~ g4] [fs4 ~] [~ e5] [d5 ~] [b4 cs5] [d5 ~]")
  .slow(4)
  .degradeBy(0.15)
  .sound("sine")
  .attack(0.2).release(2.8)
  .gain(0.14)
  .pan(sine.range(0.15, 0.85).slow(7))

$: note("<b5 [~ a5] g5 [fs5 ~] [~ e5] d5 [cs5 d5] ~>")
  .euclid(5,12)
  .slow(8)
  .sound("sine")
  .attack(0.12).release(3.2)
  .gain(0.11)

$: note("[~ fs4,a4] ~ [g4,b4] [~ d5,fs5] ~ [e4,g4,b4] ~ ~")
  .slow(4)
  .iter(4)
  .sound("triangle")
  .lpf(1200).attack(0.3)
  .gain(0.1)

$: note("<[d4 ~] b3 [~ a3] g3 [fs3 ~] ~ [g3 a3] ~>")
  .slow(8)
  .juxBy(0.4, x => x.add(7))
  .sound("sawtooth")
  .lpf(280).lpq(6)
  .gain(0.07)