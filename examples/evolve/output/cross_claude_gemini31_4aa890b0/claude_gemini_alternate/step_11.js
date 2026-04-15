samples('shabda/speech/fr-FR/m:souviens_toi,oubli,reviens')

setcps(85/60/4)

$: note("[a1 ~ e1] [g1 d1] [f1 ~ c1] [bb0 ~]")
  .sound("sawtooth")
  .drive(0.8)
  .distort(0.3)
  .shape(0.6)
  .lpf(perlin.range(300, 900).slow(8))
  .lpq(6)
  .attack(0.02)
  .release(0.5)
  .gain(0.65)
  .juxBy(0.7, x => x.transpose(12).delay(0.5).dt(0.333).delayfeedback(0.4))

$: stack(
  s("[~ bd] bd*2 [bd bd] ~ bd [~ bd] bd*2 bd").shape(0.5).gain(0.8),
  s("~ [cp:2 ~] ~ cp").room(0.7).size(0.8).gain(0.55).pan(0.3),
  s("oh*8").velocity(sine.range(0.2, 0.6).fast(2)).pan(saw.slow(4)).lpf(4000).gain(0.35),
  s("rim").euclid(7,16).speed(1.5).gain(0.45).delay(0.4).dt(0.25).pan(rand)
)

$: stack(
  s("souviens_toi").slow(8).chop(64).speed(0.5).lpf(800).room(0.95).size(0.99).gain(0.7),
  s("oubli").euclid(5,12).speed(rand.range(0.7, 1.3)).rev().pan(sine.slow(3)).delay(0.7).dt(0.5),
  s("reviens*2").chop(16).iter(4).speed(1.2).hpf(1500).gain(0.5)
).gain(0.55)

$: note("<[a2,c3,e3,g3] [f2,a2,c3,e3] [d2,f2,a2,c3] [e2,g2,b2,d3]>")
  .sound("sine")
  .fm(2)
  .fmi(1.5)
  .attack(0.1)
  .sustain(0.8)
  .release(0.6)
  .gain(0.5)
  .room(0.9)
  .size(0.9)
  .pan(sine.range(0.3, 0.7).slow(8))

$: note("~ e5 ~ g5 a5 ~ c6 ~")
  .palindrome()
  .sound("triangle")
  .attack(0.01)
  .sustain(0.05)
  .release(0.2)
  .lpf(sine.range(1000, 5000).slow(4))
  .gain(0.38)
  .delay(0.8)
  .dt(0.375)
  .delayfeedback(0.55)
  .jux(x => x.transpose(5).late(0.0625))

$: note("a3 ~ c4 e4 ~ g4 ~ d4")
  .euclid(9, 16)
  .sound("pulse")
  .lpf(2500)
  .lpq(4)
  .attack(0.005)
  .release(0.15)
  .gain(0.4)
  .phaser(0.5)
  .phaserdepth(2)
  .pan(perlin.slow(4))
  .sometimes(x => x.octave(5).gain(0.25))