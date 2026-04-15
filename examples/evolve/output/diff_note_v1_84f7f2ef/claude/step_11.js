$: note("<e2 b1 fs2 cs2 a1 e2 gs1 d2>").sound("sawtooth")
  .lpf(sine.range(40,1800).slow(13)).lpq(8)
  .attack(0.002).decay(1.2).sustain(0.01)
  .gain(0.48)

$: note("[e3 gs3] [~ b3 ~] [fs3 a3] [~ b3 cs4]").sound("triangle")
  .delay(0.72).delaytime(0.375).delayfeedback(0.65)
  .gain(0.24).lpf(1600)

$: note("<[e4 b4 e5] [gs4 ~ fs4] [a4 cs5 b4] [~ gs4 fs4]>").sound("sine")
  .attack(0.35).release(3.2).room(0.82)
  .gain(0.19).pan(sine.range(0.3,0.7).slow(11))

$: s("[bd:2 ~] [~ bd:3 bd] [bd:1 ~ ~] [bd bd:2 ~]").gain(0.48)
  .shape(0.52).lpf(320).room(0.25).speed(0.95)

$: s("~ [hh hh:2] [~ hh:3?] [oh:2 ~]").gain(0.16)
  .hpf(4200).delay(0.28).pan(rand.range(0.25,0.75))

$: note("[~ e5 ~ b5] [gs5 ~ ~ a5]").sound("pulse")
  .lpf(perlin.range(280,3600).slow(16)).lpq(5)
  .gain(0.12).degradeBy(0.45)