$: note("<c3 g2 a2 e2 f2 d2 b1 f2>").sound("sawtooth").gain(0.42).lpf(sine.range(400,1800).slow(12)).attack(0.15).release(2)

$: note("[c4 ~] [e4 g4] [~ b4] [c5 g4] <a4 b4 f4 g4> [~ e4] [d4 ~] [e4 f4]").sound("triangle").gain(0.26).lpf(2200).delay(0.45).delaytime(0.375)

$: note("[~ c5] [e5 ~] [g5 b5] [~ g5] [a5 f5] [~ d5]").sound("sine").gain(0.22).release(0.6).pan(sine.range(0.25,0.75).slow(6)).room(0.35)

$: s("bd:3 [~ hh:2] [bd:1 ~] [hh:1 oh:1] ~ [bd:2 hh:1] [~ hh:2] bd:1").gain(0.18).lpf(4200).room(0.15)

$: note("<[g5 b5 ~] [e5 ~ g5 ~] [~ c5 d5] [a4 ~ b4 ~] [f5 g5 ~] [d5 ~ e5 ~]>").sound("square").gain(0.14).lpf(1400).release(0.8).slow(2)

$: note("[c6 e6 g6]*4").sound("sine").gain(0.11).pan(rand.range(0.2,0.8)).delay(0.5).degradeBy(0.55)