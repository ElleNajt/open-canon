setcps(110/60/4)
samples('shabda/speech:goldberg,cosmic,whisper,glitch,groove')

$: note("[bb3 cs4 d4 fs4] [e4 g4 a4 c5] [d5 g5 bb5 ds6] ~")
  .slow(2.8)
  .sound("sawtooth")
  .lpf(perlin.range(200,3200).slow(2.5))
  .detune(rand.range(-15,25))
  .gain(0.5)

$: note("g2 [b2 d3 fs3] [cs2 fs2 g2 a3]")
  .slow(3.2)
  .sound("supersaw")
  .fm(sine.range(0.3,2).slow(1.8))
  .leslie(0.5)
  .gain(0.42)

$: note("d5 [fs5 g5 b5] [d6 fs6 g6 b6] , b5 [d6 fs6 g6] [b6 d7 fs7 g7] ~")
  .slow(2.4)
  .sound("pulse")
  .detune(sine.range(-25,35))
  .phaser(0.6)
  .gain(0.48)

$: stack(
  s("bd ~ bd bd").euclid(9,16),
  s("sn, cp").euclid(7,16).fast(1.6),
  s("~ [hh*4 oh*6]?").degradeBy(0.25)
)
  .slow(2)
  .swing(0.42)
  .distort(0.22)
  .crush(4)
  .gain(0.58)

$: s("hh*7? [oh cp*10 ~] , [cp*4 hh*12 oh]")
  .fast(3.4)
  .jux(rev)
  .delay(0.28)
  .hpf(sine.range(1400,6200))
  .gain(0.4)

$: s("~ [goldberg cosmic*3] [whisper*4 glitch groove] , [glitch*5 cosmic whisper] [groove*3 ~ goldberg]")
  .slow(2.7)
  .speed(perlin.range(0.65,1.55).slow(2.8))
  .chop(sine.range(10,26))
  .tremolo(0.45)
  .gain(0.44)