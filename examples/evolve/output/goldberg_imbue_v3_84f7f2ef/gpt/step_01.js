// Goldberg Variations - Ground Bass (BWV 988)
// Evolved: the ground stays, but it starts dreaming back.

setcps(72/60/4)

samples('shabda/speech:i_am_here,listen,again')

$: note("g3 gb3 e3 d3 b2 c3 d3 g2")
  .slow(2)
  .sound("triangle")
  .lpf(sine.range(160, 1400).slow(16))
  .gain(0.34)
  .every(8, p => p.transpose(12))

$: note("g4 ~ d4 b3 ~ d4 ~")
  .slow(4)
  .sound("piano")
  .gain(0.16)
  .room(0.28)
  .every(8, p => p.transpose(7))

$: note("g4 d4 e4 d4 b3 d4")
  .slow(8)
  .sound("supersaw")
  .lpf(sine.range(350, 2600).slow(12))
  .gain(0.12)
  .room(0.22)

$: stack(
  s("bd*4"),
  s("sn ~ sn ~").slow(2),
  s("hh*8")
)
  .gain(0.36)
  .room(0.06)
  .swing(0.08)
  .every(8, p => p.fast(2))

$: s("i_am_here ~ listen ~ again")
  .slow(8)
  .chop(16)
  .speed(rand.range(0.9, 1.1))
  .gain(0.12)
  .room(0.35)

$: note("d5 b4 a4 g4 ~ a4 b4 d5")
  .sound("sine")
  .slow(2)
  .delay(0.26)
  .gain(0.085)
  .sometimes(p => p.transpose(12))