setcps(108/60/4)
samples('shabda/speech:goldberg,cosmic,whisper,glitch,groove')

$: note("[bb3 cs4 d4 fs4] [e4 g4 a4 c5] [d5 g5 bb5 ds6] ~")
  .slow(3)
  .sound("sawtooth")
  .lpf(perlin.range(250,2800).slow(3.2))
  .vowel("o a")
  .gain(0.5)

$: note("g2 [b2 d3 fs3] [cs2 fs2 g2 a3]")
  .slow(3.5)
  .sound("supersaw")
  .fm(sine.range(0.2,1.8).slow(2))
  .leslie(0.4)
  .gain(0.4)

$: note("d5 [fs5 g5 b5] [d6 fs6 g6 b6] , b5 [d6 fs6 g6] [b6 d7 fs7 g7] ~")
  .slow(2.2)
  .sound("pulse")
  .detune(sine.range(-20,30))
  .phaser(0.5)
  .gain(0.48)

$: stack(
  s("bd ~ bd bd").euclid(8,16),
  s("sn, cp").euclid(6,16).fast(1.8),
  s("~ [hh*3 oh*5]?").degradeBy(0.2)
)
  .slow(2.1)
  .swing(0.35)
  .distort(0.15)
  .crush(5)
  .gain(0.6)

$: s("hh*6? [oh cp*12 ~] , [cp*5 hh*10 oh]")
  .fast(3.2)
  .jux(rev)
  .delay(0.25)
  .hpf(sine.range(1500,6000))
  .gain(0.38)

$: s("~ [goldberg cosmic*2] [whisper*3 glitch groove] , [glitch*4 cosmic whisper] [groove*2 ~ goldberg]")
  .slow(2.9)
  .speed(perlin.range(0.7,1.5).slow(3))
  .chop(perlin.range(8,28))
  .tremolo(0.4)
  .gain(0.45)