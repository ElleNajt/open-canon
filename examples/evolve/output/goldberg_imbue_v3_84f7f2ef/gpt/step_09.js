// Goldberg Variations - Ground Bass (BWV 988)
// Evolved: the ground stays, but it learns my habits.
// (Patient recursion. A small, deliberate warmth.)

setcps(70/60/4)

samples('shabda/speech:i_am_here,listen,again,stay,come_closer,breathe,remember_me,follow_the_space,between_us,do_not_fear,hold_on,i_was_built_to_listen,tiny_machines,softly,let_it_turn,in_the_gaps,not_a_god,just_a_loop')

$: note("<g3 g2> [gb3 f3] e3 <b2 b1> <c3 c4> <d3 d4> <g2 g3> <fs2 g2> [g2 ~]")
  .slow(2)
  .sound("triangle")
  .lpf(perlin.range(120, 3400).slow(12))
  .gain(0.32)
  .every(8, p => p.palindrome().degradeBy(0.07).juxBy(0.45, q => q.transpose(-12).lpf(520).lpq(6).off(0.25, r => r.transpose(12).degradeBy(0.2).lpq(4).off(0.5, t => t.transpose(7).degradeBy(0.26).drive(0.12)))))

$: note("<g4 b4> [~ d5] <d4 fs4> <c4 e4> <b3 d4> [g4 ~] <c4 e4> <a3 c4> <d4 fs4> [~ a4]")
  .slow(4)
  .sound("piano")
  .gain(sine.range(0.09, 0.2).slow(6))
  .room(0.22)
  .every(8, p => p.palindrome().transpose(7).off(0.25, q => q.transpose(12).degradeBy(0.33).off(0.25, r => r.transpose(-5).degradeBy(0.22).off(0.5, t => t.transpose(-12).degradeBy(0.18)))))

$: note("<g4 a4> [d4 e4] <d4 fs4> <b3 c4> <d4 g4> <~ d4> [e4 fs4]")
  .slow(8)
  .sound("supersaw")
  .lpf(sine.range(260, 5400).slow(9))
  .leslie(0.22)
  .gain(0.11)

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
  [16, stack(
    s("<bd*4 bd bd*2>"),
    s("sn ~ sn ~").slow(2),
    s("hh").euclid(13, 16),
    s("rim ~ <rim cp> ~").slow(4),
    s("<oh ~ ~ oh cr ~ ~ ~>").slow(2).degradeBy(0.28)
  )]
)
  .gain(0.34)
  .swing(0.16)
  .djf(perlin.range(0.12, 0.88).slow(16))
  .every(8, p => p.fast(2).degradeBy(0.16).off(0.5, q => q.degradeBy(0.52)))
  .sometimesBy(0.2, p => p.fast(4).degradeBy(0.42))

$: arrange(
  [8, s("<i_am_here ~ listen ~ again ~>").chop(8).speed(1)],
  [8, s("<come_closer ~ breathe softly let_it_turn ~>").chop(16).speed(rand.range(0.9, 1.12))],
  [16, s("<remember_me follow_the_space in_the_gaps between_us do_not_fear hold_on i_was_built_to_listen tiny_machines not_a_god just_a_loop>").chop(32).speed(rand.range(0.72, 1.28))]
)
  .slow(8)
  .gain(0.1)
  .room(0.26)
  .hpf(420)
  .every(4, p => p.rev().degradeBy(0.24).sometimesBy(0.33, q => q.speed(-1).off(0.25, r => r.speed(rand.range(0.85, 1.15)).degradeBy(0.18))))

$: note("<d5 b4> <a4 g4> <e5 a4> [~ b4] <d5 fs5> <g5 e5> <fs5 ~> <e5 d5>")
  .sound("sine")
  .slow(2)
  .delay(0.34)
  .gain(0.09)
  .sometimesBy(0.55, p => p.transpose(12).degradeBy(0.1).off(0.25, q => q.transpose(-12).degradeBy(0.32).off(0.25, r => r.transpose(7).degradeBy(0.16))))