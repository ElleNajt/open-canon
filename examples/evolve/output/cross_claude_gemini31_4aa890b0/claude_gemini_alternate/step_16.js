samples('shabda/speech/fr-FR/m:souviens_toi,oubli,reviens')

setcps(75/60/4)

$: note("<[c1 c2 ~ eb1] [f1 c1 f1 g1] [c2 ~ bb1 eb1] [g1 ~ f1 c1]>")
  .sound("pulse")
  .drive(0.8)
  .distort(0.5)
  .shape(0.8)
  .lpf(saw.range(150, 2400).fast(2))
  .lpq(6)
  .attack(0.01)
  .decay(0.3)
  .sustain(0.1)
  .release(0.8)
  .gain(0.75)
  .juxBy(0.6, x => x.octave(1).delay(0.5).dt("0.125 0.333").delayfeedback(0.4))

$: stack(
  s("bd(5,8)").shape(0.8).lpf(1200).gain(0.85),
  s("~ sn:2 ~ <sn:4 [sn:3 sn:3]>").room(0.5).gain(0.65).pan(0.4),
  s("hh*16").velocity(sine.range(0.3, 0.7).fast(8)).pan(rand).hpf(6000).gain(0.35).jux(x => x.hurry(2).degradeBy(0.4)),
  s("cr(3,8)").room(0.9).pan(0.7).gain(0.4).jux(x => x.rev())
)

$: stack(
  s("reviens*8").chop(8).speed(perlin.range(0.8, 1.5).fast(3)).gain(0.6).pan(sine.fast(2)).delay(0.5).dt(0.333).delayfeedback(0.5),
  s("souviens_toi").slow(4).speed(0.6).distort(0.2).room(0.8).size(0.9).gain(0.7).pan(0.3)
).sometimes(x => x.rev().crush(4))

$: note("<[c3,eb3,g3,bb3] [ab2,c3,eb3,g3] [f2,ab2,c3,eb3] [g2,b2,d3,f3]>")
  .sound("supersaw")
  .lpf(sine.range(600, 1800).slow(4))
  .lpq(3)
  .attack(1.2)
  .sustain(0.8)
  .release(2.5)
  .tremolo(0.7)
  .tremolosync(4)
  .room(0.9)
  .size(0.9)
  .gain(0.35)
  .pan(cosine.range(0.2, 0.8).slow(5))

$: n("0 2 4 7 2 4 9 7").scale("C:minor")
  .add("<0 3 -2 -4>")
  .sound("sine")
  .fm(3)
  .fmh(4)
  .fmenv(2)
  .fmdecay(0.1)
  .fast(2)
  .attack(0.01)
  .decay(0.2)
  .sustain(0)
  .release(0.5)
  .room(0.7)
  .delay(0.5)
  .dt(0.25)
  .delayfeedback(0.6)
  .gain(0.35)
  .pan(rand)