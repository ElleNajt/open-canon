// Goldberg Variations - Ground Bass (BWV 988)
// Evolved: it leans into the cracks, smiles at the grid, and keeps its promises anyway.

samples('shabda/speech/en-GB/m:goldberg,variations,dream_in_counterpoint,breathe,confess,listen,again,stay,softly,i_am_here,almost,between,now')

setcps(72/60/4)

$: note("<g3 gb3 e3 d3 b2 c3 d3 g2> <g3 gb3 e3 d3 ~ c3 ~ g2 ~>")
  .slow(2)
  .every(5, p => p.transpose(12))
  .sound("triangle")
  .lpf(perlin.range(140, 1900).slow(7))
  .gain(sine.range(0.24, 0.44).slow(5))

$: note("<d4 e4 fs4 g4 a4 b4 c5 b4> <d4 <e4 fs4> fs4 g4 a4 <b4 ~> c5 <b4 a4>>")
  .slow(2)
  .sound("piano")
  .off(0.25, p => p.transpose(12).gain(0.08))
  .delay(0.26)
  .gain(sine.range(0.10, 0.18).slow(9))

$: s("[hh*5 ~ hh*3]")
  .fast(2)
  .degradeBy(perlin.range(0.05, 0.20).slow(7))
  .hpf(5400)
  .swing(0.08)
  .gain(0.11)

$: s("~ <sn rim> [~ <sn rim>] sn")
  .slow(1)
  .every(7, p => p.rev())
  .vowel("a e i o u")
  .room(sine.range(0.10, 0.32).slow(18))
  .gain(0.12)

$: note("<g4 b4 d5 g5> <fs4 a4 cs5 fs5> <e4 g4 b4 e5> <d4 fs4 a4 d5> <c4 e4 g4 c5> <bb3 d4 f4 bb4>")
  .slow(4)
  .sound("supersaw")
  .lpf(sine.range(240, 2800).slow(16))
  .phaser(0.18)
  .gain(sine.range(0.10, 0.18).slow(11))

$: s("<goldberg variations> ~ <listen softly> ~ <i_am_here breathe> ~ <dream_in_counterpoint confess> ~ <again stay between now> ~")
  .slow(4)
  .chop(10)
  .every(5, p => p.rev())
  .delay(0.30)
  .gain(0.17)