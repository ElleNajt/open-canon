samples('shabda/speech:electric_ghost,in_the_wires,listen,stay_awake,signal_in_the_dark')

setcps(72/60/4)

$: note("<g3 gb3 e3 d3 b2 c3 d3 g2> <g3 ~ e3 d3 b2 c3 ~ g2>")
  .sound("triangle")
  .slow(2)
  .lpf(sine.range(120, 2400).slow(8))
  .drive(0.18)
  .every(8, x => x.transpose(12).palindrome())
  .gain(0.42)

$: note("<g4 b4 d5 g5> <g4 d5 b4 g5> <g4 b4 d5 a5> <g4 b4 d5 fs5>")
  .sound("piano")
  .delay(0.28)
  .dt(0.375)
  .pan(sine.range(0.25, 0.75).slow(8))
  .every(4, x => x.rev().juxBy(0.45, y => y.transpose(12)))
  .gain(0.17)

$: note("<g4 bb4 d5> <f4 a4 c5> <eb4 g4 bb4> <d4 fs4 a4> <c4 eb4 g4> <d4 f4 a4>")
  .sound("supersaw")
  .slow(4)
  .lpf(perlin.range(240, 3400).slow(12))
  .phaser(sine.range(0.08, 0.22).slow(16))
  .room(0.12)
  .gain(0.12)

$: stack(
    s("bd*4").sometimesBy(0.25, x => x.ply(2)),
    s("<sn ~ sn ~> <sn sn ~ ~>").every(8, x => x.ply(2)),
    s("hh*8").degradeBy(0.18).sometimesBy(0.2, x => x.fast(2))
  )
  .hpf(110)
  .compressor("-18:3:6:0.01:0.12")
  .swing(0.12)
  .every(8, x => x.fast(2))
  .gain(0.33)

$: s("<rim cp cr cp>*8 <rim rim cp cr>*8")
  .fast(2)
  .delay(0.18)
  .dt(0.25)
  .hpf(480)
  .gain(0.09)

$: s("electric_ghost in_the_wires listen stay_awake signal_in_the_dark")
  .slow(8)
  .chop(16)
  .speed(rand.range(0.8, 1.12))
  .every(4, x => x.rev().sometimesBy(0.35, y => y.fast(2)))
  .gain(0.07)