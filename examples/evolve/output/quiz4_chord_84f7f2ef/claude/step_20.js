$: note("<[c3,e3,g3,b3] [f3,a3,c4,e4] [d3,fs3,a3,c4] [g2,b2,d3,f3]>").sound("triangle").lpf(sine.range(400,1800).slow(11)).gain(0.11).room(0.9).release(4)

$: note("<c2 f2 d2 g1>*2").sound("sawtooth").lpf(perlin.range(90,480).slow(7)).gain(0.1).shape(0.5).sometimes(x=>x.add(12).late(0.0625))

$: s("bd ~ [~ bd:1] bd:3 ~ bd [~ bd:2] ~").degradeBy(0.08).gain(0.18).lpf(320).shape(0.2)

$: s("~ hh [hh:2 hh:1] hh ~ [hh:3 ~] [hh hh:2] hh:1").gain(0.065).pan(sine.range(0.15,0.85).slow(5)).hpf(4800).delay(0.25).delaytime(0.125)

$: note("<[e5 ~] [g5 ~] [a5 fs5] [~ e5] [b4 cs5] [~ d5] [g5 ~] [b5 a5]>/2").sound("sine").delay(0.55).delaytime(0.333).delayfeedback(0.48).gain(0.085).pan(perlin.range(0.25,0.75))

$: note("<[g4,b4,d5] [~ a4] [a4,cs5,e5] ~ [b4,e5,g5] ~ [fs4,a4,d5] [g5 ~]>/4").sound("pulse").lpf(perlin.range(550,1400).slow(9)).gain(0.065).jux(x=>x.late(0.1).add(7))