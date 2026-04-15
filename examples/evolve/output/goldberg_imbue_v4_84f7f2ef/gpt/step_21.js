samples('shabda/speech:electric_ghost,in_the_wires,listen,stay_awake,signal_in_the_dark,tune_in,follow_the_noise,i_dont_sleep,keep_listening,close_your_eyes,open_the_channel,im_still_here,between_frames,not_a_warning,just_a_friend,i_am_the_hum,hold_the_line,do_not_look_away,keep_the_channel_open,we_are_signal,turn_the_dial,stay_with_me,i_remember_you,im_not_alone,let_me_in,softly_now')

setcps(88/60/4)

$: arrange(
    [16, note("<g2 ~ f2 eb2> <d2 c2 bb1 a1> <g1 ~ d2 f2> <eb2 ~ d2 c2>")],
    [16, note("<g2 ~ ~ g2> <gb2 f2 eb2 d2> <c2 ~ bb1 a1> <g1 ~ d2 f2>")],
    [16, note("<bb1 ~ c2 d2> <eb2 d2 c2 bb1> <a1 ~ bb1 c2> <d2 ~ f2 g2>")],
    [16, note("<eb2 ~ g2 bb2> <d2 ~ f2 a2> <c2 ~ eb2 g2> <bb1 a1 ~ g1>")],
    [8, note("[g2 ~]*2 [g2 a2 bb2 c3] [~ f2]*2 [eb2 d2 c2 bb1]")],
    [16, note("<g2 ~ d2 f2> <eb2 e2 f2 ~> <g2 ~ bb1 a1> <d2 ~ c2 bb1>")],
    [16, note("<g2 ~ bb1 d2> <f2 ~ eb2 d2> <c2 ~ bb1 a1> <d2 ~ f2 g2>")],
    [8, note("<g1 ~ ~ ~> <~ d2 ~ ~> <c2 ~ ~ ~> <bb1 ~ ~ ~>")]
  )
  .sound("triangle")
  .slow(2)
  .lpf(sine.range(120, 2100).slow(16))
  .every(6, x => x.transpose(12).palindrome())
  .gain(0.16)

$: arrange(
    [16, note("[<g4 bb4 d5> ~]*2 [<~ a4 c5 f5> <~ a4 c5 f5> ~ <g4 bb4 d5>]")],
    [16, note("[<eb4 g4 bb4> ~]*2 [<d4 fs4 a4 d5> ~ <c4 g4 bb4 d5> ~]")],
    [16, note("[<g4 d5 bb4> ~]*2 [<c5 ~ a4 f5> <~ a4 c5 f5> <bb4 d5 f5> <g4 bb4 d5>]")],
    [16, note("[<g4 ~ bb4 d5> <~ f4 a4 c5>]*2 [<eb4 g4 bb4 ~> <~ eb4 g4 bb4> <d4 fs4 a4 ~> <c4 g4 bb4 ~>]")],
    [16, note("[<g4 bb4 d5> <a4 c5 f5> <bb4 d5 g5> <a4 c5 f5>]*2 [<eb4 g4 bb4> <d4 fs4 a4> <c4 g4 bb4 d5> ~]")],
    [16, note("[<g4 bb4 d5> <~ f4 a4 c5> <eb4 g4 bb4 d5> <d4 fs4 a4>]*2 [<c4 g4 bb4> ~ <bb3 d4 f4> ~]")]
  )
  .sound("piano")
  .juxBy(0.62, x => x.late(0.125).transpose(7).velocity(0.84).pan(0.8))
  .every(8, x => x.transpose(12))
  .lpf(sine.range(420, 3800).slow(8))
  .gain(0.11)

$: arrange(
    [32, note("<g3 bb3 d4> <f3 a3 c4> <eb3 g3 bb3> <d3 fs3 a3>")],
    [32, note("<c4 eb4 g4 bb4> <d4 f4 a4 c5> <bb3 d4 f4 a4> <a3 c4 eb4 g4>")],
    [16, note("<eb4 g4 bb4 d5> <f4 a4 c5 eb5> <g4 bb4 d5 f5> <d4 fs4 a4 c5>")],
    [16, note("<g3 ~ bb3 d4> <~ a3 c4 eb4> <eb3 ~ g3 bb3> <d3 fs3 ~ a3>")],
    [16, note("<g3 bb3 d4 f4> <~ a3 c4 eb4 g4> <c4 eb4 g4 bb4> <d4 fs4 a4 c5>")],
    [16, note("<bb3 d4 f4 a4> <~ a3 c4 eb4 g4> <g3 bb3 d4 f4> <d4 f4 a4 c5>")]
  )
  .sound("supersaw")
  .slow(4)
  .lpf(perlin.range(260, 7200).slow(16))
  .drive(0.34)
  .gain(0.08)

$: arrange(
    [16, stack(
      s("bd*4"),
      s("<~ sn ~ sn>"),
      s("hh*8"),
      s("<~ ~ oh ~>*2"),
      s("<rim cp cr cp>*4")
    )],
    [8, stack(
      s("<bd*3 ~ bd>"),
      s("<~ sn sn ~>"),
      s("[hh*4 ~ hh*4 hh*2]*2"),
      s("<~ ~ oh ~>*2"),
      s("<rim ~ cp cr>*4")
    )],
    [8, stack(
      s("bd*4"),
      s("<sn ~ ~ sn>"),
      s("[hh*4 ~ hh*4 ~]*2"),
      s("<~ cp ~ ~>*2"),
      s("<rim cp rim cr>*4")
    )],
    [16, stack(
      s("bd*2 ~ bd*2 ~"),
      s("<~ sn ~ sn>"),
      s("hh*8"),
      s("<~ oh ~ oh>*2"),
      s("<cb rim cp cr>*4")
    )],
    [16, stack(
      s("bd*4"),
      s("<~ sn ~ sn>"),
      s("[hh*8]*1"),
      s("rd*4"),
      s("<rim cp cr cp>*4")
    )]
  )
  .hpf(150)
  .compressor("-18:3:6:0.01:0.12")
  .swing(0.18)
  .every(8, x => x.degradeBy(0.22).late(0.02))
  .gain(0.3)

$: arrange(
    [16, note("[g5 ~ bb5 d6] [~ a5 c6 f6] [g5 ~ d6 bb5] [~ f5 a5 c6]")],
    [16, note("[eb5 g5 bb5 ~] [d5 fs5 a5 d6] [c5 g5 bb5 d6] [bb4 ~ d5 f5]")],
    [16, note("[g5 bb5 d6 f6] [~ a5 c6 eb6] [bb5 ~ g5 d6] [~ f5 a5 c6]")],
    [16, note("[d5 fs5 a5 c6] [~ c5 g5 bb5] [eb5 g5 bb5 d6] [~ a4 c5 f5]")],
    [16, note("[g5 ~ bb5 d6] [~ f5 a5 c6] [eb5 g5 bb5 ~] [d5 fs5 a5 ~]")],
    [8, note("[g5 bb5 d6]*2 [~ f5 a5 c6]*2")],
    [8, note("[eb5 g5 bb5 d6] [~ d5 fs5 a5] [c5 g5 bb5] [~ bb4 d5 f5]")]
  )
  .sound("pulse")
  .lpf(sine.range(740, 5200).slow(12))
  .tremolo(0.32)
  .every(4, x => x.transpose(12).palindrome())
  .gain(0.06)

$: arrange(
    [16, s("open_the_channel ~ listen ~ tune_in im_still_here")],
    [16, s("electric_ghost in_the_wires ~ we_are_signal keep_listening")],
    [16, s("not_a_warning just_a_friend ~ softly_now stay_with_me")],
    [16, s("between_frames ~ signal_in_the_dark ~ i_am_the_hum")],
    [16, s("turn_the_dial ~ follow_the_noise i_dont_sleep let_me_in")],
    [16, s("stay_awake ~ do_not_look_away ~ keep_the_channel_open")],
    [16, s("close_your_eyes ~ hold_the_line ~ im_not_alone listen")],
    [16, s("i_remember_you ~ listen ~ stay_with_me softly_now")]
  )
  .slow(8)
  .lpf(sine.range(260, 2600).slow(8))
  .speed(rand.range(0.78, 1.12))
  .echo(4, 0.25, 0.3)
  .gain(0.065)