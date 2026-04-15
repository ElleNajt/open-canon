setcps(0.48)

$: note("<e2 d2 b1 [c2 d2]>").sound("sawtooth")
.lpf(sine.range(45, 2800).slow(16)).lpq(8)
.shape(0.62).gain(0.32).release(1.6)

$: note("e3 [g3 b3] <a3 fs3> [e3 ~]").sound("triangle")
.delay(0.6).dt(0.375).dfb(0.62)
.gain(0.22).pan(sine.range(0.15, 0.85).slow(11))

$: note("<[e4 b4] [g4 d5] [a4 e5] [fs4 cs5]>").sound("sine")
.attack(0.8).release(3.2).gain(0.16)
.room(0.92).every(4, x => x.add(note("12")).palindrome())

$: s("bd [~ bd:1] <~ bd:3> bd, ~ [cp:2 ~] ~ cp:4, [hh hh:2]*4")
.gain("0.5 0.36 0.33 0.46").shape(0.48)
.room(0.3).pan(saw.range(0.2, 0.8).slow(7))
.sometimes(x => x.speed(0.68))

$: note("[e5 ~ b4 ~] [~ g4 <a4 fs4> ~]").sound("pulse")
.gain(0.14).delay(0.72).dt(sine.range(0.06, 0.48).slow(13))
.dfb(0.58).degradeBy(0.4)

$: note("<[e2 b2] [d2 a2] [b1 fs2] [c2 g2]>").sound("sine")
.fmi(sine.range(2, 9.5).slow(15)).fmh(3)
.gain(0.19).lpf(cosine.range(48, 320).slow(14)).release(3.6)