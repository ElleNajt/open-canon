setcps(92/60/4)

$: stack(
   s("bd").euclid(4,16).gain(1.2),
   s("sn,rim").euclid(3,16).late(0.03).hpf(250).gain(0.85),
   s("hh*16").euclid(9,16).gain(0.25).hpf(7000).degradeBy(0.4).swing(0.12)
  ).compressor().room(0.2).swing(0.1)

$: sound("sine")
  .note("eb1*4 g1*4 bb1*4 ~ f1*4 eb1*4 db1*4 eb1*8")
  .slow(2)
  .lpf(180)
  .lpq(2)
  .hpf(30)
  .attack(0.01)
  .decay(0.7)
  .sustain(0.5)
  .release(0.9)
  .room(0.35)

$: note("eb5 g5 bb5 db6 ~ c6 ab5 f5 ~ eb5 g5 bb5 db6 ~ f5 db5 bb5 g5")
  .sound("pulse")
  .fm(1.8)
  .every(8,rev())
  .lpf(sine.range(400,2800).slow(3))
  .lpq(8)
  .tremolo(0.4).tremolosync(6)
  .room(0.45)
  .delay(0.3)
  .delaytime(0.125)
  .delayfeedback(0.3)
  .jux(p=>p.octave(-0.7).gain(0.55).pan(0.85).hpf(200))