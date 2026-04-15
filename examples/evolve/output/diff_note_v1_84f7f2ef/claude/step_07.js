$: note("<e2 b1 fs2 cs2 a1 e2 gs1 d2>").sound("sawtooth")
  .lpf(sine.range(80,1800).slow(11)).lpq(6)
  .attack(0.002).decay(0.7).sustain(0.05)
  .gain(0.4)

$: note("[e3 gs3] [~ b3 ~] [fs3 a3] [~ b3 cs4]").sound("triangle")
  .delay(0.58).delaytime(0.375).delayfeedback(0.62)
  .gain(0.24).pan(sine.range(0.2,0.8).slow(7))

$: note("<[e4 b4 e5] [gs4 ~ fs4] [a4 cs5 b4] [~ gs4 fs4]>").sound("sine")
  .attack(0.08).release(2.2).room(0.75)
  .gain(0.19).lpf(3200)

$: s("[bd:2 ~] [~ bd:3 bd] [bd:1 ~ ~] [bd bd:2 ~]").gain(0.44)
  .shape(0.4).lpf(520).room(0.25)

$: s("~ [hh hh:2] [~ hh:3?] [oh:2 ~]").gain(0.15)
  .pan(rand.range(0.15,0.85)).hpf(3200).room(0.3)

$: note("[e5 ~ b5]*2 [gs5 ~ a5]*2").sound("pulse")
  .lpf(perlin.range(400,3500).slow(9)).lpq(5)
  .gain(0.12).degradeBy(0.45)