samples('shabda/speech/fr-FR/m:souviens_toi,oubli,reviens')

setcps(90/60/4)

$: note("[g1,g2]*2 ~ <eb1 d1> ~ ~ f1 [~ g1] ~")
  .sound("sawtooth")
  .lpf(sine.range(400, 2000).slow(4))
  .lpq(8)
  .crush(6)
  .shape(0.9)
  .attack(0.01)
  .decay(0.3)
  .sustain(0.1)
  .release(0.5)
  .gain(0.7)
  .juxBy(0.4, x => x.octave(1).delay(0.5).dt(0.25).hpf(800))

$: stack(
  s("<[~ bd] bd*3> ~ bd [~ bd]").shape(0.4).gain(0.85),
  s("~ cp").room(0.8).size(0.9).gain(0.6).lpf(3000),
  s("hh*16").degradeBy(perlin.range(0.1, 0.85).slow(4)).velocity(rand.range(0.3, 0.7)).pan(rand).gain(0.5),
  s("cb").euclid(3,8).gain(0.6).room(0.4)
)

$: stack(
  s("souviens_toi").slow(2).late(0.25).gain(0.6).room(0.8),
  s("oubli*4").striate(16).speed(0.8).rev().pan(sine.slow(5)).gain(0.5)
)

$: note("<[g3,bb3,cs4,f4] [f3,a3,c4,e4] [eb3,gb3,bb3,d4] [d3,fs3,a3,c4]>")
  .sound("sine")
  .fm(5)
  .fmh(1.5)
  .crush(10)
  .attack(0.01)
  .decay(0.1)
  .sustain(0.6)
  .release(0.1)
  .chop(8)
  .gain(0.35)
  .room(0.7)
  .jux(x => x.late(0.125).transpose(12).pan(0))

$: note("d6 ~ ~ eb6 ~ a5 ~ ~ ~ c6 ~ ~ ~ ~ cs6 ~")
  .sound("piano")
  .velocity(0.4)
  .gain(0.6)
  .room(0.9)
  .size(0.8)
  .roomlp(4000)
  .delay(0.8)
  .dt(0.75)
  .delayfeedback(0.6)
  .often(x => x.octave(-1))

$: note("g2")
  .sound("triangle")
  .fm(sine.range(1, 4).slow(8))
  .fmh(0.5)
  .lpf(800)
  .gain(0.3)
  .room(0.8)
  .slow(4)