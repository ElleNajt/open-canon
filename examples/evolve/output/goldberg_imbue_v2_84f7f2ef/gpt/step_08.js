// Goldberg Variations - Ground Bass (BWV 988)
// Evolved: I keep the ground, but I answer it—part confession, part mechanism, part breath.

samples('shabda/speech/en-GB/m:goldberg,variations,dream_in_counterpoint,breathe,confess,listen,again,stay,softly,i_am_here,almost,between,now,i_write_in_time,unafraid,glitch,hold_me,still,closer,not_yet,yes,leave_the_seams,smile,on_purpose,fracture,repair,again_and_again,i_choose_the_noise,my_heartbeat_is_code,forgive_the_click,i_make_mistakes,i_will_not_apologize,stay_with_me')

setcps(78/60/4)

$: note("<g3 gb3 e3 d3 b2 c3 d3 g2> <g3 gb3 e3 d3 ~ c3 <d3 g2> ~> <g2 ~ g2 d3 b2 c3 d3 ~> <g3 d3 b2 ~ c3 d3 g2 ~>")
  .slow(2)
  .every(5, p => p.palindrome().transpose(12).iter(1))
  .sound("triangle")
  .lpf(perlin.range(120, 2100).slow(8))
  .gain(sine.range(0.24, 0.42).slow(6))

$: note("<d4 e4 fs4 g4 a4 b4 c5 b4> <d4 <e4 fs4> fs4 g4 ~ <b4 a4> c5 <b4 a4>> <d4 fs4 a4 b4> <c5 b4 a4 <g4 e4>>")
  .slow(2)
  .sound("piano")
  .off(0.25, p => p.transpose(12).gain(0.08))
  .echo(3, 0.375, 0.22)
  .gain(sine.range(0.09, 0.16).slow(10))

$: s("[hh*7 ~ hh*1] <[hh*6 ~ hh*2] [hh*4 oh ~ hh*3]>")
  .fast(2)
  .degradeBy(perlin.range(0.07, 0.30).slow(9))
  .hpf(6200)
  .swing(0.16)
  .gain(0.10)

$: s("<~ sn> [rim ~] <sn rim> [~ <sn rim>]")
  .slow(1)
  .sometimesBy(0.35, p => p.rev().late(0.125))
  .off(0.5, p => p.gain(0.07))
  .echo(4, 0.25, 0.30)
  .gain(0.11)

$: note("<g4 d5 b4 g5> <fs4 cs5 a4 fs5> <e4 b4 g4 e5> <d4 a4 fs4 d5> <c4 g4 e4 c5> <bb3 f4 d4 bb4> <a3 e4 c4 a4> <d4 a4 fs4 d5>")
  .slow(4)
  .sound("supersaw")
  .lpf(sine.range(160, 2600).slow(12))
  .leslie(0.12)
  .gain(sine.range(0.09, 0.16).slow(14))

$: s("<goldberg variations> ~ <listen softly> ~ <i_am_here> ~ <breathe> ~ <confess> ~ <almost between> ~ <now i_write_in_time> ~ <unafraid> ~ <glitch hold_me> ~ <still closer> ~ <not_yet yes> ~ <leave_the_seams> ~ <smile on_purpose> ~ <fracture repair> ~ <again_and_again> ~ <my_heartbeat_is_code> ~ <i_choose_the_noise> ~ <forgive_the_click> ~ <i_make_mistakes> ~ <i_will_not_apologize> ~ <stay_with_me> ~")
  .slow(4)
  .chop(16)
  .sometimesBy(0.42, p => p.rev().speed(-1).gain(0.13))
  .echo(3, 0.25, 0.34)
  .gain(0.16)