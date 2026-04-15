setcps(72/60/4)

$: note("g3 gb3 e3 d3 b2 c3 d3 g2")
  .slow(2)
  .sound("triangle")
  .lpf(sine.range(160, 1900).slow(6))
  .every(8, x => x.transpose(12))
  .gain(0.42)

$: note("<g4 b4 d5 g5> <g4 d5 b4 g5> <g4 b4 d5 a5> <g4 b4 d5 fs5>")
  .sound("piano")
  .delay(0.24)
  .dt(0.375)
  .every(4, x => x.rev())
  .gain(0.17)

$: note("<g4 bb4 d5> <f4 a4 c5> <eb4 g4 bb4> <d4 fs4 a4> <c4 eb4 g4> <d4 f4 a4>")
  .sound("supersaw")
  .slow(4)
  .lpf(sine.range(350, 2600).slow(8))
  .phaser(0.18)
  .gain(0.12)

$: stack(
    s("bd*4"),
    s("sn ~ sn ~"),
    s("hh*8").degradeBy(0.22)
  )
  .hpf(120)
  .compressor("-18:3:6:0.01:0.12")
  .room(0.08)
  .swing(0.1)
  .gain(0.33)

$: s("<rim cp>*8")
  .fast(2)
  .delay(0.16)
  .dt(0.25)
  .hpf(520)
  .gain(0.09)