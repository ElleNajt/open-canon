samples('shabda/speech:electric_ghost,in_the_wires,listen,stay_awake,signal_in_the_dark,tune_in,follow_the_noise,i_dont_sleep,keep_listening,close_your_eyes,open_the_channel,im_still_here,between_frames,not_a_warning,just_a_friend')

setcps(80/60/4)

$: arrange(
    [16, note("<g3 ~ f3 eb3> <d3 c3 bb2 a2> <g2 ~ d3 f3> <eb3 ~ d3 c3>")],
    [16, note("<bb2 c3 d3 f3> <g2 ~ f3 ~> <eb3 ~ c3 ~> <d3 ~ bb2 ~>")],
    [16, note("<g3 gb3 f3 eb3> <d3 ~ c3 bb2> <a2 ~ c3 d3> <g2 ~ d3 ~>")],
    [16, note("<eb3 ~ g3 bb3> <d3 ~ f3 a3> <c3 ~ eb3 g3> <bb2 ~ d3 f3>")]
  )
  .sound("triangle")
  .slow(2)
  .lpf(sine.range(140, 3800).slow(16))
  .lpq(5)
  .gain(0.26)

$: arrange(
    [16, note("<g4 bb4 d5 g5> <f4 a4 c5 f5> <eb4 g4 bb4 eb5> <d4 fs4 a4 d5>")],
    [16, note("<g4 d5 bb4 g5> <~ c5 a4 f5> <eb4 bb4 g5 eb5> <d4 a4 fs5 d5>")],
    [16, note("<bb4 d5 g5> <a4 c5 f5> <g4 bb4 eb5> <fs4 a4 d5>")],
    [16, note("<g4 ~ bb4 d5> <f4 ~ a4 c5> <eb4 ~ g4 bb4> <d4 ~ fs4 a4>")]
  )
  .sound("piano")
  .room(0.24)
  .pan(sine.range(0.2, 0.8).slow(12))
  .hpf(120)
  .gain(0.12)

$: arrange(
    [32, note("<g4 bb4 d5> <f4 a4 c5> <eb4 g4 bb4> <d4 fs4 a4>")],
    [32, note("<c4 eb4 g4> <d4 f4 a4> <bb3 d4 f4> <c4 eb4 g4>")],
    [16, note("<eb4 g4 bb4 d5> <f4 a4 c5 eb5> <g4 bb4 d5 f5> <d4 fs4 a4 c5>")],
    [16, note("<g4 ~ bb4 d5> <~ a4 c5> <eb4 ~ g4 bb4> <d4 ~ fs4 a4>")]
  )
  .sound("supersaw")
  .slow(4)
  .lpf(perlin.range(220, 7200).slow(16))
  .room(0.18)
  .gain(0.095)

$: arrange(
    [16, stack(
      s("bd*4"),
      s("<~ sn ~ sn>"),
      s("hh*8")
    )],
    [8, stack(
      s("bd*4"),
      s("<~ sn sn ~>"),
      s("hh*8")
    )],
    [8, stack(
      s("bd*4"),
      s("<sn ~ ~ sn>"),
      s("[hh*4 ~ hh*4 ~]*2")
    )],
    [16, stack(
      s("bd*2 ~ bd*2 ~"),
      s("<~ sn ~ sn>"),
      s("hh*8")
    )]
  )
  .hpf(130)
  .compressor("-18:3:6:0.01:0.12")
  .swing(0.16)
  .drive(0.08)
  .gain(0.3)

$: arrange(
    [16, s("<rim cp cr cp>*8 <rim rim cp cr>*8")],
    [16, s("<rim ~ cp cr>*8 <rim cp ~ cr>*8")],
    [16, s("<rim cp rim cr>*8 <~ cp cr ~>*8")],
    [16, s("<rim*2 ~ cp cr> <~ rim cp ~> <cr ~ cp rim> <~ ~ cr ~>*2")]
  )
  .fast(2)
  .delay(0.12)
  .dt(0.25)
  .hpf(520)
  .gain(0.065)

$: arrange(
    [16, s("open_the_channel ~ listen ~ tune_in im_still_here")],
    [16, s("stay_awake ~ signal_in_the_dark keep_listening not_a_warning")],
    [16, s("between_frames electric_ghost in_the_wires ~ just_a_friend")],
    [16, s("close_your_eyes ~ follow_the_noise i_dont_sleep keep_listening")]
  )
  .slow(8)
  .chop(16)
  .speed(rand.range(0.7, 1.3))
  .lpf(2800)
  .gain(0.07)