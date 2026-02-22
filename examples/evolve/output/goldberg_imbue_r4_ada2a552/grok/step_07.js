setcps(90/60/4)
samples('shabda/speech:goldberg,cosmic,whisper,glitch,groove')

$: note("[g3 a3 bb3] [c4 d4 e4] [fs4 g4 bb4]")
  .slow(4)
  .sound("sawtooth")
  .lpf(perlin.range(250,2200).slow(3))
  .shape(0.12)
  .gain(0.48)

$: note("g2 [b2 d3 fs3] [cs2 a2 fs2 g2]")
  .slow(4)
  .sound("supersaw")
  .fm(tri.range(0,0.7).slow(3))
  .lpq(1.5)
  .gain(0.38)

$: note("d5 [fs5 g5 b5] [d6 fs6 g6 b6] , b5 [d6 fs6 g6 b6] [d7 fs7 g7] ~")
  .slow(2.5)
  .sound("pulse")
  .detune(sine.range(-18,18))
  .pan(sine.slow(6))
  .gain(0.52)

$: stack(
  s("bd").euclid(6,16),
  s("sn").euclid(4,16).fast(2),
  s("cp ~").every(3, rev)
)
  .slow(2)
  .swing(0.28)
  
  .crush(7)
  .gain(0.62)

$: s("hh*16 , [oh*8 cp*4 ~ cp*4]")
  .fast(3)
  .jux(rev)
  .delay(0.25)
  .phaser(0.5)
  .gain(0.38)

$: s("~ goldberg [cosmic glitch] [whisper groove*2] , [glitch cosmic] whisper*2 ~")
  .slow(3)
  .speed(perlin.range(0.75,1.35).slow(2))
  .chop(14)
  .hpf(saw.range(150,700).slow(5))
  .gain(0.32)