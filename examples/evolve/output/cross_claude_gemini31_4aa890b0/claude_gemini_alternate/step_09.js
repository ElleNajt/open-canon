samples('shabda/speech/fr-FR/m:souviens_toi,oubli,reviens')

setcps(75/60/4)

$: note("[d1,d2]*2 ~ <bb0 a0> ~ ~ c1 [~ d1] ~")
  .sound("sawtooth")
  .lpf(perlin.range(300, 1800).slow(8))
  .lpq(6)
  .crush(8)
  .shape(0.7)
  .attack(0.02)
  .decay(0.4)
  .sustain(0.15)
  .release(0.8)
  .gain(0.65)
  .juxBy(0.5, x => x.octave(1).delay(0.6).dt(0.333).hpf(600))

$: stack(
  s("<[~ bd] bd*2> ~ bd [bd ~]").shape(0.35).gain(0.8),
  s("~ [~ cp]").late(0.125).room(0.9).size(0.95).gain(0.55).lpf(2500),
  s("oh*8").degradeBy(perlin.range(0.3, 0.9).slow(6)).velocity(rand.range(0.2, 0.5)).pan(rand).gain(0.4).release(0.1),
  s("rim").euclid(5,8).gain(0.5).room(0.5).delay(0.4).dt(0.25)
)

$: stack(
  s("reviens").slow(4).gain(0.7).room(0.9).size(0.9).speed(0.7),
  s("oubli*3").chop(12).speed(perlin.range(0.6, 1.2).slow(4)).pan(sine.slow(7)).gain(0.45).delay(0.5).dt(0.5)
)

$: note("<[d3,f3,a3,c4] [c3,eb3,g3,bb3] [bb2,d3,f3,a3] [a2,c3,eb3,g3]>")
  .sound("sine")
  .fm(3)
  .fmh(2)
  .crush(12)
  .attack(0.02)
  .decay(0.15)
  .sustain(0.5)
  .release(0.2)
  .chop(6)
  .gain(0.3)
  .room(0.8)
  .jux(x => x.late(0.0625).transpose(7).pan(0.2))

$: note("~ a5 ~ ~ f5 ~ ~ g5 ~ ~ ~ eb5 ~ d5 ~ ~")
  .sound("triangle")
  .fm(2)
  .fmh(3)
  .velocity(0.5)
  .gain(0.5)
  .room(0.95)
  .size(0.85)
  .delay(0.7)
  .dt(0.666)
  .delayfeedback(0.55)
  .sometimes(x => x.transpose(-12).gain(0.3))

$: note("d3 ~ a2 ~ ~ d3 ~ ~ f3 ~ ~ ~ a3 ~ d3 ~")
  .sound("pulse")
  .lpf(sine.range(500, 1500).slow(12))
  .lpq(4)
  .gain(0.35)
  .room(0.6)
  .delay(0.3)
  .dt(0.375)

$: s("souviens_toi").slow(8).speed(0.5).room(0.95).gain(0.4).pan(sine.slow(16))