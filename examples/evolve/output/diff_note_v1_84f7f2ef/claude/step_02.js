$: note("<e2 b1 fs2 cs2 b1 e2 gs1 cs2>").sound("sawtooth")
  .lpf(sine.range(80,1200).slow(13))
  .attack(0.001).decay(0.6).sustain(0.2)
  .gain(0.38).room(0.5)

$: note("[e3 ~] [gs3 b3] [fs3 e3] [b2 ~]").sound("triangle")
  .delay(0.5).delaytime(0.333).delayfeedback(0.6)
  .gain(0.22).pan(sine.range(0.2,0.8).slow(9))

$: note("<[e4 b4] [gs4 fs4 e4] [b4 ~] [fs4 gs4]>").sound("sine")
  .attack(0.005).release(0.5).detune(sine.range(-8,8).slow(7))
  .gain(0.18).room(0.3)

$: s("[bd:2 [~ bd]] [~ bd:3] [bd ~] [bd bd:2]").gain(0.42)
  .shape(0.15).lpf(800)

$: s("~ [hh hh:2] hh? [oh ~]").gain(0.18)
  .pan(perlin.range(0.15,0.85)).delay(0.2)

$: note("[e5 b5]*4 [gs5 ~]*2").sound("pulse")
  .lpf(sine.range(300,2800).slow(11)).lpq(3)
  .gain(0.07).degradeBy(0.55)