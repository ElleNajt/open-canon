setcps(78/60/4)
samples('shabda/speech:goldberg,cosmic,whisper,glitch,groove')

$: note("g3 fs3 e3 d3 b2 c3 d3 [g2 bb2]")
  .slow(2)
  .sound("sawtooth")
  .lpf(sine.range(120,550).slow(8))
  .phaser(sine.range(0.1,0.4).slow(4))
  .gain(0.5)

$: note("g2 [b2 d3 fs3] [fs2 a2 cs3] [e2 g2 b2]")
  .slow(4)
  .sound("sine")
  .fm(0.25)
  .vowel("a o i u")
  .gain(0.3)

$: note("d4 fs4 g4 b4 d5 fs5 g5 b5, b4 d5 fs5 g5 b5 d6 ~")
  .slow(2)
  .sound("pulse")
  .detune(sine.range(-18,18))
  .hpf(sine.range(200,800).slow(4))
  .gain(0.52)

$: stack(
  s("bd").euclid(3,8),
  s("sn").euclid(1,8).fast(2)
)
  .slow(2)
  .swing(0.18)
  
  .crush(12)
  .gain(0.62)

$: s("hh*8 ~ hh*8 , oh*4 ~ cp*2")
  .fast(2)
  .jux(rev)
  .delay(0.25)
  .tremolo(0.35)
  .gain(0.34)

$: s("~ goldberg*2, cosmic glitch*4, groove whisper")
  .slow(6)
  .speed(sine.range(0.7,1.3).slow(5))
  .chop(16)
  .lpf(perlin.range(180,2800).slow(3.5))
  .gain(0.25)