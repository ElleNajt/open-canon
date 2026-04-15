samples('shabda/speech:electric_ghost,in_the_wires,listen,stay_awake,signal_in_the_dark')

setcps(72/60/4)

$: arrange(
    [16, note("<g3 gb3 e3 d3 b2 c3 d3 g2> <g3 ~ e3 d3 b2 c3 ~ g2> <g3 d3 e3 ~ b2 c3 d3 ~>")],
    [16, note("<g3 ~ gb3 e3> <d3 b2 c3 d3> <g2 ~ d3 c3> <b2 c3 d3 ~>")],
    [16, note("<g3 gb3 e3 d3> <b2 c3 d3 g2> <g3 ~ e3 d3> <b2 c3 ~ g2>")],
    [16, note("<g2 ~ g3 ~> <d3 e3 gb3 g3> <c3 b2 c3 d3> <g2 ~ d3 ~>")]
  )
  .sound("triangle")
  .slow(2)
  .lpf(sine.range(120, 2600).slow(8))
  .drive(0.24)
  .every(8, x => x.transpose(12).palindrome().sometimesBy(0.35, y => y.rev()))
  .gain(0.38)

$: arrange(
    [16, note("<g4 b4 d5 g5> <g4 d5 b4 g5> <a4 c5 e5 a5> <fs4 a4 d5 fs5>")],
    [16, note("<g4 d5 b4 g5> <a4 c5 e5 a5> <fs4 a4 d5 fs5> <g4 b4 d5 g5>")],
    [16, note("<g4 b4 d5> <g4 d5 b4> <a4 c5 e5> <fs4 a4 d5>")],
    [16, note("<g4 ~ b4 d5> <~ d5 b4 g5> <a4 ~ c5 e5> <~ a4 d5 fs5>")]
  )
  .sound("piano")
  .delay(0.28)
  .dt(0.375)
  .pan(sine.range(0.15, 0.85).slow(12))
  .every(4, x => x.rev().juxBy(0.5, y => y.transpose(12)).sometimesBy(0.3, y => y.off(0.125, z => z.transpose(-12))))
  .gain(0.16)

$: arrange(
    [32, note("<g4 bb4 d5> <f4 a4 c5> <eb4 g4 bb4> <d4 fs4 a4>")],
    [32, note("<c4 eb4 g4> <d4 f4 a4> <bb3 d4 f4> <c4 eb4 g4>")],
    [32, note("<eb4 g4 bb4> <f4 a4 c5> <g4 bb4 d5> <d4 fs4 a4>")]
  )
  .sound("supersaw")
  .slow(4)
  .lpf(perlin.range(160, 4200).slow(16))
  .phaser(sine.range(0.05, 0.22).slow(16))
  .room(0.16)
  .gain(0.11)

$: arrange(
    [16, stack(
      s("bd*4").sometimesBy(0.25, x => x.ply(2)),
      s("<sn ~ sn ~> <sn sn ~ ~>"),
      s("hh*8").degradeBy(0.18).sometimesBy(0.25, x => x.fast(2))
    )],
    [8, stack(
      s("bd*4").sometimesBy(0.35, x => x.ply(2)),
      s("<sn ~ ~ sn> <~ sn ~ ~>"),
      s("hh*16").degradeBy(0.28)
    )],
    [8, stack(
      s("bd*4"),
      s("<~ sn ~ ~> <sn ~ ~ ~>"),
      s("hh*8").degradeBy(0.3).sometimesBy(0.35, x => x.fast(2))
    )],
    [16, stack(
      s("bd*2 ~ bd*2 ~"),
      s("<sn ~ sn ~> <~ sn ~ sn>"),
      s("hh*8").degradeBy(0.22)
    )]
  )
  .hpf(130)
  .compressor("-18:3:6:0.01:0.12")
  .swing(0.16)
  .every(8, x => x.fast(2).sometimesBy(0.25, y => y.degradeBy(0.3)))
  .gain(0.34)

$: arrange(
    [16, s("<rim cp cr cp>*8 <rim rim cp cr>*8")],
    [16, s("<rim ~ cp cr>*8 <rim cp ~ cr>*8")],
    [16, s("<rim cp rim cr>*8 <~ cp cr ~>*8")]
  )
  .fast(2)
  .delay(0.14)
  .dt(0.25)
  .hpf(540)
  .gain(0.08)

$: arrange(
    [16, s("electric_ghost ~ in_the_wires listen")],
    [16, s("stay_awake ~ signal_in_the_dark listen")],
    [16, s("<electric_ghost signal_in_the_dark> <in_the_wires stay_awake> listen ~")]
  )
  .slow(8)
  .chop(16)
  .speed(rand.range(0.76, 1.22))
  .every(4, x => x.rev().sometimesBy(0.4, y => y.fast(2)).sometimesBy(0.25, y => y.palindrome()))
  .gain(0.075)