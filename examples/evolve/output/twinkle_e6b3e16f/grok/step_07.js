setcps(92/60/4)

$: stack(
   s("bd").euclid(3,16).gain(1.1),
   s("sn").euclid(3,16).late(0.02).hpf(300).distort(0.08).gain(0.9),
   s("hh*16").euclid(8,16).gain(0.28).hpf(6500).degradeBy(0.35).swing(0.1).pan(sine.range(0.3,0.7).slow(4))
  ).compressorRatio(5).room(0.18).swing(0.08)

$: sound("sine")
  .note("eb1*4 g1*4 bb1*4 f1*4 ~ eb1*4 db1*4 eb1*8")
  .slow(1.8)
  .lpf(saw.range(120,280).slow(6))
  .lpq(1.8)
  .hpf(25)
  .fmi(0.3)
  .attack(0.008)
  .decay(0.6)
  .sustain(0.6)
  .release(1.0)
  .room(0.3)

$: note("eb5 g5 bb5 db6 ~ c6 ab5 f5 ~ eb5 g5 bb5 db6 ~ f5 db5 bb5 g5")
  .sound("pulse")
  .fm(1.2)
  .every(16,rev())
  .lpf(cosine.range(350,2600).slow(4))
  .lpq(10)
  .phaser(0.25)
  .tremolo(0.45).tremolosync(5)
  .room(0.4)
  .delay(0.28)
  .delaytime(0.18)
  .delayfeedback(0.28)
  .jux(p=>p.octave(-0.7).gain(0.5).pan(0.88).hpf(180))