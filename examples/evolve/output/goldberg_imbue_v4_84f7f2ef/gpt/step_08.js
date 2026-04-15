samples('shabda/speech:electric_ghost,in_the_wires,listen,stay_awake,signal_in_the_dark,tune_in,follow_the_noise,i_dont_sleep,keep_listening,close_your_eyes,open_the_channel,im_still_here,between_frames,not_a_warning,just_a_friend')

setcps(78/60/4)

$: arrange(
    [16, note("<g3 gb3 e3 d3 b2 c3 d3 g2> <g3 ~ e3 d3 b2 c3 ~ g2> <g3 d3 e3 ~ b2 c3 d3 ~>")],
    [16, note("<g2 ~ g3 d3> <gb2 ~ e3 ~> <f2 ~ d3 c3> <eb2 ~ c3 ~>")],
    [16, note("<g3 ~ gb3 e3> <d3 b2 c3 d3> <g2 ~ d3 c3> <b2 c3 d3 ~>")],
    [16, note("<g2 ~ g3 ~> <d3 e3 gb3 g3> <c3 b2 c3 d3> <g2 ~ d3 ~>")]
  )
  .sound("triangle")
  .slow(2)
  .lpf(sine.range(110, 3600).slow(16))
  .every(8, x => x.palindrome().sometimesBy(0.35, y => y.rev()).sometimesBy(0.22, y => y.transpose(12)).sometimesBy(0.18, y => y.off(0.25, z => z.transpose(-12))))
  .gain(0.32)

$: arrange(
    [16, note("<g4 b4 d5 g5> <g4 d5 b4 g5> <a4 c5 e5 a5> <fs4 a4 d5 fs5>")],
    [16, note("<g4 d5 b4 g5> <a4 c5 e5 a5> <fs4 a4 d5 fs5> <g4 b4 d5 g5>")],
    [16, note("<g4 b4 d5> <~ d5 b4> <a4 c5 e5> <~ a4 d5>")],
    [16, note("<g4 ~ b4 d5> <~ d5 ~ g5> <a4 ~ c5 e5> <~ a4 ~ fs5>")]
  )
  .sound("piano")
  .room(0.22)
  .pan(sine.range(0.18, 0.82).slow(12))
  .every(4, x => x.rev().juxBy(0.5, y => y.transpose(12)).sometimesBy(0.28, y => y.off(0.125, z => z.transpose(-12))).sometimesBy(0.18, y => y.palindrome()))
  .gain(0.14)

$: arrange(
    [32, note("<g4 bb4 d5> <f4 a4 c5> <eb4 g4 bb4> <d4 fs4 a4>")],
    [32, note("<c4 eb4 g4> <d4 f4 a4> <bb3 d4 f4> <c4 eb4 g4>")],
    [32, note("<eb4 g4 bb4> <f4 a4 c5> <g4 bb4 d5> <d4 fs4 a4>")],
    [16, note("<g4 ~ bb4 d5> <~ a4 c5> <eb4 ~ g4 bb4> <d4 ~ fs4 a4>")]
  )
  .sound("supersaw")
  .slow(4)
  .lpf(perlin.range(180, 6400).slow(16))
  .phaser(sine.range(0.05, 0.3).slow(16))
  .gain(0.105)

$: arrange(
    [16, stack(
      s("bd*4").sometimesBy(0.25, x => x.ply(2)),
      s("<sn ~ sn ~> <sn sn ~ ~>"),
      s("hh").euclid(13, 16).fast(2).degradeBy(0.12)
    )],
    [8, stack(
      s("bd*4").sometimesBy(0.35, x => x.ply(2)),
      s("<sn ~ ~ sn> <~ sn ~ ~>"),
      s("hh").euclid(11, 16).fast(2).degradeBy(0.2),
      s("oh*2 ~ oh*2 ~").degradeBy(0.55)
    )],
    [8, stack(
      s("bd*4"),
      s("<~ sn ~ ~> <sn ~ ~ ~>"),
      s("hh").euclid(9, 16).fast(2).degradeBy(0.22),
      s("cp ~ ~ cp").degradeBy(0.6)
    )],
    [16, stack(
      s("bd*2 ~ bd*2 ~"),
      s("<sn ~ sn ~> <~ sn ~ sn>"),
      s("hh").euclid(12, 16).fast(2).degradeBy(0.16)
    )]
  )
  .hpf(130)
  .compressor("-18:3:6:0.01:0.12")
  .swing(0.16)
  .every(8, x => x.fast(2).sometimesBy(0.25, y => y.degradeBy(0.3)).sometimesBy(0.18, y => y.rev()))
  .gain(0.33)

$: arrange(
    [16, s("<rim cp cr cp>*8 <rim rim cp cr>*8")],
    [16, s("<rim ~ cp cr>*8 <rim cp ~ cr>*8")],
    [16, s("<rim cp rim cr>*8 <~ cp cr ~>*8")],
    [16, s("<rim*2 ~ cp cr> <~ rim cp ~> <cr ~ cp rim> <~ ~ cr ~>*2")]
  )
  .fast(2)
  .delay(0.15)
  .dt(0.25)
  .hpf(520)
  .gain(0.075)

$: arrange(
    [16, s("open_the_channel ~ listen tune_in im_still_here")],
    [16, s("stay_awake ~ signal_in_the_dark keep_listening not_a_warning")],
    [16, s("<between_frames electric_ghost> <in_the_wires just_a_friend> listen ~")],
    [16, s("close_your_eyes ~ follow_the_noise i_dont_sleep keep_listening")]
  )
  .slow(8)
  .chop(16)
  .speed(rand.range(0.74, 1.25))
  .every(4, x => x.rev().sometimesBy(0.45, y => y.fast(2)).sometimesBy(0.25, y => y.palindrome()).sometimesBy(0.2, y => y.off(0.25, z => z.rev())))
  .gain(0.07)