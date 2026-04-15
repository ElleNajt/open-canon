$: note("<c3 g2 a2 e2 f2 d2 b1 g2>*2").sound("sawtooth").gain(0.48).lpf(sine.range(40,1800).slow(13)).fmi(perlin.range(1.2,4.8).slow(9)).shape(0.62)

$: note("[c4 ~] [~ g4] [e4 b4] [~ c5] <[a4 ~] [~ fs4] [f4 c4] [gs4 ~]> [e4 ~] [~ b3] [d4 f4]").sound("triangle").gain(0.24).lpf(perlin.range(220,2600).slow(11)).delay(0.72).delayfeedback(0.65)

$: note("[~ c5] [e5 ~] [~ gs5] [b5 ~] [a5 ~] [~ d5] [fs5 ~] [~ e5]").sound("sine").gain(0.18).release(8.2).room(0.82).pan(sine.range(0.15,0.85).slow(7))

$: s("[bd:3 ~] [~ hh:1] [~ rim] [hh:2 ~] [bd:2 ~] [~ oh:1] [~ bd:1] [cp hh:1]").gain(0.26).lpf(sine.range(320,3600).slow(8)).crush(8).room(0.28)

$: note("<[g5 b5 d6] [e5 gs5 b5] [c5 e5 a5] [fs5 a5 cs6] [d5 fs5 b5] [a4 cs5 e5]>/2").sound("pulse").gain(0.14).lpf(perlin.range(400,2400).slow(9)).release(6.4).jux(x=>x.detune(7))

$: note("[c6 ~ e6 ~ ~ g6 ~ b6 ~ ~ a6 ~ fs6 ~ ~ d6]").sound("sine").gain(0.12).delay(0.82).delaytime(0.375).degradeBy(0.48)