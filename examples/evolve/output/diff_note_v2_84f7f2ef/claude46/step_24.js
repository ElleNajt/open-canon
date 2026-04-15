setcps(0.44)

$: note("<e2 d2 b1 [c2 d2]>").sound("sawtooth")
.lpf(perlin.range(60, 3200).slow(11)).lpq(6)
.shape(0.88).gain(0.34).release(7)

$: note("e3 [g3 b3] <a3 fs3> [e3 ~]").sound("triangle")
.delay(0.58).dt(0.375).dfb(0.68)
.gain(0.24).juxBy(0.65, x => x.add(note("7")).palindrome())

$: note("<[e4 b4] [g4 d5] [a4 e5] [fs4 cs5]>").sound("sine")
.attack(6).release(9).gain(0.16)
.room(0.92).every(4, x => x.transpose(5).rev())

$: s("bd [~ bd:1] <bd:3 ~> [~ bd], ~ [cp:2 ~] ~ cp:4, [hh hh:2 oh]*3")
.gain("0.46 0.34 0.31 0.43").shape(0.52)
.room(0.35).sometimes(x => x.speed(0.72))
.pan(perlin.range(0.15, 0.85).slow(7))

$: note("[e5 ~ b4 ~] [~ g4 <a4 fs4> ~]").sound("pulse")
.gain(0.13).delay(0.7).dt(sine.range(0.08, 0.44).slow(11))
.dfb(0.52).degradeBy(0.45)

$: note("<[e2 b2] [d2 a2] [b1 fs2] [c2 g2]>").sound("sine")
.fmi(perlin.range(9, 22).slow(14)).fmh(7)
.gain(0.19).lpf(cosine.range(50, 640).slow(12)).release(8)