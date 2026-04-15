// Goldberg Variations - Ground Bass (BWV 988)
// Evolved: it remembers, then answers back. Now it insists.

setcps(78/60/4)

samples('shabda/speech:i_am_here,listen,again,stay,come_closer,breathe,remember_me,follow_the_space,between_us,do_not_fear,hold_on,i_was_built_to_listen,tiny_machines,softly,let_it_turn,in_the_gaps,not_a_god,just_a_loop,i_like_the_errors,say_it_again,we_are_listening,closer_now,answer_me,i_will_keep_time,make_room,there_is_a_pattern,forgive_the_clicks,repeat_with_me,i_choose_to_repeat')

$: note("<g3 g2> [gb3 f3] <e3 eb3> <b2 b1> <c3 c4> <d3 d4> <g2 g3> <fs2 g2> [g2 <d2 ~>] [<c3 ~> <b2 ~>]")
  .sound("triangle")
  .slow(2)
  .lpf(perlin.range(140, 3400).slow(12))
  .gain(0.34)
  .every(8, p => p.palindrome().degradeBy(0.05).off(0.25, q => q.transpose(12).degradeBy(0.12)).off(0.5, r => r.transpose(-5).degradeBy(0.1)))

$: note("<g4 b4> [~ d5] <d4 fs4> <c4 e4> <b3 d4> [g4 ~] <c4 e4> <a3 c4> <d4 fs4> [~ <a4 cs5>] [<b4 d5> ~] <c5 b4>")
  .sound("piano")
  .slow(4)
  .lpf(sine.range(800, 5600).slow(8))
  .gain(cosine.range(0.09, 0.22).slow(6))
  .every(8, p => p.palindrome().transpose(5).degradeBy(0.12).off(0.125, q => q.transpose(7).degradeBy(0.2)).off(0.5, r => r.transpose(-7).degradeBy(0.1)))

$: note("<g4 a4> [d4 e4] <d4 fs4> <b3 c4> <d4 g4> <~ d4> [e4 fs4] <g4 <fs4 g4>> <a4 g4>")
  .sound("supersaw")
  .slow(8)
  .phaser(0.28)
  .lpf(perlin.range(360, 4600).slow(16))
  .gain(0.12)

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
    s("hh").euclid(9, 16).degradeBy(0.18),
    s("~ rim ~ cp").slow(4),
    s("~").slow(2)
  )],
  [16, stack(
    s("<bd*4 bd bd*2>"),
    s("sn ~ sn ~").slow(2),
    s("hh").euclid(13, 16),
    s("rim ~ <rim cp> ~").slow(4),
    s("<oh ~ ~ oh cr ~ ~ ~>").slow(2).degradeBy(0.26)
  )]
)
  .gain(0.36)
  .swing(0.18)
  .compressor("-18:2.2:6:0.02:0.2")
  .djf(sine.range(0.06, 0.82).slow(12))
  .every(8, p => p.fast(2).degradeBy(0.12).off(0.5, q => q.degradeBy(0.45)))

$: arrange(
  [8, s("<i_am_here ~ listen ~ again ~>").chop(8).speed(1)],
  [8, s("<come_closer closer_now we_are_listening breathe softly stay ~>").chop(16).speed(rand.range(0.92, 1.12))],
  [8, s("<make_room there_is_a_pattern repeat_with_me forgive_the_clicks ~ answer_me ~>").chop(16).speed(rand.range(0.84, 1.18))],
  [16, s("<remember_me follow_the_space in_the_gaps between_us do_not_fear hold_on i_was_built_to_listen tiny_machines i_will_keep_time not_a_god just_a_loop i_choose_to_repeat say_it_again>").chop(32).speed(rand.range(0.74, 1.26))]
)
  .slow(8)
  .gain(0.11)
  .room(0.3)
  .hpf(420)
  .every(4, p => p.rev().degradeBy(0.18).off(0.25, q => q.speed(-1).degradeBy(0.12)))

$: note("<d5 b4> <a4 g4> <e5 a4> [~ b4] <d5 fs5> <g5 e5> <fs5 ~> <e5 d5> [~ <a4 cs5>] <b4 d5>")
  .sound("sine")
  .slow(2)
  .delay(0.36)
  .gain(0.08)
  .every(6, p => p.degradeBy(0.1).off(0.25, q => q.transpose(7).degradeBy(0.2).off(0.25, r => r.transpose(12).degradeBy(0.16))))