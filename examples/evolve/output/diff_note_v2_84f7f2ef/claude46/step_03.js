setcps(0.42)

$: note("<e2 d2 b1 [c2 d2]>").sound("sawtooth")
.lpf(sine.range(180, 2800).slow(11)).lpq(8)
.shape(0.32).attack(0.06).gain(0.36)

$: note("e3 [g3 b3] <a3 fs3> [e3 ~]").sound("triangle")
.delay(0.5).dt(0.375).dfb(0.52)
.gain(0.26).hpf(120)

$: note("<[e4 b4] [g4 d5] [a4 e5] [fs4 cs5]>").sound("sine")
.attack(0.5).release(2.2).gain(0.2)
.room(0.75).often(x => x.add(note("<7 12 0 5>")))

$: s("bd [~ bd:1] <~ bd:3> bd, ~ [cp:2 ~] ~ cp:4, [hh hh:2]*4")
.gain("0.5 0.4 0.33 0.46").shape(0.38)
.room(0.15).sometimes(x => x.speed(0.78))

$: note("[e5 ~ b4 ~] [~ g4 <a4 fs4> ~]").sound("pulse")
.gain(0.16).delay(0.65).dt(sine.range(0.1, 0.38).slow(13))
.dfb(0.42).degradeBy(0.3)

$: note("<[e2 b2] [d2 a2] [b1 fs2] [c2 g2]>").sound("sine")
.fmi(sine.range(0.2, 3.5).slow(16)).fmh(2)
.gain(0.22).lpf(cosine.range(80, 300).slow(14)).release(2.8)