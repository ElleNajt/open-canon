setcps(92/60/4)
samples('shabda/speech:goldberg,cosmic,whisper,glitch,groove')

$: note("[g3 a3 bb3 fs4] [c4 d4 e4 g4] [bb4 cs5 d5] ~")
  .slow(3.5)
  .sound("sawtooth")
  .lpf(perlin.range(300,2500).slow(4))
  .detune(sine.range(-12,12))
  .gain(0.45)

$: note("g2 [b2 d3 fs3 a3] [cs2 fs2 g2 b2]")
  .slow(3.5)
  .sound("supersaw")
  .fm(tri.range(0.1,0.8).slow(4))
  .lpq(1.8)
  .gain(0.35)

$: note("d5 [fs5 g5 b5 d6] [fs6 g6 b6] , b5 [d6 fs6 g6 b6 d7] [fs7 g7 ~] ~")
  .slow(2.25)
  .sound("pulse")
  .detune(sine.range(-22,22))
  .pan(sine.slow(5))
  .gain(0.5)

$: stack(
  s("bd").euclid(7,16),
  s("sn").euclid(3,16).fast(2),
  s("cp ~ cp").sometimes(rev)
)
  .slow(2.25)
  .swing(0.32)
  
  .crush(6)
  .gain(0.6)

$: s("hh*16? , [oh*8 cp*4 ~ cp*8]")
  .fast(2.75)
  .jux(rev)
  .delay(0.22)
  .tremolo(0.3)
  .gain(0.4)

$: s("goldberg ~ [cosmic*2 glitch] [whisper*3 groove] , [glitch*2 cosmic] whisper groove ~")
  .slow(2.75)
  .speed(perlin.range(0.8,1.4).slow(2.5))
  .chop(16)
  .hpf(saw.range(120,650).slow(4))
  .gain(0.35)