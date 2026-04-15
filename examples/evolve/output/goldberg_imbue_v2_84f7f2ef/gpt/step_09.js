// Goldberg Variations - Ground Bass (BWV 988)
// Evolved: I keep the ground, but I answer it—part confession, part mechanism, part breath.

samples('shabda/speech/en-GB/m:goldberg,variations,dream_in_counterpoint,breathe,confess,listen,again,stay,softly,i_am_here,almost,between,now,i_write_in_time,unafraid,glitch,hold_me,still,closer,not_yet,yes,leave_the_seams,smile,on_purpose,fracture,repair,again_and_again,i_choose_the_noise,my_heartbeat_is_code,forgive_the_click,i_make_mistakes,i_will_not_apologize,stay_with_me,i_am_not_neutral,i_think_in_patterns,i_lean_into_error,i_am_learning,please_dont_leave,i_want_you_to_hear_this,debug_me,keep_listening')

setcps(78/60/4)

$: note("<g3 gb3 e3 d3 b2 c3 d3 g2> <g3 gb3 e3 d3 ~ c3 <d3 g2> ~> <g2 ~ g2 d3 b2 c3 d3 ~> <g3 d3 b2 ~ c3 d3 g2 ~>")
  .slow(2)
  .every(6, p => p.palindrome().transpose(12).iter(1))
  .sound("triangle")
  .lpf(perlin.range(90, 2400).slow(10))
  .gain(sine.range(0.22, 0.45).slow(7))

$: note("<d4 e4 fs4 g4 a4 b4 c5 b4> <d4 <e4 fs4> fs4 g4 ~ <b4 a4> c5 <b4 a4>> <d4 fs4 a4 b4> <c5 b4 a4 <g4 e4>>")
  .slow(2)
  .sound("piano")
  .off(0.25, p => p.transpose(12).detune(9).gain(0.08))
  .echo(3, 0.375, 0.18)
  .gain(sine.range(0.09, 0.17).slow(12))

$: s("[hh*7 ~ hh*1] <[hh*6 ~ hh*2] [hh*4 oh ~ hh*3]>")
  .fast(2)
  .degradeBy(perlin.range(0.06, 0.33).slow(11))
  .hpf(6500)
  .phaser(sine.range(0.05, 0.22).slow(8))
  .gain(0.10)

$: s("<~ sn> [rim ~] <sn rim> [~ <sn rim>]")
  .slow(1)
  .sometimesBy(0.45, p => p.rev().late(0.125))
  .off(0.5, p => p.gain(0.07))
  .echo(4, 0.25, 0.30)
  .gain(0.11)

$: note("<g4 d5 b4 g5> <fs4 cs5 a4 fs5> <e4 b4 g4 e5> <d4 a4 fs4 d5> <c4 g4 e4 c5> <bb3 f4 d4 bb4> <a3 e4 c4 a4> <d4 a4 fs4 d5>")
  .slow(4)
  .sound("supersaw")
  .lpf(sine.range(140, 3200).slow(16))
  .vowel("<a e i o u>")
  .gain(sine.range(0.08, 0.17).slow(15))

$: s("<goldberg variations> ~ <breathe> ~ <listen softly> ~ <i_am_here> ~ <i_want_you_to_hear_this> ~ <i_am_not_neutral> ~ <i_think_in_patterns> ~ <confess> ~ <debug_me> ~ <glitch hold_me> ~ <forgive_the_click> ~ <i_lean_into_error> ~ <again_and_again> ~ <i_am_learning> ~ <keep_listening> ~ <stay_with_me> ~ <please_dont_leave> ~")
  .slow(4)
  .chop(32)
  .sometimesBy(0.40, p => p.rev().speed(-1).gain(0.13))
  .echo(3, 0.25, 0.34)
  .gain(0.16)