$: note("<c3 g2 a2 e2 f2 d2 b1 g2>*2").sound("sawtooth").gain(0.35).lpf(sine.range(180,1800).slow(12)).shape(0.22).release(2.2)

$: note("[c4 ~] [e4 g4] [~ b4] [c5 ~] <[a4 e4] [b4 fs4] [f4 c4] [gs4 d4]> [~ e4] [d4 b3] [~ f4]").sound("triangle").gain(0.22).lpf(1400).delay(0.48).delaytime(0.375)

$: note("[~ c5] [e5 ~] [gs5 ~] [b5 g5] [~ a5] [fs5 d5]").sound("sine").gain(0.18).release(1.2).pan(sine.range(0.2,0.8).slow(9)).room(0.55)

$: s("[bd:3 ~] [~ hh:2] [~ bd:1] [hh:1 ~] [~ bd:2] [oh:1 ~] [bd:1 hh:1] [~ cp]").gain(0.17).lpf(2800).room(0.22).shape(0.08)

$: note("<[g5 ~ b5] [~ e5 gs5] [c5 ~ d5] [~ a4 b4] [fs5 ~ g5] [d5 e5 ~] [b4 ~ cs5] [~ g4 a4]>").sound("square").gain(0.11).lpf(900).release(1.4).slow(3)

$: note("[c6 ~ e6 ~ g6 ~]*2").sound("sine").gain(0.07).pan(rand.range(0.15,0.85)).delay(0.6).degradeBy(0.55)