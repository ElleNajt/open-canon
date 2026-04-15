$: note("<c3 g2 a2 e2 f2 d2 b1 g2>*2").sound("sawtooth").gain(0.48).lpf(sine.range(80,1800).slow(13)).shape(0.62).release(0.8)

$: note("[c4 ~] [e4 g4] [~ b4] [c5 ~] <[a4 e4] [b4 fs4] [f4 c4] [gs4 d4]> [~ e4] [d4 b3] [~ f4]").sound("triangle").gain(0.28).lpf(perlin.range(300,2600).slow(7)).delay(0.58).delayfeedback(0.65)

$: note("[~ c5] [e5 ~] [gs5 ~] [b5 g5] [~ a5] [fs5 d5] [~ e5] [d5 ~]").sound("sine").gain(0.22).release(5.2).room(0.78).pan(sine.range(0.15,0.85).slow(11))

$: s("[bd:3 ~] [~ hh:2] [rim ~] [hh:1 ~] [~ bd:2] [oh:1 ~] [bd:1 ~] [hh:1 cp]").gain(0.25).lpf(sine.range(500,3500).slow(8)).room(0.32).shape(0.15)

$: note("<[g5 b5 d6] [e5 gs5 b5] [c5 e5 g5] [a4 c5 e5] [fs5 a5 cs6] [d5 fs5 a5]>").sound("pulse").gain(0.18).lpf(perlin.range(400,2400).slow(9)).release(3.8).slow(4)

$: note("[c6 ~ ~ e6 ~ g6 ~ ~ b6 ~ a6 ~ ~ fs6 ~ d6]").sound("sine").gain(0.12).delay(0.72).delaytime(0.375).degradeBy(0.38)