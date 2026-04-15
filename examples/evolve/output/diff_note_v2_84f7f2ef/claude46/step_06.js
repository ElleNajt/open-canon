setcps(0.51)

$: note("<e2 d2 b1 [c2 d2]>").sound("sawtooth")
.lpf(sine.range(60, 3200).slow(13)).lpq(6)
.shape(0.58).attack(0.04).gain(0.34)

$: note("e3 [g3 b3] <a3 fs3> [e3 ~]").sound("triangle")
.delay(0.55).dt(0.375).dfb(0.58)
.gain(0.24).pan(sine.range(0.15, 0.85).slow(9))

$: note("<[e4 b4] [g4 d5] [a4 e5] [fs4 cs5]>").sound("sine")
.attack(0.6).release(2.8).gain(0.18)
.room(0.88).often(x => x.add(note("<7 -5 12 -12>")))

$: s("bd [~ bd:1] <~ bd:3> bd, ~ [cp:2 ~] ~ cp:4, [hh hh:2]*4")
.gain("0.52 0.38 0.35 0.48").shape(0.44)
.room(0.25).sometimes(x => x.speed(0.72))

$: note("[e5 ~ b4 ~] [~ g4 <a4 fs4> ~]").sound("pulse")
.gain(0.15).delay(0.68).dt(sine.range(0.08, 0.44).slow(11))
.dfb(0.56).degradeBy(0.35)

$: note("<[e2 b2] [d2 a2] [b1 fs2] [c2 g2]>").sound("sine")
.fmi(sine.range(0.8, 6.2).slow(16)).fmh(3)
.gain(0.2).lpf(cosine.range(55, 360).slow(14)).release(3.2)