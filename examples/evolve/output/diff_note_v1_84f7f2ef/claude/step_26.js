$: note("<e2 b1 fs2 cs2 a1 e2 gs1 d2>").sound("sawtooth")
  .lpf(sine.range(60,2200).slow(13)).lpq(7)
  .attack(0.002).decay(1.8).sustain(0.02)
  .gain(0.52)

$: note("[e3 gs3 b3] [~ b3 e4] [cs4 e4 gs3] [~ fs3 b3]").sound("triangle")
  .delay(0.68).delaytime(0.333).delayfeedback(0.58)
  .lpf(perlin.range(500,3200).slow(7)).gain(0.28)

$: note("<[e4 ~ b4] [gs4 cs5 ~] [~ a4 e5] [b4 ~ fs4]>").sound("sine")
  .attack(2.5).release(4).room(0.82)
  .pan(sine.range(0.12,0.88).slow(11)).gain(0.22)

$: s("[bd:2 ~] [~ bd:1] [bd:3 ~ ~] [bd:2 bd:1? ~]").gain(0.45)
  .shape(0.48).lpf(140).room(0.32)

$: s("~ [hh:1 hh:2?] [oh:2 ~] [hh:1 ~ hh:2]").gain(0.18)
  .hpf(4800).delay(0.42).pan(rand.range(0.2,0.8))

$: note("[gs5 e5 ~ ~] [b5 ~ a5 ~] [~ cs5 e5 ~] [gs5 ~ ~ b4]").sound("pulse")
  .lpf(cosine.range(320,2400).slow(11)).lpq(6)
  .degradeBy(0.45).gain(0.14)