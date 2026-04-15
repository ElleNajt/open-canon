$: note("<c3 g2 a2 e2 f2 d2 b1 g2>*2").sound("sawtooth").gain(0.52).lpf(sine.range(60,2200).slow(11)).fmi(perlin.range(0.8,6.2).slow(7)).shape(0.58)

$: note("[c4 e4] [~ g4] [b4 ~] [~ c5] <[a4 d5] [~ fs4] [f4 ~] [gs4 b4]> [e4 g4] [~ b3] [d4 ~]").sound("triangle").gain(0.28).lpf(perlin.range(180,3200).slow(9)).delay(0.68).delayfeedback(0.72)

$: note("[~ c5] [e5 g5] [~ gs5] [b5 ~] [a5 c6] [~ d5] [fs5 ~] [~ e5]").sound("sine").gain(0.2).release(6.8).room(0.78).pan(sine.range(0.1,0.9).slow(5))

$: s("[bd:3 ~] [~ hh:1] [rim ~] [hh:2 bd:1] [~ cp] [oh:1 ~] [~ bd:2] [hh:1 rim]").gain(0.3).lpf(sine.range(400,4200).slow(6)).crush(6).room(0.22)

$: note("<[g5 b5 d6] [e5 gs5 b5] [c5 e5 a5] [fs5 a5 cs6] [d5 fs5 b5] [a4 cs5 e5] [b4 d5 gs5] [f5 a5 c6]>/2").sound("pulse").gain(0.16).lpf(perlin.range(500,2800).slow(7)).release(5.2).jux(x=>x.detune(12))

$: note("[c6 ~ e6 g6 ~ ~ b6 ~ a6 ~ ~ fs6 d6 ~ ~ e6]").sound("sine").gain(0.14).delay(0.78).delaytime(0.333).degradeBy(0.42)