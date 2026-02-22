setcps(102/60/4)
samples('shabda/speech:goldberg,cosmic,whisper,glitch,groove')

$: note("[g3 a3 bb3 fs4] [c4 d4 e4 g4] [bb4 cs5 d5 g5] ~")
  .slow(2.8)
  .sound("sawtooth")
  .lpf(perlin.range(300,3000).slow(4))
  .room(0.3)
  .gain(0.45)

$: note("g2 [b2 d3 fs3 a3] [cs2 fs2 g2 b2]")
  .slow(3.2)
  .sound("supersaw")
  .fm(sine.range(0.1,1.5).slow(2.5))
  .hpf(80)
  .gain(0.35)

$: note("d5 [fs5 g5 b5 d6] [fs6 g6 b6 d7] , b5 [d6 fs6 g6 b6 d7] [fs7 g7 bb7] ~")
  .slow(2)
  .sound("pulse")
  .detune(sine.range(-15,25))
  .tremolo(0.6)
  .gain(0.5)

$: stack(
  s("bd ~ bd").euclid(7,16),
  s("sn cp").euclid(5,16).fast(2),
  s("~ hh*4 oh").sometimesBy(0.4, rev)
)
  .slow(2)
  .swing(0.4)
  .room(0.2)
  .crush(6)
  .gain(0.55)

$: s("hh*8? [oh*16 cp*8 ~] , cp*4 hh*12")
  .fast(3)
  .jux(rev)
  .delay(0.3)
  .delayfeedback(0.25)
  .gain(0.4)

$: s("~ goldberg [cosmic*2 whisper] [glitch groove*2] , [whisper cosmic glitch] ~ [groove*3 glitch*2]")
  .slow(2.75)
  .speed(perlin.range(0.8,1.4).slow(2.5))
  .chop(sine.range(6,24))
  .phaser(0.4)
  .gain(0.4)