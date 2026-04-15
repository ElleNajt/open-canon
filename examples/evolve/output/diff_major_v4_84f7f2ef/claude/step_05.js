$: note("<c3 g2 a2 e2 f2 d2 b1 g2>*2").sound("sawtooth").gain(0.38).lpf(sine.range(280,2200).slow(16)).release(1.8).shape(0.15)

$: note("[c4 ~] [e4 g4] [~ b4] [c5 ~] <[a4 e4] [b4 f4] [f4 c4] [g4 d4]> [~ e4] [d4 b3] [~ f4]").sound("triangle").gain(0.24).lpf(1800).delay(0.52).delaytime(0.333)

$: note("[~ c5] [e5 ~] [g5 ~] [b5 g5] [~ a5] [f5 d5]").sound("sine").gain(0.2).release(0.9).pan(sine.range(0.15,0.85).slow(7)).room(0.42)

$: s("[bd:3 ~] [~ hh:2] [~ bd:1] [hh:1 oh:1] [~ bd:2] [hh:2 ~] [bd:1 hh:1] [~ cp]").gain(0.19).lpf(3800).room(0.18)

$: note("<[g5 ~ b5] [~ e5 g5] [c5 ~ d5] [~ a4 b4] [f5 ~ g5] [d5 e5 ~] [b4 ~ c5] [~ g4 a4]>").sound("square").gain(0.13).lpf(1200).release(1.1).slow(2)

$: note("[c6 ~ e6 ~]*3").sound("sine").gain(0.09).pan(rand.range(0.1,0.9)).delay(0.55).degradeBy(0.62)