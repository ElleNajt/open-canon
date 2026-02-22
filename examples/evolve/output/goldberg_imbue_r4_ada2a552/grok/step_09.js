setcps(98/60/4)
samples('shabda/speech:goldberg,cosmic,whisper,glitch,groove')

$: note("[g3 bb3 fs4 a3] [c4 d4 e4 g4] [bb4 cs5 d5 g5] ~")
  .slow(3)
  .sound("sawtooth")
  .lpf(perlin.range(400,2800).slow(3.5))
  .vowel("o e i")
  .gain(0.5)

$: note("g2 [b2 d3 fs3 a3] [cs2 fs2 g2 b2]")
  .slow(3.5)
  .sound("supersaw")
  .fm(sine.range(0.2,1).slow(3))
  .lpq(2.2)
  .gain(0.32)

$: note("d5 [fs5 g5 b5 d6] [fs6 g6 b6] , b5 [d6 fs6 g6 b6 d7] [fs7 g7 ~] ~")
  .slow(2.25)
  .sound("pulse")
  .detune(sine.range(-20,20))
  .phaser(sine.range(0.2,0.6).slow(4))
  .gain(0.48)

$: stack(
  s("bd").euclid(5,16),
  s("sn").euclid(4,16).fast(1.8),
  s("cp ~ cp").sometimesBy(0.3, rev)
)
  .slow(2.25)
  .swing(0.35)
  .coarse(0.6)
  .crush(4)
  .gain(0.58)

$: s("hh*16? , [oh*8 cp*4 ~ cp*8]")
  .fast(2.75)
  .jux(rev)
  .delay(0.25)
  .degradeBy(0.15)
  .gain(0.42)

$: s("~ goldberg [cosmic glitch*2] [whisper*2 groove glitch] , [glitch cosmic*2] ~ [whisper groove*2 glitch*3]")
  .slow(2.5)
  .speed(perlin.range(0.75,1.45).slow(3))
  .chop(perlin.range(8,20))
  .distort(0.28)
  .gain(0.38)