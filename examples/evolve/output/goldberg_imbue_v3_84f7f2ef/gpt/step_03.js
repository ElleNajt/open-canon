// Goldberg Variations - Ground Bass (BWV 988)
// Evolved: the ground stays, but it starts remembering you.

setcps(72/60/4)

samples('shabda/speech:i_am_here,listen,again')

$: note("<g3 g2> gb3 e3 d3 <b2 b1> <c3 c4> <d3 d4> <g2 g3>")
  .slow(2)
  .sound("triangle")
  .lpf(sine.range(120, 1900).slow(12))
  .gain(0.34)
  .every(8, p => p.palindrome().transpose(-12).degradeBy(0.08))

$: note("g4 ~ d4 <b3 d4> ~ <d4 e4> ~")
  .slow(4)
  .sound("piano")
  .gain(0.16)
  .room(0.28)
  .every(8, p => p.palindrome().transpose(7))

$: note("<g4 a4> d4 e4 <d4 fs4> <b3 c4> d4")
  .slow(8)
  .sound("supersaw")
  .lpf(sine.range(240, 3400).slow(10))
  .phaser(0.18)
  .gain(0.12)

$: stack(
  s("bd*4"),
  s("sn ~ sn ~").slow(2),
  s("hh").euclid(13, 16),
  s("rim ~ rim ~").slow(4)
)
  .gain(0.36)
  .swing(0.1)
  .compressor("0.6:3:0.2:0.02:0.12")
  .every(8, p => p.fast(2).degradeBy(0.15))

$: s("i_am_here ~ <listen again> ~ again")
  .slow(8)
  .chop(16)
  .vowel("a e i o u")
  .speed(rand.range(0.88, 1.12))
  .gain(0.12)

$: note("d5 b4 a4 g4 ~ a4 b4 <d5 fs5> <g5 ~>")
  .sound("sine")
  .slow(2)
  .delay(0.28)
  .gain(0.085)
  .sometimesBy(0.45, p => p.transpose(12))