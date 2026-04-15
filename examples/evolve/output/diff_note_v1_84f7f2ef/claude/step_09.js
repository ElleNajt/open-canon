$: note("<e2 b1 fs2 cs2 a1 e2 gs1 d2>").sound("sawtooth")
  .lpf(sine.range(40,1800).slow(17)).lpq(6)
  .attack(0.002).decay(1.2).sustain(0.01)
  .gain(0.44)

$: note("[e3 gs3] [~ b3 ~] [fs3 a3] [~ b3 cs4]").sound("triangle")
  .delay(0.7).delaytime(0.375).delayfeedback(0.62)
  .gain(0.24).pan(sine.range(0.1,0.9).slow(7))

$: note("<[e4 b4 e5] [gs4 ~ fs4] [a4 cs5 b4] [~ gs4 fs4]>").sound("sine")
  .attack(0.18).release(3.2).room(0.85)
  .gain(0.19).lpf(2400)

$: s("[bd:2 ~] [~ bd:3 bd] [bd:1 ~ ~] [bd bd:2 ~]").gain(0.48)
  .shape(0.55).lpf(420).room(0.25)

$: s("~ [hh hh:2] [~ hh:3?] [oh:2 ~]").gain(0.16)
  .pan(rand.range(0.15,0.85)).hpf(4200).delay(0.18)

$: note("[e5 ~ b5]*2 [gs5 ~ a5]*2").sound("pulse")
  .lpf(perlin.range(280,3600).slow(13)).lpq(5)
  .gain(0.13).degradeBy(0.45)