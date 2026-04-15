$: note("<c3 g2 a2 e2 f2 d2 b1 g2>*2").sound("sawtooth").gain(0.48).lpf(sine.range(80,1800).slow(13)).shape(0.62).fmi(perlin.range(0.3,2.2).slow(9))

$: note("[c4 ~] [e4 g4] [~ b4] [c5 ~] <[a4 e4] [b4 fs4] [f4 c4] [gs4 d4]> [~ e4] [d4 b3] [~ f4]").sound("triangle").gain(0.24).lpf(perlin.range(350,2800).slow(11)).delay(0.58).delayfeedback(0.52)

$: note("[~ c5] [e5 ~] [gs5 ~] [b5 g5] [~ a5] [fs5 d5] [~ e5] [d5 ~]").sound("sine").gain(0.18).release(5.2).room(0.68).pan(sine.range(0.25,0.75).slow(7))

$: s("[bd:3 ~] [~ hh:2] [rim ~] [hh:1 ~] [~ bd:2] [oh:1 ~] [bd:1 ~] [hh:1 cp]").gain(0.26).lpf(sine.range(500,3500).slow(8)).crush(12).pan(perlin.range(0.3,0.7).slow(6))

$: note("<[g5 b5 d6] [e5 gs5 b5] [c5 e5 g5] [a4 c5 e5] [fs5 a5 cs6] [d5 fs5 a5]>/2").sound("pulse").gain(0.14).lpf(perlin.range(600,2400).slow(9)).release(4.0).jux(x=>x.detune(7))

$: note("[c6 ~ ~ e6 ~ g6 ~ ~ b6 ~ a6 ~ ~ fs6 ~ d6]").sound("sine").gain(0.12).delay(0.72).delaytime(0.375).degradeBy(0.48)