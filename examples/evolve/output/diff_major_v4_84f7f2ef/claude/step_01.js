$: note("<c3 g2 a2 e2>").sound("sine").gain(0.4).lpf(800).attack(0.1).release(0.8).room(0.3).slow(2)

$: note("c4 e4 g4 b4 <g4 a4> e4").sound("triangle").gain(0.35).lpf(sine.range(1200,3000).slow(8)).delay(0.3).delaytime(0.375).room(0.2)

$: note("[~ c5] [e5 ~] [g5 ~ b5 ~]").sound("sine").gain(0.25).attack(0.01).release(0.3).pan(sine.range(0.3,0.7).slow(4)).delay(0.4).delaytime(0.25)

$: s("~ [hh:1 ~] ~ hh:2").gain(0.15).lpf(6000).pan(rand.range(0.2,0.8)).room(0.1)

$: note("<[~ g5 ~] [~ ~ e5 ~] [c5 ~ ~ ~] [~ b4 ~ g4]>").sound("triangle").gain(0.2).attack(0.001).release(0.5).delay(0.5).delaytime(0.5).slow(2)