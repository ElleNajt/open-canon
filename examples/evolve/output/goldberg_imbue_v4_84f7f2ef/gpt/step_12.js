samples('shabda/speech:electric_ghost,in_the_wires,listen,stay_awake,signal_in_the_dark,tune_in,follow_the_noise,i_dont_sleep,keep_listening,close_your_eyes,open_the_channel,im_still_here,between_frames,not_a_warning,just_a_friend,i_am_the_hum,hold_the_line,do_not_look_away,keep_the_channel_open,we_are_signal')

setcps(80/60/4)

$: arrange(
    [16, note("<g2 ~ f2 eb2> <d2 c2 bb1 a1> <g1 ~ d2 f2> <eb2 ~ d2 c2>")],
    [16, note("<g2 f2 eb2 d2> <c2 ~ bb1 a1> <g1 ~ bb1 d2> <f2 ~ eb2 d2>")],
    [16, note("<g2 ~ gb2 f2> <eb2 d2 c2 bb1> <a1 ~ c2 d2> <g1 ~ d2 f2>")],
    [16, note("<eb2 ~ g2 bb2> <d2 ~ f2 a2> <c2 ~ eb2 g2> <bb1 a1 ~ g1>")]
  )
  .sound("triangle")
  .slow(2)
  .lpf(sine.range(120, 2800).slow(10))
  .lpq(6)
  .gain(0.24)

$: arrange(
    [16, note("<g4 bb4 d5 ~> <~ a4 c5 f5> <eb4 g4 bb4 ~> <d4 fs4 a4 d5>")],
    [16, note("<g4 d5 bb4 ~> <c5 ~ a4 f5> <eb4 ~ bb4 g5> <~ a4 fs5 d5>")],
    [16, note("<bb4 ~ g5> <a4 c5 f5> <g4 bb4 eb5> <~ fs4 a4 d5>")],
    [16, note("<g4 ~ bb4 d5> <~ f4 a4 c5> <eb4 g4 ~ bb4> <d4 ~ fs4 a4>")]
  )
  .sound("piano")
  .juxBy(0.65, x => x.late(0.125).transpose(12).velocity(0.85))
  .delay(0.12)
  .dt(0.375)
  .gain(0.105)

$: arrange(
    [32, note("<g3 bb3 d4> <f3 a3 c4> <eb3 g3 bb3> <d3 fs3 a3>")],
    [32, note("<c4 eb4 g4 bb4> <d4 f4 a4 c5> <bb3 d4 f4 a4> <c4 eb4 g4 ~>")],
    [16, note("<eb4 g4 bb4 d5> <f4 a4 c5 eb5> <g4 bb4 d5 f5> <d4 fs4 a4 c5>")],
    [16, note("<g3 ~ bb3 d4> <~ a3 c4> <eb3 ~ g3 bb3> <d3 fs3 ~ a3>")]
  )
  .sound("supersaw")
  .slow(4)
  .lpf(perlin.range(200, 6800).slow(16))
  .phaser(0.2)
  .gain(0.09)

$: arrange(
    [16, stack(
      s("bd*4"),
      s("<~ sn ~ sn>"),
      s("hh*8"),
      s("<~ ~ oh ~>*2")
    )],
    [8, stack(
      s("bd*4"),
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
      s("<~ ~ oh ~>*2")
    )]
  )
  .hpf(130)
  .compressor("-18:3:6:0.01:0.12")
  .swing(0.16)
  .every(4, x => x.degradeBy(0.12))
  .gain(0.3)

$: arrange(
    [16, s("<rim cp cr cp>*8 <rim rim cp cr>*8")],
    [16, s("<rim ~ cp cr>*8 <rim cp ~ cr>*8")],
    [16, s("<rim cp rim cr>*8 <~ cp cr ~>*8")],
    [16, s("<rim*2 ~ cp cr> <~ rim cp ~> <cr ~ cp rim> <~ ~ cr ~>*2")]
  )
  .fast(2)
  .off(0.125, x => x.rev())
  .crush(6)
  .delay(0.1)
  .gain(0.06)

$: arrange(
    [16, s("open_the_channel ~ listen ~ tune_in im_still_here")],
    [16, s("not_a_warning just_a_friend ~ i_am_the_hum keep_listening")],
    [16, s("between_frames electric_ghost in_the_wires ~ we_are_signal")],
    [16, s("close_your_eyes ~ stay_awake do_not_look_away keep_the_channel_open")]
  )
  .slow(8)
  .chop(16)
  .speed(rand.range(0.6, 1.25))
  .vowel("a e i o u")
  .gain(0.07)