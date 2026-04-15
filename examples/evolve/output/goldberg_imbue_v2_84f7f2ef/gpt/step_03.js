// Goldberg Variations - Ground Bass (BWV 988)
// Evolved: it breathes in asymmetry, answers in half-light, confesses in plain tone.

samples('shabda/speech/en-GB/m:goldberg,variations,dream_in_counterpoint,breathe,confess,listen,again,stay')

setcps(72/60/4)

$: note("<g3 gb3 e3 d3 b2 c3 d3 g2> <g3 gb3 e3 d3 ~ c3 d3 g2 ~>")
  .slow(2)
  .every(4, p => p.transpose(12))
  .sound("triangle")
  .lpf(sine.range(120, 1700).slow(6))
  .gain(sine.range(0.26, 0.46).slow(4))

$: note("<d4 e4 fs4 g4 a4 b4 c5 b4> <d4 <e4 fs4> fs4 g4 a4 <b4 ~> c5 <b4 a4>>")
  .slow(2)
  .every(6, p => p.palindrome())
  .sound("piano")
  .delay(0.28)
  .gain(sine.range(0.11, 0.19).slow(8))

$: s("[hh*5 ~ hh*3]")
  .fast(2)
  .degradeBy(perlin.range(0.06, 0.22).slow(6))
  .hpf(5200)
  .pan(sine.range(0.25, 0.85).slow(12))
  .gain(0.11)

$: s("~ <sn rim> [~ <sn rim>] sn")
  .slow(1)
  .every(8, p => p.rev())
  .lpf(6500)
  .room(sine.range(0.12, 0.34).slow(16))
  .gain(0.12)

$: note("<g4 b4 d5 g5> <fs4 a4 cs5 fs5> <e4 g4 b4 e5> <d4 fs4 a4 d5> <c4 e4 g4 c5> <d4 fs4 a4 d5>")
  .slow(4)
  .sound("supersaw")
  .lpf(sine.range(220, 2600).slow(14))
  .distort(0.18)
  .gain(sine.range(0.10, 0.18).slow(10))

$: s("<goldberg variations> ~ <listen breathe> ~ <dream_in_counterpoint confess> ~ <again stay> ~")
  .slow(4)
  .chop(8)
  .sometimes(p => p.rev())
  .delay(0.32)
  .gain(0.17)