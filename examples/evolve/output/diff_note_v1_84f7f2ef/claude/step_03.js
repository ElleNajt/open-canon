$: note("<e2 b1 fs2 cs2 a1 e2 gs1 d2>").sound("sawtooth")
  .lpf(sine.range(60,1800).slow(11))
  .attack(0.002).decay(0.8).sustain(0.15)
  .gain(0.35).room(0.6)

$: note("[e3 ~] [gs3 b3] [fs3 ~] [a3 b3]").sound("triangle")
  .delay(0.55).delaytime(0.375).delayfeedback(0.65)
  .gain(0.24).pan(sine.range(0.15,0.85).slow(7))

$: note("<[e4 b4] [gs4 fs4 ~] [a4 b4] [fs4 ~ gs4]>").sound("sine")
  .attack(0.01).release(0.7).detune(perlin.range(-12,12).slow(5))
  .gain(0.2).room(0.4)

$: s("[bd:2 [~ bd:3]] [~ bd] [bd:1 ~] [~ bd bd:2]").gain(0.4)
  .shape(0.2).lpf(650).room(0.25)

$: s("~ [hh hh:3] [hh?] [oh:2 ~]").gain(0.16)
  .pan(rand.range(0.1,0.9)).hpf(2000)

$: note("[e5 ~ b5 ~]*2 [gs5 a5]*2").sound("pulse")
  .lpf(perlin.range(400,3200).slow(9)).lpq(5)
  .gain(0.09).degradeBy(0.45)