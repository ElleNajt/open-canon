$: note("<e2 b1 fs2 cs2 a1 e2 gs1 d2>").sound("sawtooth")
  .lpf(sine.range(80,1800).slow(11)).lpq(7)
  .attack(0.002).decay(2.2).sustain(0.01)
  .gain(0.48)

$: note("[e3 gs3 b3] [~ b3 a3] [cs4 ~ gs3] [b3 e3 ~]").sound("triangle")
  .delay(0.72).delaytime(0.375).delayfeedback(0.62)
  .lpf(perlin.range(400,2800).slow(9)).gain(0.26)

$: note("<[e4 b4 ~] [~ gs4 cs5] [a4 ~ a4] [gs4 b4 ~]>").sound("sine")
  .attack(3).release(5).room(0.78)
  .pan(sine.range(0.15,0.85).slow(13)).gain(0.2)

$: s("[bd:2 ~] [~ bd:1?] [bd:3 ~ ~] [bd:2 bd:1? ~]").gain(0.42)
  .shape(0.52).lpf(120).room(0.28)

$: s("~ [hh:1 hh:2?] [~ oh:2?] [hh:2 ~ hh:1]").gain(0.16)
  .hpf(5200).delay(0.38).pan(rand.range(0.25,0.75))

$: note("[~ gs5 e5 ~] [b5 ~ a5 ~] [~ cs5 e5 ~] [gs5 ~ ~ b4]").sound("pulse")
  .lpf(cosine.range(280,2600).slow(14)).lpq(5)
  .degradeBy(0.5).gain(0.12)