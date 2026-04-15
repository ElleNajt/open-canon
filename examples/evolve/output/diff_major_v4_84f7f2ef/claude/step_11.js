$: note("<c3 g2 a2 e2 f2 d2 b1 g2>*2").sound("sawtooth").gain(0.45).lpf(sine.range(60,2200).slow(11)).fmi(perlin.range(0.3,3.5).slow(7)).shape(0.4)

$: note("[c4 ~] [e4 g4] [~ b4] [c5 ~] <[a4 e4] [b4 fs4] [f4 c4] [gs4 d4]> [~ e4] [d4 b3] [~ f4]").sound("triangle").gain(0.26).lpf(perlin.range(400,3200).slow(9)).delay(0.52).delayfeedback(0.4)

$: note("[~ c5] [e5 ~] [gs5 ~] [b5 g5] [~ a5] [fs5 d5] [~ e5] [d5 ~]").sound("sine").gain(0.2).release(2.8).room(0.6).pan(sine.range(0.2,0.8).slow(13))

$: s("[bd:3 ~] [~ hh:2] [rim ~] [hh:1 ~] [~ bd:2] [oh:1 ~] [bd:1 hh:1] [~ cp]").gain(0.24).lpf(sine.range(600,4000).slow(5)).shape(0.28).room(0.2)

$: note("<[g5 b5 d6] [e5 gs5 b5] [c5 e5 g5] [a4 c5 e5] [fs5 a5 cs6] [d5 fs5 a5] [b4 d5 fs5] [g4 b4 d5]>").sound("square").gain(0.13).lpf(perlin.range(500,2600).slow(11)).release(1.5).slow(4)

$: note("[c6 ~ ~ e6 ~ g6 ~ ~ b6 ~ a6 ~ ~ fs6 ~ d6]").sound("sine").gain(0.09).delay(0.7).delaytime(0.333).degradeBy(0.42)