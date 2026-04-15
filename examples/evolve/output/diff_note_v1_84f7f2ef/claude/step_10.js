$: note("<e2 b1 fs2 cs2 a1 e2 gs1 d2>").sound("sawtooth")
  .lpf(sine.range(60,2200).slow(11)).lpq(7)
  .attack(0.001).decay(0.8).sustain(0.02)
  .gain(0.46)

$: note("[e3 gs3] [~ b3 ~] [fs3 a3] [~ b3 cs4]").sound("triangle")
  .delay(0.65).delaytime(0.333).delayfeedback(0.58)
  .gain(0.26).pan(sine.range(0.15,0.85).slow(9))

$: note("<[e4 b4 e5] [gs4 ~ fs4] [a4 cs5 b4] [~ gs4 fs4]>").sound("sine")
  .attack(0.22).release(2.8).room(0.78)
  .gain(0.21).lpf(2800)

$: s("[bd:2 ~] [~ bd:3 bd] [bd:1 ~ ~] [bd bd:2 ~]").gain(0.52)
  .shape(0.48).lpf(380).room(0.3)

$: s("~ [hh hh:2] [~ hh:3?] [oh:2 ~]").gain(0.18)
  .pan(rand.range(0.2,0.8)).hpf(3800).delay(0.22)

$: note("[e5 ~ b5]*2 [gs5 ~ a5]*2").sound("pulse")
  .lpf(perlin.range(320,4200).slow(15)).lpq(4)
  .gain(0.14).degradeBy(0.38)