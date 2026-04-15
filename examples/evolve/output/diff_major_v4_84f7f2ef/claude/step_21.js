$: note("<c3 g2 a2 e2 f2 d2 b1 g2>*2").sound("sawtooth").gain(0.52).lpf(sine.range(60,2200).slow(11)).shape(0.58).fmi(perlin.range(0.2,1.8).slow(7))

$: note("[c4 ~] [e4 g4] [~ b4] [c5 ~] <[a4 e4] [b4 fs4] [f4 c4] [gs4 d4]> [~ e4] [d4 b3] [~ f4]").sound("triangle").gain(0.26).lpf(perlin.range(400,3200).slow(9)).delay(0.62).delayfeedback(0.58)

$: note("[~ c5] [e5 ~] [gs5 ~] [b5 g5] [~ a5] [fs5 d5] [~ e5] [d5 ~]").sound("sine").gain(0.2).release(4.8).room(0.72).tremolo(perlin.range(0.1,0.6).slow(6))

$: s("[bd:3 ~] [~ hh:2] [rim ~] [hh:1 ~] [~ bd:2] [oh:1 ~] [bd:1 ~] [hh:1 cp]").gain(0.28).lpf(sine.range(600,4000).slow(6)).shape(0.18).pan(sine.range(0.2,0.8).slow(5))

$: note("<[g5 b5 d6] [e5 gs5 b5] [c5 e5 g5] [a4 c5 e5] [fs5 a5 cs6] [d5 fs5 a5]>").sound("pulse").gain(0.16).lpf(perlin.range(500,2800).slow(7)).release(3.2).slow(4)

$: note("[c6 ~ ~ e6 ~ g6 ~ ~ b6 ~ a6 ~ ~ fs6 ~ d6]").sound("sine").gain(0.14).delay(0.68).delaytime(0.333).degradeBy(0.42)