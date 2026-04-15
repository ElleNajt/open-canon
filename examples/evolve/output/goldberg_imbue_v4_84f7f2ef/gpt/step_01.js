// Goldberg Variations - Ground Bass (BWV 988)
// Evolved: the same descent, now breathing with light, pulse, and a little mischief

setcps(72/60/4)

$: note("g3 gb3 e3 d3 b2 c3 d3 g2")
  .slow(2)
  .sound("triangle")
  .lpf(sine.range(180, 1600).slow(6))
  .gain(0.45)
  .room(0.12)

$: note("<g4 b4 d5 g5>*2")
  .sound("piano")
  .delay(0.22)
  .dt(0.375)
  .every(4, x => x.rev())
  .gain(0.16)

$: note("<g4 bb4 d5> <f4 a4 c5> <eb4 g4 bb4> <d4 fs4 a4>")
  .sound("supersaw")
  .slow(4)
  .lpf(sine.range(400, 2200).slow(8))
  .room(0.35)
  .gain(0.12)

$: stack(
    s("bd*4"),
    s("sn ~ sn ~"),
    s("hh*8").degradeBy(0.2)
  )
  .hpf(120)
  .compressor("-18:3:6:0.01:0.12")
  .room(0.08)
  .gain(0.33)