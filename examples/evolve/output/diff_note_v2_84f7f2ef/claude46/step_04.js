setcps(0.46)

$: note("<e2 d2 b1 [c2 d2]>").sound("sawtooth")
.lpf(sine.range(140, 3200).slow(13)).lpq(6)
.shape(0.45).attack(0.04).gain(0.34)

$: note("e3 [g3 b3] <a3 fs3> [e3 ~]").sound("triangle")
.delay(0.55).dt(0.333).dfb(0.58)
.gain(0.24).hpf(150)

$: note("<[e4 b4] [g4 d5] [a4 e5] [fs4 cs5]>").sound("sine")
.attack(0.6).release(2.8).gain(0.18)
.room(0.8).often(x => x.add(note("<7 12 -5 5>")))

$: s("bd [~ bd:1] <~ bd:3> bd, ~ [cp:2 ~] ~ cp:4, [hh hh:2]*4")
.gain("0.52 0.38 0.35 0.48").shape(0.42)
.room(0.18).sometimes(x => x.speed(0.72))

$: note("[e5 ~ b4 ~] [~ g4 <a4 fs4> ~]").sound("pulse")
.gain(0.15).delay(0.7).dt(sine.range(0.08, 0.42).slow(11))
.dfb(0.48).degradeBy(0.35)

$: note("<[e2 b2] [d2 a2] [b1 fs2] [c2 g2]>").sound("sine")
.fmi(sine.range(0.3, 4.2).slow(16)).fmh(2)
.gain(0.2).lpf(cosine.range(60, 280).slow(14)).release(3.2)