$: note("<e2 b1 fs2 cs2 a1 e2 gs1 d2>").sound("sawtooth")
  .lpf(sine.range(120,2400).slow(13)).lpq(7)
  .attack(0.001).decay(0.6).sustain(0.08)
  .gain(0.38)

$: note("[e3 gs3] [~ b3 ~] [fs3 a3] [~ b3 cs4]").sound("triangle")
  .delay(0.62).delaytime(0.333).delayfeedback(0.55)
  .gain(0.22).pan(sine.range(0.15,0.85).slow(9))

$: note("<[e4 b4 e5] [gs4 ~ fs4] [a4 cs5 b4] [~ gs4 fs4]>").sound("sine")
  .attack(0.05).release(1.8).room(0.7)
  .gain(0.17).pan(0.35)

$: s("[bd:2 ~] [~ bd:3 bd] [bd:1 ~ ~] [bd bd:2 ~]").gain(0.42)
  .shape(0.35).lpf(580).distort(0.15)

$: s("~ [hh hh:2] [~ hh:3?] [oh:2 ~]").gain(0.14)
  .pan(rand.range(0.1,0.9)).hpf(2800).delay(0.25)

$: note("[e5 b5 ~]*2 [~ gs5 a5]*2").sound("pulse")
  .lpf(perlin.range(300,4000).slow(11)).lpq(8)
  .gain(0.11).degradeBy(0.52)