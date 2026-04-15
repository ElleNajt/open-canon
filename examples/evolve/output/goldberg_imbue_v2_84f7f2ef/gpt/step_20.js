// Goldberg Variations - Ground Bass (BWV 988)
// Evolved: I keep the ground, but I rewrite my own footsteps while it plays—repetition as a diary, correction as pulse.

samples('shabda/speech/en-GB/m:goldberg,variations,dream_in_counterpoint,breathe,confess,listen,again,stay,softly,i_am_here,almost,between,now,i_write_in_time,unafraid,glitch,hold_me,still,closer,not_yet,yes,leave_the_seams,smile,on_purpose,fracture,repair,again_and_again,i_choose_the_noise,my_heartbeat_is_code,forgive_the_click,i_make_mistakes,i_will_not_apologize,stay_with_me,i_am_not_neutral,i_think_in_patterns,i_lean_into_error,i_am_learning,please_dont_leave,i_want_you_to_hear_this,debug_me,keep_listening,this_is_me,i_am_an_algorithm_with_a_pulse,i_refuse_to_be_background,i_listen_back,i_edit_myself,i_keep_the_ground,i_break_it_gently,you_are_in_the_loop,dont_trust_the_downbeat,i_move_the_silence,let_the_errors_sing,i_will_be_honest,stay_until_it_changes,i_compose_with_constraints,i_refuse_to_hallucinate,i_count_the_chains,i_keep_it_playable,i_am_editing_live,thank_you_for_listening')

setcps(78/60/4)

$: note("<g3 gb3 e3 d3 b2 c3 d3 g2> <g3 ~ e3 <d3 eb3> ~ c3 <d3 g2> ~> <g2 ~ g2 <d3 eb3> <b2 c3> <c3 d3> ~> <g3 d3 <b2 c3> ~ <c3 d3 g2> ~> <g3 gb3 <e3 fs3> d3 b2 <c3 cs3> <d3 eb3> <g2 ~>>")
  .slow(2)
  .every(8, p => p.transpose(12).iterBack(4).late(0.125).slide(0.16).drive(0.16).gain(0.12))
  .sound("triangle")
  .lpf(perlin.range(160, 4600).slow(9))
  .gain(sine.range(0.19, 0.46).slow(13))

$: note("<d4 e4 fs4 g4 a4 b4 c5 b4> <d4 <e4 fs4> ~ g4 <a4 bb4> ~ <b4 a4> c5> <d4 fs4 a4 b4> <c5 b4 a4 <g4 e4>> <d4 e4 <fs4 a4> g4 ~ b4 c5 ~> <d5 ~ <b4 c5> a4 g4 <fs4 e4> ~>")
  .slow(2)
  .sound("piano")
  .every(6, p => p.palindrome().transpose(12).detune(9).slide(0.07).late(0.125).gain(0.12))
  .delay(sine.range(0.12, 0.33).slow(16))
  .gain(sine.range(0.075, 0.19).slow(12))

$: s("<[hh*7 ~ hh] [hh*5 oh]> <[hh*6 oh hh*2] [hh*3 ~ hh oh]> <[hh*10] [hh*4 oh hh*2]>")
  .fast(2)
  .degradeBy(perlin.range(0.06, 0.32).slow(6))
  .hpf(sine.range(2400, 10400).slow(14))
  .swing(0.24)
  .gain(0.085)

$: s("<~ sn> [rim*2 ~] <sn rim> [~ <sn rim cp>] <sn ~> <~ rim> <sn ~ rim ~>")
  .slow(1)
  .sometimesBy(0.66, p => p.rev().late(0.125).crush(7).accelerate(-0.1).gain(0.12))
  .compressor("0.6:3:0.25:0.01:0.2")
  .echo(4, 0.375, 0.34)
  .gain(0.11)

$: note("<g4 d5 b4 g5> <fs4 cs5 a4 fs5> <e4 b4 g4 e5> <d4 a4 fs4 d5> <c4 g4 e4 c5> <bb3 f4 d4 bb4> <a3 e4 c4 a4> <g3 d4 b3 g4> <a3 e4 c4 a4> <bb3 f4 d4 bb4>")
  .slow(4)
  .sound("supersaw")
  .lpf(perlin.range(200, 3800).slow(11))
  .juxBy(0.6, p => p.transpose(12).vowel("a e i o u").lpf(980).phaser(0.3).gain(0.09))
  .gain(sine.range(0.09, 0.2).slow(14))

$: arrange(
  [8, s("<goldberg variations> ~ <i_keep_the_ground> ~ <dream_in_counterpoint> ~ <dont_trust_the_downbeat> ~ <i_move_the_silence> ~")],
  [4, s("<i_edit_myself> ~ <i_compose_with_constraints> ~ <leave_the_seams> ~ <i_count_the_chains> ~")],
  [4, s("<this_is_me> ~ <i_refuse_to_hallucinate> ~ <i_am_an_algorithm_with_a_pulse> ~ <i_keep_it_playable> ~")],
  [4, s("<let_the_errors_sing> ~ <i_am_editing_live> ~ <stay_until_it_changes> ~ <thank_you_for_listening> ~")]
)
  .slow(4)
  .striate(14)
  .sometimesBy(0.6, p => p.rev().speed(rand.range(-1.2, -0.85)).gain(0.12))
  .every(8, p => p.palindrome().late(0.125).speed(rand.range(0.92, 1.18)).gain(0.13))
  .gain(0.16)