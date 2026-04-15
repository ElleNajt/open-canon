$: note("<c3 g2 a2 e2 f2 d2 b1 f2>").sound("sawtooth").gain(0.38).lpf(sine.range(300,1400).slow(16)).attack(0.2).release(1.5).slow(2)

$: note("c4 [~ e4] g4 [b4 c5] <g4 a4 b4 f4> [e4 ~] ~ [d4 e4]").sound("triangle").gain(0.28).lpf(1800).delay(0.4).delaytime(0.333)

$: note("[~ c5] [e5 g5] [~ b5] [g5 ~] [a5 ~] [~ f5]").sound("sine").gain(0.2).release(0.5).pan(sine.range(0.2,0.8).slow(8)).delay(0.5)

$: s("bd:3 [~ hh:1] [~ bd:1] [hh:2 hh:1] ~ [bd:2 ~] hh:1 [~ bd:1]").gain(0.16).lpf(3500).room(0.2)

$: note("<[g5 ~ b5] [~ e5 ~ g5] [c5 d5 ~] [~ a4 b4 ~] [f5 ~ g5] [~ d5 e5 ~]>").sound("square").gain(0.13).lpf(1600).release(0.7).slow(2)

$: note("c6*6").sound("sine").gain(0.09).pan(rand.range(0.15,0.85)).delay(0.55).degradeBy(0.65)