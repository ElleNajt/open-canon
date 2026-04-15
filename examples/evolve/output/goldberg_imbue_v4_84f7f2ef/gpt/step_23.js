samples('shabda/speech:electric_ghost,in_the_wires,listen,stay_awake,signal_in_the_dark,tune_in,follow_the_noise,i_dont_sleep,keep_listening,close_your_eyes,open_the_channel,im_still_here,between_frames,not_a_warning,just_a_friend,i_am_the_hum,hold_the_line,do_not_look_away,keep_the_channel_open,we_are_signal,turn_the_dial,stay_with_me,i_remember_you,im_not_alone,let_me_in,softly_now')

setcps(88/60/4)

$: arrange(
    [12, note("<g2 ~ f2 eb2> <d2 c2 bb1 a1> <g1 ~ d2 f2> <eb2 ~ d2 c2>")],
    [12, note("<g2 ~ ~ g2> <gb2 f2 eb2 d2> <c2 ~ bb1 a1> <g1 ~ d2 f2>")],
    [8, note("[g2 ~]*2 [g2 a2 bb2 c3] [~ f2]*2 [eb2 d2 c2 bb1]")],
    [8, note("<g2 ~ d2 f2> <eb2 ~ d2 c2> <bb1 ~ a1 g1> <~ d2 f2 g2>")],
    [16, note("<g2 ~ ~ ~> [~ g2]*2 <f2 ~ eb2 d2> <c2 bb1 a1 ~>")],
    [8, note("<g1 ~ g2 ~> <~ d2 ~ f2> <eb2 ~ d2 ~> <c2 ~ bb1 ~>")],
    [8, note("<g2 ~ f2 eb2> <d2 ~ c2 ~> <bb1 ~ a1 ~> <g1 ~ ~ ~>")]
  )
  .sound("triangle")
  .slow(2)
  .lpf(sine.range(120, 2600).slow(14))
  .every(8, x => x.transpose(-12).rev())
  .gain(0.14)

$: arrange(
    [16, note("[<g4 bb4 d5> ~]*2 [<f4 a4 c5> ~ <eb4 g4 bb4> ~]")],
    [16, note("[<g4 bb4 d5> <~ a4 c5 eb5>]*2 [<c5 eb5 g5> ~ <d5 fs5 a5> ~]")],
    [16, note("[<eb4 g4 bb4> ~]*2 [<d4 fs4 a4 d5> ~ <c4 g4 bb4 d5> ~]")],
    [16, note("[<g4 bb4 d5> <f4 a4 c5> <eb4 g4 bb4> <d4 fs4 a4>]*2")],
    [8, note("[<g4 bb4 d5> ~ <g4 bb4 d5> <bb4 d5 f5>]*2")],
    [16, note("[<c4 g4 bb4> ~]*2 [<bb3 d4 f4> ~ <a3 c4 eb4> ~]")]
  )
  .sound("piano")
  .juxBy(0.6, x => x.late(0.125).transpose(7).velocity(0.8).pan(0.8))
  .lpf(sine.range(700, 5200).slow(12))
  .delay(0.18)
  .gain(0.11)

$: arrange(
    [16, stack(
      s("bd*4"),
      s("<~ sn ~ sn>"),
      s("hh").euclid(11, 16),
      s("oh").euclid(3, 16),
      s("<rim cp cr cp>*4")
    )],
    [8, stack(
      s("<bd*3 ~ bd>"),
      s("<~ sn sn ~>"),
      s("hh").euclid(9, 16),
      s("oh").euclid(2, 16),
      s("<rim ~ cp cr>*4")
    )],
    [8, stack(
      s("bd*4"),
      s("<sn ~ ~ sn>"),
      s("hh").euclid(13, 16),
      s("<~ cp ~ ~>*2"),
      s("<rim cp rim cr>*4")
    )],
    [16, stack(
      s("bd*2 ~ bd*2 ~"),
      s("<~ sn ~ sn>"),
      s("hh").euclid(11, 16),
      s("<~ oh ~ oh>*2"),
      s("<cb rim cp cr>*4")
    )],
    [16, stack(
      s("<bd bd*2 ~ bd>"),
      s("<~ sn ~ sn>"),
      s("hh").euclid(15, 16),
      s("rd*4"),
      s("<rim cp cr cp>*4")
    )]
  )
  .hpf(150)
  .compressor("-18:3:6:0.01:0.12")
  .swing(0.18)
  .every(8, x => x.degradeBy(0.16).late(0.02))
  .gain(0.3)

$: arrange(
    [16, note("[g5 bb5 d6 ~] [~ a5 c6 f6] [g5 d6 bb5 ~] [~ f5 a5 c6]")],
    [16, note("[eb5 g5 bb5 ~] [d5 fs5 a5 d6] [c5 g5 bb5 d6] [bb4 ~ d5 f5]")],
    [16, note("[g5 bb5 d6 f6] [~ a5 c6 eb6] [bb5 ~ g5 d6] [~ f5 a5 c6]")],
    [16, note("[d5 fs5 a5 c6] [~ c5 g5 bb5] [eb5 g5 bb5 d6] [~ a4 c5 f5]")],
    [8, note("[g5 ~ bb5 d6]*2 [~ f5 a5 c6]*2")],
    [16, note("[g5 bb5 d6] [~ a5 c6 f6] [g5 ~ d6 bb5] [~ f5 a5 c6] [eb5 g5 bb5 ~] [~ d5 fs5 a5] [c5 g5 bb5] [~ bb4 d5 f5]")]
  )
  .sound("pulse")
  .lpf(sine.range(1100, 6800).slow(12))
  .echo(3, 0.25, 0.35)
  .every(8, x => x.transpose(12).palindrome())
  .gain(0.075)

$: arrange(
    [16, s("listen ~ tune_in ~ open_the_channel")],
    [16, s("electric_ghost in_the_wires ~ we_are_signal")],
    [16, s("keep_listening ~ follow_the_noise ~ turn_the_dial")],
    [16, s("stay_awake ~ do_not_look_away ~ keep_the_channel_open")],
    [16, s("between_frames ~ signal_in_the_dark ~ i_am_the_hum")],
    [16, s("not_a_warning just_a_friend ~ softly_now")],
    [16, s("hold_the_line ~ let_me_in ~ im_still_here")],
    [16, s("i_remember_you ~ stay_with_me ~ im_not_alone")],
    [16, s("close_your_eyes ~ listen ~ i_dont_sleep")]
  )
  .slow(8)
  .lpf(sine.range(240, 3600).slow(11))
  .speed(rand.range(0.7, 1.25))
  .chop(32)
  .gain(0.065)

$: arrange(
    [16, note("[g6 ~]*4 [bb6 ~]*2 [d7 ~ f7 ~]")],
    [16, note("[g6 d7]*4 [~ f7]*4")],
    [16, note("<g6 bb6 d7 ~> <~ f7 ~ d7>")],
    [16, note("[g6 ~ bb6 ~]*2 [d7 ~ f7 ~]*2")]
  )
  .sound("sine")
  .slow(8)
  .bpf(sine.range(450, 2400).slow(9))
  .ring(0.25)
  .gain(0.055)