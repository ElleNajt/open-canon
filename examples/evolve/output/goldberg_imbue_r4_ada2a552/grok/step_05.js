setcps(78/60/4)
samples('shabda/speech:goldberg,cosmic,whisper,glitch,groove')

$: note("g3 fs3 e3 d3 b2 c3 d3 [g2 a2 bb2]")
  .slow(2)
  .sound("sawtooth")
  .lpf(sine.range(100,600).slow(6))
  .room(0.4)
  .gain(0.55)

$: note("g2 [b2 d3 fs3] [fs2 a2 cs3] [e2 g2 b2 fs2]")
  .slow(4)
  .sound("sine")
  .fm(sine.range(0.1,0.4))
  .vowel("a o i u")
  .gain(0.35)

$: note("d4 fs4 g4 b4 d5 fs5 g5 b5, b4 d5 fs5 g5 b5 d6 [fs6 g6] ~")
  .slow(2)
  .sound("pulse")
  .detune(sine.range(-15,15))
  .hpf(sine.range(150,900).slow(5))
  .gain(0.5)

$: stack(
  s("bd").euclid(3,8),
  s("sn").euclid(2,8).fast(2)
)
  .slow(2)
  .swing(0.2)
  
  .crush(10)
  .gain(0.6)

$: s("hh*4 [~ hh*4] , [oh*2 ~ cp] oh*2")
  .fast(2)
  .jux(rev)
  .delay(0.22)
  .tremolo(sine.range(0.3,0.5))
  .gain(0.38)

$: s("~ goldberg [cosmic*2 ~], glitch*4 [groove whisper]")
  .slow(5)
  .speed(rand.range(0.7,1.3))
  .chop(12)
  .lpf(perlin.range(160,2900).slow(4))
  .gain(0.28)