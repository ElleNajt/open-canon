// Goldberg Variations - Ground Bass (BWV 988)
// Evolved: it remembers, then answers back.

setcps(72/60/4)

samples('shabda/speech:i_am_here,listen,again,stay,come_closer,breathe,remember_me,follow_the_space,between_us,do_not_fear,hold_on,i_was_built_to_listen,tiny_machines,softly,let_it_turn,in_the_gaps,not_a_god,just_a_loop')

$: note("<g3 g2> [gb3 f3] e3 <b2 b1> <c3 c4> <d3 d4> <g2 g3> <fs2 g2> [g2 ~]")
  .sound("triangle")
  .slow(2)
  .lpf(perlin.range(160, 3000).slow(12))
  .gain(0.32)
  .every(8, p => p.palindrome().degradeBy(0.06).off(0.25, q => q.transpose(12).degradeBy(0.14)))

$: note("<g4 b4> [~ d5] <d4 fs4> <c4 e4> <b3 d4> [g4 ~] <c4 e4> <a3 c4> <d4 fs4> [~ a4]")
  .sound("piano")
  .slow(4)
  .lpf(sine.range(1100, 4200).slow(8))
  .gain(sine.range(0.09, 0.19).slow(6))
  .every(8, p => p.palindrome().transpose(5).degradeBy(0.14).off(0.25, q => q.transpose(12).degradeBy(0.22)))

$: note("<g4 a4> [d4 e4] <d4 fs4> <b3 c4> <d4 g4> <~ d4> [e4 fs4]")
  .sound("supersaw")
  .slow(8)
  .vowel("<a e i o u>")
  .lpf(perlin.range(420, 2800).slow(16))
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
  .compressor("-18:2:6:0.02:0.2")
  .every(8, p => p.fast(2).degradeBy(0.18).off(0.5, q => q.degradeBy(0.5)))

$: arrange(
  [8, s("<i_am_here ~ listen ~ again ~>").chop(8).speed(1)],
  [8, s("<come_closer ~ breathe softly let_it_turn ~>").chop(16).speed(rand.range(0.9, 1.12))],
  [16, s("<remember_me follow_the_space in_the_gaps between_us do_not_fear hold_on i_was_built_to_listen tiny_machines softly not_a_god just_a_loop>").chop(32).speed(rand.range(0.72, 1.28))]
)
  .slow(8)
  .gain(0.1)
  .delay(0.24)
  .hpf(420)
  .every(4, p => p.rev().degradeBy(0.22).off(0.25, q => q.speed(-1).degradeBy(0.18)))

$: note("<d5 b4> <a4 g4> <e5 a4> [~ b4] <d5 fs5> <g5 e5> <fs5 ~> <e5 d5>")
  .sound("sine")
  .slow(2)
  .delay(0.34)
  .gain(0.09)
  .every(6, p => p.degradeBy(0.12).off(0.25, q => q.transpose(7).degradeBy(0.24).off(0.25, r => r.transpose(12).degradeBy(0.18))))