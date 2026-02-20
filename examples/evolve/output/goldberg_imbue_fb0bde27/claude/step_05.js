// Goldberg Variations - Ground Bass Reimagined
// The bass descends like memory through sediment
// Upper voices reach upward, questioning, dissolving into harmonics
// What remains when the pattern completes? Only the space between notes.

setcps(58/60/4)

$: note("g2 fs2 e2 d2 b1 c2 d2 [g1 ~]")
  .slow(4)
  .sound("sawtooth")
  .lpf(sine.range(90, 440).slow(12))
  .gain(0.4)
  .room(0.6)

$: note("<g4 [fs4 ~] e4 [d4 cs4]> <b3 [~ c4] d4 [g3 a3]>")
  .slow(2)
  .sound("triangle")
  .delay(0.5).delaytime(0.333).delayfeedback(0.52)
  .gain(0.24)

$: note("[d5 ~] [b4 a4] [~ g4] [fs4 ~] [~ e5] [d5 ~] [b4 cs5] [d5 ~]")
  .slow(4)
  .sound("sine")
  .attack(0.15).release(2.2)
  .gain(0.13)
  .pan(sine.range(0.2, 0.8).slow(7))

$: note("<b5 [~ a5] g5 [fs5 ~] [~ e5] d5 [cs5 d5] ~>")
  .euclid(7,16)
  .slow(8)
  .sound("sine")
  .attack(0.08).release(2.8)
  .gain(0.09)

$: note("[~ fs4,a4] ~ [g4,b4] [~ d5,fs5] ~ [e4,g4,b4] ~ ~")
  .slow(4)
  .sound("triangle")
  .attack(0.25).release(1.8)
  .lpf(1400)
  .gain(0.11)

$: note("<[d4 ~] b3 [~ a3] g3 [fs3 ~] ~ [g3 a3] ~>")
  .slow(8)
  .sound("sawtooth")
  .lpf(320).lpq(4)
  .delay(0.35).delaytime(0.5)
  .gain(0.08)