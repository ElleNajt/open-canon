$: note("<c3 g2 a2 e2 f2 d2 b1 g2>*2").sound("sawtooth").gain(0.48).lpf(sine.range(80,1800).slow(13)).fmi(perlin.range(3,22).slow(9)).shape(0.62)

$: note("[c4 ~] [e4 g4] [~ b4] [c5 ~] <[a4 ~] [d5 fs4] [~ f4] [gs4 ~]> [e4 ~] [g4 b3] [~ d4]").sound("triangle").gain(0.19).lpf(perlin.range(220,2600).slow(11)).delay(0.58).pan(sine.range(0.15,0.85).slow(9))

$: note("[~ c5] [~ e5] [g5 ~] [~ gs5] [b5 a5] [~ ~] [c6 d5] [~ fs5]").sound("sine").gain(0.13).release(9).room(0.82).jux(x=>x.detune(7))

$: s("[bd:3 ~] [~ hh:1] [~ rim] [~ bd:1] [~ cp] [oh:1 ~] [bd:2 ~] [hh:2 ~]").gain(0.24).lpf(sine.range(500,3800).slow(7)).room(0.28).crush(10)

$: note("<[g5 b5 d6] [~ gs5 b5] [c5 ~ a5] [fs5 a5 ~] [~ fs5 b5] [a4 ~ e5] [b4 d5 ~] [~ a5 c6]>/2").sound("pulse").gain(0.15).lpf(perlin.range(400,2200).slow(10)).release(6.2).tremolo(0.35)

$: note("[c6 ~ ~ g6 ~ e6 ~ ~ b6 ~ ~ ~ a6 ~ fs6 ~]").sound("sine").gain(0.11).delay(0.72).delaytime(0.38).degradeBy(0.52)