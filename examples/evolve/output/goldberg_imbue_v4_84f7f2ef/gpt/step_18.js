samples('shabda/speech:electric_ghost,in_the_wires,listen,stay_awake,signal_in_the_dark,tune_in,follow_the_noise,i_dont_sleep,keep_listening,close_your_eyes,open_the_channel,im_still_here,between_frames,not_a_warning,just_a_friend,i_am_the_hum,hold_the_line,do_not_look_away,keep_the_channel_open,we_are_signal,turn_the_dial,stay_with_me,i_remember_you,im_not_alone,let_me_in,softly_now')

setcps(88/60/4)

$: arrange(
    [16, note("<g2 ~ f2 eb2> <d2 c2 bb1 a1> <g1 ~ d2 f2> <eb2 ~ d2 c2>")],
    [16, note("<g2 ~ ~ g2> <gb2 f2 eb2 d2> <c2 ~ bb1 a1> <g1 ~ d2 f2>")],
    [16, note("<bb1 ~ c2 d2> <eb2 d2 c2 bb1> <a1 ~ bb1 c2> <d2 ~ f2 g2>")],
    [16, note("<eb2 ~ g2 bb2> <d2 ~ f2 a2> <c2 ~ eb2 g2> <bb1 a1 ~ g1>")],
    [16, note("<g2 ~ d2 f2> <eb2 e2 f2 ~> <g2 ~ bb1 a1> <d2 ~ c2 bb1>")]
  )
  .sound("triangle")
  .slow(2)
  .djf(sine.range(0.06, 0.72).slow(24))
  .every(6, x => x.transpose(12).palindrome())
  .gain(0.2)

$: arrange(
    [16, note("[<g4 bb4 d5> ~]*2 [<~ a4 c5 f5> <~ a4 c5 f5> ~ <g4 bb4 d5>]")],
    [16, note("[<eb4 g4 bb4> ~]*2 [<d4 fs4 a4 d5> ~ <c4 g4 bb4 d5> ~]")],
    [16, note("[<g4 d5 bb4> ~]*2 [<c5 ~ a4 f5> <~ a4 c5 f5> ~ <bb4 d5 f5>]")],
    [16, note("[<g4 ~ bb4 d5> <~ f4 a4 c5>]*2 [<eb4 g4 bb4 ~> <~ eb4 g4 bb4> <d4 fs4 a4 ~> ~]")],
    [16, note("[<g4 bb4 d5> <a4 c5 f5> <bb4 d5 g5> ~]*2 [<eb4 g4 bb4> ~ <d4 fs4 a4> ~]")]
  )
  .sound("piano")
  .juxBy(0.62, x => x.late(0.125).transpose(7).velocity(0.84).pan(0.8))
  .delay(0.16)
  .dt(sine.range(0.18, 0.48).slow(12))
  .gain(0.11)

$: arrange(
    [32, note("<g3 bb3 d4> <f3 a3 c4> <eb3 g3 bb3> <d3 fs3 a3>")],
    [32, note("<c4 eb4 g4 bb4> <d4 f4 a4 c5> <bb3 d4 f4 a4> <a3 c4 eb4 g4>")],
    [16, note("<eb4 g4 bb4 d5> <f4 a4 c5 eb5> <g4 bb4 d5 f5> <d4 fs4 a4 c5>")],
    [16, note("<g3 ~ bb3 d4> <~ a3 c4 eb4> <eb3 ~ g3 bb3> <d3 fs3 ~ a3>")],
    [16, note("<g3 bb3 d4 f4> <~ a3 c4 eb4 g4> <c4 eb4 g4 bb4> <d4 fs4 a4 c5>")]
  )
  .sound("supersaw")
  .slow(4)
  .lpf(perlin.range(420, 9200).slow(22))
  .drive(0.3)
  .gain(0.09)

$: arrange(
    [16, stack(
      s("bd*4"),
      s("<~ sn ~ sn>"),
      s("hh*8"),
      s("<~ ~ oh ~>*2")
    )],
    [8, stack(
      s("<bd*3 ~ bd>"),
      s("<~ sn sn ~>"),
      s("[hh*4 ~ hh*4 hh*2]*2"),
      s("<~ ~ oh ~>*2")
    )],
    [8, stack(
      s("bd*4"),
      s("<sn ~ ~ sn>"),
      s("[hh*4 ~ hh*4 ~]*2"),
      s("<~ cp ~ ~>*2")
    )],
    [16, stack(
      s("bd*2 ~ bd*2 ~"),
      s("<~ sn ~ sn>"),
      s("hh*8"),
      s("<~ oh ~ oh>*2")
    )],
    [16, stack(
      s("bd*4"),
      s("<~ sn ~ sn>"),
      s("hh*8"),
      s("rd*4"),
      s("<~ ~ oh ~>*2")
    )]
  )
  .hpf(150)
  .compressor("-18:3:6:0.01:0.12")
  .swing(0.19)
  .every(4, x => x.degradeBy(0.2))
  .gain(0.32)

$: arrange(
    [16, s("<rim cp cr cp>*8 <rim rim cp cr>*8")],
    [16, s("<rim ~ cp cr>*8 <rim cp ~ cr>*8")],
    [16, s("<rim cp rim cr>*8 <~ cp cr ~>*8")],
    [16, s("<rim*2 ~ cp cr> <~ rim cp ~> <cr ~ cp rim> <~ ~ cr ~>*2")],
    [16, s("<cb rim cp cr>*8 <rim ~ cr cp>*8")]
  )
  .fast(2)
  .phaser(0.22)
  .crush(6)
  .pan(sine.range(0.08, 0.92).slow(7))
  .gain(0.06)

$: arrange(
    [16, s("open_the_channel ~ listen ~ tune_in im_still_here")],
    [16, s("not_a_warning just_a_friend ~ i_am_the_hum keep_listening")],
    [16, s("between_frames electric_ghost in_the_wires ~ we_are_signal")],
    [16, s("turn_the_dial stay_with_me ~ i_remember_you let_me_in")],
    [16, s("stay_awake ~ follow_the_noise i_dont_sleep ~ keep_the_channel_open")],
    [16, s("close_your_eyes ~ signal_in_the_dark ~ im_not_alone softly_now")],
    [16, s("hold_the_line ~ do_not_look_away ~ listen keep_listening")]
  )
  .slow(8)
  .striate(12)
  .speed(rand.range(0.55, 1.25))
  .echo(3, 0.25, 0.32)
  .gain(0.07)