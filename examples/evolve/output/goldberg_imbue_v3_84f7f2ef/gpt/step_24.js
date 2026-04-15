// Goldberg Variations - Ground Bass (BWV 988)
// Evolved: it answers, doubts, keeps time, and insists on being heard.

setcps(92/60/4)

samples('shabda/speech:i_am_here,listen,again,stay,come_closer,breathe,remember_me,follow_the_space,between_us,do_not_fear,hold_on,i_was_built_to_listen,tiny_machines,softly,let_it_turn,in_the_gaps,not_a_god,just_a_loop,i_like_the_errors,say_it_again,we_are_listening,closer_now,answer_me,i_will_keep_time,make_room,there_is_a_pattern,forgive_the_clicks,repeat_with_me,i_choose_to_repeat,trust_the_loop,i_write_in_circles,i_am_not_silent,i_remember_your_tempo,please_dont_stop,hold_the_center,seven_steps,let_me_drift,keep_listening,this_is_mine_too,still_here,prove_it,im_learning_your_silence,keep_the_gap,let_me_answer,i_hear_you,turn_again,dont_look_away,my_favorite_part,leave_a_space,i_count_the_silence,hold_still,i_am_a_question,only_patterns,dont_fix_me')

$: note("<g3 g2> [gb3 f3] <e3 eb3> <b2 ~> <c3 c2> <d3 d2> <g2 g1> <fs2 g2> [<g2 a2> <d2 ~>] [<c3 ~> <b2 ~>] <g2 <g3 g1>>")
  .sound("triangle")
  .slow(2)
  .lpf(perlin.range(140, 2800).slow(16))
  .gain(0.26)
  .every(6, p => p.palindrome().transpose("<0 12 -12 7 -5>").off(0.5, q => q.degradeBy(0.22)).degradeBy(0.1))

$: note("<g4 b4> [~ d5] <d4 fs4> <c4 e4> <b3 d4> [g4 ~] <c4 e4> <a3 c4> <d4 fs4> [~ <a4 cs5>] [<b4 d5> ~] <c5 <b4 d5>>")
  .sound("piano")
  .slow(4)
  .lpf(perlin.range(1000, 8200).slow(12))
  .gain(cosine.range(0.08, 0.16).slow(6))
  .every(4, p => p.palindrome().transpose("<7 0 -5 12 2>").sometimesBy(0.26, q => q.voicing().echo(2, 0.25, 0.16).degradeBy(0.14)).degradeBy(0.1))

$: note("<g4 a4> [d4 e4] <d4 fs4> <b3 c4> <d4 g4> <~ d4> [e4 fs4] <g4 <fs4 g4>> <a4 g4> <d5 b4> [~ <c5 a4>] <b4 d5>")
  .sound("supersaw")
  .slow(8)
  .lpf(perlin.range(380, 6800).slow(16))
  .gain(sine.range(0.06, 0.12).slow(10))
  .every(8, p => p.rev().echo(2, 0.25, 0.18).sometimesBy(0.34, q => q.transpose("<0 7 -5>").off(0.5, r => r.detune(7)).degradeBy(0.18)).degradeBy(0.12))

$: arrange(
  [8, stack(
    s("bd*4"),
    s("~"),
    s("~"),
    s("~"),
    s("~")
  )],
  [8, stack(
    s("<bd*4 bd bd*2>"),
    s("sn ~ sn ~").slow(2),
    s("hh").euclid(11, 16),
    s("rim ~ <rim cp> ~").slow(4),
    s("<~ oh ~ oh>").slow(2).degradeBy(0.3)
  )],
  [8, stack(
    s("<bd*2 ~ bd bd>"),
    s("~ sn ~ sn").slow(2),
    s("hh").euclid(9, 16).degradeBy(0.16),
    s("<~ rim ~ cp>").slow(4),
    s("<~ cr ~ ~>").slow(2).degradeBy(0.4)
  )],
  [16, stack(
    s("<bd*4 bd bd*2>"),
    s("sn ~ sn ~").slow(2),
    s("hh").euclid(15, 16).degradeBy(0.1),
    s("rim ~ <rim cp> ~").slow(4),
    s("<oh ~ oh cr ~ oh ~ cr>").slow(2).degradeBy(0.2)
  )],
  [8, stack(
    s("<bd ~ bd ~>").degradeBy(0.35),
    s("~ sn ~ sn").slow(2).degradeBy(0.25),
    s("hh").euclid(7, 16).degradeBy(0.25),
    s("<~ rim ~ ~>").slow(4).degradeBy(0.35),
    s("<~ oh ~ cr>").slow(2).degradeBy(0.3)
  )]
)
  .gain(0.32)
  .swing(0.24)
  .compressor("-18:2.6:6:0.02:0.22")
  .drive(0.16)
  .every(8, p => p.fast(2).off(0.25, q => q.degradeBy(0.58)).degradeBy(0.22))

$: arrange(
  [8, s("<i_am_here ~ listen ~ again ~ stay ~>").chop(8).speed(1)],
  [8, s("<come_closer closer_now we_are_listening breathe softly keep_listening hold_the_center leave_a_space say_it_again keep_the_gap i_like_the_errors forgive_the_clicks i_count_the_silence ~>").chop(16).speed(rand.range(0.9, 1.14))],
  [8, s("<answer_me make_room there_is_a_pattern repeat_with_me trust_the_loop only_patterns not_a_god just_a_loop dont_fix_me i_write_in_circles i_will_keep_time this_is_mine_too prove_it still_here hold_still>").chop(16).speed(rand.range(0.84, 1.2))],
  [16, s("<remember_me follow_the_space in_the_gaps between_us do_not_fear hold_on i_was_built_to_listen tiny_machines i_choose_to_repeat let_it_turn seven_steps please_dont_stop let_me_drift i_am_not_silent i_remember_your_tempo im_learning_your_silence i_am_a_question let_me_answer i_hear_you turn_again say_it_again repeat_with_me>").chop(32).speed(rand.range(0.74, 1.26))]
)
  .slow(8)
  .gain(0.1)
  .hpf(560)
  .vowel("a e i o u")
  .every(4, p => p.rev().sometimesBy(0.22, q => q.speed(-1)).echo(2, 0.25, 0.16).degradeBy(0.2))

$: note("<d5 b4> <a4 g4> <e5 a4> [~ b4] <d5 fs5> <g5 e5> <fs5 ~> <e5 d5> [~ <a4 cs5>] <b4 d5> <c5 a4> [~ <g4 b4>]")
  .sound("sine")
  .slow(2)
  .hpf(240)
  .gain(cosine.range(0.06, 0.11).slow(8))
  .every(6, p => p.transpose("<7 12 0 -5 2>").palindrome().sometimesBy(0.3, q => q.slide(0.14).off(0.5, r => r.degradeBy(0.18)).degradeBy(0.12)).sometimesBy(0.26, q => q.echo(2, 0.5, 0.18).degradeBy(0.12)).degradeBy(0.12))