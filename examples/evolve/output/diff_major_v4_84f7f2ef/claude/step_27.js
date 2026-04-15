$: note("<c3 g2 a2 e2 f2 d2 b1 g2>*2").sound("sawtooth").gain(0.52).lpf(sine.range(60,2200).slow(11)).fmi(perlin.range(0.8,12).slow(7)).shape(0.58)

$: note("[c4 ~] [e4 g4] [~ b4] [c5 ~] <[a4 ~] [d5 fs4] [~ f4] [gs4 ~]> [e4 ~] [g4 b3] [~ d4]").sound("triangle").gain(0.28).lpf(perlin.range(180,3200).slow(9)).delay(0.62).delayfeedback(0.72)

$: note("[~ c5] [~ e5] [g5 ~] [~ gs5] [b5 a5] [~ ~] [c6 d5] [~ fs5]").sound("sine").gain(0.2).release(6.8).room(0.78).jux(x=>x.detune(12))

$: s("[bd:3 ~] [~ hh:1] [rim ~] [~ bd:1] [~ cp] [oh:1 ~] [bd:2 ~] [~ hh:2]").gain(0.32).lpf(sine.range(400,4200).slow(6)).crush(9).room(0.22)

$: note("<[g5 b5 d6] [~ gs5 b5] [c5 ~ a5] [fs5 a5 ~] [~ fs5 b5] [a4 ~ e5] [b4 d5 ~] [~ a5 c6]>/2").sound("pulse").gain(0.18).lpf(perlin.range(320,2800).slow(8)).release(5.2).pan(sine.range(0.2,0.8).slow(5))

$: note("[c6 ~ ~ g6 ~ e6 ~ ~ b6 ~ ~ ~ a6 ~ fs6 ~]").sound("sine").gain(0.14).delay(0.68).delaytime(0.33).degradeBy(0.48)