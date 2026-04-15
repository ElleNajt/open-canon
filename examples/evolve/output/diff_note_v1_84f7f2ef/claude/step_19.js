$: note("<e2 b1 fs2 cs2 a1 e2 gs1 d2>").sound("sawtooth")
  .lpf(perlin.range(40,1800).slow(11)).lpq(8)
  .attack(0.002).decay(2.4).sustain(0.01)
  .gain(0.48)

$: note("[e3 gs3 b3] [~ fs3 ~] [cs4 e3 ~] [~ gs3 b3]").sound("triangle")
  .delay(0.72).delaytime(0.375).delayfeedback(0.62)
  .lpf(perlin.range(800,2400).slow(9)).gain(0.24)

$: note("<[e4 b4 e5] [~ gs4 ~] [a4 ~ a4] [gs4 ~ b4]>").sound("sine")
  .attack(3).release(8).room(0.88)
  .pan(sine.range(0.15,0.85).slow(11)).gain(0.19)

$: s("[bd:2 ~] [~ ~] [bd:3 ~ ~] [~ bd:2 ~]").gain(0.42)
  .shape(0.52).lpf(120).room(0.38)

$: s("~ [hh:1 ~] [~ oh:2?] [~ ~ hh:1]").gain(0.16)
  .hpf(5200).delay(0.28).pan(rand.range(0.25,0.75))

$: note("[~ e5 ~ ~] [gs5 ~ ~ ~] [~ ~ e5 ~] [~ ~ ~ cs6]").sound("pulse")
  .lpf(sine.range(280,2800).slow(13)).lpq(5)
  .degradeBy(0.52).gain(0.12)