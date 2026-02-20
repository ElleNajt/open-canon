setcps(70/60/4)

$: stack(
   s("bd").euclid(3,16),
   s("sn").euclid(2,16).late(0.02),
   s("hh*2").gain(0.5).hpf(4000).degradeBy(0.2)
  ).fast(2).room(0.2)

$: sound("square")
  .note("c3*2 g3*2 a3*2 g3~ f3*2 e3*2 d3*2 c3~")
  .lpf(600)
  .attack(0.01)
  .decay(0.3)
  .sustain(0.5)
  .release(0.4)
  .pan(0.2)

$: note("c4 c4 g4 g4 a4 a4 g4 ~ f4 f4 e4 e4 d4 d4 c4 ~ g4 g4 f4 f4 e4 e4 d4 ~ g4 g4 f4 f4 e4 e4 d4 ~ c4 c4 g4 g4 a4 a4 g4 ~ f4 f4 e4 e4 d4 d4 c4 ~")
  .sound("triangle")
  .lpf(1200)
  .lpq(3)
  .room(0.5)
  .delay(0.2)
  .delaytime(0.33)
  .delayfeedback(0.4)
  .jux(p=>p.transpose(7).gain(0.6))