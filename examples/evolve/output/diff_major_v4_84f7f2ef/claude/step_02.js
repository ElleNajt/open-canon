$: note("<c3 g2 a2 e2 f2 d2>").sound("sawtooth").gain(0.35).lpf(sine.range(400,1200).slow(12)).attack(0.15).release(1.2).slow(2)

$: note("c4 [~ e4] g4 [b4 c5] <g4 a4 b4> [e4 ~]").sound("triangle").gain(0.3).lpf(2200).delay(0.35).delaytime(0.375)

$: note("[~ c5] [e5 g5] [~ b5] [g5 ~]").sound("sine").gain(0.22).release(0.4).pan(sine.range(0.25,0.75).slow(6)).delay(0.45)

$: s("bd:3 [~ hh:1] [~ bd:1] [hh:2 hh:1]").gain(0.18).lpf(4000).room(0.15)

$: note("<[g5 ~ b5] [~ e5 ~ g5] [c5 d5 ~] [~ a4 b4 ~]>").sound("square").gain(0.15).lpf(1800).attack(0.002).release(0.6).slow(2)

$: note("c6*8").sound("sine").gain(0.08).pan(rand.range(0.1,0.9)).delay(0.6).delaytime(0.167).degradeBy(0.7)