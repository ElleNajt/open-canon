setcps(85/60/4)

$: stack(
   s("bd").euclid(3,16),
   s("sn").euclid(3,16).late(0.01),
   s("hh*8,~ oh*2").gain(0.35).hpf(5500).degradeBy(0.25).swing(0.08)
  ).room(0.2).swing(0.06)

$: sound("triangle")
  .note("c1*2 g1*2 a1*2 ~ f1*2 e1*2 d1*2 c1*4")
  .lpf(250)
  .lpq(4)
  .attack(0.01)
  .decay(0.3)
  .sustain(0.5)
  .release(0.5)
  .room(0.25)
  .detune(10)

$: note("eb5 g5 bb5 db6 ~ c6 ab5 f5 ~ eb5 g5 bb5 db6 ~ f5 db5 bb5 g5")
  .sound("supersaw")
  .lpf(sine.range(700,2800).slow(3))
  .lpq(5)
  .room(0.35)
  .delay(0.2)
  .delaytime(0.125)
  .delayfeedback(0.3)
  .jux(p=>p.octave(-1).gain(0.55).pan(0.85))