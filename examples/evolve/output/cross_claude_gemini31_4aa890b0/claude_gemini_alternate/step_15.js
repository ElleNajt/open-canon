samples('shabda/speech/fr-FR/m:souviens_toi,oubli,reviens')

setcps(75/60/4)

$: note("[f0 ab0] ~ [c1 eb1] ~ [gb1 bb0] ~ [db1 f0] ~")
  .sound("pulse")
  .drive(0.7)
  .distort(0.3)
  .shape(0.5)
  .lpf(sine.range(400, 2200).slow(6))
  .lpq(8)
  .attack(0.02)
  .release(1.2)
  .sustain(0.15)
  .gain(0.6)
  .juxBy(0.7, x => x.octave(1).delay(0.6).dt("0.166 0.25").delayfeedback(0.35))

$: stack(
  s("[bd bd:3] ~ [~ bd] [bd*2 ~]").shape(0.6).lpf(1800).gain(0.8),
  s("~ [~ sn:2] ~ sn:4").room(0.6).gain(0.55).pan(0.55),
  s("hh(7,8)").velocity(sine.range(0.25, 0.7).fast(3)).pan(rand).hpf(7000).gain(0.35),
  s("[rim*3 ~] cb [~ rim] oh").room(0.5).gain(0.45).pan(0.35)
)

$: stack(
  s("souviens_toi").slow(4).speed(0.7).lpf(900).room(0.9).size(0.95).gain(0.65).pan(0.3),
  s("oubli*3").chop(12).speed(perlin.range(0.5, 1.6).fast(4)).gain(0.5).pan(sine.fast(3)).delay(0.4).dt(0.333).delayfeedback(0.5)
).sometimes(x => x.rev())

$: note("<[gb2,bb2,db3] [ab2,c3,eb3] [f2,ab2,db3] [eb2,gb2,bb2,db3]>")
  .euclid(7, 16)
  .sound("sine")
  .fm(5)
  .fmi(2.5)
  .fmdecay(0.6)
  .fmsustain(0.2)
  .attack(0.08)
  .sustain(0.3)
  .release(1.2)
  .gain(0.45)
  .room(0.8)
  .size(0.85)
  .pan(cosine.range(0.15, 0.85).slow(5))

$: note("<[ab4 ~ db5 ~] [gb4 bb4 ~ eb5] [f4 ~ ab4 c5] [db4 f4 ~ bb4]>")
  .sound("supersaw")
  .detune(12)
  .slow(2)
  .lpf(2500)
  .lpq(3)
  .attack(0.15)
  .release(1.5)
  .room(0.85)
  .size(0.9)
  .gain(0.35)
  .pan(perlin.range(0.2, 0.8).slow(3))

$: note("f6 ~ ab6 ~ <gb6 db6> ~ <eb6 bb5> ~")
  .sound("triangle")
  .slow(3)
  .attack(0.01)
  .decay(0.3)
  .sustain(0.1)
  .release(0.8)
  .delay(0.7)
  .dt(0.375)
  .delayfeedback(0.6)
  .gain(0.25)
  .pan(rand)