$: note("<c3 g2 a2 e2 f2 d2 b1 g2>*2").sound("sawtooth").gain(0.38).lpf(sine.range(120,2200).slow(16)).shape(0.28).fmi(sine.range(0.1,0.8).slow(11))

$: note("[c4 ~] [e4 g4] [~ b4] [c5 ~] <[a4 e4] [b4 fs4] [f4 c4] [gs4 d4]> [~ e4] [d4 b3] [~ f4]").sound("triangle").gain(0.24).lpf(perlin.range(800,2400).slow(7)).delay(0.52).delaytime(0.333)

$: note("[~ c5] [e5 ~] [gs5 ~] [b5 g5] [~ a5] [fs5 d5]").sound("sine").gain(0.2).release(1.8).pan(sine.range(0.15,0.85).slow(13)).room(0.62)

$: s("[bd:3 ~] [~ hh:2] [~ bd:1] [hh:1 ~] [~ bd:2] [oh:1 ~] [bd:1 hh:1] [~ cp]").gain(0.19).lpf(sine.range(1800,4200).slow(8)).room(0.28).shape(0.12)

$: note("<[g5 ~ b5] [~ e5 gs5] [c5 ~ d5] [~ a4 b4] [fs5 ~ g5] [d5 e5 ~] [b4 ~ cs5] [~ g4 a4]>").sound("square").gain(0.13).lpf(perlin.range(600,1400).slow(5)).release(1.6).slow(3).pan(0.3)

$: note("[c6 ~ e6 ~ g6 ~ b6 ~ a6 ~ fs6 ~]").sound("sine").gain(0.09).pan(saw.range(0.1,0.9).slow(6)).delay(0.65).degradeBy(0.45)