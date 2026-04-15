samples('shabda/speech/fr-FR/m:souviens_toi,oubli,reviens')

setcps(95/60/4)

$: note("c1 [~ eb1] f1 [~ c1] ab0 g0 [~ c1] g1")
  .sound("square")
  .drive(0.8)
  .distort(0.4)
  .shape(0.7)
  .lpf(sine.range(500, 2500).fast(2))
  .lpq(6)
  .attack(0.05)
  .release(0.4)
  .sustain(0.1)
  .gain(0.55)
  .juxBy(0.5, x => x.octave(1).delay(0.3).dt(0.333).delayfeedback(0.25))

$: stack(
  s("bd*2 [~ bd] bd [~ bd*2]").shape(0.7).gain(0.85).lpf(3000),
  s("~ cp:2 [~ cp] ~").room(0.8).size(0.9).gain(0.6).pan(0.4),
  s("hh*16").velocity(perlin.range(0.3, 0.8).fast(2)).pan(sine.fast(4)).hpf(4000).gain(0.3),
  s("rim(3,8) rim(5,8)").speed(0.8).gain(0.45).delay(0.5).dt(0.5).pan(rand)
)

$: stack(
  s("reviens*4").chop(32).iter(4).speed(sine.range(0.8, 1.4).fast(4)).gain(0.5).pan(0.2),
  s("oubli").euclid(3,8).speed(0.6).rev().room(0.8).gain(0.55).pan(0.8),
  s("souviens_toi").slow(2).begin(0.1).end(0.6).speed(0.8).lpf(1200).room(0.95).size(0.9).gain(0.7).delay(0.6).dt(0.75)
).gain(0.65)

$: note("<[c3,eb3,g3,bb3] [ab2,c3,eb3,g3] [f2,ab2,c3,eb3] [d2,f2,ab2,c3]>")
  .euclid(5, 8)
  .sound("sine")
  .fm(3)
  .fmi(2.5)
  .attack(0.01)
  .sustain(0.2)
  .release(0.4)
  .gain(0.5)
  .room(0.6)
  .size(0.7)
  .pan(cosine.range(0.2, 0.8).slow(4))

$: note("~ g4 ~ c5 eb5 ~ d5 ~")
  .slow(2)
  .sound("supersaw")
  .attack(0.4)
  .sustain(0.8)
  .release(1.8)
  .lpf(perlin.range(800, 3500).slow(8))
  .lpq(5)
  .gain(0.25)
  .delay(0.7)
  .dt(0.375)
  .delayfeedback(0.6)
  .jux(x => x.transpose(7).late(0.25).pan(0.8))
  .room(0.8)

$: note("c4(3,8) eb4(5,8,1)")
  .sound("piano")
  .attack(0.01)
  .release(0.2)
  .speed(1.5)
  .gain(0.4)
  .hpf(800)
  .delay(0.4)
  .dt(0.5)
  .room(0.4)
  .sometimes(x => x.rev().octave(1))