$: note("<c3 g2 a2 e2 f2 d2 b1 g2>*2").sound("sawtooth").gain(0.48).lpf(sine.range(40,1800).slow(13)).fmi(perlin.range(0.3,8).slow(7)).shape(0.62)

$: note("[c4 ~] [e4 g4] [~ b4] [c5 ~] <[a4 e4] [b4 fs4] [f4 c4] [gs4 d4]> [~ e4] [d4 b3] [~ f4]").sound("triangle").gain(0.28).lpf(perlin.range(300,2400).slow(11)).delay(0.58).delayfeedback(0.65)

$: note("[~ c5] [e5 ~] [gs5 ~] [b5 g5] [~ a5] [fs5 d5] [~ e5] [d5 ~]").sound("sine").gain(0.22).release(5.2).room(0.78).pan(sine.range(0.15,0.85).slow(15))

$: s("[bd:3 ~] [~ hh:2] [~ rim] [hh:1 ~] [~ bd:2] [~ oh:1] [bd:1 ~] [hh:1 cp]").gain(0.24).lpf(sine.range(500,3200).slow(7)).crush(10).delay(0.35)

$: note("<[g5 b5 d6] [e5 gs5 b5] [c5 e5 g5] [a4 c5 e5] [fs5 a5 cs6] [d5 fs5 a5] [b4 d5 fs5] [g4 b4 d5]>").sound("pulse").gain(0.17).lpf(perlin.range(400,2200).slow(13)).release(3.8).slow(4)

$: note("[c6 ~ ~ e6 ~ g6 ~ ~ b6 ~ a6 ~ ~ fs6 ~ d6]").sound("sine").gain(0.12).delay(0.72).delaytime(0.375).degradeBy(0.38)