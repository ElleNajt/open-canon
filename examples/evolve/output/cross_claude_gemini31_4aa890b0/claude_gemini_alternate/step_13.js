samples('shabda/speech/fr-FR/m:souviens_toi,oubli,reviens')

setcps(85/60/4)

$: note("ab0 [~ g0] eb1 [~ bb0] f1 c1 [~ ab0] eb1")
  .sound("sawtooth")
  .drive(0.6)
  .distort(0.3)
  .shape(0.5)
  .lpf(perlin.range(400, 1800).slow(4))
  .lpq(8)
  .attack(0.08)
  .release(0.6)
  .sustain(0.15)
  .gain(0.5)
  .juxBy(0.6, x => x.octave(1).delay(0.4).dt(0.5).delayfeedback(0.35))

$: stack(
  s("[bd ~ bd] ~ [bd bd] [~ bd]").shape(0.6).gain(0.8).lpf(2500),
  s("~ [~ cp:3] ~ cp:2").room(0.85).size(0.95).gain(0.55).pan(0.6),
  s("hh(7,16)").velocity(sine.range(0.25, 0.7).fast(3)).pan(cosine.fast(2)).hpf(5000).gain(0.25),
  s("~ rim [rim ~] rim").speed(0.7).gain(0.4).delay(0.6).dt(0.667).pan(perlin)
)

$: stack(
  s("oubli*2").chop(16).speed(perlin.range(0.5, 0.9).slow(2)).rev().gain(0.6).pan(sine.range(0.3, 0.7).fast(2)),
  s("souviens_toi").slow(4).begin(0.2).end(0.7).speed(0.5).lpf(800).room(0.98).size(0.95).gain(0.65).delay(0.7).dt(1)
).gain(0.6)

$: note("<[ab2,c3,eb3] [f2,ab2,db3] [eb2,gb2,bb2] [db2,f2,ab2]>")
  .euclid(7, 16)
  .sound("triangle")
  .fm(4)
  .fmi(1.8)
  .attack(0.02)
  .sustain(0.3)
  .release(0.5)
  .gain(0.45)
  .room(0.7)
  .size(0.8)
  .pan(sine.range(0.3, 0.7).slow(6))

$: note("eb4 ~ [ab4 gb4] ~ db5 ~ [c5 bb4] ~")
  .slow(4)
  .sound("sine")
  .fmi(2)
  .fmh(1.5)
  .attack(0.6)
  .sustain(0.9)
  .release(2)
  .lpf(sine.range(600, 2000).slow(8))
  .gain(0.3)
  .delay(0.8)
  .dt(0.5)
  .delayfeedback(0.5)
  .room(0.9)
  .pan(perlin.range(0.2, 0.8).slow(4))

$: note("~ db3 ~ ab3 ~ eb3 gb3 ~")
  .slow(2)
  .sound("supersaw")
  .attack(0.3)
  .release(1.2)
  .lpf(1200)
  .lpq(4)
  .gain(0.2)
  .room(0.6)
  .jux(x => x.transpose(12).late(0.5))