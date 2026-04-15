$: note("<c3 g2 a2 e2 f2 d2 b1 g2>*2").sound("sawtooth").gain(0.42).lpf(sine.range(80,1800).slow(13)).fmi(perlin.range(0.5,2.2).slow(9)).shape(0.35)

$: note("[c4 ~] [e4 g4] [~ b4] [c5 ~] <[a4 e4] [b4 fs4] [f4 c4] [gs4 d4]> [~ e4] [d4 b3] [~ f4]").sound("triangle").gain(0.28).lpf(perlin.range(500,2800).slow(11)).delay(0.48).room(0.35)

$: note("[~ c5] [e5 ~] [gs5 ~] [b5 g5] [~ a5] [fs5 d5] [~ e5] [d5 ~]").sound("sine").gain(0.22).release(2.2).room(0.55).lpf(1800)

$: s("[bd:3 ~] [~ hh:2] [rim ~] [hh:1 ~] [~ bd:2] [oh:1 ~] [bd:1 hh:1] [~ cp]").gain(0.22).lpf(sine.range(800,3500).slow(7)).shape(0.22).delay(0.25)

$: note("<[g5 b5 d6] [e5 gs5 b5] [c5 e5 g5] [a4 c5 e5] [fs5 a5 cs6] [d5 fs5 a5] [b4 d5 fs5] [g4 b4 d5]>").sound("square").gain(0.15).lpf(perlin.range(600,2200).slow(9)).release(1.2).slow(4)

$: note("[c6 ~ ~ e6 ~ g6 ~ ~ b6 ~ a6 ~ ~ fs6 ~ d6]").sound("triangle").gain(0.11).delay(0.65).delaytime(0.375).degradeBy(0.38)