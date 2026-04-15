$: note("<e2 b1 fs2 cs2>").sound("sawtooth")
  .lpf(sine.range(120,800).slow(11))
  .attack(0.02).decay(0.4).sustain(0.3)
  .gain(0.35).room(0.4)

$: note("e3 [~ gs3] b3 [fs3 ~]").sound("triangle")
  .delay(0.4).delaytime(0.375).delayfeedback(0.5)
  .gain(0.25).pan(sine.range(0.3,0.7).slow(7))

$: note("[e4 b4]*2 [gs4 fs4] ~").sound("sine")
  .attack(0.01).release(0.3)
  .gain(0.2).sometimes(x => x.detune(12))

$: s("bd [~ bd] ~ bd:3").gain(0.45)

$: s("~ hh [hh hh] hh?").gain(0.2)
  .pan(rand.range(0.2,0.8))

$: note("e5*8").sound("pulse")
  .lpf(perlin.range(400,2000).slow(5))
  .gain(0.08).degradeBy(0.6)