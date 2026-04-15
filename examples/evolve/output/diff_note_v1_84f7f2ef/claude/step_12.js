$: note("<e2 b1 fs2 cs2 a1 e2 gs1 d2>").sound("sawtooth")
  .lpf(perlin.range(60,2200).slow(11)).lpq(6)
  .attack(0.001).decay(1.8).sustain(0.02)
  .gain(0.52)

$: note("[e3 gs3 ~] [b3 ~ fs3] [a3 ~ cs4] [b3 e3 ~]").sound("triangle")
  .delay(0.68).delaytime(0.333).delayfeedback(0.58)
  .lpf(1400).gain(0.26)

$: note("<[e4 b4] [gs4 fs4 ~] [a4 cs5] [~ gs4 e4]>").sound("sine")
  .attack(0.5).release(4).room(0.78)
  .pan(sine.range(0.2,0.8).slow(13)).gain(0.21)

$: s("[bd:2 ~] [~ bd:1] [bd:3 ~ bd] [~ bd:2 ~]").gain(0.51)
  .shape(0.48).lpf(280).speed(0.92).room(0.2)

$: s("~ [hh:1 hh:2] [oh:2? ~] [hh:3 ~]").gain(0.18)
  .hpf(3800).delay(0.32).delayfeedback(0.4).pan(rand.range(0.2,0.8))

$: note("[~ e5 b5 ~] [~ gs5 a5 ~] [fs5 ~ ~ e5] [~ b5 ~ ~]").sound("pulse")
  .lpf(sine.range(320,4200).slow(9)).lpq(4)
  .degradeBy(0.38).gain(0.14)