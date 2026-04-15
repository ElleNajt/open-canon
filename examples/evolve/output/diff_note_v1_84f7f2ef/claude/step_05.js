$: note("<e2 b1 fs2 cs2 a1 e2 gs1 d2>").sound("sawtooth")
  .lpf(sine.range(80,1800).slow(11)).lpq(4)
  .attack(0.002).decay(0.8).sustain(0.12)
  .gain(0.35)

$: note("[e3 ~] [gs3 b3] [~ fs3] [a3 ~ b3]").sound("triangle")
  .delay(0.55).delaytime(0.25).delayfeedback(0.6)
  .gain(0.24).pan(sine.range(0.2,0.8).slow(7))

$: note("<[e4 b4] [~ gs4 fs4] [a4 b4] [fs4 gs4 ~]>").sound("sine")
  .attack(0.03).release(1.4).room(0.6)
  .gain(0.19)

$: s("[bd:2 [~ bd:3]] [~ bd] [bd:1 ~] [bd ~ bd:2]").gain(0.4)
  .shape(0.28).lpf(620).distort(0.12)

$: s("~ [hh hh:3] [hh?] [oh:2 ~]").gain(0.16)
  .pan(rand.range(0.15,0.85)).hpf(2200).room(0.3)

$: note("[e5 ~ b5 ~]*2 [gs5 ~ a5]*2").sound("pulse")
  .lpf(perlin.range(400,3200).slow(9)).lpq(6)
  .gain(0.13).degradeBy(0.45)