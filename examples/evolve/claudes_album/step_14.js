samples('shabda/speech/fr-FR/m:souviens_toi,oubli,reviens')

setcps(75/60/4)

$: note("f0 ~ c1 ~ eb1 ~ bb0 [~ f1]")
  .sound("sawtooth")
  .drive(0.5)
  .distort(0.4)
  .shape(0.6)
  .lpf(perlin.range(300, 1500).slow(4))
  .lpq(6)
  .attack(0.05)
  .release(0.8)
  .sustain(0.2)
  .gain(0.65)
  .juxBy(0.5, x => x.octave(1).delay(0.5).dt(0.25).delayfeedback(0.2))

$: stack(
  s("bd [~ bd] bd [~ bd*2]").shape(0.5).lpf(2000).gain(0.85),
  s("~ sn:2").room(0.5).gain(0.6).pan(0.4),
  s("hh*8").velocity(perlin.range(0.3, 0.8).fast(2)).pan(rand).hpf(6000).gain(0.4),
  s("~ cr(3,8) [~ <mt ht>] ~").room(0.4).gain(0.5).pan(0.6)
)

$: stack(
  s("oubli*4").chop(8).speed(perlin.range(0.6, 1.4).fast(3)).gain(0.55).pan(cosine.fast(2)).room(0.4),
  s("reviens").slow(3).begin(0.1).end(0.85).speed(0.8).lpf(1200).room(0.95).size(0.9).gain(0.7).jux(x => x.late(0.5).speed(0.6))
)

$: note("<[f2,ab2,c3] [db2,f2,ab2,c3] [eb2,g2,bb2] [c2,eb2,g2,bb2]>")
  .euclid(5, 12)
  .sound("triangle")
  .fm(3)
  .fmi(1.5)
  .attack(0.05)
  .sustain(0.4)
  .release(0.8)
  .gain(0.5)
  .room(0.7)
  .size(0.8)
  .pan(sine.range(0.2, 0.8).slow(4))

$: note("f4 ab4 c5 eb5 <f5 db5> <c5 g5>")
  .sound("piano")
  .slow(1.5)
  .iter(5)
  .room(0.8)
  .size(0.8)
  .gain(0.4)
  .juxBy(0.6, x => x.rev().late(0.25).octave(1).velocity(0.7))