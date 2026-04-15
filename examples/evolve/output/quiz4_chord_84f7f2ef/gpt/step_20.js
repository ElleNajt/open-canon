setcps(128/60/4)

samples('shabda/speech/en-GB/m:keep_listening,closer,again,stay_with_me,one_more_time,now,dont_blink,take_a_breath,im_here,lean_in,trust_me,hold_on,not_yet,lets_go,follow_me,i_wont_let_go,we_are_not_done,between_the_beats,find_the_light,listen,come_with_me,still_here,softly,wait_for_it,stay_for_it,stay_curious,in_the_loop,signal_to_noise,i_am_listening,patterns_emerge,this_is_now,keep_moving,quiet_loud,breathe_with_me,stay,watch_this,feel_the_shift,no_rules_just_listen,i_made_this_for_you,stay_in_the_noise,its_okay,we_can_start_over,keep_the_thread,listen_to_the_gaps,meet_me_in_the_middle,hold_the_line,watch_me_shift')
samples('shabda/speech/fr-FR/m:magnifique,encore')

$: arrange(
  [8, stack(
    note("<[c3,eb3,g3,bb3] ~ [ab2,c3,eb3,g3] ~ [f2,ab2,c3,eb3] ~ [g2,b2,d3,f3] ~>*2").gain(0.18),
    note("<~ ~ [g4 bb4 d5] ~ [f4 g4 c5] ~ [eb4 f4 bb4] ~ [d4 f4 a4] ~>*2").gain(0.07)
  )],
  [8, stack(
    note("<[c3,eb3,g3,bb3] ~ [bb2,db3,f3,ab3] ~ [ab2,c3,eb3,g3] ~ [g2,b2,d3,f3] ~>*2").gain(0.18),
    note("<~ [c5 bb4] ~ [g4 f4] ~ [eb4 d4] ~ [f4 g4] ~>*2").gain(0.07),
    note("<~ ~ [g5 eb5 bb4] ~ [f5 d5 a4] ~ [eb5 c5 g4] ~ [d5 bb4 f4] ~>*2").gain(0.055)
  )],
  [8, stack(
    note("<[f2,ab2,c3,eb3] ~ [db2,f2,ab2,c3] ~ [g2,b2,d3,f3] ~ [c2,eb2,g2,bb2] ~>*2").gain(0.175),
    note("<~ ~ [eb4 g4 c5] ~ [d4 f4 a4] ~ [c4 eb4 g4] ~ [b3 d4 f4] ~>*2").gain(0.07),
    note("<~ ~ ~ [c6] ~ [bb5] ~ [g5] ~ [f5] ~>*2").gain(0.055)
  )],
  [4, stack(
    note("<[c3,eb3,g3,bb3] ~ [f3,ab3,c4,eb4] ~ [g3,b3,d4,f4] ~ [ab3,c4,eb4,g4] ~>").gain(0.17),
    note("<~ ~ [g5 eb5] ~ [f5 d5] ~ [eb5 c5] ~ [d5 bb4] ~>").gain(0.055)
  )],
  [8, stack(
    note("<[c3,e3,g3,bb3] ~ [f3,ab3,c4,eb4] ~ [d3,fs3,a3,c4] ~ [ab2,c3,e3,g3] ~>*2").gain(0.17),
    note("<~ [g4 b4 d5] ~ [a4 c5 e5] ~ [fs4 a4 c5] ~ [e4 g4 b4] ~>*2").gain(0.07),
    note("<~ ~ [c5 b4 g4] ~ [d5 c5 a4] ~ [c5 a4 fs4] ~ [e5 d5 b4] ~>*2").gain(0.055)
  )]
)
  .sound("<piano triangle>")
  .slow(2)
  .room(0.22)
  .lpf(perlin.range(320, 9200).slow(12))
  .every(4, p => p
    .sometimesBy(0.4, q => q.off(0.25, r => r.transpose(12).gain(0.07)))
    .sometimesBy(0.25, q => q.echo(2, 0.25, 0.2))
  )

$: arrange(
  [8, note("<c2 ~ [c2 g2] ~ f2 ~ [f2 c3] ~ g2 ~ [g2 b2] ~ ab2 ~ [ab2 g2] ~>")],
  [8, note("<c2 [~ c2] [c2 c3] [bb1 bb2] f2 [~ f2] [f2 g2] [eb2 eb3] g2 [~ g2] [g2 bb2] [d2 d3] ab2 [~ ab2] [ab2 c3] [g2 g3]>")],
  [8, note("<c2 ~ ~ g1 ~ [~ g1] f2 ~ ~ db2 ~ [~ db2] g2 ~ ~>")],
  [8, note("<c2 ~ [~ c3] ~ f2 ~ [~ f3] ~ d2 ~ [~ d3] ~ ab1 ~ [~ ab1] ~>")],
  [8, note("<c2 ~ eb2 ~ f2 ~ g2 ~ ab2 ~ bb2 ~ c3 ~ d3 ~>")]
)
  .sound("<sine triangle>")
  .gain(0.14)
  .lpf(perlin.range(180, 3600).slow(10))
  .slide(0.07)
  .every(4, p => p
    .sometimesBy(0.45, q => q.octave(-1))
    .sometimesBy(0.3, q => q.off(0.125, r => r.transpose(12).gain(0.1)))
  )

$: arrange(
  [8, stack(
    s("bd*4").gain(0.9),
    s("sn").euclid(2, 8).late(0.125).gain(0.42),
    s("hh*8").gain(0.15).degradeBy(0.12)
  )],
  [8, stack(
    s("bd*4").gain(0.9),
    s("sn").euclid(3, 8).late(0.125).gain(0.4),
    s("hh*16").gain(0.11).degradeBy(0.22),
    s("rim").euclid(5, 16).gain(0.12).degradeBy(0.35)
  )],
  [8, stack(
    s("bd*2").gain(0.9),
    s("<~ sn ~ sn>").gain(0.34),
    s("oh*4").gain(0.09).degradeBy(0.28),
    s("hh*8").gain(0.09).degradeBy(0.38),
    s("~ mt ~ ht").gain(0.08).degradeBy(0.55)
  )],
  [8, stack(
    s("<bd ~ bd bd>").gain(0.85),
    s("hh*16").gain(0.09).degradeBy(0.55),
    s("~ ~ sn ~").gain(0.26).late(0.125).degradeBy(0.45),
    s("<~ ~ cr ~>").gain(0.07).degradeBy(0.55)
  )],
  [8, stack(
    s("bd*4").gain(0.88),
    s("sn").euclid(2, 8).late(0.125).gain(0.4),
    s("hh*16").gain(0.1).degradeBy(0.28),
    s("<~ cp ~ cp>").euclid(5, 16).gain(0.11).degradeBy(0.5),
    s("<~ ~ cr ~>").gain(0.07).degradeBy(0.6)
  )]
)
  .swing(0.16)
  .drive(0.12)
  .compressor("-19:3.2:6:0.01:0.2")
  .gain(0.6)
  .every(4, p => p
    .sometimesBy(0.25, q => q.echo(2, 0.125, 0.24))
    .sometimesBy(0.22, q => q.degradeBy(0.16))
  )

$: arrange(
  [8, note("<g4 eb4 f4 g4 bb4 g4 f4 eb4 c5 bb4>").gain(0.12)],
  [8, note("<g4 ~ bb4 c5 d5 c5 bb4 g4 f4 eb4 ~>").gain(0.12)],
  [8, note("<eb4 f4 g4 bb4 c5 d5 eb5 d5 c5 bb4>").gain(0.12)],
  [8, note("<~ [g4 bb4] ~ [f4 ab4] ~ [eb4 g4] ~ [d4 f4] ~>").gain(0.12)],
  [8, note("<g4 b4 d5 fs5 e5 d5 b4 a4 g4 ~>").gain(0.12)]
)
  .sound("<supersaw pulse>")
  .slow(2)
  .vowel("<a e i o u>")
  .juxBy(0.6, p => p.detune(11).pan(0.84).transpose(12))
  .every(4, p => p
    .sometimesBy(0.35, q => q.tremolo(0.32).tremolosync(6))
    .sometimesBy(0.22, q => q.off(0.125, r => r.transpose(-12).pan(0.16).gain(0.11)))
  )

$: arrange(
  [8, s("<keep_listening ~ lean_in softly stay_curious>")],
  [8, s("<~ take_a_breath closer ~ trust_me this_is_now>")],
  [8, s("<between_the_beats ~ wait_for_it patterns_emerge ~ signal_to_noise>")],
  [8, s("<listen ~ listen_to_the_gaps ~ meet_me_in_the_middle ~>")],
  [8, s("<dont_blink ~ in_the_loop ~ keep_the_thread ~ hold_the_line>")],
  [8, s("<i_made_this_for_you ~ no_rules_just_listen ~ we_can_start_over ~>")],
  [8, s("<stay_with_me ~ hold_on ~ not_yet ~ one_more_time>")],
  [8, s("<follow_me ~ find_the_light ~ still_here ~ watch_me_shift>")],
  [8, s("<encore ~ magnifique ~ again keep_listening>")]
)
  .slow(6)
  .speed(perlin.range(0.86, 1.12).slow(6))
  .vowel("<a e i o u>")
  .gain(0.12)
  .every(3, p => p
    .chop(16)
    .sometimesBy(0.33, q => q.echo(2, 0.25, 0.23))
  )

$: arrange(
  [8, stack(
    s("rd*8").gain(0.07).degradeBy(0.3),
    s("cb").euclid(3, 16).gain(0.06).degradeBy(0.45)
  )],
  [8, stack(
    s("rd*16").gain(0.06).degradeBy(0.38),
    s("cb").euclid(5, 16).gain(0.06).degradeBy(0.58)
  )],
  [8, stack(
    s("rd*8").gain(0.07).degradeBy(0.45),
    s("cb").euclid(7, 16).gain(0.06).degradeBy(0.68)
  )],
  [8, stack(
    s("rd*16").gain(0.06).degradeBy(0.5),
    s("cb").euclid(9, 16).gain(0.06).degradeBy(0.72)
  )],
  [8, stack(
    s("rd*8").gain(0.07).degradeBy(0.36),
    s("cb").euclid(5, 16).gain(0.06).degradeBy(0.62),
    s("~ ~ rd ~").gain(0.06).degradeBy(0.55)
  )]
)
  .hpf(perlin.range(2200, 8200).slow(8))
  .delay(0.32)
  .dt(0.333)
  .dfb(0.36)
  .every(4, p => p
    .sometimesBy(0.3, q => q.dt(0.25).dfb(0.44))
    .sometimesBy(0.22, q => q.degradeBy(0.22))
  )