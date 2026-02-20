setcps(88/60/4)

$: stack(
   s("bd").euclid(3,16).gain(1.2),
   s("sn").euclid(3,16).late(0.02).hpf(280).distort(0.1).gain(1),
   s("hh*16").euclid(10,16).gain(0.25).hpf(6800).degradeBy(0.25).swing(0.12).pan(sine.range(0.4,0.6).slow(2))
  ).compressorRatio(4).room(0.2).swing(0.1)

$: sound("triangle")
  .note("eb1*4 g1*4 bb1*4 f1*4 ~ eb1*4 db1*4 eb1*8")
  .slow(1.6)
  .lpf(tri.range(100,300).slow(7))
  .lpq(2.5)
  .hpf(30)
  .fmi(0.4)
  .attack(0.01)
  .decay(0.4)
  .sustain(0.7)
  .release(0.8)
  .room(0.35)

$: note("eb5 g5 bb5 db6 ~ c6 ab5 f5 ~ eb5 g5 bb5 db6 ~ f5 db5 bb5 g5")
  .sound("pulse")
  .fm(1.5)
  .every(8,rev())
  .lpf(saw.range(400,3000).slow(3.5))
  .lpq(8)
  .phaser(0.3)
  .tremolo(0.5).tremolosync(4.5)
  .room(0.45)
  .delay(0.25)
  .delaytime(0.2)
  .delayfeedback(0.3)
  .jux(p=>p.octave(-0.5).gain(0.55).pan(0.85).hpf(200).lpf(800))