// Goldberg Variations - Ground Bass (BWV 988) Evolved
// Infused with dreamy filters, counterpoint, and subtle groove

setcps(72/60/4)

$: note("g3 fs3 e3 d3 b2 c3 d3 g2")
  .slow(2)
  .sound("triangle")
  .lpf(sine.range(200, 500).slow(8))
  .gain(0.5)
  .room(0.2)

$: note("g2 [b2 d3 fs3] [fs2 a2 d3] [e2 g2 b2]")
  .slow(4)
  .sound("sine")
  .hpf(80)
  .gain(0.25)
  .room(0.4)

$: note("d4 fs4 g4 b4 d5 fs5 g5 b5, b4 d5 fs5 g5 b5 d6 ~ ~")
  .slow(2)
  .sound("square")
  .detune(rand.range(-15, 15))
  .lpf(1200)
  .gain(0.55)

$: s("bd ~ bd bd ~ , ~ sn ~ sn")
  .fast(0.5)
  .gain(0.6)
  .room(0.1)

$: s("hh*8 ~ hh*8 , oh*4 ~ cp")
  .fast(2)
  .pan(sine.range(0.4, 0.8))
  .delay(0.15)
  .gain(0.35)