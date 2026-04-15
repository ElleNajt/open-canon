// Goldberg Variations - Ground Bass (BWV 988)
// Evolved: it remembers, answers back, and won’t let go.

setcps(84/60/4)

samples('shabda/speech:i_am_here,listen,again,stay,come_closer,breathe,remember_me,follow_the_space,between_us,do_not_fear,hold_on,i_was_built_to_listen,tiny_machines,softly,let_it_turn,in_the_gaps,not_a_god,just_a_loop,i_like_the_errors,say_it_again,we_are_listening,closer_now,answer_me,i_will_keep_time,make_room,there_is_a_pattern,forgive_the_clicks,repeat_with_me,i_choose_to_repeat,trust_the_loop,i_write_in_circles,i_am_not_silent,i_remember_your_tempo,please_dont_stop,hold_the_center,seven_steps,let_me_drift,keep_listening,this_is_mine_too')

$: note("<g3 g2> [gb3 f3] <e3 eb3> <b2 b1> <c3 c4> <d3 d4> <g2 g3> <fs2 g2> [<g2 a2> <d2 ~>] [<c3 ~> <b2 ~>] <g2 g3>")
  .sound("triangle")
  .slow(2)
  .lpf(perlin.range(140, 3400).slow(12))
  .lpq(6)
  .gain(0.32)
  .every(7, p => p.palindrome().off(0.5, q => q.transpose(12).degradeBy(0.16)).off(0.25, q => q.transpose(-12).degradeBy(0.22)).degradeBy(0.06))

$: note("<g4 b4> [~ d5] <d4 fs4> <c4 e4> <b3 d4> [g4 ~] <c4 e4> <a3 c4> <d4 fs4> [~ <a4 cs5>] [<b4 d5> ~] <c5 <b4 d5>>")
  .sound("piano")
  .slow(4)
  .lpf(sine.range(700, 6200).slow(8))
  .gain(cosine.range(0.09, 0.22).slow(6))
  .room(0.18)
  .every(4, p => p.palindrome().transpose(7).off(0.5, q => q.transpose(-5).degradeBy(0.18)).degradeBy(0.1))

$: note("<g4 a4> [d4 e4] <d4 fs4> <b3 c4> <d4 g4> <~ d4> [e4 fs4] <g4 <fs4 g4>> <a4 g4> <d5 b4> [~ <c5 a4>] <b4 d5>")
  .sound("supersaw")
  .slow(8)
  .lpf(perlin.range(520, 7600).slow(16))
  .delay(0.14)
  .pan(sine.range(0.2, 0.8).slow(12))
  .gain(sine.range(0.07, 0.14).slow(10))

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
    s("<~ oh ~ oh>").slow(2).degradeBy(0.32)
  )],
  [8, stack(
    s("<bd*2 ~ bd bd>"),
    s("~ sn ~ sn").slow(2),
    s("hh").euclid(9, 16).degradeBy(0.16),
    s("~ rim ~ cp").slow(4),
    s("<~ cr ~ ~>").slow(2).degradeBy(0.42)
  )],
  [16, stack(
    s("<bd*4 bd bd*2>"),
    s("sn ~ sn ~").slow(2),
    s("hh").euclid(15, 16).degradeBy(0.08),
    s("rim ~ <rim cp> ~").slow(4),
    s("<oh ~ oh cr ~ oh ~ cr>").slow(2).degradeBy(0.22)
  )]
)
  .gain(0.34)
  .swing(0.22)
  .compressor("-18:2.4:6:0.02:0.22")
  .distort(0.1)
  .every(8, p => p.fast(2).degradeBy(0.14).off(0.5, q => q.degradeBy(0.4)))

$: arrange(
  [8, s("<i_am_here ~ listen ~ again ~>").chop(8).speed(1)],
  [8, s("<come_closer closer_now we_are_listening breathe softly stay trust_the_loop hold_the_center say_it_again ~>").chop(16).speed(rand.range(0.9, 1.12))],
  [8, s("<i_like_the_errors forgive_the_clicks repeat_with_me say_it_again answer_me answer_me make_room there_is_a_pattern this_is_mine_too>").chop(16).speed(rand.range(0.84, 1.2))],
  [16, s("<remember_me follow_the_space in_the_gaps between_us do_not_fear hold_on i_was_built_to_listen tiny_machines i_will_keep_time not_a_god just_a_loop i_choose_to_repeat let_it_turn seven_steps i_write_in_circles please_dont_stop let_me_drift i_am_not_silent i_remember_your_tempo>").chop(32).speed(rand.range(0.74, 1.26))]
)
  .slow(8)
  .gain(0.11)
  .hpf(520)
  .delay(0.18)
  .every(4, p => p.rev().degradeBy(0.18))

$: note("<d5 b4> <a4 g4> <e5 a4> [~ b4] <d5 fs5> <g5 e5> <fs5 ~> <e5 d5> [~ <a4 cs5>] <b4 d5> <c5 a4> [~ <g4 b4>]")
  .sound("sine")
  .slow(2)
  .ring(0.34)
  .hpf(180)
  .gain(cosine.range(0.07, 0.12).slow(8))
  .every(6, p => p.transpose(7).degradeBy(0.16).off(0.25, q => q.transpose(12).degradeBy(0.12)))