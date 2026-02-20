// Goldberg Variations - Ambient Rework
// The 8-note ground bass, re-contextualized

setcps(72/60/4)

$: note("g3 gb3 e3 d3 b2 c3 d3 g2")
  .slow(2)
  .sound("pulse")
  .gain(0.3)
  .cutoff(350)
  .penv(50)

$: note("d5 b4 g4 e4 d4 e4 fs4 g4")
  .slow(2)
  .sound("sine")
  .fmi(2)
  .room(0.4)
  .gain(0.25)

$: s("hh").euclid(5, 8)
  .slow(2)
  .gain(0.2)
  .pan(sine.range(0.1, 0.9).slow(16))
  .degradeBy(0.25)
  .hpf(7000)

$: note("g5")
  .sound("supersaw")
  .gain(0.15)
  .lpf(sine.range(600, 2500).slow(8))
  .lpq(5)
  .room(0.6)
  
$: s("rd")
  .slow(4)
  .speed(-0.5)
  .gain(0.1)
  .hpf(1000)
  .room(0.7)

$: note("g5 d6 g6 b6")
  .fast(2)
  .sound("triangle")
  .gain(0.08)
  .delay(0.5)
  .pan(perlin.range(0.2, 0.8).slow(7))