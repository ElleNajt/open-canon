setcps(0.48)

$: note("<e2 d2 b1 [c2 d2]>").sound("sawtooth")
.lpf(perlin.range(40, 2800).slow(16)).lpq(8)
.shape(0.85).gain(0.32).release(4)

$: note("e3 [g3 b3] <a3 fs3> [e3 ~]").sound("triangle")
.delay(0.62).dt(0.375).dfb(0.72)
.gain(0.22).juxBy(0.7, x => x.add(note("12")).slow(4))

$: note("<[e4 b4] [g4 d5] [a4 e5] [fs4 cs5]>").sound("sine")
.attack(3).release(6).gain(0.17)
.room(0.92).every(4, x => x.add(note("7")).palindrome())

$: s("bd [~ bd:1] <bd:3 ~> [~ bd], ~ [cp:2 ~] ~ cp:4, [hh hh:2 hh:1]*3")
.gain("0.5 0.36 0.33 0.46").shape(0.55)
.room(0.32).sometimes(x => x.speed(0.68))
.pan(perlin.range(0.1, 0.9).slow(9))

$: note("[e5 ~ b4 ~] [~ g4 <a4 fs4> ~]").sound("pulse")
.gain(0.14).delay(0.72).dt(sine.range(0.06, 0.48).slow(13))
.dfb(0.55).degradeBy(0.4)

$: note("<[e2 b2] [d2 a2] [b1 fs2] [c2 g2]>").sound("sine")
.fmi(perlin.range(2, 28).slow(15)).fmh(9)
.gain(0.2).lpf(cosine.range(40, 580).slow(14)).release(5)