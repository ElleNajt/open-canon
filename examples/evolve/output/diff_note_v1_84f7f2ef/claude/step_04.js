$: note("<e2 b1 fs2 cs2 a1 e2 gs1 d2>").sound("sawtooth")
  .lpf(sine.range(40,2200).slow(13)).lpq(3)
  .attack(0.001).decay(1.2).sustain(0.08)
  .gain(0.38)

$: note("[e3 ~] [gs3 b3] [fs3 ~] [a3 b3]").sound("triangle")
  .delay(0.6).delaytime(0.333).delayfeedback(0.7)
  .gain(0.22).pan(sine.range(0.1,0.9).slow(5))

$: note("<[e4 b4] [gs4 fs4 ~] [a4 b4] [fs4 ~ gs4]>").sound("sine")
  .attack(0.02).release(1.2).detune(perlin.range(-18,18).slow(7))
  .gain(0.18).room(0.55)

$: s("[bd:2 [~ bd:3]] [~ bd] [bd:1 ~] [~ bd bd:2]").gain(0.42)
  .shape(0.35).lpf(580).distort(0.15)

$: s("~ [hh hh:3] [hh?] [oh:2 ~]").gain(0.14)
  .pan(rand.range(0.05,0.95)).hpf(2500).delay(0.2)

$: note("[e5 ~ b5 ~]*2 [gs5 a5]*2").sound("pulse")
  .lpf(perlin.range(300,3800).slow(11)).lpq(7)
  .gain(0.11).degradeBy(0.55)