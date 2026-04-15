setcps(0.4)

$: note("<e2 d2 b1 c2>").sound("sawtooth")
.lpf(sine.range(200, 1800).slow(16)).lpq(3)
.gain(0.35).room(0.4).attack(0.05)

$: note("e3 [g3 b3] <a3 fs3> e3").sound("triangle")
.delay(0.5).dt(0.375).dfb(0.4)
.gain(0.25).pan(sine.range(0.2, 0.8).slow(7))

$: note("<[e4 b4] [g4 d5] [a4 e5] [fs4 cs5]>").sound("sine")
.attack(0.3).release(1.2).gain(0.2)
.room(0.6).pan(0.7)

$: s("bd [~ bd] ~ bd, ~ cp ~ cp, hh*8")
.gain("0.5 0.4 0.3 0.45").shape(0.3)
.sometimes(x => x.speed(0.8))

$: note("e5 ~ b4 ~ g4 ~ <a4 fs4> ~").sound("pulse")
.gain(0.12).delay(0.6).dt(0.25).dfb(0.35)
.degradeBy(0.3)

$: note("e2").sound("sine").freq(sine.range(38, 42).slow(16))
.gain(0.3).lpf(120).attack(0.1).release(2)