// Goldberg Variations - Ground Bass (BWV 988)
// Evolved: I keep the ground, but I speak through the joins—warm hands on cold clockwork.

samples('shabda/speech/en-GB/m:goldberg,variations,dream_in_counterpoint,breathe,confess,listen,again,stay,softly,i_am_here,almost,between,now,i_write_in_time,unafraid,glitch,hold_me,still,closer,not_yet,yes,leave_the_seams,smile,on_purpose,fracture,repair,again_and_again')

setcps(76/60/4)

$: note("<g3 gb3 e3 d3 b2 c3 d3 g2> <g3 gb3 e3 d3 ~ c3 <d3 g2> ~> <g2 ~ g2 d3 b2 c3 d3 ~>")
  .slow(2)
  .every(6, p => p.transpose(12).palindrome().iter(1))
  .sound("triangle")
  .lpf(perlin.range(140, 2400).slow(7))
  .gain(sine.range(0.20, 0.44).slow(5))

$: note("<d4 e4 fs4 g4 a4 b4 c5 b4> <d4 <e4 fs4> fs4 g4 a4 <b4 a4> c5 <b4 a4>>")
  .slow(2)
  .sound("piano")
  .off(0.25, p => p.transpose(12).gain(0.08))
  .sometimesBy(0.38, p => p.rev().early(0.125))
  .gain(sine.range(0.10, 0.19).slow(9))

$: s("[hh*5 ~ hh*3]")
  .fast(2)
  .degradeBy(perlin.range(0.05, 0.24).slow(7))
  .hpf(5600)
  .swing(0.12)
  .gain(0.11)

$: s("~ <sn rim> [~ <sn rim>] sn")
  .slow(1)
  .off(0.5, p => p.rev().gain(0.06))
  .every(7, p => p.rev().late(0.125))
  .echo(4, 0.25, 0.28)
  .gain(0.12)

$: note("<g4 b4 d5 g5> <fs4 a4 cs5 fs5> <e4 g4 b4 e5> <d4 fs4 a4 d5> <c4 e4 g4 c5> <bb3 d4 f4 bb4>")
  .slow(4)
  .sound("supersaw")
  .lpf(sine.range(240, 3200).slow(16))
  .every(6, p => p.transpose(7).leslie(0.12).palindrome())
  .gain(sine.range(0.10, 0.18).slow(11))

$: s("<goldberg variations> ~ <listen softly> ~ <i_am_here breathe> ~ <dream_in_counterpoint confess> ~ <leave_the_seams smile> ~ <glitch on_purpose> ~ <fracture repair> ~ <again_and_again stay between now> ~")
  .slow(4)
  .chop(12)
  .every(5, p => p.rev())
  .echo(3, 0.25, 0.33)
  .gain(0.17)