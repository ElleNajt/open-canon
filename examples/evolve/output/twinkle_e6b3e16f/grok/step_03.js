setcps(80/60/4)

$: stack(
   s("bd").euclid(3,16),
   s("sn").euclid(2,16).late(0.02),
   s("hh*4,oh").gain(0.4).hpf(5000).degradeBy(0.3).swing(0.05)
  ).room(0.15)

$: sound("pulse")
  .note("c2*2 g2*2 a2*2 ~ f2*2 e2*2 d2*2 c2*2")
  .lpf(400)
  .lpq(5)
  .attack(0.005)
  .decay(0.25)
  .sustain(0.6)
  .release(0.3)
  .pan(0.3)
  .detune(20)

$: note("c5 eb5 g5 bb5 ~ ab5 f5 ~ c5 eb5 g5 bb5 ~ ab5 f5 db5 ~")
  .sound("supersaw")
  .lpf(sine.range(800,2500).slow(4))
  .lpq(4)
  .room(0.4)
  .delay(0.25)
  .delaytime(0.25)
  .delayfeedback(0.35)
  .jux(p=>p.transpose(-12).gain(0.5).pan(0.8))