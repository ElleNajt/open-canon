setcps(0.52)

$: note("<e2 d2 b1 [c2 d2]>").sound("sawtooth")
.lpf(sine.range(60, 3200).slow(14)).lpq(6)
.shape(0.58).gain(0.34).release(2.2)

$: note("e3 [g3 b3] <a3 fs3> [e3 ~]").sound("triangle")
.delay(0.55).dt(0.375).dfb(0.58)
.gain(0.24).pan(sine.range(0.1, 0.9).slow(9))

$: note("<[e4 b4] [g4 d5] [a4 e5] [fs4 cs5]>").sound("sine")
.attack(1.2).release(3.8).gain(0.19)
.room(0.88).every(3, x => x.add(note("7")).rev())

$: s("bd [~ bd:1] <~ bd:3> bd, ~ [cp:2 ~] ~ cp:4, [hh hh:2]*4")
.gain("0.52 0.38 0.35 0.48").shape(0.44)
.room(0.28).pan(saw.range(0.15, 0.85).slow(7))
.often(x => x.speed(0.72))

$: note("[e5 ~ b4 ~] [~ g4 <a4 fs4> ~]").sound("pulse")
.gain(0.16).delay(0.68).dt(sine.range(0.08, 0.44).slow(11))
.dfb(0.52).degradeBy(0.35)

$: note("<[e2 b2] [d2 a2] [b1 fs2] [c2 g2]>").sound("sine")
.fmi(sine.range(3, 11).slow(13)).fmh(3)
.gain(0.22).lpf(cosine.range(55, 480).slow(12)).release(4.2)