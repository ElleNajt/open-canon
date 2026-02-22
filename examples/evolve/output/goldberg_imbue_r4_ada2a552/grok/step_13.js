setcps(115/60/4)
samples('shabda/speech:goldberg,cosmic,whisper,glitch,groove')

$: note("[bb3 cs4 d4 fs4] [e4 g4 a4 c5] [d5 g5 bb5 ds6] ~")
  .slow(3)
  .sound("sawtooth")
  .lpf(perlin.range(250,3000).slow(3))
  .lpq(2.8)
  .gain(0.5)

$: note("g2 [b2 d3 fs3] [cs2 fs2 g2 a3]")
  .slow(3.5)
  .sound("supersaw")
  .fm(sine.range(0.2,2.2).slow(2))
  .leslie(0.6)
  .gain(0.45)

$: note("d5 [fs5 g5 b5] [d6 fs6 g6 b6] , b5 [d6 fs6 g6] [b6 d7 fs7 g7] ~")
  .slow(2.6)
  .sound("pulse")
  .detune(sine.range(-20,40))
  .sometimes(rev)
  .gain(0.5)

$: stack(
  s("bd ~ bd bd").euclid(10,16),
  s("sn, cp").euclid(8,16).fast(1.5),
  s("~ [hh*3 oh*5]?").degradeBy(0.3)
)
  .slow(2.1)
  .swing(0.45)
  .distort(0.25)
  
  .gain(0.6)

$: s("hh*8? [oh cp*8 ~] , [cp*3 hh*10 oh*2]")
  .fast(3.2)
  .jux(rev)
  .delay(0.3)
  .hpf(sine.range(1200,5800))
  .gain(0.42)

$: s("[goldberg ~ cosmic*2] [whisper glitch*3 groove] , [glitch cosmic*4 ~ whisper] [groove goldberg*2 cosmic]")
  .slow(2.5)
  .speed(perlin.range(0.7,1.45).slow(3))
  .chop(sine.range(8,24))
  .vowel("o i a u e")
  .gain(0.46)