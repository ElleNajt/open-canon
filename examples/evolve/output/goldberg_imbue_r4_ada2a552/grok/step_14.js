setcps(115/60/4)
samples('shabda/speech:goldberg,cosmic,whisper,glitch,groove,evolve')

$: note("[bb3 cs4 d4 fs4] [eb4 g4 a4 c5] [db5 g5 bb5 ds6] ~")
  .slow(3.2)
  .sound("sawtooth")
  .lpf(perlin.range(200,3500).slow(2.5))
  .lpq(3.5)
  .gain(0.48)

$: note("g2 [b2 d3 fs3] [cs2 fs2 g2 bb3]")
  .slow(3.8)
  .sound("supersaw")
  .fm(sine.range(0.1,2.5).slow(1.8))
  .leslie(sine.range(0.4,0.8))
  .gain(0.42)

$: note("d5 [fs5 g5 b5] [d6 fs6 g6 b6] , b5 [d6 fs6 g6] [b6 d7 fs7 g7] [eb7 ~]")
  .slow(2.4)
  .sound("pulse")
  .detune(sine.range(-30,50).slow(4))
  .every(7,rev)
  .gain(0.52)

$: stack(
  s("bd ~ bd bd").euclid(9,16),
  s("sn, cp").euclid(7,16).fast(1.4),
  s("~ [hh*3 oh*5]?").degradeBy(0.4)
)
  .slow(2.3)
  .swing(0.5)
  .distort(0.2)
  
  .gain(0.62)

$: s("hh*8? [oh cp*8 ~] , [cp*3 hh*10 oh*2] cp*4?")
  .fast(3.5)
  .jux(rev)
  .delay(0.35)
  .hpf(sine.range(1000,6000).slow(2))
  .gain(0.4)

$: s("[goldberg cosmic*2 ~] [whisper*2 glitch groove] , [glitch*3 cosmic ~] [groove*2 goldberg evolve]")
  .slow(2.8)
  .speed(perlin.range(0.6,1.6).slow(2.5))
  .chop(sine.range(6,28))
  .distort(0.15)
  .gain(0.48)