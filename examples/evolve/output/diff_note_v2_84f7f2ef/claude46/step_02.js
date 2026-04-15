setcps(0.45)

$: note("<e2 d2 b1 [c2 d2]>").sound("sawtooth")
.lpf(sine.range(300, 2200).slow(13)).lpq(6)
.gain(0.38).shape(0.25).attack(0.04)

$: note("e3 [g3 b3] <a3 fs3> [e3 ~]").sound("triangle")
.delay(0.55).dt(0.375).dfb(0.45)
.gain(0.28).pan(sine.range(0.15, 0.85).slow(7))

$: note("<[e4 b4] [g4 d5] [a4 e5] [fs4 cs5]>").sound("sine")
.attack(0.4).release(1.5).gain(0.18)
.room(0.7).sometimes(x => x.add(note("7")))

$: s("bd [~ bd] <~ bd:3> bd, ~ [cp:2 ~] ~ cp, [hh hh:2]*4")
.gain("0.52 0.42 0.35 0.48").shape(0.35)
.often(x => x.speed(0.85))

$: note("[e5 ~ b4 ~] [~ g4 <a4 fs4> ~]").sound("pulse")
.gain(0.14).delay(0.6).dt(sine.range(0.12, 0.33).slow(11))
.dfb(0.38).degradeBy(0.35)

$: note("e2 ~ ~ b1").sound("sine")
.gain(0.28).lpf(sine.range(60, 180).slow(16))
.attack(0.15).release(2.5)