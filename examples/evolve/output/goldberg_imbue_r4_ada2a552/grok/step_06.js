setcps(80/60/4)
samples('shabda/speech:goldberg,cosmic,whisper,glitch,groove')

$: note("g3 a3 bb3 c4 d4 e4 fs4 g4")
  .slow(3)
  .sound("sawtooth")
  .lpf(sine.range(200,2000).slow(4))
  .distort(0.15)
  .gain(0.5)

$: note("g2 [b2 d3 fs3] [cs3 a2 fs2] [g2 e2 b2]")
  .slow(4)
  .sound("supersaw")
  .fm(sine.range(0,0.5).slow(2))
  .vowel("a e o u i")
  .gain(0.4)

$: note("d5 fs5 g5 b5 d6 fs6 g6 b6, b5 d6 fs6 g6 b6 [d7 fs7 g7] ~")
  .slow(2)
  .sound("triangle")
  .detune(saw.range(-20,20))
  .hpf(cosine.range(100,800).slow(6))
  .gain(0.55)

$: stack(
  s("bd").euclid(5,16),
  s("sn").euclid(3,16).fast(2),
  s("cp").every(4, rev)
)
  .slow(2)
  .swing(0.25)
  
  .crush(8)
  .gain(0.65)

$: s("hh*8 ~*8 , [oh*4 cp*4]")
  .fast(2)
  .jux(rev)
  .delay(0.3)
  .phaser(0.4)
  .gain(0.4)

$: s("goldberg ~ cosmic [glitch groove*2], [whisper*3 ~ glitch*2]")
  .slow(4)
  .speed(perlin.range(0.8,1.4))
  .chop(16)
  .lpf(saw.range(200,3000).slow(3))
  .gain(0.3)