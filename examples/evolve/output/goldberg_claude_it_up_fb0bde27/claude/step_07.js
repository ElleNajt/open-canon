// Goldberg Variations - Ground Bass Reimagined
// The bass descends like memory through sediment
// But memory warps, stutters, refuses linearity
// Each voice carries its own temporal wound
// Now breathing with organic irregularity

setcps(54/60/4)

$: note("g2 fs2 e2 d2 b1 c2 d2 [g1 ~]")
  .slow(4)
  .sound("sawtooth")
  .lpf(sine.range(45, 380).slow(12))
  .gain(0.4)
  .room(0.75)

$: note("<g4 [fs4 ~] e4 [d4 cs4]> <b3 [~ c4] d4 [g3 a3]>")
  .slow(2)
  .sometimes(x => x.add(12))
  .sound("triangle")
  .delay(0.6).delaytime(0.5).delayfeedback(0.62)
  .gain(0.24)

$: note("[d5 ~] [b4 a4] [~ g4] [fs4 ~] [~ e5] [d5 ~] [b4 cs5] [d5 ~]")
  .slow(4)
  .degradeBy(0.22)
  .sound("sine")
  .attack(0.25).release(3.2)
  .gain(0.15)
  .pan(sine.range(0.2, 0.8).slow(9))

$: note("<b5 [~ a5] g5 [fs5 ~] [~ e5] d5 [cs5 d5] ~>")
  .euclid(5,12)
  .slow(8)
  .sound("sine")
  .attack(0.15).release(3.5)
  .gain(0.12)

$: note("[~ fs4,a4] ~ [g4,b4] [~ d5,fs5] ~ [e4,g4,b4] ~ ~")
  .slow(4)
  .iter(4)
  .sound("triangle")
  .lpf(900).attack(0.35)
  .gain(0.11)

$: note("<[d4 ~] b3 [~ a3] g3 [fs3 ~] ~ [g3 a3] ~>")
  .slow(8)
  .juxBy(0.5, x => x.add(7))
  .sound("sawtooth")
  .lpf(240).lpq(8)
  .gain(0.08)