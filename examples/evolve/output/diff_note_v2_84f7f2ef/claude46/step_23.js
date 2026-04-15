setcps(0.46)

$: note("<e2 d2 b1 [c2 d2]>").sound("sawtooth")
.lpf(perlin.range(40, 2800).slow(13)).lpq(8)
.shape(0.91).gain(0.32).release(6)

$: note("e3 [g3 b3] <a3 fs3> [e3 ~]").sound("triangle")
.delay(0.62).dt(0.375).dfb(0.72)
.gain(0.22).juxBy(0.7, x => x.add(note("12")).rev())

$: note("<[e4 b4] [g4 d5] [a4 e5] [fs4 cs5]>").sound("sine")
.attack(5).release(8).gain(0.14)
.room(0.94).every(3, x => x.transpose(7).palindrome())

$: s("bd [~ bd:1] <bd:3 ~> [~ bd], ~ [cp:2 ~] ~ cp:4, [hh hh:2 oh]*3")
.gain("0.44 0.32 0.29 0.41").shape(0.55)
.room(0.38).often(x => x.speed(0.68))
.pan(perlin.range(0.1, 0.9).slow(9))

$: note("[e5 ~ b4 ~] [~ g4 <a4 fs4> ~]").sound("pulse")
.gain(0.11).delay(0.74).dt(sine.range(0.06, 0.48).slow(13))
.dfb(0.56).degradeBy(0.5)

$: note("<[e2 b2] [d2 a2] [b1 fs2] [c2 g2]>").sound("sine")
.fmi(perlin.range(7, 26).slow(16)).fmh(9)
.gain(0.17).lpf(cosine.range(40, 580).slow(14)).release(7)