setcps(0.48)

$: note("<e2 d2 b1 [c2 d2]>").sound("sawtooth")
.lpf(sine.range(90, 2800).slow(11)).lpq(8)
.shape(0.52).attack(0.06).gain(0.32)

$: note("e3 [g3 b3] <a3 fs3> [e3 ~]").sound("triangle")
.delay(0.6).dt(0.375).dfb(0.62)
.gain(0.22).pan(sine.range(0.2, 0.8).slow(7))

$: note("<[e4 b4] [g4 d5] [a4 e5] [fs4 cs5]>").sound("sine")
.attack(0.8).release(3.2).gain(0.16)
.room(0.85).often(x => x.add(note("<7 -5 12 -12>")))

$: s("bd [~ bd:1] <~ bd:3> bd, ~ [cp:2 ~] ~ cp:4, [hh hh:2]*4")
.gain("0.5 0.36 0.33 0.46").shape(0.48)
.room(0.22).sometimes(x => x.speed(0.68))

$: note("[e5 ~ b4 ~] [~ g4 <a4 fs4> ~]").sound("pulse")
.gain(0.14).delay(0.72).dt(sine.range(0.06, 0.48).slow(13))
.dfb(0.52).degradeBy(0.4)

$: note("<[e2 b2] [d2 a2] [b1 fs2] [c2 g2]>").sound("sine")
.fmi(sine.range(0.5, 5.8).slow(14)).fmh(3)
.gain(0.19).lpf(cosine.range(50, 320).slow(16)).release(3.6)