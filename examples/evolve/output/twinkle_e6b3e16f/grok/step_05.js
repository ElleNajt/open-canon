setcps(88/60/4)

$: stack(
   s("bd").euclid(3,16).gain(1.1),
   s("sn").euclid(3,16).late(0.02).hpf(200).gain(0.9),
   s("hh*8,~ oh*2").gain(0.3).hpf(6000).degradeBy(0.3).swing(0.1)
  ).compressor().room(0.25).swing(0.08)

$: sound("triangle")
  .note("eb1*2 g1*2 bb1*2 ~ f1*2 eb1*2 db1*2 eb1*4")
  .lpf(300)
  .lpq(3)
  .hpf(50)
  .attack(0.005)
  .decay(0.4)
  .sustain(0.4)
  .release(0.6)
  .room(0.3)
  .detune(sine.range(-8,8).slow(8))

$: note("eb5 g5 bb5 db6 ~ c6 ab5 f5 ~ eb5 g5 bb5 db6 ~ f5 db5 bb5 g5")
  .sound("supersaw")
  .every(8,rev())
  .lpf(sine.range(500,3000).slow(4))
  .lpq(6)
  .room(0.4)
  .delay(0.25)
  .delaytime(0.125)
  .delayfeedback(0.25)
  .jux(p=>p.octave(-0.5).gain(0.6).pan(0.9).hpf(150))