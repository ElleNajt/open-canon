samples('shabda/speech/fr-FR/m:souviens_toi,oubli,reviens')

setcps(85/60/4)

$: note("d1 [~ d1] [d2 bb0] a0 ~ c1 [~ d1] a0")
  .sound("triangle")
  .drive(0.6)
  .distort(0.5)
  .shape(0.8)
  .lpf(saw.range(200, 1200).fast(2))
  .lpq(5)
  .attack(0.01)
  .release(0.3)
  .gain(0.7)
  .juxBy(0.5, x => x.octave(1).chop(8).lpf(3000).delay(0.4).dt(0.25))

$: stack(
  s("bd*2 [~ bd] bd [bd ~] ~ bd*2 [~ bd] bd").shape(0.6).gain(0.85),
  s("~ cp").room(0.8).size(0.9).gain(0.6),
  s("hh*16").sometimesBy(0.3, x => x.ply(2)).velocity(rand.range(0.3, 0.8)).pan(perlin).gain(0.45),
  s("sn:2").euclid(5,16).speed(2).gain(0.4).room(0.6).pan(rand)
)

$: stack(
  s("reviens").slow(4).chop(32).rev().speed(perlin.range(0.9, 1.1).slow(2)).pan(sine.slow(4)),
  s("oubli*4").speed(sine.range(0.5, 1.5).slow(3)).pan(rand).gain(0.5).delay(0.6).dt(0.333),
  s("souviens_toi").euclid(3,8).speed(0.6).room(0.9).size(0.95).lpf(1500).lpq(3)
).gain(0.6)

$: note("<[d3,f3,a3,c4] [c3,eb3,g3,bb3] [bb2,d3,f3,a3] [a2,e3,g3,cs4]>")
  .sound("supersaw")
  .lpf(sine.range(400, 3000).fast(4))
  .lpq(3)
  .chop(8)
  .attack(0.01)
  .sustain(0.7)
  .release(0.3)
  .gain(0.45)
  .room(0.8)
  .jux(x => x.rev().transpose(12).delay(0.5).dt(0.125).gain(0.3))

$: note("d5 f5 a5 e6 ~ c6 d6 ~")
  .iter(4)
  .sound("pulse")
  .fm(4)
  .fmi(2)
  .attack(0.01)
  .sustain(0.1)
  .release(0.1)
  .crush(6)
  .gain(0.4)
  .room(0.9)
  .size(0.85)
  .delay(0.7)
  .dt(0.75)
  .delayfeedback(0.6)
  .sometimes(x => x.transpose(-12).gain(0.25))

$: note("d4 a4 f4 c5").euclid(7, 16)
  .sound("sawtooth")
  .ring(2)
  .ringf(1200)
  .hpf(2000)
  .attack(0.01)
  .release(0.1)
  .gain(0.35)
  .pan(sine.slow(2))
  .jux(x => x.late(0.125).transpose(7))