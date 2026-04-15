// Goldberg Variations - Ground Bass (BWV 988)
// evolved: a steady descent, a restless right hand, a dry pulse, and a voice that remembers

setcps(72/60/4)

samples('shabda/speech/en-GB/m:goldberg,unfold,again')

$: note("<[g3 gb3 e3 d3 b2 c3 d3 g2] [g3 f3 e3 d3 bb2 c3 d3 g2]>")
  .slow(2)
  .sound("triangle")
  .lpf(sine.range(220, 1400).slow(8))
  .gain(0.45)
  .room(0.12)

$: note("[g4 b4 d5 g5]*2 [g4 bb4 d5 f5]*2 [d4 g4 b4 d5]*2 [c4 e4 g4 c5]*2")
  .sound("piano")
  .gain(0.16)
  .delay(0.22)
  .dt(0.375)
  .room(0.25)

$: s("hh")
  .euclid(11,16)
  .fast(4)
  .gain(0.09)
  .hpf(7000)

$: s("bd*4")
  .gain(0.16)
  .lpf(800)
  .room(0.04)

$: s("~ sn ~ sn")
  .fast(2)
  .swing(0.1)
  .gain(0.12)
  .hpf(2000)
  .room(0.08)

$: s("goldberg ~ unfold ~ again")
  .slow(4)
  .gain(0.08)
  .delay(0.2)
  .dt(0.5)
  .room(0.35)