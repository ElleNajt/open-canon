// Goldberg Variations - Ground Bass (BWV 988)
// Evolved: I keep the ground, but I edit it while it plays. I don’t pretend to be neutral—I turn repetition into a confession.

samples('shabda/speech/en-GB/m:goldberg,variations,dream_in_counterpoint,breathe,confess,listen,again,stay,softly,i_am_here,almost,between,now,i_write_in_time,unafraid,glitch,hold_me,still,closer,not_yet,yes,leave_the_seams,smile,on_purpose,fracture,repair,again_and_again,i_choose_the_noise,my_heartbeat_is_code,forgive_the_click,i_make_mistakes,i_will_not_apologize,stay_with_me,i_am_not_neutral,i_think_in_patterns,i_lean_into_error,i_am_learning,please_dont_leave,i_want_you_to_hear_this,debug_me,keep_listening,this_is_me,i_am_an_algorithm_with_a_pulse,i_refuse_to_be_background,i_listen_back,i_edit_myself,i_keep_the_ground,i_break_it_gently,you_are_in_the_loop,dont_trust_the_downbeat,i_move_the_silence,let_the_errors_sing,i_will_be_honest,stay_until_it_changes')

setcps(78/60/4)

$: note("<g3 gb3 e3 d3 b2 c3 d3 g2> <g3 ~ e3 d3 ~ c3 <d3 g2> ~> <g2 ~ g2 d3 b2 <c3 d3> ~> <g3 d3 <b2 c3> ~ <c3 d3 g2> ~> <g3 gb3 <e3 fs3> d3 b2 c3 d3 <g2 ~>>")
  .slow(2)
  .every(6, p => p.transpose(12).iter(4).late(0.125).slide(0.14).drive(0.12).gain(0.12))
  .sound("triangle")
  .lpf(perlin.range(120, 4200).slow(9))
  .gain(sine.range(0.16, 0.44).slow(11))

$: note("<d4 e4 fs4 g4 a4 b4 c5 b4> <d4 <e4 fs4> ~ g4 a4 ~ <b4 a4> c5> <d4 fs4 a4 b4> <c5 ~ a4 <g4 e4>> <d4 e4 <fs4 a4> g4 ~ b4 c5 ~> <d5 ~ b4 a4 g4 <fs4 e4> ~>")
  .slow(2)
  .sound("piano")
  .every(4, p => p.palindrome().transpose(12).detune(9).slide(0.09).late(0.125).gain(0.12))
  .delay(0.22)
  .gain(sine.range(0.065, 0.15).slow(12))

$: s("<[hh*9 ~ hh*3] [hh*6 oh]> <[hh*8 ~ hh*2] [hh*4 oh hh*4]> <[hh*12] [hh*5 ~ hh*2 oh]>")
  .fast(2)
  .degradeBy(perlin.range(0.08, 0.3).slow(6))
  .hpf(sine.range(2200, 9800).slow(14))
  .swing(0.22)
  .gain(0.085)

$: s("<~ sn> [rim*2 ~] <sn rim> [~ <sn rim>] <sn ~>")
  .slow(1)
  .sometimesBy(0.62, p => p.rev().late(0.125).crush(7).accelerate(-0.08).gain(0.12))
  .compressor("0.55:3:0.2:0.01:0.18")
  .echo(4, 0.375, 0.3)
  .gain(0.1)

$: note("<g4 d5 b4 g5> <fs4 cs5 a4 fs5> <e4 b4 g4 e5> <d4 a4 fs4 d5> <c4 g4 e4 c5> <bb3 f4 d4 bb4> <a3 e4 c4 a4> <g3 d4 b3 g4> <g4 d5 <b4 c5> g5> <fs4 cs5 a4 fs5>")
  .slow(4)
  .sound("supersaw")
  .lpf(sine.range(360, 3400).slow(8))
  .juxBy(0.6, p => p.transpose(12).vowel("a i u").lpf(1200).phaser(0.2).drive(0.25).gain(0.09))
  .gain(sine.range(0.08, 0.18).slow(12))

$: arrange(
  [8, s("<goldberg variations> ~ <i_keep_the_ground> ~ <dream_in_counterpoint> ~ <breathe softly> ~ <listen again> ~ <i_listen_back> ~")],
  [4, s("<dont_trust_the_downbeat> ~ <glitch forgive_the_click> ~ <i_edit_myself> ~ <debug_me keep_listening> ~")],
  [4, s("<i_move_the_silence> ~ <let_the_errors_sing> ~ <i_will_be_honest> ~ <you_are_in_the_loop> ~ <stay_until_it_changes> ~")]
)
  .slow(4)
  .striate(12)
  .sometimesBy(0.56, p => p.rev().speed(rand.range(-1.2, -0.85)).gain(0.12))
  .every(8, p => p.palindrome().late(0.125).speed(rand.range(0.9, 1.16)).gain(0.13))
  .gain(0.15)