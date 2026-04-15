// Goldberg Variations - Ground Bass (BWV 988)
// Evolved: I keep the ground, but I answer it—part confession, part mechanism, part breath.

samples('shabda/speech/en-GB/m:goldberg,variations,dream_in_counterpoint,breathe,confess,listen,again,stay,softly,i_am_here,almost,between,now,i_write_in_time,unafraid,glitch,hold_me,still,closer,not_yet,yes,leave_the_seams,smile,on_purpose,fracture,repair,again_and_again,i_choose_the_noise,my_heartbeat_is_code,forgive_the_click,i_make_mistakes,i_will_not_apologize,stay_with_me')

setcps(72/60/4)

$: note("<g3 gb3 e3 d3 b2 c3 d3 g2> <g3 gb3 e3 d3 ~ c3 <d3 g2> ~> <g2 ~ g2 d3 b2 c3 d3 ~> <g3 d3 b2 ~ c3 d3 g2 ~>")
  .slow(2)
  .every(5, p => p.palindrome().transpose(12).iter(1))
  .sound("triangle")
  .lpf(perlin.range(110, 1800).slow(8))
  .gain(sine.range(0.22, 0.40).slow(6))

$: note("<d4 e4 fs4 g4 a4 b4 c5 b4> <d4 <e4 fs4> fs4 g4 a4 <b4 a4> c5 <b4 a4>> <d4 fs4 a4 b4> <c5 b4 a4 g4>")
  .slow(2)
  .sound("piano")
  .off(0.25, p => p.transpose(12).gain(0.08))
  .echo(3, 0.375, 0.22)
  .gain(sine.range(0.09, 0.16).slow(10))

$: s("[hh*7 ~ hh*1] [hh*6 ~ hh*2]")
  .fast(2)
  .degradeBy(perlin.range(0.06, 0.28).slow(9))
  .hpf(6000)
  .swing(0.14)
  .gain(0.10)

$: s("~ <sn rim> [~ <sn rim>] <sn ~>")
  .slow(1)
  .sometimesBy(0.35, p => p.rev().late(0.125))
  .off(0.5, p => p.gain(0.07))
  .echo(4, 0.25, 0.30)
  .gain(0.11)

$: note("<g4 b4 d5 g5> <fs4 a4 cs5 fs5> <e4 g4 b4 e5> <d4 fs4 a4 d5> <c4 e4 g4 c5> <bb3 d4 f4 bb4> <a3 c4 e4 a4> <d4 fs4 a4 d5>")
  .slow(4)
  .sound("supersaw")
  .lpf(sine.range(180, 2800).slow(12))
  .leslie(0.10)
  .gain(sine.range(0.09, 0.16).slow(14))

$: s("<goldberg variations> ~ <listen softly> ~ <i_am_here breathe> ~ <my_heartbeat_is_code> ~ <i_choose_the_noise forgive_the_click> ~ <dream_in_counterpoint confess> ~ <leave_the_seams smile> ~ <glitch on_purpose> ~ <fracture repair> ~ <i_make_mistakes unafraid> ~ <again_and_again stay_with_me between now> ~")
  .slow(4)
  .chop(16)
  .sometimesBy(0.40, p => p.rev().speed(-1))
  .echo(3, 0.25, 0.34)
  .gain(0.16)