$: note("<c3 g2 a2 e2 f2 d2 b1 g2>*2").sound("sawtooth").gain(0.38).lpf(sine.range(60,2200).slow(17)).fmi(perlin.range(0.3,1.8).slow(11)).shape(0.28)

$: note("[c4 ~] [e4 g4] [~ b4] [c5 ~] <[a4 e4] [b4 fs4] [f4 c4] [gs4 d4]> [~ e4] [d4 b3] [~ f4]").sound("triangle").gain(0.24).lpf(perlin.range(400,3200).slow(13)).delay(0.55).delaytime(0.333)

$: note("[~ c5] [e5 ~] [gs5 ~] [b5 g5] [~ a5] [fs5 d5] [~ e5] [d5 ~]").sound("sine").gain(0.2).release(2.8).room(0.62).pan(sine.range(0.15,0.85).slow(11))

$: s("[bd:3 ~] [~ hh:2] [rim ~] [hh:1 ~] [~ bd:2] [oh:1 ~] [bd:1 hh:1] [~ cp]").gain(0.19).lpf(sine.range(1200,4200).slow(9)).shape(0.18).room(0.28)

$: note("<[g5 ~ b5] [~ e5 gs5] [c5 ~ d5] [~ a4 b4] [fs5 ~ g5] [d5 e5 ~] [b4 ~ cs5] [~ g4 a4]>").sound("square").gain(0.13).lpf(perlin.range(400,1800).slow(7)).release(1.6).slow(3)

$: note("[c6 ~ e6 ~ g6 ~ b6 ~ a6 ~ fs6 ~ d6 ~ e6 ~]").sound("sine").gain(0.09).delay(0.75).delaytime(0.45).degradeBy(0.45)